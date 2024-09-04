import { a as assertTruthy } from "./index-DE7Awpxp.js";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const HEADER_FONT_SIZE = 30;
const PADDING = 20;
function createPageConstructor(curPageRowConstructors) {
  return (function(rowConstructors, pageNode) {
    return __async(this, null, function* () {
      let curY = 0;
      for (const rowConstructor of rowConstructors) {
        const rowNode = yield rowConstructor(pageNode);
        rowNode.y = curY;
        curY += rowNode.height;
      }
    });
  }).bind(null, curPageRowConstructors);
}
function paginateTestRows(pageContainer, testRows) {
  return __async(this, null, function* () {
    const renderer = pageContainer.renderer;
    assertTruthy(renderer.root);
    let pageCurY = 0;
    let curPageRowConstructors = [];
    let curRowIndex = 0;
    for (const testRow of testRows) {
      const isLastRow = curRowIndex === testRows.length - 1;
      let newRowConstructor = testRow && ((pageNode) => __async(this, null, function* () {
        assertTruthy(testRow);
        const rowContainer = renderer.createNode({
          x: 0,
          y: pageCurY,
          width: pageContainer.contentWidth,
          height: 0,
          color: 0,
          parent: pageNode
        });
        const rowHeaderNode = renderer.createTextNode({
          fontFamily: "Ubuntu",
          fontSize: HEADER_FONT_SIZE,
          y: PADDING,
          parent: rowContainer
        });
        const rowNode = renderer.createNode({
          y: HEADER_FONT_SIZE + PADDING * 2,
          width: pageContainer.contentWidth,
          height: 0,
          color: 0,
          parent: rowContainer
        });
        const rowHeight = yield testRow.content(rowNode);
        rowNode.height = rowHeight;
        rowHeaderNode.text = testRow.title;
        rowContainer.height = HEADER_FONT_SIZE + PADDING * 2 + rowNode.height;
        return rowContainer;
      }));
      let itFits = false;
      let tmpRowContainer;
      if (newRowConstructor) {
        tmpRowContainer = yield newRowConstructor(renderer.root);
        itFits = pageCurY + tmpRowContainer.height <= pageContainer.contentHeight;
        if (itFits) {
          curPageRowConstructors.push(newRowConstructor);
          pageCurY += tmpRowContainer.height;
          newRowConstructor = null;
        }
      }
      if (!itFits || isLastRow) {
        const pageConstructor = createPageConstructor(curPageRowConstructors);
        pageContainer.pushPage(pageConstructor);
        pageCurY = (tmpRowContainer == null ? void 0 : tmpRowContainer.height) || 0;
        curPageRowConstructors = [];
        if (newRowConstructor) {
          curPageRowConstructors.push(newRowConstructor);
        }
        if (isLastRow && !itFits && curPageRowConstructors.length > 0) {
          const pageConstructor2 = createPageConstructor(curPageRowConstructors);
          pageContainer.pushPage(pageConstructor2);
        }
      }
      if (tmpRowContainer) {
        tmpRowContainer.parent = null;
        tmpRowContainer.destroy();
      }
      curRowIndex++;
    }
    pageContainer.finalizePages();
  });
}
export {
  paginateTestRows as p
};
//# sourceMappingURL=paginateTestRows-BVGWFg2v.js.map
