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
const randomColor = () => {
  const randomInt = Math.floor(Math.random() * Math.pow(2, 32));
  const hexString = randomInt.toString(16).padStart(8, "0");
  return parseInt(hexString, 16);
};
function rttReflection(_0) {
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
      height: 540,
      parent: node,
      rtt: true,
      zIndex: 5,
      color: 4294967295
    });
    const reflectionNode = renderer.createNode({
      x: 0,
      y: 540,
      width: 1920,
      height: 540,
      colorTop: 3237998080,
      colorBottom: 2544631807,
      parent: node,
      scaleY: -1,
      alpha: 0.8,
      // Copy source texture from rootRenderToTextureNode
      texture: rootRenderToTextureNode.texture
    });
    new Array(105).fill(0).forEach((_, i) => {
      const a = renderer.createNode({
        parent: rootRenderToTextureNode,
        x: i % 15 * 120 + 50,
        y: Math.floor(i / 15) * 140 + 1920,
        width: 120,
        height: 120,
        scale: 0.5,
        src: "https://picsum.photos/id/".concat(i + 30, "/120/120")
      });
      const animation2 = a.animate(
        {
          rotation: Math.random() * Math.PI * 2,
          scale: 1.5,
          y: Math.floor(i / 15) * 140 + 250
        },
        {
          duration: Math.random() * 4e3 + 3e3,
          loop: true,
          stopMethod: "reverse",
          easing: "ease-in-out"
        }
      );
      animation2.start();
    });
    const rttLabel = renderer.createTextNode({
      parent: rootRenderToTextureNode,
      x: 80,
      y: 540,
      fontFamily: "Ubuntu",
      fontSize: 40,
      text: "RTT reflection demo"
    });
    const animation = rttLabel.animate(
      {
        y: 420
      },
      {
        duration: 6e3,
        delay: 400,
        loop: true,
        stopMethod: "reverse",
        easing: "ease-in-out"
      }
    );
    animation.start();
    setInterval(() => {
      const a = reflectionNode.animate(
        {
          colorTop: randomColor(),
          colorBottom: randomColor()
        },
        {
          duration: 4e3,
          easing: "ease-in-out"
        }
      );
      a.start();
    }, 4400);
  });
}
export {
  rttReflection as default
};
//# sourceMappingURL=rtt-reflection-foTb9CCF.js.map
