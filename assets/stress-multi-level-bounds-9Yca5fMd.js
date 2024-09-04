import { l as lightningPng } from "./lightning-C5UL5HX9.js";
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
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
function stressMultiLevelBounds(_0) {
  return __async(this, arguments, function* ({
    renderer,
    testRoot,
    perfMultiplier
  }) {
    const numOuterNodes = 100 * perfMultiplier;
    const nodes = [];
    let totalNodes = 0;
    const bg = renderer.createNode({
      width: 1920,
      height: 1080,
      color: 4280166715,
      parent: testRoot
    });
    for (let i = 0; i < numOuterNodes; i++) {
      const container = renderer.createNode({
        x: Math.random() * (1920 * 2),
        //going to render out of bounds as well
        y: Math.random() * (1080 * 2),
        parent: bg
      });
      renderer.createNode({
        width: 505,
        height: 101,
        src: lightningPng,
        parent: container
      });
      nodes.push(container);
      totalNodes += 2;
    }
    console.log(
      "Created ".concat(numOuterNodes, " outer nodes with another node nested inside. Total nodes: ").concat(totalNodes)
    );
    const animate = () => {
      nodes.forEach((node) => {
        node.animate(
          {
            x: randomIntBetween(20, 1740 * 2),
            //going to render out of bounds as well
            y: randomIntBetween(20, 900 * 2)
          },
          {
            duration: 3e3,
            easing: "ease-out",
            loop: false
          }
        ).start();
      });
    };
    setInterval(animate, 3e3);
  });
}
export {
  stressMultiLevelBounds as default
};
//# sourceMappingURL=stress-multi-level-bounds-9Yca5fMd.js.map
