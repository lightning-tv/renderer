import { r as robotImg } from "./robot-BHU9IKkq.js";
async function automation(settings) {
  const next = await test(settings);
  await settings.snapshot();
  next();
  await settings.snapshot();
  next();
  await settings.snapshot();
}
async function test(settings) {
  const { renderer, testRoot } = settings;
  testRoot.width = 200;
  testRoot.height = 200;
  testRoot.color = 4294967295;
  const clippedContainer = renderer.createNode({
    x: 0,
    y: 0,
    width: testRoot.width / 2,
    height: testRoot.height / 2,
    parent: settings.testRoot,
    color: 16777215,
    clipping: true
  });
  renderer.createNode({
    x: -testRoot.width / 4,
    y: -testRoot.height / 4,
    width: testRoot.width,
    height: testRoot.height,
    scale: 0.9,
    parent: clippedContainer,
    src: robotImg
  });
  let i = 0;
  const MAX_I = 2;
  function next() {
    i++;
    if (i > MAX_I) {
      i = 0;
    }
    if (i === 0) {
      clippedContainer.x = 0;
      clippedContainer.y = 0;
    } else if (i === 1) {
      clippedContainer.x = testRoot.width / 4;
    } else if (i === 2) {
      clippedContainer.x = testRoot.width / 2;
      clippedContainer.y = testRoot.height / 2;
    }
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      next();
    }
  });
  return next;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=clipping-mutations-9JuQY7L3.js.map
