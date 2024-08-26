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
function gradient(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const elements = [
      "colorTl",
      "colorTr",
      "colorBl",
      "colorBr",
      "colorTop",
      "colorBottom",
      "colorLeft",
      "colorRight",
      "color"
    ];
    const nodes = elements.map((element, idx) => {
      return renderer.createNode({
        x: idx % 4 * 300 + 100,
        y: Math.floor(idx / 4) * 300 + 100,
        width: 250,
        height: 250,
        color: 255,
        [element]: 4278190335,
        parent: testRoot
      });
    });
    setTimeout(() => {
      nodes.forEach((node, idx) => {
        var _a;
        node.animate(
          {
            [(_a = elements[idx]) != null ? _a : "color"]: 16711935
          },
          {
            duration: 1e3
          }
        ).start();
      });
    }, 2e3);
    console.log("ready!");
  });
}
export {
  gradient as default
};
//# sourceMappingURL=gradient-M7tIa63t.js.map
