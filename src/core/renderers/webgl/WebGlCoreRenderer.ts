import { assertTruthy, createWebGLContext } from '../../../utils.js';
import { CoreRenderer } from '../CoreRenderer.js';
import { WebGlCoreTextureManager } from './WebGlCoreTextureManager.js';
import { DefaultShader } from './shaders/DefaultShader.js';
import { WebGlCoreRenderOp } from './WebGlCoreRenderOp.js';
import { WebGlCoreShader } from './WebGlCoreShader.js';
import type { CoreTexture } from '../CoreTexture.js';
import {
  createIndexBuffer,
  type CoreWebGlParameters,
  type CoreWebGlExtensions,
  getWebGlParameters,
  getWebGlExtensions,
} from './internal/RendererUtils.js';
import { normalizeARGB } from '../../utils.js';
import { WebGlCoreTexture } from './WebGlCoreTexture.js';
import type { CoreShader } from '../CoreShader.js';
import { DefaultShaderBatched } from './shaders/DefaultShaderBatched.js';

const WORDS_PER_QUAD = 24;
const BYTES_PER_QUAD = WORDS_PER_QUAD * 4;

export interface WebGlCoreRendererOptions {
  canvas: HTMLCanvasElement | OffscreenCanvas;
  clearColor: number;
  bufferMemory: number;
}

interface CoreWebGlSystem {
  parameters: CoreWebGlParameters;
  extensions: CoreWebGlExtensions;
}

export class WebGlCoreRenderer extends CoreRenderer {
  // WebGL Context and Data
  gl: WebGLRenderingContext;
  system: CoreWebGlSystem;

  // Options
  options: Required<WebGlCoreRendererOptions>;

  // Managers
  readonly textureManager: WebGlCoreTextureManager;

  // Persistent data
  quadBuffer: ArrayBuffer = new ArrayBuffer(1024 * 1024 * 4);
  fQuadBuffer: Float32Array = new Float32Array(this.quadBuffer);
  uiQuadBuffer: Uint32Array = new Uint32Array(this.quadBuffer);
  renderOps: WebGlCoreRenderOp[] = [];

  // Render Op / Buffer Filling State
  curBufferIdx = 0;
  curRenderOp: WebGlCoreRenderOp | null = null;

  // Default Shader
  defaultShader: WebGlCoreShader;
  quadWebGlBuffer: WebGLBuffer;

  constructor(options: WebGlCoreRendererOptions) {
    super();
    const { canvas, clearColor, bufferMemory } = options;
    this.options = options;
    const gl = createWebGLContext(canvas);
    if (!gl) {
      throw new Error('Unable to create WebGL context');
    }
    this.gl = gl;

    const color = normalizeARGB(clearColor);
    gl.viewport(0, 0, 1920, 1080);
    gl.clearColor(color[0]!, color[1]!, color[2]!, color[3]!);

    this.textureManager = new WebGlCoreTextureManager(gl);

    createIndexBuffer(gl, bufferMemory);

    this.system = {
      parameters: getWebGlParameters(gl),
      extensions: getWebGlExtensions(gl),
    };

    this.defaultShader = new DefaultShaderBatched(this);
    this.quadWebGlBuffer = gl.createBuffer() as WebGLBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.quadWebGlBuffer);
  }

  reset() {
    this.curBufferIdx = 0;
    this.curRenderOp = null;
    this.renderOps.length = 0;
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  addQuad(
    x: number,
    y: number,
    w: number,
    h: number,
    color: number,
    texture: CoreTexture | null,
  ) {
    const { fQuadBuffer, uiQuadBuffer } = this;
    assertTruthy(
      texture instanceof WebGlCoreTexture || texture === null,
      'Invalid texture type',
    );

    let { curBufferIdx: bufferIdx, curRenderOp } = this;

    if (curRenderOp) {
      // Current operation is using the default shader
      if (curRenderOp.shader !== this.defaultShader) {
        curRenderOp = null;
      }
    }

    if (!curRenderOp) {
      this.newRenderOp(this.defaultShader, bufferIdx);
      curRenderOp = this.curRenderOp;
      assertTruthy(curRenderOp);
    }

    let textureIdx = 0xffffffff;

    if (texture) {
      textureIdx = this.addTexture(texture, bufferIdx);
      curRenderOp = this.curRenderOp;
      assertTruthy(curRenderOp);
    }

    // color = 0xffff0000;

    // Upper-Left
    fQuadBuffer[bufferIdx++] = x; // vertexX
    fQuadBuffer[bufferIdx++] = y; // vertexY
    fQuadBuffer[bufferIdx++] = 0; // texCoordX
    fQuadBuffer[bufferIdx++] = 0; // texCoordY
    uiQuadBuffer[bufferIdx++] = color; // color
    fQuadBuffer[bufferIdx++] = textureIdx; // texIndex

    // Upper-Right
    fQuadBuffer[bufferIdx++] = x + w;
    fQuadBuffer[bufferIdx++] = y;
    fQuadBuffer[bufferIdx++] = 1;
    fQuadBuffer[bufferIdx++] = 0;
    uiQuadBuffer[bufferIdx++] = color;
    fQuadBuffer[bufferIdx++] = textureIdx;

    // Lower-Left
    fQuadBuffer[bufferIdx++] = x;
    fQuadBuffer[bufferIdx++] = y + h;
    fQuadBuffer[bufferIdx++] = 0;
    fQuadBuffer[bufferIdx++] = 1;
    uiQuadBuffer[bufferIdx++] = color;
    fQuadBuffer[bufferIdx++] = textureIdx;

    // Lower-Right
    fQuadBuffer[bufferIdx++] = x + w;
    fQuadBuffer[bufferIdx++] = y + h;
    fQuadBuffer[bufferIdx++] = 1;
    fQuadBuffer[bufferIdx++] = 1;
    uiQuadBuffer[bufferIdx++] = color;
    fQuadBuffer[bufferIdx++] = textureIdx;

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
  private newRenderOp(shader: WebGlCoreShader, bufferIdx: number) {
    const curRenderOp = new WebGlCoreRenderOp(
      this.gl,
      this.quadBuffer,
      this.quadWebGlBuffer,
      shader,
      bufferIdx,
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
    texture: WebGlCoreTexture,
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
      this.newRenderOp(curRenderOp.shader, bufferIdx);
      return this.addTexture(texture, bufferIdx, true);
    }
    return textureIdx;
  }

  /**
   * Render the current set of RenderOps to render to the specified surface.
   *
   * TODO: 'screen' is the only supported surface at the moment.
   *
   * @param surface
   */
  render(surface: 'screen' | CoreTexture = 'screen'): void {
    const { gl, quadBuffer } = this;

    const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
    gl.bufferData(gl.ARRAY_BUFFER, arr, gl.DYNAMIC_DRAW);

    const doLog = idx++ % 100 === 0;
    if (doLog) {
      console.log('renderOps', this.renderOps.length);
    }

    this.renderOps.forEach((renderOp, i) => {
      if (doLog) {
        console.log('renderOp', i, renderOp.numQuads);
      }
      renderOp.draw();
    });
  }
}

let idx = 0;
