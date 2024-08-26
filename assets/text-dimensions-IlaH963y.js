import { w as waitForLoadedDimensions } from "./utils-BNMqzZsE.js";
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
function test(settings) {
  return __async(this, null, function* () {
    const { renderer, testRoot } = settings;
    testRoot.width = 200;
    testRoot.height = 200;
    testRoot.color = 4294967295;
    const textBg = renderer.createNode({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: 16711935,
      parent: testRoot
    });
    const text1 = renderer.createTextNode({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: 255,
      fontFamily: "Ubuntu",
      textRendererOverride: "sdf",
      fontSize: 50,
      text: "",
      parent: testRoot
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
        text1.text = "SDF";
        text1.textRendererOverride = "sdf";
      },
      () => {
        text1.text = "SDF\ngyqpj";
      },
      () => {
        text1.text = "Canvas";
        text1.textRendererOverride = "canvas";
      },
      () => {
        text1.text = "Canvas\ngyqpj";
      },
      () => {
        text1.text = "SDF 2nd";
        text1.textRendererOverride = "sdf";
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
        const waitPromise = waitForLoadedDimensions(text1);
        (_a = mutations[i]) == null ? void 0 : _a.call(mutations);
        indexInfo.text = (i + 1).toString();
        const dimensions = yield waitPromise;
        textBg.width = dimensions.width;
        textBg.height = dimensions.height;
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
//# sourceMappingURL=text-dimensions-IlaH963y.js.map
