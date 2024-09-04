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
function viewportEvents(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    renderer.createTextNode({
      text: "Press space to start animation, arrow keys to move, enter to reset",
      fontSize: 30,
      x: 10,
      y: 960,
      parent: testRoot
    });
    const redStatus = renderer.createTextNode({
      text: "Red Status: ",
      fontSize: 30,
      x: 10,
      y: 50,
      parent: testRoot
    });
    const blueStatus = renderer.createTextNode({
      text: "Blue Status: ",
      fontSize: 30,
      x: 10,
      y: 10,
      parent: testRoot
    });
    const yellowStatus = renderer.createTextNode({
      text: "Yellow Status: ",
      fontSize: 30,
      x: 800,
      y: 10,
      parent: testRoot
    });
    const clippingStatus = renderer.createTextNode({
      text: "Clipping: ON",
      fontSize: 30,
      x: 800,
      y: 50,
      parent: testRoot,
      color: 16711935
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
    const redRect = renderer.createNode({
      // skipRender: true,
      x: 520,
      y: 305,
      alpha: 1,
      width: 200,
      height: 200,
      color: 4278190335,
      pivot: 0,
      parent: boundaryRect
    });
    const yellow1Rect = renderer.createNode({
      x: 20,
      y: 20,
      alpha: 1,
      width: 20,
      height: 20,
      color: 4294902015,
      pivot: 0,
      parent: redRect
    });
    const yellow2Rect = renderer.createNode({
      x: 50,
      y: 50,
      alpha: 1,
      width: 20,
      height: 20,
      color: 4294902015,
      pivot: 0,
      parent: redRect
    });
    const yellow3Rect = renderer.createNode({
      x: 80,
      y: 80,
      alpha: 1,
      width: 20,
      height: 20,
      color: 4294902015,
      pivot: 0,
      parent: redRect
    });
    const yellow4Rect = renderer.createNode({
      x: 110,
      y: 110,
      alpha: 1,
      width: 20,
      height: 20,
      color: 4294902015,
      pivot: 0,
      parent: redRect
    });
    redRect.on("outOfBounds", () => {
      console.log("red rect out of bounds");
      redStatus.text = "Red Status: rect out of bounds";
      redStatus.color = 4278190335;
    });
    redRect.on("inViewport", () => {
      console.log("red rect in view port");
      redStatus.text = "Red Status: rect in view port";
      redStatus.color = 16711935;
    });
    redRect.on("inBounds", () => {
      console.log("red rect inside render bounds");
      redStatus.text = "Red Status: rect in bounds";
      redStatus.color = 4294902015;
    });
    const yellowRectState = [0, 0, 0, 0];
    const updateYellowState = (state, yellowIdx) => {
      let stateString = "";
      yellowRectState[yellowIdx] = state;
      Array(4).fill(0).forEach((_, i) => {
        stateString += "".concat(yellowRectState[i], " ");
      });
      yellowStatus.text = "Yellow Status: ".concat(stateString);
    };
    yellow1Rect.on("inBounds", () => {
      console.log("yellow 1 rect inside render bounds");
      updateYellowState(1, 0);
    });
    yellow1Rect.on("inViewport", () => {
      console.log("yellow 1 rect in view port");
      updateYellowState(2, 0);
    });
    yellow1Rect.on("outOfBounds", () => {
      console.log("yellow 1 rect out of bounds");
      updateYellowState(0, 0);
    });
    yellow2Rect.on("inBounds", () => {
      console.log("yellow 2 rect inside render bounds");
      updateYellowState(1, 1);
    });
    yellow2Rect.on("inViewport", () => {
      console.log("yellow 2 rect in view port");
      updateYellowState(2, 1);
    });
    yellow2Rect.on("outOfBounds", () => {
      console.log("yellow 2 rect out of bounds");
      updateYellowState(0, 1);
    });
    yellow3Rect.on("inBounds", () => {
      console.log("yellow 3 rect inside render bounds");
      updateYellowState(1, 2);
    });
    yellow3Rect.on("inViewport", () => {
      console.log("yellow 3 rect in view port");
      updateYellowState(2, 2);
    });
    yellow3Rect.on("outOfBounds", () => {
      console.log("yellow 3 rect out of bounds");
      updateYellowState(0, 2);
    });
    yellow4Rect.on("inBounds", () => {
      console.log("yellow 4 rect inside render bounds");
      updateYellowState(1, 3);
    });
    yellow4Rect.on("inViewport", () => {
      console.log("yellow 4 rect in view port");
      updateYellowState(2, 3);
    });
    yellow4Rect.on("outOfBounds", () => {
      console.log("yellow 4 rect out of bounds");
      updateYellowState(0, 3);
    });
    const blueRect = renderer.createNode({
      x: 1920 / 2 - 200,
      y: 100,
      alpha: 1,
      width: 200,
      height: 200,
      color: 65535,
      pivot: 0,
      parent: testRoot
    });
    blueRect.on("outOfBounds", () => {
      console.log("blue rect ouf ot bounds");
      blueStatus.text = "Blue Status: blue rect out of bounds";
      blueStatus.color = 4278190335;
    });
    blueRect.on("inViewport", () => {
      console.log("blue rect in view port");
      blueStatus.text = "Blue Status: blue rect in view port";
      blueStatus.color = 16711935;
    });
    blueRect.on("inBounds", () => {
      console.log("blue rect inside render bounds");
      blueStatus.text = "Blue Status: blue rect in bounds";
      blueStatus.color = 4294902015;
    });
    let runAnimation = false;
    const animate = () => __async(this, null, function* () {
      redRect.animate(
        {
          x: -500
        },
        {
          duration: 4e3
        }
      ).start();
      yield blueRect.animate(
        {
          x: -1200
        },
        {
          duration: 4e3
        }
      ).start().waitUntilStopped();
      redRect.x = 1920 + 400;
      blueRect.x = 1920 + 400;
      redRect.animate(
        {
          x: 520
        },
        {
          duration: 4e3
        }
      ).start();
      yield blueRect.animate(
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
        redRect.x += moveModifier;
        blueRect.x += moveModifier;
      }
      if (e.key === "ArrowLeft") {
        redRect.x -= moveModifier;
        blueRect.x -= moveModifier;
      }
      if (e.key === "Enter") {
        runAnimation = false;
        redRect.x = 520;
        blueRect.x = 1920 / 2 - 200;
      }
      if (e.key === "t") {
        boundaryRect.clipping = !boundaryRect.clipping;
        clippingStatus.text = boundaryRect.clipping ? "Clipping: ON" : "Clipping: OFF";
        clippingStatus.color = boundaryRect.clipping ? 16711935 : 4278190335;
      }
    };
  });
}
export {
  viewportEvents as default
};
//# sourceMappingURL=viewport-events-B8ZFtbJB.js.map
