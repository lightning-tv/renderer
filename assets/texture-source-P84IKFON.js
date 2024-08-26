import { r as rockoImg } from "./rocko-DfKMdNEs.js";
import { l as lightningPng } from "./lightning-C5UL5HX9.js";
import { e as elevatorImg } from "./elevator-C9Se-LCK.js";
async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test({ renderer, testRoot }) {
  const FONT_SIZE = 45;
  const BEGIN_Y = FONT_SIZE;
  renderer.createTextNode({
    fontFamily: "Ubuntu",
    text: `PNG Source Test`,
    fontSize: FONT_SIZE,
    parent: testRoot
  });
  const curX = 0;
  let curY = BEGIN_Y;
  let curTest = 1;
  const rocko = renderer.createNode({
    x: curX,
    y: curY,
    src: rockoImg,
    parent: testRoot
  });
  await execLoadingTest(rocko, 181, 218);
  const elevator = renderer.createNode({
    x: curX,
    y: curY,
    src: elevatorImg,
    parent: testRoot,
    srcX: 120,
    srcY: 0,
    srcHeight: 268,
    srcWidth: 100
  });
  await execLoadingTest(elevator, 100, 268);
  const lightningNode = renderer.createNode({
    x: curX,
    y: curY,
    src: lightningPng,
    srcHeight: 100,
    srcWidth: 100,
    parent: testRoot
  });
  await execLoadingTest(lightningNode, 100, 100);
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
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-source-P84IKFON.js.map
