import { e as elevatorImg } from "./elevator-C9Se-LCK.js";
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
    yield settings.snapshot();
  });
}
function test(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const degToRad = (deg) => {
      return Math.PI / 180 * deg;
    };
    renderer.createNode({
      x: 0,
      y: 0,
      width: 960,
      height: 540,
      color: 4278190335,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "holePunch",
            props: {
              width: 200,
              height: 200,
              y: 20,
              x: 50,
              radius: 0
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 960,
      y: 0,
      width: 960,
      height: 540,
      color: 4278190335,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "holePunch",
            props: {
              width: 200,
              height: 400,
              y: 120,
              x: 50,
              radius: 0
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(40),
              colors: [
                4278190335,
                16711935,
                4278190335,
                65535,
                4294902015,
                4278190335
              ]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 0,
      y: 540,
      width: 960,
      height: 540,
      color: 4278190335,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "linearGradient",
            props: {
              angle: degToRad(40),
              colors: [
                4278190335,
                16711935,
                4278190335,
                65535,
                4294902015,
                4278190335
              ]
            }
          },
          {
            type: "holePunch",
            props: {
              width: 400,
              height: 400,
              y: 20,
              x: 540,
              radius: [40, 40, 0, 0]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 960,
      y: 540,
      width: 960,
      height: 540,
      src: elevatorImg,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "holePunch",
            props: {
              width: 400,
              height: 200,
              y: 20,
              x: 540,
              radius: 30
            }
          }
        ]
      }),
      parent: testRoot
    });
    console.log("ready!");
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=hole-punch-effect-C9Yo7YIV.js.map
