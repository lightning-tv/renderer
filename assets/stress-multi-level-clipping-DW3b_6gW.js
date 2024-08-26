import { r as robotImg } from "./robot-tJVGEFZ-.js";
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
function stressMultiLevelClipping(_0) {
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
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        width: 100,
        height: 100,
        clipping: true,
        parent: bg
      });
      renderer.createNode({
        mount: 0.5,
        x: 50,
        y: 50,
        width: 200,
        height: 200,
        src: robotImg,
        parent: container
      });
      nodes.push(container);
      totalNodes += 2;
    }
    console.log(
      "Created ".concat(numOuterNodes, " clipping outer nodes with an image node nested inside. Total nodes: ").concat(totalNodes)
    );
    const animate = () => {
      nodes.forEach((node) => {
        node.animate(
          {
            x: randomIntBetween(20, 1740),
            y: randomIntBetween(20, 900)
          },
          {
            duration: 3e3,
            easing: "ease-out",
            loop: true,
            stopMethod: "reverse"
          }
        ).start();
      });
    };
    animate();
  });
}
export {
  stressMultiLevelClipping as default
};
//# sourceMappingURL=stress-multi-level-clipping-DW3b_6gW.js.map
