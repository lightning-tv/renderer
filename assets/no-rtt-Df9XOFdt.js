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
const animationSettings = {
  duration: 14e3,
  delay: 400,
  loop: true,
  stopMethod: "reverse",
  easing: "ease-in-out-back"
};
function noRtt(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const node = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      color: 255,
      parent: testRoot
    });
    const clippingNode = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      parent: node,
      clipping: true,
      color: 0
    });
    const rootRenderToTextureNode = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      parent: clippingNode,
      rtt: false,
      zIndex: 5,
      colorTop: 3237998080,
      colorBottom: 3134870784
    });
    new Array(2e3).fill(0).forEach((_, i) => {
      const image = i % 105;
      const a = renderer.createNode({
        parent: rootRenderToTextureNode,
        x: i % 15 * 120 + 120,
        y: Math.floor(i / 15) * 120 + 150,
        width: 120,
        height: 120,
        scale: 0.85,
        // src: '../assets/rocko.png',
        src: "https://picsum.photos/id/".concat(image + 30, "/120/120")
      });
      const animation = a.animate(
        {
          y: Math.floor(i / 15) * 120 - 5e3
        },
        animationSettings
      );
      animation.start();
    });
  });
}
export {
  noRtt as default
};
//# sourceMappingURL=no-rtt-Df9XOFdt.js.map
