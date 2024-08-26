import { p as paginateTestRows } from "./paginateTestRows-DyFytvyj.js";
import { P as PageContainer } from "./PageContainer-vZfqw0DQ.js";
import { c as constructTestRow } from "./constructTestRow-Dh7ZSvxW.js";
import "./index-DjWUQZsy.js";
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
const containerSize = 100;
const NODE_PROPS = {
  mount: 0.5,
  x: containerSize / 2,
  y: containerSize / 2,
  color: 255,
  text: "xyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50
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
      title: "Text Alpha"
    });
    yield paginateTestRows(pageContainer, [
      ...generateAlphaTest(renderer, "sdf"),
      ...generateAlphaTest(renderer, "canvas")
    ]);
    return pageContainer;
  });
}
function generateAlphaTest(renderer, textRenderer) {
  return [
    {
      title: "Direct Alpha Prop (".concat(textRenderer, ")"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        return yield constructTestRow({ renderer, rowNode, containerSize }, [
          renderer.createTextNode(__spreadValues({}, nodeProps)),
          "alpha 0.5 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 0.5
          })),
          "alpha 0.05 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 0.05
          })),
          "alpha 0 ->",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 0
          }))
        ]);
      })
    },
    {
      title: "Parent Alpha Prop (".concat(textRenderer, ")"),
      content: (rowNode) => __async(this, null, function* () {
        __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        return yield constructTestRow({ renderer, rowNode, containerSize }, [
          createContainedTextNode(renderer, textRenderer, {
            alpha: 1
          }),
          "alpha 0.5 ->",
          createContainedTextNode(renderer, textRenderer, {
            alpha: 0.5
          }),
          "alpha 0.05 ->",
          createContainedTextNode(renderer, textRenderer, {
            alpha: 0.05
          }),
          "alpha 0 ->",
          createContainedTextNode(renderer, textRenderer, {
            alpha: 0
          })
        ]);
      })
    },
    {
      title: "Direct Alpha Prop + Color Alpha (".concat(textRenderer, ")"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        return yield constructTestRow({ renderer, rowNode, containerSize }, [
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 1,
            color: 255
          })),
          "color.a -> 0.5",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 1,
            color: 128
          })),
          "alpha -> 0.5",
          renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
            alpha: 0.5,
            color: 128
          }))
        ]);
      })
    },
    {
      title: "Parent Alpha Prop + Color Alpha (".concat(textRenderer, ")"),
      content: (rowNode) => __async(this, null, function* () {
        __spreadProps(__spreadValues({}, NODE_PROPS), {
          textRendererOverride: textRenderer
        });
        return yield constructTestRow({ renderer, rowNode, containerSize }, [
          createContainedTextNode(renderer, textRenderer, {
            alpha: 1,
            color: 4278190335
          }),
          "container\n  .color.a -> 0.5",
          createContainedTextNode(renderer, textRenderer, {
            alpha: 1,
            // Just changing the color alpha of the container doesn't affect
            // the contained text's alpha
            color: 4278190208
          }),
          "container\n  .alpha -> 0.5",
          createContainedTextNode(renderer, textRenderer, {
            alpha: 0.5,
            color: 4278190208
          })
        ]);
      })
    },
    null
  ];
}
function createContainedTextNode(renderer, textRenderer, containerProps) {
  const container = renderer.createNode(__spreadValues({
    width: containerSize,
    height: containerSize,
    color: 16711935
  }, containerProps));
  renderer.createTextNode(__spreadProps(__spreadValues({}, NODE_PROPS), {
    textRendererOverride: textRenderer,
    parent: container
    // alpha: 0.50,
  }));
  return container;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-alpha-U9Vf1o8_.js.map
