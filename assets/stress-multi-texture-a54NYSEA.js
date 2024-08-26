import { l as lightningPng } from "./lightning-C5UL5HX9.js";
import { r as robotImg } from "./robot-tJVGEFZ-.js";
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
async function stressMultiTexture({
  renderer,
  testRoot,
  perfMultiplier
}) {
  const numOuterNodes = 100 * perfMultiplier;
  const nodes = [];
  const bg = renderer.createNode({
    width: 1920,
    height: 1080,
    color: 4280166715,
    parent: testRoot
  });
  for (let i = 0; i < numOuterNodes; i++) {
    const node = renderer.createNode({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      ...i % 2 === 0 ? {
        width: 505,
        height: 101,
        src: lightningPng
      } : {
        width: 140,
        height: 140,
        src: robotImg
      },
      parent: bg
    });
    nodes.push(node);
  }
  console.log(`Created ${numOuterNodes} nodes with alternating textures`);
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
  stressMultiTexture as default
};
//# sourceMappingURL=stress-multi-texture-a54NYSEA.js.map
