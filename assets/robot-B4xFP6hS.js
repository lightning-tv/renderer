import { r as robotImg } from "./robot-tJVGEFZ-.js";
const environmentImg = "/renderer/assets/environment-CVth_s_M.png";
const doorLeftGroundImg = "/renderer/assets/elevator-door-left-ground-floor-CbPZASjZ.png";
const doorRightGroundImg = "/renderer/assets/elevator-door-right-ground-floor-VvmCRn5D.png";
const doorTopTopImg = "/renderer/assets/elevator-door-top-top-floor-xlIzO6ld.png";
const doorBottomTopImg = "/renderer/assets/elevator-door-bottom-top-floor-mYjhoC1O.png";
const elevatorBgImg = "/renderer/assets/elevator-background-ZN06wPOM.png";
const shadowImg = "/renderer/assets/robot-shadow-B6bO8HxC.png";
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
function robot(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    const elevatorBg = renderer.createNode({
      x: 368,
      y: 228,
      width: 226,
      height: 214,
      zIndex: 0,
      src: elevatorBgImg,
      parent: testRoot
    });
    renderer.createNode({
      x: 368,
      y: 827,
      width: 226,
      height: 214,
      zIndex: 0,
      src: elevatorBgImg,
      parent: testRoot
    });
    const doorLeftGround = renderer.createNode({
      x: 480 - 68,
      y: 827,
      width: 68,
      height: 194,
      zIndex: 2,
      src: doorLeftGroundImg,
      parent: testRoot
    });
    const doorRightGround = renderer.createNode({
      x: 480,
      y: 827,
      width: 68,
      height: 194,
      zIndex: 2,
      src: doorRightGroundImg,
      parent: testRoot
    });
    renderer.createNode({
      x: 0,
      y: 0,
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      zIndex: 3,
      src: environmentImg,
      parent: testRoot
    });
    const robot2 = renderer.createNode({
      x: -140,
      y: 850,
      width: 140,
      height: 140,
      zIndex: 5,
      color: 0,
      parent: testRoot
    });
    const shadow = renderer.createNode({
      x: -40,
      y: 180,
      width: 228,
      height: 65,
      zIndex: 5,
      src: shadowImg,
      parent: robot2
    });
    const robotCore = renderer.createNode({
      x: 0,
      y: 0,
      width: 140,
      height: 140,
      zIndex: 5,
      src: robotImg,
      parent: robot2
    });
    setTimeout(() => __async(this, null, function* () {
      while (true) {
        yield robotCore.animate({ y: 10 }, { duration: 500 }).start().waitUntilStopped();
        yield robotCore.animate({ y: 0 }, { duration: 500 }).start().waitUntilStopped();
      }
    }), 1e3);
    const doorTopTop = renderer.createNode({
      x: 375,
      y: 207,
      width: 211,
      height: 129,
      zIndex: 4,
      src: doorTopTopImg,
      parent: testRoot
    });
    const doorBottomTop = renderer.createNode({
      x: 375,
      y: 207 + 129,
      width: 211,
      height: 129,
      zIndex: 4,
      src: doorBottomTopImg,
      parent: testRoot
    });
    setTimeout(() => __async(this, null, function* () {
      yield openGroundDoors(1e3);
      yield robot2.animate({ x: 410 }, { duration: 1e3 }).start().waitUntilStopped();
      shadow.animate({ alpha: 0 }, { duration: 500 }).start();
      robot2.zIndex = 1;
      robotCore.zIndex = 1;
      shadow.zIndex = 1;
      yield closeGroundDoors(1e3);
      yield robot2.animate({ y: 200 }, { duration: 1e3 }).start().waitUntilStopped();
      shadow.y = 100;
      yield openTopDoors(1e3);
      robot2.zIndex = 5;
      robotCore.zIndex = 5;
      shadow.zIndex = 5;
      shadow.animate({ alpha: 1 }, { duration: 500 }).start();
      yield shadow.animate({}, { duration: 2e3 }).start().waitUntilStopped();
      yield robot2.animate({ x: renderer.settings.appWidth }, { duration: 5e3 }).start().waitUntilStopped();
      yield closeTopDoors(1e3);
    }), 1e3);
    function openTopDoors(duration) {
      const a1 = doorTopTop.animate({ y: 207 - 129 }, { duration }).start();
      const a2 = doorBottomTop.animate({ y: 207 + 129 + 20 }, { duration }).start();
      const a3 = elevatorBg.animate({ y: 228 - 20 }, { duration }).start();
      return Promise.all([
        a1.waitUntilStopped(),
        a2.waitUntilStopped(),
        a3.waitUntilStopped()
      ]);
    }
    function closeTopDoors(duration) {
      const a1 = doorTopTop.animate({ y: 207 }, { duration }).start();
      const a2 = doorBottomTop.animate({ y: 207 + 129 }, { duration }).start();
      const a3 = elevatorBg.animate({ y: 228 }, { duration }).start();
      return Promise.all([
        a1.waitUntilStopped(),
        a2.waitUntilStopped(),
        a3.waitUntilStopped()
      ]);
    }
    function openGroundDoors(duration) {
      const a1 = doorLeftGround.animate({ x: 480 - 68 - 68 }, { duration }).start();
      const a2 = doorRightGround.animate({ x: 480 + 68 }, { duration }).start();
      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped()]);
    }
    function closeGroundDoors(duration) {
      const a1 = doorLeftGround.animate({ x: 480 - 68 }, { duration }).start();
      const a2 = doorRightGround.animate({ x: 480 }, { duration }).start();
      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped()]);
    }
  });
}
export {
  robot as default
};
//# sourceMappingURL=robot-B4xFP6hS.js.map