import { p as paginateTestRows } from "./paginateTestRows-BVGWFg2v.js";
import { P as PageContainer } from "./PageContainer-Db0nfhpm.js";
import { w as waitForLoadedDimensions } from "./utils-BNMqzZsE.js";
import { r as robotImg } from "./robot-tJVGEFZ-.js";
import { d as deg2Rad } from "./index-DE7Awpxp.js";
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
const SQUARE_SIZE = 200;
const PADDING = 20;
function test(settings) {
  return __async(this, null, function* () {
    const { renderer } = settings;
    const pageContainer = new PageContainer(settings, {
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      title: "Clipping Tests"
    });
    yield paginateTestRows(pageContainer, [
      {
        title: "Standard node clips DIRECT children that are outside of its bounds",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const clipContainerTopLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerTopLeft
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerTopRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          renderer.createNode({
            x: 100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerTopRight
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          renderer.createNode({
            x: 100,
            y: 100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerBottomRight
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          renderer.createNode({
            x: -100,
            y: 100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerBottomLeft
          });
          curX += SQUARE_SIZE + PADDING;
          const clipAllSides = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE * 2,
            height: SQUARE_SIZE * 2,
            src: robotImg,
            parent: clipAllSides
          });
          return SQUARE_SIZE;
        })
      },
      {
        title: "Standard node clips ANCESTOR children that are outside of its bounds",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const clipContainerTopLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerTopLeft2 = renderer.createNode({
            parent: clipContainerTopLeft
          });
          renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerTopLeft2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerTopRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerTopRight2 = renderer.createNode({
            parent: clipContainerTopRight
          });
          renderer.createNode({
            x: 100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerTopRight2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerBottomRight2 = renderer.createNode({
            parent: clipContainerBottomRight
          });
          renderer.createNode({
            x: 100,
            y: 100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerBottomRight2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerBottomLeft2 = renderer.createNode({
            parent: clipContainerBottomLeft
          });
          renderer.createNode({
            x: -100,
            y: 100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerBottomLeft2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipAllSides = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipAllSides2 = renderer.createNode({
            parent: clipAllSides
          });
          renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE * 2,
            height: SQUARE_SIZE * 2,
            src: robotImg,
            parent: clipAllSides2
          });
          rowNode.height = SQUARE_SIZE;
          return SQUARE_SIZE;
        })
      },
      {
        title: "Nested clipping nodes clip children that are outside of their interesected bounds",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const clipContainerTopLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerTopLeft2 = renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 4278190335,
            src: robotImg,
            parent: clipContainerTopLeft,
            clipping: true
          });
          renderer.createNode({
            x: 50,
            y: 50,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            src: robotImg,
            parent: clipContainerTopLeft2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerTopRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerTopRight2 = renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 4278190335,
            src: robotImg,
            parent: clipContainerTopRight,
            clipping: true
          });
          renderer.createNode({
            x: 150,
            y: 50,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            src: robotImg,
            parent: clipContainerTopRight2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomRight = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerBottomRight2 = renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 4278190335,
            src: robotImg,
            parent: clipContainerBottomRight,
            clipping: true
          });
          renderer.createNode({
            x: 150,
            y: 150,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            src: robotImg,
            parent: clipContainerBottomRight2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerBottomLeft = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerBottomLeft2 = renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 4278190335,
            src: robotImg,
            parent: clipContainerBottomLeft,
            clipping: true
          });
          renderer.createNode({
            x: 50,
            y: 150,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            src: robotImg,
            parent: clipContainerBottomLeft2
          });
          curX += SQUARE_SIZE + PADDING;
          const clipContainerAllSides = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 16711935,
            parent: rowNode,
            clipping: true
          });
          const clipContainerAllSides2 = renderer.createNode({
            x: -100,
            y: -100,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            color: 4278190335,
            src: robotImg,
            parent: clipContainerAllSides,
            clipping: true
          });
          renderer.createNode({
            x: 50,
            y: 50,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            src: robotImg,
            parent: clipContainerAllSides2
          });
          return SQUARE_SIZE;
        })
      },
      {
        title: "Canvas text clips ANCESTOR text node children that is outside of its bounds",
        content: (rowNode) => __async(this, null, function* () {
          const curX = 0;
          const parent = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent: rowNode,
            clipping: true
          });
          renderer.createTextNode({
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent,
            fontFamily: "Ubuntu",
            fontSize: 40,
            color: 255,
            textRendererOverride: "canvas",
            text: "Canvas ancestor clipping"
          });
          return SQUARE_SIZE;
        })
      },
      {
        title: "SDF text clips ANCESTOR text node children that is outside of its bounds",
        content: (rowNode) => __async(this, null, function* () {
          const curX = 0;
          const parent = renderer.createNode({
            x: curX,
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent: rowNode,
            clipping: true
          });
          renderer.createTextNode({
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent,
            fontFamily: "Ubuntu",
            fontSize: 40,
            color: 255,
            textRendererOverride: "sdf",
            text: "SDF ancestor clipping"
          });
          return SQUARE_SIZE;
        })
      },
      {
        title: "Clipping bounds are scaled with the `scale` property",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const containerProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent: rowNode,
            color: 16711935,
            clipping: true
          };
          const clippingParentProps = {
            mount: 0.5,
            x: SQUARE_SIZE / 2,
            y: SQUARE_SIZE / 2,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            clipping: true
            // rotation: Math.PI / 4
          };
          const clippingChildProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            mount: 0.5,
            src: robotImg
          };
          const container = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent
          }));
          curX += SQUARE_SIZE + PADDING;
          const dim = yield waitForLoadedDimensions(
            renderer.createTextNode({
              mountY: 0.5,
              x: curX,
              y: SQUARE_SIZE / 2,
              text: "scale 2 >",
              parent: rowNode
            })
          );
          curX += dim.width + PADDING;
          const container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent2 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container2,
            scale: 2
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent2
          }));
          curX += SQUARE_SIZE + PADDING;
          yield waitForLoadedDimensions(
            renderer.createTextNode({
              mountY: 0.5,
              x: curX,
              y: SQUARE_SIZE / 2,
              text: "pivot 0 >",
              parent: rowNode
            })
          );
          curX += dim.width + PADDING;
          const container3 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent3 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container3,
            scale: 2,
            pivot: 0
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent3
          }));
          curX += SQUARE_SIZE + PADDING;
          yield waitForLoadedDimensions(
            renderer.createTextNode({
              mountY: 0.5,
              x: curX,
              y: SQUARE_SIZE / 2,
              text: "pivot 1 >",
              parent: rowNode
            })
          );
          curX += dim.width + PADDING;
          const container4 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent4 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container4,
            scale: 2,
            pivot: 1
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent4
          }));
          return SQUARE_SIZE;
        })
      },
      {
        title: "Clipping is automatically disabled when node is rotated",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const containerProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            parent: rowNode,
            color: 16711935,
            clipping: true
          };
          const clippingParentProps = {
            mount: 0.5,
            x: SQUARE_SIZE / 2,
            y: SQUARE_SIZE / 2,
            width: SQUARE_SIZE / 2,
            height: SQUARE_SIZE / 2,
            clipping: true
          };
          const clippingChildProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE,
            mount: 0.5,
            src: robotImg
          };
          const container = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent
          }));
          curX += SQUARE_SIZE + PADDING;
          const dimensions = yield waitForLoadedDimensions(
            renderer.createTextNode({
              mountY: 0.5,
              x: curX,
              y: SQUARE_SIZE / 2,
              text: "rotate 45 degrees >",
              parent: rowNode
            })
          );
          curX += dimensions.width + PADDING;
          const container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          const clippingParent2 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
            parent: container2,
            rotation: deg2Rad(45)
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
            parent: clippingParent2
          }));
          return SQUARE_SIZE;
        })
      }
    ]);
    return pageContainer;
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=clipping-DjKMjNqw.js.map
