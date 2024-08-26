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
function animation(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const node = renderer.createNode({
      x: 0,
      y: 0,
      width: 1920,
      height: 1080,
      color: 255,
      parent: testRoot
    });
    const animatableNode = renderer.createNode({
      x: 0,
      y: 300,
      width: 200,
      height: 200,
      color: 4294967295,
      parent: node
    });
    const easingLabel = renderer.createTextNode({
      parent: node,
      x: 40,
      y: 40,
      fontFamily: "Ubuntu",
      fontSize: 40,
      text: ""
    });
    renderer.createTextNode({
      parent: node,
      x: 40,
      y: 90,
      fontFamily: "Ubuntu",
      fontSize: 20,
      text: "press left or right arrow key to change easing"
    });
    const easings = [
      "linear",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "ease-in-sine",
      "ease-out-sine",
      "ease-in-out-sine",
      "ease-in-cubic",
      "ease-out-cubic",
      "ease-in-out-cubic",
      "ease-in-circ",
      "ease-out-circ",
      "ease-in-out-circ",
      "ease-in-back",
      "ease-out-back",
      "ease-in-out-back",
      "cubic-bezier(0,1.35,.99,-0.07)",
      "cubic-bezier(.41,.91,.99,-0.07)",
      "loopStopMethodReverse",
      "loopStopMethodReset",
      "loop"
    ];
    let animationIndex = 0;
    let currentAnimation;
    const execEasing = (index = 0) => {
      var _a;
      const easing = (_a = easings[index]) != null ? _a : "linear";
      easingLabel.text = "Easing demo: ".concat(easing);
      const animationSettings = {
        duration: 2e3,
        delay: 500,
        loop: false,
        stopMethod: false,
        easing: "linear"
      };
      animationSettings.easing = easing;
      animatableNode.x = 0;
      if (easing === "loopStopMethodReverse") {
        animationSettings.easing = "linear";
        animationSettings.loop = true;
        animationSettings.stopMethod = "reverse";
      } else if (easing === "loopStopMethodReset") {
        animationSettings.easing = "linear";
        animationSettings.loop = true;
        animationSettings.stopMethod = "reset";
      } else if (easing === "loop") {
        animationSettings.easing = "linear";
        animationSettings.loop = true;
      } else {
        animationSettings.loop = false;
        animationSettings.stopMethod = false;
      }
      if (currentAnimation) {
        currentAnimation.stop();
      }
      currentAnimation = animatableNode.animate(
        {
          x: renderer.settings.appWidth - animatableNode.width
        },
        animationSettings
        // Remove the unnecessary assertion
      );
      currentAnimation.start();
    };
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        animationIndex++;
      }
      if (e.key === "ArrowLeft") {
        animationIndex--;
      }
      animationIndex = (animationIndex % easings.length + easings.length) % easings.length;
      execEasing(animationIndex);
    });
    execEasing(animationIndex);
  });
}
export {
  animation as default
};
//# sourceMappingURL=animation-BROCmLCA.js.map
