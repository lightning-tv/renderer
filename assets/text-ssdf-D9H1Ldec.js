async function automation(settings) {
  await test(settings);
  await settings.snapshot();
}
async function test(settings) {
  const { renderer, testRoot } = settings;
  testRoot.width = 200;
  testRoot.height = 200;
  testRoot.color = 4294967295;
  renderer.createTextNode({
    text: "SSDF",
    color: 255,
    fontFamily: "Ubuntu-ssdf",
    parent: testRoot,
    fontSize: 80,
    lineHeight: 80 * 1.2
  });
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-ssdf-D9H1Ldec.js.map
