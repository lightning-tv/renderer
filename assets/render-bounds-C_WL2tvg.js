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
function renderBounds(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const degToRad = (deg) => {
      return Math.PI / 180 * deg;
    };
    const greenRect = renderer.createNode({
      x: 0,
      y: 540,
      width: 960,
      height: 540,
      color: 16711935,
      clipping: true,
      parent: testRoot
    });
    const redRect = renderer.createNode({
      // skipRender: true,
      x: 0,
      y: 0,
      alpha: 1,
      width: 200,
      height: 200,
      color: 4278190335,
      pivot: 0,
      parent: testRoot
    });
    redRect.on("outOfViewport", () => {
      console.log("red rect outside view port");
    });
    redRect.on("inViewport", () => {
      console.log("red rect in view port");
    });
    let redRectAnimation = null;
    setTimeout(() => __async(this, null, function* () {
      while (true) {
        redRectAnimation = redRect.animate(
          {
            x: 0
          },
          {
            delay: 2e3,
            duration: 2e3
          }
        ).start();
        yield redRectAnimation.waitUntilStopped();
        redRectAnimation = redRect.animate(
          {
            x: -205
          },
          {
            duration: 2e3
          }
        ).start();
        yield redRectAnimation.waitUntilStopped();
      }
    }), 1e3);
    const blueRect = renderer.createNode({
      x: 1921,
      y: 540,
      width: 540,
      height: 540,
      color: 65535,
      mountX: 0.5,
      mountY: 0.5,
      rotation: degToRad(45 + 180),
      parent: greenRect
    });
    blueRect.on("outOfBounds", () => {
      console.log("blue rect outside render bounds");
    });
    blueRect.on("inBounds", () => {
      console.log("blue rect in render bounds");
    });
    let blueRectAnimation = null;
    setTimeout(() => __async(this, null, function* () {
      while (true) {
        blueRectAnimation = blueRect.animate(
          {
            rotation: degToRad(360),
            x: 1e3
          },
          {
            delay: 1e3,
            duration: 2e3
          }
        ).start();
        yield blueRectAnimation.waitUntilStopped();
        blueRectAnimation = blueRect.animate(
          {
            rotation: degToRad(45),
            x: 2400
          },
          {
            duration: 2e3
          }
        ).start();
        yield blueRectAnimation.waitUntilStopped();
      }
    }), 1e3);
  });
}
export {
  renderBounds as default
};
//# sourceMappingURL=render-bounds-C_WL2tvg.js.map
