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
      title: "Text Rotation"
    });
    yield paginateTestRows(pageContainer, [
      ...generateRotationTest(renderer, "sdf"),
      ...generateRotationTest(renderer, "canvas")
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
function generateRotationTest(renderer, textRenderer) {
  return [
    {
      title: "Text Node ('rotation', ".concat(textRenderer, ", mount = 0)"),
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
          "rotation 45 deg ->\npivot 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            rotation: Math.PI / 4
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 0,
            rotation: Math.PI / 4
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 1,
            rotation: Math.PI / 4
          }))
        ]);
      })
    },
    {
      title: "Text Node ('rotation', ".concat(textRenderer, ",  mount = 0.5)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          mount: 0.5,
          x: 100,
          y: 100,
          textRendererOverride: textRenderer
        });
        return yield constructTestRow({ renderer, rowNode }, [
          renderer.createTextNode(__spreadValues({}, nodeProps)),
          "scale 2 ->\npivot 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            rotation: Math.PI / 4
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            pivot: 0,
            rotation: Math.PI / 4
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            pivot: 1,
            rotation: Math.PI / 4
          }))
        ]);
      })
    },
    {
      title: "Text Node ('rotation', ".concat(textRenderer, ",  mount = 1)"),
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
            rotation: Math.PI / 4
            // pivot: 0.5, (should be default)
          })),
          "pivot 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 0,
            rotation: Math.PI / 4
          })),
          "pivot 1 ->",
          renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, nodeProps), position), {
            pivot: 1,
            rotation: Math.PI / 4
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
//# sourceMappingURL=text-rotation-i5ZauUvK.js.map
