const rockoSvg = "/assets/rocko-fwPc6MS7.svg";
const lightning = "/assets/lightning-BZLvP4jQ.svg";
const elevatorSvg = "/assets/elevator-BMl3pm5P.svg";
const rockoSvg2 = "/assets/rocko-fwPc6MS7.svg";
async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test({ renderer, testRoot }) {
  const FONT_SIZE = 45;
  const BEGIN_Y = FONT_SIZE;
  renderer.createTextNode({
    fontFamily: "Ubuntu",
    text: `SVG Test`,
    fontSize: FONT_SIZE,
    parent: testRoot
  });
  const curX = 0;
  let curY = BEGIN_Y;
  let curTest = 1;
  const rocko = renderer.createNode({
    x: curX,
    y: curY,
    src: rockoSvg,
    parent: testRoot
  });
  await execLoadingTest(rocko, 181, 218);
  const elevator = renderer.createNode({
    x: curX,
    y: curY,
    src: elevatorSvg,
    parent: testRoot
  });
  await execLoadingTest(elevator, 200, 268);
  const lightningNode = renderer.createNode({
    x: curX,
    y: curY,
    src: lightning,
    height: 25,
    width: 125,
    parent: testRoot
  });
  await execLoadingTest(lightningNode, 125, 25);
  const partialSvg = renderer.createNode({
    x: curX,
    y: curY,
    src: rockoSvg2,
    srcX: 100,
    srcY: 0,
    srcHeight: 218,
    srcWidth: 81,
    parent: testRoot
  });
  await execLoadingTest(partialSvg, 81, 218);
  const failure = renderer.createNode({
    x: curX,
    y: curY,
    src: "does-not-exist.svg",
    parent: testRoot
  });
  await execFailureTest(failure);
  function waitForTxLoaded(imgNode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("TIMEOUT"));
      }, 1e3);
      imgNode.once("loaded", (target, payload) => {
        resolve(payload.dimensions);
      });
    });
  }
  function waitForTxFailed(imgNode) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("TIMEOUT"));
      }, 1e3);
      imgNode.once("failed", () => {
        resolve(true);
      });
    });
  }
  async function execLoadingTest(imgNode, expectedWidth, expectedHeight) {
    var _a;
    const textNode = renderer.createTextNode({
      fontFamily: "Ubuntu",
      x: curX,
      text: "",
      fontSize: FONT_SIZE,
      parent: testRoot
    });
    let exception = false;
    let dimensions = { width: 0, height: 0 };
    try {
      dimensions = await waitForTxLoaded(imgNode);
    } catch (e) {
      exception = (_a = e == null ? void 0 : e.message) != null ? _a : "Unknown";
    }
    imgNode.width = dimensions.width;
    imgNode.height = dimensions.height;
    textNode.y = imgNode.y + imgNode.height;
    let result = "Fail";
    let expectedPostfix = "";
    if (!exception && imgNode.width === expectedWidth && imgNode.height === expectedHeight) {
      textNode.color = 16711935;
      result = "Pass";
    } else {
      textNode.color = 4278190335;
      if (exception) {
        expectedPostfix = ` (exception: ${exception})`;
      } else {
        expectedPostfix = ` (expected ${expectedWidth}x${expectedHeight})`;
      }
    }
    textNode.text = `${curTest}. Loaded Event Test: ${result} (${imgNode.width}x${imgNode.height})${expectedPostfix}`;
    curY = textNode.y + FONT_SIZE;
    curTest++;
  }
  async function execFailureTest(imgNode) {
    var _a;
    const textNode = renderer.createTextNode({
      fontFamily: "Ubuntu",
      x: curX,
      text: "",
      fontSize: FONT_SIZE,
      parent: testRoot
    });
    let failureTestPass = false;
    let exception = false;
    try {
      failureTestPass = await waitForTxFailed(imgNode);
    } catch (e) {
      exception = (_a = e == null ? void 0 : e.message) != null ? _a : "Unknown";
    }
    textNode.y = imgNode.y + imgNode.height;
    let result = "";
    if (!exception && failureTestPass) {
      textNode.color = 16711935;
      result = "Pass";
    } else {
      textNode.color = 4278190335;
      result = "Fail";
      if (exception) {
        result += ` (exception: ${exception})`;
      }
    }
    textNode.text = `${curTest}. Failure Event Test: ${result}`;
    curY = textNode.y + FONT_SIZE;
    curTest++;
  }
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-svg-OJ3_mnd0.js.map
