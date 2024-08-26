import { r as rockoImg } from "./rocko-DfKMdNEs.js";
import { e as elevatorImg } from "./elevator-C9Se-LCK.js";
import { s as spritemap } from "./spritemap-BI6pbO9b.js";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function automation(settings) {
  return __async(this, null, function* () {
    yield test(settings);
    yield settings.snapshot();
  });
}
function test(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const FONT_SIZE = 45;
    const BEGIN_Y = FONT_SIZE;
    renderer.createTextNode({
      fontFamily: "Ubuntu",
      text: "Texture Test",
      fontSize: FONT_SIZE,
      parent: testRoot
    });
    let curX = 0;
    let curY = BEGIN_Y;
    let curTest = 1;
    const rocko = renderer.createNode({
      x: curX,
      y: curY,
      src: rockoImg,
      parent: testRoot
    });
    yield execLoadingTest(rocko, 181, 218);
    const rocko2 = renderer.createNode({
      x: curX,
      y: curY,
      src: rockoImg,
      parent: testRoot
    });
    yield execLoadingTest(rocko2, 181, 218);
    const elevator = renderer.createNode({
      x: curX,
      y: curY,
      src: elevatorImg,
      parent: testRoot
    });
    yield execLoadingTest(elevator, 200, 268);
    const failure = renderer.createNode({
      x: curX,
      y: curY,
      src: "does-not-exist.png",
      parent: testRoot
    });
    yield execFailureTest(failure);
    const failure2 = renderer.createNode({
      x: curX,
      y: curY,
      src: "does-not-exist.png",
      parent: testRoot
    });
    yield execFailureTest(failure2);
    curX = renderer.settings.appWidth / 2;
    curY = BEGIN_Y;
    const noiseTexture = renderer.createTexture("NoiseTexture", {
      width: 100,
      height: 100
    });
    const noise = renderer.createNode({
      x: curX,
      y: curY,
      texture: noiseTexture,
      parent: testRoot
    });
    yield execLoadingTest(noise, 100, 100);
    const noise2 = renderer.createNode({
      x: curX,
      y: curY,
      texture: noiseTexture,
      parent: testRoot
    });
    yield execLoadingTest(noise2, 100, 100);
    const spriteMapTexture = renderer.createTexture("ImageTexture", {
      src: spritemap
    });
    const frames = Array.from(Array(32).keys()).map((i) => {
      const x = i % 8 * 100;
      const y = Math.floor(i / 8) * 150;
      return renderer.createTexture("SubTexture", {
        texture: spriteMapTexture,
        x,
        y,
        width: 100,
        height: 150
      });
    });
    const subTextureNode = renderer.createNode({
      x: curX,
      y: curY,
      texture: frames[0],
      parent: testRoot
    });
    yield execLoadingTest(subTextureNode, 100, 150);
    const subTextureNode2 = renderer.createNode({
      x: curX,
      y: curY,
      texture: frames[0],
      parent: testRoot
    });
    yield execLoadingTest(subTextureNode2, 100, 150);
    const failureTexture = renderer.createTexture("ImageTexture", {
      src: "does-not-exist.png"
    });
    const failureFrames = Array.from(Array(32).keys()).map((i) => {
      const x = i % 8 * 120;
      const y = Math.floor(i / 8) * 120;
      return renderer.createTexture("SubTexture", {
        texture: failureTexture,
        x,
        y,
        width: 120,
        height: 120
      });
    });
    const subTxFailure = renderer.createNode({
      x: curX,
      y: curY,
      texture: failureFrames[0],
      parent: testRoot
    });
    yield execFailureTest(subTxFailure);
    const subTxFailure2 = renderer.createNode({
      x: curX,
      y: curY,
      texture: failureFrames[0],
      parent: testRoot
    });
    yield execFailureTest(subTxFailure2);
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
    function execLoadingTest(imgNode, expectedWidth, expectedHeight) {
      return __async(this, null, function* () {
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
          dimensions = yield waitForTxLoaded(imgNode);
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
            expectedPostfix = " (exception: ".concat(exception, ")");
          } else {
            expectedPostfix = " (expected ".concat(expectedWidth, "x").concat(expectedHeight, ")");
          }
        }
        textNode.text = "".concat(curTest, ". Loaded Event Test: ").concat(result, " (").concat(imgNode.width, "x").concat(imgNode.height, ")").concat(expectedPostfix);
        curY = textNode.y + FONT_SIZE;
        curTest++;
      });
    }
    function execFailureTest(imgNode) {
      return __async(this, null, function* () {
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
          failureTestPass = yield waitForTxFailed(imgNode);
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
            result += " (exception: ".concat(exception, ")");
          }
        }
        textNode.text = "".concat(curTest, ". Failure Event Test: ").concat(result);
        curY = textNode.y + FONT_SIZE;
        curTest++;
      });
    }
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=textures-BXzhtZxm.js.map
