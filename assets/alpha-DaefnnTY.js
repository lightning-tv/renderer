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
    const parent = renderer.createNode({
      x: 200,
      y: 240,
      width: 500,
      height: 500,
      color: 255,
      parent: testRoot,
      zIndex: 0,
      zIndexLocked: 1,
      alpha: 0.5
    });
    renderer.createNode({
      x: 800,
      y: 0,
      width: 500,
      height: 500,
      color: 4278190335,
      parent,
      zIndex: 12,
      alpha: 1
    });
    console.log("ready!");
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=alpha-DaefnnTY.js.map
