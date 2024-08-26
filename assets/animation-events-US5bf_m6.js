import { r as robotImg } from "./robot-tJVGEFZ-.js";
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
  });
}
function test(_0) {
  return __async(this, arguments, function* ({
    renderer,
    testRoot,
    snapshot
  }) {
    testRoot.width = 250;
    testRoot.height = 250;
    testRoot.color = 4294967295;
    const robot = renderer.createNode({
      x: 0,
      y: 0,
      width: 140,
      height: 140,
      zIndex: 5,
      src: robotImg,
      parent: testRoot
    });
    const status = renderer.createTextNode({
      mount: 1,
      x: testRoot.width,
      y: testRoot.height,
      fontSize: 40,
      fontFamily: "Ubuntu",
      parent: testRoot,
      color: 255
    });
    status.text = "a1: init";
    yield snapshot({ name: "a1" });
    const animation1 = robot.animate(
      {
        x: 100,
        y: 100
      },
      {
        delay: 500,
        duration: 500
      }
    );
    animation1.once("animating", () => {
      robot.color = 16711935;
      robot.alpha = 0;
      status.text = "a1: animating";
      snapshot({ name: "a1" }).then(() => {
        robot.alpha = 1;
      }).catch(console.error);
    });
    yield animation1.waitUntilStopped();
    animation1.start();
    yield animation1.waitUntilStopped();
    status.text = "a1: stopped";
    robot.color = 4278190335;
    yield snapshot({ name: "a1" });
    status.text = "a2: init";
    robot.color = 4294967295;
    yield snapshot({ name: "a2" });
    const animation2 = robot.animate(
      {
        x: 0,
        y: 0
      },
      {
        duration: 500
      }
    );
    animation2.once("animating", () => {
      robot.color = 16711935;
      robot.alpha = 0;
      status.text = "a2: animating";
      snapshot({ name: "a2" }).then(() => {
        robot.alpha = 1;
      }).catch(console.error);
    });
    const stoppedEventPromiseA2 = new Promise((resolve) => {
      animation2.once("stopped", () => {
        status.text = "a2: stopped";
        robot.color = 4278190335;
        snapshot({ name: "a2" }).then(() => {
          robot.alpha = 1;
          resolve();
        }).catch(console.error);
      });
    });
    animation2.start();
    yield stoppedEventPromiseA2;
    status.text = "a3: init";
    robot.color = 4294967295;
    yield snapshot({ name: "a3" });
    const animation3 = robot.animate(
      {
        x: 100,
        y: 100
      },
      {
        duration: 500
      }
    );
    const stoppedEventPromiseA3 = new Promise((resolve) => {
      animation3.once("stopped", () => {
        status.text = "a3: stopped";
        robot.color = 4278190335;
        snapshot({ name: "a3" }).then(() => {
          robot.alpha = 1;
          resolve();
        }).catch(console.error);
      });
    });
    animation3.start();
    yield delay(100);
    animation3.stop();
    yield stoppedEventPromiseA3;
  });
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  automation,
  test as default
};
//# sourceMappingURL=animation-events-US5bf_m6.js.map
