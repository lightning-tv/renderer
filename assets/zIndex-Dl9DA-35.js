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
const Colors = {
  Black: 255,
  Red: 4278190335,
  Green: 16711935,
  Blue: 65535,
  Magenta: 4278255615,
  Gray: 2139062271,
  White: 4294967295
};
function automation(settings) {
  return __async(this, null, function* () {
    yield test(settings);
    yield settings.snapshot();
  });
}
function test(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    renderer.createTextNode({
      x: 100,
      y: 100,
      width: 400,
      height: 268,
      color: 4294967295,
      alpha: 1,
      text: "These should neatly stack on top of each other.",
      contain: "both",
      fontFamily: "Ubuntu",
      fontSize: 30,
      textAlign: "center",
      parent: testRoot,
      zIndex: 3
    });
    const generatedRectangles = [];
    Array(10).fill(null).forEach((_, i) => {
      const color = Object.keys(Colors)[i % Object.keys(Colors).length];
      generatedRectangles.push(
        renderer.createNode({
          x: 200 + i * 20,
          y: 200 + i * 20,
          width: 200,
          height: 200,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          color: Colors[color],
          shader: renderer.createShader("RoundedRectangle", {
            radius: 2
          }),
          zIndex: 10 + (i + 1),
          parent: testRoot
        })
      );
    });
    const parentRect = renderer.createNode({
      x: 800,
      y: 200,
      width: 600,
      height: 600,
      color: Colors.Gray,
      // shader: renderer.createShader('RoundedRectangle', {
      //   radius: 40,
      // }),
      zIndex: 2,
      parent: testRoot,
      zIndexLocked: 1
    });
    renderer.createNode({
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      color: Colors.White,
      // shader: renderer.createShader('RoundedRectangle', {
      //   radius: 40,
      // }),
      zIndex: 4,
      parent: parentRect
    });
    renderer.createNode({
      x: 120,
      y: 120,
      width: 200,
      height: 200,
      color: Colors.Red,
      // shader: renderer.createShader('RoundedRectangle', {
      //   radius: 40,
      // }),
      zIndex: 5,
      parent: parentRect
    });
    renderer.createTextNode({
      x: 700,
      y: 100,
      width: 700,
      height: 268,
      color: 4294967295,
      alpha: 1,
      text: "Green box should overlap even though it has a lower zIndex because the parent is locked",
      contain: "both",
      fontFamily: "Ubuntu",
      fontSize: 30,
      textAlign: "center",
      parent: testRoot,
      zIndex: 3
    });
    renderer.createNode({
      x: 750,
      y: 300,
      width: 400,
      height: 100,
      color: Colors.Green,
      // shader: renderer.createShader('RoundedRectangle', {
      //   radius: 40,
      // }),
      zIndex: 2,
      parent: testRoot
    });
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        generatedRectangles.forEach((rect) => {
          rect.zIndex = 100 - rect.zIndex;
        });
      }
    });
    renderer.createNode({
      x: 0,
      y: 0,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
      zIndex: 1489014829218491e11,
      // eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
      zIndexLocked: 1489014829218491e11,
      parent: testRoot
    });
    renderer.createNode({
      x: 0,
      y: 900,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
      zIndex: -1489014829218491e11,
      // eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
      zIndexLocked: -1489014829218491e11,
      parent: testRoot
    });
    renderer.createNode({
      x: 1e3,
      y: 900,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // @ts-expect-error Invalid prop test
      zIndex: "boop",
      // @ts-expect-error Invalid prop test
      zIndexLocked: "boop",
      parent: testRoot
    });
    renderer.createNode({
      x: 1e3,
      y: 0,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // @ts-expect-error Invalid prop test
      zIndex: true,
      // @ts-expect-error Invalid prop test
      zIndexLocked: true,
      parent: testRoot
    });
    renderer.createNode({
      x: 1e3,
      y: 0,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // @ts-expect-error Invalid prop test
      zIndex: null,
      // @ts-expect-error Invalid prop test
      zIndexLocked: null,
      parent: testRoot
    });
    renderer.createNode({
      x: 200,
      y: 0,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      zIndex: void 0,
      zIndexLocked: void 0,
      parent: testRoot
    });
    renderer.createNode({
      x: 200,
      y: 900,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // @ts-expect-error Invalid prop test
      // eslint-disable-next-line  @typescript-eslint/no-empty-function
      zIndex: () => {
      },
      // @ts-expect-error Invalid prop test
      // eslint-disable-next-line  @typescript-eslint/no-empty-function
      zIndexLocked: () => {
      },
      parent: testRoot
    });
    renderer.createNode({
      x: 500,
      y: 900,
      width: 10,
      height: 10,
      color: 16777215,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 2
      }),
      // @ts-expect-error Invalid prop test
      zIndex: {},
      // @ts-expect-error Invalid prop test
      zIndexLocked: {},
      parent: testRoot
    });
  });
}
export {
  Colors,
  automation,
  test as default
};
//# sourceMappingURL=zIndex-Dl9DA-35.js.map
