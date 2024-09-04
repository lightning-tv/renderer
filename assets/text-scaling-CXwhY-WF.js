import { p as paginateTestRows } from "./paginateTestRows-t_6If7GE.js";
import { P as PageContainer } from "./PageContainer-CXQIxqtu.js";
import { w as waitForLoadedDimensions } from "./utils-BNMqzZsE.js";
import { c as constructTestRow } from "./constructTestRow-Dh7ZSvxW.js";
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
    const { renderer, testRoot } = settings;
    const pageContainer = new PageContainer(settings, {
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      parent: testRoot,
      title: "Text Scaling"
    });
    yield paginateTestRows(pageContainer, [
      ...generateScalingTest(renderer, "sdf", "scale"),
      ...generateScalingTest(renderer, "sdf", "scaleX"),
      ...generateScalingTest(renderer, "sdf", "scaleY"),
      ...generateScalingTest(renderer, "canvas", "scale"),
      ...generateScalingTest(renderer, "canvas", "scaleX"),
      ...generateScalingTest(renderer, "canvas", "scaleY")
    ]);
    return pageContainer;
  });
}
const NODE_PROPS = {
  x: 100,
  y: 100,
  color: 255,
  text: "xyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50
};
function generateScalingTest(renderer, textRenderer, scaleProp) {
  return [
    {
      title: "Text Node ('".concat(scaleProp, "', ").concat(textRenderer, ", mount = 0)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        const dimensions = yield waitForLoadedDimensions(baselineNode);
        const position = {
          x: 100 - dimensions.width / 2,
          y: 100 - dimensions.height / 2
        };
        baselineNode.x = position.x;
        baselineNode.y = position.y;
        return yield constructTestRow({ renderer, rowNode }, [
          baselineNode,
          "scale 2 ->\npivot 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            [scaleProp]: 2
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 0,
            [scaleProp]: 2
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 1,
            [scaleProp]: 2
          })),
          "pivot 0.5 ->\ncontain -> 'width'",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            width: dimensions.width,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "width"
          })),
          "pivot 0.5 ->\ncontain -> 'both'",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            width: dimensions.width,
            height: dimensions.height,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "both"
          }))
        ]);
      })
    },
    {
      title: "Text Node ('".concat(scaleProp, "', ").concat(textRenderer, ",  mount = 0.5)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          mount: 0.5,
          x: 100,
          y: 100,
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        const dimensions = yield waitForLoadedDimensions(baselineNode);
        return yield constructTestRow({ renderer, rowNode }, [
          baselineNode,
          "scale 2 ->\npivot 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            [scaleProp]: 2
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            pivot: 0,
            [scaleProp]: 2
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            pivot: 1,
            [scaleProp]: 2
          })),
          "pivot 0.5 ->\ncontain -> 'width'",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            width: dimensions.width,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "width"
          })),
          "pivot 0.5 ->\ncontain -> 'both'",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            width: dimensions.width,
            height: dimensions.height,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "both"
          }))
        ]);
      })
    },
    {
      title: "Text Node ('".concat(scaleProp, "', ").concat(textRenderer, ",  mount = 1)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          mount: 1,
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        const dimensions = yield waitForLoadedDimensions(baselineNode);
        const position = {
          x: 100 + dimensions.width / 2,
          y: 100 + dimensions.height / 2
        };
        baselineNode.x = position.x;
        baselineNode.y = position.y;
        return yield constructTestRow({ renderer, rowNode }, [
          baselineNode,
          "scale 2 ->\npivot 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            [scaleProp]: 2
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 0,
            [scaleProp]: 2
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 1,
            [scaleProp]: 2
          })),
          "pivot 0.5 ->\ncontain -> 'width'",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            width: dimensions.width,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "width"
          })),
          "pivot 0.5 ->\ncontain -> 'both'",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            width: dimensions.width,
            height: dimensions.height,
            pivot: 0.5,
            [scaleProp]: 2,
            contain: "both"
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
//# sourceMappingURL=text-scaling-CXwhY-WF.js.map
