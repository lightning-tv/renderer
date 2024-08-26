import { l as lightningPng } from "./lightning-C5UL5HX9.js";
import { r as robotImg } from "./robot-tJVGEFZ-.js";
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
const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
function stressMultiTexture(_0) {
  return __async(this, arguments, function* ({
    renderer,
    testRoot,
    perfMultiplier
  }) {
    const numOuterNodes = 100 * perfMultiplier;
    const nodes = [];
    const bg = renderer.createNode({
      width: 1920,
      height: 1080,
      color: 4280166715,
      parent: testRoot
    });
    for (let i = 0; i < numOuterNodes; i++) {
      const node = renderer.createNode(__spreadProps(__spreadValues({
        x: Math.random() * 1920,
        y: Math.random() * 1080
      }, i % 2 === 0 ? {
        width: 505,
        height: 101,
        src: lightningPng
      } : {
        width: 140,
        height: 140,
        src: robotImg
      }), {
        parent: bg
      }));
      nodes.push(node);
    }
    console.log("Created ".concat(numOuterNodes, " nodes with alternating textures"));
    const animate = () => {
      nodes.forEach((node) => {
        node.animate(
          {
            x: randomIntBetween(20, 1740),
            y: randomIntBetween(20, 900),
            rotation: Math.random() * Math.PI
          },
          {
            duration: 3e3,
            easing: "ease-out",
            loop: true,
            stopMethod: "reverse"
          }
        ).start();
      });
    };
    animate();
  });
}
export {
  stressMultiTexture as default
};
//# sourceMappingURL=stress-multi-texture-TDyDMWB2.js.map
