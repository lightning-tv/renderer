import { g as getLoremIpsum } from "./LoremIpsum-BORJPcSh.js";
async function automation(settings) {
  const next = await test(settings);
  await settings.snapshot();
  while (await next()) {
    await settings.snapshot();
  }
}
async function test({ renderer, testRoot }) {
  const fontFamily = "Ubuntu";
  const fontFamilyModified = "Ubuntu-Modified-Metrics";
  const text = getLoremIpsum(1200);
  const fontSize = 20;
  const yPos = 0;
  testRoot.width = 500;
  testRoot.height = 500;
  testRoot.clipping = true;
  testRoot.color = 4294967295;
  const canvasText = renderer.createTextNode({
    y: yPos,
    width: testRoot.width,
    text,
    fontSize,
    fontFamily,
    contain: "width",
    color: 4278190335,
    textRendererOverride: "canvas",
    parent: testRoot
  });
  const sdfText = renderer.createTextNode({
    y: yPos,
    width: testRoot.width,
    text,
    fontSize,
    fontFamily,
    contain: "width",
    color: 65399,
    parent: testRoot,
    zIndex: 3
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
      canvasText.fontFamily = sdfText.fontFamily = fontFamily;
    },
    () => {
      canvasText.fontFamily = sdfText.fontFamily = fontFamilyModified;
    },
    () => {
      canvasText.fontFamily = sdfText.fontFamily = fontFamily;
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
    (_a = mutations[i]) == null ? void 0 : _a.call(mutations);
    indexInfo.text = (i + 1).toString();
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
//# sourceMappingURL=text-layout-consistency-modified-metrics-fMy367US.js.map
