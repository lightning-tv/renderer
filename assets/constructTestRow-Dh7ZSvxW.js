import { w as waitForLoadedDimensions } from "./utils-BNMqzZsE.js";
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
const CONTAINER_SIZE = 200;
const PADDING = 20;
function constructTestRow(options, testNodes) {
  return __async(this, null, function* () {
    const {
      renderer,
      rowNode,
      containerSize = CONTAINER_SIZE,
      padding = PADDING
    } = options;
    let curX = 0;
    const curY = 0;
    for (const testNode of testNodes) {
      if (typeof testNode === "string") {
        const dimensions = yield waitForLoadedDimensions(
          renderer.createTextNode({
            mountY: 0.5,
            x: curX,
            y: containerSize / 2,
            text: testNode,
            parent: rowNode
          })
        );
        curX += dimensions.width + padding;
      } else {
        const container = renderer.createNode({
          parent: rowNode,
          color: 4294967295,
          width: containerSize,
          height: containerSize,
          clipping: true,
          x: curX,
          y: curY
        });
        testNode.parent = container;
        curX += containerSize + padding;
      }
    }
    return curY + containerSize;
  });
}
export {
  constructTestRow as c
};
//# sourceMappingURL=constructTestRow-Dh7ZSvxW.js.map
