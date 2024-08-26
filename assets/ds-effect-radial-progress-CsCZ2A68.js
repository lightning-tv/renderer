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
      x: 200,
      y: 100,
      width: 250,
      height: 250,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radialProgress",
            props: {
              progress: 0.6
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(90),
              colors: [4278190335, 16711935]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 500,
      y: 100,
      width: 250,
      height: 250,
      color: 4294967040,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radialProgress",
            props: {
              progress: 1,
              color: 255
            }
          },
          {
            type: "radialProgress",
            props: {
              progress: 0.2
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(90),
              colors: [4278190335, 16711935]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 800,
      y: 100,
      width: 250,
      height: 250,
      color: 4294967040,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radialProgress",
            props: {
              progress: 1,
              color: 255,
              range: degToRad(180)
            }
          },
          {
            type: "radialProgress",
            props: {
              progress: 0.2,
              range: degToRad(180)
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(90),
              colors: [4278190335, 16711935]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 1100,
      y: 100,
      width: 250,
      height: 250,
      color: 4294967040,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radialProgress",
            props: {
              progress: 1,
              color: 255,
              offset: -degToRad(120),
              range: degToRad(240)
            }
          },
          {
            type: "radialProgress",
            props: {
              progress: 0.2,
              offset: -degToRad(120),
              range: degToRad(240)
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(90),
              colors: [4278190335, 16711935]
            }
          }
        ]
      }),
      parent: testRoot
    });
    renderer.createNode({
      x: 1400,
      y: 100,
      width: 250,
      height: 250,
      color: 4294967040,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            type: "radialProgress",
            props: {
              progress: 1,
              color: 255,
              width: 30,
              offset: -degToRad(120),
              range: degToRad(240)
            }
          },
          {
            type: "radialProgress",
            props: {
              progress: 0.2,
              width: 30,
              offset: -degToRad(120),
              range: degToRad(240)
            }
          },
          {
            type: "linearGradient",
            props: {
              angle: degToRad(90),
              colors: [4278190335, 16711935]
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
//# sourceMappingURL=ds-effect-radial-progress-CsCZ2A68.js.map
