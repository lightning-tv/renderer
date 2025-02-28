/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { calcFactoredRadiusArray, valuesAreEqual } from '../../lib/utils.js';
import type { CanvasShaderType } from '../../renderers/canvas/CanvasShaderNode.js';
import type { Vec4 } from '../../renderers/webgl/internal/ShaderUtils.js';
import {
  RoundedWithBorderTemplate,
  type RoundedWithBorderProps,
} from '../templates/RoundedWithBorderTemplate.js';
import type { ComputedBorderValues } from './Border.js';
import type { ComputedRoundedValues } from './Rounded.js';
import { roundedRectWithBorder } from './utils/render.js';

type ComputedValues = ComputedRoundedValues & ComputedBorderValues;

export const RoundedWithBorder: CanvasShaderType<
  RoundedWithBorderProps,
  ComputedValues
> = {
  props: RoundedWithBorderTemplate.props,
  saveAndRestore: true,
  update(node) {
    const radius = calcFactoredRadiusArray(
      this.props!.radius as Vec4,
      node.width,
      node.height,
    );
    this.computed.radius = radius;
    this.computed.borderColor = this.toColorString(this.props!['border-color']);
    this.computed.borderAsym = !valuesAreEqual(
      this.props!['border-width'] as number[],
    );
    const borderWidth = this.props!['border-width'] as Vec4;
    this.computed.borderRadius = radius.map((value, index) =>
      Math.max(0, value - borderWidth[index]! * 0.5),
    ) as Vec4;
  },
  render(ctx, quad, renderContext) {
    roundedRectWithBorder(
      ctx,
      quad.tx,
      quad.ty,
      quad.width,
      quad.height,
      this.computed.radius!,
      this.props!['border-width'] as Vec4,
      this.computed.borderRadius!,
      this.computed.borderColor!,
      this.computed.borderAsym!,
      renderContext,
    );
  },
};
