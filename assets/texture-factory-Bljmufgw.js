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
    const randomColor = () => {
      const randomInt = Math.floor(Math.random() * Math.pow(2, 32));
      const hexString = randomInt.toString(16).padStart(8, "0");
      return "#".concat(hexString);
    };
    const rnd = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const FONT_SIZE = 45;
    renderer.createTextNode({
      text: "Texture Factory Test",
      fontSize: FONT_SIZE,
      offsetY: -5,
      parent: testRoot
    });
    function execTest(y, title, setKey) {
      const textNode = renderer.createTextNode({
        text: title,
        fontSize: FONT_SIZE,
        y,
        parent: testRoot
      });
      let factoryRuns = 0;
      const factory = () => {
        factoryRuns++;
        const canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Unable to create canvas 2d context");
        for (let i = 0; i < 10; i++) {
          ctx.fillStyle = randomColor();
          ctx.fillRect(rnd(0, 280), rnd(0, 180), rnd(20, 200), rnd(20, 100));
        }
        return ctx.getImageData(0, 0, 300, 200);
      };
      renderer.createNode({
        color: 4294967295,
        x: 20,
        y: y + 80,
        width: 300,
        height: 200,
        parent: testRoot,
        texture: renderer.createTexture("ImageTexture", {
          src: factory,
          key: setKey ? "test-key-".concat(y) : void 0
        })
      });
      renderer.createNode({
        color: 4294967295,
        x: 340,
        y: y + 80,
        width: 300,
        height: 200,
        parent: testRoot,
        texture: renderer.createTexture("ImageTexture", {
          src: factory,
          key: setKey ? "test-key-".concat(y) : void 0
        })
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let result = "";
          if (setKey && factoryRuns === 1 || !setKey && factoryRuns === 2) {
            textNode.color = 16711935;
            result = "Pass";
          } else {
            textNode.color = 4278190335;
            result = "Fail (".concat(factoryRuns, ")");
          }
          textNode.text += ": ".concat(result);
          if (result === "Pass") resolve(true);
          else reject({ setKey, factoryRuns });
        }, 50);
      });
    }
    yield execTest(80, "1 - No key", false);
    yield execTest(400, "2 - With key", true);
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-factory-Bljmufgw.js.map
