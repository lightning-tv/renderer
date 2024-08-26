var __pow = Math.pow;
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function customSettings() {
  return {
    textureMemory: {
      criticalThreshold: 100 * __pow(1024, 2),
      targetThresholdLevel: 0.25,
      debugLogging: true
    }
  };
}
function textureCleanupCritical(_0) {
  return __async(this, arguments, function* ({
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
      text: "This test will create and display a random NoiseTexture node every 10ms and never offer a moment for Idle Texture Cleanup. Only Critical Texture Cleanup will be triggered.\n\nSee docs/ManualRegressionTests.md for more information.\n    ",
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
  });
}
export {
  customSettings,
  textureCleanupCritical as default
};
//# sourceMappingURL=texture-cleanup-critical-BYqctD66.js.map
