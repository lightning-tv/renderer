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
  testRoot.width = 400;
  testRoot.height = 400;
  testRoot.color = 4294967295;
  const textSizeAfterLoadingBg = renderer.createNode({
    x: 5,
    y: 5,
    width: 0,
    height: 0,
    color: 587145855,
    parent: testRoot
  });
  const textReportedSizeBg = renderer.createNode({
    x: textSizeAfterLoadingBg.x,
    y: textSizeAfterLoadingBg.y,
    width: 0,
    height: 0,
    color: 4279308671,
    parent: testRoot
  });
  const text1 = renderer.createTextNode({
    x: textSizeAfterLoadingBg.x,
    y: textSizeAfterLoadingBg.y,
    width: 0,
    height: 0,
    color: 255,
    fontFamily: "Ubuntu",
    textRendererOverride: "sdf",
    fontSize: 20,
    text: `Lorem ipsum dolor sit e
Consectetur adipiscing elit. Vivamus id.
Suspendisse sollicitudin posuere felis.
Vivamus consectetur ex magna, non mollis.`,
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
  const textSizeAfterLoadInfo = renderer.createTextNode({
    x: testRoot.width,
    y: testRoot.height - 20,
    mount: 1,
    width: 0,
    height: 0,
    color: 16711935,
    fontFamily: "Ubuntu",
    fontSize: 20,
    text: "",
    parent: testRoot
  });
  const textReportedSizeInfo = renderer.createTextNode({
    x: testRoot.width,
    y: testRoot.height - 40,
    mount: 1,
    width: 0,
    height: 0,
    color: 4278190335,
    fontFamily: "Ubuntu",
    fontSize: 20,
    text: "",
    parent: testRoot
  });
  const textSetDimsInfo = renderer.createTextNode({
    x: testRoot.width,
    y: testRoot.height - 60,
    mount: 1,
    width: 0,
    height: 0,
    color: 65535,
    fontFamily: "Ubuntu",
    fontSize: 20,
    text: "",
    parent: testRoot
  });
  const header = renderer.createTextNode({
    x: testRoot.width,
    y: testRoot.height - 80,
    mount: 1,
    width: 0,
    height: 0,
    color: 255,
    fontFamily: "Ubuntu",
    fontSize: 20,
    text: "",
    parent: testRoot
  });
  let i = 0;
  const mutations = [
    () => {
      text1.textRendererOverride = "sdf";
      text1.contain = "none";
      text1.width = 0;
      text1.height = 0;
    },
    () => {
      text1.contain = "width";
      text1.width = 200;
    },
    () => {
      text1.width = 195;
    },
    () => {
      text1.contain = "both";
      text1.height = 203;
    },
    () => {
      text1.height = 204;
    },
    () => {
      text1.textRendererOverride = "canvas";
      text1.contain = "none";
      text1.width = 0;
      text1.height = 0;
    },
    () => {
      text1.contain = "width";
      text1.width = 200;
    },
    () => {
      text1.contain = "width";
      text1.width = 195;
      text1.height = 5;
    },
    () => {
      text1.contain = "both";
      text1.height = 203;
    },
    () => {
      text1.height = 204;
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
    header.text = makeHeader(
      text1.textRendererOverride,
      text1.contain,
      text1.width,
      text1.height
    );
    indexInfo.text = (i + 1).toString();
    textSetDimsInfo.text = `Set size: ${Math.round(text1.width)}x${Math.round(
      text1.height
    )}`;
    const dimensions = await waitForLoadedDimensions(text1);
    textSizeAfterLoadingBg.width = text1.width;
    textSizeAfterLoadingBg.height = text1.height;
    textSizeAfterLoadInfo.text = `After 'loading' size: ${Math.round(
      textSizeAfterLoadingBg.width
    )}x${Math.round(textSizeAfterLoadingBg.height)}`;
    textReportedSizeBg.width = dimensions.width;
    textReportedSizeBg.height = dimensions.height;
    textReportedSizeInfo.text = `'loading' event size: ${Math.round(
      textReportedSizeBg.width
    )}x${Math.round(textReportedSizeBg.height)}`;
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
function makeHeader(renderer, contain, width, height) {
  return `${renderer}, contain = ${contain}`;
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-contain-BafDOerD.js.map
