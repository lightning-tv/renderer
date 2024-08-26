import { l as lightningPng } from "./lightning-DqpfQYPD.js";
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
async function stressMultiLevel({
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
    `Created ${numOuterNodes} outer nodes with another node nested inside. Total nodes: ${totalNodes}`
  );
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
  stressMultiLevel as default
};
//# sourceMappingURL=stress-multi-level-De4qv4_V.js.map
