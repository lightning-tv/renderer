import { g as getLoremIpsum } from "./LoremIpsum-Dp8bNQJh.js";
import { l as loadStorage, c as clearStorage, s as saveStorage } from "./LocalStorage-CEyDmtly.js";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const FONT_FAMILY = "Ubuntu";
const FONT_SIZE = 40;
const initialMutableProps = {
  x: 0,
  y: 0,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE,
  color: 255,
  debug: {
    sdfShaderDebug: false
  }
};
const Colors = {
  Black: 255,
  Red: 4278190335,
  Green: 16711935,
  Blue: 65535,
  Magenta: 4278255615,
  Gray: 2139062271,
  White: 4294967295
};
const colors = Object.values(Colors);
function text(_0) {
  return __async(this, arguments, function* ({
    testName,
    renderer,
    testRoot
  }) {
    const savedState = loadStorage(testName);
    let curMode = (savedState == null ? void 0 : savedState.curMode) || 0;
    let moveStep = (savedState == null ? void 0 : savedState.moveStep) || 1;
    let curColorIdx = (savedState == null ? void 0 : savedState.curColorIdx) || 0;
    const modes = [
      "canvas",
      "ssdf",
      "msdf",
      "canvas+ssdf",
      "canvas+msdf",
      "ssdf+msdf"
    ];
    const text2 = getLoremIpsum();
    const initialProps = __spreadProps(__spreadValues({}, (savedState == null ? void 0 : savedState.mutableProps) || initialMutableProps), {
      fontFamily: FONT_FAMILY,
      contain: "both",
      scrollable: true,
      width: renderer.settings.appWidth,
      height: renderer.settings.appHeight,
      text: text2
    });
    const msdfTextNode = renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, initialProps), getFontProps("msdf")), {
      zIndex: 1,
      parent: testRoot
    }));
    const ssdfTextNode = renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, initialProps), getFontProps("ssdf")), {
      zIndex: 2,
      parent: testRoot
    }));
    const canvasTextNode = renderer.createTextNode(__spreadProps(__spreadValues(__spreadValues({}, initialProps), getFontProps("web")), {
      zIndex: 3,
      parent: testRoot
    }));
    const statusNode = renderer.createTextNode({
      text: "",
      fontSize: 30,
      offsetY: -5,
      zIndex: 100,
      parent: testRoot
    });
    statusNode.on("loaded", (target, { dimensions }) => {
      statusNode.x = renderer.settings.appWidth - dimensions.width;
    });
    function updateStatus() {
      const modeName = modes[curMode];
      if (!modeName) return;
      statusNode.text = [
        "mode: ".concat(modeName),
        "moveStep: ".concat(moveStep),
        "x: ".concat(msdfTextNode.x),
        "y: ".concat(msdfTextNode.y),
        "scrollY: ".concat(msdfTextNode.scrollY),
        "offsetY: ".concat(msdfTextNode.offsetY),
        "fontSize: ".concat(Number(msdfTextNode.fontSize).toFixed(1)),
        "letterSpacing: ".concat(msdfTextNode.letterSpacing),
        "color: ".concat(curColorIdx),
        "fontFamily: ".concat(msdfTextNode.fontFamily),
        "pixelRatio: TBD",
        "fps: TBD"
      ].join("\n");
    }
    function setMode(mode) {
      if (mode < 0) {
        mode = modes.length - 1;
      } else if (mode >= modes.length) {
        mode = 0;
      }
      curMode = mode;
      const modeName = modes[curMode];
      if (!modeName) return;
      canvasTextNode.alpha = 0;
      msdfTextNode.alpha = 0;
      ssdfTextNode.alpha = 0;
      const curColor = colors[curColorIdx];
      if (modeName === "canvas") {
        canvasTextNode.color = curColor;
        canvasTextNode.alpha = 1;
      } else if (modeName === "ssdf") {
        ssdfTextNode.color = curColor;
        ssdfTextNode.alpha = 1;
      } else if (modeName === "msdf") {
        msdfTextNode.color = curColor;
        msdfTextNode.alpha = 1;
      } else if (modeName === "canvas+ssdf") {
        canvasTextNode.color = Colors.Green;
        ssdfTextNode.color = curColor;
        canvasTextNode.alpha = 1;
        ssdfTextNode.alpha = 1;
      } else if (modeName === "canvas+msdf") {
        canvasTextNode.color = Colors.Green;
        msdfTextNode.color = curColor;
        canvasTextNode.alpha = 1;
        msdfTextNode.alpha = 1;
      } else if (modeName === "ssdf+msdf") {
        ssdfTextNode.color = Colors.Green;
        msdfTextNode.color = curColor;
        ssdfTextNode.alpha = 1;
        msdfTextNode.alpha = 1;
      }
    }
    window.addEventListener("keydown", (e) => {
      let changedState = false;
      if (e.metaKey) return;
      if (e.code === "Escape") {
        clearStorage(testName);
        setTimeout(() => {
          window.location.reload();
        }, 0);
        return;
      } else if (e.code === "ArrowLeft") {
        setMode(curMode - 1);
        changedState = true;
      } else if (e.code === "ArrowRight") {
        setMode(curMode + 1);
        changedState = true;
      } else if (e.code === "ArrowUp") {
        canvasTextNode.scrollY -= moveStep;
        ssdfTextNode.scrollY -= moveStep;
        msdfTextNode.scrollY -= moveStep;
        changedState = true;
      } else if (e.code === "ArrowDown") {
        canvasTextNode.scrollY += moveStep;
        ssdfTextNode.scrollY += moveStep;
        msdfTextNode.scrollY += moveStep;
        changedState = true;
      } else if (e.code === "KeyQ") {
        moveStep--;
        changedState = true;
      } else if (e.code === "KeyE") {
        moveStep++;
        changedState = true;
      } else if (e.code === "KeyA") {
        canvasTextNode.x -= moveStep;
        ssdfTextNode.x -= moveStep;
        msdfTextNode.x -= moveStep;
        changedState = true;
      } else if (e.code === "KeyW") {
        canvasTextNode.y -= moveStep;
        ssdfTextNode.y -= moveStep;
        msdfTextNode.y -= moveStep;
        changedState = true;
      } else if (e.code === "KeyS") {
        canvasTextNode.y += moveStep;
        ssdfTextNode.y += moveStep;
        msdfTextNode.y += moveStep;
        changedState = true;
      } else if (e.code === "KeyD") {
        canvasTextNode.x += moveStep;
        ssdfTextNode.x += moveStep;
        msdfTextNode.x += moveStep;
        changedState = true;
      } else if (e.code === "KeyR") {
        canvasTextNode.fontSize++;
        ssdfTextNode.fontSize++;
        msdfTextNode.fontSize++;
        changedState = true;
      } else if (e.code === "KeyF") {
        canvasTextNode.fontSize--;
        ssdfTextNode.fontSize--;
        msdfTextNode.fontSize--;
        changedState = true;
      } else if (e.code === "KeyT") {
        canvasTextNode.letterSpacing += 1;
        ssdfTextNode.letterSpacing += 1;
        msdfTextNode.letterSpacing += 1;
        changedState = true;
      } else if (e.code === "KeyG") {
        canvasTextNode.letterSpacing -= 1;
        ssdfTextNode.letterSpacing -= 1;
        msdfTextNode.letterSpacing -= 1;
        changedState = true;
      } else if (e.code === "KeyZ") {
        curColorIdx--;
        if (curColorIdx < 0) {
          curColorIdx = colors.length - 1;
        }
        const color = colors[curColorIdx];
        canvasTextNode.color = color;
        ssdfTextNode.color = color;
        msdfTextNode.color = color;
        changedState = true;
      } else if (e.code === "KeyX") {
        curColorIdx++;
        if (curColorIdx >= colors.length) {
          curColorIdx = 0;
        }
        const color = colors[curColorIdx];
        canvasTextNode.color = color;
        ssdfTextNode.color = color;
        msdfTextNode.color = color;
        changedState = true;
      } else if (e.code === "KeyC") {
        ssdfTextNode.offsetY -= 1;
        msdfTextNode.offsetY -= 1;
        changedState = true;
      } else if (e.code === "KeyV") {
        ssdfTextNode.offsetY += 1;
        msdfTextNode.offsetY += 1;
        changedState = true;
      } else if (e.code === "Slash") {
        canvasTextNode.debug = __spreadProps(__spreadValues({}, canvasTextNode.debug), {
          sdfShaderDebug: !canvasTextNode.debug.sdfShaderDebug
        });
        ssdfTextNode.debug = __spreadProps(__spreadValues({}, ssdfTextNode.debug), {
          sdfShaderDebug: !ssdfTextNode.debug.sdfShaderDebug
        });
        msdfTextNode.debug = __spreadProps(__spreadValues({}, msdfTextNode.debug), {
          sdfShaderDebug: !msdfTextNode.debug.sdfShaderDebug
        });
        changedState = true;
      }
      if (changedState) {
        updateStatus();
        saveStorage(testName, {
          curMode,
          moveStep,
          curColorIdx,
          mutableProps: {
            x: canvasTextNode.x,
            y: canvasTextNode.y,
            fontSize: canvasTextNode.fontSize,
            letterSpacing: canvasTextNode.letterSpacing,
            scrollY: canvasTextNode.scrollY
            // debug: canvasTextNode.debug,
          }
        });
      }
    });
    setMode(curMode);
    updateStatus();
  });
}
const sdfOffsetY = 6;
function getFontProps(fontType) {
  if (fontType === "msdf") {
    return {
      fontFamily: "".concat(FONT_FAMILY),
      offsetY: sdfOffsetY,
      textRendererOverride: "sdf"
    };
  } else if (fontType === "ssdf") {
    return {
      fontFamily: "".concat(FONT_FAMILY, "-ssdf"),
      offsetY: sdfOffsetY,
      textRendererOverride: "sdf"
    };
  }
  return {
    fontFamily: "".concat(FONT_FAMILY),
    offsetY: 0,
    textRendererOverride: "canvas"
  };
}
export {
  Colors,
  text as default
};
//# sourceMappingURL=text-DqzDygsI.js.map
