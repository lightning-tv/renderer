import { g as getLoremIpsum } from "./LoremIpsum-BORJPcSh.js";
import { l as loadStorage, c as clearStorage, s as saveStorage } from "./LocalStorage-CLyIOpmF.js";
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
async function text({
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
  const initialProps = {
    ...(savedState == null ? void 0 : savedState.mutableProps) || initialMutableProps,
    fontFamily: FONT_FAMILY,
    contain: "both",
    scrollable: true,
    width: renderer.settings.appWidth,
    height: renderer.settings.appHeight,
    text: text2
  };
  const msdfTextNode = renderer.createTextNode({
    ...initialProps,
    ...getFontProps("msdf"),
    zIndex: 1,
    parent: testRoot
  });
  const ssdfTextNode = renderer.createTextNode({
    ...initialProps,
    ...getFontProps("ssdf"),
    zIndex: 2,
    parent: testRoot
  });
  const canvasTextNode = renderer.createTextNode({
    ...initialProps,
    ...getFontProps("web"),
    zIndex: 3,
    parent: testRoot
  });
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
      `mode: ${modeName}`,
      `moveStep: ${moveStep}`,
      `x: ${msdfTextNode.x}`,
      `y: ${msdfTextNode.y}`,
      `scrollY: ${msdfTextNode.scrollY}`,
      `offsetY: ${msdfTextNode.offsetY}`,
      `fontSize: ${Number(msdfTextNode.fontSize).toFixed(1)}`,
      `letterSpacing: ${msdfTextNode.letterSpacing}`,
      `color: ${curColorIdx}`,
      `fontFamily: ${msdfTextNode.fontFamily}`,
      `pixelRatio: TBD`,
      `fps: TBD`
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
      canvasTextNode.debug = {
        ...canvasTextNode.debug,
        sdfShaderDebug: !canvasTextNode.debug.sdfShaderDebug
      };
      ssdfTextNode.debug = {
        ...ssdfTextNode.debug,
        sdfShaderDebug: !ssdfTextNode.debug.sdfShaderDebug
      };
      msdfTextNode.debug = {
        ...msdfTextNode.debug,
        sdfShaderDebug: !msdfTextNode.debug.sdfShaderDebug
      };
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
}
const sdfOffsetY = 6;
function getFontProps(fontType) {
  if (fontType === "msdf") {
    return {
      fontFamily: `${FONT_FAMILY}`,
      offsetY: sdfOffsetY,
      textRendererOverride: "sdf"
    };
  } else if (fontType === "ssdf") {
    return {
      fontFamily: `${FONT_FAMILY}-ssdf`,
      offsetY: sdfOffsetY,
      textRendererOverride: "sdf"
    };
  }
  return {
    fontFamily: `${FONT_FAMILY}`,
    offsetY: 0,
    textRendererOverride: "canvas"
  };
}
export {
  Colors,
  text as default
};
//# sourceMappingURL=text-DwmL2BYz.js.map
