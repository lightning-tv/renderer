import { p as paginateTestRows } from "./paginateTestRows-DyFytvyj.js";
import { P as PageContainer } from "./PageContainer-vZfqw0DQ.js";
import { w as waitForLoadedDimensions } from "./utils-BNMqzZsE.js";
import { c as constructTestRow } from "./constructTestRow-Dh7ZSvxW.js";
import "./index-DjWUQZsy.js";
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
      title: "Text Baseline"
    });
    yield paginateTestRows(pageContainer, [
      ...generateBaselineTest(renderer, "sdf"),
      ...generateBaselineTest(renderer, "canvas")
    ]);
    return pageContainer;
  });
}
const NODE_PROPS = {
  x: 100,
  y: 100,
  color: 255,
  text: "txyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50,
  lineHeight: 70
};
function generateBaselineTest(renderer, textRenderer) {
  return [
    {
      title: "Text Node ('textBaseline', ".concat(textRenderer, ", lineHeight = 70)").concat(textRenderer === "sdf" ? ', "BROKEN!"' : ""),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
          parent: renderer.root
        }));
        const dimensions = yield waitForLoadedDimensions(baselineNode);
        const position = {
          x: 100 - dimensions.width / 2,
          y: 100 - dimensions.height / 2
        };
        baselineNode.x = position.x;
        baselineNode.y = position.y;
        return yield constructTestRow({ renderer, rowNode }, [
          baselineNode,
          "textBaseline (alphabetic) ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            textBaseline: "alphabetic"
          })),
          "textBaseline: top ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            textBaseline: "top"
          })),
          "textBaseline: middle ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            textBaseline: "middle"
          })),
          "textBaseline: bottom ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            textBaseline: "bottom"
          }))
        ]);
      })
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-baseline-D46jDTmb.js.map
