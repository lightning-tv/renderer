import { p as paginateTestRows } from "./paginateTestRows-BTHNpL4T.js";
import { P as PageContainer } from "./PageContainer-CIwL_Yzz.js";
import { d as deg2Rad } from "./index-CRSMeQPo.js";
import "./LocalStorage-CEyDmtly.js";
const testscreenImg = "/renderer/assets/testscreen-B6KykUZE.png";
const testscreenRImg = "/renderer/assets/testscreen_rotated-fXg0gRdD.png";
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
const SQUARE_SIZE = 600;
const PADDING = 20;
function test(settings) {
  return __async(this, null, function* () {
    const { renderer } = settings;
    const pageContainer = new PageContainer(settings, {
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      title: "Resizemode Tests"
    });
    yield paginateTestRows(pageContainer, [
      {
        title: "Texture Width > Height - resizeMode cover maximum width of node and clipY - 0, 0.5, 1",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          for (let i = 0; i < 3; i++) {
            renderer.createNode({
              x: curX,
              width: SQUARE_SIZE,
              height: SQUARE_SIZE - 300,
              texture: renderer.createTexture("ImageTexture", {
                src: testscreenImg
              }),
              textureOptions: {
                resizeMode: {
                  type: "cover",
                  clipY: [0, 0.5, 1][i],
                  clipX: [0, 0.5, 1][i]
                }
              },
              parent: rowNode
            });
            curX += SQUARE_SIZE + PADDING;
          }
          rowNode.height = SQUARE_SIZE - 300;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width > Height - resizeMode cover maximum height of node and clipX - 0, 0.5, 1",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          for (let i = 0; i < 3; i++) {
            renderer.createNode({
              x: curX,
              width: SQUARE_SIZE,
              height: SQUARE_SIZE - 200,
              texture: renderer.createTexture("ImageTexture", {
                src: testscreenImg
              }),
              textureOptions: {
                resizeMode: {
                  type: "cover",
                  clipY: [0, 0.5, 1][i],
                  clipX: [0, 0.5, 1][i]
                }
              },
              parent: rowNode
            });
            curX += SQUARE_SIZE + PADDING;
          }
          rowNode.height = SQUARE_SIZE - 200;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width < Height - resizeMode cover maximum width of node and clipY - 0, 0.5, 1",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          for (let i = 0; i < 3; i++) {
            renderer.createNode({
              x: curX,
              width: SQUARE_SIZE,
              height: SQUARE_SIZE - 300,
              texture: renderer.createTexture("ImageTexture", {
                src: testscreenRImg
              }),
              textureOptions: {
                resizeMode: {
                  type: "cover",
                  clipY: [0, 0.5, 1][i],
                  clipX: [0, 0.5, 1][i]
                }
              },
              parent: rowNode
            });
            curX += SQUARE_SIZE + PADDING;
          }
          rowNode.height = SQUARE_SIZE - 300;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width < Height - resizeMode cover maximum height of node and clipX - 0,0.25,0.5,0.75,1",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          for (let i = 0; i < 5; i++) {
            renderer.createNode({
              x: curX,
              width: SQUARE_SIZE - 400,
              height: SQUARE_SIZE - 100,
              texture: renderer.createTexture("ImageTexture", {
                src: testscreenRImg
              }),
              textureOptions: {
                resizeMode: {
                  type: "cover",
                  clipX: [0, 0.25, 0.5, 0.75, 1][i],
                  clipY: [0, 0.25, 0.5, 0.75, 1][i]
                }
              },
              parent: rowNode
            });
            curX += SQUARE_SIZE + PADDING - 330;
          }
          rowNode.height = SQUARE_SIZE - 200;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width > Height - resizeMode contain maximum height of node",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const containerProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE - 300,
            parent: rowNode,
            color: 858993663,
            clipping: true
          };
          const textureNodeProps = {
            width: containerProps.width,
            height: containerProps.height,
            clipping: true,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenImg
            }),
            textureOptions: {
              resizeMode: {
                type: "contain"
              }
            }
          };
          const container1 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            parent: container1
          }));
          curX += containerProps.width + PADDING;
          rowNode.height = containerProps.height;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width > Height - resizeMode contain maximum width of node",
        content: (rowNode) => __async(this, null, function* () {
          const curX = 0;
          const containerProps = {
            width: SQUARE_SIZE,
            height: SQUARE_SIZE - 200,
            parent: rowNode,
            color: 858993663,
            clipping: true
          };
          const textureNodeProps = {
            width: containerProps.width,
            height: containerProps.height,
            clipping: true,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenImg
            }),
            textureOptions: {
              resizeMode: {
                type: "contain"
              }
            }
          };
          const container1 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            parent: container1
          }));
          rowNode.height = containerProps.height;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width < Height - resizeMode contain maximum width of node",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const containerProps = {
            width: SQUARE_SIZE - 400,
            height: SQUARE_SIZE - 200,
            parent: rowNode,
            color: 858993663,
            clipping: true
          };
          const textureNodeProps = {
            width: containerProps.width,
            height: containerProps.height,
            clipping: true,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenRImg
            }),
            textureOptions: {
              resizeMode: {
                type: "contain"
              }
            }
          };
          const container1 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            parent: container1
          }));
          curX += containerProps.width + PADDING;
          const container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            mount: 0.5,
            x: containerProps.width / 2,
            y: containerProps.height / 2,
            pivotX: 0.5,
            rotation: deg2Rad(45),
            parent: container2
          }));
          rowNode.height = containerProps.height;
          return rowNode.height;
        })
      },
      {
        title: "Texture Width < Height - resizeMode contain maximum height of node",
        content: (rowNode) => __async(this, null, function* () {
          let curX = 0;
          const containerProps = {
            width: SQUARE_SIZE - 150,
            height: SQUARE_SIZE - 200,
            parent: rowNode,
            color: 858993663,
            clipping: true
          };
          const textureNodeProps = {
            width: containerProps.width,
            height: containerProps.height,
            clipping: true,
            texture: renderer.createTexture("ImageTexture", {
              src: testscreenRImg
            }),
            textureOptions: {
              resizeMode: {
                type: "contain"
              }
            }
          };
          const container1 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            parent: container1
          }));
          curX += containerProps.width + PADDING;
          const container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
            x: curX
          }));
          renderer.createNode(__spreadProps(__spreadValues({}, textureNodeProps), {
            mount: 0.5,
            x: containerProps.width / 2,
            y: containerProps.height / 2,
            pivotX: 0.5,
            rotation: deg2Rad(45),
            parent: container2
          }));
          rowNode.height = containerProps.height;
          return rowNode.height;
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
//# sourceMappingURL=resize-mode-Bw74lIkW.js.map
