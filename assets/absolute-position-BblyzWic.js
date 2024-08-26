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
function absolutePosition(_0) {
  return __async(this, arguments, function* ({ renderer, testRoot }) {
    function createTextNode(container, label) {
      const textNode = renderer.createTextNode({
        x: 10,
        y: 10,
        text: "".concat(label ? label + "\n" : "", "X: ").concat(container.x, " => absX: ").concat(container.absX, "\nY: ").concat(container.y, " => absY: ").concat(container.absY, "\nMountX: ").concat(container.mountX, " | MountY: ").concat(container.mountY),
        parent: container
      });
      return textNode;
    }
    for (let index = 1; index <= Math.ceil(testRoot.width / 100); index++) {
      renderer.createNode({
        x: index * 100,
        y: 0,
        width: 2,
        height: testRoot.height,
        color: index % 5 ? 4294967104 : 4294967200,
        parent: testRoot
      });
    }
    for (let index = 1; index <= Math.ceil(testRoot.height / 100); index++) {
      renderer.createNode({
        x: 0,
        y: index * 100,
        width: testRoot.width,
        height: 2,
        color: index % 5 ? 4294967104 : 4294967200,
        parent: testRoot
      });
    }
    const defaultRect = renderer.createNode({
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      mountX: 0,
      color: 16711935,
      parent: testRoot
    });
    createTextNode(defaultRect, "Default");
    const mount1Rect = renderer.createNode({
      x: 600,
      y: 200,
      width: 200,
      height: 200,
      color: 65535,
      mount: 1,
      parent: testRoot
    });
    createTextNode(mount1Rect, "Mount 1");
    const scaleRect = renderer.createNode({
      x: 700,
      y: 100,
      width: 200,
      height: 200,
      scale: 1.2,
      color: 4278190335,
      parent: testRoot
    });
    createTextNode(scaleRect, "Scale 1.2");
    const rotationPivot0Rect = renderer.createNode({
      x: 1100,
      y: 100,
      width: 200,
      height: 200,
      rotation: Math.PI / 6,
      pivot: 0,
      color: 4278190335,
      parent: testRoot
    });
    createTextNode(rotationPivot0Rect, "Rotation Pivot 0");
    const rotationPivot1Rect = renderer.createNode({
      x: 1300,
      y: 100,
      width: 200,
      height: 200,
      rotation: Math.PI / 6,
      pivot: 1,
      color: 4278190335,
      parent: testRoot
    });
    createTextNode(rotationPivot1Rect, "Rotation Pivot 1");
    const mountX1Rect = renderer.createNode({
      x: 300,
      y: 500,
      width: 200,
      height: 200,
      color: 65535,
      mountX: 1,
      mountY: 0,
      parent: testRoot
    });
    createTextNode(mountX1Rect, "MountX 1");
    const mountY1Rect = renderer.createNode({
      x: 400,
      y: 600,
      width: 200,
      height: 200,
      color: 65535,
      mountX: 0,
      mountY: 1,
      parent: testRoot
    });
    createTextNode(mountY1Rect, "MountY 1");
    const mountThirdRect = renderer.createNode({
      x: 700,
      y: 600,
      width: 200,
      height: 200,
      color: 65535,
      mountX: 0.33,
      mountY: 0.66,
      parent: testRoot
    });
    createTextNode(mountThirdRect, "MountX 0.33 MountY 0.66");
    const mountScaleRect = renderer.createNode({
      x: 1200,
      y: 600,
      width: 200,
      height: 200,
      color: 65535,
      mountX: 1,
      mountY: 0.5,
      scale: 1.5,
      parent: testRoot
    });
    createTextNode(mountScaleRect, "Mount and Scale 1.5");
  });
}
export {
  absolutePosition as default
};
//# sourceMappingURL=absolute-position-BblyzWic.js.map
