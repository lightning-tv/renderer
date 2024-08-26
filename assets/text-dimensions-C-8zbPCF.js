import { w as waitForLoadedDimensions } from "./utils-ChpIXmYJ.js";
async function automation(settings) {
  const next = await test(settings);
  await settings.snapshot();
  while (await next()) {
    await settings.snapshot();
  }
}
async function test(settings) {
  const { renderer, testRoot } = settings;
  testRoot.width = 200;
  testRoot.height = 200;
  testRoot.color = 4294967295;
  const textBg = renderer.createNode({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    color: 16711935,
    parent: testRoot
  });
  const text1 = renderer.createTextNode({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    color: 255,
    fontFamily: "Ubuntu",
    textRendererOverride: "sdf",
    fontSize: 50,
    text: "",
    parent: testRoot
  });
  const indexInfo = renderer.createTextNode({
    x: testRoot.width,
    y: testRoot.height,
    mount: 1,
    width: 0,
    height: 0,
    color: 255,
    fontFamily: "Ubuntu",
    fontSize: 20,
    text: "1",
    parent: testRoot
  });
  let i = 0;
  const mutations = [
    () => {
      text1.text = "SDF";
      text1.textRendererOverride = "sdf";
    },
    () => {
      text1.text = "SDF\ngyqpj";
    },
    () => {
      text1.text = "Canvas";
      text1.textRendererOverride = "canvas";
    },
    () => {
      text1.text = "Canvas\ngyqpj";
    },
    () => {
      text1.text = "SDF 2nd";
      text1.textRendererOverride = "sdf";
    }
  ];
  async function next(loop = false, idx = i + 1) {
    var _a;
    if (idx > mutations.length - 1) {
      if (!loop) {
        return false;
      }
      idx = 0;
    }
    i = idx;
    const waitPromise = waitForLoadedDimensions(text1);
    (_a = mutations[i]) == null ? void 0 : _a.call(mutations);
    indexInfo.text = (i + 1).toString();
    const dimensions = await waitPromise;
    textBg.width = dimensions.width;
    textBg.height = dimensions.height;
    return true;
  }
  await next(false, 0);
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      next(true).catch(console.error);
    }
  });
  return next;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-dimensions-C-8zbPCF.js.map
