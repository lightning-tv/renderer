import { p as paginateTestRows } from "./paginateTestRows-DyFytvyj.js";
import { P as PageContainer } from "./PageContainer-vZfqw0DQ.js";
import { c as constructTestRow } from "./constructTestRow-Dh7ZSvxW.js";
import { r as robotImg } from "./robot-tJVGEFZ-.js";
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
      title: "Scaling"
    });
    yield paginateTestRows(pageContainer, [
      {
        title: "Base Node (`scale`, mount = 0)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            // mount: 0, (should be default)
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scale: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scale: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scale: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scale`, mount = 0.5)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 0.5,
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scale: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scale: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scale: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scale`, mount = 1)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 1,
            x: 150,
            y: 150,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scale: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scale: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scale: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleX`, mount = 0)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            // mount: 0, (should be default)
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleX: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleX: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleX: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleX`, mount = 0.5)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 0.5,
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleX: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleX: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleX: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleX`, mount = 1)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 1,
            x: 150,
            y: 150,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleX: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleX: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleX: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleY`, mount = 0)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            // mount: 0, (should be default)
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleY: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleY: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleY: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleY`, mount = 0.5)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 0.5,
            x: 100,
            y: 100,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleY: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleY: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleY: 2
            }))
          ]);
        })
      },
      {
        title: "Base Node (`scaleY`, mount = 1)",
        content: (rowNode) => __async(this, null, function* () {
          const nodeProps = {
            mount: 1,
            x: 150,
            y: 150,
            width: 100,
            height: 100,
            src: robotImg
          };
          return yield constructTestRow({ renderer, rowNode }, [
            renderer.createNode(__spreadValues({}, nodeProps)),
            "scale 2 ->\npivot 0.5 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              scaleY: 2
              // pivot: 0.5, (should be default)
            })),
            "pivot 0 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 0,
              scaleY: 2
            })),
            "pivot 1 ->",
            renderer.createNode(__spreadProps(__spreadValues({}, nodeProps), {
              pivot: 1,
              scaleY: 2
            }))
          ]);
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
//# sourceMappingURL=scaling-BohVYL8P.js.map
