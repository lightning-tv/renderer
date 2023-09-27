/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2023 Comcast
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  assertTruthy,
  createWebGLContext,
  hasOwn,
  mergeColorAlphaPremultiplied,
} from '../../../utils.js';
import {
  CoreRenderer,
  type QuadOptions as QuadOptions,
} from '../CoreRenderer.js';
import { WebGlCoreRenderOp } from './WebGlCoreRenderOp.js';
import type { CoreContextTexture } from '../CoreContextTexture.js';
import {
  createIndexBuffer,
  type CoreWebGlParameters,
  type CoreWebGlExtensions,
  getWebGlParameters,
  getWebGlExtensions,
} from './internal/RendererUtils.js';
import { WebGlCoreCtxTexture } from './WebGlCoreCtxTexture.js';
import { Texture } from '../../textures/Texture.js';
import { ColorTexture } from '../../textures/ColorTexture.js';
import type { Stage } from '../../Stage.js';
import { SubTexture } from '../../textures/SubTexture.js';
import { WebGlCoreCtxSubTexture } from './WebGlCoreCtxSubTexture.js';
import type {
  CoreTextureManager,
  TextureOptions,
} from '../../CoreTextureManager.js';
import { CoreShaderManager } from '../../CoreShaderManager.js';
import type { CoreShader } from '../CoreShader.js';
import { BufferCollection } from './internal/BufferCollection.js';
import { getNormalizedRgbaComponents, type Rect } from '../../lib/utils.js';
import type { Dimensions } from '../../../common/CommonTypes.js';
import { WebGlCoreShader } from './WebGlCoreShader.js';
import { RoundedRectangle } from './shaders/RoundedRectangle.js';

const WORDS_PER_QUAD = 24;
const BYTES_PER_QUAD = WORDS_PER_QUAD * 4;

export interface WebGlCoreRendererOptions {
  stage: Stage;
  canvas: HTMLCanvasElement | OffscreenCanvas;
  pixelRatio: number;
  txManager: CoreTextureManager;
  shManager: CoreShaderManager;
  clearColor: number;
  bufferMemory: number;
}

interface CoreWebGlSystem {
  parameters: CoreWebGlParameters;
  extensions: CoreWebGlExtensions;
}

export class WebGlCoreRenderer extends CoreRenderer {
  //// WebGL Native Context and Data
  gl: WebGLRenderingContext;
  system: CoreWebGlSystem;

  //// Core Managers
  txManager: CoreTextureManager;
  shManager: CoreShaderManager;

  //// Options
  options: Required<WebGlCoreRendererOptions>;

  //// Persistent data
  quadBuffer: ArrayBuffer = new ArrayBuffer(1024 * 1024 * 4);
  fQuadBuffer: Float32Array = new Float32Array(this.quadBuffer);
  uiQuadBuffer: Uint32Array = new Uint32Array(this.quadBuffer);
  renderOps: WebGlCoreRenderOp[] = [];

  //// Render Op / Buffer Filling State
  curBufferIdx = 0;
  curRenderOp: WebGlCoreRenderOp | null = null;
  renderables: Array<QuadOptions | WebGlCoreRenderOp> = [];

  //// Default Shader
  defaultShader: WebGlCoreShader;
  quadBufferCollection: BufferCollection;

  /**
   * White pixel texture used by default when no texture is specified.
   */
  defaultTexture: Texture;

  constructor(options: WebGlCoreRendererOptions) {
    super(options.stage);
    const { canvas, clearColor, bufferMemory } = options;
    this.options = options;
    this.txManager = options.txManager;
    this.shManager = options.shManager;
    this.defaultTexture = new ColorTexture(this.txManager);

    const gl = createWebGLContext(canvas);
    if (!gl) {
      throw new Error('Unable to create WebGL context');
    }
    this.gl = gl;

    const color = getNormalizedRgbaComponents(clearColor);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(color[0]!, color[1]!, color[2]!, color[3]!);

    createIndexBuffer(gl, bufferMemory);

    this.system = {
      parameters: getWebGlParameters(gl),
      extensions: getWebGlExtensions(gl),
    };
    this.shManager.renderer = this;
    this.defaultShader = this.shManager.loadShader(
      'DefaultShaderBatched',
    ).shader;
    const quadBuffer = gl.createBuffer();
    assertTruthy(quadBuffer);
    const stride = 6 * Float32Array.BYTES_PER_ELEMENT;
    this.quadBufferCollection = new BufferCollection([
      {
        buffer: quadBuffer,
        attributes: {
          a_position: {
            name: 'a_position',
            size: 2, // 2 components per iteration
            type: gl.FLOAT, // the data is 32bit floats
            normalized: false, // don't normalize the data
            stride, // 0 = move forward size * sizeof(type) each iteration to get the next position
            offset: 0, // start at the beginning of the buffer
          },
          a_textureCoordinate: {
            name: 'a_textureCoordinate',
            size: 2,
            type: gl.FLOAT,
            normalized: false,
            stride,
            offset: 2 * Float32Array.BYTES_PER_ELEMENT,
          },
          a_color: {
            name: 'a_color',
            size: 4,
            type: gl.UNSIGNED_BYTE,
            normalized: true,
            stride,
            offset: 4 * Float32Array.BYTES_PER_ELEMENT,
          },
          a_textureIndex: {
            name: 'a_textureIndex',
            size: 1,
            type: gl.FLOAT,
            normalized: false,
            stride,
            offset: 5 * Float32Array.BYTES_PER_ELEMENT,
          },
        },
      },
    ]);
  }

  reset() {
    this.curBufferIdx = 0;
    this.curRenderOp = null;
    this.renderOps.length = 0;
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  override getShaderManager(): CoreShaderManager {
    return this.shManager;
  }

  override createCtxTexture(textureSource: Texture): CoreContextTexture {
    if (textureSource instanceof SubTexture) {
      return new WebGlCoreCtxSubTexture(this.gl, textureSource);
    }
    return new WebGlCoreCtxTexture(this.gl, textureSource);
  }

  /**
   * Add a renderable to the current set of renderables.
   *
   * @remarks
   * If a {@link QuadOptions} structure is provided, this will ultimately result
   * in a render ops being created, merged and added to the render ops list.
   *
   * If a direct {@link WebGlCoreRenderOp} instance is provided, it will be
   * added to the render ops list as-is. Be sure to set the zIndex correctly of
   * the render op to ensure proper rendering order.
   *
   * @param renderable
   */
  override addRenderable(renderable: QuadOptions | WebGlCoreRenderOp) {
    this.renderables?.push(renderable);
  }

  private addQuad(params: QuadOptions) {
    const { fQuadBuffer, uiQuadBuffer } = this;
    const {
      width,
      height,
      colorTl,
      colorTr,
      colorBl,
      colorBr,
      textureOptions,
      shader,
      shaderProps,
      alpha,
      wpx,
      wpy,
      ta,
      tb,
      tc,
      td,
    } = params;
    let { texture } = params;

    /**
     * If the shader props contain any automatic properties, update it with the
     * current dimensions that will be used to render the quad.
     */
    if (shaderProps && hasOwn(shaderProps, '$dimensions')) {
      const dimensions = shaderProps.$dimensions as Dimensions;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      dimensions.width = width;
      dimensions.height = height;
    }

    texture = texture ?? this.defaultTexture;
    assertTruthy(texture instanceof Texture, 'Invalid texture type');

    let { curBufferIdx: bufferIdx, curRenderOp } = this;
    const targetDims = {
      width,
      height,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    };
    const targetShader = shader || this.defaultShader;
    assertTruthy(targetShader instanceof WebGlCoreShader);
    if (curRenderOp) {
      // If the current render op is not the same shader, create a new one
      // If the current render op's shader props are not compatible with the
      // the new shader props, create a new one render op.
      if (curRenderOp.shader !== targetShader) {
        curRenderOp = null;
      } else if (
        curRenderOp.shader !== this.defaultShader &&
        (!shaderProps ||
          !curRenderOp.shader.canBatchShaderProps(
            curRenderOp.shaderProps,
            shaderProps,
          ))
      ) {
        curRenderOp = null;
      }
    }
    assertTruthy(targetShader instanceof WebGlCoreShader);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    if (!curRenderOp) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.newRenderOp(targetShader, shaderProps as any, targetDims, bufferIdx);
      curRenderOp = this.curRenderOp;
      assertTruthy(curRenderOp);
    }

    const flipX = textureOptions?.flipX ?? false;
    const flipY = textureOptions?.flipY ?? false;

    let texCoordX1 = 0;
    let texCoordY1 = 0;
    let texCoordX2 = 1;
    let texCoordY2 = 1;

    if (texture instanceof SubTexture) {
      const { x: tx, y: ty, width: tw, height: th } = texture.props;
      const { width: parentW = 0, height: parentH = 0 } = texture.parentTexture
        .dimensions || { width: 0, height: 0 };
      texCoordX1 = tx / parentW;
      texCoordX2 = texCoordX1 + tw / parentW;
      texCoordY1 = ty / parentH;
      texCoordY2 = texCoordY1 + th / parentH;
      texture = texture.parentTexture;
    }

    // Flip texture coordinates if dictated by texture options
    if (flipX) {
      [texCoordX1, texCoordX2] = [texCoordX2, texCoordX1];
    }
    if (flipY) {
      [texCoordY1, texCoordY2] = [texCoordY2, texCoordY1];
    }

    const { txManager } = this.stage;
    const ctxTexture = txManager.getCtxTexture(texture);
    assertTruthy(ctxTexture instanceof WebGlCoreCtxTexture);
    const textureIdx = this.addTexture(ctxTexture, bufferIdx);
    curRenderOp = this.curRenderOp;
    assertTruthy(curRenderOp);

    // render quad advanced
    if (tb !== 0 || tc !== 0) {
      // Upper-Left
      fQuadBuffer[bufferIdx++] = wpx; // vertexX
      fQuadBuffer[bufferIdx++] = wpy; // vertexY
      fQuadBuffer[bufferIdx++] = texCoordX1; // texCoordX
      fQuadBuffer[bufferIdx++] = texCoordY1; // texCoordY
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorTl,
        alpha,
        true,
      ); // color
      fQuadBuffer[bufferIdx++] = textureIdx; // texIndex

      // Upper-Right
      fQuadBuffer[bufferIdx++] = wpx + width * ta;
      fQuadBuffer[bufferIdx++] = wpy + width * tc;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorTr,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;

      // Lower-Left
      fQuadBuffer[bufferIdx++] = wpx + height * tb;
      fQuadBuffer[bufferIdx++] = wpy + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorBl,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;

      // Lower-Right
      fQuadBuffer[bufferIdx++] = wpx + width * ta + height * tb;
      fQuadBuffer[bufferIdx++] = wpy + width * tc + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorBr,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;
    } else {
      // Calculate the right corner of the quad
      // multiplied by the scale
      const rightCornerX = wpx + width * ta;
      const rightCornerY = wpy + height * td;

      // Upper-Left
      fQuadBuffer[bufferIdx++] = wpx; // vertexX
      fQuadBuffer[bufferIdx++] = wpy; // vertexY
      fQuadBuffer[bufferIdx++] = texCoordX1; // texCoordX
      fQuadBuffer[bufferIdx++] = texCoordY1; // texCoordY
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorTl,
        alpha,
        true,
      ); // color
      fQuadBuffer[bufferIdx++] = textureIdx; // texIndex

      // Upper-Right
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = wpy;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorTr,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;

      // Lower-Left
      fQuadBuffer[bufferIdx++] = wpx;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorBl,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;

      // Lower-Right
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = mergeColorAlphaPremultiplied(
        colorBr,
        alpha,
        true,
      );
      fQuadBuffer[bufferIdx++] = textureIdx;
    }

    // Update the length of the current render op
    curRenderOp.length += WORDS_PER_QUAD;
    curRenderOp.numQuads++;
    this.curBufferIdx = bufferIdx;
  }

  /**
   * Replace the existing RenderOp with a new one that uses the specified Shader
   * and starts at the specified buffer index.
   *
   * @param shader
   * @param bufferIdx
   */
  private newRenderOp(
    shader: WebGlCoreShader,
    shaderProps: Record<string, unknown>,
    dimensions: Dimensions,
    bufferIdx: number,
  ) {
    const curRenderOp = new WebGlCoreRenderOp(
      this.gl,
      this.options,
      this.quadBufferCollection,
      shader,
      shaderProps,
      dimensions,
      bufferIdx,
      0, // Z-Index is only used for explictly added Render Ops
    );
    this.curRenderOp = curRenderOp;
    this.renderOps.push(curRenderOp);
  }

  /**
   * Add a texture to the current RenderOp. If the texture cannot be added to the
   * current RenderOp, a new RenderOp will be created and the texture will be added
   * to that one.
   *
   * If the texture cannot be added to the new RenderOp, an error will be thrown.
   *
   * @param texture
   * @param bufferIdx
   * @param recursive
   * @returns Assigned Texture Index of the texture in the render op
   */
  private addTexture(
    texture: WebGlCoreCtxTexture,
    bufferIdx: number,
    recursive?: boolean,
  ): number {
    const { curRenderOp } = this;
    assertTruthy(curRenderOp);
    const textureIdx = curRenderOp.addTexture(texture);
    // TODO: Refactor to be more DRY
    if (textureIdx === 0xffffffff) {
      if (recursive) {
        throw new Error('Unable to add texture to render op');
      }
      const { shader, shaderProps, dimensions } = curRenderOp;
      this.newRenderOp(shader, shaderProps, dimensions, bufferIdx);
      return this.addTexture(texture, bufferIdx, true);
    }
    return textureIdx;
  }

  /**
   * Sort renderable children and add them to the render ops.
   * @todo:
   * - move to merge sort to keep relative order
   * - support z-index parent locking
   *
   */

  sortRenderables() {
    const { renderables } = this;
    renderables.sort((a, b) => a.zIndex - b.zIndex);

    renderables.forEach((renderable) => {
      if (renderable instanceof WebGlCoreRenderOp) {
        this.renderOps.push(renderable);
        this.curRenderOp = null;
      } else {
        this.addQuad(renderable);
      }
    });
  }

  /**
   * Render the current set of RenderOps to render to the specified surface.
   *
   * TODO: 'screen' is the only supported surface at the moment.
   *
   * @param surface
   */
  render(surface: 'screen' | CoreContextTexture = 'screen'): void {
    const { gl, quadBuffer } = this;

    const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);

    const buffer = this.quadBufferCollection.getBuffer('a_position') ?? null;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, arr, gl.DYNAMIC_DRAW);

    const doLog = false; // idx++ % 100 === 0;
    if (doLog) {
      console.log('renderOps', this.renderOps.length);
    }
    this.renderOps.forEach((renderOp, i) => {
      if (doLog) {
        console.log('renderOp', i, renderOp.numQuads);
      }
      renderOp.draw();
    });

    // clean up
    this.renderables = [];
  }
}

const idx = 0;