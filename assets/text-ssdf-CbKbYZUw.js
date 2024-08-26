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
function test(settings) {
  return __async(this, null, function* () {
    const { renderer, testRoot } = settings;
    testRoot.width = 200;
    testRoot.height = 200;
    testRoot.color = 4294967295;
    renderer.createTextNode({
      text: "SSDF",
      color: 255,
      fontFamily: "Ubuntu-ssdf",
      parent: testRoot,
      fontSize: 80,
      lineHeight: 80 * 1.2
    });
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-ssdf-CbKbYZUw.js.map
