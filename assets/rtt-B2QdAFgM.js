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
function rtt(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const node = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      color: 255,
      parent: testRoot
    });
    const rootRenderToTextureNode = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      parent: node,
      rtt: true,
      zIndex: 5,
      colorTop: 3237998335,
      colorBottom: 3134871039
    });
    new Array(105).fill(0).forEach((_, i) => {
      renderer.createNode({
        parent: rootRenderToTextureNode,
        x: i % 15 * 120 + 120,
        y: Math.floor(i / 15) * 120 + 150,
        width: 120,
        height: 120,
        scale: 1,
        // src: '../assets/rocko.png',
        src: "https://picsum.photos/id/".concat(i + 30, "/120/120")
      });
    });
    new Array(20).fill(0).forEach((_, i) => {
      const a = renderer.createNode({
        x: i % 1 * 1920,
        y: Math.floor(i / 1) * 800,
        width: 1920,
        height: 1080,
        parent: testRoot,
        alpha: 1,
        color: 4294967295,
        // Copy source texture from rootRenderToTextureNode
        texture: rootRenderToTextureNode.texture
      });
      const animation = a.animate(
        {
          y: Math.floor(i / 1) * 800 - 15e3
        },
        animationSettings
      );
      animation.start();
    });
    setTimeout(() => {
      rootRenderToTextureNode.alpha = 0;
    }, 2e3);
  });
}
export {
  rtt as default
};
//# sourceMappingURL=rtt-B2QdAFgM.js.map
