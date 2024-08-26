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
function mountPivot(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const randomColor = () => {
      const randomInt = Math.floor(Math.random() * Math.pow(2, 32));
      const hexString = randomInt.toString(16).padStart(8, "0");
      return parseInt(hexString, 16);
    };
    const rnd = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      color: 255,
      parent: testRoot
    });
    renderer.createNode({
      x: 0,
      y: 1080 / 2,
      width: 1920,
      height: 4,
      color: 4294967295,
      parent: testRoot,
      mountY: 0.5
    });
    renderer.createNode({
      x: 1920 / 2,
      y: 0,
      width: 4,
      height: 1080,
      color: 4294967295,
      parent: testRoot,
      mountX: 0.5
    });
    const pivotX = 0.5;
    const pivotY = 0.5;
    const mountX = 0.5;
    const mountY = 0.5;
    const node = renderer.createNode({
      x: 1920 / 2,
      y: 1080 / 2,
      width: 500,
      height: 500,
      colorBottom: randomColor() * 4294967210,
      colorTop: randomColor() * 4294967210,
      parent: testRoot,
      shader: renderer.createShader("RoundedRectangle", {
        radius: rnd(10, 50)
      }),
      mountX,
      mountY,
      pivotX,
      pivotY
    });
    renderer.createNode({
      x: pivotX * 500,
      y: pivotY * 500,
      width: 20,
      height: 20,
      color: 4294967295,
      parent: node,
      shader: renderer.createShader("RoundedRectangle", {
        radius: 10
      }),
      scale: 1,
      mount: 0.5
    });
    setTimeout(() => __async(this, null, function* () {
      const dimension = node.animate(
        {
          width: 1920
        },
        {
          duration: 450,
          loop: false,
          stopMethod: "reverse",
          easing: "ease-in-out"
        }
      ).start();
      yield dimension.waitUntilStopped();
      const rotate = node.animate(
        {
          rotation: Math.PI
        },
        {
          duration: rnd(1500, 1700),
          loop: false,
          stopMethod: "reverse",
          easing: "ease-in-out"
        }
      ).start();
      yield rotate.waitUntilStopped();
    }), 2300);
  });
}
export {
  mountPivot as default
};
//# sourceMappingURL=mount-pivot-By4b-lO5.js.map