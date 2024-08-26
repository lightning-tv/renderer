import { r as robotImg } from "./robot-tJVGEFZ-.js";
import { w as waitForLoadedDimensions } from "./utils-ChpIXmYJ.js";
async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test(settings) {
  const { renderer, testRoot } = settings;
  testRoot.width = 200;
  testRoot.height = 250;
  testRoot.color = 4294967295;
  const image = renderer.createNode({
    mount: 0.5,
    x: testRoot.width / 2,
    y: testRoot.height / 4,
    autosize: true,
    src: robotImg,
    parent: testRoot
  });
  const dimensions = await waitForLoadedDimensions(image);
  const dimensionsMatch = dimensions.width === image.width && dimensions.height === image.height;
  renderer.createTextNode({
    mountX: 0.5,
    mountY: 1,
    x: testRoot.width / 2,
    y: testRoot.height,
    textAlign: "center",
    text: dimensionsMatch ? "Autosize\nSuccess" : "Autosize\nFailure",
    color: dimensionsMatch ? 16711935 : 4278190335,
    fontSize: 50,
    fontFamily: "Ubuntu",
    parent: testRoot
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=texture-autosize-rPJ4qjhq.js.map
