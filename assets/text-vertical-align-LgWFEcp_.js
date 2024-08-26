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
    title: "Text Vertical Align"
  });
  await paginateTestRows(pageContainer, [
    ...generateVerticalAlignTest(renderer, "sdf"),
    null,
    ...generateVerticalAlignTest(renderer, "canvas")
  ]);
  return pageContainer;
}
const NODE_PROPS = {
  color: 255,
  fontFamily: "Ubuntu",
  textRendererOverride: "sdf",
  fontSize: 50,
  lineHeight: 70
};
const CONTAINER_SIZE = 200;
function getSquare(renderer, node) {
  const wrapper = renderer.createNode({
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE
  });
  const line1 = renderer.createNode({
    width: CONTAINER_SIZE,
    height: 1,
    color: 16711935,
    y: NODE_PROPS.lineHeight
  });
  line1.parent = wrapper;
  const line2 = renderer.createNode({
    width: CONTAINER_SIZE,
    height: 1,
    color: 16711935,
    y: NODE_PROPS.lineHeight * 2
  });
  line2.parent = wrapper;
  node.parent = wrapper;
  return wrapper;
}
function generateVerticalAlignTest(renderer, textRenderer) {
  return [
    {
      title: `One Line ('verticalAlign', ${textRenderer}, fontSize = 50, lineHeight = 70)`,
      content: async (rowNode) => {
        const nodeProps = {
          ...NODE_PROPS,
          text: "txyz",
          textRendererOverride: textRenderer
        };
        const baselineNode = renderer.createTextNode({
          ...nodeProps
        });
        return await constructTestRow({ renderer, rowNode }, [
          "verticalAlign: middle\n(default)\n->",
          getSquare(renderer, baselineNode),
          "top ->",
          getSquare(
            renderer,
            renderer.createTextNode({
              ...nodeProps,
              verticalAlign: "top"
            })
          ),
          "bottom ->",
          getSquare(
            renderer,
            renderer.createTextNode({
              ...nodeProps,
              verticalAlign: "bottom"
            })
          )
        ]);
      }
    },
    {
      title: `Two Lines ('verticalAlign', ${textRenderer}, fontSize = 50, lineHeight = 70)`,
      content: async (rowNode) => {
        const nodeProps = {
          ...NODE_PROPS,
          text: "abcd\ntxyz",
          textRendererOverride: textRenderer
        };
        const baselineNode = renderer.createTextNode({
          ...nodeProps
        });
        return await constructTestRow({ renderer, rowNode }, [
          "verticalAlign: middle\n(default)\n->",
          getSquare(renderer, baselineNode),
          "top ->",
          getSquare(
            renderer,
            renderer.createTextNode({
              ...nodeProps,
              verticalAlign: "top"
            })
          ),
          "bottom ->",
          getSquare(
            renderer,
            renderer.createTextNode({
              ...nodeProps,
              verticalAlign: "bottom"
            })
          )
        ]);
      }
    }
  ];
}
export {
  automation,
  test as default
};
//# sourceMappingURL=text-vertical-align-LgWFEcp_.js.map
