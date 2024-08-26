import { p as paginateTestRows } from "./paginateTestRows-jLPkRlFD.js";
import { P as PageContainer } from "./PageContainer-Brs2UNmp.js";
import { c as constructTestRow } from "./constructTestRow-BVUPcsU0.js";
import "./index-D0qkvjTh.js";
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
    title: "Text Line Height"
  });
  await paginateTestRows(pageContainer, [
    ...generateLineHeightTest(renderer, "sdf"),
    ...generateLineHeightTest(renderer, "canvas")
  ]);
  return pageContainer;
}
const NODE_PROPS = {
  x: 90,
  y: 90,
  mount: 0.5,
  color: 255,
  text: "abcd\ntxyz",
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50
};
function generateLineHeightTest(renderer, textRenderer) {
  return [
    {
      title: `Text Node ('lineHeight', ${textRenderer}, fontSize=50)${textRenderer === "canvas" ? ', "BROKEN!"' : ""}`,
      content: async (rowNode) => {
        const nodeProps = {
          ...NODE_PROPS,
          textRendererOverride: textRenderer
        };
        const baselineNode = renderer.createTextNode({
          ...nodeProps
        });
        return await constructTestRow(
          { renderer, rowNode, containerSize: 180 },
          [
            "lineHeight: (default)\n->",
            baselineNode,
            "60 ->",
            renderer.createTextNode({
              ...nodeProps,
              lineHeight: 60
            }),
            "70 ->",
            renderer.createTextNode({
              ...nodeProps,
              lineHeight: 70
            }),
            "25 ->",
            renderer.createTextNode({
              ...nodeProps,
              lineHeight: 25
            }),
            "10 ->",
            renderer.createTextNode({
              ...nodeProps,
              lineHeight: 10
            }),
            "1 ->",
            renderer.createTextNode({
              ...nodeProps,
              lineHeight: 1
            })
          ]
        );
      }
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-line-height-BaQ43Hxl.js.map
