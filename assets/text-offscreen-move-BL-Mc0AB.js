import { P as PageContainer } from "./PageContainer-CXQIxqtu.js";
import "./index-Bnw7StKz.js";
import "./LocalStorage-CEyDmtly.js";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
    yield (yield test(settings)).snapshotPages();
  });
}
function test(settings) {
  return __async(this, null, function* () {
    const { renderer } = settings;
    const pageContainer = new PageContainer(settings, {
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      title: "Text Offscreen Move Tests"
    });
    pageContainer.pushPage(createTestCase(renderer, "sdf", "none"));
    pageContainer.pushPage(createTestCase(renderer, "sdf", "width"));
    pageContainer.pushPage(createTestCase(renderer, "sdf", "both"));
    pageContainer.pushPage(createTestCase(renderer, "canvas", "none"));
    pageContainer.pushPage(createTestCase(renderer, "canvas", "width"));
    pageContainer.pushPage(createTestCase(renderer, "canvas", "both"));
    yield delay(200);
    pageContainer.finalizePages();
    return pageContainer;
  });
}
const commonTextProps = {
  mount: 0.5,
  width: 400,
  height: 400,
  contain: "none",
  text: "Test passes if this text appears only as green",
  fontFamily: "Ubuntu",
  textRendererOverride: "canvas",
  fontSize: 50
};
function createTestCase(renderer, textRenderer, contain) {
  return function(page) {
    return __async(this, null, function* () {
      const subheader = renderer.createTextNode({
        x: 0,
        y: 10,
        text: "",
        fontFamily: "Ubuntu",
        textRendererOverride: "sdf",
        fontSize: 30,
        parent: page
      });
      subheader.text = "textRenderer = ".concat(textRenderer, "\ncontain = ").concat(contain);
      renderer.createTextNode(__spreadProps(__spreadValues({}, commonTextProps), {
        color: 4278190335,
        x: renderer.settings.appWidth / 2,
        y: renderer.settings.appHeight / 2,
        textRendererOverride: textRenderer,
        contain,
        parent: page
      }));
      const offscreenStartText = renderer.createTextNode(__spreadProps(__spreadValues({}, commonTextProps), {
        color: 16711935,
        x: -1e3,
        y: -1e3,
        textRendererOverride: textRenderer,
        contain,
        parent: page
      }));
      offscreenStartText.x = renderer.settings.appWidth / 2;
      offscreenStartText.y = renderer.settings.appHeight / 2;
    });
  };
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-offscreen-move-BL-Mc0AB.js.map
