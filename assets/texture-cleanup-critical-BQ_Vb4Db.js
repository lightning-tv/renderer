function customSettings() {
  return {
    textureMemory: {
      criticalThreshold: 100 * 1024 ** 2,
      targetThresholdLevel: 0.25,
      debugLogging: true
    }
  };
}
async function textureCleanupCritical({
  renderer,
  testRoot,
  memMonitor
}) {
  if (memMonitor) {
    memMonitor.interval = 10;
  }
  const screen = renderer.createNode({
    x: 0,
    y: 0,
    width: renderer.settings.appWidth,
    height: renderer.settings.appHeight,
    parent: testRoot,
    color: 4278255615
  });
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Critical Texture Memory Cleanup Test",
    parent: screen,
    fontFamily: "Ubuntu",
    fontSize: 60
  });
  renderer.createTextNode({
    x: 0,
    y: 100,
    width: renderer.settings.appWidth,
    contain: "width",
    text: `This test will create and display a random NoiseTexture node every 10ms and never offer a moment for Idle Texture Cleanup. Only Critical Texture Cleanup will be triggered.

See docs/ManualRegressionTests.md for more information.
    `,
    parent: screen,
    fontFamily: "Ubuntu",
    fontSize: 40
  });
  setInterval(() => {
    screen.texture = renderer.createTexture("NoiseTexture", {
      width: 500,
      height: 500,
      cacheId: Math.floor(Math.random() * 1e5)
    });
    screen.textureOptions.preload = true;
  }, 10);
}
export {
  customSettings,
  textureCleanupCritical as default
};
//# sourceMappingURL=texture-cleanup-critical-BQ_Vb4Db.js.map
