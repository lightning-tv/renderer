import { g as getLoremIpsum } from "./LoremIpsum-Dp8bNQJh.js";
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
    const next = yield test(settings);
    yield settings.snapshot();
    while (yield next()) {
      yield settings.snapshot();
    }
  });
}
function test(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const fontFamily = "Ubuntu";
    const fontSize = 20;
    const yPos = 0;
    testRoot.width = 500;
    testRoot.height = 500;
    testRoot.clipping = true;
    testRoot.color = 4294967295;
    const canvasText = renderer.createTextNode({
      y: yPos,
      width: testRoot.width,
      fontSize,
      fontFamily,
      contain: "width",
      color: 4278190335,
      textRendererOverride: "canvas",
      parent: testRoot
    });
    const sdfText = renderer.createTextNode({
      y: yPos,
      width: testRoot.width,
      fontSize,
      fontFamily,
      contain: "width",
      color: 65399,
      parent: testRoot,
      zIndex: 3
    });
    const indexInfo = renderer.createTextNode({
      x: testRoot.width,
      y: testRoot.height,
      mount: 1,
      width: 0,
      height: 0,
      color: 255,
      fontFamily: "Ubuntu",
      fontSize: 20,
      text: "1",
      parent: testRoot
    });
    let i = 0;
    const mutations = [
      () => {
        canvasText.text = sdfText.text = getLoremIpsum(1200);
        canvasText.textAlign = sdfText.textAlign = "left";
      },
      () => {
        canvasText.textAlign = sdfText.textAlign = "center";
      },
      () => {
        canvasText.textAlign = sdfText.textAlign = "right";
      },
      () => {
        canvasText.text = sdfText.text = "Single Line Text";
        canvasText.textAlign = sdfText.textAlign = "left";
      },
      () => {
        canvasText.textAlign = sdfText.textAlign = "center";
      },
      () => {
        canvasText.textAlign = sdfText.textAlign = "right";
      }
    ];
    function next() {
      return __async(this, arguments, function* (loop = false, idx = i + 1) {
        var _a;
        if (idx > mutations.length - 1) {
          if (!loop) {
            return false;
          }
          idx = 0;
        }
        i = idx;
        (_a = mutations[i]) == null ? void 0 : _a.call(mutations);
        indexInfo.text = (i + 1).toString();
        return true;
      });
    }
    yield next(false, 0);
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        next(true).catch(console.error);
      }
    });
    return next;
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-align-e4TunNw4.js.map
