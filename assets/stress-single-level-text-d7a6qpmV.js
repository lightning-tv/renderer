const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
async function stressSingleLevelText({
  renderer,
  testRoot,
  perfMultiplier
}) {
  const numOuterNodes = 100 * perfMultiplier;
  const nodes = [];
  const startMin = -1e3;
  const startMax = 3e3;
  const endMin = -1e3;
  const endMax = 3e3;
  const bg = renderer.createNode({
    width: 1920,
    height: 1080,
    color: 4280166715,
    parent: testRoot
  });
  for (let i = 0; i < numOuterNodes; i++) {
    const node = renderer.createTextNode({
      x: randomIntBetween(startMin, startMax),
      y: randomIntBetween(startMin, startMax),
      fontFamily: "Ubuntu",
      textRendererOverride: "sdf",
      text: "Lightning 3.0",
      // contain: 'both',
      // width: 237,
      // height: 45,
      color: 4294967295,
      fontSize: 40,
      parent: bg
    });
    nodes.push(node);
  }
  console.log(`Created ${numOuterNodes} nodes with the same text`);
  const animate = () => {
    nodes.forEach((node) => {
      node.animate(
        {
          x: randomIntBetween(endMin, endMax),
          y: randomIntBetween(endMin, endMax)
        },
        {
          duration: 3e3,
          loop: true
        }
      ).start();
    });
  };
  animate();
}
export {
  stressSingleLevelText as default
};
//# sourceMappingURL=stress-single-level-text-d7a6qpmV.js.map
