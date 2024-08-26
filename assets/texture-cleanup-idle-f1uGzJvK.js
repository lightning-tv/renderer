function customSettings() {
  return {
    textureMemory: {
      cleanupInterval: 5e3,
      debugLogging: true
    }
  };
}
const COLORS = [
  4278190335,
  // Red
  16711935,
  // Green
  65535,
  // Blue
  4294902015,
  // Yellow
  4278255615,
  // Magenta
  16777215,
  // Cyan
  4294967295
  // White
];
function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function textureCleanupIdle({ renderer, testRoot }) {
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Idle Texture Memory Cleanup Test",
    parent: testRoot,
    fontFamily: "Ubuntu",
    fontSize: 60,
    zIndex: 1
  });
  renderer.createTextNode({
    x: 0,
    y: 100,
    width: renderer.settings.appWidth,
    contain: "width",
    text: `This test will create and display a grid of random NoiseTexture nodes and move them off of the bounds margin every second.

The Texture Memory Manager should perform Idle Texture Cleanup roughly every 5 seconds.

See docs/ManualRegressionTests.md for more information.
    `,
    parent: testRoot,
    fontFamily: "Ubuntu",
    fontSize: 40,
    zIndex: 1
  });
  const screenWidth = renderer.settings.appWidth;
  const screenHeight = renderer.settings.appHeight;
  const gridWidth = 4;
  const gridHeight = 2;
  const nodeWidth = screenWidth / gridWidth;
  const nodeHeight = screenHeight / gridHeight;
  while (true) {
    const curNodes = [];
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        const node = renderer.createNode({
          x: i * nodeWidth,
          y: j * nodeHeight,
          width: nodeWidth,
          height: nodeHeight,
          parent: testRoot,
          color: randomColor(),
          texture: renderer.createTexture("NoiseTexture", {
            width: nodeWidth,
            height: nodeHeight,
            cacheId: Math.floor(Math.random() * 1e5)
          }),
          textureOptions: {
            preload: true
          }
        });
        curNodes.push(node);
      }
    }
    await delay(1e3);
    for (const node of curNodes) {
      node.x = -screenWidth * 2;
      node.y = -screenHeight * 2;
      node.on("freed", (thisNode) => {
        thisNode.destroy();
      });
    }
  }
}
export {
  customSettings,
  textureCleanupIdle as default
};
//# sourceMappingURL=texture-cleanup-idle-f1uGzJvK.js.map
