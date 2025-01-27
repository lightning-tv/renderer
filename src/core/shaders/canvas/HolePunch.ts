import { calcFactoredRadiusArray } from '../../lib/utils.js';
import type { CanvasShaderType } from '../../renderers/canvas/CanvasShaderNode.js';
import type { Vec4 } from '../../renderers/webgl/internal/ShaderUtils.js';
import {
  HolePunchTemplate,
  type HolePunchProps,
} from '../templates/HolePunchTemplate.js';
import { roundRect } from './utils/render.js';

export const HolePunch: CanvasShaderType<HolePunchProps> = {
  name: HolePunchTemplate.name,
  props: HolePunchTemplate.props,
  update() {
    this.precomputed.radius = calcFactoredRadiusArray(
      this.props!.radius as Vec4,
      this.props!.width,
      this.props!.height,
    );
  },
  render(ctx, quad, renderContext) {
    ctx.save();
    renderContext();
    const { x, y, width, height } = this.props!;
    ctx.beginPath();
    roundRect(
      ctx,
      quad.tx + x,
      quad.ty + y,
      width,
      height,
      this.precomputed.radius as Vec4,
    );
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.restore();
  },
};
