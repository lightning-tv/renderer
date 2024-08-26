async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test({ renderer, testRoot }) {
  const randomColor = () => {
    const randomInt = Math.floor(Math.random() * Math.pow(2, 32));
    const hexString = randomInt.toString(16).padStart(8, "0");
    return `#${hexString}`;
  };
  const rnd = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const FONT_SIZE = 45;
  renderer.createTextNode({
    text: `Texture Factory Test`,
    fontSize: FONT_SIZE,
    offsetY: -5,
    parent: testRoot
  });
  function execTest(y, title, setKey) {
    const textNode = renderer.createTextNode({
      text: title,
      fontSize: FONT_SIZE,
      y,
      parent: testRoot
    });
    let factoryRuns = 0;
    const factory = () => {
      factoryRuns++;
      const canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 200;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Unable to create canvas 2d context");
      for (let i = 0; i < 10; i++) {
        ctx.fillStyle = randomColor();
        ctx.fillRect(rnd(0, 280), rnd(0, 180), rnd(20, 200), rnd(20, 100));
      }
      return ctx.getImageData(0, 0, 300, 200);
    };
    renderer.createNode({
      color: 4294967295,
      x: 20,
      y: y + 80,
      width: 300,
      height: 200,
      parent: testRoot,
      texture: renderer.createTexture("ImageTexture", {
        src: factory,
        key: setKey ? `test-key-${y}` : void 0
      })
    });
    renderer.createNode({
      color: 4294967295,
      x: 340,
      y: y + 80,
      width: 300,
      height: 200,
      parent: testRoot,
      texture: renderer.createTexture("ImageTexture", {
        src: factory,
        key: setKey ? `test-key-${y}` : void 0
      })
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = "";
        if (setKey && factoryRuns === 1 || !setKey && factoryRuns === 2) {
          textNode.color = 16711935;
          result = "Pass";
        } else {
          textNode.color = 4278190335;
          result = `Fail (${factoryRuns})`;
        }
        textNode.text += `: ${result}`;
        if (result === "Pass") resolve(true);
        else reject({ setKey, factoryRuns });
      }, 50);
    });
  }
  await execTest(80, "1 - No key", false);
  await execTest(400, "2 - With key", true);
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-factory-uybS3ecV.js.map
