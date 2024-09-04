import { p as paginateTestRows } from "./paginateTestRows-BVGWFg2v.js";
import { P as PageContainer } from "./PageContainer-Db0nfhpm.js";
import { c as constructTestRow } from "./constructTestRow-Dh7ZSvxW.js";
import "./index-DE7Awpxp.js";
import "./LocalStorage-CEyDmtly.js";
import "./utils-BNMqzZsE.js";
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
      title: "Text Line Height"
    });
    yield paginateTestRows(pageContainer, [
      ...generateLineHeightTest(renderer, "sdf"),
      ...generateLineHeightTest(renderer, "canvas")
    ]);
    return pageContainer;
  });
}
const NODE_PROPS = {
  x: 90,
  y: 90,
  mount: 0.5,
  color: 255,
  text: "abcd\ntxyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50
};
function generateLineHeightTest(renderer, textRenderer) {
  return [
    {
      title: "Text Node ('lineHeight', ".concat(textRenderer, ", fontSize=50)").concat(textRenderer === "canvas" ? ', "BROKEN!"' : ""),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        return yield constructTestRow(
          { renderer, rowNode, containerSize: 180 },
          [
            "lineHeight: (default)\n->",
            baselineNode,
            "60 ->",
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              lineHeight: 60
            })),
            "70 ->",
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              lineHeight: 70
            })),
            "25 ->",
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              lineHeight: 25
            })),
            "10 ->",
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              lineHeight: 10
            })),
            "1 ->",
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              lineHeight: 1
            }))
          ]
        );
      })
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-line-height-Z0-Z4Ych.js.map
