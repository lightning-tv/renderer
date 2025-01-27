import { valuesAreEqual } from '../../lib/utils.js';
import {
  BorderTemplate,
  type BorderProps,
} from '../templates/BorderTemplate.js';
import type { Vec4 } from '../../renderers/webgl/internal/ShaderUtils.js';
import type { WebGlShaderType } from '../../renderers/webgl/WebGlShaderNode.js';

export const Border: WebGlShaderType<BorderProps> = {
  name: BorderTemplate.name,
  props: BorderTemplate.props,
  update() {
    this.uniform4fa('u_width', this.props!.width as Vec4);
    this.uniform1i(
      'u_asymWidth',
      valuesAreEqual(this.props!.width as number[]) ? 0 : 1,
    );
    this.uniformRGBA('u_color', this.props!.color);
  },
  fragment: `
    # ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    # else
    precision mediump float;
    # endif

    uniform vec2 u_resolution;
    uniform float u_pixelRatio;
    uniform float u_alpha;

    uniform vec2 u_dimensions;
    uniform sampler2D u_texture;

    uniform vec4 u_width;
    uniform vec4 u_color;

    uniform int u_asymWidth;

    varying vec4 v_color;
    varying vec2 v_position;
    varying vec2 v_textureCoordinate;

    float box(vec2 p, vec2 s) {
      vec2 q = abs(p) - s;
      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) + 2.0;
    }

    float asymBorderWidth(vec2 p, float d, vec4 w) {
      p.x = p.x + (w[1] - w[3]) * u_pixelRatio;
      p.y = p.y - (w[0] - w[2]) * u_pixelRatio;
      vec2 size = vec2(u_dimensions.x - (w[3] + w[1]), u_dimensions.y - (w[0] + w[2])) * 0.5 + u_pixelRatio;
      float borderDist = box(p, size);
      return 1.0 - smoothstep(0.0, u_pixelRatio, max(-borderDist, d));
    }

    void main() {
      vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;
      vec2 halfDimensions = (u_dimensions * 0.5);

      vec2 boxUv = v_textureCoordinate.xy * u_dimensions - halfDimensions;
      float boxDist = box(boxUv, halfDimensions);

      float boxAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, boxDist);
      float borderAlpha = 0.0;

      if(u_asymWidth == 1) {
        borderAlpha = asymBorderWidth(boxUv, boxDist, u_width);
      }
      else {
        borderAlpha = 1.0 - smoothstep(u_width[0], u_width[0], abs(boxDist));
      }

      vec4 resColor = vec4(0.0);
      resColor = mix(resColor, color, min(color.a, boxAlpha));
      resColor = mix(resColor, u_color, min(u_color.a, min(borderAlpha, boxAlpha)));
      gl_FragColor = resColor * u_alpha;
    }
  `,
};
