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
      title: "Text Vertical Align"
    });
    yield paginateTestRows(pageContainer, [
      ...generateVerticalAlignTest(renderer, "sdf"),
      null,
      ...generateVerticalAlignTest(renderer, "canvas")
    ]);
    return pageContainer;
  });
}
const NODE_PROPS = {
  color: 255,
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50,
  lineHeight: 70
};
const CONTAINER_SIZE = 200;
function getSquare(renderer, node) {
  const wrapper = renderer.createNode({
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE
  });
  const line1 = renderer.createNode({
    width: CONTAINER_SIZE,
    height: 1,
    color: 16711935,
    y: NODE_PROPS.lineHeight
  });
  line1.parent = wrapper;
  const line2 = renderer.createNode({
    width: CONTAINER_SIZE,
    height: 1,
    color: 16711935,
    y: NODE_PROPS.lineHeight * 2
  });
  line2.parent = wrapper;
  node.parent = wrapper;
  return wrapper;
}
function generateVerticalAlignTest(renderer, textRenderer) {
  return [
    {
      title: "One Line ('verticalAlign', ".concat(textRenderer, ", fontSize = 50, lineHeight = 70)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          text: "txyz",
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        return yield constructTestRow({ renderer, rowNode }, [
          "verticalAlign: middle\n(default)\n->",
          getSquare(renderer, baselineNode),
          "top ->",
          getSquare(
            renderer,
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              verticalAlign: "top"
            }))
          ),
          "bottom ->",
          getSquare(
            renderer,
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              verticalAlign: "bottom"
            }))
          )
        ]);
      })
    },
    {
      title: "Two Lines ('verticalAlign', ".concat(textRenderer, ", fontSize = 50, lineHeight = 70)"),
      content: (rowNode) => __async(this, null, function* () {
        const nodeProps = __spreadProps(__spreadValues({}, NODE_PROPS), {
          text: "abcd\ntxyz",
          textRendererOverride: textRenderer
        });
        const baselineNode = renderer.createTextNode(__spreadValues({}, nodeProps));
        return yield constructTestRow({ renderer, rowNode }, [
          "verticalAlign: middle\n(default)\n->",
          getSquare(renderer, baselineNode),
          "top ->",
          getSquare(
            renderer,
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              verticalAlign: "top"
            }))
          ),
          "bottom ->",
          getSquare(
            renderer,
            renderer.createTextNode(__spreadProps(__spreadValues({}, nodeProps), {
              verticalAlign: "bottom"
            }))
          )
        ]);
      })
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-vertical-align-BOXw7p4n.js.map
