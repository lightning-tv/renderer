import { l as lightningPng } from "./lightning-C5UL5HX9.js";
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
async function stressSingleLevel({
  renderer,
  testRoot,
  perfMultiplier
}) {
  const numOuterNodes = 1 * perfMultiplier;
  const nodes = [];
  const bg = renderer.createNode({
    width: 1920,
    height: 1080,
    color: 4280166715,
    parent: testRoot
  });
  for (let i = 0; i < numOuterNodes; i++) {
    const node = renderer.createNode({
      width: 505,
      height: 101,
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      // src: logo,
      parent: bg
    });
    node.src = lightningPng;
    nodes.push(node);
  }
  console.log(`Created ${numOuterNodes} nodes with the same texture`);
  const animate = () => {
    nodes.forEach((node) => {
      node.animate(
        {
          x: randomIntBetween(20, 1740),
          y: randomIntBetween(20, 900),
          rotation: Math.random() * Math.PI
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
}
export {
  stressSingleLevel as default
};
//# sourceMappingURL=stress-single-level-XLpANAyV.js.map
