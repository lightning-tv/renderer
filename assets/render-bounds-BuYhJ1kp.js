async function renderBounds({ renderer, testRoot }) {
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
  setTimeout(async () => {
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
      await redRectAnimation.waitUntilStopped();
      redRectAnimation = redRect.animate(
        {
          x: -205
        },
        {
          duration: 2e3
        }
      ).start();
      await redRectAnimation.waitUntilStopped();
    }
  }, 1e3);
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
  setTimeout(async () => {
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
      await blueRectAnimation.waitUntilStopped();
      blueRectAnimation = blueRect.animate(
        {
          rotation: degToRad(45),
          x: 2400
        },
        {
          duration: 2e3
        }
      ).start();
      await blueRectAnimation.waitUntilStopped();
    }
  }, 1e3);
}
export {
  renderBounds as default
};
//# sourceMappingURL=render-bounds-BuYhJ1kp.js.map
