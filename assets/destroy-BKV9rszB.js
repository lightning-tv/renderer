import { l as lightningPng } from "./lightning-DqpfQYPD.js";
async function automation(settings) {
  const destroy = await test(settings);
  await settings.snapshot();
  destroy(100);
  await settings.snapshot();
}
async function test({
  renderer,
  testRoot,
  automation: automation2,
  perfMultiplier
}) {
  const numOuterNodes = 100 * Math.max(perfMultiplier, 1) / 2;
  const nodes = [];
  const bg = renderer.createNode({
    width: 1920,
    height: 1080,
    color: 4280166715,
    parent: testRoot
  });
  const gridSize = Math.ceil(Math.sqrt(numOuterNodes));
  for (let i = 0; i < numOuterNodes; i++) {
    const baseX = i % gridSize * 150;
    const baseY = Math.floor(i / gridSize) * 60;
    const node = renderer.createNode({
      width: 125,
      height: 25,
      x: baseX,
      y: baseY,
      src: lightningPng,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radius",
            props: {
              radius: 50
            }
          }
        ]
      }),
      parent: bg
    });
    nodes.push(node);
    const textNode = renderer.createTextNode({
      width: 125,
      height: 25,
      x: baseX,
      y: baseY + 25,
      text: "Lightning 3",
      color: 4294967295,
      parent: bg
    });
    nodes.push(textNode);
  }
  console.log(
    `Created ${numOuterNodes} texture nodes and ${numOuterNodes} text nodes`
  );
  const destroy = (amount = 10) => {
    const nodesToDestroy = nodes.splice(0, amount);
    nodesToDestroy.forEach((node) => {
      node.destroy();
    });
    console.log(`Destroyed ${amount} nodes, ${nodes.length} remaining`);
    if (nodes.length > 0) {
      setTimeout(destroy, 100);
    } else {
      console.log("All nodes destroyed");
    }
  };
  if (!automation2) {
    setTimeout(destroy, 100);
  }
  return destroy;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=destroy-BKV9rszB.js.map
