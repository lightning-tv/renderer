const animationSettings = {
  duration: 14e3,
  delay: 400,
  loop: true,
  stopMethod: "reverse",
  easing: "ease-in-out-back"
};
async function rtt({ renderer, testRoot }) {
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
      src: `https://picsum.photos/id/${i + 30}/120/120`
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
}
export {
  rtt as default
};
//# sourceMappingURL=rtt-Dac27op6.js.map
