import { r as rockoImg } from "./rocko-na-o4qv-.js";
async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test({ renderer, testRoot }) {
  const node = renderer.createNode({
    x: 0,
    y: 0,
    width: 1920,
    height: 1080,
    color: 255,
    parent: testRoot
  });
  const rttNode = renderer.createNode({
    x: 100,
    y: 200,
    width: 300,
    height: 300,
    parent: node,
    rtt: true,
    zIndex: 5,
    colorTop: 4293922815,
    colorBottom: 16777215
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    parent: rttNode,
    color: 4278190335
  });
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Render to texture",
    parent: rttNode,
    fontSize: 48,
    color: 4294967295,
    fontFamily: "Ubuntu"
  });
  renderer.createNode({
    x: 50,
    y: 100,
    width: 300,
    height: 300,
    parent: rttNode,
    src: rockoImg
  });
  const rttNode2 = renderer.createNode({
    x: 500,
    y: 200,
    width: 300,
    height: 300,
    parent: node,
    rtt: true,
    colorTop: 4293922815,
    colorBottom: 16777215
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    parent: rttNode2,
    color: 3237950463
  });
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Render to texture",
    parent: rttNode2,
    fontSize: 22,
    color: 4278255615,
    fontFamily: "Ubuntu"
  });
  renderer.createNode({
    x: 50,
    y: 100,
    width: 300,
    height: 300,
    parent: rttNode2,
    src: rockoImg
  });
  const rttNode3 = renderer.createNode({
    x: 900,
    y: 200,
    width: 800,
    height: 300,
    parent: node,
    rtt: true,
    colorTop: 1731694079,
    colorBottom: 2629657087
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 300,
    height: 300,
    parent: rttNode3,
    color: 3237950463
  });
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Render to texture",
    parent: rttNode3,
    fontSize: 22,
    color: 4278255615,
    fontFamily: "Ubuntu"
  });
  renderer.createNode({
    x: 50,
    y: 100,
    width: 300,
    height: 300,
    parent: rttNode3,
    src: rockoImg
  });
  const nestedRTTNode1 = renderer.createNode({
    x: 400,
    y: 0,
    width: 150,
    height: 150,
    parent: rttNode3,
    rtt: true,
    colorTop: 653385983,
    colorBottom: 4294967295
  });
  renderer.createNode({
    x: 0,
    y: 0,
    width: 150,
    height: 150,
    parent: nestedRTTNode1,
    color: 3237950463
  });
  renderer.createTextNode({
    x: 0,
    y: 0,
    text: "Nested",
    parent: nestedRTTNode1,
    fontSize: 22,
    color: 4278255615,
    fontFamily: "Ubuntu"
  });
  const rocko4 = renderer.createNode({
    x: -120,
    y: 50,
    width: 300,
    height: 300,
    parent: nestedRTTNode1,
    src: rockoImg
  });
  for (let i = 0; i < 50; i++) {
    renderer.createNode({
      parent: node,
      x: i % 15 * 120 + 100,
      y: Math.floor(i / 15) * 120 + 600,
      width: 100,
      height: 100,
      texture: nestedRTTNode1.texture,
      // Flip every other one of them
      textureOptions: {
        flipY: i % 2 === 1
      }
    });
  }
  const animation = rocko4.animate(
    {
      rotation: 0.3,
      scale: 1.5,
      y: 110,
      x: -50
    },
    {
      duration: Math.random() * 4e3 + 3e3,
      loop: true,
      stopMethod: "reverse",
      easing: "ease-in-out"
    }
  );
  renderer.createTextNode({
    x: 100,
    y: 160,
    text: "RTT Dimension",
    parent: node,
    fontSize: 22,
    color: 4294967295,
    fontFamily: "Ubuntu"
  });
  renderer.createTextNode({
    x: 900,
    y: 160,
    text: "Nested RTT",
    parent: node,
    fontSize: 22,
    color: 4294967295,
    fontFamily: "Ubuntu"
  });
  renderer.createTextNode({
    x: 100,
    y: 560,
    text: "Nested RTT copies",
    parent: node,
    fontSize: 22,
    color: 4294967295,
    fontFamily: "Ubuntu"
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "r") {
      rttNode.rtt = !rttNode.rtt;
      rttNode2.rtt = !rttNode2.rtt;
      rttNode3.rtt = !rttNode3.rtt;
    }
    if (e.key === "s") {
      animation.start();
    }
    if (e.key === "w") {
      rttNode.width = rttNode.width === 200 ? 300 : 200;
      rttNode.height = rttNode.height === 200 ? 300 : 200;
    }
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=rtt-dimension-DcQi1N21.js.map
