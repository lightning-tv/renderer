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
function waitForLoadedDimensions(node) {
  return __async(this, null, function* () {
    return new Promise((resolve) => {
      node.once("loaded", (_node, payload) => {
        const { width, height } = payload.dimensions;
        resolve({
          width,
          height
        });
      });
    });
  });
}
export {
  waitForLoadedDimensions as w
};
//# sourceMappingURL=utils-BNMqzZsE.js.map
