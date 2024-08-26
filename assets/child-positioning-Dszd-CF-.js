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
function childPositioning(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const rand = (min, max) => {
      return Math.random() * (max - min) + min;
    };
    new Array(16).fill(0).forEach((el, idx) => {
      const node = renderer.createNode({
        x: idx % 5 * 250 + 100,
        y: Math.floor(idx / 5) * 250 + 100,
        width: rand(50, 120),
        height: rand(50, 120),
        color: 65450,
        parent: testRoot
      });
      renderer.createNode({
        x: 10,
        y: 10,
        width: 20,
        height: 20,
        color: 4294967295,
        parent: node,
        scale: 1
      });
      renderer.createNode({
        x: 40,
        y: 40,
        width: 10,
        height: 10,
        color: 4294967295,
        parent: node,
        scale: 1,
        rotation: 0.5
      });
      setTimeout(() => {
        node.animate(
          {
            rotation: Math.PI * 2,
            x: rand(-500, 1700),
            y: rand(-500, 900),
            scale: 2
          },
          {
            duration: 4e3,
            loop: true,
            easing: "cubic-bezier(0.5, 0.5, 0.5, 0.5)"
          }
        ).start();
      }, 1400);
    });
  });
}
export {
  childPositioning as default
};
//# sourceMappingURL=child-positioning-Dszd-CF-.js.map
