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
    yield test(settings);
  });
}
function test(_0) {
  return __async(this, arguments, function* ({
    renderer,
    testRoot,
    snapshot
  }) {
    const nodeSize = {
      width: 300,
      height: 300
    };
    const t1 = renderer.createNode(__spreadProps(__spreadValues({}, nodeSize), {
      x: 90,
      y: 90,
      color: 4278190335,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 100
      }),
      parent: testRoot
    }));
    const t1Radius = renderer.createTextNode({
      mountX: 1,
      x: testRoot.width - 90,
      y: 90,
      fontSize: 40,
      fontFamily: "Ubuntu",
      text: "radius: 100",
      parent: testRoot,
      color: 4294967295
    });
    const t2 = renderer.createNode(__spreadProps(__spreadValues({}, nodeSize), {
      x: 90,
      y: 540,
      color: 16711935,
      shader: renderer.createDynamicShader([
        renderer.createEffect(
          "radius",
          {
            radius: 0
          },
          "r1"
        ),
        renderer.createEffect(
          "border",
          {
            color: 4278255615,
            width: 10
          },
          "e1"
        )
      ]),
      parent: testRoot
    }));
    const t2Radius = renderer.createTextNode({
      mountX: 1,
      x: testRoot.width - 90,
      y: 540,
      fontSize: 40,
      fontFamily: "Ubuntu",
      text: "radius: 0",
      parent: testRoot,
      color: 4294967295
    });
    const t2Border = renderer.createTextNode({
      mountX: 1,
      x: testRoot.width - 90,
      y: 590,
      fontSize: 40,
      fontFamily: "Ubuntu",
      text: "border: 10",
      parent: testRoot,
      color: 4294967295
    });
    yield snapshot({ name: "startup" });
    const shaderAnimation = t1.animate(
      {
        x: 1140,
        shaderProps: {
          radius: 150
        }
      },
      {
        duration: 500
      }
    );
    shaderAnimation.start();
    yield shaderAnimation.waitUntilStopped();
    t1Radius.text = "radius: " + t1.shader.props.radius.toString();
    yield snapshot({ name: "animation1" });
    const shaderAnimation2 = t2.animate(
      {
        x: 1140,
        shaderProps: {
          r1: {
            radius: 150
          },
          e1: {
            width: 50
          }
        }
      },
      {
        duration: 500
      }
    );
    shaderAnimation2.start();
    yield shaderAnimation2.waitUntilStopped();
    t2Radius.text = "radius: " + t2.shader.props.r1.radius.toString();
    t2Border.text = "border: " + t2.shader.props.e1.width.toString();
    yield snapshot({ name: "animation2" });
    console.log("ready!");
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=shader-animation-D90H8k8s.js.map
