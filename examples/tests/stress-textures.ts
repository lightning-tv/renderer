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

import type { ExampleSettings } from '../common/ExampleSettings.js';

export const Colors = {
  Black: 0x000000ff,
  Red: 0xff0000ff,
  Green: 0x00ff00ff,
  Blue: 0x0000ffff,
  Magenta: 0xff00ffff,
  Gray: 0x7f7f7fff,
  White: 0xffffffff,
};

export default async function ({ renderer, testRoot }: ExampleSettings) {
  const screenWidth = 1920;
  const screenHeight = 1080;
  const totalImages = 1000;

  // Calculate the grid dimensions for square images
  const gridSize = Math.ceil(Math.sqrt(totalImages)); // Approximate grid size
  const imageSize = Math.floor(
    Math.min(screenWidth / gridSize, screenHeight / gridSize),
  ); // Square size

  // Create a root node for the grid
  const gridNode = renderer.createNode({
    x: 0,
    y: 0,
    width: screenWidth,
    height: screenHeight,
    parent: testRoot,
  });

  // Create and position images in the grid
  new Array(totalImages).fill(0).forEach((_, i) => {
    const x = (i % gridSize) * imageSize;
    const y = Math.floor(i / gridSize) * imageSize;

    // pick a random color from Colors
    const clr =
      Object.values(Colors)[
        Math.floor(Math.random() * Object.keys(Colors).length)
      ];

    renderer.createNode({
      parent: gridNode,
      x,
      y,
      width: imageSize,
      height: imageSize,
      color: clr,
    });
  });
}
