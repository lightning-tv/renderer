import { p as paginateTestRows } from "./paginateTestRows-yIHh2-Hx.js";
import { P as PageContainer } from "./PageContainer-5KWQSUIz.js";
import { w as waitForLoadedDimensions } from "./utils-ChpIXmYJ.js";
import { c as constructTestRow } from "./constructTestRow-BVUPcsU0.js";
import "./index-BLT36qai.js";
import "./LocalStorage-CLyIOpmF.js";
async function automation(settings) {
  await (await test(settings)).snapshotPages();
}
async function test(settings) {
  const { renderer } = settings;
  const pageContainer = new PageContainer(settings, {
    width: renderer.settings.appWidth,
    height: renderer.settings.appHeight,
    title: "Text Baseline"
  });
  await paginateTestRows(pageContainer, [
    ...generateBaselineTest(renderer, "sdf"),
    ...generateBaselineTest(renderer, "canvas")
  ]);
  return pageContainer;
}
const NODE_PROPS = {
  x: 100,
  y: 100,
  color: 255,
  text: "txyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50,
  lineHeight: 70
};
function generateBaselineTest(renderer, textRenderer) {
  return [
    {
      title: `Text Node ('textBaseline', ${textRenderer}, lineHeight = 70)${textRenderer === "sdf" ? ', "BROKEN!"' : ""}`,
      content: async (rowNode) => {
        const nodeProps = {
          ...NODE_PROPS,
          textRendererOverride: textRenderer
        };
        const baselineNode = renderer.createTextNode({
          ...nodeProps,
          parent: renderer.root
        });
        const dimensions = await waitForLoadedDimensions(baselineNode);
        const position = {
          x: 100 - dimensions.width / 2,
          y: 100 - dimensions.height / 2
        };
        baselineNode.x = position.x;
        baselineNode.y = position.y;
        return await constructTestRow({ renderer, rowNode }, [
          baselineNode,
          "textBaseline (alphabetic) ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            textBaseline: "alphabetic"
          }),
          "textBaseline: top ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            textBaseline: "top"
          }),
          "textBaseline: middle ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            textBaseline: "middle"
          }),
          "textBaseline: bottom ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            textBaseline: "bottom"
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
//# sourceMappingURL=text-baseline-CnISdZTd.js.map
