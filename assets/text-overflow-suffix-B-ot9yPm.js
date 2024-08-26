import { p as paginateTestRows } from "./paginateTestRows-BnRDThRO.js";
import { P as PageContainer } from "./PageContainer-DGLlaQQn.js";
import { c as constructTestRow } from "./constructTestRow-BVUPcsU0.js";
import { g as getLoremIpsum } from "./LoremIpsum-BORJPcSh.js";
import "./index-ClbJRtQD.js";
import "./LocalStorage-CLyIOpmF.js";
import "./utils-ChpIXmYJ.js";
async function automation(settings) {
  await (await test(settings)).snapshotPages();
}
async function test(settings) {
  const { renderer } = settings;
  const pageContainer = new PageContainer(settings, {
    width: renderer.settings.appWidth,
    height: renderer.settings.appHeight,
    title: "Text Overflow Suffix"
  });
  await paginateTestRows(pageContainer, [
    ...generateOverflowSuffixTest(renderer, "sdf"),
    ...generateOverflowSuffixTest(renderer, "canvas")
  ]);
  return pageContainer;
}
const NODE_PROPS = {
  x: 100,
  y: 100,
  width: 200,
  height: 200,
  color: 255,
  text: getLoremIpsum(100),
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 20,
  lineHeight: 28,
  contain: "both"
};
function generateOverflowSuffixTest(renderer, textRenderer) {
  return [
    {
      title: `Text Node ('overflowSuffix', ${textRenderer})`,
      content: async (rowNode) => {
        const nodeProps = {
          ...NODE_PROPS,
          textRendererOverride: textRenderer
        };
        const baselineNode = renderer.createTextNode({
          ...nodeProps
        });
        const position = {
          x: 0,
          y: 0
        };
        baselineNode.x = position.x;
        baselineNode.y = position.y;
        return await constructTestRow({ renderer, rowNode }, [
          baselineNode,
          'overflowSuffix: "..." ->',
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            overflowSuffix: "...",
            maxLines: 1
          }),
          'overflowSuffix: ".." ->',
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            overflowSuffix: "..",
            maxLines: 1
          })
        ]);
      }
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-overflow-suffix-B-ot9yPm.js.map
