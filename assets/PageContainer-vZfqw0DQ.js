import { C as Component } from "./index-DjWUQZsy.js";
import { l as loadStorage, s as saveStorage } from "./LocalStorage-CEyDmtly.js";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
const TITLE_FONT_SIZE = 40;
const PADDING = 20;
class PageContainer extends Component {
  constructor(settings, props) {
    var _a, _b;
    const { renderer } = settings;
    super(renderer, {
      x: props.x,
      y: props.y,
      color: (_a = props.color) != null ? _a : 0,
      width: props.width,
      height: props.height,
      parent: props.parent ? props.parent : settings.testRoot
    });
    __publicField(this, "titleNode");
    __publicField(this, "pageNumberNode");
    __publicField(this, "curPageNode", null);
    __publicField(this, "curPageIndex", -1);
    __publicField(this, "pageConstructors", []);
    __publicField(this, "settings");
    this.titleNode = renderer.createTextNode({
      fontFamily: "Ubuntu",
      fontSize: TITLE_FONT_SIZE,
      x: PADDING,
      y: PADDING,
      parent: this.node,
      text: (_b = props.title) != null ? _b : ""
    });
    this.settings = settings;
    this.pageNumberNode = renderer.createTextNode({
      fontFamily: "Ubuntu",
      fontSize: 30,
      x: PADDING,
      y: this.node.height - 30 - PADDING,
      parent: this.node
    });
  }
  pushPage(pageConstructor) {
    this.pageConstructors.push(pageConstructor);
  }
  finalizePages() {
    if (this.curPageIndex === -1 && this.pageConstructors.length > 0) {
      const { automation, testName } = this.settings;
      let pageNum = 0;
      if (!automation) {
        const savedState = loadStorage(
          "".concat(testName, "-PageContainer")
        );
        if (savedState && savedState.curPage && savedState.curPage < this.pageConstructors.length) {
          pageNum = savedState.curPage;
        }
        this.bindWindowKeys();
      }
      this.setPage(pageNum).catch(console.error);
    }
  }
  setPage(pageIndex) {
    return __async(this, null, function* () {
      this.pageNumberNode.text = "Page ".concat(pageIndex + 1, "/").concat(this.pageConstructors.length);
      this.curPageIndex = pageIndex;
      if (this.curPageNode) {
        this.curPageNode.destroy();
        this.curPageNode = null;
      }
      this.curPageNode = this.renderer.createNode({
        x: PADDING,
        y: TITLE_FONT_SIZE + PADDING,
        color: 0,
        width: this.contentWidth,
        height: this.contentHeight,
        parent: this.node
      });
      const { automation, testName } = this.settings;
      if (!automation) {
        saveStorage("".concat(testName, "-PageContainer"), {
          curPage: pageIndex
        });
      }
      yield this.pageConstructors[pageIndex](this.curPageNode);
    });
  }
  /**
   * Performs an automation run of all the pages in this container.
   */
  snapshotPages() {
    return __async(this, null, function* () {
      if (!this.settings.automation) {
        throw new Error("Cannot snapshot pages when not in automation mode");
      }
      for (let i = 0; i < this.pageConstructors.length; i++) {
        yield this.setPage(i);
        yield this.settings.snapshot();
      }
    });
  }
  bindWindowKeys() {
    window.addEventListener("keydown", (e) => {
      const numPages = this.pageConstructors.length;
      if (e.key === "ArrowLeft") {
        const newPageIndex = (this.curPageIndex + numPages - 1) % numPages;
        this.setPage(newPageIndex).catch(console.error);
      } else if (e.key === "ArrowRight") {
        const newPageIndex = (this.curPageIndex + 1) % numPages;
        this.setPage(newPageIndex).catch(console.error);
      }
      const numPressed = parseInt(e.key, 10);
      if (numPressed >= 1 && numPressed <= numPages) {
        this.setPage(numPressed - 1).catch(console.error);
      }
    });
    this.bindWindowKeys = () => {
    };
  }
  get contentHeight() {
    return this.node.height - TITLE_FONT_SIZE - PADDING * 2;
  }
  get contentWidth() {
    return this.node.width - PADDING * 2;
  }
  get padding() {
    return PADDING;
  }
}
export {
  PageContainer as P
};
//# sourceMappingURL=PageContainer-vZfqw0DQ.js.map