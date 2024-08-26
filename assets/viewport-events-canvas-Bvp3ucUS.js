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
function viewportEventsCanvas(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    renderer.createTextNode({
      text: "Press space to start animation, arrow keys to move, enter to reset",
      fontSize: 30,
      x: 10,
      y: 960,
      fontFamily: "Ubuntu-ssdf",
      parent: testRoot
    });
    const redStatus = renderer.createTextNode({
      text: "Red Status: ",
      fontSize: 30,
      x: 10,
      y: 50,
      fontFamily: "Ubuntu-ssdf",
      parent: testRoot
    });
    const blueStatus = renderer.createTextNode({
      text: "Blue Status: ",
      fontSize: 30,
      x: 10,
      y: 10,
      fontFamily: "Ubuntu-ssdf",
      parent: testRoot
    });
    const boundaryRect = renderer.createNode({
      x: 1920 / 2 - 1920 * 0.75 / 2,
      y: 1080 / 2 - 1080 * 0.75 / 2,
      width: 1440,
      height: 810,
      color: 255,
      clipping: true,
      parent: testRoot
    });
    const redText = renderer.createTextNode({
      x: 500,
      y: 305,
      alpha: 1,
      width: 200,
      height: 200,
      color: 4278190335,
      pivot: 0,
      text: "red",
      fontSize: 80,
      fontFamily: "sans-serif",
      parent: boundaryRect
    });
    redText.on("outOfBounds", () => {
      console.log("red text out of bounds");
      redStatus.text = "Red Status: text out of bounds";
      redStatus.color = 4278190335;
    });
    redText.on("inViewport", () => {
      console.log("red text in view port");
      redStatus.text = "Red Status: text in view port";
      redStatus.color = 16711935;
    });
    redText.on("inBounds", () => {
      console.log("red text inside render bounds");
      redStatus.text = "Red Status: text in bounds";
      redStatus.color = 4294902015;
    });
    const blueText = renderer.createTextNode({
      x: 1920 / 2 - 200,
      y: 100,
      alpha: 1,
      width: 200,
      height: 200,
      color: 65535,
      pivot: 0,
      text: "blue",
      fontSize: 80,
      fontFamily: "sans-serif",
      parent: testRoot
    });
    blueText.on("outOfBounds", () => {
      console.log("blue text ouf ot bounds");
      blueStatus.text = "Blue Status: blue text out of bounds";
      blueStatus.color = 4278190335;
    });
    blueText.on("inViewport", () => {
      console.log("blue text in view port");
      blueStatus.text = "Blue Status: blue text in view port";
      blueStatus.color = 16711935;
    });
    blueText.on("inBounds", () => {
      console.log("blue text inside render bounds");
      blueStatus.text = "Blue Status: blue text in bounds";
      blueStatus.color = 4294902015;
    });
    let runAnimation = false;
    const animate = () => __async(this, null, function* () {
      redText.animate(
        {
          x: -500
        },
        {
          duration: 4e3
        }
      ).start();
      yield blueText.animate(
        {
          x: -1200
        },
        {
          duration: 4e3
        }
      ).start().waitUntilStopped();
      redText.x = 1920 + 400;
      blueText.x = 1920 + 400;
      redText.animate(
        {
          x: 520
        },
        {
          duration: 4e3
        }
      ).start();
      yield blueText.animate(
        {
          x: 1920 / 2 - 200
        },
        {
          duration: 4e3
        }
      ).start().waitUntilStopped();
      if (runAnimation) {
        setTimeout(animate, 2e3);
      }
    });
    const moveModifier = 10;
    window.onkeydown = (e) => {
      if (e.key === " ") {
        runAnimation = !runAnimation;
        if (runAnimation) {
          animate();
        }
      }
      if (e.key === "ArrowRight") {
        redText.x += moveModifier;
        blueText.x += moveModifier;
      }
      if (e.key === "ArrowLeft") {
        redText.x -= moveModifier;
        blueText.x -= moveModifier;
      }
      if (e.key === "Enter") {
        runAnimation = false;
        redText.x = 520;
        blueText.x = 1920 / 2 - 200;
      }
    };
  });
}
export {
  viewportEventsCanvas as default
};
//# sourceMappingURL=viewport-events-canvas-Bvp3ucUS.js.map
