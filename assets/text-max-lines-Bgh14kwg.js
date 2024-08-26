import { p as paginateTestRows } from "./paginateTestRows-yIHh2-Hx.js";
import { P as PageContainer } from "./PageContainer-5KWQSUIz.js";
import { c as constructTestRow } from "./constructTestRow-BVUPcsU0.js";
import { g as getLoremIpsum } from "./LoremIpsum-BORJPcSh.js";
import "./index-BLT36qai.js";
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
    title: "Text Max Lines"
  });
  await paginateTestRows(pageContainer, [
    ...generateMaxLinesTest(renderer, "sdf"),
    null,
    ...generateMaxLinesTest(renderer, "canvas")
  ]);
  return pageContainer;
}
const BASE_NODE_PROPS = {
  x: 100,
  y: 100,
  width: 200,
  color: 255,
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 20,
  lineHeight: 28,
  contain: "width"
};
function generateMaxLinesTest(renderer, textRenderer) {
  return [
    {
      title: `Wrapped + Explicit Lines ('maxLines', ${textRenderer})`,
      content: async (rowNode) => {
        const nodeProps = {
          ...BASE_NODE_PROPS,
          text: "Line1 Line1_Line1_Line1\nLine2 Line2____Line2\nLine 3\nLine 4",
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
          "maxLines: 1 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 1
          }),
          "2 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 2
          }),
          "3 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 3
          }),
          "4 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 4
          }),
          "5 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 5
          })
        ]);
      }
    },
    {
      title: `Lorem Ipsum ('maxLines', ${textRenderer})`,
      content: async (rowNode) => {
        const nodeProps = {
          ...BASE_NODE_PROPS,
          text: getLoremIpsum(100),
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
          "maxLines: 1 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 1
          }),
          "2 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 2
          }),
          "3 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 3
          }),
          "4 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 4
          }),
          "5 ->",
          renderer.createTextNode({
            ...nodeProps,
            ...position,
            maxLines: 5
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
//# sourceMappingURL=text-max-lines-Bgh14kwg.js.map
