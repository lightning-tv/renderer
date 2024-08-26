import { r as robotImg } from "./robot-tJVGEFZ-.js";
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
    yield test(settings);
    yield settings.snapshot();
  });
}
function test(settings) {
  return __async(this, null, function* () {
    const { renderer, testRoot } = settings;
    testRoot.width = 200;
    testRoot.height = 250;
    testRoot.color = 4294967295;
    const image = renderer.createNode({
      mount: 0.5,
      x: testRoot.width / 2,
      y: testRoot.height / 4,
      autosize: true,
      src: robotImg,
      parent: testRoot
    });
    const dimensions = yield waitForLoadedDimensions(image);
    const dimensionsMatch = dimensions.width === image.width && dimensions.height === image.height;
    renderer.createTextNode({
      mountX: 0.5,
      mountY: 1,
      x: testRoot.width / 2,
      y: testRoot.height,
      textAlign: "center",
      text: dimensionsMatch ? "Autosize\nSuccess" : "Autosize\nFailure",
      color: dimensionsMatch ? 16711935 : 4278190335,
      fontSize: 50,
      fontFamily: "Ubuntu",
      parent: testRoot
    });
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-autosize-jHpXh2OK.js.map
