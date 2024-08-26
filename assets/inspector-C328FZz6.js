import { l as lightningPng } from "./lightning-DqpfQYPD.js";
async function inspector({ renderer, testRoot }) {
  const bg = renderer.createNode({
    width: 1920,
    height: 1080,
    color: 255,
    parent: testRoot
  });
  const dataNodeCheckBox = renderer.createNode({
    width: 100,
    height: 100,
    x: 80,
    y: 200,
    color: 4278190335,
    parent: bg
  });
  renderer.createNode({
    width: 505,
    height: 101,
    x: 200,
    y: 200,
    src: lightningPng,
    parent: bg,
    data: {
      id: "dataNode",
      number: 1,
      boolean: true
    }
  });
  const tooLongStringCheckBox = renderer.createNode({
    width: 100,
    height: 100,
    x: 80,
    y: 400,
    color: 4278190335,
    parent: bg
  });
  renderer.createNode({
    width: 505,
    height: 101,
    x: 200,
    y: 400,
    src: lightningPng,
    parent: bg,
    data: {
      id: "tooLongString",
      b: "a".repeat(2049)
    }
  });
  const textNodeCheckBox = renderer.createNode({
    width: 100,
    height: 100,
    x: 80,
    y: 600,
    color: 4278190335,
    parent: bg
  });
  renderer.createTextNode({
    x: 200,
    y: 600,
    height: 100,
    text: "Hello World",
    fontFamily: "Ubuntu",
    fontSize: 100,
    parent: bg,
    data: {
      id: "textNode"
    }
  });
  renderer.createTextNode({
    x: 30,
    y: 80,
    height: 100,
    text: "Boxes should turn green if the inspector is enabled",
    fontFamily: "Ubuntu",
    fontSize: 50,
    parent: bg
  });
  renderer.createTextNode({
    x: 30,
    y: 800,
    height: 100,
    text: "Please make sure to run this test with ?inspector=true",
    fontFamily: "Ubuntu",
    fontSize: 50,
    parent: bg
  });
  setTimeout(() => {
    const domDataNode = document.querySelector('[data-id="dataNode"]');
    if (domDataNode) {
      dataNodeCheckBox.color = 16711935;
    }
    const domTooLongString = document.querySelector(
      '[data-id="tooLongString"]'
    );
    if (domTooLongString) {
      tooLongStringCheckBox.color = 16711935;
    }
    const domTextNode = document.querySelector('[data-id="textNode"]');
    if (domTextNode) {
      textNodeCheckBox.color = 16711935;
    }
  }, 1e3);
}
export {
  inspector as default
};
//# sourceMappingURL=inspector-C328FZz6.js.map
