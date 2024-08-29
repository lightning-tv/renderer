const __vite__fileDeps=["assets/alpha-blending-QLMMWKh2.js","assets/robot-tJVGEFZ-.js","assets/rocko-DfKMdNEs.js","assets/LocalStorage-CEyDmtly.js","assets/animation-events-US5bf_m6.js","assets/clipping-mutations-FBqkEt-I.js","assets/clipping-DQ8l7S7_.js","assets/paginateTestRows-BTHNpL4T.js","assets/PageContainer-CIwL_Yzz.js","assets/utils-BNMqzZsE.js","assets/destroy-DGGwR_Vm.js","assets/lightning-C5UL5HX9.js","assets/hole-punch-effect-C9Yo7YIV.js","assets/elevator-C9Se-LCK.js","assets/inspector-BIzbgRXG.js","assets/resize-mode-Bw74lIkW.js","assets/robot-B4xFP6hS.js","assets/rtt-dimension-4_7Ojvt5.js","assets/scaling-DYXjPRA_.js","assets/constructTestRow-Dh7ZSvxW.js","assets/stress-multi-level-clipping-DW3b_6gW.js","assets/stress-multi-level-DFYKLkzu.js","assets/stress-multi-texture-TDyDMWB2.js","assets/stress-single-level-A8XnphH7.js","assets/test-C2C13V_k.js","assets/spritemap-BI6pbO9b.js","assets/text-align-e4TunNw4.js","assets/LoremIpsum-Dp8bNQJh.js","assets/text-alpha-Kbm2n7Y6.js","assets/text-baseline-BowA-CFT.js","assets/text-contain-DzAhV_rf.js","assets/text-dimensions-IlaH963y.js","assets/text-layout-consistency-modified-metrics-CPW60Ict.js","assets/text-layout-consistency-nX7u-DSR.js","assets/text-line-height-CbCzCPjS.js","assets/text-max-lines-DYmM70cg.js","assets/text-offscreen-move-BifZhSmC.js","assets/text-overflow-suffix-DdzK9EiG.js","assets/text-rotation-5F9qOjt8.js","assets/text-scaling-iPWG23hv.js","assets/text-vertical-align-DT2Gdhyq.js","assets/text-DqzDygsI.js","assets/texture-autosize-jHpXh2OK.js","assets/texture-source-C09WArAw.js","assets/textures-BXzhtZxm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj2, key, value) => key in obj2 ? __defProp(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField = (obj2, key, value) => __defNormalProp(obj2, typeof key !== "symbol" ? key + "" : key, value);
var _a;
function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {
  })().next();
}
;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/renderer/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector('link[href="'.concat(dep, '"]').concat(cssSelector))) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
          link.crossOrigin = "";
        }
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error("Unable to preload CSS for ".concat(dep)))
            );
          });
        }
      })
    );
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
function createWebGLContext(canvas, contextSpy) {
  const config = {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: true,
    desynchronized: false,
    // Disabled because it prevents Visual Regression Tests from working
    // failIfMajorPerformanceCaveat: true,
    powerPreference: "high-performance",
    premultipliedAlpha: true,
    preserveDrawingBuffer: false
  };
  const gl = (
    // TODO: Remove this assertion once this issue is fixed in TypeScript
    // https://github.com/microsoft/TypeScript/issues/53614
    canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config)
  );
  if (!gl) {
    throw new Error("Unable to create WebGL context");
  }
  if (contextSpy) {
    return new Proxy(gl, {
      get(target, prop) {
        const value = target[prop];
        if (typeof value === "function") {
          contextSpy.increment(String(prop));
          return value.bind(target);
        }
        return value;
      }
    });
  }
  return gl;
}
function assertTruthy(condition, message) {
  if (isProductionEnvironment())
    return;
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}
function mergeColorProgress(rgba1, rgba2, p) {
  const r1 = Math.trunc(rgba1 >>> 24);
  const g1 = Math.trunc(rgba1 >>> 16 & 255);
  const b1 = Math.trunc(rgba1 >>> 8 & 255);
  const a1 = Math.trunc(rgba1 & 255);
  const r2 = Math.trunc(rgba2 >>> 24);
  const g2 = Math.trunc(rgba2 >>> 16 & 255);
  const b2 = Math.trunc(rgba2 >>> 8 & 255);
  const a2 = Math.trunc(rgba2 & 255);
  const r = Math.round(r2 * p + r1 * (1 - p));
  const g = Math.round(g2 * p + g1 * (1 - p));
  const b = Math.round(b2 * p + b1 * (1 - p));
  const a = Math.round(a2 * p + a1 * (1 - p));
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
function mergeColorAlpha(rgba, alpha) {
  const r = rgba >>> 24;
  const g = rgba >>> 16 & 255;
  const b = rgba >>> 8 & 255;
  const a = Math.trunc((rgba & 255) * alpha);
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
let premultiplyRGB = true;
function setPremultiplyMode(mode) {
  premultiplyRGB = mode === "webgl";
}
function mergeColorAlphaPremultiplied(rgba, alpha, flipEndianess = false) {
  const newAlpha = (rgba & 255) / 255 * alpha;
  const rgbAlpha = premultiplyRGB ? newAlpha : 1;
  const r = Math.trunc((rgba >>> 24) * rgbAlpha);
  const g = Math.trunc((rgba >>> 16 & 255) * rgbAlpha);
  const b = Math.trunc((rgba >>> 8 & 255) * rgbAlpha);
  const a = Math.trunc(newAlpha * 255);
  if (flipEndianess) {
    return (a << 24 | b << 16 | g << 8 | r) >>> 0;
  }
  return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}
function hasOwn(obj2, prop) {
  return Object.prototype.hasOwnProperty.call(obj2, prop);
}
function deg2Rad(degrees) {
  return degrees * Math.PI / 180;
}
function isProductionEnvironment() {
  return { "BASE_URL": "/renderer/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false, "LEGACY": false } && true;
}
let nextId = 1;
function getNewId() {
  return nextId++;
}
class EventEmitter {
  constructor() {
    __publicField(this, "eventListeners", {});
  }
  on(event, listener) {
    let listeners = this.eventListeners[event];
    if (!listeners) {
      listeners = [];
    }
    listeners.push(listener);
    this.eventListeners[event] = listeners;
  }
  off(event, listener) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return;
    }
    if (!listener) {
      delete this.eventListeners[event];
      return;
    }
    const index = listeners.indexOf(listener);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
  }
  once(event, listener) {
    const onceListener = (target, data) => {
      this.off(event, onceListener);
      listener(target, data);
    };
    this.on(event, onceListener);
  }
  emit(event, data) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return;
    }
    [...listeners].forEach((listener) => {
      listener(this, data);
    });
  }
  removeAllListeners() {
    this.eventListeners = {};
  }
}
const PROTOCOL_REGEX = /^(data|ftps?|https?):/;
const getNormalizedRgbaComponents = (rgba) => {
  const r = rgba >>> 24;
  const g = rgba >>> 16 & 255;
  const b = rgba >>> 8 & 255;
  const a = rgba & 255;
  return [r / 255, g / 255, b / 255, a / 255];
};
const getRgbaComponents = (rgba) => {
  const r = rgba >>> 24;
  const g = rgba >>> 16 & 255;
  const b = rgba >>> 8 & 255;
  const a = rgba & 255;
  return [r, g, b, a];
};
function getNormalizedAlphaComponent(rgba) {
  return (rgba & 255) / 255;
}
function getRgbaString(color) {
  const r = Math.floor(color[0] * 255);
  const g = Math.floor(color[1] * 255);
  const b = Math.floor(color[2] * 255);
  const a = Math.floor(color[3] * 255);
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a.toFixed(4), ")");
}
function createBound(x1, y1, x2, y2, out) {
  if (out) {
    out.x1 = x1;
    out.y1 = y1;
    out.x2 = x2;
    out.y2 = y2;
    return out;
  }
  return {
    x1,
    y1,
    x2,
    y2
  };
}
function boundsOverlap(a, b) {
  return a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
}
function convertBoundToRect(bound, out) {
  if (out) {
    out.x = bound.x1;
    out.y = bound.y1;
    out.width = bound.x2 - bound.x1;
    out.height = bound.y2 - bound.y1;
    return out;
  }
  return {
    x: bound.x1,
    y: bound.y1,
    width: bound.x2 - bound.x1,
    height: bound.y2 - bound.y1
  };
}
function intersectRect(a, b, out) {
  const x = Math.max(a.x, b.x);
  const y = Math.max(a.y, b.y);
  const width = Math.min(a.x + a.width, b.x + b.width) - x;
  const height = Math.min(a.y + a.height, b.y + b.height) - y;
  if (width > 0 && height > 0) {
    if (out) {
      out.x = x;
      out.y = y;
      out.width = width;
      out.height = height;
      return out;
    }
    return {
      x,
      y,
      width,
      height
    };
  }
  if (out) {
    out.x = 0;
    out.y = 0;
    out.width = 0;
    out.height = 0;
    return out;
  }
  return {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
}
function copyRect(a, out) {
  if (out) {
    out.x = a.x;
    out.y = a.y;
    out.width = a.width;
    out.height = a.height;
    return out;
  }
  return {
    x: a.x,
    y: a.y,
    width: a.width,
    height: a.height
  };
}
function compareRect(a, b) {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function boundInsideBound(bound1, bound2) {
  return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
}
function isBoundPositive(bound) {
  return bound.x1 < bound.x2 && bound.y1 < bound.y2;
}
function convertUrlToAbsolute(url) {
  if (self.location.protocol === "file:" && !PROTOCOL_REGEX.test(url)) {
    const path = self.location.pathname.split("/");
    path.pop();
    const basePath = path.join("/");
    const baseUrl = self.location.protocol + "//" + basePath;
    if (url.charAt(0) === ".") {
      url = url.slice(1);
    }
    if (url.charAt(0) === "/") {
      url = url.slice(1);
    }
    return baseUrl + "/" + url;
  }
  const absoluteUrl = new URL(url, self.location.href);
  return absoluteUrl.href;
}
class Matrix3d {
  /**
   * Creates a new 3x3 matrix.
   *
   * @param entries Row-major 3x3 matrix
   */
  constructor() {
    __publicField(this, "ta");
    __publicField(this, "tb");
    __publicField(this, "tx");
    __publicField(this, "tc");
    __publicField(this, "td");
    __publicField(this, "ty");
    __publicField(this, "_floatArr", null);
    /**
     * Potential Mutation Flag
     *
     * @remarks
     * This flag is set to true whenever the matrix is potentially modified.
     * We don't waste CPU trying to identify if each operation actually modifies
     * the matrix. Instead, we set this flag to true whenever we think the matrix
     * is modified. This signals that the `floatArr` should to be updated.
     */
    __publicField(this, "mutation");
    this.ta = 0;
    this.tb = 0;
    this.tx = 0;
    this.tc = 0;
    this.td = 0;
    this.ty = 0;
    this.mutation = true;
  }
  /**
   * Returns a temporary matrix that can be used for calculations.
   *
   * @remarks
   * This is useful for avoiding allocations in tight loops.
   *
   * The matrix is not guaranteed to be the same between calls.
   *
   * @returns
   */
  static get temp() {
    return tempMatrix;
  }
  static multiply(a, b, out) {
    const e0 = a.ta * b.ta + a.tb * b.tc;
    const e1 = a.ta * b.tb + a.tb * b.td;
    const e2 = a.ta * b.tx + a.tb * b.ty + a.tx;
    const e3 = a.tc * b.ta + a.td * b.tc;
    const e4 = a.tc * b.tb + a.td * b.td;
    const e5 = a.tc * b.tx + a.td * b.ty + a.ty;
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = e0;
    out.tb = e1;
    out.tx = e2;
    out.tc = e3;
    out.td = e4;
    out.ty = e5;
    out.mutation = true;
    return out;
  }
  static identity(out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = 1;
    out.tb = 0;
    out.tx = 0;
    out.tc = 0;
    out.td = 1;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static translate(x, y, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = 1;
    out.tb = 0;
    out.tx = x;
    out.tc = 0;
    out.td = 1;
    out.ty = y;
    out.mutation = true;
    return out;
  }
  static scale(sx, sy, out) {
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = sx;
    out.tb = 0;
    out.tx = 0;
    out.tc = 0;
    out.td = sy;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static rotate(angle, out) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    if (!out) {
      out = new Matrix3d();
    }
    out.ta = cos;
    out.tb = -sin;
    out.tx = 0;
    out.tc = sin;
    out.td = cos;
    out.ty = 0;
    out.mutation = true;
    return out;
  }
  static copy(src, dst) {
    if (!dst) {
      dst = new Matrix3d();
    }
    dst.ta = src.ta;
    dst.tc = src.tc;
    dst.tb = src.tb;
    dst.td = src.td;
    dst.tx = src.tx;
    dst.ty = src.ty;
    dst.mutation = true;
    return dst;
  }
  translate(x, y) {
    this.tx = this.ta * x + this.tb * y + this.tx;
    this.ty = this.tc * x + this.td * y + this.ty;
    this.mutation = true;
    return this;
  }
  scale(sx, sy) {
    this.ta = this.ta * sx;
    this.tb = this.tb * sy;
    this.tc = this.tc * sx;
    this.td = this.td * sy;
    this.mutation = true;
    return this;
  }
  rotate(angle) {
    if (angle === 0 || !(angle % Math.PI * 2)) {
      return this;
    }
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const e0 = this.ta * cos + this.tb * sin;
    const e1 = this.tb * cos - this.ta * sin;
    const e3 = this.tc * cos + this.td * sin;
    const e4 = this.td * cos - this.tc * sin;
    this.ta = e0;
    this.tb = e1;
    this.tc = e3;
    this.td = e4;
    this.mutation = true;
    return this;
  }
  multiply(other) {
    return Matrix3d.multiply(this, other, this);
  }
  /**
   * Returns the matrix as a Float32Array in column-major order.
   *
   * @remarks
   * This method is optimized to avoid unnecessary allocations. The same array
   * is returned every time this method is called, and is updated in place.
   *
   * WARNING: Use the array only for passing directly to a WebGL shader uniform
   * during a frame render. Do not modify or hold onto the array for longer than
   * a frame.
   */
  getFloatArr() {
    if (!this._floatArr) {
      this._floatArr = new Float32Array(9);
    }
    if (this.mutation) {
      this._floatArr[0] = this.ta;
      this._floatArr[1] = this.tc;
      this._floatArr[2] = 0;
      this._floatArr[3] = this.tb;
      this._floatArr[4] = this.td;
      this._floatArr[5] = 0;
      this._floatArr[6] = this.tx;
      this._floatArr[7] = this.ty;
      this._floatArr[8] = 1;
      this.mutation = false;
    }
    return this._floatArr;
  }
}
const tempMatrix = new Matrix3d();
const rx1 = 0;
const rx2 = 2;
const rx3 = 4;
const rx4 = 6;
const ry1 = 1;
const ry2 = 3;
const ry3 = 5;
const ry4 = 7;
class RenderCoords {
  constructor(entries3) {
    __publicField(this, "data");
    this.data = new Float32Array(8);
    if (entries3) {
      this.data[rx1] = entries3[rx1];
      this.data[rx2] = entries3[rx2];
      this.data[rx3] = entries3[rx3];
      this.data[rx4] = entries3[rx4];
      this.data[ry1] = entries3[ry1];
      this.data[ry2] = entries3[ry2];
      this.data[ry3] = entries3[ry3];
      this.data[ry4] = entries3[ry4];
    }
  }
  static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
    if (!out) {
      out = new RenderCoords();
    }
    out.data[rx1] = x1;
    out.data[rx2] = x2;
    out.data[rx3] = x3;
    out.data[rx4] = x4;
    out.data[ry1] = y1;
    out.data[ry2] = y2;
    out.data[ry3] = y3;
    out.data[ry4] = y4;
    return out;
  }
  get x1() {
    return this.data[rx1];
  }
  get x2() {
    return this.data[rx2];
  }
  get x3() {
    return this.data[rx3];
  }
  get x4() {
    return this.data[rx4];
  }
  get y1() {
    return this.data[ry1];
  }
  get y2() {
    return this.data[ry2];
  }
  get y3() {
    return this.data[ry3];
  }
  get y4() {
    return this.data[ry4];
  }
}
const isPowerOfTwo = (value) => {
  return value && !(value & value - 1);
};
const getTimingBezier = (a, b, c, d) => {
  const xc = 3 * a;
  const xb = 3 * (c - a) - xc;
  const xa = 1 - xc - xb;
  const yc = 3 * b;
  const yb = 3 * (d - b) - yc;
  const ya = 1 - yc - yb;
  return function(time) {
    if (time >= 1) {
      return 1;
    }
    if (time <= 0) {
      return 0;
    }
    let t = 0.5, cbx, cbxd, dx;
    for (let it = 0; it < 20; it++) {
      cbx = t * (t * (t * xa + xb) + xc);
      dx = time - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc);
      }
      cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
      if (cbxd > 1e-10 && cbxd < 1e-10) {
        break;
      }
      t += dx / cbxd;
    }
    let minT = 0;
    let maxT = 1;
    for (let it = 0; it < 20; it++) {
      t = 0.5 * (minT + maxT);
      cbx = t * (t * (t * xa + xb) + xc);
      dx = time - cbx;
      if (dx > -1e-8 && dx < 1e-8) {
        return t * (t * (t * ya + yb) + yc);
      }
      if (dx < 0) {
        maxT = t;
      } else {
        minT = t;
      }
    }
  };
};
const timingMapping = {};
const timingLookup = {
  ease: [0.25, 0.1, 0.25, 1],
  "ease-in": [0.42, 0, 1, 1],
  "ease-out": [0, 0, 0.58, 1],
  "ease-in-out": [0.42, 0, 0.58, 1],
  "ease-in-sine": [0.12, 0, 0.39, 0],
  "ease-out-sine": [0.12, 0, 0.39, 0],
  "ease-in-out-sine": [0.37, 0, 0.63, 1],
  "ease-in-cubic": [0.32, 0, 0.67, 0],
  "ease-out-cubic": [0.33, 1, 0.68, 1],
  "ease-in-out-cubic": [0.65, 0, 0.35, 1],
  "ease-in-circ": [0.55, 0, 1, 0.45],
  "ease-out-circ": [0, 0.55, 0.45, 1],
  "ease-in-out-circ": [0.85, 0, 0.15, 1],
  "ease-in-back": [0.36, 0, 0.66, -0.56],
  "ease-out-back": [0.34, 1.56, 0.64, 1],
  "ease-in-out-back": [0.68, -0.6, 0.32, 1.6]
};
const defaultTiming = (t) => t;
const parseCubicBezier = (str) => {
  const regex = /-?\d*\.?\d+/g;
  const match = str.match(regex);
  if (match) {
    const [num1, num2, num3, num4] = match;
    const a = parseFloat(num1 || "0.42");
    const b = parseFloat(num2 || "0");
    const c = parseFloat(num3 || "1");
    const d = parseFloat(num4 || "1");
    const timing = getTimingBezier(a, b, c, d);
    timingMapping[str] = timing;
    return timing;
  }
  console.warn("Unknown cubic-bezier timing: " + str);
  return defaultTiming;
};
const getTimingFunction = (str) => {
  if (str === "linear") {
    return defaultTiming;
  }
  if (timingMapping[str] !== void 0) {
    return timingMapping[str] || defaultTiming;
  }
  if (str === "step-start") {
    return () => {
      return 1;
    };
  }
  if (str === "step-end") {
    return (time) => {
      return time === 1 ? 1 : 0;
    };
  }
  const lookup = timingLookup[str];
  if (lookup !== void 0) {
    const [a, b, c, d] = lookup;
    const timing = getTimingBezier(a, b, c, d);
    timingMapping[str] = timing;
    return timing;
  }
  if (str.startsWith("cubic-bezier")) {
    return parseCubicBezier(str);
  }
  console.warn("Unknown timing function: " + str);
  return defaultTiming;
};
function bytesToMb$1(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}
class CoreAnimation extends EventEmitter {
  constructor(node, props, settings) {
    var _a2, _b, _c, _d, _e, _f;
    super();
    __publicField(this, "node");
    __publicField(this, "props");
    __publicField(this, "settings");
    __publicField(this, "progress", 0);
    __publicField(this, "delayFor", 0);
    __publicField(this, "timingFunction");
    __publicField(this, "propValuesMap", {});
    __publicField(this, "dynPropValuesMap");
    this.node = node;
    this.props = props;
    for (const key in props) {
      if (key !== "shaderProps") {
        if (this.propValuesMap["props"] === void 0) {
          this.propValuesMap["props"] = {};
        }
        this.propValuesMap["props"][key] = {
          start: node[key] || 0,
          target: props[key]
        };
      } else if (node.shader.type !== "DynamicShader") {
        this.propValuesMap["shaderProps"] = {};
        for (const key2 in props.shaderProps) {
          this.propValuesMap["shaderProps"][key2] = {
            start: node.shader.props[key2],
            target: props.shaderProps[key2]
          };
        }
      } else {
        const shaderPropKeys = Object.keys(props.shaderProps);
        const spLength = shaderPropKeys.length;
        this.dynPropValuesMap = {};
        for (let j = 0; j < spLength; j++) {
          const effectName = shaderPropKeys[j];
          const effect = props.shaderProps[effectName];
          this.dynPropValuesMap[effectName] = {};
          const effectProps = Object.entries(effect);
          const eLength = effectProps.length;
          for (let k = 0; k < eLength; k++) {
            const [key2, value] = effectProps[k];
            this.dynPropValuesMap[effectName][key2] = {
              start: node.shader.props[effectName][key2],
              target: value
            };
          }
        }
      }
    }
    const easing = settings.easing || "linear";
    const delay2 = (_a2 = settings.delay) != null ? _a2 : 0;
    this.settings = {
      duration: (_b = settings.duration) != null ? _b : 0,
      delay: delay2,
      easing,
      loop: (_c = settings.loop) != null ? _c : false,
      repeat: (_d = settings.repeat) != null ? _d : 0,
      repeatDelay: (_e = settings.repeatDelay) != null ? _e : 0,
      stopMethod: (_f = settings.stopMethod) != null ? _f : false
    };
    this.timingFunction = getTimingFunction(easing);
    this.delayFor = delay2;
  }
  reset() {
    this.progress = 0;
    this.delayFor = this.settings.delay || 0;
    this.update(0);
  }
  restoreValues(target, valueMap) {
    const entries3 = Object.entries(valueMap);
    const eLength = entries3.length;
    for (let i = 0; i < eLength; i++) {
      const [key, value] = entries3[i];
      target[key] = value.start;
    }
  }
  restore() {
    this.reset();
    if (this.propValuesMap["props"] !== void 0) {
      this.restoreValues(this.node, this.propValuesMap["props"]);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.restoreValues(this.node.shader.props, this.propValuesMap["shaderProps"]);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key = dynEntries[i];
          this.restoreValues(this.node.shader.props[key], this.dynPropValuesMap[key]);
        }
      }
    }
  }
  reverseValues(valueMap) {
    const entries3 = Object.entries(valueMap);
    const eLength = entries3.length;
    for (let i = 0; i < eLength; i++) {
      const [key, value] = entries3[i];
      valueMap[key] = {
        start: value.target,
        target: value.start
      };
    }
  }
  reverse() {
    this.progress = 0;
    if (this.propValuesMap["props"] !== void 0) {
      this.reverseValues(this.propValuesMap["props"]);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.reverseValues(this.propValuesMap["shaderProps"]);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key = dynEntries[i];
          this.reverseValues(this.dynPropValuesMap[key]);
        }
      }
    }
    if (!this.settings.loop) {
      this.settings.stopMethod = false;
    }
  }
  applyEasing(p, s, e) {
    return (this.timingFunction(p) || p) * (e - s) + s;
  }
  updateValue(propName, propValue, startValue, easing) {
    if (this.progress === 1) {
      return propValue;
    }
    if (this.progress === 0) {
      return startValue;
    }
    const endValue = propValue;
    if (propName.indexOf("color") !== -1) {
      if (startValue === endValue) {
        return startValue;
      }
      if (easing) {
        const easingProgressValue = this.timingFunction(this.progress) || this.progress;
        return mergeColorProgress(startValue, endValue, easingProgressValue);
      }
      return mergeColorProgress(startValue, endValue, this.progress);
    }
    if (easing) {
      return this.applyEasing(this.progress, startValue, endValue);
    }
    return startValue + (endValue - startValue) * this.progress;
  }
  updateValues(target, valueMap, easing) {
    const entries3 = Object.entries(valueMap);
    const eLength = entries3.length;
    for (let i = 0; i < eLength; i++) {
      const [key, value] = entries3[i];
      target[key] = this.updateValue(key, value.target, value.start, easing);
    }
  }
  update(dt) {
    const { duration, loop, easing, stopMethod } = this.settings;
    const { delayFor } = this;
    if (duration === 0 && delayFor === 0) {
      this.emit("finished", {});
      return;
    }
    if (this.delayFor > 0) {
      this.delayFor -= dt;
      if (this.delayFor >= 0) {
        return;
      } else {
        dt = -this.delayFor;
        this.delayFor = 0;
      }
    }
    if (duration === 0) {
      this.emit("finished", {});
      return;
    }
    if (this.progress === 0) {
      this.emit("animating", {});
    }
    this.progress += dt / duration;
    if (this.progress > 1) {
      this.progress = loop ? 0 : 1;
      if (stopMethod) {
        this.emit("finished", {});
        return;
      }
    }
    if (this.propValuesMap["props"] !== void 0) {
      this.updateValues(this.node, this.propValuesMap["props"], easing);
    }
    if (this.propValuesMap["shaderProps"] !== void 0) {
      this.updateValues(this.node.shader.props, this.propValuesMap["shaderProps"], easing);
    }
    if (this.dynPropValuesMap !== void 0) {
      const dynEntries = Object.keys(this.dynPropValuesMap);
      const dynEntriesL = dynEntries.length;
      if (dynEntriesL > 0) {
        for (let i = 0; i < dynEntriesL; i++) {
          const key = dynEntries[i];
          this.updateValues(this.node.shader.props[key], this.dynPropValuesMap[key], easing);
        }
      }
    }
    if (this.progress === 1) {
      this.emit("finished", {});
    }
  }
}
class CoreAnimationController extends EventEmitter {
  constructor(manager, animation) {
    super();
    __publicField(this, "manager");
    __publicField(this, "animation");
    __publicField(this, "stoppedPromise");
    /**
     * If this is null, then the animation is in a finished / stopped state.
     */
    __publicField(this, "stoppedResolve", null);
    __publicField(this, "state");
    this.manager = manager;
    this.animation = animation;
    this.state = "stopped";
    this.stoppedPromise = Promise.resolve();
    this.onAnimating = this.onAnimating.bind(this);
    this.onFinished = this.onFinished.bind(this);
  }
  start() {
    if (this.state !== "running") {
      this.makeStoppedPromise();
      this.registerAnimation();
      this.state = "running";
    }
    return this;
  }
  stop() {
    this.unregisterAnimation();
    if (this.stoppedResolve !== null) {
      this.stoppedResolve();
      this.stoppedResolve = null;
      this.emit("stopped", this);
    }
    this.animation.reset();
    this.state = "stopped";
    return this;
  }
  pause() {
    this.unregisterAnimation();
    this.state = "paused";
    return this;
  }
  restore() {
    this.stoppedResolve = null;
    this.animation.restore();
    return this;
  }
  waitUntilStopped() {
    return this.stoppedPromise;
  }
  registerAnimation() {
    this.animation.once("finished", this.onFinished);
    this.animation.on("animating", this.onAnimating);
    this.manager.registerAnimation(this.animation);
  }
  unregisterAnimation() {
    this.manager.unregisterAnimation(this.animation);
    this.animation.off("finished", this.onFinished);
    this.animation.off("animating", this.onAnimating);
  }
  makeStoppedPromise() {
    if (this.stoppedResolve === null) {
      this.stoppedPromise = new Promise((resolve) => {
        this.stoppedResolve = resolve;
      });
    }
  }
  onFinished() {
    assertTruthy(this.stoppedResolve);
    const { loop, stopMethod } = this.animation.settings;
    if (stopMethod === "reverse") {
      this.animation.once("finished", this.onFinished);
      this.animation.reverse();
      return;
    }
    if (loop) {
      return;
    }
    this.unregisterAnimation();
    this.stoppedResolve();
    this.stoppedResolve = null;
    this.emit("stopped", this);
    this.state = "stopped";
  }
  onAnimating() {
    this.emit("animating", this);
  }
}
var CoreNodeRenderState;
(function(CoreNodeRenderState2) {
  CoreNodeRenderState2[CoreNodeRenderState2["Init"] = 0] = "Init";
  CoreNodeRenderState2[CoreNodeRenderState2["OutOfBounds"] = 2] = "OutOfBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InBounds"] = 4] = "InBounds";
  CoreNodeRenderState2[CoreNodeRenderState2["InViewport"] = 8] = "InViewport";
})(CoreNodeRenderState || (CoreNodeRenderState = {}));
const CoreNodeRenderStateMap = /* @__PURE__ */ new Map();
CoreNodeRenderStateMap.set(CoreNodeRenderState.Init, "init");
CoreNodeRenderStateMap.set(CoreNodeRenderState.OutOfBounds, "outOfBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InBounds, "inBounds");
CoreNodeRenderStateMap.set(CoreNodeRenderState.InViewport, "inViewport");
var UpdateType;
(function(UpdateType2) {
  UpdateType2[UpdateType2["Children"] = 1] = "Children";
  UpdateType2[UpdateType2["ScaleRotate"] = 2] = "ScaleRotate";
  UpdateType2[UpdateType2["Local"] = 4] = "Local";
  UpdateType2[UpdateType2["Global"] = 8] = "Global";
  UpdateType2[UpdateType2["Clipping"] = 16] = "Clipping";
  UpdateType2[UpdateType2["CalculatedZIndex"] = 32] = "CalculatedZIndex";
  UpdateType2[UpdateType2["ZIndexSortedChildren"] = 64] = "ZIndexSortedChildren";
  UpdateType2[UpdateType2["PremultipliedColors"] = 128] = "PremultipliedColors";
  UpdateType2[UpdateType2["WorldAlpha"] = 256] = "WorldAlpha";
  UpdateType2[UpdateType2["RenderState"] = 512] = "RenderState";
  UpdateType2[UpdateType2["IsRenderable"] = 1024] = "IsRenderable";
  UpdateType2[UpdateType2["RenderTexture"] = 2048] = "RenderTexture";
  UpdateType2[UpdateType2["ParentRenderTexture"] = 4096] = "ParentRenderTexture";
  UpdateType2[UpdateType2["None"] = 0] = "None";
  UpdateType2[UpdateType2["All"] = 8191] = "All";
})(UpdateType || (UpdateType = {}));
class CoreNode extends EventEmitter {
  constructor(stage, props) {
    super();
    __publicField(this, "stage");
    __publicField(this, "children", []);
    __publicField(this, "_id", getNewId());
    __publicField(this, "props");
    __publicField(this, "updateType", UpdateType.All);
    __publicField(this, "globalTransform");
    __publicField(this, "scaleRotateTransform");
    __publicField(this, "localTransform");
    __publicField(this, "renderCoords");
    __publicField(this, "renderBound");
    __publicField(this, "strictBound");
    __publicField(this, "preloadBound");
    __publicField(this, "clippingRect", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      valid: false
    });
    __publicField(this, "isRenderable", false);
    __publicField(this, "renderState", CoreNodeRenderState.Init);
    __publicField(this, "worldAlpha", 1);
    __publicField(this, "premultipliedColorTl", 0);
    __publicField(this, "premultipliedColorTr", 0);
    __publicField(this, "premultipliedColorBl", 0);
    __publicField(this, "premultipliedColorBr", 0);
    __publicField(this, "calcZIndex", 0);
    __publicField(this, "hasRTTupdates", false);
    __publicField(this, "parentHasRenderTexture", false);
    __publicField(this, "onTextureLoaded", (_, dimensions) => {
      var _a2, _b;
      this.autosizeNode(dimensions);
      this.stage.requestRender();
      if (this.parentHasRenderTexture) {
        this.setRTTUpdates(1);
      }
      this.emit("loaded", {
        type: "texture",
        dimensions
      });
      if (((_b = (_a2 = this.props.textureOptions) == null ? void 0 : _a2.resizeMode) == null ? void 0 : _b.type) === "contain") {
        this.setUpdateType(UpdateType.Local);
      }
    });
    __publicField(this, "onTextureFailed", (_, error) => {
      this.emit("failed", {
        type: "texture",
        error
      });
    });
    __publicField(this, "onTextureFreed", () => {
      this.emit("freed", {
        type: "texture"
      });
    });
    this.stage = stage;
    this.props = {
      ...props,
      parent: null,
      texture: null,
      src: null,
      rtt: false
    };
    this.parent = props.parent;
    this.texture = props.texture;
    this.src = props.src;
    this.rtt = props.rtt;
    this.updateScaleRotateTransform();
  }
  //#region Textures
  loadTexture() {
    const { texture } = this.props;
    assertTruthy(texture);
    queueMicrotask(() => {
      texture.preventCleanup = this.props.preventCleanup;
      if (this.textureOptions.preload) {
        texture.ctxTexture.load();
      }
      if (texture.state === "loaded") {
        assertTruthy(texture.dimensions);
        this.onTextureLoaded(texture, texture.dimensions);
      } else if (texture.state === "failed") {
        assertTruthy(texture.error);
        this.onTextureFailed(texture, texture.error);
      } else if (texture.state === "freed") {
        this.onTextureFreed(texture);
      }
      texture.on("loaded", this.onTextureLoaded);
      texture.on("failed", this.onTextureFailed);
      texture.on("freed", this.onTextureFreed);
    });
  }
  unloadTexture() {
    if (this.texture) {
      this.texture.off("loaded", this.onTextureLoaded);
      this.texture.off("failed", this.onTextureFailed);
      this.texture.off("freed", this.onTextureFreed);
      this.texture.setRenderableOwner(this, false);
    }
  }
  autosizeNode(dimensions) {
    if (this.autosize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
    }
  }
  //#endregion Textures
  /**
   * Change types types is used to determine the scope of the changes being applied
   *
   * @remarks
   * See {@link UpdateType} for more information on each type
   *
   * @param type
   */
  setUpdateType(type2) {
    this.updateType |= type2;
    const parent = this.props.parent;
    if (parent && !(parent.updateType & UpdateType.Children)) {
      parent.setUpdateType(UpdateType.Children);
    }
    if (this.parentHasRenderTexture) {
      this.setRTTUpdates(type2);
    }
  }
  sortChildren() {
    this.children.sort((a, b) => a.calcZIndex - b.calcZIndex);
  }
  updateScaleRotateTransform() {
    const { rotation, scaleX, scaleY } = this.props;
    if (rotation === 0 && scaleX === 1 && scaleY === 1) {
      this.scaleRotateTransform = void 0;
      return;
    }
    this.scaleRotateTransform = Matrix3d.rotate(rotation, this.scaleRotateTransform).scale(scaleX, scaleY);
  }
  updateLocalTransform() {
    var _a2, _b;
    const { x, y, width, height } = this.props;
    const mountTranslateX = this.props.mountX * width;
    const mountTranslateY = this.props.mountY * height;
    if (this.scaleRotateTransform) {
      const pivotTranslateX = this.props.pivotX * width;
      const pivotTranslateY = this.props.pivotY * height;
      this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(this.scaleRotateTransform).translate(-pivotTranslateX, -pivotTranslateY);
    } else {
      this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
    }
    const texture = this.props.texture;
    if (texture && texture.dimensions && ((_b = (_a2 = this.props.textureOptions) == null ? void 0 : _a2.resizeMode) == null ? void 0 : _b.type) === "contain") {
      let resizeModeScaleX = 1;
      let resizeModeScaleY = 1;
      let extraX = 0;
      let extraY = 0;
      const { width: tw, height: th } = texture.dimensions;
      const txAspectRatio = tw / th;
      const nodeAspectRatio = width / height;
      if (txAspectRatio > nodeAspectRatio) {
        const scaleX = width / tw;
        const scaledTxHeight = th * scaleX;
        extraY = (height - scaledTxHeight) / 2;
        resizeModeScaleY = scaledTxHeight / height;
      } else {
        const scaleY = height / th;
        const scaledTxWidth = tw * scaleY;
        extraX = (width - scaledTxWidth) / 2;
        resizeModeScaleX = scaledTxWidth / width;
      }
      this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
    }
    this.setUpdateType(UpdateType.Global);
  }
  /**
   * @todo: test for correct calculation flag
   * @param delta
   */
  update(delta, parentClippingRect) {
    var _a2;
    if (this.updateType & UpdateType.ScaleRotate) {
      this.updateScaleRotateTransform();
      this.setUpdateType(UpdateType.Local);
    }
    if (this.updateType & UpdateType.Local) {
      this.updateLocalTransform();
      this.setUpdateType(UpdateType.Global);
    }
    const parent = this.props.parent;
    let childUpdateType = UpdateType.None;
    if (this.updateType & UpdateType.ParentRenderTexture) {
      let p = this.parent;
      while (p) {
        if (p.rtt) {
          this.parentHasRenderTexture = true;
        }
        p = p.parent;
      }
    }
    if (this.updateType ^ UpdateType.All && this.updateType & UpdateType.RenderTexture) {
      this.children.forEach((child) => {
        child.setUpdateType(UpdateType.All);
      });
    }
    if (this.updateType & UpdateType.Global) {
      assertTruthy(this.localTransform);
      this.globalTransform = Matrix3d.copy((parent == null ? void 0 : parent.globalTransform) || this.localTransform, this.globalTransform);
      if (this.parentHasRenderTexture && ((_a2 = this.props.parent) == null ? void 0 : _a2.rtt)) {
        this.globalTransform = Matrix3d.identity();
      }
      if (parent) {
        this.globalTransform.multiply(this.localTransform);
      }
      this.calculateRenderCoords();
      this.updateBoundingRect();
      this.setUpdateType(UpdateType.Clipping | UpdateType.RenderState | UpdateType.Children);
      childUpdateType |= UpdateType.Global;
    }
    if (this.updateType & UpdateType.Clipping) {
      this.calculateClippingRect(parentClippingRect);
      this.setUpdateType(UpdateType.Children);
      childUpdateType |= UpdateType.Clipping;
    }
    if (this.updateType & UpdateType.WorldAlpha) {
      if (parent) {
        this.worldAlpha = parent.worldAlpha * this.props.alpha;
      } else {
        this.worldAlpha = this.props.alpha;
      }
      this.setUpdateType(UpdateType.Children | UpdateType.PremultipliedColors | UpdateType.IsRenderable);
      childUpdateType |= UpdateType.WorldAlpha;
    }
    if (this.updateType & UpdateType.PremultipliedColors) {
      this.premultipliedColorTl = mergeColorAlphaPremultiplied(this.props.colorTl, this.worldAlpha, true);
      if (this.props.colorTl === this.props.colorTr && this.props.colorBl === this.props.colorBr && this.props.colorTl === this.props.colorBl) {
        this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = this.premultipliedColorTl;
      } else {
        this.premultipliedColorTr = mergeColorAlphaPremultiplied(this.props.colorTr, this.worldAlpha, true);
        this.premultipliedColorBl = mergeColorAlphaPremultiplied(this.props.colorBl, this.worldAlpha, true);
        this.premultipliedColorBr = mergeColorAlphaPremultiplied(this.props.colorBr, this.worldAlpha, true);
      }
    }
    if (this.updateType & UpdateType.RenderState) {
      this.updateRenderState(parentClippingRect);
      this.setUpdateType(UpdateType.IsRenderable);
    }
    if (this.updateType & UpdateType.IsRenderable) {
      this.updateIsRenderable();
    }
    if (parent && this.updateType & UpdateType.CalculatedZIndex) {
      this.calculateZIndex();
      parent.setUpdateType(UpdateType.ZIndexSortedChildren);
    }
    if (this.updateType & UpdateType.Children && this.children.length && !this.rtt) {
      this.children.forEach((child) => {
        child.setUpdateType(childUpdateType);
        if (child.updateType === 0) {
          return;
        }
        child.update(delta, this.clippingRect);
      });
    }
    if (this.updateType & UpdateType.ZIndexSortedChildren) {
      this.sortChildren();
    }
    this.updateType = 0;
  }
  //check if CoreNode is renderable based on props
  checkRenderProps() {
    if (this.props.texture) {
      return true;
    }
    if (!this.props.width || !this.props.height) {
      return false;
    }
    if (this.props.shader !== this.stage.defShaderCtr) {
      return true;
    }
    if (this.props.clipping) {
      return true;
    }
    if (this.props.color !== 0) {
      return true;
    }
    if (this.props.colorTop !== 0) {
      return true;
    }
    if (this.props.colorBottom !== 0) {
      return true;
    }
    if (this.props.colorLeft !== 0) {
      return true;
    }
    if (this.props.colorRight !== 0) {
      return true;
    }
    if (this.props.colorTl !== 0) {
      return true;
    }
    if (this.props.colorTr !== 0) {
      return true;
    }
    if (this.props.colorBl !== 0) {
      return true;
    }
    if (this.props.colorBr !== 0) {
      return true;
    }
    return false;
  }
  checkRenderBounds(parentClippingRect) {
    assertTruthy(this.renderBound);
    const rectW = parentClippingRect.width || this.stage.root.width;
    const rectH = parentClippingRect.height || this.stage.root.height;
    this.strictBound = createBound(parentClippingRect.x, parentClippingRect.y, parentClippingRect.x + rectW, parentClippingRect.y + rectH, this.strictBound);
    if (boundInsideBound(this.renderBound, this.strictBound)) {
      return CoreNodeRenderState.InViewport;
    }
    const renderM = this.stage.boundsMargin;
    this.preloadBound = createBound(this.strictBound.x1 - renderM[3], this.strictBound.y1 - renderM[0], this.strictBound.x2 + renderM[1], this.strictBound.y2 + renderM[2], this.preloadBound);
    if (boundInsideBound(this.renderBound, this.preloadBound)) {
      return CoreNodeRenderState.InBounds;
    }
    return CoreNodeRenderState.OutOfBounds;
  }
  updateRenderState(parentClippingRect) {
    const renderState = this.checkRenderBounds(parentClippingRect);
    if (renderState === this.renderState) {
      return;
    }
    const previous = this.renderState;
    this.renderState = renderState;
    const event = CoreNodeRenderStateMap.get(renderState);
    assertTruthy(event);
    this.emit(event, {
      previous,
      current: renderState
    });
  }
  /**
   * This function updates the `isRenderable` property based on certain conditions.
   *
   * @returns
   */
  updateIsRenderable() {
    let newIsRenderable;
    if (this.worldAlpha === 0 || !this.checkRenderProps()) {
      newIsRenderable = false;
    } else {
      newIsRenderable = this.renderState > CoreNodeRenderState.OutOfBounds;
    }
    if (this.isRenderable !== newIsRenderable) {
      this.isRenderable = newIsRenderable;
      this.onChangeIsRenderable(newIsRenderable);
    }
  }
  onChangeIsRenderable(isRenderable) {
    var _a2;
    (_a2 = this.texture) == null ? void 0 : _a2.setRenderableOwner(this, isRenderable);
  }
  calculateRenderCoords() {
    const { width, height, globalTransform: transform } = this;
    assertTruthy(transform);
    const { tx, ty, ta, tb, tc, td } = transform;
    if (tb === 0 && tc === 0) {
      const minX = tx;
      const maxX = tx + width * ta;
      const minY = ty;
      const maxY = ty + height * td;
      this.renderCoords = RenderCoords.translate(
        //top-left
        minX,
        minY,
        //top-right
        maxX,
        minY,
        //bottom-right
        maxX,
        maxY,
        //bottom-left
        minX,
        maxY,
        this.renderCoords
      );
    } else {
      this.renderCoords = RenderCoords.translate(
        //top-left
        tx,
        ty,
        //top-right
        tx + width * ta,
        ty + width * tc,
        //bottom-right
        tx + width * ta + height * tb,
        ty + width * tc + height * td,
        //bottom-left
        tx + height * tb,
        ty + height * td,
        this.renderCoords
      );
    }
  }
  updateBoundingRect() {
    const { renderCoords, globalTransform: transform } = this;
    assertTruthy(transform);
    assertTruthy(renderCoords);
    const { tb, tc } = transform;
    const { x1, y1, x3, y3 } = renderCoords;
    if (tb === 0 || tc === 0) {
      this.renderBound = createBound(x1, y1, x3, y3, this.renderBound);
    } else {
      const { x2, x4, y2, y4 } = renderCoords;
      this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
    }
  }
  /**
   * This function calculates the clipping rectangle for a node.
   *
   * The function then checks if the node is rotated. If the node requires clipping and is not rotated, a new clipping rectangle is created based on the node's global transform and dimensions.
   * If a parent clipping rectangle exists, it is intersected with the node's clipping rectangle (if it exists), or replaces the node's clipping rectangle.
   *
   * Finally, the node's parentClippingRect and clippingRect properties are updated.
   */
  calculateClippingRect(parentClippingRect) {
    assertTruthy(this.globalTransform);
    const { clippingRect, props, globalTransform: gt } = this;
    const { clipping } = props;
    const isRotated = gt.tb !== 0 || gt.tc !== 0;
    if (clipping && !isRotated) {
      clippingRect.x = gt.tx;
      clippingRect.y = gt.ty;
      clippingRect.width = this.width * gt.ta;
      clippingRect.height = this.height * gt.td;
      clippingRect.valid = true;
    } else {
      clippingRect.valid = false;
    }
    if (parentClippingRect.valid && clippingRect.valid) {
      intersectRect(parentClippingRect, clippingRect, clippingRect);
    } else if (parentClippingRect.valid) {
      copyRect(parentClippingRect, clippingRect);
      clippingRect.valid = true;
    }
  }
  calculateZIndex() {
    var _a2, _b;
    const props = this.props;
    const z = props.zIndex || 0;
    const p = ((_a2 = props.parent) == null ? void 0 : _a2.zIndex) || 0;
    let zIndex = z;
    if ((_b = props.parent) == null ? void 0 : _b.zIndexLocked) {
      zIndex = z < p ? z : p;
    }
    this.calcZIndex = zIndex;
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    this.unloadTexture();
    this.clippingRect.valid = false;
    this.isRenderable = false;
    delete this.renderCoords;
    delete this.renderBound;
    delete this.strictBound;
    delete this.preloadBound;
    delete this.globalTransform;
    delete this.scaleRotateTransform;
    delete this.localTransform;
    this.props.texture = null;
    this.props.shader = this.stage.defShaderCtr;
    const children = [...this.children];
    for (let i = 0; i < children.length; i++) {
      children[i].destroy();
    }
    this.parent = null;
    if (this.rtt) {
      this.stage.renderer.removeRTTNode(this);
    }
    this.removeAllListeners();
  }
  renderQuads(renderer) {
    const { texture, width, height, textureOptions, rtt, shader } = this.props;
    if (this.parentHasRenderTexture) {
      if (!renderer.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer.activeRttNode) {
        return;
      }
    }
    const { premultipliedColorTl, premultipliedColorTr, premultipliedColorBl, premultipliedColorBr } = this;
    const { zIndex, worldAlpha, globalTransform: gt, clippingRect, renderCoords } = this;
    assertTruthy(gt);
    assertTruthy(renderCoords);
    renderer.addQuad({
      width,
      height,
      colorTl: premultipliedColorTl,
      colorTr: premultipliedColorTr,
      colorBl: premultipliedColorBl,
      colorBr: premultipliedColorBr,
      texture,
      textureOptions,
      zIndex,
      shader: shader.shader,
      shaderProps: shader.getResolvedProps(),
      alpha: worldAlpha,
      clippingRect,
      tx: gt.tx,
      ty: gt.ty,
      ta: gt.ta,
      tb: gt.tb,
      tc: gt.tc,
      td: gt.td,
      renderCoords,
      rtt,
      parentHasRenderTexture: this.parentHasRenderTexture,
      framebufferDimensions: this.framebufferDimensions
    });
  }
  //#region Properties
  get id() {
    return this._id;
  }
  get data() {
    return this.props.data;
  }
  set data(d) {
    this.props.data = d;
  }
  get x() {
    return this.props.x;
  }
  set x(value) {
    if (this.props.x !== value) {
      this.props.x = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get absX() {
    var _a2, _b, _c;
    return this.props.x + -this.props.width * this.props.mountX + (((_a2 = this.props.parent) == null ? void 0 : _a2.absX) || ((_c = (_b = this.props.parent) == null ? void 0 : _b.globalTransform) == null ? void 0 : _c.tx) || 0);
  }
  get absY() {
    var _a2, _b;
    return this.props.y + -this.props.height * this.props.mountY + ((_b = (_a2 = this.props.parent) == null ? void 0 : _a2.absY) != null ? _b : 0);
  }
  get y() {
    return this.props.y;
  }
  set y(value) {
    if (this.props.y !== value) {
      this.props.y = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    if (this.props.width !== value) {
      this.props.width = value;
      this.setUpdateType(UpdateType.Local);
      if (this.props.rtt) {
        this.texture = this.stage.txManager.loadTexture("RenderTexture", {
          width: this.width,
          height: this.height
        });
        this.textureOptions.preload = true;
        this.setUpdateType(UpdateType.RenderTexture);
      }
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    if (this.props.height !== value) {
      this.props.height = value;
      this.setUpdateType(UpdateType.Local);
      if (this.props.rtt) {
        this.texture = this.stage.txManager.loadTexture("RenderTexture", {
          width: this.width,
          height: this.height
        });
        this.textureOptions.preload = true;
        this.setUpdateType(UpdateType.RenderTexture);
      }
    }
  }
  get scale() {
    return this.scaleX;
  }
  set scale(value) {
    this.scaleX = value;
    this.scaleY = value;
  }
  get scaleX() {
    return this.props.scaleX;
  }
  set scaleX(value) {
    if (this.props.scaleX !== value) {
      this.props.scaleX = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get scaleY() {
    return this.props.scaleY;
  }
  set scaleY(value) {
    if (this.props.scaleY !== value) {
      this.props.scaleY = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get mount() {
    return this.props.mount;
  }
  set mount(value) {
    if (this.props.mountX !== value || this.props.mountY !== value) {
      this.props.mountX = value;
      this.props.mountY = value;
      this.props.mount = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountX() {
    return this.props.mountX;
  }
  set mountX(value) {
    if (this.props.mountX !== value) {
      this.props.mountX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get mountY() {
    return this.props.mountY;
  }
  set mountY(value) {
    if (this.props.mountY !== value) {
      this.props.mountY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivot() {
    return this.props.pivot;
  }
  set pivot(value) {
    if (this.props.pivotX !== value || this.props.pivotY !== value) {
      this.props.pivotX = value;
      this.props.pivotY = value;
      this.props.pivot = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotX() {
    return this.props.pivotX;
  }
  set pivotX(value) {
    if (this.props.pivotX !== value) {
      this.props.pivotX = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get pivotY() {
    return this.props.pivotY;
  }
  set pivotY(value) {
    if (this.props.pivotY !== value) {
      this.props.pivotY = value;
      this.setUpdateType(UpdateType.Local);
    }
  }
  get rotation() {
    return this.props.rotation;
  }
  set rotation(value) {
    if (this.props.rotation !== value) {
      this.props.rotation = value;
      this.setUpdateType(UpdateType.ScaleRotate);
    }
  }
  get alpha() {
    return this.props.alpha;
  }
  set alpha(value) {
    this.props.alpha = value;
    this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha);
  }
  get autosize() {
    return this.props.autosize;
  }
  set autosize(value) {
    this.props.autosize = value;
  }
  get clipping() {
    return this.props.clipping;
  }
  set clipping(value) {
    this.props.clipping = value;
    this.setUpdateType(UpdateType.Clipping);
  }
  get color() {
    return this.props.color;
  }
  set color(value) {
    this.colorTop = value;
    this.colorBottom = value;
    this.colorLeft = value;
    this.colorRight = value;
    this.props.color = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTop() {
    return this.props.colorTop;
  }
  set colorTop(value) {
    if (this.props.colorTl !== value || this.props.colorTr !== value) {
      this.colorTl = value;
      this.colorTr = value;
    }
    this.props.colorTop = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBottom() {
    return this.props.colorBottom;
  }
  set colorBottom(value) {
    if (this.props.colorBl !== value || this.props.colorBr !== value) {
      this.colorBl = value;
      this.colorBr = value;
    }
    this.props.colorBottom = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorLeft() {
    return this.props.colorLeft;
  }
  set colorLeft(value) {
    if (this.props.colorTl !== value || this.props.colorBl !== value) {
      this.colorTl = value;
      this.colorBl = value;
    }
    this.props.colorLeft = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorRight() {
    return this.props.colorRight;
  }
  set colorRight(value) {
    if (this.props.colorTr !== value || this.props.colorBr !== value) {
      this.colorTr = value;
      this.colorBr = value;
    }
    this.props.colorRight = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTl() {
    return this.props.colorTl;
  }
  set colorTl(value) {
    this.props.colorTl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorTr() {
    return this.props.colorTr;
  }
  set colorTr(value) {
    this.props.colorTr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBl() {
    return this.props.colorBl;
  }
  set colorBl(value) {
    this.props.colorBl = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  get colorBr() {
    return this.props.colorBr;
  }
  set colorBr(value) {
    this.props.colorBr = value;
    this.setUpdateType(UpdateType.PremultipliedColors);
  }
  // we're only interested in parent zIndex to test
  // if we should use node zIndex is higher then parent zIndex
  get zIndexLocked() {
    return this.props.zIndexLocked || 0;
  }
  set zIndexLocked(value) {
    this.props.zIndexLocked = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get zIndex() {
    return this.props.zIndex;
  }
  set zIndex(value) {
    this.props.zIndex = value;
    this.setUpdateType(UpdateType.CalculatedZIndex | UpdateType.Children);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.CalculatedZIndex);
    });
  }
  get parent() {
    return this.props.parent;
  }
  set parent(newParent) {
    const oldParent = this.props.parent;
    if (oldParent === newParent) {
      return;
    }
    this.props.parent = newParent;
    if (oldParent) {
      const index = oldParent.children.indexOf(this);
      assertTruthy(index !== -1, "CoreNode.parent: Node not found in old parent's children!");
      oldParent.children.splice(index, 1);
      oldParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
    }
    if (newParent) {
      newParent.children.push(this);
      this.setUpdateType(UpdateType.All);
      newParent.setUpdateType(UpdateType.Children | UpdateType.ZIndexSortedChildren);
      if (newParent.rtt || newParent.parentHasRenderTexture) {
        this.setRTTUpdates(UpdateType.All);
      }
    }
    this.updateScaleRotateTransform();
  }
  get preventCleanup() {
    return this.props.preventCleanup;
  }
  set preventCleanup(value) {
    this.props.preventCleanup = value;
  }
  get rtt() {
    return this.props.rtt;
  }
  set rtt(value) {
    var _a2, _b;
    if (this.props.rtt === true) {
      this.props.rtt = value;
      if (value === false && this.texture !== null) {
        this.unloadTexture();
        this.setUpdateType(UpdateType.All);
        this.children.forEach((child) => {
          child.parentHasRenderTexture = false;
        });
        (_a2 = this.stage.renderer) == null ? void 0 : _a2.removeRTTNode(this);
        return;
      }
    }
    if (value === false) {
      return;
    }
    this.texture = this.stage.txManager.loadTexture("RenderTexture", {
      width: this.width,
      height: this.height
    });
    this.textureOptions.preload = true;
    this.props.rtt = true;
    this.hasRTTupdates = true;
    this.setUpdateType(UpdateType.All);
    this.children.forEach((child) => {
      child.setUpdateType(UpdateType.All);
    });
    (_b = this.stage.renderer) == null ? void 0 : _b.renderToTexture(this);
  }
  get shader() {
    return this.props.shader;
  }
  set shader(value) {
    if (this.props.shader === value) {
      return;
    }
    this.props.shader = value;
    this.setUpdateType(UpdateType.IsRenderable);
  }
  get src() {
    return this.props.src;
  }
  set src(imageUrl) {
    if (this.props.src === imageUrl) {
      return;
    }
    this.props.src = imageUrl;
    if (!imageUrl) {
      this.texture = null;
      return;
    }
    this.texture = this.stage.txManager.loadTexture("ImageTexture", {
      src: imageUrl,
      width: this.props.width,
      height: this.props.height,
      type: this.props.imageType,
      sx: this.props.srcX,
      sy: this.props.srcY,
      sw: this.props.srcWidth,
      sh: this.props.srcHeight
    });
  }
  set imageType(type2) {
    if (this.props.imageType === type2) {
      return;
    }
    this.props.imageType = type2;
  }
  get imageType() {
    return this.props.imageType || null;
  }
  get srcHeight() {
    return this.props.srcHeight;
  }
  set srcHeight(value) {
    this.props.srcHeight = value;
  }
  get srcWidth() {
    return this.props.srcWidth;
  }
  set srcWidth(value) {
    this.props.srcWidth = value;
  }
  get srcX() {
    return this.props.srcX;
  }
  set srcX(value) {
    this.props.srcX = value;
  }
  get srcY() {
    return this.props.srcY;
  }
  set srcY(value) {
    this.props.srcY = value;
  }
  /**
   * Returns the framebuffer dimensions of the node.
   * If the node has a render texture, the dimensions are the same as the node's dimensions.
   * If the node does not have a render texture, the dimensions are inherited from the parent.
   * If the node parent has a render texture and the node is a render texture, the nodes dimensions are used.
   */
  get framebufferDimensions() {
    if (this.parentHasRenderTexture && !this.rtt && this.parent) {
      return this.parent.framebufferDimensions;
    }
    return { width: this.width, height: this.height };
  }
  /**
   * Returns the parent render texture node if it exists.
   */
  get parentRenderTexture() {
    let parent = this.parent;
    while (parent) {
      if (parent.rtt) {
        return parent;
      }
      parent = parent.parent;
    }
    return null;
  }
  get texture() {
    return this.props.texture;
  }
  set texture(value) {
    if (this.props.texture === value) {
      return;
    }
    const oldTexture = this.props.texture;
    if (oldTexture) {
      oldTexture.setRenderableOwner(this, false);
      this.unloadTexture();
    }
    this.props.texture = value;
    if (value) {
      value.setRenderableOwner(this, this.isRenderable);
      this.loadTexture();
    }
    this.setUpdateType(UpdateType.IsRenderable);
  }
  set textureOptions(value) {
    this.props.textureOptions = value;
  }
  get textureOptions() {
    return this.props.textureOptions;
  }
  setRTTUpdates(type2) {
    var _a2;
    this.hasRTTupdates = true;
    (_a2 = this.parent) == null ? void 0 : _a2.setRTTUpdates(type2);
  }
  animate(props, settings) {
    const animation = new CoreAnimation(this, props, settings);
    const controller = new CoreAnimationController(this.stage.animationManager, animation);
    return controller;
  }
  flush() {
  }
}
const startLoop = (stage) => {
  let isIdle = false;
  const runLoop = () => {
    stage.updateFrameTime();
    stage.updateAnimations();
    if (!stage.hasSceneUpdates()) {
      stage.calculateFps();
      setTimeout(runLoop, 16.666666666666668);
      if (!isIdle) {
        if (stage.txMemManager.checkCleanup()) {
          stage.txMemManager.cleanup();
        }
        stage.eventBus.emit("idle");
        isIdle = true;
      }
      stage.flushFrameEvents();
      return;
    }
    isIdle = false;
    stage.drawFrame();
    stage.flushFrameEvents();
    requestAnimationFrame(runLoop);
  };
  requestAnimationFrame(runLoop);
};
const getTimeStamp = () => {
  return performance ? performance.now() : Date.now();
};
class AnimationManager {
  constructor() {
    __publicField(this, "activeAnimations", /* @__PURE__ */ new Set());
  }
  registerAnimation(animation) {
    this.activeAnimations.add(animation);
  }
  unregisterAnimation(animation) {
    this.activeAnimations.delete(animation);
  }
  update(dt) {
    this.activeAnimations.forEach((animation) => {
      animation.update(dt);
    });
  }
}
class Texture extends EventEmitter {
  constructor(txManager) {
    super();
    __publicField(this, "txManager");
    /**
     * The dimensions of the texture
     *
     * @remarks
     * Until the texture data is loaded for the first time the value will be
     * `null`.
     */
    __publicField(this, "dimensions", null);
    __publicField(this, "error", null);
    __publicField(this, "state", "freed");
    __publicField(this, "renderableOwners", /* @__PURE__ */ new Set());
    __publicField(this, "renderable", false);
    __publicField(this, "lastRenderableChangeTime", 0);
    __publicField(this, "preventCleanup", false);
    this.txManager = txManager;
  }
  /**
   * Add/remove an owner to/from the Texture based on its renderability.
   *
   * @remarks
   * Any object can own a texture, be it a CoreNode or even the state object
   * from a Text Renderer.
   *
   * When the reference to the texture that an owner object holds is replaced
   * or cleared it must call this with `renderable=false` to release the owner
   * association.
   *
   * @param owner
   * @param renderable
   */
  setRenderableOwner(owner, renderable) {
    var _a2, _b;
    const oldSize = this.renderableOwners.size;
    if (renderable) {
      this.renderableOwners.add(owner);
      const newSize = this.renderableOwners.size;
      if (newSize > oldSize && newSize === 1) {
        this.renderable = true;
        this.lastRenderableChangeTime = this.txManager.frameTime;
        (_a2 = this.onChangeIsRenderable) == null ? void 0 : _a2.call(this, true);
      }
    } else {
      this.renderableOwners.delete(owner);
      const newSize = this.renderableOwners.size;
      if (newSize < oldSize && newSize === 0) {
        this.renderable = false;
        this.lastRenderableChangeTime = this.txManager.frameTime;
        (_b = this.onChangeIsRenderable) == null ? void 0 : _b.call(this, false);
      }
    }
  }
  /**
   * Get the CoreContextTexture for this Texture
   *
   * @remarks
   * Each Texture has a corresponding CoreContextTexture that is used to
   * manage the texture's native data depending on the renderer's mode
   * (WebGL, Canvas, etc).
   *
   * The Texture and CoreContextTexture are always linked together in a 1:1
   * relationship.
   */
  get ctxTexture() {
    const ctxTexture = this.txManager.renderer.createCtxTexture(this);
    Object.defineProperty(this, "ctxTexture", { value: ctxTexture });
    return ctxTexture;
  }
  /**
   * Set the state of the texture
   *
   * @remark
   * Intended for internal-use only but declared public so that it can be set
   * by it's associated {@link CoreContextTexture}
   *
   * @param state
   * @param args
   */
  setState(state, ...args) {
    if (this.state !== state) {
      this.state = state;
      if (state === "loaded") {
        const loadedArgs = args;
        this.dimensions = loadedArgs[0];
      } else if (state === "failed") {
        const failedArgs = args;
        this.error = failedArgs[0];
      }
      this.emit(state, ...args);
    }
  }
  /**
   * Make a cache key for this texture.
   *
   * @remarks
   * Each concrete `Texture` subclass must implement this method to provide an
   * appropriate cache key for the texture type including the texture's
   * properties that uniquely identify a copy of the texture. If the texture
   * type does not support caching, then this method should return `false`.
   *
   * @param props
   * @returns
   * A cache key for this texture or `false` if the texture type does not
   * support caching.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static makeCacheKey(props) {
    return false;
  }
  /**
   * Resolve the default values for the texture's properties.
   *
   * @remarks
   * Each concrete `Texture` subclass must implement this method to provide
   * default values for the texture's optional properties.
   *
   * @param props
   * @returns
   * The default values for the texture's properties.
   */
  static resolveDefaults(props) {
    return {};
  }
}
function createImageWorker() {
  function hasAlphaChannel(mimeType) {
    return mimeType.indexOf("image/png") !== -1;
  }
  function getImage(src, premultiplyAlpha, x, y, width, height) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.responseType = "blob";
      xhr.onload = function() {
        if (xhr.status !== 200) {
          return reject(new Error("Failed to load image: " + xhr.statusText));
        }
        var blob = xhr.response;
        var withAlphaChannel = premultiplyAlpha !== void 0 ? premultiplyAlpha : hasAlphaChannel(blob.type);
        if (width !== null && height !== null) {
          createImageBitmap(blob, x || 0, y || 0, width, height, {
            premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
            colorSpaceConversion: "none",
            imageOrientation: "none"
          }).then(function(data) {
            resolve({ data, premultiplyAlpha });
          }).catch(function(error) {
            reject(error);
          });
          return;
        }
        createImageBitmap(blob, {
          premultiplyAlpha: withAlphaChannel ? "premultiply" : "none",
          colorSpaceConversion: "none",
          imageOrientation: "none"
        }).then(function(data) {
          resolve({ data, premultiplyAlpha });
        }).catch(function(error) {
          reject(error);
        });
      };
      xhr.onerror = function() {
        reject(new Error("Network error occurred while trying to fetch the image."));
      };
      xhr.send();
    });
  }
  self.onmessage = (event) => {
    var src = event.data.src;
    var id = event.data.id;
    var premultiplyAlpha = event.data.premultiplyAlpha;
    var x = event.data.sx;
    var y = event.data.sy;
    var width = event.data.sw;
    var height = event.data.sh;
    getImage(src, premultiplyAlpha, x, y, width, height).then(function(data) {
      self.postMessage({ id, src, data });
    }).catch(function(error) {
      self.postMessage({ id, src, error: error.message });
    });
  };
}
class ImageWorkerManager {
  constructor(numImageWorkers) {
    __publicField(this, "imageWorkersEnabled", true);
    __publicField(this, "messageManager", {});
    __publicField(this, "workers", []);
    __publicField(this, "workerIndex", 0);
    __publicField(this, "nextId", 0);
    this.workers = this.createWorkers(numImageWorkers);
    this.workers.forEach((worker) => {
      worker.onmessage = this.handleMessage.bind(this);
    });
  }
  handleMessage(event) {
    const { id, data, error } = event.data;
    const msg = this.messageManager[id];
    if (msg) {
      const [resolve, reject] = msg;
      delete this.messageManager[id];
      if (error) {
        reject(new Error(error));
      } else {
        resolve(data);
      }
    }
  }
  createWorkers(numWorkers = 1) {
    const workerCode = "(".concat(createImageWorker.toString(), ")()");
    const blob = new Blob([workerCode.replace('"use strict";', "")], {
      type: "application/javascript"
    });
    const blobURL = (self.URL ? URL : webkitURL).createObjectURL(blob);
    const workers = [];
    for (let i = 0; i < numWorkers; i++) {
      workers.push(new Worker(blobURL));
    }
    return workers;
  }
  getNextWorker() {
    const worker = this.workers[this.workerIndex];
    this.workerIndex = (this.workerIndex + 1) % this.workers.length;
    return worker;
  }
  getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
    return new Promise((resolve, reject) => {
      try {
        if (this.workers) {
          const id = this.nextId++;
          this.messageManager[id] = [resolve, reject];
          const nextWorker = this.getNextWorker();
          if (nextWorker) {
            nextWorker.postMessage({
              id,
              src,
              premultiplyAlpha,
              sx,
              sy,
              sw,
              sh
            });
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
const _ColorTexture = class _ColorTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _ColorTexture.resolveDefaults(props || {});
  }
  get color() {
    return this.props.color;
  }
  set color(color) {
    this.props.color = color;
  }
  async getTextureData() {
    const pixelData32 = new Uint32Array([this.color]);
    const pixelData8 = new Uint8ClampedArray(pixelData32.buffer);
    return {
      data: new ImageData(pixelData8, 1, 1),
      premultiplyAlpha: true
    };
  }
  static makeCacheKey(props) {
    const resolvedProps = _ColorTexture.resolveDefaults(props);
    return "ColorTexture,".concat(resolvedProps.color);
  }
  static resolveDefaults(props) {
    return {
      color: props.color || 4294967295
    };
  }
};
__publicField(_ColorTexture, "z$__type__Props");
let ColorTexture = _ColorTexture;
function isCompressedTextureContainer(url) {
  return /\.(ktx|pvr)$/.test(url);
}
const loadCompressedTexture = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  if (url.indexOf(".ktx") !== -1) {
    return loadKTXData(arrayBuffer);
  }
  return loadPVRData(arrayBuffer);
};
const loadKTXData = async (buffer) => {
  const view = new DataView(buffer);
  const littleEndian = view.getUint32(12) === 16909060 ? true : false;
  const mipmaps = [];
  const data = {
    glInternalFormat: view.getUint32(28, littleEndian),
    pixelWidth: view.getUint32(36, littleEndian),
    pixelHeight: view.getUint32(40, littleEndian),
    numberOfMipmapLevels: view.getUint32(56, littleEndian),
    bytesOfKeyValueData: view.getUint32(60, littleEndian)
  };
  let offset = 64;
  offset += data.bytesOfKeyValueData;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const imageSize = view.getUint32(offset);
    offset += 4;
    mipmaps.push(view.buffer.slice(offset, imageSize));
    offset += imageSize;
  }
  return {
    data: {
      glInternalFormat: data.glInternalFormat,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "ktx"
    },
    premultiplyAlpha: false
  };
};
const loadPVRData = async (buffer) => {
  const pvrHeaderLength = 13;
  const pvrFormatEtc1 = 36196;
  const pvrWidth = 7;
  const pvrHeight = 6;
  const pvrMipmapCount = 11;
  const pvrMetadata = 12;
  const arrayBuffer = buffer;
  const header = new Int32Array(arrayBuffer, 0, pvrHeaderLength);
  const dataOffset = header[pvrMetadata] + 52;
  const pvrtcData = new Uint8Array(arrayBuffer, dataOffset);
  const mipmaps = [];
  const data = {
    pixelWidth: header[pvrWidth],
    pixelHeight: header[pvrHeight],
    numberOfMipmapLevels: header[pvrMipmapCount] || 0
  };
  let offset = 0;
  let width = data.pixelWidth || 0;
  let height = data.pixelHeight || 0;
  for (let i = 0; i < data.numberOfMipmapLevels; i++) {
    const level = (width + 3 >> 2) * (height + 3 >> 2) * 8;
    const view = new Uint8Array(arrayBuffer, pvrtcData.byteOffset + offset, level);
    mipmaps.push(view);
    offset += level;
    width = width >> 1;
    height = height >> 1;
  }
  return {
    data: {
      glInternalFormat: pvrFormatEtc1,
      mipmaps,
      width: data.pixelWidth || 0,
      height: data.pixelHeight || 0,
      type: "pvr"
    },
    premultiplyAlpha: false
  };
};
function isSvgImage(url) {
  return /\.(svg)$/.test(url);
}
const loadSvg = (url, width, height, sx, sy, sw, sh) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    assertTruthy(ctx);
    ctx.imageSmoothingEnabled = true;
    const img = new Image();
    img.onload = () => {
      const x = sx != null ? sx : 0;
      const y = sy != null ? sy : 0;
      const w = width || img.width;
      const h = height || img.height;
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      resolve({
        data: ctx.getImageData(x, y, sw != null ? sw : w, sh != null ? sh : h),
        premultiplyAlpha: false
      });
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
};
const _ImageTexture = class _ImageTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _ImageTexture.resolveDefaults(props);
  }
  hasAlphaChannel(mimeType) {
    return mimeType.indexOf("image/png") !== -1;
  }
  async loadImage(src) {
    const { premultiplyAlpha, sx, sy, sw, sh, width, height } = this.props;
    if (this.txManager.imageWorkerManager !== null) {
      return await this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh);
    } else if (this.txManager.hasCreateImageBitmap === true) {
      const response = await fetch(src);
      const blob = await response.blob();
      const hasAlphaChannel = premultiplyAlpha != null ? premultiplyAlpha : this.hasAlphaChannel(blob.type);
      if (sw !== null && sh !== null) {
        return {
          data: await createImageBitmap(blob, sx != null ? sx : 0, sy != null ? sy : 0, sw, sh, {
            premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
            colorSpaceConversion: "none",
            imageOrientation: "none"
          }),
          premultiplyAlpha: hasAlphaChannel
        };
      }
      return {
        data: await createImageBitmap(blob, {
          premultiplyAlpha: hasAlphaChannel ? "premultiply" : "none",
          colorSpaceConversion: "none",
          imageOrientation: "none"
        }),
        premultiplyAlpha: hasAlphaChannel
      };
    } else {
      const img = new Image(width || void 0, height || void 0);
      if (!(src.substr(0, 5) === "data:")) {
        img.crossOrigin = "Anonymous";
      }
      img.src = src;
      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Failed to load image"));
      }).catch((e) => {
        console.error(e);
      });
      return {
        data: img,
        premultiplyAlpha: premultiplyAlpha != null ? premultiplyAlpha : true
      };
    }
  }
  async getTextureData() {
    const { src, premultiplyAlpha, type: type2 } = this.props;
    if (src === null) {
      return {
        data: null
      };
    }
    if (typeof src !== "string") {
      if (src instanceof ImageData) {
        return {
          data: src,
          premultiplyAlpha
        };
      }
      return {
        data: src(),
        premultiplyAlpha
      };
    }
    const absoluteSrc = convertUrlToAbsolute(src);
    if (type2 === "regular") {
      return this.loadImage(absoluteSrc);
    }
    if (type2 === "svg") {
      return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
    }
    if (isSvgImage(src) === true) {
      return loadSvg(absoluteSrc, this.props.width, this.props.height, this.props.sx, this.props.sy, this.props.sw, this.props.sh);
    }
    if (type2 === "compressed") {
      return loadCompressedTexture(absoluteSrc);
    }
    if (isCompressedTextureContainer(src) === true) {
      return loadCompressedTexture(absoluteSrc);
    }
    return this.loadImage(absoluteSrc);
  }
  /**
   * Generates a cache key for the ImageTexture based on the provided props.
   * @param props - The props used to generate the cache key.
   * @returns The cache key as a string, or `false` if the key cannot be generated.
   */
  static makeCacheKey(props) {
    var _a2, _b, _c;
    const resolvedProps = _ImageTexture.resolveDefaults(props);
    const key = resolvedProps.key || resolvedProps.src;
    if (typeof key !== "string") {
      return false;
    }
    let dimensionProps = "";
    if (resolvedProps.sh !== null && resolvedProps.sw !== null) {
      dimensionProps += ",";
      dimensionProps += (_a2 = resolvedProps.sx) != null ? _a2 : "";
      dimensionProps += (_b = resolvedProps.sy) != null ? _b : "";
      dimensionProps += resolvedProps.sw || "";
      dimensionProps += resolvedProps.sh || "";
    }
    return "ImageTexture,".concat(key, ",").concat((_c = resolvedProps.premultiplyAlpha) != null ? _c : "true").concat(dimensionProps);
  }
  static resolveDefaults(props) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    return {
      src: (_a2 = props.src) != null ? _a2 : "",
      premultiplyAlpha: (_b = props.premultiplyAlpha) != null ? _b : true,
      key: (_c = props.key) != null ? _c : null,
      type: (_d = props.type) != null ? _d : null,
      width: (_e = props.width) != null ? _e : null,
      height: (_f = props.height) != null ? _f : null,
      sx: (_g = props.sx) != null ? _g : null,
      sy: (_h = props.sy) != null ? _h : null,
      sw: (_i = props.sw) != null ? _i : null,
      sh: (_j = props.sh) != null ? _j : null
    };
  }
};
__publicField(_ImageTexture, "z$__type__Props");
let ImageTexture = _ImageTexture;
const _NoiseTexture = class _NoiseTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _NoiseTexture.resolveDefaults(props);
  }
  async getTextureData() {
    const { width, height } = this.props;
    const size = width * height * 4;
    const pixelData8 = new Uint8ClampedArray(size);
    for (let i = 0; i < size; i += 4) {
      const v = Math.floor(Math.random() * 256);
      pixelData8[i] = v;
      pixelData8[i + 1] = v;
      pixelData8[i + 2] = v;
      pixelData8[i + 3] = 255;
    }
    return {
      data: new ImageData(pixelData8, width, height)
    };
  }
  static makeCacheKey(props) {
    if (props.cacheId === void 0) {
      return false;
    }
    const resolvedProps = _NoiseTexture.resolveDefaults(props);
    return "NoiseTexture,".concat(resolvedProps.width, ",").concat(resolvedProps.height, ",").concat(resolvedProps.cacheId);
  }
  static resolveDefaults(props) {
    var _a2, _b, _c;
    return {
      width: (_a2 = props.width) != null ? _a2 : 128,
      height: (_b = props.height) != null ? _b : 128,
      cacheId: (_c = props.cacheId) != null ? _c : 0
    };
  }
};
__publicField(_NoiseTexture, "z$__type__Props");
let NoiseTexture = _NoiseTexture;
const _SubTexture = class _SubTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    __publicField(this, "parentTexture");
    __publicField(this, "onParentTxLoaded", () => {
      this.setState("loaded", {
        width: this.props.width,
        height: this.props.height
      });
    });
    __publicField(this, "onParentTxFailed", (target, error) => {
      this.setState("failed", error);
    });
    this.props = _SubTexture.resolveDefaults(props || {});
    this.parentTexture = this.props.texture;
    queueMicrotask(() => {
      const parentTx = this.parentTexture;
      if (parentTx.state === "loaded") {
        this.onParentTxLoaded(parentTx, parentTx.dimensions);
      } else if (parentTx.state === "failed") {
        this.onParentTxFailed(parentTx, parentTx.error);
      }
      parentTx.on("loaded", this.onParentTxLoaded);
      parentTx.on("failed", this.onParentTxFailed);
    });
  }
  onChangeIsRenderable(isRenderable) {
    this.parentTexture.setRenderableOwner(this, isRenderable);
  }
  async getTextureData() {
    return {
      data: this.props
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static makeCacheKey(props) {
    return false;
  }
  static resolveDefaults(props) {
    return {
      texture: props.texture,
      x: props.x || 0,
      y: props.y || 0,
      width: props.width || 0,
      height: props.height || 0
    };
  }
};
__publicField(_SubTexture, "z$__type__Props");
let SubTexture = _SubTexture;
const _RenderTexture = class _RenderTexture extends Texture {
  constructor(txManager, props) {
    super(txManager);
    __publicField(this, "props");
    this.props = _RenderTexture.resolveDefaults(props || {});
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    this.props.width = value;
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    this.props.height = value;
  }
  async getTextureData() {
    return {
      data: null,
      premultiplyAlpha: null
    };
  }
  static resolveDefaults(props) {
    return {
      width: props.width || 256,
      height: props.height || 256
    };
  }
};
__publicField(_RenderTexture, "z$__type__Props");
let RenderTexture = _RenderTexture;
class CoreTextureManager {
  constructor(numImageWorkers) {
    /**
     * Map of textures by cache key
     */
    __publicField(this, "keyCache", /* @__PURE__ */ new Map());
    /**
     * Map of cache keys by texture
     */
    __publicField(this, "inverseKeyCache", /* @__PURE__ */ new WeakMap());
    /**
     * Map of texture constructors by their type name
     */
    __publicField(this, "txConstructors", {});
    __publicField(this, "imageWorkerManager", null);
    __publicField(this, "hasCreateImageBitmap", !!self.createImageBitmap);
    __publicField(this, "hasWorker", !!self.Worker);
    /**
     * Renderer that this texture manager is associated with
     *
     * @remarks
     * This MUST be set before the texture manager is used. Otherwise errors
     * will occur when using the texture manager.
     */
    __publicField(this, "renderer");
    /**
     * The current frame time in milliseconds
     *
     * @remarks
     * This is used to populate the `lastRenderableChangeTime` property of
     * {@link Texture} instances when their renderable state changes.
     *
     * Set by stage via `updateFrameTime` method.
     */
    __publicField(this, "frameTime", 0);
    if (this.hasCreateImageBitmap && this.hasWorker && numImageWorkers > 0) {
      this.imageWorkerManager = new ImageWorkerManager(numImageWorkers);
    }
    if (!this.hasCreateImageBitmap) {
      console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
    }
    this.registerTextureType("ImageTexture", ImageTexture);
    this.registerTextureType("ColorTexture", ColorTexture);
    this.registerTextureType("NoiseTexture", NoiseTexture);
    this.registerTextureType("SubTexture", SubTexture);
    this.registerTextureType("RenderTexture", RenderTexture);
  }
  registerTextureType(textureType, textureClass) {
    this.txConstructors[textureType] = textureClass;
  }
  loadTexture(textureType, props) {
    let texture;
    const TextureClass = this.txConstructors[textureType];
    if (!TextureClass) {
      throw new Error('Texture type "'.concat(textureType, '" is not registered'));
    }
    if (!texture) {
      const cacheKey = TextureClass.makeCacheKey(props);
      if (cacheKey && this.keyCache.has(cacheKey)) {
        texture = this.keyCache.get(cacheKey);
      } else {
        texture = new TextureClass(this, props);
        if (cacheKey) {
          this.initTextureToCache(texture, cacheKey);
        }
      }
    }
    return texture;
  }
  initTextureToCache(texture, cacheKey) {
    const { keyCache, inverseKeyCache } = this;
    keyCache.set(cacheKey, texture);
    inverseKeyCache.set(texture, cacheKey);
  }
  /**
   * Remove a texture from the cache
   *
   * @remarks
   * Called by Texture Cleanup when a texture is freed.
   *
   * @param texture
   */
  removeTextureFromCache(texture) {
    const { inverseKeyCache, keyCache } = this;
    const cacheKey = inverseKeyCache.get(texture);
    if (cacheKey) {
      keyCache.delete(cacheKey);
    }
  }
}
const fontCache = /* @__PURE__ */ new Map();
const weightConversions = {
  normal: 400,
  bold: 700,
  bolder: 900,
  lighter: 100
};
const fontWeightToNumber = (weight) => {
  if (typeof weight === "number") {
    return weight;
  }
  return weightConversions[weight] || 400;
};
function resolveFontToUse(familyMapsByPriority, family, weightIn, style, stretch) {
  let weight = fontWeightToNumber(weightIn);
  for (const fontFamiles of familyMapsByPriority) {
    const fontFaces = fontFamiles[family];
    if (!fontFaces) {
      continue;
    }
    if (fontFaces.size === 1) {
      console.warn("TrFontManager: Only one font face found for family: '".concat(family, "' - will be used for all weights and styles"));
      return fontFaces.values().next().value;
    }
    const weightMap = /* @__PURE__ */ new Map();
    for (const fontFace of fontFaces) {
      const fontFamilyWeight = fontWeightToNumber(fontFace.descriptors.weight);
      if (fontFamilyWeight === weight && fontFace.descriptors.style === style && fontFace.descriptors.stretch === stretch) {
        return fontFace;
      }
      weightMap.set(fontFamilyWeight, fontFace);
    }
    const msg = "TrFontManager: No exact match: '".concat(family, " Weight: ").concat(weight, " Style: ").concat(style, " Stretch: ").concat(stretch, "'");
    console.error(msg);
    if (weight === 400 && weightMap.has(500)) {
      return weightMap.get(500);
    }
    if (weight === 500 && weightMap.has(400)) {
      return weightMap.get(400);
    }
    if (weight < 400) {
      while (weight > 0) {
        if (weightMap.has(weight)) {
          return weightMap.get(weight);
        }
        weight -= 100;
      }
      weight = 600;
    }
    while (weight < 1e3) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight += 100;
    }
    weight = 500;
    while (weight > 0) {
      if (weightMap.has(weight)) {
        return weightMap.get(weight);
      }
      weight -= 100;
    }
  }
  return;
}
class TrFontManager {
  constructor(textRenderers) {
    __publicField(this, "textRenderers");
    this.textRenderers = textRenderers;
  }
  addFontFace(font) {
    for (const trId in this.textRenderers) {
      const tr = this.textRenderers[trId];
      if (tr && tr.isFontFaceSupported(font)) {
        tr.addFontFace(font);
      }
    }
  }
  /**
   * Utility method to resolve a single font face from a list of prioritized family maps based on
   * a set of font properties.
   *
   * @remarks
   * These are to be used by a text renderer to resolve a font face if needed.
   *
   * @param familyMapsByPriority
   * @param props
   * @returns
   */
  static resolveFontFace(familyMapsByPriority, props) {
    const { fontFamily, fontWeight, fontStyle, fontStretch } = props;
    const fontCacheString = "".concat(fontFamily).concat(fontStyle).concat(fontWeight).concat(fontStretch);
    if (fontCache.has(fontCacheString) === true) {
      return fontCache.get(fontCacheString);
    }
    const resolvedFont = resolveFontToUse(familyMapsByPriority, fontFamily, fontWeight, fontStyle, fontStretch);
    if (resolvedFont !== void 0) {
      fontCache.set(fontCacheString, resolvedFont);
    }
    return resolvedFont;
  }
}
class CoreShader {
  // abstract draw(): void;
  static makeCacheKey(props) {
    return false;
  }
  static resolveDefaults(props) {
    return {};
  }
}
function createShader(glw, type2, source) {
  const shader = glw.createShader(type2);
  if (!shader) {
    throw new Error();
  }
  glw.shaderSource(shader, source);
  glw.compileShader(shader);
  const success = glw.getShaderParameter(shader, glw.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.log(glw.getShaderInfoLog(shader));
  glw.deleteShader(shader);
}
function createProgram(glw, vertexShader, fragmentShader) {
  const program = glw.createProgram();
  if (!program) {
    throw new Error();
  }
  glw.attachShader(program, vertexShader);
  glw.attachShader(program, fragmentShader);
  glw.linkProgram(program);
  const success = glw.getProgramParameter(program, glw.LINK_STATUS);
  if (success) {
    return program;
  }
  console.log(glw.getProgramInfoLog(program));
  glw.deleteProgram(program);
  return void 0;
}
class WebGlCoreShader extends CoreShader {
  constructor(options) {
    super();
    __publicField(this, "boundBufferCollection", null);
    __publicField(this, "buffersBound", false);
    __publicField(this, "program");
    /**
     * Vertex Array Object
     *
     * @remarks
     * Used by WebGL2 Only
     */
    __publicField(this, "vao");
    __publicField(this, "renderer");
    __publicField(this, "glw");
    __publicField(this, "attributeBuffers");
    __publicField(this, "attributeLocations");
    __publicField(this, "attributeNames");
    __publicField(this, "uniformLocations");
    __publicField(this, "uniformTypes");
    __publicField(this, "supportsIndexedTextures");
    const renderer = this.renderer = options.renderer;
    const glw = this.glw = this.renderer.glw;
    this.supportsIndexedTextures = options.supportsIndexedTextures || false;
    const webGl2 = glw.isWebGl2();
    const requiredExtensions = webGl2 && options.webgl2Extensions || !webGl2 && options.webgl1Extensions || [];
    const glVersion = webGl2 ? "2.0" : "1.0";
    requiredExtensions.forEach((extensionName) => {
      if (!glw.getExtension(extensionName)) {
        throw new Error('Shader "'.concat(this.constructor.name, '" requires extension "').concat(extensionName, '" for WebGL ').concat(glVersion, " but wasn't found"));
      }
    });
    const shaderSources = options.shaderSources || this.constructor.shaderSources;
    if (!shaderSources) {
      throw new Error('Shader "'.concat(this.constructor.name, '" is missing shaderSources.'));
    } else if (webGl2 && (shaderSources == null ? void 0 : shaderSources.webGl2)) {
      shaderSources.fragment = shaderSources.webGl2.fragment;
      shaderSources.vertex = shaderSources.webGl2.vertex;
      delete shaderSources.webGl2;
    }
    const textureUnits = renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    const vertexSource = shaderSources.vertex instanceof Function ? shaderSources.vertex(textureUnits) : shaderSources.vertex;
    const fragmentSource = shaderSources.fragment instanceof Function ? shaderSources.fragment(textureUnits) : shaderSources.fragment;
    const vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) {
      throw new Error();
    }
    const program = createProgram(glw, vertexShader, fragmentShader);
    if (!program) {
      throw new Error();
    }
    this.program = program;
    if (webGl2) {
      const vao = glw.createVertexArray();
      if (!vao) {
        throw new Error();
      }
      this.vao = vao;
      glw.bindVertexArray(this.vao);
    }
    this.attributeLocations = {};
    this.attributeBuffers = {};
    this.attributeNames = [];
    [...options.attributes].forEach((attributeName) => {
      const location = glw.getAttribLocation(this.program, attributeName);
      if (location < 0) {
        throw new Error("".concat(this.constructor.name, ': Vertex shader must have an attribute "').concat(attributeName, '"!'));
      }
      const buffer = glw.createBuffer();
      if (!buffer) {
        throw new Error("".concat(this.constructor.name, ': Could not create buffer for attribute "').concat(attributeName, '"'));
      }
      this.attributeLocations[attributeName] = location;
      this.attributeBuffers[attributeName] = buffer;
      this.attributeNames.push(attributeName);
    });
    this.uniformLocations = {};
    this.uniformTypes = {};
    options.uniforms.forEach((uniform) => {
      const location = glw.getUniformLocation(this.program, uniform.name);
      this.uniformTypes[uniform.name] = uniform.uniform;
      if (!location) {
        console.warn('Shader "'.concat(this.constructor.name, '" could not get uniform location for "').concat(uniform.name, '"'));
        return;
      }
      this.uniformLocations[uniform.name] = location;
    });
  }
  bindBufferAttribute(location, buffer, attribute) {
    const { glw } = this;
    glw.enableVertexAttribArray(location);
    glw.vertexAttribPointer(buffer, location, attribute.size, attribute.type, attribute.normalized, attribute.stride, attribute.offset);
  }
  disableAttribute(location) {
    this.glw.disableVertexAttribArray(location);
  }
  disableAttributes() {
    for (const loc in this.attributeLocations) {
      this.disableAttribute(this.attributeLocations[loc]);
    }
    this.boundBufferCollection = null;
  }
  /**
   * Given two sets of Shader props destined for this Shader, determine if they can be batched together
   * to reduce the number of draw calls.
   *
   * @remarks
   * This is used by the {@link WebGlCoreRenderer} to determine if it can batch multiple consecutive draw
   * calls into a single draw call.
   *
   * By default, this returns false (meaning no batching is allowed), but can be
   * overridden by child classes to provide more efficient batching.
   *
   * @param propsA
   * @param propsB
   * @returns
   */
  canBatchShaderProps(propsA, propsB) {
    return false;
  }
  bindRenderOp(renderOp, props) {
    this.bindBufferCollection(renderOp.buffers);
    if (renderOp.textures.length > 0) {
      this.bindTextures(renderOp.textures);
    }
    const { glw, parentHasRenderTexture, renderToTexture } = renderOp;
    if (renderToTexture && parentHasRenderTexture) {
      return;
    }
    if (parentHasRenderTexture) {
      const { width, height } = renderOp.framebufferDimensions || {};
      this.setUniform("u_pixelRatio", 1);
      this.setUniform("u_resolution", new Float32Array([width != null ? width : 0, height != null ? height : 0]));
    } else {
      this.setUniform("u_pixelRatio", renderOp.options.pixelRatio);
      this.setUniform("u_resolution", new Float32Array([glw.canvas.width, glw.canvas.height]));
    }
    if (props) {
      if (hasOwn(props, "$dimensions")) {
        let dimensions = props.$dimensions;
        if (!dimensions) {
          dimensions = renderOp.dimensions;
        }
        this.setUniform("u_dimensions", [dimensions.width, dimensions.height]);
      }
      if (hasOwn(props, "$alpha")) {
        let alpha = props.$alpha;
        if (!alpha) {
          alpha = renderOp.alpha;
        }
        this.setUniform("u_alpha", alpha);
      }
      this.bindProps(props);
    }
  }
  setUniform(name, ...value) {
    this.glw.setUniform(this.uniformTypes[name], this.uniformLocations[name], ...value);
  }
  bindBufferCollection(buffer) {
    if (this.boundBufferCollection === buffer) {
      return;
    }
    for (const attributeName in this.attributeLocations) {
      const resolvedBuffer = buffer.getBuffer(attributeName);
      const resolvedInfo = buffer.getAttributeInfo(attributeName);
      assertTruthy(resolvedBuffer, 'Buffer for "'.concat(attributeName, '" not found'));
      assertTruthy(resolvedInfo);
      this.bindBufferAttribute(this.attributeLocations[attributeName], resolvedBuffer, resolvedInfo);
    }
    this.boundBufferCollection = buffer;
  }
  bindProps(props) {
  }
  bindTextures(textures) {
  }
  attach() {
    this.glw.useProgram(this.program);
    this.glw.useProgram(this.program);
    if (this.glw.isWebGl2() && this.vao) {
      this.glw.bindVertexArray(this.vao);
    }
  }
  detach() {
    this.disableAttributes();
  }
}
__publicField(WebGlCoreShader, "shaderSources");
class DefaultShader extends WebGlCoreShader {
  constructor(renderer) {
    super({
      renderer,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
}
__publicField(DefaultShader, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio;\n        vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n        gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n          vec4 color = texture2D(u_texture, v_textureCoordinate);\n          gl_FragColor = vec4(v_color) * texture2D(u_texture, v_textureCoordinate);\n      }\n    "
});
class DefaultShaderBatched extends WebGlCoreShader {
  constructor(renderer) {
    super({
      renderer,
      attributes: [
        "a_position",
        "a_textureCoordinate",
        "a_color",
        "a_textureIndex"
      ],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_textures[0]", uniform: "uniform1iv" }
      ]
    });
    __publicField(this, "supportsIndexedTextures", true);
  }
  bindTextures(texture) {
    const { renderer, glw } = this;
    if (texture.length > renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS) {
      throw new Error("DefaultShaderBatched: Cannot bind more than ".concat(renderer.system.parameters.MAX_VERTEX_TEXTURE_IMAGE_UNITS, " textures"));
    }
    texture.forEach((t, i) => {
      glw.activeTexture(i);
      glw.bindTexture(t.ctxTexture);
    });
    const samplers = Array.from(Array(texture.length).keys());
    this.setUniform("u_textures[0]", samplers);
  }
}
__publicField(DefaultShaderBatched, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_textureCoordinate;\n      attribute vec2 a_position;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      void main(){\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n        v_textureIndex = a_textureIndex;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: (textureUnits) => "\n      #define txUnits ".concat(textureUnits, "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform sampler2D u_image;\n      uniform sampler2D u_textures[txUnits];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n      varying float v_textureIndex;\n\n      vec4 sampleFromTexture(sampler2D textures[").concat(textureUnits, "], int idx, vec2 uv) {\n        ").concat(Array.from(Array(textureUnits).keys()).map((idx) => "\n          ".concat(idx !== 0 ? "else " : "", "if (idx == ").concat(idx, ") {\n            return texture2D(textures[").concat(idx, "], uv);\n          }\n        ")).join(""), "\n        return texture2D(textures[0], uv);\n      }\n\n      void main(){\n        gl_FragColor = vec4(v_color) * sampleFromTexture(u_textures, int(v_textureIndex), v_textureCoordinate);\n      }\n    ")
});
class ShaderEffect {
  constructor(options) {
    __publicField(this, "priority", 1);
    __publicField(this, "name", "");
    __publicField(this, "ref");
    __publicField(this, "target");
    __publicField(this, "passParameters", "");
    __publicField(this, "declaredUniforms", "");
    __publicField(this, "uniformInfo", {});
    const { ref, target, props = {} } = options;
    this.ref = ref;
    this.target = target;
    const uniformInfo = {};
    const passParameters = [];
    let declaredUniforms = "";
    const uniforms = this.constructor.uniforms || {};
    for (const u in uniforms) {
      const unif = uniforms[u];
      const uniType = unif.type;
      const uniformName = "".concat(ref, "_").concat(u);
      let define = "";
      if (unif.size) {
        define = "[".concat(unif.size(props), "]");
      }
      passParameters.push(uniformName);
      declaredUniforms += "uniform ".concat(uniType, " ").concat(uniformName).concat(define, ";");
      uniformInfo[u] = { name: uniformName, uniform: uniforms[u].method };
    }
    this.passParameters = passParameters.join(",");
    this.declaredUniforms = declaredUniforms;
    this.uniformInfo = uniformInfo;
  }
  static getEffectKey(props) {
    return "";
  }
  static getMethodParameters(uniforms, props) {
    const res = [];
    for (const u in uniforms) {
      const uni = uniforms[u];
      let define = "";
      if (uni.size) {
        define = "[".concat(uni.size(props), "]");
      }
      res.push("".concat(uni.type, " ").concat(u).concat(define));
    }
    return res.join(",");
  }
  static resolveDefaults(props) {
    return {};
  }
  static makeEffectKey(props) {
    return false;
  }
}
__publicField(ShaderEffect, "uniforms", {});
__publicField(ShaderEffect, "methods");
__publicField(ShaderEffect, "onShaderMask");
__publicField(ShaderEffect, "onColorize");
__publicField(ShaderEffect, "onEffectMask");
const effectCache = /* @__PURE__ */ new Map();
const getResolvedEffect = (effects, effectContructors) => {
  const key = JSON.stringify(effects);
  if (effectCache.has(key)) {
    return effectCache.get(key);
  }
  effects = effects != null ? effects : [];
  const resolvedEffects = [];
  const effectsLength = effects.length;
  let i = 0;
  for (; i < effectsLength; i++) {
    const { name, type: type2, props } = effects[i];
    const resolvedEffect = {
      name,
      type: type2,
      props: {}
    };
    const effectConstructor = effectContructors[type2];
    const defaultPropValues = effectConstructor.resolveDefaults(props);
    const uniforms = effectConstructor.uniforms;
    const uniformKeys = Object.keys(uniforms);
    const uniformsLength = uniformKeys.length;
    let j = 0;
    for (; j < uniformsLength; j++) {
      const key2 = uniformKeys[j];
      const uniform = uniforms[key2];
      const result = {
        value: defaultPropValues[key2],
        programValue: void 0,
        updateOnBind: uniform.updateOnBind || false,
        hasValidator: uniform.validator !== void 0,
        hasProgramValueUpdater: uniform.updateProgramValue !== void 0
      };
      const validatedValue = result.hasValidator && uniform.validator(defaultPropValues[key2], defaultPropValues) || defaultPropValues[key2];
      if (defaultPropValues[key2] !== validatedValue) {
        result.validatedValue = validatedValue;
      }
      if (result.hasProgramValueUpdater) {
        uniform.updateProgramValue(result);
      }
      if (result.programValue === void 0) {
        result.programValue = result.value;
      }
      resolvedEffect.props[key2] = result;
    }
    resolvedEffects.push(resolvedEffect);
  }
  effectCache.set(key, resolvedEffects);
  return resolvedEffects;
};
const _DynamicShader = class _DynamicShader extends WebGlCoreShader {
  constructor(renderer, props, effectContructors) {
    const shader = _DynamicShader.createShader(props, effectContructors);
    super({
      renderer,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2fv" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_alpha", uniform: "uniform1f" },
        ...shader.uniforms
      ],
      shaderSources: {
        vertex: shader.vertex,
        fragment: shader.fragment
      }
    });
    __publicField(this, "effects", []);
    this.effects = shader.effects;
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    var _a2;
    const effects = props.effects;
    const effectsL = effects.length;
    let i = 0;
    for (; i < effectsL; i++) {
      const effect = effects[i];
      const uniformInfo = this.effects[i].uniformInfo;
      const propKeys = Object.keys(effect.props);
      const propsLength = propKeys.length;
      let j = 0;
      for (; j < propsLength; j++) {
        const key = propKeys[j];
        const prop = effect.props[key];
        if (prop.updateOnBind === true) {
          const uniform = (_a2 = this.renderer.shManager.getRegisteredEffects()[effect.type]) == null ? void 0 : _a2.uniforms[key];
          uniform == null ? void 0 : uniform.updateProgramValue(effect.props[key], props);
        }
        this.setUniform(uniformInfo[key].name, effect.props[key].programValue);
      }
    }
  }
  canBatchShaderProps(propsA, propsB) {
    if (propsA.$dimensions.width !== propsB.$dimensions.width || propsA.$dimensions.height !== propsB.$dimensions.height || propsA.effects.length !== propsB.effects.length) {
      return false;
    }
    const propsEffectsLen = propsA.effects.length;
    let i = 0;
    for (; i < propsEffectsLen; i++) {
      const effectA = propsA.effects[i];
      const effectB = propsB.effects[i];
      if (effectA.type !== effectB.type) {
        return false;
      }
      for (const key in effectA.props) {
        if (effectB.props && !effectB.props[key] || effectA.props[key].value !== effectB.props[key].value) {
          return false;
        }
      }
    }
    return true;
  }
  static createShader(props, effectContructors) {
    const effectNameCount = {};
    const methods = {};
    let declareUniforms = "";
    const uniforms = [];
    const uFx = [];
    const effects = props.effects.map((effect) => {
      const baseClass = effectContructors[effect.type];
      const key = baseClass.getEffectKey(effect.props || {});
      effectNameCount[key] = effectNameCount[key] ? ++effectNameCount[key] : 1;
      const nr = effectNameCount[key];
      if (nr === 1) {
        uFx.push({ key, type: effect.type, props: effect.props });
      }
      const fxClass = new baseClass({
        ref: "".concat(key).concat(nr === 1 ? "" : nr),
        target: key,
        props: effect.props
      });
      declareUniforms += fxClass.declaredUniforms;
      uniforms.push(...Object.values(fxClass.uniformInfo));
      return fxClass;
    });
    let effectMethods = "";
    uFx == null ? void 0 : uFx.forEach((fx) => {
      var _a2;
      const fxClass = effectContructors[fx.type];
      const fxProps = fxClass.resolveDefaults((_a2 = fx.props) != null ? _a2 : {});
      const remap = [];
      for (const m in fxClass.methods) {
        let cm = m;
        const fxMethod = fxClass.methods[m];
        if (methods[m] && methods[m] !== fxMethod) {
          cm = _DynamicShader.resolveMethodDuplicate(m, fxMethod, methods);
        }
        methods[cm] = fxMethod.replace("function", cm);
        remap.push({ m, cm });
      }
      let onShaderMask = fxClass.onShaderMask instanceof Function ? fxClass.onShaderMask(fxProps) : fxClass.onShaderMask;
      let onColorize = fxClass.onColorize instanceof Function ? fxClass.onColorize(fxProps) : fxClass.onColorize;
      let onEffectMask = fxClass.onEffectMask instanceof Function ? fxClass.onEffectMask(fxProps) : fxClass.onEffectMask;
      remap.forEach((r) => {
        const { m, cm } = r;
        const reg = new RegExp("\\$".concat(m), "g");
        if (onShaderMask) {
          onShaderMask = onShaderMask.replace(reg, cm);
        }
        if (onColorize) {
          onColorize = onColorize.replace(reg, cm);
        }
        if (onEffectMask) {
          onEffectMask = onEffectMask.replace(reg, cm);
        }
      });
      const methodParameters = fxClass.getMethodParameters(fxClass.uniforms, fxProps);
      const pm = methodParameters.length > 0 ? ", ".concat(methodParameters) : "";
      if (onShaderMask) {
        effectMethods += "\n        float fx_".concat(fx.key, "_onShaderMask(float shaderMask ").concat(pm, ") {\n          ").concat(onShaderMask, "\n        }\n        ");
      }
      if (onColorize) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onColorize(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onColorize, "\n          }\n        ");
      }
      if (onEffectMask) {
        effectMethods += "\n          vec4 fx_".concat(fx.key, "_onEffectMask(float shaderMask, vec4 maskColor, vec4 shaderColor").concat(pm, ") {\n            ").concat(onEffectMask, "\n          }\n        ");
      }
    });
    let sharedMethods = "";
    for (const m in methods) {
      sharedMethods += methods[m];
    }
    let currentMask = "mix(shaderColor, maskColor, clamp(-(lng_DefaultMask), 0.0, 1.0))";
    let drawEffects = "\n\n    ";
    for (let i = 0; i < effects.length; i++) {
      const current = effects[i];
      const pm = current.passParameters.length > 0 ? ", ".concat(current.passParameters) : "";
      const currentClass = effectContructors[current.name];
      if (currentClass.onShaderMask) {
        drawEffects += "\n        shaderMask = fx_".concat(current.target, "_onShaderMask(shaderMask ").concat(pm, ");\n        ");
      }
      if (currentClass.onColorize) {
        drawEffects += "\n        maskColor = fx_".concat(current.target, "_onColorize(shaderMask, maskColor, shaderColor").concat(pm, ");\n        ");
      }
      if (currentClass.onEffectMask) {
        currentMask = "fx_".concat(current.target, "_onEffectMask(shaderMask, maskColor, shaderColor").concat(pm, ")");
      }
      const next = effects[i + 1];
      if (next === void 0 || effectContructors[next.name].onEffectMask) {
        drawEffects += "\n          shaderColor = ".concat(currentMask, ";\n        ");
      }
    }
    return {
      effects,
      uniforms,
      fragment: _DynamicShader.fragment(declareUniforms, sharedMethods, effectMethods, drawEffects),
      vertex: _DynamicShader.vertex()
    };
  }
  static resolveMethodDuplicate(key, effectMethod, methodCollection, increment = 0) {
    const m = key + (increment > 0 ? increment : "");
    if (methodCollection[m] && methodCollection[m] !== effectMethod) {
      return this.resolveMethodDuplicate(key, effectMethod, methodCollection, ++increment);
    }
    return m;
  }
  static resolveDefaults(props, effectContructors) {
    var _a2;
    assertTruthy(effectContructors);
    return {
      effects: getResolvedEffect((_a2 = props.effects) != null ? _a2 : [], effectContructors),
      $dimensions: {
        width: 0,
        height: 0
      },
      $alpha: 0
    };
  }
  static makeCacheKey(props, effectContructors) {
    var _a2;
    let fx = "";
    (_a2 = props.effects) == null ? void 0 : _a2.forEach((effect) => {
      const baseClass = effectContructors[effect.type];
      const key = baseClass.getEffectKey(effect.props || {});
      fx += ",".concat(key);
    });
    return "DynamicShader".concat(fx);
  }
};
__publicField(_DynamicShader, "z$__type__Props");
__publicField(_DynamicShader, "vertex", () => "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_textureCoordinate;\n    attribute vec2 a_position;\n    attribute vec4 a_color;\n    attribute float a_textureIndex;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n    varying float v_textureIndex;\n\n    void main(){\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      // pass to fragment\n      v_color = a_color;\n      v_textureCoordinate = a_textureCoordinate;\n      v_textureIndex = a_textureIndex;\n\n      // flip y\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ");
__publicField(_DynamicShader, "fragment", (uniforms, methods, effectMethods, drawEffects) => "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_radius;\n    uniform sampler2D u_texture;\n    uniform float u_pixelRatio;\n\n    ".concat(uniforms, "\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoordinate;\n\n    ").concat(methods, "\n\n    ").concat(effectMethods, "\n\n    void main() {\n      vec2 p = v_textureCoordinate.xy * u_dimensions - u_dimensions * 0.5;\n      vec2 d = abs(p) - (u_dimensions) * 0.5;\n      float lng_DefaultMask = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n\n      vec4 shaderColor = vec4(0.0);\n      float shaderMask = lng_DefaultMask;\n\n      vec4 maskColor = texture2D(u_texture, v_textureCoordinate) * v_color;\n\n      shaderColor = mix(shaderColor, maskColor, clamp(-(lng_DefaultMask + 0.5), 0.0, 1.0));\n\n      ").concat(drawEffects, "\n\n      gl_FragColor = shaderColor * u_alpha;\n    }\n  "));
let DynamicShader = _DynamicShader;
class RoundedRectangle extends WebGlCoreShader {
  constructor(renderer) {
    super({
      renderer,
      attributes: ["a_position", "a_textureCoordinate", "a_color"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_dimensions", uniform: "uniform2fv" },
        { name: "u_radius", uniform: "uniform1f" }
      ]
    });
  }
  static resolveDefaults(props) {
    return {
      radius: props.radius || 10,
      $dimensions: {
        width: 0,
        height: 0
      }
    };
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    const radiusFactor = Math.min(props.$dimensions.width, props.$dimensions.height) / (2 * props.radius);
    this.setUniform("u_radius", props.radius * Math.min(radiusFactor, 1));
  }
  canBatchShaderProps(propsA, propsB) {
    return propsA.radius === propsB.radius && propsA.$dimensions.width === propsB.$dimensions.width && propsA.$dimensions.height === propsB.$dimensions.height;
  }
}
__publicField(RoundedRectangle, "z$__type__Props");
__publicField(RoundedRectangle, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n      attribute vec4 a_color;\n      attribute float a_textureIndex;\n      attribute float a_depth;\n\n      uniform vec2 u_resolution;\n      uniform float u_pixelRatio;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      void main() {\n        vec2 normalized = a_position * u_pixelRatio / u_resolution;\n        vec2 zero_two = normalized * 2.0;\n        vec2 clip_space = zero_two - 1.0;\n\n        // pass to fragment\n        v_color = a_color;\n        v_textureCoordinate = a_textureCoordinate;\n\n        // flip y\n        gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      uniform vec2 u_resolution;\n      uniform vec2 u_dimensions;\n      uniform float u_radius;\n      uniform sampler2D u_texture;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoordinate;\n\n      float boxDist(vec2 p, vec2 size, float radius){\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n\n      float fillMask(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoordinate) * v_color;\n        vec2 halfDimensions = u_dimensions * 0.5;\n\n        float d = boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions + 0.5, u_radius);\n        gl_FragColor = mix(vec4(0.0), color, fillMask(d));\n      }\n    "
});
const IDENTITY_MATRIX_3x3 = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
const _SdfShader = class _SdfShader extends WebGlCoreShader {
  constructor(renderer) {
    super({
      renderer,
      attributes: ["a_position", "a_textureCoordinate"],
      uniforms: [
        { name: "u_resolution", uniform: "uniform2fv" },
        { name: "u_transform", uniform: "uniformMatrix3fv" },
        { name: "u_scrollY", uniform: "uniform1f" },
        { name: "u_pixelRatio", uniform: "uniform1f" },
        { name: "u_texture", uniform: "uniform2f" },
        { name: "u_color", uniform: "uniform4fv" },
        { name: "u_size", uniform: "uniform1f" },
        { name: "u_distanceRange", uniform: "uniform1f" },
        { name: "u_debug", uniform: "uniform1i" }
      ]
    });
  }
  bindTextures(textures) {
    const { glw } = this;
    glw.activeTexture(0);
    glw.bindTexture(textures[0].ctxTexture);
  }
  bindProps(props) {
    const resolvedProps = _SdfShader.resolveDefaults(props);
    for (const key in resolvedProps) {
      if (key === "transform") {
        this.setUniform("u_transform", false, resolvedProps[key]);
      } else if (key === "scrollY") {
        this.setUniform("u_scrollY", resolvedProps[key]);
      } else if (key === "color") {
        const components = getNormalizedRgbaComponents(resolvedProps.color);
        this.setUniform("u_color", components);
      } else if (key === "size") {
        this.setUniform("u_size", resolvedProps[key]);
      } else if (key === "distanceRange") {
        this.setUniform("u_distanceRange", resolvedProps[key]);
      } else if (key === "debug") {
        this.setUniform("u_debug", resolvedProps[key] ? 1 : 0);
      }
    }
  }
  static resolveDefaults(props = {}) {
    var _a2, _b, _c, _d, _e, _f;
    return {
      transform: (_a2 = props.transform) != null ? _a2 : IDENTITY_MATRIX_3x3,
      scrollY: (_b = props.scrollY) != null ? _b : 0,
      color: (_c = props.color) != null ? _c : 4294967295,
      size: (_d = props.size) != null ? _d : 16,
      distanceRange: (_e = props.distanceRange) != null ? _e : 1,
      debug: (_f = props.debug) != null ? _f : false
    };
  }
};
__publicField(_SdfShader, "shaderSources", {
  vertex: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      attribute vec2 a_position;\n      attribute vec2 a_textureCoordinate;\n\n      uniform vec2 u_resolution;\n      uniform mat3 u_transform;\n      uniform float u_scrollY;\n      uniform float u_pixelRatio;\n      uniform float u_size;\n\n      varying vec2 v_texcoord;\n\n      void main() {\n        vec2 scrolledPosition = a_position * u_size - vec2(0, u_scrollY);\n        vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n        // Calculate screen space with pixel ratio\n        vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n        gl_Position = vec4(screenSpace, 0.0, 1.0);\n        v_texcoord = a_textureCoordinate;\n\n      }\n    ",
  fragment: "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n      uniform vec4 u_color;\n      uniform sampler2D u_texture;\n      uniform float u_distanceRange;\n      uniform float u_pixelRatio;\n      uniform int u_debug;\n\n      varying vec2 v_texcoord;\n\n      float median(float r, float g, float b) {\n          return max(min(r, g), min(max(r, g), b));\n      }\n\n      void main() {\n          vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n          if (u_debug == 1) {\n            gl_FragColor = vec4(sample.r, sample.g, sample.b, 1.0);\n            return;\n          }\n          float scaledDistRange = u_distanceRange * u_pixelRatio;\n          float sigDist = scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n          float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n          // Build the final color.\n          // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n          gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n      }\n    "
});
let SdfShader = _SdfShader;
const updateShaderEffectColor = (values) => {
  if (values.programValue === void 0) {
    values.programValue = new Float32Array(4);
  }
  const rgba = values.value;
  const floatArray = values.programValue;
  floatArray[0] = (rgba >>> 24) / 255;
  floatArray[1] = (rgba >>> 16 & 255) / 255;
  floatArray[2] = (rgba >>> 8 & 255) / 255;
  floatArray[3] = (rgba & 255) / 255;
};
const updateFloat32ArrayLength2 = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const floatArray = values.programValue;
    floatArray[0] = validatedValue[0];
    floatArray[1] = validatedValue[1];
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const updateFloat32ArrayLength4 = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const floatArray = values.programValue;
    floatArray[0] = validatedValue[0];
    floatArray[1] = validatedValue[1];
    floatArray[2] = validatedValue[1];
    floatArray[3] = validatedValue[1];
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const updateFloat32ArrayLengthN = (values) => {
  const validatedValue = values.validatedValue || values.value;
  if (values.programValue instanceof Float32Array) {
    const len = validatedValue.length;
    const programValue = values.programValue;
    for (let i = 0; i < len; i++) {
      programValue[i] = validatedValue[i];
    }
  } else {
    values.programValue = new Float32Array(validatedValue);
  }
};
const validateArrayLength4 = (value) => {
  const isArray2 = Array.isArray(value);
  if (!isArray2) {
    return [value, value, value, value];
  } else if (isArray2 && value.length === 4) {
    return value;
  } else if (isArray2 && value.length === 2) {
    return [value[0], value[1], value[0], value[1]];
  } else if (isArray2 && value.length === 3) {
    return [value[0], value[1], value[2], value[0]];
  }
  return [value[0], value[0], value[0], value[0]];
};
const updateWebSafeRadius = (values, shaderProps) => {
  if (values.programValue === void 0) {
    values.programValue = new Float32Array(4);
  }
  const programValue = values.programValue;
  const validatedValue = values.validatedValue || values.value;
  if (shaderProps === void 0 && values.$dimensions === void 0) {
    programValue[0] = validatedValue[0];
    programValue[1] = validatedValue[1];
    programValue[2] = validatedValue[2];
    programValue[3] = validatedValue[3];
    return;
  }
  let storedDimensions = values.$dimensions;
  if (shaderProps !== void 0) {
    const { $dimensions } = shaderProps;
    if (storedDimensions !== void 0 && (storedDimensions.width === $dimensions.width || storedDimensions.height === $dimensions.height)) {
      return;
    }
    if (storedDimensions === void 0) {
      storedDimensions = {
        width: $dimensions == null ? void 0 : $dimensions.width,
        height: $dimensions == null ? void 0 : $dimensions.height
      };
      values.$dimensions = storedDimensions;
    }
  }
  const { width, height } = storedDimensions;
  const [r0, r1, r2, r3] = validatedValue;
  const factor = Math.min(Math.min(Math.min(width / Math.max(width, r0 + r1), width / Math.max(width, r2 + r3)), Math.min(height / Math.max(height, r0 + r2), height / Math.max(height, r1 + r3))), 1);
  programValue[0] = r0 * factor;
  programValue[1] = r1 * factor;
  programValue[2] = r2 * factor;
  programValue[3] = r3 * factor;
};
class RadiusEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radius");
  }
  static getEffectKey() {
    return "radius";
  }
  static resolveDefaults(props) {
    var _a2;
    return {
      radius: (_a2 = props.radius) != null ? _a2 : 10
    };
  }
}
__publicField(RadiusEffect, "z$__type__Props");
__publicField(RadiusEffect, "uniforms", {
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    updateOnBind: true,
    validator: validateArrayLength4,
    updateProgramValue: updateWebSafeRadius
  }
});
__publicField(RadiusEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(RadiusEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  float r = radius[0] * step(v_textureCoordinate.x, 0.5) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[1] * step(0.5, v_textureCoordinate.x) * step(v_textureCoordinate.y, 0.5);\n  r = r + radius[2] * step(0.5, v_textureCoordinate.x) * step(0.5, v_textureCoordinate.y);\n  r = r + radius[3] * step(v_textureCoordinate.x, 0.5) * step(0.5, v_textureCoordinate.y);\n  return $boxDist(v_textureCoordinate.xy * u_dimensions - halfDimensions, halfDimensions, r);\n  ");
__publicField(RadiusEffect, "onEffectMask", "\n  return mix(vec4(0.0), maskColor, $fillMask(shaderMask));\n  ");
class BorderEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "border");
  }
  static getEffectKey() {
    return "border";
  }
  static resolveDefaults(props) {
    var _a2, _b;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderEffect, "z$__type__Props");
__publicField(BorderEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderEffect, "onEffectMask", "\n  float intR = shaderMask + 1.0;\n  float mask = clamp(intR + width, 0.0, 1.0) - clamp(intR, 0.0, 1.0);\n  return mix(shaderColor, mix(shaderColor, maskColor, maskColor.a), mask);\n  ");
__publicField(BorderEffect, "onColorize", "\n    return color;\n  ");
const _LinearGradientEffect = class _LinearGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "linearGradient");
  }
  static getEffectKey(props) {
    return "linearGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a2, _b;
    const colors = (_a2 = props.colors) != null ? _a2 : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      angle: (_b = props.angle) != null ? _b : 0
    };
  }
};
__publicField(_LinearGradientEffect, "z$__type__Props");
__publicField(_LinearGradientEffect, "uniforms", {
  angle: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      return rgbas.reduce((acc, val) => acc.concat(getNormalizedRgbaComponents(val)), []);
    },
    updateProgramValue: updateFloat32ArrayLengthN,
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_LinearGradientEffect, "methods", {
  fromLinear: "\n      vec4 function(vec4 linearRGB) {\n        vec4 higher = vec4(1.055)*pow(linearRGB, vec4(1.0/2.4)) - vec4(0.055);\n        vec4 lower = linearRGB * vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  toLinear: "\n      vec4 function(vec4 sRGB) {\n        vec4 higher = pow((sRGB + vec4(0.055))/vec4(1.055), vec4(2.4));\n        vec4 lower = sRGB/vec4(12.92);\n        return mix(higher, lower, 1.0);\n      }\n    ",
  calcPoint: "\n      vec2 function(float d, float angle) {\n        return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n      }\n    "
});
__publicField(_LinearGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_LinearGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      float a = angle - (PI / 180.0 * 90.0);\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = $calcPoint(lineDist * 0.5, a);\n      vec2 t = $calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(v_textureCoordinate.xy * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = $fromLinear(mix($toLinear(colors[0]), $toLinear(colors[1]), stopCalc));\n      ".concat(_LinearGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let LinearGradientEffect = _LinearGradientEffect;
class GrayscaleEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "grayscale");
  }
  static getEffectKey() {
    return "grayscale";
  }
  static resolveDefaults(props) {
    var _a2;
    return {
      amount: (_a2 = props.amount) != null ? _a2 : 1
    };
  }
}
__publicField(GrayscaleEffect, "uniforms", {
  amount: {
    value: 1,
    method: "uniform1f",
    type: "float"
  }
});
__publicField(GrayscaleEffect, "onColorize", "\n    float grayness = 0.2 * maskColor.r + 0.6 * maskColor.g + 0.2 * maskColor.b;\n    return vec4(amount * vec3(grayness) + (1.0 - amount) * maskColor.rgb, maskColor.a);\n  ");
class BorderRightEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderRight");
  }
  static getEffectKey() {
    return "borderRight";
  }
  static resolveDefaults(props) {
    var _a2, _b;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderRightEffect, "z$__type__Props");
__publicField(BorderRightEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderRightEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderRightEffect, "onEffectMask", "\n  vec2 pos = vec2(u_dimensions.x - width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderRightEffect, "onColorize", "\n    return color;\n  ");
class BorderTopEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderTop");
  }
  static getEffectKey() {
    return "borderTop";
  }
  static resolveDefaults(props) {
    var _a2, _b;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderTopEffect, "z$__type__Props");
__publicField(BorderTopEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderTopEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderTopEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderTopEffect, "onColorize", "\n    return color;\n  ");
class BorderBottomEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderBottom");
  }
  static getEffectKey() {
    return "borderBottom";
  }
  static resolveDefaults(props) {
    var _a2, _b;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderBottomEffect, "z$__type__Props");
__publicField(BorderBottomEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderBottomEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderBottomEffect, "onEffectMask", "\n  vec2 pos = vec2(0.0, u_dimensions.y - width * 0.5);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(u_dimensions.x, width*0.5));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderBottomEffect, "onColorize", "\n    return color;\n  ");
class BorderLeftEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "borderLeft");
  }
  static getEffectKey() {
    return "borderLeft";
  }
  static resolveDefaults(props) {
    var _a2, _b;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      color: (_b = props.color) != null ? _b : 4294967295
    };
  }
}
__publicField(BorderLeftEffect, "z$__type__Props");
__publicField(BorderLeftEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(BorderLeftEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  rectDist: "\n      float function(vec2 p, vec2 size) {\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));\n      }\n    "
});
__publicField(BorderLeftEffect, "onEffectMask", "\n  vec2 pos = vec2(width * 0.5, 0.0);\n  float mask = $rectDist(v_textureCoordinate.xy * u_dimensions - pos, vec2(width*0.5, u_dimensions.y));\n  return mix(shaderColor, maskColor, $fillMask(mask));\n  ");
__publicField(BorderLeftEffect, "onColorize", "\n    return color;\n  ");
class GlitchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "glitch");
  }
  static getEffectKey(props) {
    return "glitch";
  }
  static resolveDefaults(props) {
    var _a2, _b, _c, _d, _e;
    return {
      amplitude: (_a2 = props.amplitude) != null ? _a2 : 0.2,
      narrowness: (_b = props.narrowness) != null ? _b : 4,
      blockiness: (_c = props.blockiness) != null ? _c : 2,
      minimizer: (_d = props.minimizer) != null ? _d : 8,
      time: (_e = props.time) != null ? _e : Date.now()
    };
  }
}
__publicField(GlitchEffect, "z$__type__Props");
__publicField(GlitchEffect, "uniforms", {
  amplitude: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  narrowness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  blockiness: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  minimizer: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  time: {
    value: 0,
    method: "uniform1f",
    updateOnBind: true,
    updateProgramValue: (values) => {
      const value = values.value = (Date.now() - values.value) % 1e3;
      values.programValue = value;
    },
    type: "float"
  }
});
__publicField(GlitchEffect, "methods", {
  rand: "\n      float function(vec2 p, float time) {\n        float t = floor(time * 20.) / 10.;\n        return fract(sin(dot(p, vec2(t * 12.9898, t * 78.233))) * 43758.5453);\n      }\n    ",
  noise: "\n      float function(vec2 uv, float blockiness, float time) {\n        vec2 lv = fract(uv);\n        vec2 id = floor(uv);\n\n        float n1 = rand(id, time);\n        float n2 = rand(id+vec2(1,0), time);\n        float n3 = rand(id+vec2(0,1), time);\n        float n4 = rand(id+vec2(1,1), time);\n        vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n        return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n      }\n    ",
  fbm: "\n      float function(vec2 uv, int count, float blockiness, float complexity, float time) {\n        float val = 0.0;\n        float amp = 0.5;\n        const int MAX_ITERATIONS = 10;\n\n        for(int i = 0; i < MAX_ITERATIONS; i++) {\n          if(i >= count) {break;}\n          val += amp * noise(uv, blockiness, time);\n          amp *= 0.5;\n          uv *= complexity;\n        }\n        return val;\n      }\n    "
});
__publicField(GlitchEffect, "onColorize", "\n    vec2 uv = v_textureCoordinate.xy;\n    float aspect = u_dimensions.x / u_dimensions.y;\n    vec2 a = vec2(uv.x * aspect , uv.y);\n    vec2 uv2 = vec2(a.x / u_dimensions.x, exp(a.y));\n\n    float shift = amplitude * pow($fbm(uv2, 4, blockiness, narrowness, time), minimizer);\n    float colR = texture2D(u_texture, vec2(uv.x + shift, uv.y)).r * (1. - shift);\n    float colG = texture2D(u_texture, vec2(uv.x - shift, uv.y)).g * (1. - shift);\n    float colB = texture2D(u_texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n\n    vec3 f = vec3(colR, colG, colB);\n    return vec4(f, texture2D(u_texture, vec2(uv.x - shift, uv.y)).a);\n  ");
class FadeOutEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "fadeOut");
  }
  static getEffectKey() {
    return "fadeOut";
  }
  static resolveDefaults(props) {
    var _a2;
    return {
      fade: (_a2 = props.fade) != null ? _a2 : 10
    };
  }
}
__publicField(FadeOutEffect, "z$__type__Props");
__publicField(FadeOutEffect, "uniforms", {
  fade: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    validator: validateArrayLength4,
    updateProgramValue: updateFloat32ArrayLength4
  }
});
__publicField(FadeOutEffect, "onColorize", "\n  vec2 point = v_textureCoordinate.xy * u_dimensions.xy;\n  vec2 pos1;\n  vec2 pos2;\n  vec2 d;\n  float c;\n  vec4 result = maskColor;\n\n\n  if(fade[0] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x, point.y + fade[0]);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[1] > 0.0) {\n    pos1 = vec2(point.x - u_dimensions.x - fade[1], v_textureCoordinate.y);\n    pos2 = vec2(point.x - u_dimensions.x, v_textureCoordinate.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[2] > 0.0) {\n    pos1 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y - fade[2]);\n    pos2 = vec2(v_textureCoordinate.x, point.y - u_dimensions.y);\n    d = pos1 - pos2;\n    c = dot(pos2, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  if(fade[3] > 0.0) {\n    pos1 = vec2(point.x, point.y);\n    pos2 = vec2(point.x + fade[3], point.y);\n    d = pos2 - pos1;\n    c = dot(pos1, d) / dot(d, d);\n    result = mix(vec4(0.0), result, smoothstep(0.0, 1.0, clamp(c, 0.0, 1.0)));\n  }\n\n  return result;\n  ");
const _RadialGradientEffect = class _RadialGradientEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialGradient");
  }
  static getEffectKey(props) {
    return "radialGradient".concat(props.colors.length);
  }
  static resolveDefaults(props) {
    var _a2, _b, _c, _d, _e;
    const colors = (_a2 = props.colors) != null ? _a2 : [4278190080, 4294967295];
    let stops = props.stops || [];
    if (stops.length === 0 || stops.length !== colors.length) {
      const colorsL = colors.length;
      let i = 0;
      const tmp = stops;
      for (; i < colorsL; i++) {
        if (stops[i]) {
          tmp[i] = stops[i];
          if (stops[i - 1] === void 0 && tmp[i - 2] !== void 0) {
            tmp[i - 1] = tmp[i - 2] + (stops[i] - tmp[i - 2]) / 2;
          }
        } else {
          tmp[i] = i * (1 / (colors.length - 1));
        }
      }
      stops = tmp;
    }
    return {
      colors,
      stops,
      width: (_b = props.width) != null ? _b : 0,
      height: (_d = (_c = props.height) != null ? _c : props.width) != null ? _d : 0,
      pivot: (_e = props.pivot) != null ? _e : [0.5, 0.5]
    };
  }
};
__publicField(_RadialGradientEffect, "z$__type__Props");
__publicField(_RadialGradientEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  pivot: {
    value: [0.5, 0.5],
    updateProgramValue: updateFloat32ArrayLength2,
    method: "uniform2fv",
    type: "vec2"
  },
  colors: {
    value: 4294967295,
    validator: (rgbas) => {
      return rgbas.reduce((acc, val) => acc.concat(getNormalizedRgbaComponents(val)), []);
    },
    updateProgramValue: updateFloat32ArrayLengthN,
    size: (props) => props.colors.length,
    method: "uniform4fv",
    type: "vec4"
  },
  stops: {
    value: [],
    size: (props) => props.colors.length,
    method: "uniform1fv",
    type: "float"
  }
});
__publicField(_RadialGradientEffect, "ColorLoop", (amount) => {
  let loop = "";
  for (let i = 2; i < amount; i++) {
    loop += "colorOut = mix(colorOut, colors[".concat(i, "], clamp((dist - stops[").concat(i - 1, "]) / (stops[").concat(i, "] - stops[").concat(i - 1, "]), 0.0, 1.0));");
  }
  return loop;
});
__publicField(_RadialGradientEffect, "onColorize", (props) => {
  const colors = props.colors.length || 1;
  return "\n      vec2 point = v_textureCoordinate.xy * u_dimensions;\n      vec2 projection = vec2(pivot.x * u_dimensions.x, pivot.y * u_dimensions.y);\n\n      float dist = length((point - projection) / vec2(width, height));\n\n      float stopCalc = (dist - stops[0]) / (stops[1] - stops[0]);\n      vec4 colorOut = mix(colors[0], colors[1], stopCalc);\n      ".concat(_RadialGradientEffect.ColorLoop(colors), "\n      return mix(maskColor, colorOut, clamp(colorOut.a, 0.0, 1.0));\n    ");
});
let RadialGradientEffect = _RadialGradientEffect;
class RadialProgressEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "radialProgress");
  }
  static getEffectKey() {
    return "radialProgress";
  }
  static resolveDefaults(props) {
    var _a2, _b, _c, _d, _e, _f, _g;
    return {
      width: (_a2 = props.width) != null ? _a2 : 10,
      progress: (_b = props.progress) != null ? _b : 0.5,
      offset: (_c = props.offset) != null ? _c : 0,
      range: (_d = props.range) != null ? _d : Math.PI * 2,
      rounded: (_e = props.rounded) != null ? _e : false,
      radius: (_f = props.radius) != null ? _f : 1,
      color: (_g = props.color) != null ? _g : 4294967295
    };
  }
}
__publicField(RadialProgressEffect, "z$__type__Props");
__publicField(RadialProgressEffect, "uniforms", {
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  progress: {
    value: 0.5,
    method: "uniform1f",
    type: "float"
  },
  offset: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  range: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  rounded: {
    value: 0,
    method: "uniform1f",
    type: "float",
    validator: (value) => {
      return value ? 1 : 0;
    }
  },
  radius: {
    value: 1,
    method: "uniform1f",
    type: "float"
  },
  color: {
    value: 4294967295,
    updateProgramValue: updateShaderEffectColor,
    method: "uniform4fv",
    type: "vec4"
  }
});
__publicField(RadialProgressEffect, "methods", {
  rotateUV: "\n    vec2 function(vec2 uv, float d) {\n      float s = sin(d);\n      float c = cos(d);\n      mat2 rotMatrix = mat2(c, -s, s, c);\n      return uv * rotMatrix;\n    }\n    ",
  drawDot: "\n    float function(vec2 uv, vec2 p, float r) {\n      uv += p;\n      float circle = length(uv) - r;\n      return clamp(-circle, 0.0, 1.0);\n    }\n    "
});
__publicField(RadialProgressEffect, "onEffectMask", "\n    float outerRadius = radius * u_dimensions.y * 0.5;\n\n    float endAngle = range * progress - 0.0005;\n\n    vec2 uv = v_textureCoordinate.xy * u_dimensions.xy - u_dimensions * 0.5;\n\n    uv = $rotateUV(uv, -(offset));\n    float linewidth = width * u_pixelRatio;\n    float circle = length(uv) - (outerRadius - linewidth) ;\n    circle = abs(circle) - linewidth;\n    circle = clamp(-circle, 0.0, 1.0);\n\n    float angle = (atan(uv.x, -uv.y) / 3.14159265359 * 0.5);\n    float p = endAngle / (PI * 2.);\n\n    circle *= step(fract(angle), fract(p));\n\n    circle = rounded < 1. ? circle : max(circle, $drawDot(uv, vec2(0, outerRadius - linewidth), linewidth));\n    circle = rounded < 1. ? circle : max(circle, $drawDot($rotateUV(uv, -(endAngle)), vec2(0, outerRadius - linewidth), linewidth));\n\n    return mix(shaderColor, maskColor, circle);\n  ");
__publicField(RadialProgressEffect, "onColorize", "\n    return color;\n  ");
class HolePunchEffect extends ShaderEffect {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "holePunch");
  }
  static getEffectKey() {
    return "holePunch";
  }
  static resolveDefaults(props) {
    var _a2;
    return {
      x: props.x || 0,
      y: props.y || 0,
      width: props.width || 50,
      height: props.height || 50,
      radius: (_a2 = props.radius) != null ? _a2 : 0
    };
  }
}
__publicField(HolePunchEffect, "z$__type__Props");
__publicField(HolePunchEffect, "uniforms", {
  x: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  y: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  width: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  height: {
    value: 0,
    method: "uniform1f",
    type: "float"
  },
  radius: {
    value: 0,
    method: "uniform4fv",
    type: "vec4",
    updateOnBind: true,
    validator: validateArrayLength4,
    updateProgramValue: updateWebSafeRadius
  }
});
__publicField(HolePunchEffect, "methods", {
  fillMask: "\n      float function(float dist) {\n        return clamp(-dist, 0.0, 1.0);\n      }\n    ",
  boxDist: "\n      float function(vec2 p, vec2 size, float radius) {\n        size -= vec2(radius);\n        vec2 d = abs(p) - size;\n        return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - radius;\n      }\n    "
});
__publicField(HolePunchEffect, "onShaderMask", "\n  vec2 halfDimensions = u_dimensions * 0.5;\n  vec2 size = vec2(width, height) * 0.5;\n  vec2 basePos = v_textureCoordinate.xy * u_dimensions.xy - vec2(x, y);\n  vec2 pos = basePos - size;\n  float r = radius[0] * step(pos.x, 0.5) * step(pos.y, 0.5);\n  r = r + radius[1] * step(0.5, pos.x) * step(pos.y, 0.5);\n  r = r + radius[2] * step(0.5, pos.x) * step(0.5, pos.y);\n  r = r + radius[3] * step(pos.x, 0.5) * step(0.5, pos.y);\n  return $boxDist(pos, size, r);\n  ");
__publicField(HolePunchEffect, "onEffectMask", "\n  return mix(maskColor, vec4(0.0), $fillMask(shaderMask));\n  ");
const ROUNDED_RECTANGLE_SHADER_TYPE = "RoundedRectangle";
class UnsupportedShader extends CoreShader {
  constructor(shType) {
    super();
    __publicField(this, "shType");
    this.shType = shType;
    if (shType !== ROUNDED_RECTANGLE_SHADER_TYPE) {
      console.warn("Unsupported shader:", shType);
    }
  }
  bindRenderOp() {
  }
  bindProps() {
  }
  attach() {
  }
  detach() {
  }
}
class ShaderController {
  constructor(type2, shader, props, stage) {
    __publicField(this, "type");
    __publicField(this, "shader");
    __publicField(this, "resolvedProps");
    __publicField(this, "props");
    this.type = type2;
    this.shader = shader;
    this.resolvedProps = props;
    const keys = Object.keys(props);
    const l = keys.length;
    const definedProps = {};
    for (let i = 0; i < l; i++) {
      const name = keys[i];
      Object.defineProperty(definedProps, name, {
        get: () => {
          return this.resolvedProps[name];
        },
        set: (value) => {
          this.resolvedProps[name] = value;
          stage.requestRender();
        }
      });
    }
    this.props = definedProps;
  }
  getResolvedProps() {
    return this.resolvedProps;
  }
}
class DynamicShaderController {
  constructor(shader, props, shManager) {
    __publicField(this, "shader");
    __publicField(this, "resolvedProps");
    __publicField(this, "props");
    __publicField(this, "type");
    this.shader = shader;
    this.type = "DynamicShader";
    this.resolvedProps = props;
    const effectConstructors = shManager.getRegisteredEffects();
    const definedProps = {};
    const effects = props.effects;
    const effectsLength = effects.length;
    for (let i = 0; i < effectsLength; i++) {
      const { name: effectName, props: effectProps, type: effectType } = effects[i];
      if (effectName === void 0) {
        continue;
      }
      const definedEffectProps = {};
      const propEntries = Object.keys(effectProps);
      const propEntriesLength = propEntries.length;
      for (let j = 0; j < propEntriesLength; j++) {
        const propName = propEntries[j];
        Object.defineProperty(definedEffectProps, propName, {
          get: () => {
            return this.resolvedProps.effects[i].props[propName].value;
          },
          set: (value) => {
            var _a2, _b;
            const target = this.resolvedProps.effects[i].props[propName];
            target.value = value;
            if (target.hasValidator) {
              value = target.validatedValue = (_a2 = effectConstructors[effectType].uniforms[propName]) == null ? void 0 : _a2.validator(value, effectProps);
            }
            if (target.hasProgramValueUpdater) {
              (_b = effectConstructors[effectType].uniforms[propName]) == null ? void 0 : _b.updateProgramValue(target);
            } else {
              target.programValue = value;
            }
            shManager.renderer.stage.requestRender();
          }
        });
      }
      Object.defineProperty(definedProps, effectName, {
        get: () => {
          return definedEffectProps;
        }
      });
    }
    this.props = definedProps;
  }
  getResolvedProps() {
    return this.resolvedProps;
  }
}
class CoreShaderManager {
  constructor() {
    __publicField(this, "shCache", /* @__PURE__ */ new Map());
    __publicField(this, "shConstructors", {});
    __publicField(this, "attachedShader", null);
    __publicField(this, "effectConstructors", {});
    __publicField(this, "renderer");
    this.registerShaderType("DefaultShader", DefaultShader);
    this.registerShaderType("DefaultShaderBatched", DefaultShaderBatched);
    this.registerShaderType("RoundedRectangle", RoundedRectangle);
    this.registerShaderType("DynamicShader", DynamicShader);
    this.registerShaderType("SdfShader", SdfShader);
    this.registerEffectType("border", BorderEffect);
    this.registerEffectType("borderBottom", BorderBottomEffect);
    this.registerEffectType("borderLeft", BorderLeftEffect);
    this.registerEffectType("borderRight", BorderRightEffect);
    this.registerEffectType("borderTop", BorderTopEffect);
    this.registerEffectType("fadeOut", FadeOutEffect);
    this.registerEffectType("linearGradient", LinearGradientEffect);
    this.registerEffectType("radialGradient", RadialGradientEffect);
    this.registerEffectType("grayscale", GrayscaleEffect);
    this.registerEffectType("glitch", GlitchEffect);
    this.registerEffectType("radius", RadiusEffect);
    this.registerEffectType("radialProgress", RadialProgressEffect);
    this.registerEffectType("holePunch", HolePunchEffect);
  }
  registerShaderType(shType, shClass) {
    this.shConstructors[shType] = shClass;
  }
  registerEffectType(effectType, effectClass) {
    this.effectConstructors[effectType] = effectClass;
  }
  getRegisteredEffects() {
    return this.effectConstructors;
  }
  getRegisteredShaders() {
    return this.shConstructors;
  }
  /**
   * Loads a shader (if not already loaded) and returns a controller for it.
   *
   * @param shType
   * @param props
   * @returns
   */
  loadShader(shType, props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const ShaderClass = this.shConstructors[shType];
    if (!ShaderClass) {
      throw new Error('Shader type "'.concat(shType, '" is not registered'));
    }
    if (this.renderer.mode === "canvas" && ShaderClass.prototype instanceof WebGlCoreShader) {
      return this._createShaderCtr(shType, new UnsupportedShader(shType), props);
    }
    if (shType === "DynamicShader") {
      return this.loadDynamicShader(props);
    }
    const resolvedProps = ShaderClass.resolveDefaults(props);
    const cacheKey = ShaderClass.makeCacheKey(resolvedProps) || ShaderClass.name;
    if (cacheKey && this.shCache.has(cacheKey)) {
      return this._createShaderCtr(shType, this.shCache.get(cacheKey), resolvedProps);
    }
    const shader = new ShaderClass(this.renderer, props);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return this._createShaderCtr(shType, shader, resolvedProps);
  }
  loadDynamicShader(props) {
    if (!this.renderer) {
      throw new Error("Renderer is not been defined");
    }
    const resolvedProps = DynamicShader.resolveDefaults(props, this.effectConstructors);
    const cacheKey = DynamicShader.makeCacheKey(resolvedProps, this.effectConstructors);
    if (cacheKey && this.shCache.has(cacheKey)) {
      return this._createDynShaderCtr(this.shCache.get(cacheKey), resolvedProps);
    }
    const shader = new DynamicShader(this.renderer, props, this.effectConstructors);
    if (cacheKey) {
      this.shCache.set(cacheKey, shader);
    }
    return this._createDynShaderCtr(shader, resolvedProps);
  }
  _createShaderCtr(type2, shader, props) {
    return new ShaderController(type2, shader, props, this.renderer.stage);
  }
  _createDynShaderCtr(shader, props) {
    return new DynamicShaderController(shader, props, this);
  }
  useShader(shader) {
    if (this.attachedShader === shader) {
      return;
    }
    if (this.attachedShader) {
      this.attachedShader.detach();
    }
    shader.attach();
    this.attachedShader = shader;
  }
}
const trPropSetterDefaults = {
  x: (state, value) => {
    state.props.x = value;
  },
  y: (state, value) => {
    state.props.y = value;
  },
  width: (state, value) => {
    state.props.width = value;
  },
  height: (state, value) => {
    state.props.height = value;
  },
  color: (state, value) => {
    state.props.color = value;
  },
  zIndex: (state, value) => {
    state.props.zIndex = value;
  },
  fontFamily: (state, value) => {
    state.props.fontFamily = value;
  },
  fontWeight: (state, value) => {
    state.props.fontWeight = value;
  },
  fontStyle: (state, value) => {
    state.props.fontStyle = value;
  },
  fontStretch: (state, value) => {
    state.props.fontStretch = value;
  },
  fontSize: (state, value) => {
    state.props.fontSize = value;
  },
  text: (state, value) => {
    state.props.text = value;
  },
  textAlign: (state, value) => {
    state.props.textAlign = value;
  },
  contain: (state, value) => {
    state.props.contain = value;
  },
  offsetY: (state, value) => {
    state.props.offsetY = value;
  },
  scrollable: (state, value) => {
    state.props.scrollable = value;
  },
  scrollY: (state, value) => {
    state.props.scrollY = value;
  },
  letterSpacing: (state, value) => {
    state.props.letterSpacing = value;
  },
  lineHeight: (state, value) => {
    state.props.lineHeight = value;
  },
  maxLines: (state, value) => {
    state.props.maxLines = value;
  },
  textBaseline: (state, value) => {
    state.props.textBaseline = value;
  },
  verticalAlign: (state, value) => {
    state.props.verticalAlign = value;
  },
  overflowSuffix: (state, value) => {
    state.props.overflowSuffix = value;
  },
  debug: (state, value) => {
    state.props.debug = value;
  }
};
class TextRenderer {
  constructor(stage) {
    __publicField(this, "stage");
    __publicField(this, "set");
    this.stage = stage;
    const propSetters = {
      ...trPropSetterDefaults,
      ...this.getPropertySetters()
    };
    this.set = Object.freeze(Object.fromEntries(Object.entries(propSetters).map(([key, setter2]) => {
      return [
        key,
        (state, value) => {
          if (state.props[key] !== value) {
            setter2(state, value);
            this.stage.requestRender();
          }
        }
      ];
    })));
  }
  setStatus(state, status, error) {
    if (state.status === status) {
      return;
    }
    state.status = status;
    state.emitter.emit(status, error);
  }
  /**
   * Allows the CoreTextNode to communicate changes to the isRenderable state of
   * the itself.
   *
   * @param state
   * @param renderable
   */
  setIsRenderable(state, renderable) {
    state.isRenderable = renderable;
  }
  /**
   * Destroy/Clean up the state object
   *
   * @remarks
   * Opposite of createState(). Frees any event listeners / resources held by
   * the state that may not reliably get garbage collected.
   *
   * @param state
   */
  destroyState(state) {
    this.setStatus(state, "destroyed");
    state.emitter.removeAllListeners();
  }
  /**
   * Schedule a state update via queueMicrotask
   *
   * @remarks
   * This method is used to schedule a state update via queueMicrotask. This
   * method should be called whenever a state update is needed, and it will
   * ensure that the state is only updated once per microtask.
   * @param state
   * @returns
   */
  scheduleUpdateState(state) {
    if (state.updateScheduled) {
      return;
    }
    state.updateScheduled = true;
    queueMicrotask(() => {
      if (state.status === "destroyed") {
        return;
      }
      state.updateScheduled = false;
      this.updateState(state);
    });
  }
}
class ContextSpy {
  constructor() {
    __publicField(this, "data", {});
  }
  reset() {
    this.data = {};
  }
  increment(name) {
    if (!this.data[name]) {
      this.data[name] = 0;
    }
    this.data[name]++;
  }
  getData() {
    return { ...this.data };
  }
}
class TextureMemoryManager {
  constructor(stage, settings) {
    __publicField(this, "stage");
    __publicField(this, "memUsed", 0);
    __publicField(this, "loadedTextures", /* @__PURE__ */ new Map());
    __publicField(this, "criticalThreshold");
    __publicField(this, "targetThreshold");
    __publicField(this, "cleanupInterval");
    __publicField(this, "debugLogging");
    __publicField(this, "lastCleanupTime", 0);
    __publicField(this, "criticalCleanupRequested", false);
    /**
     * The current frame time in milliseconds
     *
     * @remarks
     * This is used to determine when to perform Idle Texture Cleanups.
     *
     * Set by stage via `updateFrameTime` method.
     */
    __publicField(this, "frameTime", 0);
    this.stage = stage;
    const { criticalThreshold } = settings;
    this.criticalThreshold = Math.round(criticalThreshold);
    const targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
    this.targetThreshold = Math.round(criticalThreshold * targetFraction);
    this.cleanupInterval = settings.cleanupInterval;
    this.debugLogging = settings.debugLogging;
    if (settings.debugLogging) {
      let lastMemUse = 0;
      setInterval(() => {
        if (lastMemUse !== this.memUsed) {
          lastMemUse = this.memUsed;
          console.log("[TextureMemoryManager] Memory used: ".concat(bytesToMb$1(this.memUsed), " mb / ").concat(bytesToMb$1(this.criticalThreshold), " mb (").concat((this.memUsed / this.criticalThreshold * 100).toFixed(1), "%)"));
        }
      }, 1e3);
    }
    if (criticalThreshold === 0) {
      this.setTextureMemUse = () => {
      };
    }
  }
  setTextureMemUse(texture, byteSize) {
    if (this.loadedTextures.has(texture)) {
      this.memUsed -= this.loadedTextures.get(texture);
    }
    if (byteSize === 0) {
      this.loadedTextures.delete(texture);
      return;
    } else {
      this.memUsed += byteSize;
      this.loadedTextures.set(texture, byteSize);
    }
    if (this.memUsed > this.criticalThreshold) {
      this.criticalCleanupRequested = true;
    }
  }
  checkCleanup() {
    return this.criticalCleanupRequested || this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
  }
  cleanup() {
    const critical = this.criticalCleanupRequested;
    this.lastCleanupTime = this.frameTime;
    this.criticalCleanupRequested = false;
    if (critical) {
      this.stage.queueFrameEvent("criticalCleanup", {
        memUsed: this.memUsed,
        criticalThreshold: this.criticalThreshold
      });
    }
    if (this.debugLogging) {
      console.log("[TextureMemoryManager] Cleaning up textures. Critical: ".concat(critical));
    }
    const textures = [...this.loadedTextures.keys()].sort((textureA, textureB) => {
      const txARenderable = textureA.renderable;
      const txBRenderable = textureB.renderable;
      if (txARenderable === txBRenderable) {
        return textureA.lastRenderableChangeTime - textureB.lastRenderableChangeTime;
      } else if (txARenderable) {
        return 1;
      } else if (txBRenderable) {
        return -1;
      }
      return 0;
    });
    const memTarget = this.targetThreshold;
    const txManager = this.stage.txManager;
    for (const texture of textures) {
      if (texture.renderable) {
        break;
      }
      if (texture.preventCleanup === false) {
        texture.ctxTexture.free();
        txManager.removeTextureFromCache(texture);
      }
      if (this.memUsed <= memTarget) {
        break;
      }
    }
    if (this.memUsed >= this.criticalThreshold) {
      this.stage.queueFrameEvent("criticalCleanupFailed", {
        memUsed: this.memUsed,
        criticalThreshold: this.criticalThreshold
      });
      console.warn("[TextureMemoryManager] Memory usage above critical threshold after cleanup: ".concat(this.memUsed));
    }
  }
  /**
   * Get the current texture memory usage information
   *
   * @remarks
   * This method is for debugging purposes and returns information about the
   * current memory usage of the textures in the Renderer.
   */
  getMemoryInfo() {
    let renderableTexturesLoaded = 0;
    const renderableMemUsed = [...this.loadedTextures.keys()].reduce(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (acc, texture) => {
        renderableTexturesLoaded += texture.renderable ? 1 : 0;
        return acc + (texture.renderable ? this.loadedTextures.get(texture) : 0);
      },
      0
    );
    return {
      criticalThreshold: this.criticalThreshold,
      targetThreshold: this.targetThreshold,
      renderableMemUsed,
      memUsed: this.memUsed,
      renderableTexturesLoaded,
      loadedTextures: this.loadedTextures.size
    };
  }
}
class CoreContextTexture {
  constructor(memManager, textureSource) {
    __publicField(this, "textureSource");
    __publicField(this, "memManager");
    this.memManager = memManager;
    this.textureSource = textureSource;
  }
  setTextureMemUse(byteSize) {
    this.memManager.setTextureMemUse(this.textureSource, byteSize);
  }
  get renderable() {
    return this.textureSource.renderable;
  }
}
class CoreRenderer {
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "mode");
    __publicField(this, "stage");
    //// Core Managers
    __publicField(this, "txManager");
    __publicField(this, "txMemManager");
    __publicField(this, "shManager");
    __publicField(this, "rttNodes", []);
    this.options = options;
    this.stage = options.stage;
    this.txManager = options.txManager;
    this.txMemManager = options.txMemManager;
    this.shManager = options.shManager;
  }
}
class CoreTextNode extends CoreNode {
  constructor(stage, props, textRenderer) {
    super(stage, props);
    __publicField(this, "textRenderer");
    __publicField(this, "trState");
    __publicField(this, "_textRendererOverride", null);
    __publicField(this, "onTextLoaded", () => {
      const { contain } = this;
      const setWidth = this.trState.props.width;
      const setHeight = this.trState.props.height;
      const calcWidth = this.trState.textW || 0;
      const calcHeight2 = this.trState.textH || 0;
      if (contain === "both") {
        this.props.width = setWidth;
        this.props.height = setHeight;
      } else if (contain === "width") {
        this.props.width = setWidth;
        this.props.height = calcHeight2;
      } else if (contain === "none") {
        this.props.width = calcWidth;
        this.props.height = calcHeight2;
      }
      this.updateLocalTransform();
      this.stage.requestRender();
      this.emit("loaded", {
        type: "text",
        dimensions: {
          width: this.trState.textW || 0,
          height: this.trState.textH || 0
        }
      });
    });
    __publicField(this, "onTextFailed", (target, error) => {
      this.emit("failed", {
        type: "text",
        error
      });
    });
    this._textRendererOverride = props.textRendererOverride;
    this.textRenderer = textRenderer;
    const textRendererState = this.createState({
      x: this.absX,
      y: this.absY,
      width: props.width,
      height: props.height,
      textAlign: props.textAlign,
      color: props.color,
      zIndex: props.zIndex,
      contain: props.contain,
      scrollable: props.scrollable,
      scrollY: props.scrollY,
      offsetY: props.offsetY,
      letterSpacing: props.letterSpacing,
      debug: props.debug,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontStretch: props.fontStretch,
      fontStyle: props.fontStyle,
      fontWeight: props.fontWeight,
      text: props.text,
      lineHeight: props.lineHeight,
      maxLines: props.maxLines,
      textBaseline: props.textBaseline,
      verticalAlign: props.verticalAlign,
      overflowSuffix: props.overflowSuffix
    });
    this.trState = textRendererState;
  }
  get width() {
    return this.props.width;
  }
  set width(value) {
    this.props.width = value;
    this.textRenderer.set.width(this.trState, value);
    if (this.contain === "none") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get height() {
    return this.props.height;
  }
  set height(value) {
    this.props.height = value;
    this.textRenderer.set.height(this.trState, value);
    if (this.contain !== "both") {
      this.setUpdateType(UpdateType.Local);
    }
  }
  get color() {
    return this.trState.props.color;
  }
  set color(value) {
    this.textRenderer.set.color(this.trState, value);
  }
  get text() {
    return this.trState.props.text;
  }
  set text(value) {
    this.textRenderer.set.text(this.trState, value);
  }
  get textRendererOverride() {
    return this._textRendererOverride;
  }
  set textRendererOverride(value) {
    this._textRendererOverride = value;
    this.textRenderer.destroyState(this.trState);
    const textRenderer = this.stage.resolveTextRenderer(this.trState.props, this._textRendererOverride);
    if (!textRenderer) {
      console.warn("Text Renderer not found for font", this.trState.props.fontFamily);
      return;
    }
    this.textRenderer = textRenderer;
    this.trState = this.createState(this.trState.props);
  }
  get fontSize() {
    return this.trState.props.fontSize;
  }
  set fontSize(value) {
    this.textRenderer.set.fontSize(this.trState, value);
  }
  get fontFamily() {
    return this.trState.props.fontFamily;
  }
  set fontFamily(value) {
    this.textRenderer.set.fontFamily(this.trState, value);
  }
  get fontStretch() {
    return this.trState.props.fontStretch;
  }
  set fontStretch(value) {
    this.textRenderer.set.fontStretch(this.trState, value);
  }
  get fontStyle() {
    return this.trState.props.fontStyle;
  }
  set fontStyle(value) {
    this.textRenderer.set.fontStyle(this.trState, value);
  }
  get fontWeight() {
    return this.trState.props.fontWeight;
  }
  set fontWeight(value) {
    this.textRenderer.set.fontWeight(this.trState, value);
  }
  get textAlign() {
    return this.trState.props.textAlign;
  }
  set textAlign(value) {
    this.textRenderer.set.textAlign(this.trState, value);
  }
  get contain() {
    return this.trState.props.contain;
  }
  set contain(value) {
    this.textRenderer.set.contain(this.trState, value);
  }
  get scrollable() {
    return this.trState.props.scrollable;
  }
  set scrollable(value) {
    this.textRenderer.set.scrollable(this.trState, value);
  }
  get scrollY() {
    return this.trState.props.scrollY;
  }
  set scrollY(value) {
    this.textRenderer.set.scrollY(this.trState, value);
  }
  get offsetY() {
    return this.trState.props.offsetY;
  }
  set offsetY(value) {
    this.textRenderer.set.offsetY(this.trState, value);
  }
  get letterSpacing() {
    return this.trState.props.letterSpacing;
  }
  set letterSpacing(value) {
    this.textRenderer.set.letterSpacing(this.trState, value);
  }
  get lineHeight() {
    return this.trState.props.lineHeight;
  }
  set lineHeight(value) {
    this.textRenderer.set.lineHeight(this.trState, value);
  }
  get maxLines() {
    return this.trState.props.maxLines;
  }
  set maxLines(value) {
    this.textRenderer.set.maxLines(this.trState, value);
  }
  get textBaseline() {
    return this.trState.props.textBaseline;
  }
  set textBaseline(value) {
    this.textRenderer.set.textBaseline(this.trState, value);
  }
  get verticalAlign() {
    return this.trState.props.verticalAlign;
  }
  set verticalAlign(value) {
    this.textRenderer.set.verticalAlign(this.trState, value);
  }
  get overflowSuffix() {
    return this.trState.props.overflowSuffix;
  }
  set overflowSuffix(value) {
    this.textRenderer.set.overflowSuffix(this.trState, value);
  }
  get debug() {
    return this.trState.props.debug;
  }
  set debug(value) {
    this.textRenderer.set.debug(this.trState, value);
  }
  update(delta, parentClippingRect) {
    super.update(delta, parentClippingRect);
    assertTruthy(this.globalTransform);
    this.textRenderer.set.x(this.trState, this.globalTransform.tx);
    this.textRenderer.set.y(this.trState, this.globalTransform.ty);
  }
  checkRenderProps() {
    if (this.trState && this.trState.props.text !== "") {
      return true;
    }
    return super.checkRenderProps();
  }
  onChangeIsRenderable(isRenderable) {
    super.onChangeIsRenderable(isRenderable);
    this.textRenderer.setIsRenderable(this.trState, isRenderable);
  }
  renderQuads(renderer) {
    var _a2;
    assertTruthy(this.globalTransform);
    if (!this.textRenderer.renderQuads) {
      super.renderQuads(renderer);
      return;
    }
    if (this.parentHasRenderTexture) {
      if (!renderer.renderToTextureActive) {
        return;
      }
      if (this.parentRenderTexture !== renderer.activeRttNode) {
        return;
      }
    }
    if (this.parentHasRenderTexture && ((_a2 = this.props.parent) == null ? void 0 : _a2.rtt)) {
      this.globalTransform = Matrix3d.identity();
      if (this.localTransform) {
        this.globalTransform.multiply(this.localTransform);
      }
    }
    assertTruthy(this.globalTransform);
    this.textRenderer.renderQuads(this.trState, this.globalTransform, this.clippingRect, this.worldAlpha, this.parentHasRenderTexture, this.framebufferDimensions);
  }
  /**
   * Destroy the node and cleanup all resources
   */
  destroy() {
    super.destroy();
    this.textRenderer.destroyState(this.trState);
  }
  /**
   * Resolve a text renderer and a new state based on the current text renderer props provided
   * @param props
   * @returns
   */
  createState(props) {
    const textRendererState = this.textRenderer.createState(props, this);
    textRendererState.emitter.on("loaded", this.onTextLoaded);
    textRendererState.emitter.on("failed", this.onTextFailed);
    this.textRenderer.scheduleUpdateState(textRendererState);
    return textRendererState;
  }
}
function santizeCustomDataMap(d) {
  const validTypes = {
    boolean: true,
    string: true,
    number: true,
    undefined: true
  };
  const keys = Object.keys(d);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!key) {
      continue;
    }
    const value = d[key];
    const valueType = typeof value;
    if (valueType === "string" && value.length > 2048) {
      console.warn("Custom Data value for ".concat(key, " is too long, it will be truncated to 2048 characters"));
      d[key] = value.substring(0, 2048);
    }
    if (!validTypes[valueType]) {
      console.warn("Custom Data value for ".concat(key, " is not a boolean, string, or number, it will be ignored"));
      delete d[key];
    }
  }
  return d;
}
const bufferMemory = 2e6;
class Stage {
  /**
   * Stage constructor
   */
  constructor(options) {
    __publicField(this, "options");
    /// Module Instances
    __publicField(this, "animationManager");
    __publicField(this, "txManager");
    __publicField(this, "txMemManager");
    __publicField(this, "fontManager");
    __publicField(this, "textRenderers");
    __publicField(this, "shManager");
    __publicField(this, "renderer");
    __publicField(this, "root");
    __publicField(this, "boundsMargin");
    __publicField(this, "defShaderCtr");
    /**
     * Renderer Event Bus for the Stage to emit events onto
     *
     * @remarks
     * In reality this is just the RendererMain instance, which is an EventEmitter.
     * this allows us to directly emit events from the Stage to RendererMain
     * without having to set up forwarding handlers.
     */
    __publicField(this, "eventBus");
    /// State
    __publicField(this, "deltaTime", 0);
    __publicField(this, "lastFrameTime", 0);
    __publicField(this, "currentFrameTime", 0);
    __publicField(this, "fpsNumFrames", 0);
    __publicField(this, "fpsElapsedTime", 0);
    __publicField(this, "renderRequested", false);
    __publicField(this, "frameEventQueue", []);
    __publicField(this, "fontResolveMap", {});
    /// Debug data
    __publicField(this, "contextSpy", null);
    this.options = options;
    const { canvas, clearColor, appWidth: appWidth2, appHeight: appHeight2, boundsMargin, enableContextSpy, numImageWorkers, textureMemory, renderEngine, fontEngines } = options;
    this.eventBus = options.eventBus;
    this.txManager = new CoreTextureManager(numImageWorkers);
    this.txMemManager = new TextureMemoryManager(this, textureMemory);
    this.shManager = new CoreShaderManager();
    this.animationManager = new AnimationManager();
    this.contextSpy = enableContextSpy ? new ContextSpy() : null;
    let bm = [0, 0, 0, 0];
    if (boundsMargin) {
      bm = Array.isArray(boundsMargin) ? boundsMargin : [boundsMargin, boundsMargin, boundsMargin, boundsMargin];
    }
    this.boundsMargin = bm;
    const rendererOptions = {
      stage: this,
      canvas,
      pixelRatio: options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio,
      clearColor: clearColor != null ? clearColor : 4278190080,
      bufferMemory,
      txManager: this.txManager,
      txMemManager: this.txMemManager,
      shManager: this.shManager,
      contextSpy: this.contextSpy
    };
    this.renderer = new renderEngine(rendererOptions);
    const renderMode = this.renderer.mode || "webgl";
    this.defShaderCtr = this.renderer.getDefShaderCtr();
    setPremultiplyMode(renderMode);
    this.txManager.renderer = this.renderer;
    this.textRenderers = {};
    fontEngines.forEach((fontEngineConstructor) => {
      const fontEngineInstance = new fontEngineConstructor(this);
      const className = fontEngineInstance.type;
      if (className === "sdf" && renderMode === "canvas") {
        console.warn("SdfTextRenderer is not compatible with Canvas renderer. Skipping...");
        return;
      }
      if (fontEngineInstance instanceof TextRenderer) {
        if (className === "canvas") {
          this.textRenderers["canvas"] = fontEngineInstance;
        } else if (className === "sdf") {
          this.textRenderers["sdf"] = fontEngineInstance;
        }
      }
    });
    if (Object.keys(this.textRenderers).length === 0) {
      console.warn("No text renderers available. Your text will not render.");
    }
    this.fontManager = new TrFontManager(this.textRenderers);
    const rootNode = new CoreNode(this, {
      x: 0,
      y: 0,
      width: appWidth2,
      height: appHeight2,
      alpha: 1,
      autosize: false,
      clipping: false,
      color: 0,
      colorTop: 0,
      colorBottom: 0,
      colorLeft: 0,
      colorRight: 0,
      colorTl: 0,
      colorTr: 0,
      colorBl: 0,
      colorBr: 0,
      zIndex: 0,
      zIndexLocked: 0,
      scaleX: 1,
      scaleY: 1,
      mountX: 0,
      mountY: 0,
      mount: 0,
      pivot: 0.5,
      pivotX: 0.5,
      pivotY: 0.5,
      rotation: 0,
      parent: null,
      texture: null,
      textureOptions: {},
      shader: this.defShaderCtr,
      rtt: false,
      src: null,
      scale: 1,
      preventCleanup: false
    });
    this.root = rootNode;
    {
      startLoop(this);
    }
  }
  updateFrameTime() {
    const newFrameTime = getTimeStamp();
    this.lastFrameTime = this.currentFrameTime;
    this.currentFrameTime = newFrameTime;
    this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
    this.txManager.frameTime = newFrameTime;
    this.txMemManager.frameTime = newFrameTime;
    this.eventBus.emit("frameTick", {
      time: this.currentFrameTime,
      delta: this.deltaTime
    });
  }
  /**
   * Update animations
   */
  updateAnimations() {
    const { animationManager } = this;
    if (!this.root) {
      return;
    }
    animationManager.update(this.deltaTime);
  }
  /**
   * Check if the scene has updates
   */
  hasSceneUpdates() {
    return !!this.root.updateType || this.renderRequested;
  }
  /**
   * Start a new frame draw
   */
  drawFrame() {
    const { renderer, renderRequested } = this;
    assertTruthy(renderer);
    if (this.root.updateType !== 0) {
      this.root.update(this.deltaTime, this.root.clippingRect);
    }
    renderer.reset();
    if (this.txMemManager.criticalCleanupRequested) {
      this.txMemManager.cleanup();
    }
    if (renderer.rttNodes.length > 0) {
      renderer.renderRTTNodes();
    }
    this.addQuads(this.root);
    renderer == null ? void 0 : renderer.render();
    this.calculateFps();
    if (renderRequested) {
      this.renderRequested = false;
    }
  }
  /**
   * Queue an event to be emitted after the current/next frame is rendered
   *
   * @remarks
   * When we are operating in the context of the render loop, we may want to
   * emit events that are related to the current frame. However, we generally do
   * NOT want to emit events directly in the middle of the render loop, since
   * this could enable event handlers to modify the scene graph and cause
   * unexpected behavior. Instead, we queue up events to be emitted and then
   * flush the queue after the frame has been rendered.
   *
   * @param name
   * @param data
   */
  queueFrameEvent(name, data) {
    this.frameEventQueue.push([name, data]);
  }
  /**
   * Emit all queued frame events
   *
   * @remarks
   * This method should be called after the frame has been rendered to emit
   * all events that were queued during the frame.
   *
   * See {@link queueFrameEvent} for more information.
   */
  flushFrameEvents() {
    for (const [name, data] of this.frameEventQueue) {
      this.eventBus.emit(name, data);
    }
    this.frameEventQueue = [];
  }
  calculateFps() {
    var _a2, _b, _c;
    const { fpsUpdateInterval } = this.options;
    if (fpsUpdateInterval) {
      this.fpsNumFrames++;
      this.fpsElapsedTime += this.deltaTime;
      if (this.fpsElapsedTime >= fpsUpdateInterval) {
        const fps = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
        this.fpsNumFrames = 0;
        this.fpsElapsedTime = 0;
        this.queueFrameEvent("fpsUpdate", {
          fps,
          contextSpyData: (_b = (_a2 = this.contextSpy) == null ? void 0 : _a2.getData()) != null ? _b : null
        });
        (_c = this.contextSpy) == null ? void 0 : _c.reset();
      }
    }
  }
  addQuads(node) {
    assertTruthy(this.renderer && node.globalTransform);
    if (node.isRenderable) {
      node.renderQuads(this.renderer);
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (!child) {
        continue;
      }
      if ((child == null ? void 0 : child.worldAlpha) === 0) {
        continue;
      }
      this.addQuads(child);
    }
  }
  /**
   * Request a render pass without forcing an update
   */
  requestRender() {
    this.renderRequested = true;
  }
  /**
   * Given a font name, and possible renderer override, return the best compatible text renderer.
   *
   * @remarks
   * Will try to return a canvas renderer if no other suitable renderer can be resolved.
   *
   * @param fontFamily
   * @param textRendererOverride
   * @returns
   */
  resolveTextRenderer(trProps, textRendererOverride = null) {
    const fontCacheString = "".concat(trProps.fontFamily).concat(trProps.fontStyle).concat(trProps.fontWeight).concat(trProps.fontStretch).concat(textRendererOverride ? textRendererOverride : "");
    if (this.fontResolveMap[fontCacheString] !== void 0) {
      return this.fontResolveMap[fontCacheString];
    }
    let rendererId = textRendererOverride;
    let overrideFallback = false;
    if (rendererId) {
      const possibleRenderer = this.textRenderers[rendererId];
      if (!possibleRenderer) {
        console.warn("Text renderer override '".concat(rendererId, "' not found."));
        rendererId = null;
        overrideFallback = true;
      } else if (!possibleRenderer.canRenderFont(trProps)) {
        console.warn("Cannot use override text renderer '".concat(rendererId, "' for font"), trProps);
        rendererId = null;
        overrideFallback = true;
      }
    }
    if (!rendererId) {
      for (const [trId, tr] of Object.entries(this.textRenderers)) {
        if (tr.canRenderFont(trProps)) {
          rendererId = trId;
          break;
        }
      }
      if (!rendererId && this.textRenderers.canvas !== void 0) {
        rendererId = "canvas";
      }
    }
    if (overrideFallback) {
      console.warn("Falling back to text renderer ".concat(String(rendererId)));
    }
    if (!rendererId) {
      return null;
    }
    const resolvedTextRenderer = this.textRenderers[rendererId];
    assertTruthy(resolvedTextRenderer, "resolvedTextRenderer undefined");
    this.fontResolveMap[fontCacheString] = resolvedTextRenderer;
    return resolvedTextRenderer;
  }
  /**
   * Create a shader controller instance
   *
   * @param type
   * @param props
   * @returns
   */
  createShaderCtr(type2, props) {
    return this.shManager.loadShader(type2, props);
  }
  createNode(props) {
    const resolvedProps = this.resolveNodeDefaults(props);
    return new CoreNode(this, resolvedProps);
  }
  createTextNode(props) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
    const fontSize = (_a2 = props.fontSize) != null ? _a2 : 16;
    const resolvedProps = {
      ...this.resolveNodeDefaults(props),
      text: (_b = props.text) != null ? _b : "",
      textRendererOverride: (_c = props.textRendererOverride) != null ? _c : null,
      fontSize,
      fontFamily: (_d = props.fontFamily) != null ? _d : "sans-serif",
      fontStyle: (_e = props.fontStyle) != null ? _e : "normal",
      fontWeight: (_f = props.fontWeight) != null ? _f : "normal",
      fontStretch: (_g = props.fontStretch) != null ? _g : "normal",
      textAlign: (_h = props.textAlign) != null ? _h : "left",
      contain: (_i = props.contain) != null ? _i : "none",
      scrollable: (_j = props.scrollable) != null ? _j : false,
      scrollY: (_k = props.scrollY) != null ? _k : 0,
      offsetY: (_l = props.offsetY) != null ? _l : 0,
      letterSpacing: (_m = props.letterSpacing) != null ? _m : 0,
      lineHeight: props.lineHeight,
      maxLines: (_n = props.maxLines) != null ? _n : 0,
      textBaseline: (_o = props.textBaseline) != null ? _o : "alphabetic",
      verticalAlign: (_p = props.verticalAlign) != null ? _p : "middle",
      overflowSuffix: (_q = props.overflowSuffix) != null ? _q : "...",
      debug: (_r = props.debug) != null ? _r : {},
      shaderProps: null
    };
    const resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, props.textRendererOverride);
    if (!resolvedTextRenderer) {
      throw new Error("No compatible text renderer found for ".concat(resolvedProps.fontFamily));
    }
    return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
  }
  /**
   * Resolves the default property values for a Node
   *
   * @remarks
   * This method is used internally by the RendererMain to resolve the default
   * property values for a Node. It is exposed publicly so that it can be used
   * by Core Driver implementations.
   *
   * @param props
   * @returns
   */
  resolveNodeDefaults(props) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X;
    const color = (_a2 = props.color) != null ? _a2 : 4294967295;
    const colorTl = (_d = (_c = (_b = props.colorTl) != null ? _b : props.colorTop) != null ? _c : props.colorLeft) != null ? _d : color;
    const colorTr = (_g = (_f = (_e = props.colorTr) != null ? _e : props.colorTop) != null ? _f : props.colorRight) != null ? _g : color;
    const colorBl = (_j = (_i = (_h = props.colorBl) != null ? _h : props.colorBottom) != null ? _i : props.colorLeft) != null ? _j : color;
    const colorBr = (_m = (_l = (_k = props.colorBr) != null ? _k : props.colorBottom) != null ? _l : props.colorRight) != null ? _m : color;
    const data = santizeCustomDataMap((_n = props.data) != null ? _n : {});
    return {
      x: (_o = props.x) != null ? _o : 0,
      y: (_p = props.y) != null ? _p : 0,
      width: (_q = props.width) != null ? _q : 0,
      height: (_r = props.height) != null ? _r : 0,
      alpha: (_s = props.alpha) != null ? _s : 1,
      autosize: (_t = props.autosize) != null ? _t : false,
      clipping: (_u = props.clipping) != null ? _u : false,
      color,
      colorTop: (_v = props.colorTop) != null ? _v : color,
      colorBottom: (_w = props.colorBottom) != null ? _w : color,
      colorLeft: (_x = props.colorLeft) != null ? _x : color,
      colorRight: (_y = props.colorRight) != null ? _y : color,
      colorBl,
      colorBr,
      colorTl,
      colorTr,
      zIndex: (_z = props.zIndex) != null ? _z : 0,
      zIndexLocked: (_A = props.zIndexLocked) != null ? _A : 0,
      parent: (_B = props.parent) != null ? _B : null,
      texture: (_C = props.texture) != null ? _C : null,
      textureOptions: (_D = props.textureOptions) != null ? _D : {},
      shader: (_E = props.shader) != null ? _E : this.defShaderCtr,
      // Since setting the `src` will trigger a texture load, we need to set it after
      // we set the texture. Otherwise, problems happen.
      src: (_F = props.src) != null ? _F : null,
      srcHeight: props.srcHeight,
      srcWidth: props.srcWidth,
      srcX: props.srcX,
      srcY: props.srcY,
      scale: (_G = props.scale) != null ? _G : null,
      scaleX: (_I = (_H = props.scaleX) != null ? _H : props.scale) != null ? _I : 1,
      scaleY: (_K = (_J = props.scaleY) != null ? _J : props.scale) != null ? _K : 1,
      mount: (_L = props.mount) != null ? _L : 0,
      mountX: (_N = (_M = props.mountX) != null ? _M : props.mount) != null ? _N : 0,
      mountY: (_P = (_O = props.mountY) != null ? _O : props.mount) != null ? _P : 0,
      pivot: (_Q = props.pivot) != null ? _Q : 0.5,
      pivotX: (_S = (_R = props.pivotX) != null ? _R : props.pivot) != null ? _S : 0.5,
      pivotY: (_U = (_T = props.pivotY) != null ? _T : props.pivot) != null ? _U : 0.5,
      rotation: (_V = props.rotation) != null ? _V : 0,
      rtt: (_W = props.rtt) != null ? _W : false,
      data,
      preventCleanup: (_X = props.preventCleanup) != null ? _X : false,
      imageType: props.imageType
    };
  }
}
class RendererMain extends EventEmitter {
  /**
   * Constructs a new Renderer instance
   *
   * @param settings Renderer settings
   * @param target Element ID or HTMLElement to insert the canvas into
   * @param driver Core Driver to use
   */
  constructor(settings, target) {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    super();
    __publicField(this, "root");
    __publicField(this, "canvas");
    __publicField(this, "settings");
    __publicField(this, "stage");
    __publicField(this, "inspector", null);
    const resolvedTxSettings = {
      criticalThreshold: ((_a2 = settings.textureMemory) == null ? void 0 : _a2.criticalThreshold) || 124e6,
      targetThresholdLevel: ((_b = settings.textureMemory) == null ? void 0 : _b.targetThresholdLevel) || 0.5,
      cleanupInterval: ((_c = settings.textureMemory) == null ? void 0 : _c.cleanupInterval) || 3e4,
      debugLogging: ((_d = settings.textureMemory) == null ? void 0 : _d.debugLogging) || false
    };
    const resolvedSettings = {
      appWidth: settings.appWidth || 1920,
      appHeight: settings.appHeight || 1080,
      textureMemory: resolvedTxSettings,
      boundsMargin: settings.boundsMargin || 0,
      deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
      devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || window.devicePixelRatio,
      clearColor: (_e = settings.clearColor) != null ? _e : 0,
      fpsUpdateInterval: settings.fpsUpdateInterval || 0,
      numImageWorkers: settings.numImageWorkers !== void 0 ? settings.numImageWorkers : 2,
      enableContextSpy: (_f = settings.enableContextSpy) != null ? _f : false,
      inspector: (_g = settings.inspector) != null ? _g : false,
      renderEngine: settings.renderEngine,
      quadBufferSize: (_h = settings.quadBufferSize) != null ? _h : 4 * 1024 * 1024,
      fontEngines: settings.fontEngines
    };
    this.settings = resolvedSettings;
    const { appWidth: appWidth2, appHeight: appHeight2, deviceLogicalPixelRatio, devicePhysicalPixelRatio, inspector } = resolvedSettings;
    const deviceLogicalWidth = appWidth2 * deviceLogicalPixelRatio;
    const deviceLogicalHeight = appHeight2 * deviceLogicalPixelRatio;
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
    canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
    canvas.style.width = "".concat(deviceLogicalWidth, "px");
    canvas.style.height = "".concat(deviceLogicalHeight, "px");
    this.stage = new Stage({
      appWidth: this.settings.appWidth,
      appHeight: this.settings.appHeight,
      boundsMargin: this.settings.boundsMargin,
      clearColor: this.settings.clearColor,
      canvas: this.canvas,
      deviceLogicalPixelRatio: this.settings.deviceLogicalPixelRatio,
      devicePhysicalPixelRatio: this.settings.devicePhysicalPixelRatio,
      enableContextSpy: this.settings.enableContextSpy,
      fpsUpdateInterval: this.settings.fpsUpdateInterval,
      numImageWorkers: this.settings.numImageWorkers,
      renderEngine: this.settings.renderEngine,
      textureMemory: resolvedTxSettings,
      eventBus: this,
      quadBufferSize: this.settings.quadBufferSize,
      fontEngines: this.settings.fontEngines
    });
    this.root = this.stage.root;
    let targetEl;
    if (typeof target === "string") {
      targetEl = document.getElementById(target);
    } else {
      targetEl = target;
    }
    if (!targetEl) {
      throw new Error("Could not find target element");
    }
    targetEl.appendChild(canvas);
    if (inspector && !isProductionEnvironment()) {
      this.inspector = new inspector(canvas, resolvedSettings);
    }
  }
  /**
   * Create a new scene graph node
   *
   * @remarks
   * A node is the main graphical building block of the Renderer scene graph. It
   * can be a container for other nodes, or it can be a leaf node that renders a
   * solid color, gradient, image, or specific texture, using a specific shader.
   *
   * To create a text node, see {@link createTextNode}.
   *
   * See {@link CoreNode} for more details.
   *
   * @param props
   * @returns
   */
  createNode(props) {
    assertTruthy(this.stage, "Stage is not initialized");
    const node = this.stage.createNode(props);
    if (this.inspector) {
      return this.inspector.createNode(node);
    }
    return node;
  }
  /**
   * Create a new scene graph text node
   *
   * @remarks
   * A text node is the second graphical building block of the Renderer scene
   * graph. It renders text using a specific text renderer that is automatically
   * chosen based on the font requested and what type of fonts are installed
   * into an app.
   *
   * See {@link ITextNode} for more details.
   *
   * @param props
   * @returns
   */
  createTextNode(props) {
    const textNode = this.stage.createTextNode(props);
    if (this.inspector) {
      return this.inspector.createTextNode(textNode);
    }
    return textNode;
  }
  /**
   * Destroy a node
   *
   * @remarks
   * This method destroys a node
   *
   * @param node
   * @returns
   */
  destroyNode(node) {
    if (this.inspector) {
      this.inspector.destroyNode(node.id);
    }
    return node.destroy();
  }
  /**
   * Create a new texture reference
   *
   * @remarks
   * This method creates a new reference to a texture. The texture is not
   * loaded until it is used on a node.
   *
   * It can be assigned to a node's `texture` property, or it can be used
   * when creating a SubTexture.
   *
   * @param textureType
   * @param props
   * @param options
   * @returns
   */
  createTexture(textureType, props) {
    return this.stage.txManager.loadTexture(textureType, props);
  }
  /**
   * Create a new shader controller for a shader type
   *
   * @remarks
   * This method creates a new Shader Controller for a specific shader type.
   *
   * If the shader has not been loaded yet, it will be loaded. Otherwise, the
   * existing shader will be reused.
   *
   * It can be assigned to a Node's `shader` property.
   *
   * @param shaderType
   * @param props
   * @returns
   */
  createShader(shaderType, props) {
    return this.stage.shManager.loadShader(shaderType, props);
  }
  /**
   * Create a new Dynamic Shader controller
   *
   * @remarks
   * A Dynamic Shader is a shader that can be composed of an array of mulitple
   * effects. Each effect can be animated or changed after creation (provided
   * the effect is given a name).
   *
   * Example:
   * ```ts
   * renderer.createNode({
   *   shader: renderer.createDynamicShader([
   *     renderer.createEffect('radius', {
   *       radius: 0
   *     }, 'effect1'),
   *     renderer.createEffect('border', {
   *       color: 0xff00ffff,
   *       width: 10,
   *     }, 'effect2'),
   *   ]),
   * });
   * ```
   *
   * @param effects
   * @returns
   */
  createDynamicShader(effects) {
    return this.stage.shManager.loadDynamicShader({
      effects
    });
  }
  /**
   * Create an effect to be used in a Dynamic Shader
   *
   * @remark
   * The {name} parameter is optional but required if you want to animate the effect
   * or change the effect's properties after creation.
   *
   * See {@link createDynamicShader} for an example.
   *
   * @param type
   * @param props
   * @param name
   * @returns
   */
  createEffect(type2, props, name) {
    return {
      name,
      type: type2,
      props
    };
  }
  /**
   * Get a Node by its ID
   *
   * @param id
   * @returns
   */
  getNodeById(id) {
    var _a2;
    const root2 = (_a2 = this.stage) == null ? void 0 : _a2.root;
    if (!root2) {
      return null;
    }
    const findNode = (node) => {
      if (node.id === id) {
        return node;
      }
      for (const child of node.children) {
        const found = findNode(child);
        if (found) {
          return found;
        }
      }
      return null;
    };
    return findNode(root2);
  }
  toggleFreeze() {
    throw new Error("Not implemented");
  }
  advanceFrame() {
    throw new Error("Not implemented");
  }
  getBufferInfo() {
    return this.stage.renderer.getBufferInfo();
  }
  /**
   * Re-render the current frame without advancing any running animations.
   *
   * @remarks
   * Any state changes will be reflected in the re-rendered frame. Useful for
   * debugging.
   *
   * May not do anything if the render loop is running on a separate worker.
   */
  rerender() {
    throw new Error("Not implemented");
  }
}
class TrFontFace extends EventEmitter {
  constructor(options) {
    super();
    __publicField(this, "fontFamily");
    __publicField(this, "descriptors");
    __publicField(this, "loaded", false);
    __publicField(this, "metrics", null);
    const { fontFamily, descriptors, metrics } = options;
    if (metrics) {
      this.metrics = {
        ascender: metrics.ascender / metrics.unitsPerEm,
        descender: metrics.descender / metrics.unitsPerEm,
        lineGap: metrics.lineGap / metrics.unitsPerEm
      };
    }
    this.fontFamily = fontFamily;
    this.descriptors = {
      style: "normal",
      weight: "normal",
      stretch: "normal",
      ...descriptors
    };
  }
  /**
   * Convert a TrFontFaceDescriptors to a FontFaceDescriptors which differ slightly
   *
   * @param descriptors
   * @returns
   */
  static convertToCssFontFaceDescriptors(descriptors) {
    return {
      style: descriptors.style,
      weight: typeof descriptors.weight === "number" ? "".concat(descriptors.weight) : descriptors.weight,
      stretch: descriptors.stretch,
      unicodeRange: descriptors.unicodeRange,
      featureSettings: descriptors.featureSettings,
      display: descriptors.display
    };
  }
}
class WebTrFontFace extends TrFontFace {
  constructor(options) {
    super(options);
    __publicField(this, "fontFace");
    __publicField(this, "fontUrl");
    const { fontFamily, fontUrl } = options;
    const fontUrlWithoutParentheses = fontUrl.replace(/\(|\)/g, "");
    const determinedDescriptors = this.descriptors;
    const cssDescriptors = {
      style: determinedDescriptors.style,
      weight: typeof determinedDescriptors.weight === "number" ? "".concat(determinedDescriptors.weight) : determinedDescriptors.weight,
      stretch: determinedDescriptors.stretch,
      unicodeRange: determinedDescriptors.unicodeRange,
      featureSettings: determinedDescriptors.featureSettings,
      display: determinedDescriptors.display
    };
    const fontFace = new FontFace(fontFamily, "url(".concat(fontUrlWithoutParentheses, ")"), cssDescriptors);
    if (fontUrlWithoutParentheses.length > 0) {
      fontFace.load().then(() => {
        this.loaded = true;
        this.emit("loaded");
      }).catch(console.error);
    } else {
      this.loaded = true;
      this.emit("loaded");
    }
    this.fontFace = fontFace;
    this.fontUrl = fontUrl;
  }
}
class CoreRenderOp {
}
class WebGlCoreRenderOp extends CoreRenderOp {
  constructor(glw, options, buffers, shader, shaderProps, alpha, clippingRect, dimensions, bufferIdx, zIndex, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
    super();
    __publicField(this, "glw");
    __publicField(this, "options");
    __publicField(this, "buffers");
    __publicField(this, "shader");
    __publicField(this, "shaderProps");
    __publicField(this, "alpha");
    __publicField(this, "clippingRect");
    __publicField(this, "dimensions");
    __publicField(this, "bufferIdx");
    __publicField(this, "zIndex");
    __publicField(this, "renderToTexture");
    __publicField(this, "parentHasRenderTexture");
    __publicField(this, "framebufferDimensions");
    __publicField(this, "length", 0);
    __publicField(this, "numQuads", 0);
    __publicField(this, "textures", []);
    __publicField(this, "maxTextures");
    this.glw = glw;
    this.options = options;
    this.buffers = buffers;
    this.shader = shader;
    this.shaderProps = shaderProps;
    this.alpha = alpha;
    this.clippingRect = clippingRect;
    this.dimensions = dimensions;
    this.bufferIdx = bufferIdx;
    this.zIndex = zIndex;
    this.renderToTexture = renderToTexture;
    this.parentHasRenderTexture = parentHasRenderTexture;
    this.framebufferDimensions = framebufferDimensions;
    this.maxTextures = shader.supportsIndexedTextures ? glw.getParameter(glw.MAX_VERTEX_TEXTURE_IMAGE_UNITS) : 1;
  }
  addTexture(texture) {
    const { textures, maxTextures } = this;
    const existingIdx = textures.findIndex((t) => t === texture);
    if (existingIdx !== -1) {
      return existingIdx;
    }
    const newIdx = textures.length;
    if (newIdx >= maxTextures) {
      return 4294967295;
    }
    this.textures.push(texture);
    return newIdx;
  }
  draw() {
    const { glw, shader, shaderProps, options } = this;
    const { shManager } = options;
    shManager.useShader(shader);
    shader.bindRenderOp(this, shaderProps);
    const quadIdx = this.bufferIdx / 24 * 6 * 2;
    if (this.clippingRect.valid) {
      const { x, y, width, height } = this.clippingRect;
      const pixelRatio = options.pixelRatio;
      const canvasHeight = options.canvas.height;
      const clipX = Math.round(x * pixelRatio);
      const clipWidth = Math.round(width * pixelRatio);
      const clipHeight = Math.round(height * pixelRatio);
      const clipY = Math.round(canvasHeight - clipHeight - y * pixelRatio);
      glw.setScissorTest(true);
      glw.scissor(clipX, clipY, clipWidth, clipHeight);
    } else {
      glw.setScissorTest(false);
    }
    glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
  }
}
function getWebGlParameters(glw) {
  const params = {
    MAX_RENDERBUFFER_SIZE: 0,
    MAX_TEXTURE_SIZE: 0,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    MAX_VIEWPORT_DIMS: 0,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
    MAX_TEXTURE_IMAGE_UNITS: 0,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
    MAX_VERTEX_ATTRIBS: 0,
    MAX_VARYING_VECTORS: 0,
    MAX_VERTEX_UNIFORM_VECTORS: 0,
    MAX_FRAGMENT_UNIFORM_VECTORS: 0
  };
  const keys = Object.keys(params);
  keys.forEach((key) => {
    params[key] = glw.getParameter(glw[key]);
  });
  return params;
}
function getWebGlExtensions(glw) {
  const extensions = {
    ANGLE_instanced_arrays: null,
    WEBGL_compressed_texture_s3tc: null,
    WEBGL_compressed_texture_astc: null,
    WEBGL_compressed_texture_etc: null,
    WEBGL_compressed_texture_etc1: null,
    WEBGL_compressed_texture_pvrtc: null,
    WEBKIT_WEBGL_compressed_texture_pvrtc: null,
    WEBGL_compressed_texture_s3tc_srgb: null,
    OES_vertex_array_object: null
  };
  const keys = Object.keys(extensions);
  keys.forEach((key) => {
    extensions[key] = glw.getExtension(key);
  });
  return extensions;
}
function createIndexBuffer(glw, size) {
  const maxQuads = ~~(size / 80);
  const indices = new Uint16Array(maxQuads * 6);
  for (let i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
    indices[i] = j;
    indices[i + 1] = j + 1;
    indices[i + 2] = j + 2;
    indices[i + 3] = j + 2;
    indices[i + 4] = j + 1;
    indices[i + 5] = j + 3;
  }
  const buffer = glw.createBuffer();
  glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
}
function isHTMLImageElement(obj2) {
  return obj2 !== null && typeof obj2 === "object" && obj2.constructor && obj2.constructor.name === "HTMLImageElement";
}
const TRANSPARENT_TEXTURE_DATA = new Uint8Array([0, 0, 0, 0]);
class WebGlCoreCtxTexture extends CoreContextTexture {
  constructor(glw, memManager, textureSource) {
    super(memManager, textureSource);
    __publicField(this, "glw");
    __publicField(this, "_nativeCtxTexture", null);
    __publicField(this, "_state", "freed");
    __publicField(this, "_w", 0);
    __publicField(this, "_h", 0);
    this.glw = glw;
  }
  get ctxTexture() {
    if (this._state === "freed") {
      this.load();
    }
    assertTruthy(this._nativeCtxTexture);
    return this._nativeCtxTexture;
  }
  get w() {
    return this._w;
  }
  get h() {
    return this._h;
  }
  /**
   * Load the texture data from the Texture source and upload it to the GPU
   *
   * @remarks
   * This method is called automatically when accessing the ctxTexture property
   * if the texture hasn't been loaded yet. But it can also be called manually
   * to force the texture to be pre-loaded prior to accessing the ctxTexture
   * property.
   */
  load() {
    if (this._state === "loading" || this._state === "loaded") {
      return;
    }
    this._state = "loading";
    this.textureSource.setState("loading");
    this._nativeCtxTexture = this.createNativeCtxTexture();
    this.onLoadRequest().then(({ width, height }) => {
      if (this._state === "freed") {
        return;
      }
      this._state = "loaded";
      this._w = width;
      this._h = height;
      this.textureSource.setState("loaded", { width, height });
    }).catch((err) => {
      if (this._state === "freed") {
        return;
      }
      this._state = "failed";
      this.textureSource.setState("failed", err);
      console.error(err);
    });
  }
  /**
   * Called when the texture data needs to be loaded and uploaded to a texture
   */
  async onLoadRequest() {
    var _a2, _b;
    const { glw } = this;
    glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
    this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
    const textureData = await ((_a2 = this.textureSource) == null ? void 0 : _a2.getTextureData());
    if (!this._nativeCtxTexture) {
      assertTruthy(this._state === "freed");
      return { width: 0, height: 0 };
    }
    let width = 0;
    let height = 0;
    assertTruthy(this._nativeCtxTexture);
    glw.activeTexture(0);
    if (textureData.data instanceof ImageBitmap || textureData.data instanceof ImageData || // not using typeof HTMLImageElement due to web worker
    isHTMLImageElement(textureData.data)) {
      const data = textureData.data;
      width = data.width;
      height = data.height;
      glw.bindTexture(this._nativeCtxTexture);
      glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
      glw.texImage2D(0, glw.RGBA, glw.RGBA, glw.UNSIGNED_BYTE, data);
      this.setTextureMemUse(width * height * 4);
      if (glw.isWebGl2() || isPowerOfTwo(width) && isPowerOfTwo(height)) {
        glw.generateMipmap();
      }
    } else if (textureData.data === null) {
      width = 0;
      height = 0;
      glw.bindTexture(this._nativeCtxTexture);
      glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
      this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
    } else if ("mipmaps" in textureData.data && textureData.data.mipmaps) {
      const { mipmaps, width: width2 = 0, height: height2 = 0, type: type2, glInternalFormat } = textureData.data;
      const view = type2 === "ktx" ? new DataView((_b = mipmaps[0]) != null ? _b : new ArrayBuffer(0)) : mipmaps[0];
      glw.bindTexture(this._nativeCtxTexture);
      glw.compressedTexImage2D(0, glInternalFormat, width2, height2, 0, view);
      glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
      glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
      glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
      glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
      this.setTextureMemUse(view.byteLength);
    } else {
      console.error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned", textureData);
    }
    return {
      width,
      height
    };
  }
  /**
   * Free the WebGLTexture from the GPU
   *
   * @returns
   */
  free() {
    if (this._state === "freed") {
      return;
    }
    this._state = "freed";
    this.textureSource.setState("freed");
    this._w = 0;
    this._h = 0;
    if (!this._nativeCtxTexture) {
      return;
    }
    const { glw } = this;
    glw.deleteTexture(this._nativeCtxTexture);
    this.setTextureMemUse(0);
    this._nativeCtxTexture = null;
  }
  /**
   * Create native context texture
   *
   * @remarks
   * When this method returns the returned texture will be bound to the GL context state.
   *
   * @param width
   * @param height
   * @returns
   */
  createNativeCtxTexture() {
    const { glw } = this;
    const nativeTexture = glw.createTexture();
    if (!nativeTexture) {
      throw new Error("Could not create WebGL Texture");
    }
    glw.activeTexture(0);
    glw.bindTexture(nativeTexture);
    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
    return nativeTexture;
  }
}
class WebGlCoreCtxSubTexture extends WebGlCoreCtxTexture {
  constructor(glw, memManager, textureSource) {
    super(glw, memManager, textureSource);
  }
  async onLoadRequest() {
    var _a2, _b;
    const props = await this.textureSource.getTextureData();
    return {
      width: ((_a2 = props.data) == null ? void 0 : _a2.width) || 0,
      height: ((_b = props.data) == null ? void 0 : _b.height) || 0
    };
  }
}
class BufferCollection {
  constructor(config) {
    __publicField(this, "config");
    this.config = config;
  }
  /**
   * Get the WebGLBuffer associated with the given attribute name if it exists.
   *
   * @param attributeName
   * @returns
   */
  getBuffer(attributeName) {
    var _a2;
    return (_a2 = this.config.find((item) => item.attributes[attributeName])) == null ? void 0 : _a2.buffer;
  }
  /**
   * Get the AttributeInfo associated with the given attribute name if it exists.
   *
   * @param attributeName
   * @returns
   */
  getAttributeInfo(attributeName) {
    var _a2;
    return (_a2 = this.config.find((item) => item.attributes[attributeName])) == null ? void 0 : _a2.attributes[attributeName];
  }
}
function isWebGl2(gl) {
  return self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext;
}
class WebGlContextWrapper {
  //#endregion WebGL Enums
  constructor(gl) {
    __publicField(this, "gl");
    //#region Cached WebGL State
    __publicField(this, "activeTextureUnit", 0);
    __publicField(this, "texture2dUnits");
    __publicField(this, "texture2dParams", /* @__PURE__ */ new WeakMap());
    __publicField(this, "scissorEnabled");
    __publicField(this, "scissorX");
    __publicField(this, "scissorY");
    __publicField(this, "scissorWidth");
    __publicField(this, "scissorHeight");
    __publicField(this, "blendEnabled");
    __publicField(this, "blendSrcRgb");
    __publicField(this, "blendDstRgb");
    __publicField(this, "blendSrcAlpha");
    __publicField(this, "blendDstAlpha");
    __publicField(this, "boundArrayBuffer");
    __publicField(this, "boundElementArrayBuffer");
    __publicField(this, "curProgram");
    __publicField(this, "programUniforms", /* @__PURE__ */ new WeakMap());
    //#endregion Cached WebGL State
    //#region Canvas
    __publicField(this, "canvas");
    //#endregion Canvas
    //#region WebGL Enums
    __publicField(this, "MAX_RENDERBUFFER_SIZE");
    __publicField(this, "MAX_TEXTURE_SIZE");
    __publicField(this, "MAX_VIEWPORT_DIMS");
    __publicField(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS");
    __publicField(this, "MAX_VERTEX_ATTRIBS");
    __publicField(this, "MAX_VARYING_VECTORS");
    __publicField(this, "MAX_VERTEX_UNIFORM_VECTORS");
    __publicField(this, "MAX_FRAGMENT_UNIFORM_VECTORS");
    __publicField(this, "TEXTURE_MAG_FILTER");
    __publicField(this, "TEXTURE_MIN_FILTER");
    __publicField(this, "TEXTURE_WRAP_S");
    __publicField(this, "TEXTURE_WRAP_T");
    __publicField(this, "LINEAR");
    __publicField(this, "CLAMP_TO_EDGE");
    __publicField(this, "RGBA");
    __publicField(this, "UNSIGNED_BYTE");
    __publicField(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL");
    __publicField(this, "UNPACK_FLIP_Y_WEBGL");
    __publicField(this, "FLOAT");
    __publicField(this, "TRIANGLES");
    __publicField(this, "UNSIGNED_SHORT");
    __publicField(this, "ONE");
    __publicField(this, "ONE_MINUS_SRC_ALPHA");
    __publicField(this, "VERTEX_SHADER");
    __publicField(this, "FRAGMENT_SHADER");
    __publicField(this, "STATIC_DRAW");
    __publicField(this, "COMPILE_STATUS");
    __publicField(this, "LINK_STATUS");
    __publicField(this, "DYNAMIC_DRAW");
    __publicField(this, "COLOR_ATTACHMENT0");
    this.gl = gl;
    this.activeTextureUnit = gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0;
    const maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    this.texture2dUnits = new Array(maxTextureUnits).fill(void 0).map((_, i) => {
      this.activeTexture(i);
      return gl.getParameter(gl.TEXTURE_BINDING_2D);
    });
    this.activeTexture(this.activeTextureUnit);
    this.scissorEnabled = gl.isEnabled(gl.SCISSOR_TEST);
    const scissorBox = gl.getParameter(gl.SCISSOR_BOX);
    this.scissorX = scissorBox[0];
    this.scissorY = scissorBox[1];
    this.scissorWidth = scissorBox[2];
    this.scissorHeight = scissorBox[3];
    this.blendEnabled = gl.isEnabled(gl.BLEND);
    this.blendSrcRgb = gl.getParameter(gl.BLEND_SRC_RGB);
    this.blendDstRgb = gl.getParameter(gl.BLEND_DST_RGB);
    this.blendSrcAlpha = gl.getParameter(gl.BLEND_SRC_ALPHA);
    this.blendDstAlpha = gl.getParameter(gl.BLEND_DST_ALPHA);
    this.boundArrayBuffer = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
    this.boundElementArrayBuffer = gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
    this.curProgram = gl.getParameter(gl.CURRENT_PROGRAM);
    this.canvas = gl.canvas;
    this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
    this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
    this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
    this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
    this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
    this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
    this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
    this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
    this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
    this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
    this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
    this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
    this.LINEAR = gl.LINEAR;
    this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
    this.RGBA = gl.RGBA;
    this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
    this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
    this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
    this.FLOAT = gl.FLOAT;
    this.TRIANGLES = gl.TRIANGLES;
    this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    this.ONE = gl.ONE;
    this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    this.TRIANGLES = gl.TRIANGLES;
    this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    this.VERTEX_SHADER = gl.VERTEX_SHADER;
    this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
    this.STATIC_DRAW = gl.STATIC_DRAW;
    this.COMPILE_STATUS = gl.COMPILE_STATUS;
    this.LINK_STATUS = gl.LINK_STATUS;
    this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
    this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
  }
  /**
   * Returns true if the WebGL context is WebGL2
   *
   * @returns
   */
  isWebGl2() {
    return isWebGl2(this.gl);
  }
  /**
   * ```
   * gl.activeTexture(textureUnit + gl.TEXTURE0);
   * ```
   *
   * @remarks
   * **WebGL Difference**: `textureUnit` is based from 0, not `gl.TEXTURE0`.
   *
   * @param textureUnit
   */
  activeTexture(textureUnit) {
    const { gl } = this;
    if (this.activeTextureUnit !== textureUnit) {
      gl.activeTexture(textureUnit + gl.TEXTURE0);
      this.activeTextureUnit = textureUnit;
    }
  }
  /**
   * ```
   * gl.bindTexture(gl.TEXTURE_2D, texture);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   *
   * @param texture
   */
  bindTexture(texture) {
    const { gl, activeTextureUnit, texture2dUnits } = this;
    if (texture2dUnits[activeTextureUnit] === texture) {
      return;
    }
    texture2dUnits[activeTextureUnit] = texture;
    gl.bindTexture(this.gl.TEXTURE_2D, texture);
  }
  _getActiveTexture() {
    const { activeTextureUnit, texture2dUnits } = this;
    return texture2dUnits[activeTextureUnit];
  }
  /**
   * ```
   * gl.texParameteri(gl.TEXTURE_2D, pname, param);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   *
   * @param pname
   * @param param
   * @returns
   */
  texParameteri(pname, param) {
    const { gl, texture2dParams } = this;
    const activeTexture = this._getActiveTexture();
    if (!activeTexture) {
      throw new Error("No active texture");
    }
    let textureParams = texture2dParams.get(activeTexture);
    if (!textureParams) {
      textureParams = {};
      texture2dParams.set(activeTexture, textureParams);
    }
    if (textureParams[pname] === param) {
      return;
    }
    textureParams[pname] = param;
    gl.texParameteri(gl.TEXTURE_2D, pname, param);
  }
  texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format2, type2, pixels) {
    const { gl } = this;
    if (format2) {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format2, type2, pixels);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
    }
  }
  /**
   * ```
   * gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, data);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   */
  compressedTexImage2D(level, internalformat, width, height, border, data) {
    const { gl } = this;
    gl.compressedTexImage2D(gl.TEXTURE_2D, level, internalformat, width, height, border, data);
  }
  /**
   * ```
   * gl.pixelStorei(pname, param);
   * ```
   *
   * @param pname
   * @param param
   */
  pixelStorei(pname, param) {
    const { gl } = this;
    gl.pixelStorei(pname, param);
  }
  /**
   * ```
   * gl.generateMipmap(gl.TEXTURE_2D);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.TEXTURE_2D`
   */
  generateMipmap() {
    const { gl } = this;
    gl.generateMipmap(gl.TEXTURE_2D);
  }
  /**
   * ```
   * gl.createTexture();
   * ```
   *
   * @returns
   */
  createTexture() {
    const { gl } = this;
    return gl.createTexture();
  }
  /**
   * ```
   * gl.deleteTexture(texture);
   * ```
   *
   * @param texture
   */
  deleteTexture(texture) {
    const { gl } = this;
    if (texture) {
      this.texture2dParams.delete(texture);
    }
    gl.deleteTexture(texture);
  }
  /**
   * ```
   * gl.viewport(x, y, width, height);
   * ```
   */
  viewport(x, y, width, height) {
    const { gl } = this;
    gl.viewport(x, y, width, height);
  }
  /**
   * ```
   * gl.clearColor(red, green, blue, alpha);
   * ```
   *
   * @param red
   * @param green
   * @param blue
   * @param alpha
   */
  clearColor(red, green, blue, alpha) {
    const { gl } = this;
    gl.clearColor(red, green, blue, alpha);
  }
  /**
   * ```
   * gl["enable"|"disable"](gl.SCISSOR_TEST);
   * ```
   * @param enable
   */
  setScissorTest(enable) {
    const { gl, scissorEnabled } = this;
    if (enable === scissorEnabled) {
      return;
    }
    if (enable) {
      gl.enable(gl.SCISSOR_TEST);
    } else {
      gl.disable(gl.SCISSOR_TEST);
    }
    this.scissorEnabled = enable;
  }
  /**
   * ```
   * gl.scissor(x, y, width, height);
   * ```
   *
   * @param x
   * @param y
   * @param width
   * @param height
   */
  scissor(x, y, width, height) {
    const { gl, scissorX, scissorY, scissorWidth, scissorHeight } = this;
    if (x !== scissorX || y !== scissorY || width !== scissorWidth || height !== scissorHeight) {
      gl.scissor(x, y, width, height);
      this.scissorX = x;
      this.scissorY = y;
      this.scissorWidth = width;
      this.scissorHeight = height;
    }
  }
  /**
   * ```
   * gl["enable"|"disable"](gl.BLEND);
   * ```
   *
   * @param blend
   * @returns
   */
  setBlend(blend) {
    const { gl, blendEnabled } = this;
    if (blend === blendEnabled) {
      return;
    }
    if (blend) {
      gl.enable(gl.BLEND);
    } else {
      gl.disable(gl.BLEND);
    }
    this.blendEnabled = blend;
  }
  /**
   * ```
   * gl.blendFunc(src, dst);
   * ```
   *
   * @param src
   * @param dst
   */
  blendFunc(src, dst) {
    const { gl, blendSrcRgb, blendDstRgb, blendSrcAlpha, blendDstAlpha } = this;
    if (src !== blendSrcRgb || dst !== blendDstRgb || src !== blendSrcAlpha || dst !== blendDstAlpha) {
      gl.blendFunc(src, dst);
      this.blendSrcRgb = src;
      this.blendDstRgb = dst;
      this.blendSrcAlpha = src;
      this.blendDstAlpha = dst;
    }
  }
  /**
   * ```
   * gl.createBuffer();
   * ```
   *
   * @returns
   */
  createBuffer() {
    const { gl } = this;
    return gl.createBuffer();
  }
  /**
   * ```
   * gl.createFramebuffer();
   * ```
   * @returns
   */
  createFramebuffer() {
    const { gl } = this;
    return gl.createFramebuffer();
  }
  /**
   * ```
   * gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
   * ```
   *
   * @param framebuffer
   */
  bindFramebuffer(framebuffer) {
    const { gl } = this;
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  }
  /**
   * ```
   * gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
   * ```
   * @remarks
   * **WebGL Difference**: Bind target is always `gl.FRAMEBUFFER` and textarget is always `gl.TEXTURE_2D`
   */
  framebufferTexture2D(attachment, texture, level) {
    const { gl } = this;
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
  }
  /**
   * ```
   * gl.clear(gl.COLOR_BUFFER_BIT);
   * ```
   *
   * @remarks
   * **WebGL Difference**: Clear mask is always `gl.COLOR_BUFFER_BIT`
   */
  clear() {
    const { gl } = this;
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
   * gl.bufferData(gl.ARRAY_BUFFER, data, usage);
   * ```
   *
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
   *
   * @param buffer
   * @param data
   * @param usage
   */
  arrayBufferData(buffer, data, usage) {
    const { gl, boundArrayBuffer } = this;
    if (boundArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      this.boundArrayBuffer = buffer;
    }
    gl.bufferData(gl.ARRAY_BUFFER, data, usage);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
   * gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
   * ```
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.bufferData` are combined into one function.
   *
   * @param buffer
   * @param data
   * @param usage
   */
  elementArrayBufferData(buffer, data, usage) {
    const { gl, boundElementArrayBuffer } = this;
    if (boundElementArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
      this.boundElementArrayBuffer = buffer;
    }
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, usage);
  }
  /**
   * ```
   * gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
   * gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
   * ```
   *
   * @remarks
   * **WebGL Combo**: `gl.bindBuffer` and `gl.vertexAttribPointer` are combined into one function.
   *
   * @param buffer
   * @param index
   * @param size
   * @param type
   * @param normalized
   * @param stride
   * @param offset
   */
  vertexAttribPointer(buffer, index, size, type2, normalized, stride, offset) {
    const { gl, boundArrayBuffer } = this;
    if (boundArrayBuffer !== buffer) {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      this.boundArrayBuffer = buffer;
    }
    gl.vertexAttribPointer(index, size, type2, normalized, stride, offset);
  }
  /**
   * ```
   * gl.useProgram(program);
   * ```
   *
   * @param program
   * @returns
   */
  useProgram(program) {
    const { gl, curProgram } = this;
    if (curProgram === program) {
      return;
    }
    gl.useProgram(program);
    this.curProgram = program;
  }
  setUniform(type2, location, ...args) {
    const { gl, programUniforms } = this;
    let uniforms = programUniforms.get(this.curProgram);
    if (!uniforms) {
      uniforms = /* @__PURE__ */ new Map();
      programUniforms.set(this.curProgram, uniforms);
    }
    const uniformArgs = uniforms.get(location);
    if (!uniformArgs || !compareArrays(uniformArgs, args)) {
      uniforms.set(location, args);
      gl[type2](location, ...args);
    }
  }
  /**
   * ```
   * gl.getParameter(pname);
   * ```
   *
   * @param pname
   * @returns
   */
  getParameter(pname) {
    const { gl } = this;
    return gl.getParameter(pname);
  }
  /**
   * ```
   * gl.drawElements(mode, count, type, offset);
   * ```
   *
   * @param mode
   * @param count
   * @param type
   * @param offset
   */
  drawElements(mode, count, type2, offset) {
    const { gl } = this;
    gl.drawElements(mode, count, type2, offset);
  }
  /**
   * ```
   * gl.drawArrays(mode, first, count);
   * ```
   *
   * @param name
   * @returns
   */
  getExtension(name) {
    const { gl } = this;
    return gl.getExtension(name);
  }
  /**
   * ```
   * gl.createVertexArray();
   * ```
   *
   * @returns
   */
  createVertexArray() {
    const { gl } = this;
    assertTruthy(gl instanceof WebGL2RenderingContext);
    return gl.createVertexArray();
  }
  /**
   * ```
   * gl.bindVertexArray(vertexArray);
   * ```
   *
   * @param vertexArray
   */
  bindVertexArray(vertexArray) {
    const { gl } = this;
    assertTruthy(gl instanceof WebGL2RenderingContext);
    gl.bindVertexArray(vertexArray);
  }
  /**
   * ```
   * gl.getAttribLocation(program, name);
   * ```
   *
   * @param program
   * @param name
   * @returns
   */
  getAttribLocation(program, name) {
    const { gl } = this;
    return gl.getAttribLocation(program, name);
  }
  /**
   * ```
   * gl.getUniformLocation(program, name);
   * ```
   *
   * @param program
   * @param name
   * @returns
   */
  getUniformLocation(program, name) {
    const { gl } = this;
    return gl.getUniformLocation(program, name);
  }
  /**
   * ```
   * gl.enableVertexAttribArray(index);
   * ```
   *
   * @param index
   */
  enableVertexAttribArray(index) {
    const { gl } = this;
    gl.enableVertexAttribArray(index);
  }
  /**
   * ```
   * gl.disableVertexAttribArray(index);
   * ```
   *
   * @param index
   */
  disableVertexAttribArray(index) {
    const { gl } = this;
    gl.disableVertexAttribArray(index);
  }
  /**
   * ```
   * gl.createShader(type);
   * ```
   *
   * @param type
   * @returns
   */
  createShader(type2) {
    const { gl } = this;
    return gl.createShader(type2);
  }
  /**
   * ```
   * gl.compileShader(shader);
   * ```
   *
   * @param shader
   * @returns
   */
  compileShader(shader) {
    const { gl } = this;
    gl.compileShader(shader);
  }
  /**
   * ```
   * gl.attachShader(program, shader);
   * ```
   *
   * @param program
   * @param shader
   */
  attachShader(program, shader) {
    const { gl } = this;
    gl.attachShader(program, shader);
  }
  /**
   * ```
   * gl.linkProgram(program);
   * ```
   *
   * @param program
   */
  linkProgram(program) {
    const { gl } = this;
    gl.linkProgram(program);
  }
  /**
   * ```
   * gl.deleteProgram(shader);
   * ```
   *
   * @param shader
   */
  deleteProgram(shader) {
    const { gl } = this;
    gl.deleteProgram(shader);
  }
  /**
   * ```
   * gl.getShaderParameter(shader, pname);
   * ```
   *
   * @param shader
   * @param pname
   */
  getShaderParameter(shader, pname) {
    const { gl } = this;
    return gl.getShaderParameter(shader, pname);
  }
  /**
   * ```
   * gl.getShaderInfoLog(shader);
   * ```
   *
   * @param shader
   */
  getShaderInfoLog(shader) {
    const { gl } = this;
    return gl.getShaderInfoLog(shader);
  }
  /**
   * ```
   * gl.createProgram();
   * ```
   *
   * @returns
   */
  createProgram() {
    const { gl } = this;
    return gl.createProgram();
  }
  /**
   * ```
   * gl.getProgramParameter(program, pname);
   * ```
   *
   * @param program
   * @param pname
   * @returns
   */
  getProgramParameter(program, pname) {
    const { gl } = this;
    return gl.getProgramParameter(program, pname);
  }
  /**
   * ```
   * gl.getProgramInfoLog(program);
   * ```
   *
   * @param program
   * @returns
   */
  getProgramInfoLog(program) {
    const { gl } = this;
    return gl.getProgramInfoLog(program);
  }
  /**
   * ```
   * gl.shaderSource(shader, source);
   * ```
   *
   * @param shader
   * @param source
   */
  shaderSource(shader, source) {
    const { gl } = this;
    gl.shaderSource(shader, source);
  }
  /**
   * ```
   * gl.deleteShader(shader);
   * ```
   *
   * @param shader
   */
  deleteShader(shader) {
    const { gl } = this;
    gl.deleteShader(shader);
  }
}
function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  return a.every((v, i) => {
    if (Array.isArray(v) || v instanceof Float32Array) {
      return false;
    } else {
      return v === b[i];
    }
  });
}
class WebGlCoreCtxRenderTexture extends WebGlCoreCtxTexture {
  constructor(glw, memManager, textureSource) {
    super(glw, memManager, textureSource);
    __publicField(this, "framebuffer");
    const framebuffer = glw.createFramebuffer();
    assertTruthy(framebuffer, "Unable to create framebuffer");
    this.framebuffer = framebuffer;
  }
  async onLoadRequest() {
    const { glw } = this;
    const nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture();
    const { width, height } = this.textureSource;
    glw.texImage2D(0, glw.RGBA, width, height, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
    this.setTextureMemUse(width * height * 4);
    glw.bindFramebuffer(this.framebuffer);
    glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
    glw.bindFramebuffer(null);
    return {
      width,
      height
    };
  }
}
const WORDS_PER_QUAD = 24;
class WebGlCoreRenderer extends CoreRenderer {
  constructor(options) {
    super(options);
    //// WebGL Native Context and Data
    __publicField(this, "glw");
    __publicField(this, "system");
    //// Persistent data
    __publicField(this, "quadBuffer");
    __publicField(this, "fQuadBuffer");
    __publicField(this, "uiQuadBuffer");
    __publicField(this, "renderOps", []);
    //// Render Op / Buffer Filling State
    __publicField(this, "curBufferIdx", 0);
    __publicField(this, "curRenderOp", null);
    __publicField(this, "rttNodes", []);
    __publicField(this, "activeRttNode", null);
    //// Default Shader
    __publicField(this, "defShaderCtrl");
    __publicField(this, "defaultShader");
    __publicField(this, "quadBufferCollection");
    /**
     * White pixel texture used by default when no texture is specified.
     */
    __publicField(this, "defaultTexture");
    __publicField(this, "quadBufferUsage", 0);
    /**
     * Whether the renderer is currently rendering to a texture.
     */
    __publicField(this, "renderToTextureActive", false);
    this.quadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize);
    this.fQuadBuffer = new Float32Array(this.quadBuffer);
    this.uiQuadBuffer = new Uint32Array(this.quadBuffer);
    this.mode = "webgl";
    const { canvas, clearColor, bufferMemory: bufferMemory2 } = options;
    this.defaultTexture = new ColorTexture(this.txManager);
    this.defaultTexture.setRenderableOwner(this, true);
    this.defaultTexture.once("loaded", () => {
      this.stage.requestRender();
    });
    const gl = createWebGLContext(canvas, options.contextSpy);
    const glw = this.glw = new WebGlContextWrapper(gl);
    const color = getNormalizedRgbaComponents(clearColor);
    glw.viewport(0, 0, canvas.width, canvas.height);
    glw.clearColor(color[0], color[1], color[2], color[3]);
    glw.setBlend(true);
    glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
    createIndexBuffer(glw, bufferMemory2);
    this.system = {
      parameters: getWebGlParameters(this.glw),
      extensions: getWebGlExtensions(this.glw)
    };
    this.shManager.renderer = this;
    this.defShaderCtrl = this.shManager.loadShader("DefaultShader");
    this.defaultShader = this.defShaderCtrl.shader;
    const quadBuffer = glw.createBuffer();
    assertTruthy(quadBuffer);
    const stride = 6 * Float32Array.BYTES_PER_ELEMENT;
    this.quadBufferCollection = new BufferCollection([
      {
        buffer: quadBuffer,
        attributes: {
          a_position: {
            name: "a_position",
            size: 2,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 0
            // start at the beginning of the buffer
          },
          a_textureCoordinate: {
            name: "a_textureCoordinate",
            size: 2,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 2 * Float32Array.BYTES_PER_ELEMENT
          },
          a_color: {
            name: "a_color",
            size: 4,
            type: glw.UNSIGNED_BYTE,
            normalized: true,
            stride,
            offset: 4 * Float32Array.BYTES_PER_ELEMENT
          },
          a_textureIndex: {
            name: "a_textureIndex",
            size: 1,
            type: glw.FLOAT,
            normalized: false,
            stride,
            offset: 5 * Float32Array.BYTES_PER_ELEMENT
          }
        }
      }
    ]);
  }
  reset() {
    const { glw } = this;
    this.curBufferIdx = 0;
    this.curRenderOp = null;
    this.renderOps.length = 0;
    glw.setScissorTest(false);
    glw.clear();
  }
  getShaderManager() {
    return this.shManager;
  }
  createCtxTexture(textureSource) {
    if (textureSource instanceof SubTexture) {
      return new WebGlCoreCtxSubTexture(this.glw, this.txMemManager, textureSource);
    } else if (textureSource instanceof RenderTexture) {
      return new WebGlCoreCtxRenderTexture(this.glw, this.txMemManager, textureSource);
    }
    return new WebGlCoreCtxTexture(this.glw, this.txMemManager, textureSource);
  }
  /**
   * This function adds a quad (a rectangle composed of two triangles) to the WebGL rendering pipeline.
   *
   * It takes a set of options that define the quad's properties, such as its dimensions, colors, texture, shader, and transformation matrix.
   * The function first updates the shader properties with the current dimensions if necessary, then sets the default texture if none is provided.
   * It then checks if a new render operation is needed, based on the current shader and clipping rectangle.
   * If a new render operation is needed, it creates one and updates the current render operation.
   * The function then adjusts the texture coordinates based on the texture options and adds the texture to the texture manager.
   *
   * Finally, it calculates the vertices for the quad, taking into account any transformations, and adds them to the quad buffer.
   * The function updates the length and number of quads in the current render operation, and updates the current buffer index.
   */
  addQuad(params) {
    var _a2, _b, _c, _d, _e;
    const { fQuadBuffer, uiQuadBuffer } = this;
    const { width, height, colorTl, colorTr, colorBl, colorBr, textureOptions, shader, shaderProps, alpha, clippingRect, tx, ty, ta, tb, tc, td, renderCoords, rtt: renderToTexture, parentHasRenderTexture, framebufferDimensions } = params;
    let { texture } = params;
    if (shaderProps && hasOwn(shaderProps, "$dimensions")) {
      const dimensions = shaderProps.$dimensions;
      dimensions.width = width;
      dimensions.height = height;
    }
    texture = texture != null ? texture : this.defaultTexture;
    assertTruthy(texture instanceof Texture, "Invalid texture type");
    let { curBufferIdx: bufferIdx, curRenderOp } = this;
    const targetDims = {
      width,
      height
    };
    const targetShader = shader || this.defaultShader;
    assertTruthy(targetShader instanceof WebGlCoreShader);
    if (!this.reuseRenderOp(params)) {
      this.newRenderOp(targetShader, shaderProps, alpha, targetDims, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions);
      curRenderOp = this.curRenderOp;
      assertTruthy(curRenderOp);
    }
    const flipX = (_a2 = textureOptions == null ? void 0 : textureOptions.flipX) != null ? _a2 : false;
    let flipY = (_b = textureOptions == null ? void 0 : textureOptions.flipY) != null ? _b : false;
    if (texture instanceof RenderTexture) {
      flipY = !flipY;
    }
    let texCoordX1 = 0;
    let texCoordY1 = 0;
    let texCoordX2 = 1;
    let texCoordY2 = 1;
    if (texture instanceof SubTexture) {
      const { x: tx2, y: ty2, width: tw, height: th } = texture.props;
      const { width: parentW = 0, height: parentH = 0 } = texture.parentTexture.dimensions || { width: 0, height: 0 };
      texCoordX1 = tx2 / parentW;
      texCoordX2 = texCoordX1 + tw / parentW;
      texCoordY1 = ty2 / parentH;
      texCoordY2 = texCoordY1 + th / parentH;
      texture = texture.parentTexture;
    }
    const resizeMode = (_c = textureOptions == null ? void 0 : textureOptions.resizeMode) != null ? _c : false;
    if (texture instanceof ImageTexture) {
      if (resizeMode && texture.dimensions) {
        const { width: tw, height: th } = texture.dimensions;
        if (resizeMode.type === "cover") {
          const scaleX = width / tw;
          const scaleY = height / th;
          const scale = Math.max(scaleX, scaleY);
          const precision = 1 / scale;
          if (scale && scaleX && scaleX < scale) {
            const desiredSize = precision * width;
            texCoordX1 = (1 - desiredSize / tw) * ((_d = resizeMode.clipX) != null ? _d : 0.5);
            texCoordX2 = texCoordX1 + desiredSize / tw;
          }
          if (scale && scaleY && scaleY < scale) {
            const desiredSize = precision * height;
            texCoordY1 = (1 - desiredSize / th) * ((_e = resizeMode.clipY) != null ? _e : 0.5);
            texCoordY2 = texCoordY1 + desiredSize / th;
          }
        }
      }
    }
    if (flipX) {
      [texCoordX1, texCoordX2] = [texCoordX2, texCoordX1];
    }
    if (flipY) {
      [texCoordY1, texCoordY2] = [texCoordY2, texCoordY1];
    }
    const ctxTexture = texture.ctxTexture;
    assertTruthy(ctxTexture instanceof WebGlCoreCtxTexture);
    const textureIdx = this.addTexture(ctxTexture, bufferIdx);
    curRenderOp = this.curRenderOp;
    assertTruthy(curRenderOp);
    if (renderCoords) {
      const { x1, y1, x2, y2, x3, y3, x4, y4 } = renderCoords;
      fQuadBuffer[bufferIdx++] = x1;
      fQuadBuffer[bufferIdx++] = y1;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x2;
      fQuadBuffer[bufferIdx++] = y2;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x4;
      fQuadBuffer[bufferIdx++] = y4;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = x3;
      fQuadBuffer[bufferIdx++] = y3;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    } else if (tb !== 0 || tc !== 0) {
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + width * ta;
      fQuadBuffer[bufferIdx++] = ty + width * tc;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + height * tb;
      fQuadBuffer[bufferIdx++] = ty + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx + width * ta + height * tb;
      fQuadBuffer[bufferIdx++] = ty + width * tc + height * td;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    } else {
      const rightCornerX = tx + width * ta;
      const rightCornerY = ty + height * td;
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = ty;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY1;
      uiQuadBuffer[bufferIdx++] = colorTr;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = tx;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX1;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBl;
      fQuadBuffer[bufferIdx++] = textureIdx;
      fQuadBuffer[bufferIdx++] = rightCornerX;
      fQuadBuffer[bufferIdx++] = rightCornerY;
      fQuadBuffer[bufferIdx++] = texCoordX2;
      fQuadBuffer[bufferIdx++] = texCoordY2;
      uiQuadBuffer[bufferIdx++] = colorBr;
      fQuadBuffer[bufferIdx++] = textureIdx;
    }
    curRenderOp.length += WORDS_PER_QUAD;
    curRenderOp.numQuads++;
    this.curBufferIdx = bufferIdx;
  }
  /**
   * Replace the existing RenderOp with a new one that uses the specified Shader
   * and starts at the specified buffer index.
   *
   * @param shader
   * @param bufferIdx
   */
  newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx, renderToTexture, parentHasRenderTexture, framebufferDimensions) {
    const curRenderOp = new WebGlCoreRenderOp(
      this.glw,
      this.options,
      this.quadBufferCollection,
      shader,
      shaderProps,
      alpha,
      clippingRect,
      dimensions,
      bufferIdx,
      0,
      // Z-Index is only used for explictly added Render Ops
      renderToTexture,
      parentHasRenderTexture,
      framebufferDimensions
    );
    this.curRenderOp = curRenderOp;
    this.renderOps.push(curRenderOp);
  }
  /**
   * Add a texture to the current RenderOp. If the texture cannot be added to the
   * current RenderOp, a new RenderOp will be created and the texture will be added
   * to that one.
   *
   * If the texture cannot be added to the new RenderOp, an error will be thrown.
   *
   * @param texture
   * @param bufferIdx
   * @param recursive
   * @returns Assigned Texture Index of the texture in the render op
   */
  addTexture(texture, bufferIdx, recursive) {
    const { curRenderOp } = this;
    assertTruthy(curRenderOp);
    const textureIdx = curRenderOp.addTexture(texture);
    if (textureIdx === 4294967295) {
      if (recursive) {
        throw new Error("Unable to add texture to render op");
      }
      const { shader, shaderProps, dimensions, clippingRect, alpha } = curRenderOp;
      this.newRenderOp(shader, shaderProps, alpha, dimensions, clippingRect, bufferIdx);
      return this.addTexture(texture, bufferIdx, true);
    }
    return textureIdx;
  }
  /**
   * Test if the current Render operation can be reused for the specified parameters.
   * @param params
   * @returns
   */
  reuseRenderOp(params) {
    var _a2;
    const { shader, shaderProps, parentHasRenderTexture, rtt, clippingRect } = params;
    const targetShader = shader || this.defaultShader;
    if (((_a2 = this.curRenderOp) == null ? void 0 : _a2.shader) !== targetShader) {
      return false;
    }
    if (!compareRect(this.curRenderOp.clippingRect, clippingRect)) {
      return false;
    }
    if (parentHasRenderTexture || rtt) {
      return false;
    }
    if (this.curRenderOp.shader !== this.defaultShader && (!shaderProps || !this.curRenderOp.shader.canBatchShaderProps(this.curRenderOp.shaderProps, shaderProps))) {
      return false;
    }
    return true;
  }
  /**
   * add RenderOp to the render pipeline
   */
  addRenderOp(renderable) {
    this.renderOps.push(renderable);
    this.curRenderOp = null;
  }
  /**
   * Render the current set of RenderOps to render to the specified surface.
   *
   * TODO: 'screen' is the only supported surface at the moment.
   *
   * @param surface
   */
  render(surface = "screen") {
    var _a2;
    const { glw, quadBuffer } = this;
    const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
    const buffer = (_a2 = this.quadBufferCollection.getBuffer("a_position")) != null ? _a2 : null;
    glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
    this.renderOps.forEach((renderOp, i) => {
      renderOp.draw();
    });
    this.quadBufferUsage = this.curBufferIdx * arr.BYTES_PER_ELEMENT;
  }
  renderToTexture(node) {
    for (let i = 0; i < this.rttNodes.length; i++) {
      if (this.rttNodes[i] === node) {
        return;
      }
    }
    this.rttNodes.unshift(node);
  }
  renderRTTNodes() {
    const { glw } = this;
    this.stage;
    for (let i = 0; i < this.rttNodes.length; i++) {
      const node = this.rttNodes[i];
      if (!node || !node.hasRTTupdates) {
        continue;
      }
      this.activeRttNode = node;
      assertTruthy(node.texture, "RTT node missing texture");
      const ctxTexture = node.texture.ctxTexture;
      assertTruthy(ctxTexture instanceof WebGlCoreCtxRenderTexture);
      this.renderToTextureActive = true;
      glw.bindFramebuffer(ctxTexture.framebuffer);
      glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
      glw.clear();
      for (let i2 = 0; i2 < node.children.length; i2++) {
        const child = node.children[i2];
        if (!child) {
          continue;
        }
        child.update(this.stage.deltaTime, {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          valid: false
        });
        this.stage.addQuads(child);
        child.hasRTTupdates = false;
      }
      this.render();
      this.renderOps.length = 0;
      node.hasRTTupdates = false;
    }
    glw.bindFramebuffer(null);
    glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
    this.renderToTextureActive = false;
  }
  removeRTTNode(node) {
    const index = this.rttNodes.indexOf(node);
    if (index === -1) {
      return;
    }
    this.rttNodes.splice(index, 1);
  }
  getBufferInfo() {
    const bufferInfo = {
      totalAvailable: this.stage.options.quadBufferSize,
      totalUsed: this.quadBufferUsage
    };
    return bufferInfo;
  }
  getDefShaderCtr() {
    return this.defShaderCtrl;
  }
}
const SpecialCodepoints = {
  LINE_FEED: 10,
  CARRIAGE_RETURN: 13,
  SPACE: 32,
  TAB: 9,
  ZERO_WIDTH_SPACE: 8203,
  ZERO_WIDTH_NON_JOINER: 8204,
  ZERO_WIDTH_JOINER: 8205,
  LEFT_TO_RIGHT_MARK: 8206,
  RIGHT_TO_LEFT_MARK: 8207,
  LEFT_TO_RIGHT_EMBEDDING: 8234,
  RIGHT_TO_LEFT_EMBEDDING: 8235,
  POP_DIRECTIONAL_FORMATTING: 8236,
  LEFT_TO_RIGHT_OVERRIDE: 8237,
  RIGHT_TO_LEFT_OVERRIDE: 8238,
  LINE_SEPARATOR: 8232,
  PARAGRAPH_SEPARATOR: 8233,
  OBJECT_REPLACEMENT_CHARACTER: 65532,
  REPLACEMENT_CHARACTER: 65533,
  ZERO_WIDTH_NO_BREAK_SPACE: 65279,
  LEFT_TO_RIGHT_ISOLATE: 8294,
  RIGHT_TO_LEFT_ISOLATE: 8295,
  FIRST_STRONG_ISOLATE: 8296,
  POP_DIRECTIONAL_ISOLATE: 8297,
  INHIBIT_SYMMETRIC_SWAPPING: 8298,
  ACTIVATE_SYMMETRIC_SWAPPING: 8299,
  INHIBIT_ARABIC_FORM_SHAPING: 8300,
  ACTIVATE_ARABIC_FORM_SHAPING: 8301,
  NATIONAL_DIGIT_SHAPES: 8302,
  NOMINAL_DIGIT_SHAPES: 8303,
  LEFT_TO_RIGHT_BOUNDARY: 8206,
  RIGHT_TO_LEFT_BOUNDARY: 8207
};
class FontShaper {
}
class SdfFontShaper extends FontShaper {
  constructor(data, glyphMap) {
    super();
    __publicField(this, "data");
    __publicField(this, "glyphMap");
    __publicField(this, "kernings");
    this.data = data;
    this.glyphMap = glyphMap;
    const kernings = this.kernings = {};
    data.kernings.forEach((kerning) => {
      const second = kerning.second;
      const firsts = kernings[second] = kernings[second] || {};
      firsts[kerning.first] = kerning.amount;
    });
    this.kernings = kernings;
  }
  *shapeText(props, codepoints) {
    var _a2;
    let codepointResult;
    let lastGlyphId = void 0;
    while ((codepointResult = codepoints.peek()) && !codepointResult.done) {
      const codepoint = codepointResult.value;
      const glyph = this.glyphMap.get(codepoint);
      codepoints.next();
      if (glyph !== void 0) {
        const kerning = lastGlyphId !== void 0 ? (((_a2 = this.kernings[glyph.id]) == null ? void 0 : _a2[lastGlyphId]) || 0) + props.letterSpacing : 0;
        lastGlyphId = glyph.id;
        yield {
          mapped: true,
          glyphId: glyph.id,
          codepoint,
          cluster: codepoints.lastIndex,
          xAdvance: glyph.xadvance + kerning,
          yAdvance: 0,
          xOffset: glyph.xoffset + kerning,
          yOffset: glyph.yoffset,
          xBearing: 0,
          yBearing: 0,
          width: glyph.width,
          height: glyph.height
        };
      } else {
        if (codepoint === SpecialCodepoints.LINE_FEED) {
          lastGlyphId = void 0;
        }
        yield {
          mapped: false,
          codepoint,
          cluster: codepoints.lastIndex
        };
      }
    }
  }
}
class SdfTrFontFace extends TrFontFace {
  constructor(type2, options) {
    super(options);
    __publicField(this, "type");
    __publicField(this, "texture");
    /**
     * Height of the tallest character in the font including the whitespace above it
     * in SDF/vertex units.
     */
    __publicField(this, "maxCharHeight", 0);
    __publicField(this, "data");
    __publicField(this, "shaper");
    __publicField(this, "glyphMap", /* @__PURE__ */ new Map());
    const { atlasUrl, atlasDataUrl, stage } = options;
    this.type = type2;
    const renderer = stage.renderer;
    assertTruthy(renderer instanceof WebGlCoreRenderer, "SDF Font Faces can only be used with the WebGL Renderer");
    this.texture = stage.txManager.loadTexture("ImageTexture", {
      src: atlasUrl,
      // IMPORTANT: The SDF shader requires the alpha channel to NOT be
      // premultiplied on the atlas texture. If it is premultiplied, the
      // rendering of SDF glyphs (especially single-channel SDF fonts) will
      // be very jagged.
      premultiplyAlpha: false
    });
    this.texture.on("loaded", () => {
      this.checkLoaded();
      stage.requestRender();
    });
    this.texture.ctxTexture.load();
    fetch(atlasDataUrl).then(async (response) => {
      var _a2;
      this.data = await response.json();
      assertTruthy(this.data);
      let maxCharHeight = 0;
      this.data.chars.forEach((glyph) => {
        this.glyphMap.set(glyph.id, glyph);
        const charHeight = glyph.yoffset + glyph.height;
        if (charHeight > maxCharHeight) {
          maxCharHeight = charHeight;
        }
      });
      this.maxCharHeight = maxCharHeight;
      this.shaper = new SdfFontShaper(this.data, this.glyphMap);
      if (!this.metrics) {
        if ((_a2 = this.data) == null ? void 0 : _a2.lightningMetrics) {
          const { ascender, descender, lineGap, unitsPerEm } = this.data.lightningMetrics;
          this.metrics = {
            ascender: ascender / unitsPerEm,
            descender: descender / unitsPerEm,
            lineGap: lineGap / unitsPerEm
          };
        } else {
          throw new Error("Font metrics not found in ".concat(this.type, " font ").concat(this.fontFamily, ". ") + "Make sure you are using the latest version of the Lightning 3 `msdf-generator` tool to generate your SDF fonts.");
        }
      }
      this.checkLoaded();
    }).catch(console.error);
  }
  getAtlasEntry(glyphId) {
    const glyph = this.glyphMap.get(glyphId);
    if (glyph === void 0) {
      throw new Error("Glyph ".concat(glyphId, " not found in font ").concat(this.fontFamily));
    }
    return {
      x: glyph.x,
      y: glyph.y,
      width: glyph.width,
      height: glyph.height
    };
  }
  checkLoaded() {
    if (this.loaded)
      return;
    if (this.texture.state === "loaded" && this.data) {
      this.loaded = true;
      this.emit("loaded");
    }
  }
}
const FLOATS_PER_GLYPH = 24;
function getStartConditions(sdfFontSize, sdfLineHeight, fontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH) {
  const startLineIndex = Math.min(Math.max(renderWindow.firstLineIdx, 0), lineCache.length);
  const sdfStartX = 0;
  const { metrics } = fontFace;
  assertTruthy(metrics, "Font metrics not loaded");
  assertTruthy(fontFace.data, "Font data not loaded");
  const sdfBareLineHeight = (metrics.ascender - metrics.descender) * sdfFontSize;
  let sdfVerticalAlignYOffset = 0;
  if (verticalAlign === "middle") {
    sdfVerticalAlignYOffset = (sdfLineHeight - sdfBareLineHeight) / 2;
  } else if (verticalAlign === "bottom") {
    sdfVerticalAlignYOffset = sdfLineHeight - sdfBareLineHeight;
  }
  const sdfOffsetY = offsetY / fontSizeRatio;
  const sdfEncodedAscender = fontFace.data.common.base;
  const sdfConfiguredAscender = metrics.ascender * sdfFontSize;
  const sdfAscenderAdjOffset = sdfConfiguredAscender - sdfEncodedAscender;
  const sdfStartY = sdfOffsetY + sdfAscenderAdjOffset + startLineIndex * sdfLineHeight + sdfVerticalAlignYOffset;
  if (textH && sdfStartY >= textH / fontSizeRatio) {
    return;
  }
  return {
    sdfX: sdfStartX,
    sdfY: sdfStartY,
    lineIndex: startLineIndex
  };
}
class PeekableIterator {
  constructor(iterator, indexBase = 0) {
    __publicField(this, "iterator");
    __publicField(this, "peekBuffer", []);
    __publicField(this, "_lastIndex");
    this.iterator = iterator;
    this.iterator = iterator;
    this._lastIndex = indexBase - 1;
    this.peekBuffer = [];
  }
  next() {
    const nextResult = this.peekBuffer.length > 0 ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.peekBuffer.pop()
    ) : this.iterator.next();
    if (nextResult.done) {
      this._lastIndex = -1;
    } else {
      this._lastIndex++;
    }
    return nextResult;
  }
  peek() {
    if (this.peekBuffer.length > 0) {
      return this.peekBuffer[0];
    }
    const result = this.iterator.next();
    this.peekBuffer.push(result);
    return result;
  }
  get lastIndex() {
    return this._lastIndex;
  }
}
function* getUnicodeCodepoints(text, start = 0) {
  let i = start;
  while (i < text.length) {
    const codePoint = text.codePointAt(i);
    if (codePoint === void 0) {
      throw new Error("Invalid Unicode code point");
    }
    yield codePoint;
    i += codePoint <= 65535 ? 1 : 2;
  }
}
function measureText(text, shaperProps, shaper) {
  const glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, 0), 0));
  let width = 0;
  for (const glyph of glyphs) {
    if (glyph.mapped) {
      width += glyph.xAdvance;
    }
  }
  return width;
}
function layoutText(curLineIndex, startX, startY, text, textAlign, width, height, fontSize, lineHeight, letterSpacing, vertexBuffer, contain, lineCache, rwSdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines) {
  assertTruthy(trFontFace, "Font face must be loaded");
  assertTruthy(trFontFace.loaded, "Font face must be loaded");
  assertTruthy(trFontFace.data, "Font face must be loaded");
  assertTruthy(trFontFace.shaper, "Font face must be loaded");
  const fontSizeRatio = fontSize / trFontFace.data.info.size;
  const vertexLineHeight = lineHeight / fontSizeRatio;
  const vertexW = width / fontSizeRatio;
  const vertexLSpacing = letterSpacing / fontSizeRatio;
  const startingLineCacheEntry = lineCache[curLineIndex];
  const startingCodepointIndex = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.codepointIndex) || 0;
  const startingMaxX = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxX) || 0;
  const startingMaxY = (startingLineCacheEntry == null ? void 0 : startingLineCacheEntry.maxY) || 0;
  let maxX = startingMaxX;
  let maxY = startingMaxY;
  let curX = startX;
  let curY = startY;
  let bufferOffset = 0;
  const lastWord = {
    codepointIndex: -1,
    bufferOffset: -1,
    xStart: -1
  };
  const shaper = trFontFace.shaper;
  const shaperProps = {
    letterSpacing: vertexLSpacing
  };
  let glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, startingCodepointIndex), startingCodepointIndex));
  let glyphResult;
  let curLineBufferStart = -1;
  const bufferLineInfos = [];
  const vertexTruncateHeight = height / fontSizeRatio;
  const overflowSuffVertexWidth = measureText(overflowSuffix, shaperProps, shaper);
  let moreLines = true;
  while (moreLines) {
    const nextLineWillFit = (maxLines === 0 || curLineIndex + 1 < maxLines) && (contain !== "both" || scrollable || curY + vertexLineHeight + trFontFace.maxCharHeight <= vertexTruncateHeight);
    const lineVertexW = nextLineWillFit ? vertexW : vertexW - overflowSuffVertexWidth;
    let xStartLastWordBoundary = 0;
    const lineIsBelowWindowTop = curY + trFontFace.maxCharHeight >= rwSdf.y1;
    const lineIsAboveWindowBottom = curY <= rwSdf.y2;
    const lineIsWithinWindow = lineIsBelowWindowTop && lineIsAboveWindowBottom;
    while ((glyphResult = glyphs.next()) && !glyphResult.done) {
      const glyph = glyphResult.value;
      if (curLineIndex === lineCache.length) {
        lineCache.push({
          codepointIndex: glyph.cluster,
          maxY,
          maxX
        });
      } else if (curLineIndex > lineCache.length) {
        throw new Error("Unexpected lineCache length");
      }
      if (glyph.codepoint === 32 || glyph.codepoint === 10) {
        if (lastWord.codepointIndex !== -1) {
          lastWord.codepointIndex = -1;
          xStartLastWordBoundary = curX;
        }
      } else if (lastWord.codepointIndex === -1) {
        lastWord.codepointIndex = glyph.cluster;
        lastWord.bufferOffset = bufferOffset;
        lastWord.xStart = xStartLastWordBoundary;
      }
      if (glyph.mapped) {
        const charEndX = curX + glyph.xOffset + glyph.width;
        if (
          // We are containing the text
          contain !== "none" && // The current glyph reaches outside the contained width
          charEndX >= lineVertexW && // There is a last word that we can break to the next line
          lastWord.codepointIndex !== -1 && // Prevents infinite loop when a single word is longer than the width
          lastWord.xStart > 0
        ) {
          if (nextLineWillFit) {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(text, lastWord.codepointIndex), lastWord.codepointIndex));
            bufferOffset = lastWord.bufferOffset;
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            curX = lastWord.xStart;
            bufferOffset = lastWord.bufferOffset;
            contain = "none";
          }
        } else {
          const quadX = curX + glyph.xOffset;
          const quadY = curY + glyph.yOffset;
          if (lineIsWithinWindow) {
            if (curLineBufferStart === -1) {
              curLineBufferStart = bufferOffset;
            }
            const atlasEntry = trFontFace.getAtlasEntry(glyph.glyphId);
            const u = atlasEntry.x / trFontFace.data.common.scaleW;
            const v = atlasEntry.y / trFontFace.data.common.scaleH;
            const uvWidth = atlasEntry.width / trFontFace.data.common.scaleW;
            const uvHeight = atlasEntry.height / trFontFace.data.common.scaleH;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v;
            vertexBuffer[bufferOffset++] = quadX;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u;
            vertexBuffer[bufferOffset++] = v + uvHeight;
            vertexBuffer[bufferOffset++] = quadX + glyph.width;
            vertexBuffer[bufferOffset++] = quadY + glyph.height;
            vertexBuffer[bufferOffset++] = u + uvWidth;
            vertexBuffer[bufferOffset++] = v + uvHeight;
          }
          maxY = Math.max(maxY, quadY + glyph.height);
          maxX = Math.max(maxX, quadX + glyph.width);
          curX += glyph.xAdvance;
        }
      } else {
        if (glyph.codepoint === 10) {
          if (nextLineWillFit) {
            break;
          } else {
            glyphs = shaper.shapeText(shaperProps, new PeekableIterator(getUnicodeCodepoints(overflowSuffix, 0), 0));
            contain = "none";
          }
        }
      }
    }
    if (curLineBufferStart !== -1) {
      bufferLineInfos.push({
        bufferStart: curLineBufferStart,
        bufferEnd: bufferOffset
      });
      curLineBufferStart = -1;
    }
    curX = 0;
    curY += vertexLineHeight;
    curLineIndex++;
    lastWord.codepointIndex = -1;
    xStartLastWordBoundary = 0;
    if (!forceFullLayoutCalc && contain === "both" && curY > rwSdf.y2) {
      moreLines = false;
    } else if (glyphResult && glyphResult.done) {
      moreLines = false;
    } else if (!nextLineWillFit) {
      moreLines = false;
    }
  }
  if (textAlign === "center") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = (vertexTextW - lineWidth) / 2;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  } else if (textAlign === "right") {
    const vertexTextW = contain === "none" ? maxX : vertexW;
    for (let i = 0; i < bufferLineInfos.length; i++) {
      const line = bufferLineInfos[i];
      const lineWidth = line.bufferEnd === line.bufferStart ? 0 : (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        vertexBuffer[line.bufferEnd - 4] - vertexBuffer[line.bufferStart]
      );
      const xOffset = vertexTextW - lineWidth;
      for (let j = line.bufferStart; j < line.bufferEnd; j += 4) {
        vertexBuffer[j] += xOffset;
      }
    }
  }
  assertTruthy(glyphResult);
  return {
    bufferNumFloats: bufferOffset,
    bufferNumQuads: bufferOffset / 16,
    layoutNumCharacters: glyphResult.done ? text.length - startingCodepointIndex : glyphResult.value.cluster - startingCodepointIndex + 1,
    fullyProcessed: !!glyphResult.done,
    maxX,
    maxY,
    numLines: lineCache.length
  };
}
function roundUpToMultiple(value, multiple) {
  return Math.ceil(value / multiple) * multiple;
}
function roundDownToMultiple(value, multiple) {
  return Math.floor(value / multiple) * multiple;
}
function setRenderWindow(outRenderWindow, x, y, scrollY, lineHeight, bufferMargin, visibleWindow, fontSizeRatio) {
  const { screen, sdf } = outRenderWindow;
  if (!isBoundPositive(visibleWindow)) {
    screen.x1 = 0;
    screen.y1 = 0;
    screen.x2 = 0;
    screen.y2 = 0;
    sdf.x1 = 0;
    sdf.y1 = 0;
    sdf.x2 = 0;
    sdf.y2 = 0;
    outRenderWindow.numLines = 0;
    outRenderWindow.firstLineIdx = 0;
  } else {
    const x1 = visibleWindow.x1 - x;
    const x2 = x1 + (visibleWindow.x2 - visibleWindow.x1);
    const y1Base = visibleWindow.y1 - y + scrollY;
    const y1 = roundDownToMultiple(y1Base - bufferMargin, lineHeight || 1);
    const y2 = roundUpToMultiple(y1Base + (visibleWindow.y2 - visibleWindow.y1) + bufferMargin, lineHeight || 1);
    screen.x1 = x1;
    screen.y1 = y1;
    screen.x2 = x2;
    screen.y2 = y2;
    sdf.x1 = x1 / fontSizeRatio;
    sdf.y1 = y1 / fontSizeRatio;
    sdf.x2 = x2 / fontSizeRatio;
    sdf.y2 = y2 / fontSizeRatio;
    outRenderWindow.numLines = Math.ceil((y2 - y1) / lineHeight);
    outRenderWindow.firstLineIdx = lineHeight ? Math.floor(y1 / lineHeight) : 0;
  }
  outRenderWindow.valid = true;
}
function calcDefaultLineHeight(metrics, fontSize) {
  return fontSize * (metrics.ascender - metrics.descender + metrics.lineGap);
}
const tmpRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
class SdfTextRenderer extends TextRenderer {
  constructor(stage) {
    super(stage);
    /**
     * Map of font family names to a set of font faces.
     */
    __publicField(this, "ssdfFontFamilies", {});
    __publicField(this, "msdfFontFamilies", {});
    __publicField(this, "fontFamilyArray", [
      this.ssdfFontFamilies,
      this.msdfFontFamilies
    ]);
    __publicField(this, "sdfShader");
    __publicField(this, "rendererBounds");
    __publicField(this, "type", "sdf");
    this.sdfShader = this.stage.shManager.loadShader("SdfShader").shader;
    this.rendererBounds = {
      x1: 0,
      y1: 0,
      x2: this.stage.options.appWidth,
      y2: this.stage.options.appHeight
    };
  }
  //#region Overrides
  getPropertySetters() {
    return {
      fontFamily: (state, value) => {
        state.props.fontFamily = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontWeight: (state, value) => {
        state.props.fontWeight = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStyle: (state, value) => {
        state.props.fontStyle = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontStretch: (state, value) => {
        state.props.fontStretch = value;
        this.releaseFontFace(state);
        this.invalidateLayoutCache(state);
      },
      fontSize: (state, value) => {
        state.props.fontSize = value;
        this.invalidateLayoutCache(state);
      },
      text: (state, value) => {
        state.props.text = value;
        this.invalidateLayoutCache(state);
      },
      textAlign: (state, value) => {
        state.props.textAlign = value;
        this.invalidateLayoutCache(state);
      },
      color: (state, value) => {
        state.props.color = value;
      },
      x: (state, value) => {
        state.props.x = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsX(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      y: (state, value) => {
        state.props.y = value;
        if (state.elementBounds.valid) {
          this.setElementBoundsY(state);
          if (!state.renderWindow.valid && boundsOverlap(state.elementBounds, this.rendererBounds)) {
            this.scheduleUpdateState(state);
          }
        }
      },
      contain: (state, value) => {
        state.props.contain = value;
        this.invalidateLayoutCache(state);
      },
      width: (state, value) => {
        state.props.width = value;
        if (state.props.contain !== "none") {
          this.invalidateLayoutCache(state);
        }
      },
      height: (state, value) => {
        state.props.height = value;
        if (state.props.contain === "both") {
          this.invalidateLayoutCache(state);
        }
      },
      offsetY: (state, value) => {
        state.props.offsetY = value;
        this.invalidateLayoutCache(state);
      },
      scrollable: (state, value) => {
        state.props.scrollable = value;
        this.invalidateLayoutCache(state);
      },
      scrollY: (state, value) => {
        state.props.scrollY = value;
        this.scheduleUpdateState(state);
      },
      letterSpacing: (state, value) => {
        state.props.letterSpacing = value;
        this.invalidateLayoutCache(state);
      },
      lineHeight: (state, value) => {
        state.props.lineHeight = value;
        state.resLineHeight = void 0;
        this.invalidateLayoutCache(state);
      },
      maxLines: (state, value) => {
        state.props.maxLines = value;
        this.invalidateLayoutCache(state);
      },
      textBaseline: (state, value) => {
        state.props.textBaseline = value;
        this.invalidateLayoutCache(state);
      },
      verticalAlign: (state, value) => {
        state.props.verticalAlign = value;
        this.invalidateLayoutCache(state);
      },
      overflowSuffix: (state, value) => {
        state.props.overflowSuffix = value;
        this.invalidateLayoutCache(state);
      },
      debug: (state, value) => {
        state.props.debug = value;
      }
    };
  }
  canRenderFont(props) {
    const { fontFamily } = props;
    return fontFamily in this.ssdfFontFamilies || fontFamily in this.msdfFontFamilies || fontFamily === "$$SDF_FAILURE_TEST$$";
  }
  isFontFaceSupported(fontFace) {
    return fontFace instanceof SdfTrFontFace;
  }
  addFontFace(fontFace) {
    assertTruthy(fontFace instanceof SdfTrFontFace);
    const familyName = fontFace.fontFamily;
    const fontFamiles = fontFace.type === "ssdf" ? this.ssdfFontFamilies : fontFace.type === "msdf" ? this.msdfFontFamilies : void 0;
    if (!fontFamiles) {
      console.warn("Invalid font face type: ".concat(fontFace.type));
      return;
    }
    let faceSet = fontFamiles[familyName];
    if (!faceSet) {
      faceSet = /* @__PURE__ */ new Set();
      fontFamiles[familyName] = faceSet;
    }
    faceSet.add(fontFace);
  }
  createState(props) {
    return {
      props,
      status: "initialState",
      updateScheduled: false,
      emitter: new EventEmitter(),
      lineCache: [],
      forceFullLayoutCalc: false,
      renderWindow: {
        screen: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        sdf: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 0
        },
        firstLineIdx: 0,
        numLines: 0,
        valid: false
      },
      elementBounds: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        valid: false
      },
      clippingRect: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        valid: false
      },
      bufferNumFloats: 0,
      bufferNumQuads: 0,
      vertexBuffer: void 0,
      webGlBuffers: null,
      bufferUploaded: false,
      textH: void 0,
      textW: void 0,
      distanceRange: 0,
      trFontFace: void 0,
      isRenderable: false,
      resLineHeight: void 0,
      debugData: {
        updateCount: 0,
        layoutCount: 0,
        lastLayoutNumCharacters: 0,
        layoutSum: 0,
        drawSum: 0,
        drawCount: 0,
        bufferSize: 0
      }
    };
  }
  updateState(state) {
    let { trFontFace } = state;
    const { textH, lineCache, debugData, forceFullLayoutCalc } = state;
    debugData.updateCount++;
    if (state.status === "initialState") {
      this.setStatus(state, "loading");
    }
    if (!trFontFace) {
      trFontFace = this.resolveFontFace(state.props);
      state.trFontFace = trFontFace;
      if (!trFontFace) {
        const msg = "SdfTextRenderer: Could not resolve font face for family: '".concat(state.props.fontFamily, "'");
        console.error(msg);
        this.setStatus(state, "failed", new Error(msg));
        return;
      }
      trFontFace.texture.setRenderableOwner(state, true);
    }
    if (!trFontFace.loaded) {
      trFontFace.once("loaded", () => {
        this.scheduleUpdateState(state);
      });
      return;
    }
    assertTruthy(trFontFace.data, "Font face data should be loaded");
    assertTruthy(trFontFace.metrics, "Font face metrics should be loaded");
    const { text, fontSize, x, y, contain, width, height, verticalAlign, scrollable, overflowSuffix, maxLines } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { renderWindow } = state;
    const sdfFontSize = trFontFace.data.info.size;
    const fontSizeRatio = fontSize / sdfFontSize;
    let resLineHeight = state.resLineHeight;
    if (resLineHeight === void 0) {
      const lineHeight = state.props.lineHeight;
      if (lineHeight === void 0) {
        resLineHeight = calcDefaultLineHeight(trFontFace.metrics, fontSize);
      } else {
        resLineHeight = lineHeight;
      }
      state.resLineHeight = resLineHeight;
    }
    const sdfLineHeight = resLineHeight / fontSizeRatio;
    state.distanceRange = fontSizeRatio * trFontFace.data.distanceField.distanceRange;
    const neededLength = text.length * FLOATS_PER_GLYPH;
    let vertexBuffer = state.vertexBuffer;
    if (!vertexBuffer || vertexBuffer.length < neededLength) {
      vertexBuffer = new Float32Array(neededLength * 2);
    }
    const elementBounds = state.elementBounds;
    if (!elementBounds.valid) {
      this.setElementBoundsX(state);
      this.setElementBoundsY(state);
      elementBounds.valid = true;
    }
    if (!forceFullLayoutCalc && renderWindow.valid) {
      const rwScreen = renderWindow.screen;
      if (x + rwScreen.x1 <= elementBounds.x1 && x + rwScreen.x2 >= elementBounds.x2 && y - scrollY + rwScreen.y1 <= elementBounds.y1 && y - scrollY + rwScreen.y2 >= elementBounds.y2) {
        this.setStatus(state, "loaded");
        return;
      }
      renderWindow.valid = false;
      this.setStatus(state, "loading");
    }
    const { offsetY, textAlign } = state.props;
    if (!renderWindow.valid) {
      const isPossiblyOnScreen = boundsOverlap(elementBounds, this.rendererBounds);
      if (!isPossiblyOnScreen) {
        return;
      }
      setRenderWindow(renderWindow, x, y, scrollY, resLineHeight, contain === "both" ? elementBounds.y2 - elementBounds.y1 : 0, elementBounds, fontSizeRatio);
    }
    const start = getStartConditions(sdfFontSize, sdfLineHeight, trFontFace, verticalAlign, offsetY, fontSizeRatio, renderWindow, lineCache, textH);
    if (!start) {
      this.setStatus(state, "loaded");
      return;
    }
    const { letterSpacing } = state.props;
    const out2 = layoutText(start.lineIndex, start.sdfX, start.sdfY, text, textAlign, width, height, fontSize, resLineHeight, letterSpacing, vertexBuffer, contain, lineCache, renderWindow.sdf, trFontFace, forceFullLayoutCalc, scrollable, overflowSuffix, maxLines);
    state.bufferUploaded = false;
    state.bufferNumFloats = out2.bufferNumFloats;
    state.bufferNumQuads = out2.bufferNumQuads;
    state.vertexBuffer = vertexBuffer;
    state.renderWindow = renderWindow;
    debugData.lastLayoutNumCharacters = out2.layoutNumCharacters;
    debugData.bufferSize = vertexBuffer.byteLength;
    if (out2.fullyProcessed) {
      state.textW = out2.maxX * fontSizeRatio;
      state.textH = out2.numLines * sdfLineHeight * fontSizeRatio;
    }
    this.setStatus(state, "loaded");
  }
  renderQuads(state, transform, clippingRect, alpha, parentHasRenderTexture, framebufferDimensions) {
    var _a2, _b, _c;
    if (!state.vertexBuffer) {
      return;
    }
    const renderer = this.stage.renderer;
    assertTruthy(renderer instanceof WebGlCoreRenderer);
    const { fontSize, color, contain, scrollable, zIndex, debug } = state.props;
    const scrollY = contain === "both" && scrollable ? state.props.scrollY : 0;
    const { textW = 0, textH = 0, distanceRange, vertexBuffer, bufferUploaded, trFontFace, elementBounds } = state;
    let { webGlBuffers } = state;
    if (!webGlBuffers) {
      const glw = renderer.glw;
      const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
      const webGlBuffer = glw.createBuffer();
      assertTruthy(webGlBuffer);
      state.webGlBuffers = new BufferCollection([
        {
          buffer: webGlBuffer,
          attributes: {
            a_position: {
              name: "a_position",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 0
              // start at the beginning of the buffer
            },
            a_textureCoordinate: {
              name: "a_textureCoordinate",
              size: 2,
              type: glw.FLOAT,
              normalized: false,
              stride,
              offset: 2 * Float32Array.BYTES_PER_ELEMENT
            }
          }
        }
      ]);
      state.bufferUploaded = false;
      assertTruthy(state.webGlBuffers);
      webGlBuffers = state.webGlBuffers;
    }
    if (!bufferUploaded) {
      const glw = renderer.glw;
      const buffer = (_a2 = webGlBuffers == null ? void 0 : webGlBuffers.getBuffer("a_textureCoordinate")) != null ? _a2 : null;
      glw.arrayBufferData(buffer, vertexBuffer, glw.STATIC_DRAW);
      state.bufferUploaded = true;
    }
    assertTruthy(trFontFace);
    if (scrollable && contain === "both") {
      assertTruthy(elementBounds.valid);
      const elementRect = convertBoundToRect(elementBounds, tmpRect);
      if (clippingRect.valid) {
        state.clippingRect.valid = true;
        clippingRect = intersectRect(clippingRect, elementRect, state.clippingRect);
      } else {
        state.clippingRect.valid = true;
        clippingRect = copyRect(elementRect, state.clippingRect);
      }
    }
    const renderOp = new WebGlCoreRenderOp(renderer.glw, renderer.options, webGlBuffers, this.sdfShader, {
      transform: transform.getFloatArr(),
      // IMPORTANT: The SDF Shader expects the color NOT to be premultiplied
      // for the best blending results. Which is why we use `mergeColorAlpha`
      // instead of `mergeColorAlphaPremultiplied` here.
      color: mergeColorAlpha(color, alpha),
      size: fontSize / (((_b = trFontFace.data) == null ? void 0 : _b.info.size) || 0),
      scrollY,
      distanceRange,
      debug: debug.sdfShaderDebug
    }, alpha, clippingRect, { height: textH, width: textW }, 0, zIndex, false, parentHasRenderTexture, framebufferDimensions);
    const texture = (_c = state.trFontFace) == null ? void 0 : _c.texture;
    assertTruthy(texture);
    const ctxTexture = texture.ctxTexture;
    renderOp.addTexture(ctxTexture);
    renderOp.length = state.bufferNumFloats;
    renderOp.numQuads = state.bufferNumQuads;
    renderer.addRenderOp(renderOp);
  }
  setIsRenderable(state, renderable) {
    var _a2;
    super.setIsRenderable(state, renderable);
    (_a2 = state.trFontFace) == null ? void 0 : _a2.texture.setRenderableOwner(state, renderable);
  }
  destroyState(state) {
    var _a2;
    super.destroyState(state);
    (_a2 = state.trFontFace) == null ? void 0 : _a2.texture.setRenderableOwner(state, false);
  }
  //#endregion Overrides
  resolveFontFace(props) {
    return TrFontManager.resolveFontFace(this.fontFamilyArray, props);
  }
  /**
   * Release the loaded SDF font face
   *
   * @param state
   */
  releaseFontFace(state) {
    state.resLineHeight = void 0;
    if (state.trFontFace) {
      state.trFontFace.texture.setRenderableOwner(state, false);
      state.trFontFace = void 0;
    }
  }
  /**
   * Invalidate the layout cache stored in the state. This will cause the text
   * to be re-layed out on the next update.
   *
   * @remarks
   * This also invalidates the visible window cache.
   *
   * @param state
   */
  invalidateLayoutCache(state) {
    state.renderWindow.valid = false;
    state.elementBounds.valid = false;
    state.textH = void 0;
    state.textW = void 0;
    state.lineCache = [];
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  setElementBoundsX(state) {
    const { x, contain, width } = state.props;
    const { elementBounds } = state;
    elementBounds.x1 = x;
    elementBounds.x2 = contain !== "none" ? x + width : Infinity;
  }
  setElementBoundsY(state) {
    const { y, contain, height } = state.props;
    const { elementBounds } = state;
    elementBounds.y1 = y;
    elementBounds.y2 = contain === "both" ? y + height : Infinity;
  }
}
function getWebFontMetrics(context, fontFace, fontSize) {
  if (fontFace.metrics) {
    return fontFace.metrics;
  }
  const browserMetrics = context.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
  console.warn("Font metrics not provided for Canvas Web font ".concat(fontFace.fontFamily, ". ") + "Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 `msdf-generator` tool to extract the default metrics for the font and provide them in the Canvas Web font definition.");
  let metrics;
  if (browserMetrics.actualBoundingBoxDescent && browserMetrics.actualBoundingBoxAscent) {
    metrics = {
      ascender: browserMetrics.actualBoundingBoxAscent / fontSize,
      descender: -browserMetrics.actualBoundingBoxDescent / fontSize,
      lineGap: 0.2
    };
  } else {
    metrics = {
      ascender: 0.8,
      descender: -0.2,
      lineGap: 0.2
    };
  }
  fontFace.metrics = metrics;
  return metrics;
}
const MAX_TEXTURE_DIMENSION = 2048;
function calcHeight(textBaseline, fontSize, lineHeight, numLines, offsetY) {
  const baselineOffset = textBaseline !== "bottom" ? 0.5 * fontSize : 0;
  return lineHeight * (numLines - 1) + baselineOffset + Math.max(lineHeight, fontSize) + (offsetY || 0);
}
class LightningTextTextureRenderer {
  constructor(canvas, context) {
    __publicField(this, "_canvas");
    __publicField(this, "_context");
    __publicField(this, "_settings");
    this._canvas = canvas;
    this._context = context;
    this._settings = this.mergeDefaults({});
  }
  set settings(v) {
    this._settings = this.mergeDefaults(v);
  }
  get settings() {
    return this._settings;
  }
  getPrecision() {
    return this._settings.precision;
  }
  setFontProperties() {
    this._context.font = this._getFontSetting();
    this._context.textBaseline = this._settings.textBaseline;
  }
  _getFontSetting() {
    const ff = [this._settings.fontFamily];
    const ffs = [];
    for (let i = 0, n = ff.length; i < n; i++) {
      if (ff[i] === "serif" || ff[i] === "sans-serif") {
        ffs.push(ff[i]);
      } else {
        ffs.push('"'.concat(ff[i], '"'));
      }
    }
    return "".concat(this._settings.fontStyle, " ").concat(this._settings.fontSize * this.getPrecision(), "px ").concat(ffs.join(","));
  }
  _load() {
    if (document.fonts) {
      const fontSetting = this._getFontSetting();
      try {
        if (!document.fonts.check(fontSetting, this._settings.text)) {
          return document.fonts.load(fontSetting, this._settings.text).catch((err) => {
            console.warn("[Lightning] Font load error", err, fontSetting);
          }).then(() => {
            if (!document.fonts.check(fontSetting, this._settings.text)) {
              console.warn("[Lightning] Font not found", fontSetting);
            }
          });
        }
      } catch (e) {
        console.warn("[Lightning] Can't check font loading for " + fontSetting);
      }
    }
  }
  calculateRenderInfo() {
    const renderInfo = {};
    const precision = this.getPrecision();
    const paddingLeft = this._settings.paddingLeft * precision;
    const paddingRight = this._settings.paddingRight * precision;
    const fontSize = this._settings.fontSize * precision;
    let offsetY = this._settings.offsetY === null ? null : this._settings.offsetY * precision;
    const w = this._settings.w * precision;
    const h = this._settings.h * precision;
    let wordWrapWidth = this._settings.wordWrapWidth * precision;
    const cutSx = this._settings.cutSx * precision;
    const cutEx = this._settings.cutEx * precision;
    const cutSy = this._settings.cutSy * precision;
    const cutEy = this._settings.cutEy * precision;
    const letterSpacing = (this._settings.letterSpacing || 0) * precision;
    const textIndent = this._settings.textIndent * precision;
    const trFontFace = this._settings.trFontFace;
    this.setFontProperties();
    assertTruthy(trFontFace);
    const metrics = getWebFontMetrics(this._context, trFontFace, fontSize);
    const defLineHeight = calcDefaultLineHeight(metrics, fontSize) * precision;
    const lineHeight = this._settings.lineHeight !== null ? this._settings.lineHeight * precision : defLineHeight;
    const maxHeight = this._settings.maxHeight;
    const containedMaxLines = maxHeight !== null && lineHeight > 0 ? Math.floor(maxHeight / lineHeight) : 0;
    const setMaxLines = this._settings.maxLines;
    const calcMaxLines = containedMaxLines > 0 && setMaxLines > 0 ? Math.min(containedMaxLines, setMaxLines) : Math.max(containedMaxLines, setMaxLines);
    let width = w || 2048 / this.getPrecision();
    let innerWidth = width - paddingLeft;
    if (innerWidth < 10) {
      width += 10 - innerWidth;
      innerWidth = 10;
    }
    if (!wordWrapWidth) {
      wordWrapWidth = innerWidth;
    }
    if (this._settings.textOverflow && !this._settings.wordWrap) {
      let suffix;
      switch (this._settings.textOverflow) {
        case "clip":
          suffix = "";
          break;
        case "ellipsis":
          suffix = this._settings.overflowSuffix;
          break;
        default:
          suffix = this._settings.textOverflow;
      }
      this._settings.text = this.wrapWord(this._settings.text, wordWrapWidth - textIndent, suffix);
    }
    let linesInfo;
    if (this._settings.wordWrap) {
      linesInfo = this.wrapText(this._settings.text, wordWrapWidth, letterSpacing, textIndent);
    } else {
      linesInfo = { l: this._settings.text.split(/(?:\r\n|\r|\n)/), n: [] };
      const n = linesInfo.l.length;
      for (let i = 0; i < n - 1; i++) {
        linesInfo.n.push(i);
      }
    }
    let lines = linesInfo.l;
    if (calcMaxLines && lines.length > calcMaxLines) {
      const usedLines = lines.slice(0, calcMaxLines);
      let otherLines = null;
      if (this._settings.overflowSuffix) {
        const w2 = this._settings.overflowSuffix ? this.measureText(this._settings.overflowSuffix) : 0;
        const al = this.wrapText(usedLines[usedLines.length - 1], wordWrapWidth - w2, letterSpacing, textIndent);
        usedLines[usedLines.length - 1] = "".concat(al.l[0]).concat(this._settings.overflowSuffix);
        otherLines = [al.l.length > 1 ? al.l[1] : ""];
      } else {
        otherLines = [""];
      }
      let i;
      const n = lines.length;
      let j = 0;
      const m = linesInfo.n.length;
      for (i = calcMaxLines; i < n; i++) {
        otherLines[j] += "".concat(otherLines[j] ? " " : "").concat(lines[i]);
        if (i + 1 < m && linesInfo.n[i + 1]) {
          j++;
        }
      }
      renderInfo.remainingText = otherLines.join("\n");
      renderInfo.moreTextLines = true;
      lines = usedLines;
    } else {
      renderInfo.moreTextLines = false;
      renderInfo.remainingText = "";
    }
    let maxLineWidth = 0;
    const lineWidths = [];
    for (let i = 0; i < lines.length; i++) {
      const lineWidth = this.measureText(lines[i], letterSpacing) + (i === 0 ? textIndent : 0);
      lineWidths.push(lineWidth);
      maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }
    renderInfo.lineWidths = lineWidths;
    if (!w) {
      width = maxLineWidth + paddingLeft + paddingRight;
      innerWidth = maxLineWidth;
    }
    let height;
    if (h) {
      height = h;
    } else {
      height = calcHeight(this._settings.textBaseline, fontSize, lineHeight, lines.length, offsetY);
    }
    if (offsetY === null) {
      offsetY = fontSize;
    }
    renderInfo.w = width;
    renderInfo.h = height;
    renderInfo.lines = lines;
    renderInfo.precision = precision;
    if (!width) {
      width = 1;
    }
    if (!height) {
      height = 1;
    }
    if (cutSx || cutEx) {
      width = Math.min(width, cutEx - cutSx);
    }
    if (cutSy || cutEy) {
      height = Math.min(height, cutEy - cutSy);
    }
    renderInfo.width = width;
    renderInfo.innerWidth = innerWidth;
    renderInfo.height = height;
    renderInfo.fontSize = fontSize;
    renderInfo.cutSx = cutSx;
    renderInfo.cutSy = cutSy;
    renderInfo.cutEx = cutEx;
    renderInfo.cutEy = cutEy;
    renderInfo.lineHeight = lineHeight;
    renderInfo.defLineHeight = defLineHeight;
    renderInfo.lineWidths = lineWidths;
    renderInfo.offsetY = offsetY;
    renderInfo.paddingLeft = paddingLeft;
    renderInfo.paddingRight = paddingRight;
    renderInfo.letterSpacing = letterSpacing;
    renderInfo.textIndent = textIndent;
    renderInfo.metrics = metrics;
    return renderInfo;
  }
  draw(renderInfo, linesOverride) {
    const precision = this.getPrecision();
    const lines = (linesOverride == null ? void 0 : linesOverride.lines) || renderInfo.lines;
    const lineWidths = (linesOverride == null ? void 0 : linesOverride.lineWidths) || renderInfo.lineWidths;
    const height = linesOverride ? calcHeight(this._settings.textBaseline, renderInfo.fontSize, renderInfo.lineHeight, linesOverride.lines.length, this._settings.offsetY === null ? null : this._settings.offsetY * precision) : renderInfo.height;
    this._canvas.width = Math.min(Math.ceil(renderInfo.width + this._settings.textRenderIssueMargin), MAX_TEXTURE_DIMENSION);
    this._canvas.height = Math.min(Math.ceil(height), MAX_TEXTURE_DIMENSION);
    this.setFontProperties();
    if (renderInfo.fontSize >= 128) {
      this._context.globalAlpha = 0.01;
      this._context.fillRect(0, 0, 0.01, 0.01);
      this._context.globalAlpha = 1;
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(-renderInfo.cutSx, -renderInfo.cutSy);
    }
    let linePositionX;
    let linePositionY;
    const drawLines = [];
    const { metrics } = renderInfo;
    const ascenderPx = metrics ? metrics.ascender * renderInfo.fontSize : renderInfo.fontSize;
    const bareLineHeightPx = (metrics.ascender - metrics.descender) * renderInfo.fontSize;
    for (let i = 0, n = lines.length; i < n; i++) {
      linePositionX = i === 0 ? renderInfo.textIndent : 0;
      linePositionY = i * renderInfo.lineHeight + ascenderPx;
      if (this._settings.verticalAlign == "middle") {
        linePositionY += (renderInfo.lineHeight - bareLineHeightPx) / 2;
      } else if (this._settings.verticalAlign == "bottom") {
        linePositionY += renderInfo.lineHeight - bareLineHeightPx;
      }
      if (this._settings.textAlign === "right") {
        linePositionX += renderInfo.innerWidth - lineWidths[i];
      } else if (this._settings.textAlign === "center") {
        linePositionX += (renderInfo.innerWidth - lineWidths[i]) / 2;
      }
      linePositionX += renderInfo.paddingLeft;
      drawLines.push({
        text: lines[i],
        x: linePositionX,
        y: linePositionY,
        w: lineWidths[i]
      });
    }
    if (this._settings.highlight) {
      const color = this._settings.highlightColor;
      const hlHeight = this._settings.highlightHeight * precision || renderInfo.fontSize * 1.5;
      const offset = this._settings.highlightOffset * precision;
      const hlPaddingLeft = this._settings.highlightPaddingLeft !== null ? this._settings.highlightPaddingLeft * precision : renderInfo.paddingLeft;
      const hlPaddingRight = this._settings.highlightPaddingRight !== null ? this._settings.highlightPaddingRight * precision : renderInfo.paddingRight;
      this._context.fillStyle = getRgbaString(color);
      for (let i = 0; i < drawLines.length; i++) {
        const drawLine = drawLines[i];
        this._context.fillRect(drawLine.x - hlPaddingLeft, drawLine.y - renderInfo.offsetY + offset, drawLine.w + hlPaddingRight + hlPaddingLeft, hlHeight);
      }
    }
    let prevShadowSettings = null;
    if (this._settings.shadow) {
      prevShadowSettings = [
        this._context.shadowColor,
        this._context.shadowOffsetX,
        this._context.shadowOffsetY,
        this._context.shadowBlur
      ];
      this._context.shadowColor = getRgbaString(this._settings.shadowColor);
      this._context.shadowOffsetX = this._settings.shadowOffsetX * precision;
      this._context.shadowOffsetY = this._settings.shadowOffsetY * precision;
      this._context.shadowBlur = this._settings.shadowBlur * precision;
    }
    this._context.fillStyle = getRgbaString(this._settings.textColor);
    for (let i = 0, n = drawLines.length; i < n; i++) {
      const drawLine = drawLines[i];
      if (renderInfo.letterSpacing === 0) {
        this._context.fillText(drawLine.text, drawLine.x, drawLine.y);
      } else {
        const textSplit = drawLine.text.split("");
        let x = drawLine.x;
        for (let i2 = 0, j = textSplit.length; i2 < j; i2++) {
          this._context.fillText(textSplit[i2], x, drawLine.y);
          x += this.measureText(textSplit[i2], renderInfo.letterSpacing);
        }
      }
    }
    if (prevShadowSettings) {
      this._context.shadowColor = prevShadowSettings[0];
      this._context.shadowOffsetX = prevShadowSettings[1];
      this._context.shadowOffsetY = prevShadowSettings[2];
      this._context.shadowBlur = prevShadowSettings[3];
    }
    if (renderInfo.cutSx || renderInfo.cutSy) {
      this._context.translate(renderInfo.cutSx, renderInfo.cutSy);
    }
  }
  wrapWord(word, wordWrapWidth, suffix) {
    const suffixWidth = this._context.measureText(suffix).width;
    const wordLen = word.length;
    const wordWidth = this._context.measureText(word).width;
    if (wordWidth <= wordWrapWidth) {
      return word;
    }
    let cutoffIndex = Math.floor(wordWrapWidth * wordLen / wordWidth);
    let truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
    if (truncWordWidth > wordWrapWidth) {
      while (cutoffIndex > 0) {
        truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
        if (truncWordWidth > wordWrapWidth) {
          cutoffIndex -= 1;
        } else {
          break;
        }
      }
    } else {
      while (cutoffIndex < wordLen) {
        truncWordWidth = this._context.measureText(word.substring(0, cutoffIndex)).width + suffixWidth;
        if (truncWordWidth < wordWrapWidth) {
          cutoffIndex += 1;
        } else {
          cutoffIndex -= 1;
          break;
        }
      }
    }
    return word.substring(0, cutoffIndex) + (wordWrapWidth >= suffixWidth ? suffix : "");
  }
  /**
   * Applies newlines to a string to have it optimally fit into the horizontal
   * bounds set by the Text object's wordWrapWidth property.
   */
  wrapText(text, wordWrapWidth, letterSpacing, indent = 0) {
    const lines = text.split(/\r?\n/g);
    let allLines = [];
    const realNewlines = [];
    for (let i = 0; i < lines.length; i++) {
      const resultLines = [];
      let result = "";
      let spaceLeft = wordWrapWidth - indent;
      const words = lines[i].split(" ");
      for (let j = 0; j < words.length; j++) {
        const wordWidth = this.measureText(words[j], letterSpacing);
        const wordWidthWithSpace = wordWidth + this.measureText(" ", letterSpacing);
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            resultLines.push(result);
            result = "";
          }
          result += words[j];
          spaceLeft = wordWrapWidth - wordWidth - (j === 0 ? indent : 0);
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += " ".concat(words[j]);
        }
      }
      resultLines.push(result);
      result = "";
      allLines = allLines.concat(resultLines);
      if (i < lines.length - 1) {
        realNewlines.push(allLines.length);
      }
    }
    return { l: allLines, n: realNewlines };
  }
  measureText(word, space = 0) {
    if (!space) {
      return this._context.measureText(word).width;
    }
    return word.split("").reduce((acc, char) => {
      return acc + this._context.measureText(char).width + space;
    }, 0);
  }
  mergeDefaults(settings) {
    return {
      text: "",
      w: 0,
      h: 0,
      fontStyle: "normal",
      fontSize: 40,
      fontFamily: null,
      trFontFace: null,
      wordWrap: true,
      wordWrapWidth: 0,
      wordBreak: false,
      textOverflow: "",
      lineHeight: null,
      textBaseline: "alphabetic",
      textAlign: "left",
      verticalAlign: "top",
      offsetY: null,
      maxLines: 0,
      maxHeight: null,
      overflowSuffix: "...",
      textColor: [1, 1, 1, 1],
      paddingLeft: 0,
      paddingRight: 0,
      shadow: false,
      shadowColor: [0, 0, 0, 1],
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowBlur: 5,
      highlight: false,
      highlightHeight: 0,
      highlightColor: [0, 0, 0, 1],
      highlightOffset: 0,
      highlightPaddingLeft: 0,
      highlightPaddingRight: 0,
      letterSpacing: 0,
      textIndent: 0,
      cutSx: 0,
      cutEx: 0,
      cutSy: 0,
      cutEy: 0,
      advancedRenderer: false,
      fontBaselineRatio: 0,
      precision: 1,
      textRenderIssueMargin: 0,
      ...settings
    };
  }
}
const resolvedGlobal = typeof self === "undefined" ? globalThis : self;
const globalFontSet = ((_a = resolvedGlobal.document) == null ? void 0 : _a.fonts) || resolvedGlobal.fonts;
function getFontCssString(props) {
  const { fontFamily, fontStyle, fontWeight, fontStretch, fontSize } = props;
  return [fontStyle, fontWeight, fontStretch, "".concat(fontSize, "px"), fontFamily].join(" ");
}
class CanvasTextRenderer extends TextRenderer {
  constructor(stage) {
    super(stage);
    __publicField(this, "canvas");
    __publicField(this, "context");
    /**
     * Font family map used to store web font faces that were added to the
     * canvas text renderer.
     */
    __publicField(this, "fontFamilies", {});
    __publicField(this, "fontFamilyArray", [this.fontFamilies]);
    __publicField(this, "type", "canvas");
    __publicField(this, "loadFont", (state) => {
      const cssString = getFontCssString(state.props);
      const trFontFace = TrFontManager.resolveFontFace(this.fontFamilyArray, state.props);
      assertTruthy(trFontFace, "Could not resolve font face for ".concat(cssString));
      state.fontInfo = {
        fontFace: trFontFace,
        cssString,
        // TODO: For efficiency we would use this here but it's not reliable on WPE -> document.fonts.check(cssString),
        loaded: false
      };
      if (!state.fontInfo.loaded) {
        globalFontSet.load(cssString).then(this.onFontLoaded.bind(this, state, cssString)).catch(this.onFontLoadError.bind(this, state, cssString));
        return;
      }
    });
    if (typeof OffscreenCanvas !== "undefined") {
      this.canvas = new OffscreenCanvas(0, 0);
    } else {
      this.canvas = document.createElement("canvas");
    }
    let context = this.canvas.getContext("2d", {
      willReadFrequently: true
    });
    if (!context) {
      this.canvas = document.createElement("canvas");
      context = this.canvas.getContext("2d", {
        willReadFrequently: true
      });
    }
    assertTruthy(context);
    this.context = context;
    this.addFontFace(new WebTrFontFace({
      fontFamily: "sans-serif",
      descriptors: {},
      fontUrl: ""
    }));
  }
  //#region Overrides
  getPropertySetters() {
    return {
      fontFamily: (state, value) => {
        state.props.fontFamily = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontWeight: (state, value) => {
        state.props.fontWeight = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontStyle: (state, value) => {
        state.props.fontStyle = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontStretch: (state, value) => {
        state.props.fontStretch = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      fontSize: (state, value) => {
        state.props.fontSize = value;
        state.fontInfo = void 0;
        this.invalidateLayoutCache(state);
      },
      text: (state, value) => {
        state.props.text = value;
        this.invalidateLayoutCache(state);
      },
      textAlign: (state, value) => {
        state.props.textAlign = value;
        this.invalidateLayoutCache(state);
      },
      color: (state, value) => {
        state.props.color = value;
        this.invalidateLayoutCache(state);
      },
      x: (state, value) => {
        state.props.x = value;
      },
      y: (state, value) => {
        state.props.y = value;
      },
      contain: (state, value) => {
        state.props.contain = value;
        this.invalidateLayoutCache(state);
      },
      width: (state, value) => {
        state.props.width = value;
        if (state.props.contain !== "none") {
          this.invalidateLayoutCache(state);
        }
      },
      height: (state, value) => {
        state.props.height = value;
        if (state.props.contain === "both") {
          this.invalidateLayoutCache(state);
        }
      },
      offsetY: (state, value) => {
        state.props.offsetY = value;
        this.invalidateLayoutCache(state);
      },
      scrollY: (state, value) => {
        state.props.scrollY = value;
      },
      letterSpacing: (state, value) => {
        state.props.letterSpacing = value;
        this.invalidateLayoutCache(state);
      },
      lineHeight: (state, value) => {
        state.props.lineHeight = value;
        this.invalidateLayoutCache(state);
      },
      maxLines: (state, value) => {
        state.props.maxLines = value;
        this.invalidateLayoutCache(state);
      },
      textBaseline: (state, value) => {
        state.props.textBaseline = value;
        this.invalidateLayoutCache(state);
      },
      verticalAlign: (state, value) => {
        state.props.verticalAlign = value;
        this.invalidateLayoutCache(state);
      },
      overflowSuffix: (state, value) => {
        state.props.overflowSuffix = value;
        this.invalidateLayoutCache(state);
      }
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canRenderFont(props) {
    return true;
  }
  isFontFaceSupported(fontFace) {
    return fontFace instanceof WebTrFontFace;
  }
  addFontFace(fontFace) {
    assertTruthy(fontFace instanceof WebTrFontFace);
    if (fontFace.fontFamily !== "sans-serif") {
      globalFontSet.add(fontFace.fontFace);
    }
    const { fontFamilies } = this;
    const familyName = fontFace.fontFace.family;
    let faceSet = fontFamilies[familyName];
    if (!faceSet) {
      faceSet = /* @__PURE__ */ new Set();
      fontFamilies[familyName] = faceSet;
    }
    faceSet.add(fontFace);
  }
  createState(props, node) {
    return {
      node,
      props,
      status: "initialState",
      updateScheduled: false,
      emitter: new EventEmitter(),
      textureNode: void 0,
      lightning2TextRenderer: new LightningTextTextureRenderer(this.canvas, this.context),
      renderInfo: void 0,
      forceFullLayoutCalc: false,
      textW: 0,
      textH: 0,
      fontInfo: void 0,
      isRenderable: false,
      debugData: {
        updateCount: 0,
        layoutCount: 0,
        drawCount: 0,
        lastLayoutNumCharacters: 0,
        layoutSum: 0,
        drawSum: 0,
        bufferSize: 0
      }
    };
  }
  updateState(state) {
    if (state.status === "initialState") {
      this.setStatus(state, "loading");
    }
    if (state.status === "loaded") {
      return;
    }
    if (!state.fontInfo) {
      return this.loadFont(state);
    }
    if (!state.fontInfo.loaded) {
      return;
    }
    if (!state.renderInfo) {
      state.renderInfo = this.calculateRenderInfo(state);
      state.textH = state.renderInfo.lineHeight * state.renderInfo.lines.length;
      state.textW = state.renderInfo.width;
      this.renderSingleCanvasPage(state);
    }
  }
  renderSingleCanvasPage(state) {
    assertTruthy(state.renderInfo);
    const node = state.node;
    const texture = this.stage.txManager.loadTexture("ImageTexture", {
      src: (function(lightning2TextRenderer, renderInfo) {
        assertTruthy(renderInfo);
        lightning2TextRenderer.draw(renderInfo, {
          lines: renderInfo.lines,
          lineWidths: renderInfo.lineWidths
        });
        if (this.canvas.width === 0 || this.canvas.height === 0) {
          return null;
        }
        return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      }).bind(this, state.lightning2TextRenderer, state.renderInfo)
    });
    if (state.textureNode) {
      state.textureNode.texture = texture;
    } else {
      const textureNode = this.stage.createNode({
        parent: node,
        texture,
        autosize: true,
        // The alpha channel of the color is ignored when rasterizing the text
        // texture so we need to pass it directly to the texture node.
        alpha: getNormalizedAlphaComponent(state.props.color)
      });
      state.textureNode = textureNode;
    }
    this.setStatus(state, "loaded");
  }
  calculateRenderInfo(state) {
    var _a2, _b;
    state.lightning2TextRenderer.settings = {
      text: state.props.text,
      textAlign: state.props.textAlign,
      fontFamily: state.props.fontFamily,
      trFontFace: (_a2 = state.fontInfo) == null ? void 0 : _a2.fontFace,
      fontSize: state.props.fontSize,
      fontStyle: [
        state.props.fontStretch,
        state.props.fontStyle,
        state.props.fontWeight
      ].join(" "),
      textColor: getNormalizedRgbaComponents(state.props.color),
      offsetY: state.props.offsetY,
      wordWrap: state.props.contain !== "none",
      wordWrapWidth: state.props.contain === "none" ? void 0 : state.props.width,
      letterSpacing: state.props.letterSpacing,
      lineHeight: (_b = state.props.lineHeight) != null ? _b : null,
      maxLines: state.props.maxLines,
      maxHeight: state.props.contain === "both" ? state.props.height - state.props.offsetY : null,
      textBaseline: state.props.textBaseline,
      verticalAlign: state.props.verticalAlign,
      overflowSuffix: state.props.overflowSuffix,
      w: state.props.contain !== "none" ? state.props.width : void 0
    };
    state.renderInfo = state.lightning2TextRenderer.calculateRenderInfo();
    return state.renderInfo;
  }
  renderQuads() {
    return;
  }
  destroyState(state) {
    if (state.status === "destroyed") {
      return;
    }
    super.destroyState(state);
    if (state.textureNode) {
      state.textureNode.destroy();
      delete state.textureNode;
    }
    delete state.renderInfo;
  }
  //#endregion Overrides
  /**
   * Invalidate the layout cache stored in the state. This will cause the text
   * to be re-rendered on the next update.
   *
   * @remarks
   * This also invalidates the visible window cache.
   *
   * @param state
   */
  invalidateLayoutCache(state) {
    state.renderInfo = void 0;
    this.setStatus(state, "loading");
    this.scheduleUpdateState(state);
  }
  onFontLoaded(state, cssString) {
    var _a2;
    if (cssString !== ((_a2 = state.fontInfo) == null ? void 0 : _a2.cssString) || !state.fontInfo) {
      return;
    }
    state.fontInfo.loaded = true;
    this.scheduleUpdateState(state);
  }
  onFontLoadError(state, cssString, error) {
    var _a2;
    if (cssString !== ((_a2 = state.fontInfo) == null ? void 0 : _a2.cssString) || !state.fontInfo) {
      return;
    }
    state.fontInfo.loaded = true;
    console.error("CanvasTextRenderer: Error loading font '".concat(state.fontInfo.cssString, "'"), error);
    this.scheduleUpdateState(state);
  }
}
const WHITE = {
  isWhite: true,
  a: 1,
  r: 255,
  g: 255,
  b: 255
};
function parseColor(abgr) {
  if (abgr === 4294967295) {
    return WHITE;
  }
  const a = (abgr >>> 24 & 255) / 255;
  const b = abgr >>> 16 & 255 & 255;
  const g = abgr >>> 8 & 255 & 255;
  const r = abgr & 255 & 255;
  return { isWhite: false, a, r, g, b };
}
function formatRgba({ a, r, g, b }) {
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
}
class CanvasCoreTexture extends CoreContextTexture {
  constructor() {
    super(...arguments);
    __publicField(this, "image");
    __publicField(this, "tintCache");
  }
  load() {
    if (this.textureSource.state !== "freed") {
      return;
    }
    this.textureSource.setState("loading");
    this.onLoadRequest().then((size) => {
      this.textureSource.setState("loaded", size);
      this.updateMemSize();
    }).catch((err) => {
      this.textureSource.setState("failed", err);
    });
  }
  free() {
    this.image = void 0;
    this.tintCache = void 0;
    this.textureSource.setState("freed");
    this.setTextureMemUse(0);
  }
  updateMemSize() {
    const mult = this.tintCache ? 8 : 4;
    if (this.textureSource.dimensions) {
      const { width, height } = this.textureSource.dimensions;
      this.setTextureMemUse(width * height * mult);
    }
  }
  hasImage() {
    return this.image !== void 0;
  }
  getImage(color) {
    var _a2;
    const image = this.image;
    assertTruthy(image, "Attempt to get unloaded image texture");
    if (color.isWhite) {
      if (this.tintCache) {
        this.tintCache = void 0;
        this.updateMemSize();
      }
      return image;
    }
    const key = formatRgba(color);
    if (((_a2 = this.tintCache) == null ? void 0 : _a2.key) === key) {
      return this.tintCache.image;
    }
    const tintedImage = this.tintTexture(image, key);
    this.tintCache = {
      key,
      image: tintedImage
    };
    this.updateMemSize();
    return tintedImage;
  }
  tintTexture(source, color) {
    const { width, height } = source;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = color;
      ctx.globalCompositeOperation = "copy";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
    }
    return canvas;
  }
  async onLoadRequest() {
    const { data } = await this.textureSource.getTextureData();
    if (data instanceof ImageData) {
      const canvas = document.createElement("canvas");
      canvas.width = data.width;
      canvas.height = data.height;
      const ctx = canvas.getContext("2d");
      if (ctx)
        ctx.putImageData(data, 0, 0);
      this.image = canvas;
      return { width: data.width, height: data.height };
    } else if (data instanceof ImageBitmap) {
      this.image = data;
      return { width: data.width, height: data.height };
    }
    return { width: 0, height: 0 };
  }
}
function getRadius(quad) {
  var _a2, _b;
  if (quad.shader instanceof UnsupportedShader) {
    const shType = quad.shader.shType;
    if (shType === ROUNDED_RECTANGLE_SHADER_TYPE) {
      return (_b = (_a2 = quad.shaderProps) == null ? void 0 : _a2.radius) != null ? _b : 0;
    }
  }
  return 0;
}
class CanvasCoreRenderer extends CoreRenderer {
  constructor(options) {
    super(options);
    __publicField(this, "context");
    __publicField(this, "canvas");
    __publicField(this, "pixelRatio");
    __publicField(this, "clearColor");
    __publicField(this, "renderToTextureActive", false);
    __publicField(this, "activeRttNode", null);
    __publicField(this, "defShaderCtr");
    this.mode = "canvas";
    this.shManager.renderer = this;
    const { canvas, pixelRatio, clearColor } = options;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.pixelRatio = pixelRatio;
    this.clearColor = clearColor ? getRgbaComponents(clearColor) : void 0;
    this.defShaderCtr = {
      type: "DefaultShader",
      props: {},
      shader: new UnsupportedShader("DefaultShader"),
      getResolvedProps: () => () => {
        return {};
      }
    };
  }
  reset() {
    this.canvas.width = this.canvas.width;
    const ctx = this.context;
    if (this.clearColor) {
      const [r, g, b, a] = this.clearColor;
      ctx.fillStyle = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a / 255, ")");
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    ctx.scale(this.pixelRatio, this.pixelRatio);
  }
  render() {
  }
  addQuad(quad) {
    const ctx = this.context;
    const { tx, ty, width, height, alpha, colorTl, colorTr, colorBr, ta, tb, tc, td, clippingRect } = quad;
    let texture = quad.texture;
    let ctxTexture = void 0;
    let frame;
    if (texture) {
      if (texture instanceof SubTexture) {
        frame = texture.props;
        texture = texture.parentTexture;
      }
      ctxTexture = texture.ctxTexture;
      if (texture.state === "freed") {
        ctxTexture.load();
        return;
      }
      if (texture.state !== "loaded" || !ctxTexture.hasImage()) {
        return;
      }
    }
    const color = parseColor(colorTl);
    const hasTransform = ta !== 1;
    const hasClipping = clippingRect.width !== 0 && clippingRect.height !== 0;
    const hasGradient = colorTl !== colorTr || colorTl !== colorBr;
    const radius = quad.shader ? getRadius(quad) : 0;
    if (hasTransform || hasClipping || radius) {
      ctx.save();
    }
    if (hasClipping) {
      const path = new Path2D();
      const { x, y, width: width2, height: height2 } = clippingRect;
      path.rect(x, y, width2, height2);
      ctx.clip(path);
    }
    if (hasTransform) {
      const scale = this.pixelRatio;
      ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
      ctx.scale(scale, scale);
      ctx.translate(-tx, -ty);
    }
    if (radius) {
      const path = new Path2D();
      path.roundRect(tx, ty, width, height, radius);
      ctx.clip(path);
    }
    if (ctxTexture) {
      const image = ctxTexture.getImage(color);
      ctx.globalAlpha = alpha;
      if (frame) {
        ctx.drawImage(image, frame.x, frame.y, frame.width, frame.height, tx, ty, width, height);
      } else {
        ctx.drawImage(image, tx, ty, width, height);
      }
      ctx.globalAlpha = 1;
    } else if (hasGradient) {
      let endX = tx;
      let endY = ty;
      let endColor;
      if (colorTl === colorTr) {
        endX = tx;
        endY = ty + height;
        endColor = parseColor(colorBr);
      } else {
        endX = tx + width;
        endY = ty;
        endColor = parseColor(colorTr);
      }
      const gradient = ctx.createLinearGradient(tx, ty, endX, endY);
      gradient.addColorStop(0, formatRgba(color));
      gradient.addColorStop(1, formatRgba(endColor));
      ctx.fillStyle = gradient;
      ctx.fillRect(tx, ty, width, height);
    } else {
      ctx.fillStyle = formatRgba(color);
      ctx.fillRect(tx, ty, width, height);
    }
    if (hasTransform || hasClipping || radius) {
      ctx.restore();
    }
  }
  createCtxTexture(textureSource) {
    return new CanvasCoreTexture(this.txMemManager, textureSource);
  }
  getShaderManager() {
    return this.shManager;
  }
  getDefShaderCtr() {
    return this.defShaderCtr;
  }
  renderRTTNodes() {
  }
  removeRTTNode(node) {
  }
  renderToTexture(node) {
  }
  getBufferInfo() {
    return null;
  }
}
const stylePropertyMap = {
  alpha: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "opacity", value: "".concat(v) };
  },
  x: (x) => {
    return { prop: "left", value: "".concat(x, "px") };
  },
  y: (y) => {
    return { prop: "top", value: "".concat(y, "px") };
  },
  width: (w) => {
    if (w === 0) {
      return null;
    }
    return { prop: "width", value: "".concat(w, "px") };
  },
  height: (h) => {
    if (h === 0) {
      return null;
    }
    return { prop: "height", value: "".concat(h, "px") };
  },
  zIndex: () => "zIndex",
  fontFamily: () => "font-family",
  fontSize: () => "font-size",
  fontStyle: () => "font-style",
  fontWeight: () => "font-weight",
  fontStretch: () => "font-stretch",
  lineHeight: () => "line-height",
  letterSpacing: () => "letter-spacing",
  textAlign: () => "text-align",
  overflowSuffix: () => "overflow-suffix",
  maxLines: () => "max-lines",
  contain: () => "contain",
  verticalAlign: () => "vertical-align",
  clipping: (v) => {
    if (v === false) {
      return null;
    }
    return { prop: "overflow", value: v ? "hidden" : "visible" };
  },
  rotation: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "transform", value: "rotate(".concat(v, "rad)") };
  },
  scale: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scale(".concat(v, ")") };
  },
  scaleX: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleX(".concat(v, ")") };
  },
  scaleY: (v) => {
    if (v === 1) {
      return null;
    }
    return { prop: "transform", value: "scaleY(".concat(v, ")") };
  },
  color: (v) => {
    if (v === 0) {
      return null;
    }
    return { prop: "color", value: convertColorToRgba(v) };
  }
};
const convertColorToRgba = (color) => {
  const a = (color & 255) / 255;
  const b = color >> 8 & 255;
  const g = color >> 16 & 255;
  const r = color >> 24 & 255;
  return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
};
const domPropertyMap = {
  id: "test-id"
};
class Inspector {
  constructor(canvas, settings) {
    __publicField(this, "root", null);
    __publicField(this, "canvas", null);
    __publicField(this, "height", 1080);
    __publicField(this, "width", 1920);
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    var _a2, _b, _c, _d, _e, _f;
    if (isProductionEnvironment())
      return;
    if (!settings) {
      throw new Error("settings is required");
    }
    this.height = Math.ceil((_b = settings.appHeight) != null ? _b : 1080 / ((_a2 = settings.deviceLogicalPixelRatio) != null ? _a2 : 1));
    this.width = Math.ceil((_d = settings.appWidth) != null ? _d : 1920 / ((_c = settings.deviceLogicalPixelRatio) != null ? _c : 1));
    this.scaleX = (_e = settings.deviceLogicalPixelRatio) != null ? _e : 1;
    this.scaleY = (_f = settings.deviceLogicalPixelRatio) != null ? _f : 1;
    this.canvas = canvas;
    this.root = document.createElement("div");
    this.setRootPosition();
    document.body.appendChild(this.root);
    const mutationObserver = new MutationObserver(this.setRootPosition.bind(this));
    mutationObserver.observe(canvas, {
      attributes: true,
      childList: false,
      subtree: false
    });
    const resizeObserver = new ResizeObserver(this.setRootPosition.bind(this));
    resizeObserver.observe(canvas);
    window.addEventListener("resize", this.setRootPosition.bind(this));
    console.warn("Inspector is enabled, this will impact performance");
  }
  setRootPosition() {
    if (this.root === null || this.canvas === null) {
      return;
    }
    const rect = this.canvas.getBoundingClientRect();
    const top = document.documentElement.scrollTop + rect.top;
    const left = document.documentElement.scrollLeft + rect.left;
    this.root.id = "root";
    this.root.style.left = "".concat(left, "px");
    this.root.style.top = "".concat(top, "px");
    this.root.style.width = "".concat(this.width, "px");
    this.root.style.height = "".concat(this.height, "px");
    this.root.style.position = "absolute";
    this.root.style.transformOrigin = "0 0 0";
    this.root.style.transform = "scale(".concat(this.scaleX, ", ").concat(this.scaleY, ")");
    this.root.style.overflow = "hidden";
    this.root.style.zIndex = "65534";
  }
  createDiv(id, properties) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.id = id.toString();
    for (const key in properties) {
      this.updateNodeProperty(
        div,
        // really typescript? really?
        key,
        properties[key]
      );
    }
    return div;
  }
  createNode(node) {
    const div = this.createDiv(node.id, node.props);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createTextNode(node) {
    const div = this.createDiv(node.id, node.props);
    div.node = node;
    node.div = div;
    return this.createProxy(node, div);
  }
  createProxy(node, div) {
    return new Proxy(node, {
      set: (target, property, value) => {
        this.updateNodeProperty(div, property, value);
        return Reflect.set(target, property, value);
      },
      get: (target, property, receiver) => {
        if (property === "destroy") {
          this.destroyNode(target.id);
        }
        if (property === "animate") {
          return (props, settings) => {
            const anim = target.animate(props, settings);
            return new Proxy(anim, {
              get: (target2, property2, receiver2) => {
                if (property2 === "start") {
                  this.animateNode(div, props, settings);
                }
                return Reflect.get(target2, property2, receiver2);
              }
            });
          };
        }
        return Reflect.get(target, property, receiver);
      }
    });
  }
  destroyNode(id) {
    const div = document.getElementById(id.toString());
    div == null ? void 0 : div.remove();
  }
  updateNodeProperty(div, property, value) {
    var _a2;
    if (this.root === null || value === void 0 || value === null) {
      return;
    }
    if (property === "parent") {
      const parentId = value.id;
      if (parentId === 1) {
        this.root.appendChild(div);
        return;
      }
      const parent = document.getElementById(parentId.toString());
      parent == null ? void 0 : parent.appendChild(div);
      return;
    }
    if (property === "text") {
      div.innerHTML = String(value);
      div.style.visibility = "hidden";
      return;
    }
    if (property === "src" && value) {
      div.setAttribute("data-src", String(value));
      return;
    }
    if (stylePropertyMap[property]) {
      const mappedStyleResponse = (_a2 = stylePropertyMap[property]) == null ? void 0 : _a2.call(stylePropertyMap, value);
      if (mappedStyleResponse === null) {
        return;
      }
      if (typeof mappedStyleResponse === "string") {
        div.style.setProperty(mappedStyleResponse, String(value));
        return;
      }
      if (typeof mappedStyleResponse === "object") {
        div.style.setProperty(mappedStyleResponse.prop, mappedStyleResponse.value);
      }
      return;
    }
    if (domPropertyMap[property]) {
      const domProperty = domPropertyMap[property];
      if (!domProperty) {
        return;
      }
      div.setAttribute(String(domProperty), String(value));
      return;
    }
    if (property === "data") {
      for (const key in value) {
        const keyValue = value[key];
        if (keyValue === void 0) {
          div.removeAttribute("data-".concat(key));
        } else {
          div.setAttribute("data-".concat(key), String(keyValue));
        }
      }
      return;
    }
  }
  // simple animation handler
  animateNode(div, props, settings) {
    const {
      duration = 1e3,
      delay: delay2 = 0
      // easing = 'linear',
      // repeat = 0,
      // loop = false,
      // stopMethod = false,
    } = settings;
    const { x, y, width, height, alpha = 1, rotation = 0, scale = 1, color } = props;
    function animate() {
      setTimeout(() => {
        div.style.top = "".concat(y, "px");
        div.style.left = "".concat(x, "px");
        div.style.width = "".concat(width, "px");
        div.style.height = "".concat(height, "px");
        div.style.opacity = "".concat(alpha);
        div.style.rotate = "".concat(rotation, "rad");
        div.style.scale = "".concat(scale);
        div.style.color = convertColorToRgba(color);
      }, duration);
    }
    setTimeout(animate, delay2);
  }
}
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2O = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
var define_property = main$2O;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var defineProperty$8 = define_property;
function hasDefinePropertySupport$1() {
  try {
    defineProperty$8({}, "x", {});
    return true;
  } catch (err) {
    return false;
  }
}
var has_define_property_support = hasDefinePropertySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var defineProperty$7 = Object.defineProperty;
var builtin$e = defineProperty$7;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isNumber$9(value) {
  return typeof value === "number";
}
var is_number = isNumber$9;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function startsWithMinus(str) {
  return str[0] === "-";
}
function zeros(n) {
  var out = "";
  var i;
  for (i = 0; i < n; i++) {
    out += "0";
  }
  return out;
}
function zeroPad$2(str, width, right) {
  var negative = false;
  var pad = width - str.length;
  if (pad < 0) {
    return str;
  }
  if (startsWithMinus(str)) {
    negative = true;
    str = str.substr(1);
  }
  str = right ? str + zeros(pad) : zeros(pad) + str;
  if (negative) {
    str = "-" + str;
  }
  return str;
}
var zero_pad = zeroPad$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber$8 = is_number;
var zeroPad$1 = zero_pad;
var lowercase$1 = String.prototype.toLowerCase;
var uppercase$1 = String.prototype.toUpperCase;
function formatInteger$1(token) {
  var base;
  var out;
  var i;
  switch (token.specifier) {
    case "b":
      base = 2;
      break;
    case "o":
      base = 8;
      break;
    case "x":
    case "X":
      base = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      base = 10;
      break;
  }
  out = token.arg;
  i = parseInt(out, 10);
  if (!isFinite(i)) {
    if (!isNumber$8(out)) {
      throw new Error("invalid integer. Value: " + out);
    }
    i = 0;
  }
  if (i < 0 && (token.specifier === "u" || base !== 10)) {
    i = 4294967295 + i + 1;
  }
  if (i < 0) {
    out = (-i).toString(base);
    if (token.precision) {
      out = zeroPad$1(out, token.precision, token.padRight);
    }
    out = "-" + out;
  } else {
    out = i.toString(base);
    if (!i && !token.precision) {
      out = "";
    } else if (token.precision) {
      out = zeroPad$1(out, token.precision, token.padRight);
    }
    if (token.sign) {
      out = token.sign + out;
    }
  }
  if (base === 16) {
    if (token.alternate) {
      out = "0x" + out;
    }
    out = token.specifier === uppercase$1.call(token.specifier) ? uppercase$1.call(out) : lowercase$1.call(out);
  }
  if (base === 8) {
    if (token.alternate && out.charAt(0) !== "0") {
      out = "0" + out;
    }
  }
  return out;
}
var format_integer = formatInteger$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isString$8(value) {
  return typeof value === "string";
}
var is_string$1 = isString$8;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber$7 = is_number;
var abs = Math.abs;
var lowercase = String.prototype.toLowerCase;
var uppercase = String.prototype.toUpperCase;
var replace = String.prototype.replace;
var RE_EXP_POS_DIGITS = /e\+(\d)$/;
var RE_EXP_NEG_DIGITS = /e-(\d)$/;
var RE_ONLY_DIGITS = /^(\d+)$/;
var RE_DIGITS_BEFORE_EXP = /^(\d+)e/;
var RE_TRAILING_PERIOD_ZERO = /\.0$/;
var RE_PERIOD_ZERO_EXP = /\.0*e/;
var RE_ZERO_BEFORE_EXP = /(\..*[^0])0*e/;
function formatDouble$1(token) {
  var digits;
  var out;
  var f2 = parseFloat(token.arg);
  if (!isFinite(f2)) {
    if (!isNumber$7(token.arg)) {
      throw new Error("invalid floating-point number. Value: " + out);
    }
    f2 = token.arg;
  }
  switch (token.specifier) {
    case "e":
    case "E":
      out = f2.toExponential(token.precision);
      break;
    case "f":
    case "F":
      out = f2.toFixed(token.precision);
      break;
    case "g":
    case "G":
      if (abs(f2) < 1e-4) {
        digits = token.precision;
        if (digits > 0) {
          digits -= 1;
        }
        out = f2.toExponential(digits);
      } else {
        out = f2.toPrecision(token.precision);
      }
      if (!token.alternate) {
        out = replace.call(out, RE_ZERO_BEFORE_EXP, "$1e");
        out = replace.call(out, RE_PERIOD_ZERO_EXP, "e");
        out = replace.call(out, RE_TRAILING_PERIOD_ZERO, "");
      }
      break;
    default:
      throw new Error("invalid double notation. Value: " + token.specifier);
  }
  out = replace.call(out, RE_EXP_POS_DIGITS, "e+0$1");
  out = replace.call(out, RE_EXP_NEG_DIGITS, "e-0$1");
  if (token.alternate) {
    out = replace.call(out, RE_ONLY_DIGITS, "$1.");
    out = replace.call(out, RE_DIGITS_BEFORE_EXP, "$1.e");
  }
  if (f2 >= 0 && token.sign) {
    out = token.sign + out;
  }
  out = token.specifier === uppercase.call(token.specifier) ? uppercase.call(out) : lowercase.call(out);
  return out;
}
var format_double = formatDouble$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function spaces(n) {
  var out = "";
  var i;
  for (i = 0; i < n; i++) {
    out += " ";
  }
  return out;
}
function spacePad$1(str, width, right) {
  var pad = width - str.length;
  if (pad < 0) {
    return str;
  }
  str = right ? str + spaces(pad) : spaces(pad) + str;
  return str;
}
var space_pad = spacePad$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var formatInteger = format_integer;
var isString$7 = is_string$1;
var formatDouble = format_double;
var spacePad = space_pad;
var zeroPad = zero_pad;
var fromCharCode = String.fromCharCode;
var isnan$2 = isNaN;
var isArray$6 = Array.isArray;
function initialize(token) {
  var out = {};
  out.specifier = token.specifier;
  out.precision = token.precision === void 0 ? 1 : token.precision;
  out.width = token.width;
  out.flags = token.flags || "";
  out.mapping = token.mapping;
  return out;
}
function formatInterpolate(tokens) {
  var hasPeriod;
  var flags;
  var token;
  var flag;
  var num;
  var out;
  var pos;
  var i;
  var j;
  if (!isArray$6(tokens)) {
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + tokens + "`.");
  }
  out = "";
  pos = 1;
  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];
    if (isString$7(token)) {
      out += token;
    } else {
      hasPeriod = token.precision !== void 0;
      token = initialize(token);
      if (!token.specifier) {
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + i + "`. Value: `" + token + "`.");
      }
      if (token.mapping) {
        pos = token.mapping;
      }
      flags = token.flags;
      for (j = 0; j < flags.length; j++) {
        flag = flags.charAt(j);
        switch (flag) {
          case " ":
            token.sign = " ";
            break;
          case "+":
            token.sign = "+";
            break;
          case "-":
            token.padRight = true;
            token.padZeros = false;
            break;
          case "0":
            token.padZeros = flags.indexOf("-") < 0;
            break;
          case "#":
            token.alternate = true;
            break;
          default:
            throw new Error("invalid flag: " + flag);
        }
      }
      if (token.width === "*") {
        token.width = parseInt(arguments[pos], 10);
        pos += 1;
        if (isnan$2(token.width)) {
          throw new TypeError("the argument for * width at position " + pos + " is not a number. Value: `" + token.width + "`.");
        }
        if (token.width < 0) {
          token.padRight = true;
          token.width = -token.width;
        }
      }
      if (hasPeriod) {
        if (token.precision === "*") {
          token.precision = parseInt(arguments[pos], 10);
          pos += 1;
          if (isnan$2(token.precision)) {
            throw new TypeError("the argument for * precision at position " + pos + " is not a number. Value: `" + token.precision + "`.");
          }
          if (token.precision < 0) {
            token.precision = 1;
            hasPeriod = false;
          }
        }
      }
      token.arg = arguments[pos];
      switch (token.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          if (hasPeriod) {
            token.padZeros = false;
          }
          token.arg = formatInteger(token);
          break;
        case "s":
          token.maxWidth = hasPeriod ? token.precision : -1;
          break;
        case "c":
          if (!isnan$2(token.arg)) {
            num = parseInt(token.arg, 10);
            if (num < 0 || num > 127) {
              throw new Error("invalid character code. Value: " + token.arg);
            }
            token.arg = isnan$2(num) ? String(token.arg) : fromCharCode(num);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          if (!hasPeriod) {
            token.precision = 6;
          }
          token.arg = formatDouble(token);
          break;
        default:
          throw new Error("invalid specifier: " + token.specifier);
      }
      if (token.maxWidth >= 0 && token.arg.length > token.maxWidth) {
        token.arg = token.arg.substring(0, token.maxWidth);
      }
      if (token.padZeros) {
        token.arg = zeroPad(token.arg, token.width || token.precision, token.padRight);
      } else if (token.width) {
        token.arg = spacePad(token.arg, token.width, token.padRight);
      }
      out += token.arg || "";
      pos += 1;
    }
  }
  return out;
}
var main$2N = formatInterpolate;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2M = main$2N;
var lib$1N = main$2M;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RE$4 = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function parse(match) {
  var token = {
    "mapping": match[1] ? parseInt(match[1], 10) : void 0,
    "flags": match[2],
    "width": match[3],
    "precision": match[5],
    "specifier": match[6]
  };
  if (match[4] === "." && match[5] === void 0) {
    token.precision = "1";
  }
  return token;
}
function formatTokenize(str) {
  var content;
  var tokens;
  var match;
  var prev;
  tokens = [];
  prev = 0;
  match = RE$4.exec(str);
  while (match) {
    content = str.slice(prev, RE$4.lastIndex - match[0].length);
    if (content.length) {
      tokens.push(content);
    }
    tokens.push(parse(match));
    prev = RE$4.lastIndex;
    match = RE$4.exec(str);
  }
  content = str.slice(prev);
  if (content.length) {
    tokens.push(content);
  }
  return tokens;
}
var main$2L = formatTokenize;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2K = main$2L;
var lib$1M = main$2K;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isString$6(value) {
  return typeof value === "string";
}
var is_string = isString$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var interpolate = lib$1N;
var tokenize = lib$1M;
var isString$5 = is_string;
function format$f(str) {
  var args;
  var i;
  if (!isString$5(str)) {
    throw new TypeError(format$f("invalid argument. First argument must be a string. Value: `%s`.", str));
  }
  args = [tokenize(str)];
  for (i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return interpolate.apply(null, args);
}
var main$2J = format$f;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2I = main$2J;
var lib$1L = main$2I;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var format$e = lib$1L;
var objectProtoype = Object.prototype;
var toStr$5 = objectProtoype.toString;
var defineGetter = objectProtoype.__defineGetter__;
var defineSetter = objectProtoype.__defineSetter__;
var lookupGetter = objectProtoype.__lookupGetter__;
var lookupSetter = objectProtoype.__lookupSetter__;
function defineProperty$6(obj2, prop, descriptor) {
  var prototype;
  var hasValue;
  var hasGet;
  var hasSet;
  if (typeof obj2 !== "object" || obj2 === null || toStr$5.call(obj2) === "[object Array]") {
    throw new TypeError(format$e("invalid argument. First argument must be an object. Value: `%s`.", obj2));
  }
  if (typeof descriptor !== "object" || descriptor === null || toStr$5.call(descriptor) === "[object Array]") {
    throw new TypeError(format$e("invalid argument. Property descriptor must be an object. Value: `%s`.", descriptor));
  }
  hasValue = "value" in descriptor;
  if (hasValue) {
    if (lookupGetter.call(obj2, prop) || lookupSetter.call(obj2, prop)) {
      prototype = obj2.__proto__;
      obj2.__proto__ = objectProtoype;
      delete obj2[prop];
      obj2[prop] = descriptor.value;
      obj2.__proto__ = prototype;
    } else {
      obj2[prop] = descriptor.value;
    }
  }
  hasGet = "get" in descriptor;
  hasSet = "set" in descriptor;
  if (hasValue && (hasGet || hasSet)) {
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  }
  if (hasGet && defineGetter) {
    defineGetter.call(obj2, prop, descriptor.get);
  }
  if (hasSet && defineSetter) {
    defineSetter.call(obj2, prop, descriptor.set);
  }
  return obj2;
}
var polyfill$r = defineProperty$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasDefinePropertySupport = has_define_property_support;
var builtin$d = builtin$e;
var polyfill$q = polyfill$r;
var defineProperty$5;
if (hasDefinePropertySupport()) {
  defineProperty$5 = builtin$d;
} else {
  defineProperty$5 = polyfill$q;
}
var lib$1K = defineProperty$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var defineProperty$4 = lib$1K;
function setNonEnumerableReadOnly(obj2, prop, value) {
  defineProperty$4(obj2, prop, {
    "configurable": false,
    "enumerable": false,
    "writable": false,
    "value": value
  });
}
var main$2H = setNonEnumerableReadOnly;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2G = main$2H;
var lib$1J = main$2G;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var defineProperty$3 = lib$1K;
function setNonEnumerableReadOnlyAccessor(obj2, prop, getter2) {
  defineProperty$3(obj2, prop, {
    "configurable": false,
    "enumerable": false,
    "get": getter2
  });
}
var main$2F = setNonEnumerableReadOnlyAccessor;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2E = main$2F;
var lib$1I = main$2E;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var defineProperty$2 = lib$1K;
function setNonEnumerableReadWriteAccessor(obj2, prop, getter2, setter2) {
  defineProperty$2(obj2, prop, {
    "configurable": false,
    "enumerable": false,
    "get": getter2,
    "set": setter2
  });
}
var main$2D = setNonEnumerableReadWriteAccessor;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2C = main$2D;
var lib$1H = main$2C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var has = Object.prototype.hasOwnProperty;
function hasOwnProp$4(value, property) {
  if (value === void 0 || value === null) {
    return false;
  }
  return has.call(value, property);
}
var main$2B = hasOwnProp$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2A = main$2B;
var lib$1G = main$2A;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function hasSymbolSupport() {
  return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
}
var main$2z = hasSymbolSupport;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2y = main$2z;
var lib$1F = main$2y;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasSymbols = lib$1F;
var FLG$3 = hasSymbols();
function hasToStringTagSupport() {
  return FLG$3 && typeof Symbol.toStringTag === "symbol";
}
var main$2x = hasToStringTagSupport;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2w = main$2x;
var lib$1E = main$2w;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var toStr$4 = Object.prototype.toString;
var tostring$4 = toStr$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var toStr$3 = tostring$4;
function nativeClass$i(v) {
  return toStr$3.call(v);
}
var main$2v = nativeClass$i;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Sym = typeof Symbol === "function" ? Symbol : void 0;
var main$2u = Sym;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2t = main$2u;
var lib$1D = main$2t;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Symbol$2 = lib$1D;
var toStrTag = typeof Symbol$2 === "function" ? Symbol$2.toStringTag : "";
var tostringtag = toStrTag;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasOwnProp$3 = lib$1G;
var toStringTag = tostringtag;
var toStr$2 = tostring$4;
function nativeClass$h(v) {
  var isOwn;
  var tag;
  var out;
  if (v === null || v === void 0) {
    return toStr$2.call(v);
  }
  tag = v[toStringTag];
  isOwn = hasOwnProp$3(v, toStringTag);
  try {
    v[toStringTag] = void 0;
  } catch (err) {
    return toStr$2.call(v);
  }
  out = toStr$2.call(v);
  if (isOwn) {
    v[toStringTag] = tag;
  } else {
    delete v[toStringTag];
  }
  return out;
}
var polyfill$p = nativeClass$h;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasToStringTag$3 = lib$1E;
var builtin$c = main$2v;
var polyfill$o = polyfill$p;
var main$2s;
if (hasToStringTag$3()) {
  main$2s = polyfill$o;
} else {
  main$2s = builtin$c;
}
var lib$1C = main$2s;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$g = lib$1C;
var f;
function isArray$5(value) {
  return nativeClass$g(value) === "[object Array]";
}
if (Array.isArray) {
  f = Array.isArray;
} else {
  f = isArray$5;
}
var main$2r = f;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2q = main$2r;
var lib$1B = main$2q;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArray$4 = lib$1B;
function isObject$g(value) {
  return typeof value === "object" && value !== null && !isArray$4(value);
}
var main$2p = isObject$g;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2o = main$2p;
var lib$1A = main$2o;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RE$3 = /./;
var re = RE$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isBoolean$4(value) {
  return typeof value === "boolean";
}
var primitive$5 = isBoolean$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bool = Boolean;
var main$2n = Bool;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2m = main$2n;
var lib$1z = main$2m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var toString$5 = Boolean.prototype.toString;
var tostring$3 = toString$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var toString$4 = tostring$3;
function test$5(value) {
  try {
    toString$4.call(value);
    return true;
  } catch (err) {
    return false;
  }
}
var try2serialize$1 = test$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasToStringTag$2 = lib$1E;
var nativeClass$f = lib$1C;
var Boolean$1 = lib$1z;
var test$4 = try2serialize$1;
var FLG$2 = hasToStringTag$2();
function isBoolean$3(value) {
  if (typeof value === "object") {
    if (value instanceof Boolean$1) {
      return true;
    }
    if (FLG$2) {
      return test$4(value);
    }
    return nativeClass$f(value) === "[object Boolean]";
  }
  return false;
}
var object$5 = isBoolean$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$b = primitive$5;
var isObject$f = object$5;
function isBoolean$2(value) {
  return isPrimitive$b(value) || isObject$f(value);
}
var main$2l = isBoolean$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$e = lib$1J;
var main$2k = main$2l;
var isPrimitive$a = primitive$5;
var isObject$e = object$5;
setReadOnly$e(main$2k, "isPrimitive", isPrimitive$a);
setReadOnly$e(main$2k, "isObject", isObject$e);
var lib$1y = main$2k;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getGlobal$2() {
  return new Function("return this;")();
}
var codegen = getGlobal$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var obj$2 = typeof self === "object" ? self : null;
var self_1 = obj$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var obj$1 = typeof window === "object" ? window : null;
var window_1 = obj$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var obj = typeof globalThis === "object" ? globalThis : null;
var global_this = obj;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isBoolean$1 = lib$1y.isPrimitive;
var format$d = lib$1L;
var getThis = codegen;
var Self = self_1;
var Win = window_1;
var GlobalThis = global_this;
function getGlobal$1(codegen2) {
  if (arguments.length) {
    if (!isBoolean$1(codegen2)) {
      throw new TypeError(format$d("invalid argument. Must provide a boolean. Value: `%s`.", codegen2));
    }
    if (codegen2) {
      return getThis();
    }
  }
  if (GlobalThis) {
    return GlobalThis;
  }
  if (Self) {
    return Self;
  }
  if (Win) {
    return Win;
  }
  throw new Error("unexpected error. Unable to resolve global object.");
}
var browser = getGlobal$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var getGlobal = browser;
var root = getGlobal();
var nodeList$1 = root.document && root.document.childNodes;
var nodelist = nodeList$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var typedarray$1 = Int8Array;
var typedarray_1 = typedarray$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RE$2 = re;
var nodeList = nodelist;
var typedarray = typedarray_1;
function check() {
  if (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof RE$2 === "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof typedarray === "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof nodeList === "function"
  ) {
    return true;
  }
  return false;
}
var check_1 = check;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function reFunctionName$1() {
  return /^\s*function\s*([^(]*)/i;
}
var main$2j = reFunctionName$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var reFunctionName = main$2j;
var RE_FUNCTION_NAME = reFunctionName();
var regexp = RE_FUNCTION_NAME;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$d = lib$1J;
var main$2i = main$2j;
var REGEXP = regexp;
setReadOnly$d(main$2i, "REGEXP", REGEXP);
var lib$1x = main$2i;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArray$3 = lib$1B;
var format$c = lib$1L;
function arrayfcn(predicate) {
  if (typeof predicate !== "function") {
    throw new TypeError(format$c("invalid argument. Must provide a function. Value: `%s`.", predicate));
  }
  return every3;
  function every3(value) {
    var len;
    var i;
    if (!isArray$3(value)) {
      return false;
    }
    len = value.length;
    if (len === 0) {
      return false;
    }
    for (i = 0; i < len; i++) {
      if (predicate(value[i]) === false) {
        return false;
      }
    }
    return true;
  }
}
var main$2h = arrayfcn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2g = main$2h;
var lib$1w = main$2g;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isObjectLike$1(value) {
  return value !== null && typeof value === "object";
}
var main$2f = isObjectLike$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$c = lib$1J;
var arrayfun = lib$1w;
var main$2e = main$2f;
var isObjectLikeArray = arrayfun(main$2e);
setReadOnly$c(main$2e, "isObjectLikeArray", isObjectLikeArray);
var lib$1v = main$2e;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isObjectLike = lib$1v;
function isBuffer$2(value) {
  return isObjectLike(value) && // eslint-disable-next-line no-underscore-dangle
  (value._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  value.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof value.constructor.isBuffer === "function" && value.constructor.isBuffer(value));
}
var main$2d = isBuffer$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2c = main$2d;
var lib$1u = main$2c;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$e = lib$1C;
var RE$1 = lib$1x.REGEXP;
var isBuffer$1 = lib$1u;
function constructorName$1(v) {
  var match;
  var name;
  var ctor2;
  name = nativeClass$e(v).slice(8, -1);
  if ((name === "Object" || name === "Error") && v.constructor) {
    ctor2 = v.constructor;
    if (typeof ctor2.name === "string") {
      return ctor2.name;
    }
    match = RE$1.exec(ctor2.toString());
    if (match) {
      return match[1];
    }
  }
  if (isBuffer$1(v)) {
    return "Buffer";
  }
  return name;
}
var main$2b = constructorName$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2a = main$2b;
var lib$1t = main$2a;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctorName$4 = lib$1t;
function typeOf$2(v) {
  var type2;
  if (v === null) {
    return "null";
  }
  type2 = typeof v;
  if (type2 === "object") {
    return ctorName$4(v).toLowerCase();
  }
  return type2;
}
var main$29 = typeOf$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctorName$3 = lib$1t;
function typeOf$1(v) {
  return ctorName$3(v).toLowerCase();
}
var polyfill$n = typeOf$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var usePolyfill = check_1;
var builtin$b = main$29;
var polyfill$m = polyfill$n;
var main$28 = usePolyfill() ? polyfill$m : builtin$b;
var lib$1s = main$28;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var typeOf = lib$1s;
function isFunction$5(value) {
  return typeOf(value) === "function";
}
var main$27 = isFunction$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$26 = main$27;
var lib$1r = main$26;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Obj = Object;
var main$25 = Obj;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$24 = main$25;
var lib$1q = main$24;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var getProto$4 = Object.getPrototypeOf;
var native = getProto$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function getProto$3(obj2) {
  return obj2.__proto__;
}
var proto = getProto$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$d = lib$1C;
var getProto$2 = proto;
function getPrototypeOf$5(obj2) {
  var proto2 = getProto$2(obj2);
  if (proto2 || proto2 === null) {
    return proto2;
  }
  if (nativeClass$d(obj2.constructor) === "[object Function]") {
    return obj2.constructor.prototype;
  }
  if (obj2 instanceof Object) {
    return Object.prototype;
  }
  return null;
}
var polyfill$l = getPrototypeOf$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFunction$4 = lib$1r;
var builtin$a = native;
var polyfill$k = polyfill$l;
var getProto$1;
if (isFunction$4(Object.getPrototypeOf)) {
  getProto$1 = builtin$a;
} else {
  getProto$1 = polyfill$k;
}
var detect = getProto$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Object$1 = lib$1q;
var getProto = detect;
function getPrototypeOf$4(value) {
  if (value === null || value === void 0) {
    return null;
  }
  value = Object$1(value);
  return getProto(value);
}
var main$23 = getPrototypeOf$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$22 = main$23;
var lib$1p = main$22;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isObject$d = lib$1A;
var isFunction$3 = lib$1r;
var getPrototypeOf$3 = lib$1p;
var hasOwnProp$2 = lib$1G;
var nativeClass$c = lib$1C;
var objectPrototype = Object.prototype;
function ownProps(obj2) {
  var key;
  for (key in obj2) {
    if (!hasOwnProp$2(obj2, key)) {
      return false;
    }
  }
  return true;
}
function isPlainObject(value) {
  var proto2;
  if (!isObject$d(value)) {
    return false;
  }
  proto2 = getPrototypeOf$3(value);
  if (!proto2) {
    return true;
  }
  return (
    // Cannot have own `constructor` property:
    !hasOwnProp$2(value, "constructor") && // Prototype `constructor` property must be a function (see also https://bugs.jquery.com/ticket/9897 and http://stackoverflow.com/questions/18531624/isplainobject-thing):
    hasOwnProp$2(proto2, "constructor") && isFunction$3(proto2.constructor) && nativeClass$c(proto2.constructor) === "[object Function]" && // Test for object-specific method:
    hasOwnProp$2(proto2, "isPrototypeOf") && isFunction$3(proto2.isPrototypeOf) && // Test if the prototype matches the global `Object` prototype (same realm):
    (proto2 === objectPrototype || // Test that all properties are own properties (cross-realm; *most* likely a plain object):
    ownProps(value))
  );
}
var main$21 = isPlainObject;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$20 = main$21;
var lib$1o = main$20;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var floor$4 = Math.floor;
var main$1$ = floor$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1_ = main$1$;
var lib$1n = main$1_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var floor$3 = lib$1n;
function isInteger$d(x) {
  return floor$3(x) === x;
}
var main$1Z = isInteger$d;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1Y = main$1Z;
var lib$1m = main$1Y;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MAX_TYPED_ARRAY_LENGTH = 9007199254740991;
var lib$1l = MAX_TYPED_ARRAY_LENGTH;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$c = lib$1m;
var MAX_LENGTH$1 = lib$1l;
function isCollection$3(value) {
  return typeof value === "object" && value !== null && typeof value.length === "number" && isInteger$c(value.length) && value.length >= 0 && value.length <= MAX_LENGTH$1;
}
var main$1X = isCollection$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1W = main$1X;
var lib$1k = main$1W;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$b = lib$1C;
var hasUint32Array = typeof Uint32Array === "function";
function isUint32Array$3(value) {
  return hasUint32Array && value instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  nativeClass$b(value) === "[object Uint32Array]";
}
var main$1V = isUint32Array$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint32Array$2 = main$1V;
var lib$1j = isUint32Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isNumber$6(value) {
  return typeof value === "number";
}
var primitive$4 = isNumber$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1U = Number;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1T = main$1U;
var lib$1i = main$1T;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Number$3 = lib$1i;
var toString$3 = Number$3.prototype.toString;
var tostring$2 = toString$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var toString$2 = tostring$2;
function test$3(value) {
  try {
    toString$2.call(value);
    return true;
  } catch (err) {
    return false;
  }
}
var try2serialize = test$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasToStringTag$1 = lib$1E;
var nativeClass$a = lib$1C;
var Number$2 = lib$1i;
var test$2 = try2serialize;
var FLG$1 = hasToStringTag$1();
function isNumber$5(value) {
  if (typeof value === "object") {
    if (value instanceof Number$2) {
      return true;
    }
    if (FLG$1) {
      return test$2(value);
    }
    return nativeClass$a(value) === "[object Number]";
  }
  return false;
}
var object$4 = isNumber$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$9 = primitive$4;
var isObject$c = object$4;
function isNumber$4(value) {
  return isPrimitive$9(value) || isObject$c(value);
}
var main$1S = isNumber$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$b = lib$1J;
var main$1R = main$1S;
var isPrimitive$8 = primitive$4;
var isObject$b = object$4;
setReadOnly$b(main$1R, "isPrimitive", isPrimitive$8);
setReadOnly$b(main$1R, "isObject", isObject$b);
var lib$1h = main$1R;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FLOAT64_PINF = Number.POSITIVE_INFINITY;
var lib$1g = FLOAT64_PINF;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Number$1 = lib$1i;
var FLOAT64_NINF = Number$1.NEGATIVE_INFINITY;
var lib$1f = FLOAT64_NINF;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PINF$3 = lib$1g;
var NINF = lib$1f;
var isInt$2 = lib$1m;
function isInteger$b(value) {
  return value < PINF$3 && value > NINF && isInt$2(value);
}
var integer = isInteger$b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber$3 = lib$1h.isPrimitive;
var isInt$1 = integer;
function isInteger$a(value) {
  return isNumber$3(value) && isInt$1(value);
}
var primitive$3 = isInteger$a;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber$2 = lib$1h.isObject;
var isInt = integer;
function isInteger$9(value) {
  return isNumber$2(value) && isInt(value.valueOf());
}
var object$3 = isInteger$9;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$7 = primitive$3;
var isObject$a = object$3;
function isInteger$8(value) {
  return isPrimitive$7(value) || isObject$a(value);
}
var main$1Q = isInteger$8;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$a = lib$1J;
var main$1P = main$1Q;
var isPrimitive$6 = primitive$3;
var isObject$9 = object$3;
setReadOnly$a(main$1P, "isPrimitive", isPrimitive$6);
setReadOnly$a(main$1P, "isObject", isObject$9);
var lib$1e = main$1P;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$7 = lib$1e.isPrimitive;
function isPositiveInteger$3(value) {
  return isInteger$7(value) && value > 0;
}
var primitive$2 = isPositiveInteger$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$6 = lib$1e.isObject;
function isPositiveInteger$2(value) {
  return isInteger$6(value) && value.valueOf() > 0;
}
var object$2 = isPositiveInteger$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$5 = primitive$2;
var isObject$8 = object$2;
function isPositiveInteger$1(value) {
  return isPrimitive$5(value) || isObject$8(value);
}
var main$1O = isPositiveInteger$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$9 = lib$1J;
var main$1N = main$1O;
var isPrimitive$4 = primitive$2;
var isObject$7 = object$2;
setReadOnly$9(main$1N, "isPrimitive", isPrimitive$4);
setReadOnly$9(main$1N, "isObject", isObject$7);
var lib$1d = main$1N;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FLOAT64_MAX_SAFE_INTEGER$1 = 9007199254740991;
var lib$1c = FLOAT64_MAX_SAFE_INTEGER$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UINT32_MAX$3 = 4294967295;
var lib$1b = UINT32_MAX$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1M = typeof Uint32Array === "function" ? Uint32Array : null;
var uint32array = main$1M;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint32Array$1 = lib$1j;
var UINT32_MAX$2 = lib$1b;
var GlobalUint32Array = uint32array;
function hasUint32ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalUint32Array !== "function") {
    return false;
  }
  try {
    arr = [1, 3.14, -3.14, UINT32_MAX$2 + 1, UINT32_MAX$2 + 2];
    arr = new GlobalUint32Array(arr);
    bool = isUint32Array$1(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === UINT32_MAX$2 - 2 && // truncation and wrap around
    arr[3] === 0 && // wrap around
    arr[4] === 1;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1L = hasUint32ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint32ArraySupport$1 = main$1L;
var lib$1a = hasUint32ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$h = typeof Uint32Array === "function" ? Uint32Array : void 0;
var main$1K = ctor$h;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$j() {
  throw new Error("not implemented");
}
var polyfill_1$8 = polyfill$j;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint32ArraySupport = lib$1a;
var builtin$9 = main$1K;
var polyfill$i = polyfill_1$8;
var ctor$g;
if (hasUint32ArraySupport()) {
  ctor$g = builtin$9;
} else {
  ctor$g = polyfill$i;
}
var lib$19 = ctor$g;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PINF$2 = lib$1g;
function isPositiveZero$1(x) {
  return x === 0 && 1 / x === PINF$2;
}
var main$1J = isPositiveZero$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1I = main$1J;
var lib$18 = main$1I;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isnan$1(x) {
  return x !== x;
}
var main$1H = isnan$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1G = main$1H;
var lib$17 = main$1G;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPositiveZero = lib$18;
var isnan = lib$17;
var PINF$1 = lib$1g;
function max$2(x, y) {
  if (isnan(x) || isnan(y)) {
    return NaN;
  }
  if (x === PINF$1 || y === PINF$1) {
    return PINF$1;
  }
  if (x === y && x === 0) {
    if (isPositiveZero(x)) {
      return x;
    }
    return y;
  }
  if (x > y) {
    return x;
  }
  return y;
}
var main$1F = max$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var max$1 = main$1F;
var lib$16 = max$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LOW_WORD_MASK = 65535 >>> 0;
function umul$1(a, b) {
  var lbits;
  var mbits;
  var ha;
  var hb;
  var la;
  var lb;
  a >>>= 0;
  b >>>= 0;
  ha = a >>> 16 >>> 0;
  hb = b >>> 16 >>> 0;
  la = (a & LOW_WORD_MASK) >>> 0;
  lb = (b & LOW_WORD_MASK) >>> 0;
  lbits = la * lb >>> 0;
  mbits = ha * lb + la * hb << 16 >>> 0;
  return lbits + mbits >>> 0;
}
var main$1E = umul$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1D = main$1E;
var lib$15 = main$1D;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TYPE = "function";
function isAccessorArray$1(value) {
  return typeof value.get === TYPE && typeof value.set === TYPE;
}
var main$1C = isAccessorArray$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1B = main$1C;
var lib$14 = main$1B;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GETTERS$1 = {
  "float64": getFloat64,
  "float32": getFloat32,
  "int32": getInt32,
  "int16": getInt16,
  "int8": getInt8,
  "uint32": getUint32,
  "uint16": getUint16,
  "uint8": getUint8,
  "uint8c": getUint8c,
  "generic": getGeneric,
  "default": getArrayLike$1
};
function getFloat64(arr, idx) {
  return arr[idx];
}
function getFloat32(arr, idx) {
  return arr[idx];
}
function getInt32(arr, idx) {
  return arr[idx];
}
function getInt16(arr, idx) {
  return arr[idx];
}
function getInt8(arr, idx) {
  return arr[idx];
}
function getUint32(arr, idx) {
  return arr[idx];
}
function getUint16(arr, idx) {
  return arr[idx];
}
function getUint8(arr, idx) {
  return arr[idx];
}
function getUint8c(arr, idx) {
  return arr[idx];
}
function getGeneric(arr, idx) {
  return arr[idx];
}
function getArrayLike$1(arr, idx) {
  return arr[idx];
}
function getter$4(dtype2) {
  var f2 = GETTERS$1[dtype2];
  if (typeof f2 === "function") {
    return f2;
  }
  return GETTERS$1.default;
}
var main$1A = getter$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1z = main$1A;
var lib$13 = main$1z;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SETTERS$1 = {
  "float64": setFloat64,
  "float32": setFloat32,
  "int32": setInt32,
  "int16": setInt16,
  "int8": setInt8,
  "uint32": setUint32,
  "uint16": setUint16,
  "uint8": setUint8,
  "uint8c": setUint8c,
  "generic": setGeneric,
  "default": setArrayLike$1
};
function setFloat64(arr, idx, value) {
  arr[idx] = value;
}
function setFloat32(arr, idx, value) {
  arr[idx] = value;
}
function setInt32(arr, idx, value) {
  arr[idx] = value;
}
function setInt16(arr, idx, value) {
  arr[idx] = value;
}
function setInt8(arr, idx, value) {
  arr[idx] = value;
}
function setUint32(arr, idx, value) {
  arr[idx] = value;
}
function setUint16(arr, idx, value) {
  arr[idx] = value;
}
function setUint8(arr, idx, value) {
  arr[idx] = value;
}
function setUint8c(arr, idx, value) {
  arr[idx] = value;
}
function setGeneric(arr, idx, value) {
  arr[idx] = value;
}
function setArrayLike$1(arr, idx, value) {
  arr[idx] = value;
}
function setter$2(dtype2) {
  var f2 = SETTERS$1[dtype2];
  if (typeof f2 === "function") {
    return f2;
  }
  return SETTERS$1.default;
}
var main$1y = setter$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1x = main$1y;
var lib$12 = main$1x;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GETTERS = {
  "complex128": getComplex128$1,
  "complex64": getComplex64$1,
  "default": getArrayLike
};
function getComplex128$1(arr, idx) {
  return arr.get(idx);
}
function getComplex64$1(arr, idx) {
  return arr.get(idx);
}
function getArrayLike(arr, idx) {
  return arr.get(idx);
}
function getter$3(dtype2) {
  var f2 = GETTERS[dtype2];
  if (typeof f2 === "function") {
    return f2;
  }
  return GETTERS.default;
}
var main$1w = getter$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1v = main$1w;
var lib$11 = main$1v;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var SETTERS = {
  "complex128": setComplex128,
  "complex64": setComplex64,
  "default": setArrayLike
};
function setComplex128(arr, idx, value) {
  arr.set(value, idx);
}
function setComplex64(arr, idx, value) {
  arr.set(value, idx);
}
function setArrayLike(arr, idx, value) {
  arr.set(value, idx);
}
function setter$1(dtype2) {
  var f2 = SETTERS[dtype2];
  if (typeof f2 === "function") {
    return f2;
  }
  return SETTERS.default;
}
var main$1u = setter$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1t = main$1u;
var lib$10 = main$1t;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor2dtypes = {
  "Float32Array": "float32",
  "Float64Array": "float64",
  "Array": "generic",
  "Int16Array": "int16",
  "Int32Array": "int32",
  "Int8Array": "int8",
  "Uint16Array": "uint16",
  "Uint32Array": "uint32",
  "Uint8Array": "uint8",
  "Uint8ClampedArray": "uint8c",
  "Complex64Array": "complex64",
  "Complex128Array": "complex128"
};
var ctor2dtype$1 = ctor2dtypes;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$9 = lib$1C;
var hasFloat64Array = typeof Float64Array === "function";
function isFloat64Array$2(value) {
  return hasFloat64Array && value instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  nativeClass$9(value) === "[object Float64Array]";
}
var main$1s = isFloat64Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFloat64Array$1 = main$1s;
var lib$$ = isFloat64Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1r = typeof Float64Array === "function" ? Float64Array : null;
var float64array = main$1r;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFloat64Array = lib$$;
var GlobalFloat64Array = float64array;
function hasFloat64ArraySupport$3() {
  var bool;
  var arr;
  if (typeof GlobalFloat64Array !== "function") {
    return false;
  }
  try {
    arr = new GlobalFloat64Array([1, 3.14, -3.14, NaN]);
    bool = isFloat64Array(arr) && arr[0] === 1 && arr[1] === 3.14 && arr[2] === -3.14 && arr[3] !== arr[3];
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1q = hasFloat64ArraySupport$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasFloat64ArraySupport$2 = main$1q;
var lib$_ = hasFloat64ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$f = typeof Float64Array === "function" ? Float64Array : void 0;
var main$1p = ctor$f;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$h() {
  throw new Error("not implemented");
}
var polyfill_1$7 = polyfill$h;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasFloat64ArraySupport$1 = lib$_;
var builtin$8 = main$1p;
var polyfill$g = polyfill_1$7;
var ctor$e;
if (hasFloat64ArraySupport$1()) {
  ctor$e = builtin$8;
} else {
  ctor$e = polyfill$g;
}
var lib$Z = ctor$e;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$8 = lib$1C;
var hasFloat32Array = typeof Float32Array === "function";
function isFloat32Array$2(value) {
  return hasFloat32Array && value instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  nativeClass$8(value) === "[object Float32Array]";
}
var main$1o = isFloat32Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFloat32Array$1 = main$1o;
var lib$Y = isFloat32Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1n = typeof Float32Array === "function" ? Float32Array : null;
var float32array = main$1n;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFloat32Array = lib$Y;
var PINF = lib$1g;
var GlobalFloat32Array = float32array;
function hasFloat32ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalFloat32Array !== "function") {
    return false;
  }
  try {
    arr = new GlobalFloat32Array([1, 3.14, -3.14, 5e40]);
    bool = isFloat32Array(arr) && arr[0] === 1 && arr[1] === 3.140000104904175 && arr[2] === -3.140000104904175 && arr[3] === PINF;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1m = hasFloat32ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasFloat32ArraySupport$1 = main$1m;
var lib$X = hasFloat32ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$d = typeof Float32Array === "function" ? Float32Array : void 0;
var main$1l = ctor$d;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$f() {
  throw new Error("not implemented");
}
var polyfill_1$6 = polyfill$f;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasFloat32ArraySupport = lib$X;
var builtin$7 = main$1l;
var polyfill$e = polyfill_1$6;
var ctor$c;
if (hasFloat32ArraySupport()) {
  ctor$c = builtin$7;
} else {
  ctor$c = polyfill$e;
}
var lib$W = ctor$c;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$7 = lib$1C;
var hasInt32Array = typeof Int32Array === "function";
function isInt32Array$2(value) {
  return hasInt32Array && value instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  nativeClass$7(value) === "[object Int32Array]";
}
var main$1k = isInt32Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt32Array$1 = main$1k;
var lib$V = isInt32Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT32_MAX$1 = 2147483647 | 0;
var lib$U = INT32_MAX$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT32_MIN$1 = -2147483648 | 0;
var lib$T = INT32_MIN$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1j = typeof Int32Array === "function" ? Int32Array : null;
var int32array = main$1j;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt32Array = lib$V;
var INT32_MAX = lib$U;
var INT32_MIN = lib$T;
var GlobalInt32Array = int32array;
function hasInt32ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalInt32Array !== "function") {
    return false;
  }
  try {
    arr = new GlobalInt32Array([1, 3.14, -3.14, INT32_MAX + 1]);
    bool = isInt32Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === -3 && // truncation
    arr[3] === INT32_MIN;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1i = hasInt32ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt32ArraySupport$1 = main$1i;
var lib$S = hasInt32ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$b = typeof Int32Array === "function" ? Int32Array : void 0;
var main$1h = ctor$b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$d() {
  throw new Error("not implemented");
}
var polyfill_1$5 = polyfill$d;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt32ArraySupport = lib$S;
var builtin$6 = main$1h;
var polyfill$c = polyfill_1$5;
var ctor$a;
if (hasInt32ArraySupport()) {
  ctor$a = builtin$6;
} else {
  ctor$a = polyfill$c;
}
var lib$R = ctor$a;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$6 = lib$1C;
var hasUint16Array = typeof Uint16Array === "function";
function isUint16Array$2(value) {
  return hasUint16Array && value instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  nativeClass$6(value) === "[object Uint16Array]";
}
var main$1g = isUint16Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint16Array$1 = main$1g;
var lib$Q = isUint16Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UINT16_MAX$1 = 65535 | 0;
var lib$P = UINT16_MAX$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1f = typeof Uint16Array === "function" ? Uint16Array : null;
var uint16array = main$1f;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint16Array = lib$Q;
var UINT16_MAX = lib$P;
var GlobalUint16Array = uint16array;
function hasUint16ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalUint16Array !== "function") {
    return false;
  }
  try {
    arr = [1, 3.14, -3.14, UINT16_MAX + 1, UINT16_MAX + 2];
    arr = new GlobalUint16Array(arr);
    bool = isUint16Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === UINT16_MAX - 2 && // truncation and wrap around
    arr[3] === 0 && // wrap around
    arr[4] === 1;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1e = hasUint16ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint16ArraySupport$1 = main$1e;
var lib$O = hasUint16ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$9 = typeof Uint16Array === "function" ? Uint16Array : void 0;
var main$1d = ctor$9;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$b() {
  throw new Error("not implemented");
}
var polyfill_1$4 = polyfill$b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint16ArraySupport = lib$O;
var builtin$5 = main$1d;
var polyfill$a = polyfill_1$4;
var ctor$8;
if (hasUint16ArraySupport()) {
  ctor$8 = builtin$5;
} else {
  ctor$8 = polyfill$a;
}
var lib$N = ctor$8;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$5 = lib$1C;
var hasInt16Array = typeof Int16Array === "function";
function isInt16Array$2(value) {
  return hasInt16Array && value instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  nativeClass$5(value) === "[object Int16Array]";
}
var main$1c = isInt16Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt16Array$1 = main$1c;
var lib$M = isInt16Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT16_MAX$1 = 32767 | 0;
var lib$L = INT16_MAX$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT16_MIN$1 = -32768 | 0;
var lib$K = INT16_MIN$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$1b = typeof Int16Array === "function" ? Int16Array : null;
var int16array = main$1b;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt16Array = lib$M;
var INT16_MAX = lib$L;
var INT16_MIN = lib$K;
var GlobalInt16Array = int16array;
function hasInt16ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalInt16Array !== "function") {
    return false;
  }
  try {
    arr = new GlobalInt16Array([1, 3.14, -3.14, INT16_MAX + 1]);
    bool = isInt16Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === -3 && // truncation
    arr[3] === INT16_MIN;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$1a = hasInt16ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt16ArraySupport$1 = main$1a;
var lib$J = hasInt16ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$7 = typeof Int16Array === "function" ? Int16Array : void 0;
var main$19 = ctor$7;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$9() {
  throw new Error("not implemented");
}
var polyfill_1$3 = polyfill$9;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt16ArraySupport = lib$J;
var builtin$4 = main$19;
var polyfill$8 = polyfill_1$3;
var ctor$6;
if (hasInt16ArraySupport()) {
  ctor$6 = builtin$4;
} else {
  ctor$6 = polyfill$8;
}
var lib$I = ctor$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$4 = lib$1C;
var hasUint8Array = typeof Uint8Array === "function";
function isUint8Array$2(value) {
  return hasUint8Array && value instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  nativeClass$4(value) === "[object Uint8Array]";
}
var main$18 = isUint8Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint8Array$1 = main$18;
var lib$H = isUint8Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UINT8_MAX$1 = 255 | 0;
var lib$G = UINT8_MAX$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$17 = typeof Uint8Array === "function" ? Uint8Array : null;
var uint8array = main$17;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint8Array = lib$H;
var UINT8_MAX = lib$G;
var GlobalUint8Array = uint8array;
function hasUint8ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalUint8Array !== "function") {
    return false;
  }
  try {
    arr = [1, 3.14, -3.14, UINT8_MAX + 1, UINT8_MAX + 2];
    arr = new GlobalUint8Array(arr);
    bool = isUint8Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === UINT8_MAX - 2 && // truncation and wrap around
    arr[3] === 0 && // wrap around
    arr[4] === 1;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$16 = hasUint8ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint8ArraySupport$1 = main$16;
var lib$F = hasUint8ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$5 = typeof Uint8Array === "function" ? Uint8Array : void 0;
var main$15 = ctor$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$7() {
  throw new Error("not implemented");
}
var polyfill_1$2 = polyfill$7;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint8ArraySupport = lib$F;
var builtin$3 = main$15;
var polyfill$6 = polyfill_1$2;
var ctor$4;
if (hasUint8ArraySupport()) {
  ctor$4 = builtin$3;
} else {
  ctor$4 = polyfill$6;
}
var lib$E = ctor$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$3 = lib$1C;
var hasUint8ClampedArray = typeof Uint8ClampedArray === "function";
function isUint8ClampedArray$2(value) {
  return hasUint8ClampedArray && value instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  nativeClass$3(value) === "[object Uint8ClampedArray]";
}
var main$14 = isUint8ClampedArray$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint8ClampedArray$1 = main$14;
var lib$D = isUint8ClampedArray$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$13 = typeof Uint8ClampedArray === "function" ? Uint8ClampedArray : null;
var uint8clampedarray = main$13;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isUint8ClampedArray = lib$D;
var GlobalUint8ClampedArray = uint8clampedarray;
function hasUint8ClampedArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalUint8ClampedArray !== "function") {
    return false;
  }
  try {
    arr = new GlobalUint8ClampedArray([-1, 0, 1, 3.14, 4.99, 255, 256]);
    bool = isUint8ClampedArray(arr) && arr[0] === 0 && // clamped
    arr[1] === 0 && arr[2] === 1 && arr[3] === 3 && // round to nearest
    arr[4] === 5 && // round to nearest
    arr[5] === 255 && arr[6] === 255;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$12 = hasUint8ClampedArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint8ClampedArraySupport$1 = main$12;
var lib$C = hasUint8ClampedArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$3 = typeof Uint8ClampedArray === "function" ? Uint8ClampedArray : void 0;
var main$11 = ctor$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$5() {
  throw new Error("not implemented");
}
var polyfill_1$1 = polyfill$5;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasUint8ClampedArraySupport = lib$C;
var builtin$2 = main$11;
var polyfill$4 = polyfill_1$1;
var ctor$2;
if (hasUint8ClampedArraySupport()) {
  ctor$2 = builtin$2;
} else {
  ctor$2 = polyfill$4;
}
var lib$B = ctor$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$2 = lib$1C;
var hasInt8Array = typeof Int8Array === "function";
function isInt8Array$2(value) {
  return hasInt8Array && value instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  nativeClass$2(value) === "[object Int8Array]";
}
var main$10 = isInt8Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt8Array$1 = main$10;
var lib$A = isInt8Array$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT8_MAX$1 = 127 | 0;
var lib$z = INT8_MAX$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var INT8_MIN$1 = -128 | 0;
var lib$y = INT8_MIN$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$$ = typeof Int8Array === "function" ? Int8Array : null;
var int8array = main$$;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInt8Array = lib$A;
var INT8_MAX = lib$z;
var INT8_MIN = lib$y;
var GlobalInt8Array = int8array;
function hasInt8ArraySupport$2() {
  var bool;
  var arr;
  if (typeof GlobalInt8Array !== "function") {
    return false;
  }
  try {
    arr = new GlobalInt8Array([1, 3.14, -3.14, INT8_MAX + 1]);
    bool = isInt8Array(arr) && arr[0] === 1 && arr[1] === 3 && // truncation
    arr[2] === -3 && // truncation
    arr[3] === INT8_MIN;
  } catch (err) {
    bool = false;
  }
  return bool;
}
var main$_ = hasInt8ArraySupport$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt8ArraySupport$1 = main$_;
var lib$x = hasInt8ArraySupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctor$1 = typeof Int8Array === "function" ? Int8Array : void 0;
var main$Z = ctor$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function polyfill$3() {
  throw new Error("not implemented");
}
var polyfill_1 = polyfill$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasInt8ArraySupport = lib$x;
var builtin$1 = main$Z;
var polyfill$2 = polyfill_1;
var ctor;
if (hasInt8ArraySupport()) {
  ctor = builtin$1;
} else {
  ctor = polyfill$2;
}
var lib$w = ctor;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$5 = lib$1e.isPrimitive;
function isNonNegativeInteger$4(value) {
  return isInteger$5(value) && value >= 0;
}
var primitive$1 = isNonNegativeInteger$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$4 = lib$1e.isObject;
function isNonNegativeInteger$3(value) {
  return isInteger$4(value) && value.valueOf() >= 0;
}
var object$1 = isNonNegativeInteger$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$3 = primitive$1;
var isObject$6 = object$1;
function isNonNegativeInteger$2(value) {
  return isPrimitive$3(value) || isObject$6(value);
}
var main$Y = isNonNegativeInteger$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$8 = lib$1J;
var main$X = main$Y;
var isPrimitive$2 = primitive$1;
var isObject$5 = object$1;
setReadOnly$8(main$X, "isPrimitive", isPrimitive$2);
setReadOnly$8(main$X, "isObject", isObject$5);
var lib$v = main$X;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MAX_ARRAY_LENGTH = 4294967295 >>> 0;
var lib$u = MAX_ARRAY_LENGTH;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$3 = lib$1m;
var MAX_LENGTH = lib$u;
function isArrayLikeObject$6(value) {
  return typeof value === "object" && value !== null && typeof value.length === "number" && isInteger$3(value.length) && value.length >= 0 && value.length <= MAX_LENGTH;
}
var main$W = isArrayLikeObject$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$V = main$W;
var lib$t = main$V;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var nativeClass$1 = lib$1C;
var hasArrayBuffer = typeof ArrayBuffer === "function";
function isArrayBuffer$2(value) {
  return hasArrayBuffer && value instanceof ArrayBuffer || // eslint-disable-line stdlib/require-globals
  nativeClass$1(value) === "[object ArrayBuffer]";
}
var main$U = isArrayBuffer$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$T = main$U;
var lib$s = main$T;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function isString$4(value) {
  return typeof value === "string";
}
var primitive = isString$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var valueOf$1 = String.prototype.valueOf;
var valueof = valueOf$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var valueOf = valueof;
function test$1(value) {
  try {
    valueOf.call(value);
    return true;
  } catch (err) {
    return false;
  }
}
var try2valueof = test$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasToStringTag = lib$1E;
var nativeClass = lib$1C;
var test = try2valueof;
var FLG = hasToStringTag();
function isString$3(value) {
  if (typeof value === "object") {
    if (value instanceof String) {
      return true;
    }
    if (FLG) {
      return test(value);
    }
    return nativeClass(value) === "[object String]";
  }
  return false;
}
var object = isString$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isPrimitive$1 = primitive;
var isObject$4 = object;
function isString$2(value) {
  return isPrimitive$1(value) || isObject$4(value);
}
var main$S = isString$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$7 = lib$1J;
var main$R = main$S;
var isPrimitive = primitive;
var isObject$3 = object;
setReadOnly$7(main$R, "isPrimitive", isPrimitive);
setReadOnly$7(main$R, "isObject", isObject$3);
var lib$r = main$R;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toString$1() {
  var str = "" + this.re;
  if (this.im < 0) {
    str += " - " + -this.im;
  } else {
    str += " + " + this.im;
  }
  str += "i";
  return str;
}
var tostring$1 = toString$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toJSON$3() {
  var out = {};
  out.type = "Complex128";
  out.re = this.re;
  out.im = this.im;
  return out;
}
var tojson$1 = toJSON$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber$1 = lib$1h.isPrimitive;
var defineProperty$1 = lib$1K;
var setReadOnly$6 = lib$1J;
var format$b = lib$1L;
var toStr$1 = tostring$1;
var toJSON$2 = tojson$1;
function Complex128$2(real2, imag2) {
  if (!(this instanceof Complex128$2)) {
    throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");
  }
  if (!isNumber$1(real2)) {
    throw new TypeError(format$b("invalid argument. Real component must be a number. Value: `%s`.", real2));
  }
  if (!isNumber$1(imag2)) {
    throw new TypeError(format$b("invalid argument. Imaginary component must be a number. Value: `%s`.", imag2));
  }
  defineProperty$1(this, "re", {
    "configurable": false,
    "enumerable": true,
    "writable": false,
    "value": real2
  });
  defineProperty$1(this, "im", {
    "configurable": false,
    "enumerable": true,
    "writable": false,
    "value": imag2
  });
  return this;
}
setReadOnly$6(Complex128$2, "BYTES_PER_ELEMENT", 8);
setReadOnly$6(Complex128$2.prototype, "BYTES_PER_ELEMENT", 8);
setReadOnly$6(Complex128$2.prototype, "byteLength", 16);
setReadOnly$6(Complex128$2.prototype, "toString", toStr$1);
setReadOnly$6(Complex128$2.prototype, "toJSON", toJSON$2);
var main$Q = Complex128$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$P = main$Q;
var lib$q = main$P;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fround = typeof Math.fround === "function" ? Math.fround : null;
var main$O = fround;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Float32Array$6 = lib$W;
var FLOAT32_VIEW = new Float32Array$6(1);
function float64ToFloat32$2(x) {
  FLOAT32_VIEW[0] = x;
  return FLOAT32_VIEW[0];
}
var polyfill$1 = float64ToFloat32$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var builtin = main$O;
var polyfill2 = polyfill$1;
var float64ToFloat32$1;
if (typeof builtin === "function") {
  float64ToFloat32$1 = builtin;
} else {
  float64ToFloat32$1 = polyfill2;
}
var lib$p = float64ToFloat32$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toString() {
  var str = "" + this.re;
  if (this.im < 0) {
    str += " - " + -this.im;
  } else {
    str += " + " + this.im;
  }
  str += "i";
  return str;
}
var tostring = toString;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toJSON$1() {
  var out = {};
  out.type = "Complex64";
  out.re = this.re;
  out.im = this.im;
  return out;
}
var tojson = toJSON$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isNumber = lib$1h.isPrimitive;
var defineProperty = lib$1K;
var setReadOnly$5 = lib$1J;
var float64ToFloat32 = lib$p;
var format$a = lib$1L;
var toStr = tostring;
var toJSON = tojson;
function Complex64$2(real2, imag2) {
  if (!(this instanceof Complex64$2)) {
    throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");
  }
  if (!isNumber(real2)) {
    throw new TypeError(format$a("invalid argument. Real component must be a number. Value: `%s`.", real2));
  }
  if (!isNumber(imag2)) {
    throw new TypeError(format$a("invalid argument. Imaginary component must be a number. Value: `%s`.", imag2));
  }
  defineProperty(this, "re", {
    "configurable": false,
    "enumerable": true,
    "writable": false,
    "value": float64ToFloat32(real2)
  });
  defineProperty(this, "im", {
    "configurable": false,
    "enumerable": true,
    "writable": false,
    "value": float64ToFloat32(imag2)
  });
  return this;
}
setReadOnly$5(Complex64$2, "BYTES_PER_ELEMENT", 4);
setReadOnly$5(Complex64$2.prototype, "BYTES_PER_ELEMENT", 4);
setReadOnly$5(Complex64$2.prototype, "byteLength", 8);
setReadOnly$5(Complex64$2.prototype, "toString", toStr);
setReadOnly$5(Complex64$2.prototype, "toJSON", toJSON);
var main$N = Complex64$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$M = main$N;
var lib$o = main$M;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Complex128$1 = lib$q;
var Complex64$1 = lib$o;
function isComplexLike$8(value) {
  if (value instanceof Complex128$1 || value instanceof Complex64$1) {
    return true;
  }
  return typeof value === "object" && value !== null && typeof value.re === "number" && typeof value.im === "number";
}
var main$L = isComplexLike$8;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$K = main$L;
var lib$n = main$K;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isInteger$2 = lib$1m;
function isEven$2(x) {
  return isInteger$2(x / 2);
}
var main$J = isEven$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$I = main$J;
var lib$m = main$I;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var BYTES_PER_ELEMENT$3 = 8;
function isComplex64Array$2(value) {
  return typeof value === "object" && value !== null && value.constructor.name === "Complex64Array" && value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT$3;
}
var main$H = isComplex64Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$G = main$H;
var lib$l = main$G;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var BYTES_PER_ELEMENT$2 = 16;
function isComplex128Array$2(value) {
  return typeof value === "object" && value !== null && value.constructor.name === "Complex128Array" && value.BYTES_PER_ELEMENT === BYTES_PER_ELEMENT$2;
}
var main$F = isComplex128Array$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$E = main$F;
var lib$k = main$E;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasOwnProp$1 = lib$1G;
var Symbol$1 = lib$1D;
function hasIteratorSymbolSupport$3() {
  return typeof Symbol$1 === "function" && typeof Symbol$1("foo") === "symbol" && hasOwnProp$1(Symbol$1, "iterator") && typeof Symbol$1.iterator === "symbol";
}
var main$D = hasIteratorSymbolSupport$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$C = main$D;
var lib$j = main$C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hasIteratorSymbolSupport$2 = lib$j;
var IteratorSymbol = hasIteratorSymbolSupport$2() ? Symbol.iterator : null;
var main$B = IteratorSymbol;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$A = main$B;
var lib$i = main$A;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function realf$4(z) {
  return z.re;
}
var main$z = realf$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$y = main$z;
var lib$h = main$y;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function imagf$4(z) {
  return z.im;
}
var main$x = imagf$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$w = main$x;
var lib$g = main$w;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Float32Array$5 = lib$W;
function reinterpret$1(x, offset) {
  return new Float32Array$5(x.buffer, x.byteOffset + x.BYTES_PER_ELEMENT * offset, 2 * (x.length - offset));
}
var main$v = reinterpret$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$u = main$v;
var lib$f = main$u;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Float64Array$6 = lib$Z;
function reinterpret(x, offset) {
  return new Float64Array$6(x.buffer, x.byteOffset + x.BYTES_PER_ELEMENT * offset, 2 * (x.length - offset));
}
var main$t = reinterpret;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$s = main$t;
var lib$e = main$s;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArrayLikeObject$5 = lib$t;
var isComplexLike$7 = lib$n;
var realf$3 = lib$h;
var imagf$3 = lib$g;
var format$9 = lib$1L;
function fromIterator$3(it) {
  var out;
  var v;
  var z;
  out = [];
  while (true) {
    v = it.next();
    if (v.done) {
      break;
    }
    z = v.value;
    if (isArrayLikeObject$5(z) && z.length >= 2) {
      out.push(z[0], z[1]);
    } else if (isComplexLike$7(z)) {
      out.push(realf$3(z), imagf$3(z));
    } else {
      return new TypeError(format$9("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", z));
    }
  }
  return out;
}
var from_iterator$1 = fromIterator$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArrayLikeObject$4 = lib$t;
var isComplexLike$6 = lib$n;
var realf$2 = lib$h;
var imagf$2 = lib$g;
var format$8 = lib$1L;
function fromIteratorMap$3(it, clbk, thisArg) {
  var out;
  var v;
  var z;
  var i;
  out = [];
  i = -1;
  while (true) {
    v = it.next();
    if (v.done) {
      break;
    }
    i += 1;
    z = clbk.call(thisArg, v.value, i);
    if (isArrayLikeObject$4(z) && z.length >= 2) {
      out.push(z[0], z[1]);
    } else if (isComplexLike$6(z)) {
      out.push(realf$2(z), imagf$2(z));
    } else {
      return new TypeError(format$8("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", z));
    }
  }
  return out;
}
var from_iterator_map$1 = fromIteratorMap$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isComplexLike$5 = lib$n;
var realf$1 = lib$h;
var imagf$1 = lib$g;
function fromArray$3(buf, arr) {
  var len;
  var v;
  var i;
  var j;
  len = arr.length;
  j = 0;
  for (i = 0; i < len; i++) {
    v = arr[i];
    if (!isComplexLike$5(v)) {
      return null;
    }
    buf[j] = realf$1(v);
    buf[j + 1] = imagf$1(v);
    j += 2;
  }
  return buf;
}
var from_array$1 = fromArray$3;
var isNonNegativeInteger$1 = lib$v.isPrimitive;
var isArrayLikeObject$3 = lib$t;
var isCollection$2 = lib$1k;
var isArrayBuffer$1 = lib$s;
var isObject$2 = lib$1A;
var isArray$2 = lib$1B;
var isString$1 = lib$r.isPrimitive;
var isFunction$2 = lib$1r;
var isComplexLike$4 = lib$n;
var isEven$1 = lib$m;
var isInteger$1 = lib$1m;
var isComplex64Array$1 = lib$l;
var isComplex128Array$1 = lib$k;
var hasIteratorSymbolSupport$1 = lib$j;
var ITERATOR_SYMBOL$1 = lib$i;
var setReadOnly$4 = lib$1J;
var setReadOnlyAccessor$2 = lib$1I;
var Float32Array$4 = lib$W;
var Complex64 = lib$o;
var format$7 = lib$1L;
var realf = lib$h;
var imagf = lib$g;
var floor$2 = lib$1n;
var reinterpret64$2 = lib$f;
var reinterpret128$2 = lib$e;
var getter$2 = lib$13;
var accessorGetter$2 = lib$11;
var fromIterator$2 = from_iterator$1;
var fromIteratorMap$2 = from_iterator_map$1;
var fromArray$2 = from_array$1;
var BYTES_PER_ELEMENT$1 = Float32Array$4.BYTES_PER_ELEMENT * 2;
var HAS_ITERATOR_SYMBOL$1 = hasIteratorSymbolSupport$1();
function isComplexArray$1(value) {
  return value instanceof Complex64Array$3 || typeof value === "object" && value !== null && (value.constructor.name === "Complex64Array" || value.constructor.name === "Complex128Array") && typeof value._length === "number" && // eslint-disable-line no-underscore-dangle
  // NOTE: we don't perform a more rigorous test here for a typed array for performance reasons, as robustly checking for a typed array instance could require walking the prototype tree and performing relatively expensive constructor checks...
  typeof value._buffer === "object";
}
function isComplexArrayConstructor$1(value) {
  return value === Complex64Array$3 || // NOTE: weaker test in order to avoid a circular dependency with Complex128Array...
  value.name === "Complex128Array";
}
function getComplex64(buf, idx) {
  idx *= 2;
  return new Complex64(buf[idx], buf[idx + 1]);
}
function Complex64Array$3() {
  var byteOffset;
  var nargs;
  var buf;
  var len;
  nargs = arguments.length;
  if (!(this instanceof Complex64Array$3)) {
    if (nargs === 0) {
      return new Complex64Array$3();
    }
    if (nargs === 1) {
      return new Complex64Array$3(arguments[0]);
    }
    if (nargs === 2) {
      return new Complex64Array$3(arguments[0], arguments[1]);
    }
    return new Complex64Array$3(arguments[0], arguments[1], arguments[2]);
  }
  if (nargs === 0) {
    buf = new Float32Array$4(0);
  } else if (nargs === 1) {
    if (isNonNegativeInteger$1(arguments[0])) {
      buf = new Float32Array$4(arguments[0] * 2);
    } else if (isCollection$2(arguments[0])) {
      buf = arguments[0];
      len = buf.length;
      if (len && isArray$2(buf) && isComplexLike$4(buf[0])) {
        buf = fromArray$2(new Float32Array$4(len * 2), buf);
        if (buf === null) {
          if (!isEven$1(len)) {
            throw new RangeError(format$7("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.", len));
          }
          buf = new Float32Array$4(arguments[0]);
        }
      } else {
        if (isComplex64Array$1(buf)) {
          buf = reinterpret64$2(buf, 0);
        } else if (isComplex128Array$1(buf)) {
          buf = reinterpret128$2(buf, 0);
        } else if (!isEven$1(len)) {
          throw new RangeError(format$7("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.", len));
        }
        buf = new Float32Array$4(buf);
      }
    } else if (isArrayBuffer$1(arguments[0])) {
      buf = arguments[0];
      if (!isInteger$1(buf.byteLength / BYTES_PER_ELEMENT$1)) {
        throw new RangeError(format$7("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.", BYTES_PER_ELEMENT$1, buf.byteLength));
      }
      buf = new Float32Array$4(buf);
    } else if (isObject$2(arguments[0])) {
      buf = arguments[0];
      if (HAS_ITERATOR_SYMBOL$1 === false) {
        throw new TypeError(format$7("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.", buf));
      }
      if (!isFunction$2(buf[ITERATOR_SYMBOL$1])) {
        throw new TypeError(format$7("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", buf));
      }
      buf = buf[ITERATOR_SYMBOL$1]();
      if (!isFunction$2(buf.next)) {
        throw new TypeError(format$7("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", buf));
      }
      buf = fromIterator$2(buf);
      if (buf instanceof Error) {
        throw buf;
      }
      buf = new Float32Array$4(buf);
    } else {
      throw new TypeError(format$7("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", arguments[0]));
    }
  } else {
    buf = arguments[0];
    if (!isArrayBuffer$1(buf)) {
      throw new TypeError(format$7("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.", buf));
    }
    byteOffset = arguments[1];
    if (!isNonNegativeInteger$1(byteOffset)) {
      throw new TypeError(format$7("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.", byteOffset));
    }
    if (!isInteger$1(byteOffset / BYTES_PER_ELEMENT$1)) {
      throw new RangeError(format$7("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.", BYTES_PER_ELEMENT$1, byteOffset));
    }
    if (nargs === 2) {
      len = buf.byteLength - byteOffset;
      if (!isInteger$1(len / BYTES_PER_ELEMENT$1)) {
        throw new RangeError(format$7("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.", BYTES_PER_ELEMENT$1, len));
      }
      buf = new Float32Array$4(buf, byteOffset);
    } else {
      len = arguments[2];
      if (!isNonNegativeInteger$1(len)) {
        throw new TypeError(format$7("invalid argument. Length must be a nonnegative integer. Value: `%s`.", len));
      }
      if (len * BYTES_PER_ELEMENT$1 > buf.byteLength - byteOffset) {
        throw new RangeError(format$7("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.", len * BYTES_PER_ELEMENT$1));
      }
      buf = new Float32Array$4(buf, byteOffset, len * 2);
    }
  }
  setReadOnly$4(this, "_buffer", buf);
  setReadOnly$4(this, "_length", buf.length / 2);
  return this;
}
setReadOnly$4(Complex64Array$3, "BYTES_PER_ELEMENT", BYTES_PER_ELEMENT$1);
setReadOnly$4(Complex64Array$3, "name", "Complex64Array");
setReadOnly$4(Complex64Array$3, "from", function from(src) {
  var thisArg;
  var nargs;
  var clbk;
  var out;
  var buf;
  var tmp;
  var get11;
  var len;
  var flg;
  var v;
  var i;
  var j;
  if (!isFunction$2(this)) {
    throw new TypeError("invalid invocation. `this` context must be a constructor.");
  }
  if (!isComplexArrayConstructor$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  nargs = arguments.length;
  if (nargs > 1) {
    clbk = arguments[1];
    if (!isFunction$2(clbk)) {
      throw new TypeError(format$7("invalid argument. Second argument must be a function. Value: `%s`.", clbk));
    }
    if (nargs > 2) {
      thisArg = arguments[2];
    }
  }
  if (isComplexArray$1(src)) {
    len = src.length;
    if (clbk) {
      out = new this(len);
      buf = out._buffer;
      j = 0;
      for (i = 0; i < len; i++) {
        v = clbk.call(thisArg, src.get(i), i);
        if (isComplexLike$4(v)) {
          buf[j] = realf(v);
          buf[j + 1] = imagf(v);
        } else if (isArrayLikeObject$3(v) && v.length >= 2) {
          buf[j] = v[0];
          buf[j + 1] = v[1];
        } else {
          throw new TypeError(format$7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
        }
        j += 2;
      }
      return out;
    }
    return new this(src);
  }
  if (isCollection$2(src)) {
    if (clbk) {
      len = src.length;
      if (src.get && src.set) {
        get11 = accessorGetter$2("default");
      } else {
        get11 = getter$2("default");
      }
      for (i = 0; i < len; i++) {
        if (!isComplexLike$4(get11(src, i))) {
          flg = true;
          break;
        }
      }
      if (flg) {
        if (!isEven$1(len)) {
          throw new RangeError(format$7("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.", 2, len));
        }
        out = new this(len / 2);
        buf = out._buffer;
        for (i = 0; i < len; i++) {
          buf[i] = clbk.call(thisArg, get11(src, i), i);
        }
        return out;
      }
      out = new this(len);
      buf = out._buffer;
      j = 0;
      for (i = 0; i < len; i++) {
        v = clbk.call(thisArg, get11(src, i), i);
        if (isComplexLike$4(v)) {
          buf[j] = realf(v);
          buf[j + 1] = imagf(v);
        } else if (isArrayLikeObject$3(v) && v.length >= 2) {
          buf[j] = v[0];
          buf[j + 1] = v[1];
        } else {
          throw new TypeError(format$7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
        }
        j += 2;
      }
      return out;
    }
    return new this(src);
  }
  if (isObject$2(src) && HAS_ITERATOR_SYMBOL$1 && isFunction$2(src[ITERATOR_SYMBOL$1])) {
    buf = src[ITERATOR_SYMBOL$1]();
    if (!isFunction$2(buf.next)) {
      throw new TypeError(format$7("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.", src));
    }
    if (clbk) {
      tmp = fromIteratorMap$2(buf, clbk, thisArg);
    } else {
      tmp = fromIterator$2(buf);
    }
    if (tmp instanceof Error) {
      throw tmp;
    }
    len = tmp.length / 2;
    out = new this(len);
    buf = out._buffer;
    for (i = 0; i < len; i++) {
      buf[i] = tmp[i];
    }
    return out;
  }
  throw new TypeError(format$7("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.", src));
});
setReadOnly$4(Complex64Array$3, "of", function of() {
  var args;
  var i;
  if (!isFunction$2(this)) {
    throw new TypeError("invalid invocation. `this` context must be a constructor.");
  }
  if (!isComplexArrayConstructor$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  args = [];
  for (i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return new this(args);
});
setReadOnly$4(Complex64Array$3.prototype, "at", function at(idx) {
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isInteger$1(idx)) {
    throw new TypeError(format$7("invalid argument. Must provide an integer. Value: `%s`.", idx));
  }
  if (idx < 0) {
    idx += this._length;
  }
  if (idx < 0 || idx >= this._length) {
    return;
  }
  return getComplex64(this._buffer, idx);
});
setReadOnlyAccessor$2(Complex64Array$3.prototype, "buffer", function get() {
  return this._buffer.buffer;
});
setReadOnlyAccessor$2(Complex64Array$3.prototype, "byteLength", function get2() {
  return this._buffer.byteLength;
});
setReadOnlyAccessor$2(Complex64Array$3.prototype, "byteOffset", function get3() {
  return this._buffer.byteOffset;
});
setReadOnly$4(Complex64Array$3.prototype, "BYTES_PER_ELEMENT", Complex64Array$3.BYTES_PER_ELEMENT);
setReadOnly$4(Complex64Array$3.prototype, "copyWithin", function copyWithin(target, start) {
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (arguments.length === 2) {
    this._buffer.copyWithin(target * 2, start * 2);
  } else {
    this._buffer.copyWithin(target * 2, start * 2, arguments[2] * 2);
  }
  return this;
});
setReadOnly$4(Complex64Array$3.prototype, "entries", function entries() {
  var buffer;
  var self2;
  var iter;
  var len;
  var FLG2;
  var i;
  var j;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  self2 = this;
  buffer = this._buffer;
  len = this._length;
  i = -1;
  j = -2;
  iter = {};
  setReadOnly$4(iter, "next", next);
  setReadOnly$4(iter, "return", end);
  if (ITERATOR_SYMBOL$1) {
    setReadOnly$4(iter, ITERATOR_SYMBOL$1, factory2);
  }
  return iter;
  function next() {
    var z;
    i += 1;
    if (FLG2 || i >= len) {
      return {
        "done": true
      };
    }
    j += 2;
    z = new Complex64(buffer[j], buffer[j + 1]);
    return {
      "value": [i, z],
      "done": false
    };
  }
  function end(value) {
    FLG2 = true;
    if (arguments.length) {
      return {
        "value": value,
        "done": true
      };
    }
    return {
      "done": true
    };
  }
  function factory2() {
    return self2.entries();
  }
});
setReadOnly$4(Complex64Array$3.prototype, "every", function every(predicate, thisArg) {
  var buf;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    if (!predicate.call(thisArg, getComplex64(buf, i), i, this)) {
      return false;
    }
  }
  return true;
});
setReadOnly$4(Complex64Array$3.prototype, "fill", function fill(value, start, end) {
  var buf;
  var len;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike$4(value)) {
    throw new TypeError(format$7("invalid argument. First argument must be a complex number. Value: `%s`.", value));
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length > 1) {
    if (!isInteger$1(start)) {
      throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", start));
    }
    if (start < 0) {
      start += len;
      if (start < 0) {
        start = 0;
      }
    }
    if (arguments.length > 2) {
      if (!isInteger$1(end)) {
        throw new TypeError(format$7("invalid argument. Third argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      }
      if (end > len) {
        end = len;
      }
    } else {
      end = len;
    }
  } else {
    start = 0;
    end = len;
  }
  re2 = realf(value);
  im = imagf(value);
  for (i = start; i < end; i++) {
    idx = 2 * i;
    buf[idx] = re2;
    buf[idx + 1] = im;
  }
  return this;
});
setReadOnly$4(Complex64Array$3.prototype, "filter", function filter(predicate, thisArg) {
  var buf;
  var out;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  out = [];
  for (i = 0; i < this._length; i++) {
    z = getComplex64(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      out.push(z);
    }
  }
  return new this.constructor(out);
});
setReadOnly$4(Complex64Array$3.prototype, "find", function find(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex64(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return z;
    }
  }
});
setReadOnly$4(Complex64Array$3.prototype, "findIndex", function findIndex(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex64(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return i;
    }
  }
  return -1;
});
setReadOnly$4(Complex64Array$3.prototype, "findLast", function findLast(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = this._length - 1; i >= 0; i--) {
    z = getComplex64(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return z;
    }
  }
});
setReadOnly$4(Complex64Array$3.prototype, "findLastIndex", function findLastIndex(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = this._length - 1; i >= 0; i--) {
    z = getComplex64(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return i;
    }
  }
  return -1;
});
setReadOnly$4(Complex64Array$3.prototype, "forEach", function forEach(fcn, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(fcn)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", fcn));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex64(buf, i);
    fcn.call(thisArg, z, i, this);
  }
});
setReadOnly$4(Complex64Array$3.prototype, "get", function get4(idx) {
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isNonNegativeInteger$1(idx)) {
    throw new TypeError(format$7("invalid argument. Must provide a nonnegative integer. Value: `%s`.", idx));
  }
  if (idx >= this._length) {
    return;
  }
  return getComplex64(this._buffer, idx);
});
setReadOnly$4(Complex64Array$3.prototype, "includes", function includes(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike$4(searchElement)) {
    throw new TypeError(format$7("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger$1(fromIndex)) {
      throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex < 0) {
      fromIndex += this._length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }
  } else {
    fromIndex = 0;
  }
  re2 = realf(searchElement);
  im = imagf(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i < this._length; i++) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return true;
    }
  }
  return false;
});
setReadOnly$4(Complex64Array$3.prototype, "indexOf", function indexOf(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike$4(searchElement)) {
    throw new TypeError(format$7("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger$1(fromIndex)) {
      throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex < 0) {
      fromIndex += this._length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }
  } else {
    fromIndex = 0;
  }
  re2 = realf(searchElement);
  im = imagf(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i < this._length; i++) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return i;
    }
  }
  return -1;
});
setReadOnly$4(Complex64Array$3.prototype, "join", function join(separator) {
  var out;
  var buf;
  var sep;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (arguments.length === 0) {
    sep = ",";
  } else if (isString$1(separator)) {
    sep = separator;
  } else {
    throw new TypeError(format$7("invalid argument. First argument must be a string. Value: `%s`.", separator));
  }
  out = [];
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    out.push(getComplex64(buf, i).toString());
  }
  return out.join(sep);
});
setReadOnly$4(Complex64Array$3.prototype, "lastIndexOf", function lastIndexOf(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike$4(searchElement)) {
    throw new TypeError(format$7("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger$1(fromIndex)) {
      throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex >= this._length) {
      fromIndex = this._length - 1;
    } else if (fromIndex < 0) {
      fromIndex += this._length;
    }
  } else {
    fromIndex = this._length - 1;
  }
  re2 = realf(searchElement);
  im = imagf(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i >= 0; i--) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return i;
    }
  }
  return -1;
});
setReadOnlyAccessor$2(Complex64Array$3.prototype, "length", function get5() {
  return this._length;
});
setReadOnly$4(Complex64Array$3.prototype, "map", function map(fcn, thisArg) {
  var outbuf;
  var buf;
  var out;
  var i;
  var v;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(fcn)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", fcn));
  }
  buf = this._buffer;
  out = new this.constructor(this._length);
  outbuf = out._buffer;
  for (i = 0; i < this._length; i++) {
    v = fcn.call(thisArg, getComplex64(buf, i), i, this);
    if (isComplexLike$4(v)) {
      outbuf[2 * i] = realf(v);
      outbuf[2 * i + 1] = imagf(v);
    } else if (isArrayLikeObject$3(v) && v.length === 2) {
      outbuf[2 * i] = v[0];
      outbuf[2 * i + 1] = v[1];
    } else {
      throw new TypeError(format$7("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
    }
  }
  return out;
});
setReadOnly$4(Complex64Array$3.prototype, "reduce", function reduce(reducer, initialValue) {
  var buf;
  var acc;
  var len;
  var v;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(reducer)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", reducer));
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length > 1) {
    acc = initialValue;
    i = 0;
  } else {
    if (len === 0) {
      throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");
    }
    acc = getComplex64(buf, 0);
    i = 1;
  }
  for (; i < len; i++) {
    v = getComplex64(buf, i);
    acc = reducer(acc, v, i, this);
  }
  return acc;
});
setReadOnly$4(Complex64Array$3.prototype, "reverse", function reverse() {
  var buf;
  var tmp;
  var len;
  var N2;
  var i;
  var j;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  len = this._length;
  buf = this._buffer;
  N2 = floor$2(len / 2);
  for (i = 0; i < N2; i++) {
    j = len - i - 1;
    tmp = buf[2 * i];
    buf[2 * i] = buf[2 * j];
    buf[2 * j] = tmp;
    tmp = buf[2 * i + 1];
    buf[2 * i + 1] = buf[2 * j + 1];
    buf[2 * j + 1] = tmp;
  }
  return this;
});
setReadOnly$4(Complex64Array$3.prototype, "set", function set(value) {
  var sbuf;
  var idx;
  var buf;
  var tmp;
  var flg;
  var N2;
  var v;
  var i;
  var j;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  if (arguments.length > 1) {
    idx = arguments[1];
    if (!isNonNegativeInteger$1(idx)) {
      throw new TypeError(format$7("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.", idx));
    }
  } else {
    idx = 0;
  }
  if (isComplexLike$4(value)) {
    if (idx >= this._length) {
      throw new RangeError(format$7("invalid argument. Index argument is out-of-bounds. Value: `%u`.", idx));
    }
    idx *= 2;
    buf[idx] = realf(value);
    buf[idx + 1] = imagf(value);
    return;
  }
  if (isComplexArray$1(value)) {
    N2 = value._length;
    if (idx + N2 > this._length) {
      throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
    }
    sbuf = value._buffer;
    j = buf.byteOffset + idx * BYTES_PER_ELEMENT$1;
    if (sbuf.buffer === buf.buffer && (sbuf.byteOffset < j && sbuf.byteOffset + sbuf.byteLength > j)) {
      tmp = new Float32Array$4(sbuf.length);
      for (i = 0; i < sbuf.length; i++) {
        tmp[i] = sbuf[i];
      }
      sbuf = tmp;
    }
    idx *= 2;
    j = 0;
    for (i = 0; i < N2; i++) {
      buf[idx] = sbuf[j];
      buf[idx + 1] = sbuf[j + 1];
      idx += 2;
      j += 2;
    }
    return;
  }
  if (isCollection$2(value)) {
    N2 = value.length;
    for (i = 0; i < N2; i++) {
      if (!isComplexLike$4(value[i])) {
        flg = true;
        break;
      }
    }
    if (flg) {
      if (!isEven$1(N2)) {
        throw new RangeError(format$7("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.", N2));
      }
      if (idx + N2 / 2 > this._length) {
        throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
      }
      sbuf = value;
      j = buf.byteOffset + idx * BYTES_PER_ELEMENT$1;
      if (sbuf.buffer === buf.buffer && (sbuf.byteOffset < j && sbuf.byteOffset + sbuf.byteLength > j)) {
        tmp = new Float32Array$4(N2);
        for (i = 0; i < N2; i++) {
          tmp[i] = sbuf[i];
        }
        sbuf = tmp;
      }
      idx *= 2;
      N2 /= 2;
      j = 0;
      for (i = 0; i < N2; i++) {
        buf[idx] = sbuf[j];
        buf[idx + 1] = sbuf[j + 1];
        idx += 2;
        j += 2;
      }
      return;
    }
    if (idx + N2 > this._length) {
      throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
    }
    idx *= 2;
    for (i = 0; i < N2; i++) {
      v = value[i];
      buf[idx] = realf(v);
      buf[idx + 1] = imagf(v);
      idx += 2;
    }
    return;
  }
  throw new TypeError(format$7("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.", value));
});
setReadOnly$4(Complex64Array$3.prototype, "slice", function slice(start, end) {
  var outlen;
  var outbuf;
  var out;
  var idx;
  var buf;
  var len;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length === 0) {
    start = 0;
    end = len;
  } else {
    if (!isInteger$1(start)) {
      throw new TypeError(format$7("invalid argument. First argument must be an integer. Value: `%s`.", start));
    }
    if (start < 0) {
      start += len;
      if (start < 0) {
        start = 0;
      }
    }
    if (arguments.length === 1) {
      end = len;
    } else {
      if (!isInteger$1(end)) {
        throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
    }
  }
  if (start < end) {
    outlen = end - start;
  } else {
    outlen = 0;
  }
  out = new this.constructor(outlen);
  outbuf = out._buffer;
  for (i = 0; i < outlen; i++) {
    idx = 2 * (i + start);
    outbuf[2 * i] = buf[idx];
    outbuf[2 * i + 1] = buf[idx + 1];
  }
  return out;
});
setReadOnly$4(Complex64Array$3.prototype, "some", function some(predicate, thisArg) {
  var buf;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$2(predicate)) {
    throw new TypeError(format$7("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    if (predicate.call(thisArg, getComplex64(buf, i), i, this)) {
      return true;
    }
  }
  return false;
});
setReadOnly$4(Complex64Array$3.prototype, "subarray", function subarray(begin, end) {
  var offset;
  var buf;
  var len;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length === 0) {
    begin = 0;
    end = len;
  } else {
    if (!isInteger$1(begin)) {
      throw new TypeError(format$7("invalid argument. First argument must be an integer. Value: `%s`.", begin));
    }
    if (begin < 0) {
      begin += len;
      if (begin < 0) {
        begin = 0;
      }
    }
    if (arguments.length === 1) {
      end = len;
    } else {
      if (!isInteger$1(end)) {
        throw new TypeError(format$7("invalid argument. Second argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
    }
  }
  if (begin >= len) {
    len = 0;
    offset = buf.byteLength;
  } else if (begin >= end) {
    len = 0;
    offset = buf.byteOffset + begin * BYTES_PER_ELEMENT$1;
  } else {
    len = end - begin;
    offset = buf.byteOffset + begin * BYTES_PER_ELEMENT$1;
  }
  return new this.constructor(buf.buffer, offset, len < 0 ? 0 : len);
});
setReadOnly$4(Complex64Array$3.prototype, "toReversed", function toReversed() {
  var outbuf;
  var out;
  var len;
  var buf;
  var i;
  var j;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  len = this._length;
  out = new this.constructor(len);
  buf = this._buffer;
  outbuf = out._buffer;
  for (i = 0; i < len; i++) {
    j = len - i - 1;
    outbuf[2 * i] = buf[2 * j];
    outbuf[2 * i + 1] = buf[2 * j + 1];
  }
  return out;
});
setReadOnly$4(Complex64Array$3.prototype, "toString", function toString2() {
  var out;
  var buf;
  var i;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  out = [];
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    out.push(getComplex64(buf, i).toString());
  }
  return out.join(",");
});
setReadOnly$4(Complex64Array$3.prototype, "with", function copyWith(index, value) {
  var buf;
  var out;
  var len;
  if (!isComplexArray$1(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isInteger$1(index)) {
    throw new TypeError(format$7("invalid argument. First argument must be an integer. Value: `%s`.", index));
  }
  len = this._length;
  if (index < 0) {
    index += len;
  }
  if (index < 0 || index >= len) {
    throw new RangeError(format$7("invalid argument. Index argument is out-of-bounds. Value: `%s`.", index));
  }
  if (!isComplexLike$4(value)) {
    throw new TypeError(format$7("invalid argument. Second argument must be a complex number. Value: `%s`.", value));
  }
  out = new this.constructor(this._buffer);
  buf = out._buffer;
  buf[2 * index] = realf(value);
  buf[2 * index + 1] = imagf(value);
  return out;
});
var main$r = Complex64Array$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$q = main$r;
var lib$d = main$q;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function real$4(z) {
  return z.re;
}
var main$p = real$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$o = main$p;
var lib$c = main$o;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function imag$4(z) {
  return z.im;
}
var main$n = imag$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$m = main$n;
var lib$b = main$m;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArrayLikeObject$2 = lib$t;
var isComplexLike$3 = lib$n;
var format$6 = lib$1L;
var real$3 = lib$c;
var imag$3 = lib$b;
function fromIterator$1(it) {
  var out;
  var v;
  var z;
  out = [];
  while (true) {
    v = it.next();
    if (v.done) {
      break;
    }
    z = v.value;
    if (isArrayLikeObject$2(z) && z.length >= 2) {
      out.push(z[0], z[1]);
    } else if (isComplexLike$3(z)) {
      out.push(real$3(z), imag$3(z));
    } else {
      return new TypeError(format$6("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", z));
    }
  }
  return out;
}
var from_iterator = fromIterator$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isArrayLikeObject$1 = lib$t;
var isComplexLike$2 = lib$n;
var format$5 = lib$1L;
var real$2 = lib$c;
var imag$2 = lib$b;
function fromIteratorMap$1(it, clbk, thisArg) {
  var out;
  var v;
  var z;
  var i;
  out = [];
  i = -1;
  while (true) {
    v = it.next();
    if (v.done) {
      break;
    }
    i += 1;
    z = clbk.call(thisArg, v.value, i);
    if (isArrayLikeObject$1(z) && z.length >= 2) {
      out.push(z[0], z[1]);
    } else if (isComplexLike$2(z)) {
      out.push(real$2(z), imag$2(z));
    } else {
      return new TypeError(format$5("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", z));
    }
  }
  return out;
}
var from_iterator_map = fromIteratorMap$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isComplexLike$1 = lib$n;
var real$1 = lib$c;
var imag$1 = lib$b;
function fromArray$1(buf, arr) {
  var len;
  var v;
  var i;
  var j;
  len = arr.length;
  j = 0;
  for (i = 0; i < len; i++) {
    v = arr[i];
    if (!isComplexLike$1(v)) {
      return null;
    }
    buf[j] = real$1(v);
    buf[j + 1] = imag$1(v);
    j += 2;
  }
  return buf;
}
var from_array = fromArray$1;
var isNonNegativeInteger = lib$v.isPrimitive;
var isArrayLikeObject = lib$t;
var isCollection$1 = lib$1k;
var isArrayBuffer = lib$s;
var isObject$1 = lib$1A;
var isArray$1 = lib$1B;
var isString = lib$r;
var isFunction$1 = lib$1r;
var isComplexLike = lib$n;
var isEven = lib$m;
var isInteger = lib$1m;
var isComplex64Array = lib$l;
var isComplex128Array = lib$k;
var hasIteratorSymbolSupport = lib$j;
var ITERATOR_SYMBOL = lib$i;
var setReadOnly$3 = lib$1J;
var setReadOnlyAccessor$1 = lib$1I;
var Float64Array$5 = lib$Z;
var Complex128 = lib$q;
var real = lib$c;
var imag = lib$b;
var floor$1 = lib$1n;
var reinterpret64$1 = lib$f;
var reinterpret128$1 = lib$e;
var getter$1 = lib$13;
var accessorGetter$1 = lib$11;
var format$4 = lib$1L;
var fromIterator = from_iterator;
var fromIteratorMap = from_iterator_map;
var fromArray = from_array;
var BYTES_PER_ELEMENT = Float64Array$5.BYTES_PER_ELEMENT * 2;
var HAS_ITERATOR_SYMBOL = hasIteratorSymbolSupport();
function isComplexArray(value) {
  return value instanceof Complex128Array$3 || typeof value === "object" && value !== null && (value.constructor.name === "Complex64Array" || value.constructor.name === "Complex128Array") && typeof value._length === "number" && // eslint-disable-line no-underscore-dangle
  // NOTE: we don't perform a more rigorous test here for a typed array for performance reasons, as robustly checking for a typed array instance could require walking the prototype tree and performing relatively expensive constructor checks...
  typeof value._buffer === "object";
}
function isComplexArrayConstructor(value) {
  return value === Complex128Array$3 || // NOTE: weaker test in order to avoid a circular dependency with Complex64Array...
  value.name === "Complex64Array";
}
function getComplex128(buf, idx) {
  idx *= 2;
  return new Complex128(buf[idx], buf[idx + 1]);
}
function Complex128Array$3() {
  var byteOffset;
  var nargs;
  var buf;
  var len;
  nargs = arguments.length;
  if (!(this instanceof Complex128Array$3)) {
    if (nargs === 0) {
      return new Complex128Array$3();
    }
    if (nargs === 1) {
      return new Complex128Array$3(arguments[0]);
    }
    if (nargs === 2) {
      return new Complex128Array$3(arguments[0], arguments[1]);
    }
    return new Complex128Array$3(arguments[0], arguments[1], arguments[2]);
  }
  if (nargs === 0) {
    buf = new Float64Array$5(0);
  } else if (nargs === 1) {
    if (isNonNegativeInteger(arguments[0])) {
      buf = new Float64Array$5(arguments[0] * 2);
    } else if (isCollection$1(arguments[0])) {
      buf = arguments[0];
      len = buf.length;
      if (len && isArray$1(buf) && isComplexLike(buf[0])) {
        buf = fromArray(new Float64Array$5(len * 2), buf);
        if (buf === null) {
          if (!isEven(len)) {
            throw new RangeError(format$4("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.", len));
          }
          buf = new Float64Array$5(arguments[0]);
        }
      } else {
        if (isComplex64Array(buf)) {
          buf = reinterpret64$1(buf, 0);
        } else if (isComplex128Array(buf)) {
          buf = reinterpret128$1(buf, 0);
        } else if (!isEven(len)) {
          throw new RangeError(format$4("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.", len));
        }
        buf = new Float64Array$5(buf);
      }
    } else if (isArrayBuffer(arguments[0])) {
      buf = arguments[0];
      if (!isInteger(buf.byteLength / BYTES_PER_ELEMENT)) {
        throw new RangeError(format$4("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.", BYTES_PER_ELEMENT, buf.byteLength));
      }
      buf = new Float64Array$5(buf);
    } else if (isObject$1(arguments[0])) {
      buf = arguments[0];
      if (HAS_ITERATOR_SYMBOL === false) {
        throw new TypeError(format$4("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.", buf));
      }
      if (!isFunction$1(buf[ITERATOR_SYMBOL])) {
        throw new TypeError(format$4("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", buf));
      }
      buf = buf[ITERATOR_SYMBOL]();
      if (!isFunction$1(buf.next)) {
        throw new TypeError(format$4("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", buf));
      }
      buf = fromIterator(buf);
      if (buf instanceof Error) {
        throw buf;
      }
      buf = new Float64Array$5(buf);
    } else {
      throw new TypeError(format$4("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.", arguments[0]));
    }
  } else {
    buf = arguments[0];
    if (!isArrayBuffer(buf)) {
      throw new TypeError(format$4("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.", buf));
    }
    byteOffset = arguments[1];
    if (!isNonNegativeInteger(byteOffset)) {
      throw new TypeError(format$4("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.", byteOffset));
    }
    if (!isInteger(byteOffset / BYTES_PER_ELEMENT)) {
      throw new RangeError(format$4("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.", BYTES_PER_ELEMENT, byteOffset));
    }
    if (nargs === 2) {
      len = buf.byteLength - byteOffset;
      if (!isInteger(len / BYTES_PER_ELEMENT)) {
        throw new RangeError(format$4("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.", BYTES_PER_ELEMENT, len));
      }
      buf = new Float64Array$5(buf, byteOffset);
    } else {
      len = arguments[2];
      if (!isNonNegativeInteger(len)) {
        throw new TypeError(format$4("invalid argument. Length must be a nonnegative integer. Value: `%s`.", len));
      }
      if (len * BYTES_PER_ELEMENT > buf.byteLength - byteOffset) {
        throw new RangeError(format$4("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.", len * BYTES_PER_ELEMENT));
      }
      buf = new Float64Array$5(buf, byteOffset, len * 2);
    }
  }
  setReadOnly$3(this, "_buffer", buf);
  setReadOnly$3(this, "_length", buf.length / 2);
  return this;
}
setReadOnly$3(Complex128Array$3, "BYTES_PER_ELEMENT", BYTES_PER_ELEMENT);
setReadOnly$3(Complex128Array$3, "name", "Complex128Array");
setReadOnly$3(Complex128Array$3, "from", function from2(src) {
  var thisArg;
  var nargs;
  var clbk;
  var out;
  var buf;
  var tmp;
  var get11;
  var len;
  var flg;
  var v;
  var i;
  var j;
  if (!isFunction$1(this)) {
    throw new TypeError("invalid invocation. `this` context must be a constructor.");
  }
  if (!isComplexArrayConstructor(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  nargs = arguments.length;
  if (nargs > 1) {
    clbk = arguments[1];
    if (!isFunction$1(clbk)) {
      throw new TypeError(format$4("invalid argument. Second argument must be a function. Value: `%s`.", clbk));
    }
    if (nargs > 2) {
      thisArg = arguments[2];
    }
  }
  if (isComplexArray(src)) {
    len = src.length;
    if (clbk) {
      out = new this(len);
      buf = out._buffer;
      j = 0;
      for (i = 0; i < len; i++) {
        v = clbk.call(thisArg, src.get(i), i);
        if (isComplexLike(v)) {
          buf[j] = real(v);
          buf[j + 1] = imag(v);
        } else if (isArrayLikeObject(v) && v.length >= 2) {
          buf[j] = v[0];
          buf[j + 1] = v[1];
        } else {
          throw new TypeError(format$4("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
        }
        j += 2;
      }
      return out;
    }
    return new this(src);
  }
  if (isCollection$1(src)) {
    if (clbk) {
      len = src.length;
      if (src.get && src.set) {
        get11 = accessorGetter$1("default");
      } else {
        get11 = getter$1("default");
      }
      for (i = 0; i < len; i++) {
        if (!isComplexLike(get11(src, i))) {
          flg = true;
          break;
        }
      }
      if (flg) {
        if (!isEven(len)) {
          throw new RangeError(format$4("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.", len));
        }
        out = new this(len / 2);
        buf = out._buffer;
        for (i = 0; i < len; i++) {
          buf[i] = clbk.call(thisArg, get11(src, i), i);
        }
        return out;
      }
      out = new this(len);
      buf = out._buffer;
      j = 0;
      for (i = 0; i < len; i++) {
        v = clbk.call(thisArg, get11(src, i), i);
        if (isComplexLike(v)) {
          buf[j] = real(v);
          buf[j + 1] = imag(v);
        } else if (isArrayLikeObject(v) && v.length >= 2) {
          buf[j] = v[0];
          buf[j + 1] = v[1];
        } else {
          throw new TypeError(format$4("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
        }
        j += 2;
      }
      return out;
    }
    return new this(src);
  }
  if (isObject$1(src) && HAS_ITERATOR_SYMBOL && isFunction$1(src[ITERATOR_SYMBOL])) {
    buf = src[ITERATOR_SYMBOL]();
    if (!isFunction$1(buf.next)) {
      throw new TypeError(format$4("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.", src));
    }
    if (clbk) {
      tmp = fromIteratorMap(buf, clbk, thisArg);
    } else {
      tmp = fromIterator(buf);
    }
    if (tmp instanceof Error) {
      throw tmp;
    }
    len = tmp.length / 2;
    out = new this(len);
    buf = out._buffer;
    for (i = 0; i < len; i++) {
      buf[i] = tmp[i];
    }
    return out;
  }
  throw new TypeError(format$4("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.", src));
});
setReadOnly$3(Complex128Array$3, "of", function of2() {
  var args;
  var i;
  if (!isFunction$1(this)) {
    throw new TypeError("invalid invocation. `this` context must be a constructor.");
  }
  if (!isComplexArrayConstructor(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  args = [];
  for (i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return new this(args);
});
setReadOnly$3(Complex128Array$3.prototype, "at", function at2(idx) {
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isInteger(idx)) {
    throw new TypeError(format$4("invalid argument. Must provide an integer. Value: `%s`.", idx));
  }
  if (idx < 0) {
    idx += this._length;
  }
  if (idx < 0 || idx >= this._length) {
    return;
  }
  return getComplex128(this._buffer, idx);
});
setReadOnlyAccessor$1(Complex128Array$3.prototype, "buffer", function get6() {
  return this._buffer.buffer;
});
setReadOnlyAccessor$1(Complex128Array$3.prototype, "byteLength", function get7() {
  return this._buffer.byteLength;
});
setReadOnlyAccessor$1(Complex128Array$3.prototype, "byteOffset", function get8() {
  return this._buffer.byteOffset;
});
setReadOnly$3(Complex128Array$3.prototype, "BYTES_PER_ELEMENT", Complex128Array$3.BYTES_PER_ELEMENT);
setReadOnly$3(Complex128Array$3.prototype, "copyWithin", function copyWithin2(target, start) {
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (arguments.length === 2) {
    this._buffer.copyWithin(target * 2, start * 2);
  } else {
    this._buffer.copyWithin(target * 2, start * 2, arguments[2] * 2);
  }
  return this;
});
setReadOnly$3(Complex128Array$3.prototype, "entries", function entries2() {
  var buffer;
  var self2;
  var iter;
  var len;
  var FLG2;
  var i;
  var j;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  self2 = this;
  buffer = this._buffer;
  len = this._length;
  i = -1;
  j = -2;
  iter = {};
  setReadOnly$3(iter, "next", next);
  setReadOnly$3(iter, "return", end);
  if (ITERATOR_SYMBOL) {
    setReadOnly$3(iter, ITERATOR_SYMBOL, factory2);
  }
  return iter;
  function next() {
    var z;
    i += 1;
    if (FLG2 || i >= len) {
      return {
        "done": true
      };
    }
    j += 2;
    z = new Complex128(buffer[j], buffer[j + 1]);
    return {
      "value": [i, z],
      "done": false
    };
  }
  function end(value) {
    FLG2 = true;
    if (arguments.length) {
      return {
        "value": value,
        "done": true
      };
    }
    return {
      "done": true
    };
  }
  function factory2() {
    return self2.entries();
  }
});
setReadOnly$3(Complex128Array$3.prototype, "every", function every2(predicate, thisArg) {
  var buf;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    if (!predicate.call(thisArg, getComplex128(buf, i), i, this)) {
      return false;
    }
  }
  return true;
});
setReadOnly$3(Complex128Array$3.prototype, "fill", function fill2(value, start, end) {
  var buf;
  var len;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike(value)) {
    throw new TypeError(format$4("invalid argument. First argument must be a complex number. Value: `%s`.", value));
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length > 1) {
    if (!isInteger(start)) {
      throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", start));
    }
    if (start < 0) {
      start += len;
      if (start < 0) {
        start = 0;
      }
    }
    if (arguments.length > 2) {
      if (!isInteger(end)) {
        throw new TypeError(format$4("invalid argument. Third argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      }
      if (end > len) {
        end = len;
      }
    } else {
      end = len;
    }
  } else {
    start = 0;
    end = len;
  }
  re2 = real(value);
  im = imag(value);
  for (i = start; i < end; i++) {
    idx = 2 * i;
    buf[idx] = re2;
    buf[idx + 1] = im;
  }
  return this;
});
setReadOnly$3(Complex128Array$3.prototype, "filter", function filter2(predicate, thisArg) {
  var buf;
  var out;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  out = [];
  for (i = 0; i < this._length; i++) {
    z = getComplex128(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      out.push(z);
    }
  }
  return new this.constructor(out);
});
setReadOnly$3(Complex128Array$3.prototype, "find", function find2(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex128(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return z;
    }
  }
});
setReadOnly$3(Complex128Array$3.prototype, "findIndex", function findIndex2(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex128(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return i;
    }
  }
  return -1;
});
setReadOnly$3(Complex128Array$3.prototype, "findLast", function findLast2(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = this._length - 1; i >= 0; i--) {
    z = getComplex128(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return z;
    }
  }
});
setReadOnly$3(Complex128Array$3.prototype, "findLastIndex", function findLastIndex2(predicate, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = this._length - 1; i >= 0; i--) {
    z = getComplex128(buf, i);
    if (predicate.call(thisArg, z, i, this)) {
      return i;
    }
  }
  return -1;
});
setReadOnly$3(Complex128Array$3.prototype, "forEach", function forEach2(fcn, thisArg) {
  var buf;
  var i;
  var z;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(fcn)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", fcn));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    z = getComplex128(buf, i);
    fcn.call(thisArg, z, i, this);
  }
});
setReadOnly$3(Complex128Array$3.prototype, "get", function get9(idx) {
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isNonNegativeInteger(idx)) {
    throw new TypeError(format$4("invalid argument. Must provide a nonnegative integer. Value: `%s`.", idx));
  }
  if (idx >= this._length) {
    return;
  }
  return getComplex128(this._buffer, idx);
});
setReadOnlyAccessor$1(Complex128Array$3.prototype, "length", function get10() {
  return this._length;
});
setReadOnly$3(Complex128Array$3.prototype, "includes", function includes2(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike(searchElement)) {
    throw new TypeError(format$4("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger(fromIndex)) {
      throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex < 0) {
      fromIndex += this._length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }
  } else {
    fromIndex = 0;
  }
  re2 = real(searchElement);
  im = imag(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i < this._length; i++) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return true;
    }
  }
  return false;
});
setReadOnly$3(Complex128Array$3.prototype, "indexOf", function indexOf2(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike(searchElement)) {
    throw new TypeError(format$4("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger(fromIndex)) {
      throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex < 0) {
      fromIndex += this._length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }
  } else {
    fromIndex = 0;
  }
  re2 = real(searchElement);
  im = imag(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i < this._length; i++) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return i;
    }
  }
  return -1;
});
setReadOnly$3(Complex128Array$3.prototype, "join", function join2(separator) {
  var out;
  var buf;
  var sep;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (arguments.length === 0) {
    sep = ",";
  } else if (isString(separator)) {
    sep = separator;
  } else {
    throw new TypeError(format$4("invalid argument. First argument must be a string. Value: `%s`.", separator));
  }
  out = [];
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    out.push(getComplex128(buf, i).toString());
  }
  return out.join(sep);
});
setReadOnly$3(Complex128Array$3.prototype, "lastIndexOf", function lastIndexOf2(searchElement, fromIndex) {
  var buf;
  var idx;
  var re2;
  var im;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isComplexLike(searchElement)) {
    throw new TypeError(format$4("invalid argument. First argument must be a complex number. Value: `%s`.", searchElement));
  }
  if (arguments.length > 1) {
    if (!isInteger(fromIndex)) {
      throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", fromIndex));
    }
    if (fromIndex >= this._length) {
      fromIndex = this._length - 1;
    } else if (fromIndex < 0) {
      fromIndex += this._length;
    }
  } else {
    fromIndex = this._length - 1;
  }
  re2 = real(searchElement);
  im = imag(searchElement);
  buf = this._buffer;
  for (i = fromIndex; i >= 0; i--) {
    idx = 2 * i;
    if (re2 === buf[idx] && im === buf[idx + 1]) {
      return i;
    }
  }
  return -1;
});
setReadOnly$3(Complex128Array$3.prototype, "map", function map2(fcn, thisArg) {
  var outbuf;
  var buf;
  var out;
  var i;
  var v;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(fcn)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", fcn));
  }
  buf = this._buffer;
  out = new this.constructor(this._length);
  outbuf = out._buffer;
  for (i = 0; i < this._length; i++) {
    v = fcn.call(thisArg, getComplex128(buf, i), i, this);
    if (isComplexLike(v)) {
      outbuf[2 * i] = real(v);
      outbuf[2 * i + 1] = imag(v);
    } else if (isArrayLikeObject(v) && v.length === 2) {
      outbuf[2 * i] = v[0];
      outbuf[2 * i + 1] = v[1];
    } else {
      throw new TypeError(format$4("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.", v));
    }
  }
  return out;
});
setReadOnly$3(Complex128Array$3.prototype, "reduce", function reduce2(reducer, initialValue) {
  var buf;
  var acc;
  var len;
  var v;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(reducer)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", reducer));
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length > 1) {
    acc = initialValue;
    i = 0;
  } else {
    if (len === 0) {
      throw new Error("invalid operation. If not provided an initial value, an array must contain at least one element.");
    }
    acc = getComplex128(buf, 0);
    i = 1;
  }
  for (; i < len; i++) {
    v = getComplex128(buf, i);
    acc = reducer(acc, v, i, this);
  }
  return acc;
});
setReadOnly$3(Complex128Array$3.prototype, "reverse", function reverse2() {
  var buf;
  var tmp;
  var len;
  var N2;
  var i;
  var j;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  len = this._length;
  buf = this._buffer;
  N2 = floor$1(len / 2);
  for (i = 0; i < N2; i++) {
    j = len - i - 1;
    tmp = buf[2 * i];
    buf[2 * i] = buf[2 * j];
    buf[2 * j] = tmp;
    tmp = buf[2 * i + 1];
    buf[2 * i + 1] = buf[2 * j + 1];
    buf[2 * j + 1] = tmp;
  }
  return this;
});
setReadOnly$3(Complex128Array$3.prototype, "set", function set2(value) {
  var sbuf;
  var idx;
  var buf;
  var tmp;
  var flg;
  var N2;
  var v;
  var i;
  var j;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  if (arguments.length > 1) {
    idx = arguments[1];
    if (!isNonNegativeInteger(idx)) {
      throw new TypeError(format$4("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.", idx));
    }
  } else {
    idx = 0;
  }
  if (isComplexLike(value)) {
    if (idx >= this._length) {
      throw new RangeError(format$4("invalid argument. Index argument is out-of-bounds. Value: `%u`.", idx));
    }
    idx *= 2;
    buf[idx] = real(value);
    buf[idx + 1] = imag(value);
    return;
  }
  if (isComplexArray(value)) {
    N2 = value._length;
    if (idx + N2 > this._length) {
      throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
    }
    sbuf = value._buffer;
    j = buf.byteOffset + idx * BYTES_PER_ELEMENT;
    if (sbuf.buffer === buf.buffer && (sbuf.byteOffset < j && sbuf.byteOffset + sbuf.byteLength > j)) {
      tmp = new Float64Array$5(sbuf.length);
      for (i = 0; i < sbuf.length; i++) {
        tmp[i] = sbuf[i];
      }
      sbuf = tmp;
    }
    idx *= 2;
    j = 0;
    for (i = 0; i < N2; i++) {
      buf[idx] = sbuf[j];
      buf[idx + 1] = sbuf[j + 1];
      idx += 2;
      j += 2;
    }
    return;
  }
  if (isCollection$1(value)) {
    N2 = value.length;
    for (i = 0; i < N2; i++) {
      if (!isComplexLike(value[i])) {
        flg = true;
        break;
      }
    }
    if (flg) {
      if (!isEven(N2)) {
        throw new RangeError(format$4("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.", N2));
      }
      if (idx + N2 / 2 > this._length) {
        throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
      }
      sbuf = value;
      j = buf.byteOffset + idx * BYTES_PER_ELEMENT;
      if (sbuf.buffer === buf.buffer && (sbuf.byteOffset < j && sbuf.byteOffset + sbuf.byteLength > j)) {
        tmp = new Float64Array$5(N2);
        for (i = 0; i < N2; i++) {
          tmp[i] = sbuf[i];
        }
        sbuf = tmp;
      }
      idx *= 2;
      N2 /= 2;
      j = 0;
      for (i = 0; i < N2; i++) {
        buf[idx] = sbuf[j];
        buf[idx + 1] = sbuf[j + 1];
        idx += 2;
        j += 2;
      }
      return;
    }
    if (idx + N2 > this._length) {
      throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");
    }
    idx *= 2;
    for (i = 0; i < N2; i++) {
      v = value[i];
      buf[idx] = real(v);
      buf[idx + 1] = imag(v);
      idx += 2;
    }
    return;
  }
  throw new TypeError(format$4("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.", value));
});
setReadOnly$3(Complex128Array$3.prototype, "slice", function slice2(start, end) {
  var outlen;
  var outbuf;
  var out;
  var idx;
  var buf;
  var len;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length === 0) {
    start = 0;
    end = len;
  } else {
    if (!isInteger(start)) {
      throw new TypeError(format$4("invalid argument. First argument must be an integer. Value: `%s`.", start));
    }
    if (start < 0) {
      start += len;
      if (start < 0) {
        start = 0;
      }
    }
    if (arguments.length === 1) {
      end = len;
    } else {
      if (!isInteger(end)) {
        throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
    }
  }
  if (start < end) {
    outlen = end - start;
  } else {
    outlen = 0;
  }
  out = new this.constructor(outlen);
  outbuf = out._buffer;
  for (i = 0; i < outlen; i++) {
    idx = 2 * (i + start);
    outbuf[2 * i] = buf[idx];
    outbuf[2 * i + 1] = buf[idx + 1];
  }
  return out;
});
setReadOnly$3(Complex128Array$3.prototype, "some", function some2(predicate, thisArg) {
  var buf;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isFunction$1(predicate)) {
    throw new TypeError(format$4("invalid argument. First argument must be a function. Value: `%s`.", predicate));
  }
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    if (predicate.call(thisArg, getComplex128(buf, i), i, this)) {
      return true;
    }
  }
  return false;
});
setReadOnly$3(Complex128Array$3.prototype, "subarray", function subarray2(begin, end) {
  var offset;
  var buf;
  var len;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  buf = this._buffer;
  len = this._length;
  if (arguments.length === 0) {
    begin = 0;
    end = len;
  } else {
    if (!isInteger(begin)) {
      throw new TypeError(format$4("invalid argument. First argument must be an integer. Value: `%s`.", begin));
    }
    if (begin < 0) {
      begin += len;
      if (begin < 0) {
        begin = 0;
      }
    }
    if (arguments.length === 1) {
      end = len;
    } else {
      if (!isInteger(end)) {
        throw new TypeError(format$4("invalid argument. Second argument must be an integer. Value: `%s`.", end));
      }
      if (end < 0) {
        end += len;
        if (end < 0) {
          end = 0;
        }
      } else if (end > len) {
        end = len;
      }
    }
  }
  if (begin >= len) {
    len = 0;
    offset = buf.byteLength;
  } else if (begin >= end) {
    len = 0;
    offset = buf.byteOffset + begin * BYTES_PER_ELEMENT;
  } else {
    len = end - begin;
    offset = buf.byteOffset + begin * BYTES_PER_ELEMENT;
  }
  return new this.constructor(buf.buffer, offset, len < 0 ? 0 : len);
});
setReadOnly$3(Complex128Array$3.prototype, "toReversed", function toReversed2() {
  var outbuf;
  var out;
  var len;
  var buf;
  var i;
  var j;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  len = this._length;
  out = new this.constructor(len);
  buf = this._buffer;
  outbuf = out._buffer;
  for (i = 0; i < len; i++) {
    j = len - i - 1;
    outbuf[2 * i] = buf[2 * j];
    outbuf[2 * i + 1] = buf[2 * j + 1];
  }
  return out;
});
setReadOnly$3(Complex128Array$3.prototype, "toString", function toString3() {
  var out;
  var buf;
  var i;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  out = [];
  buf = this._buffer;
  for (i = 0; i < this._length; i++) {
    out.push(getComplex128(buf, i).toString());
  }
  return out.join(",");
});
setReadOnly$3(Complex128Array$3.prototype, "with", function copyWith2(index, value) {
  var buf;
  var out;
  var len;
  if (!isComplexArray(this)) {
    throw new TypeError("invalid invocation. `this` is not a complex number array.");
  }
  if (!isInteger(index)) {
    throw new TypeError(format$4("invalid argument. First argument must be an integer. Value: `%s`.", index));
  }
  len = this._length;
  if (index < 0) {
    index += len;
  }
  if (index < 0 || index >= len) {
    throw new RangeError(format$4("invalid argument. Index argument is out-of-bounds. Value: `%s`.", index));
  }
  if (!isComplexLike(value)) {
    throw new TypeError(format$4("invalid argument. Second argument must be a complex number. Value: `%s`.", value));
  }
  out = new this.constructor(this._buffer);
  buf = out._buffer;
  buf[2 * index] = real(value);
  buf[2 * index + 1] = imag(value);
  return out;
});
var main$l = Complex128Array$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$k = main$l;
var lib$a = main$k;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Float64Array$4 = lib$Z;
var Float32Array$3 = lib$W;
var Uint32Array$4 = lib$19;
var Int32Array$3 = lib$R;
var Uint16Array$3 = lib$N;
var Int16Array$3 = lib$I;
var Uint8Array$3 = lib$E;
var Uint8ClampedArray$3 = lib$B;
var Int8Array$3 = lib$w;
var Complex64Array$2 = lib$d;
var Complex128Array$2 = lib$a;
var CTORS$7 = [
  Float64Array$4,
  Float32Array$3,
  Int32Array$3,
  Uint32Array$4,
  Int16Array$3,
  Uint16Array$3,
  Int8Array$3,
  Uint8Array$3,
  Uint8ClampedArray$3,
  Complex64Array$2,
  Complex128Array$2
];
var ctors$3 = CTORS$7;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DTYPES$1 = [
  "float64",
  "float32",
  "int32",
  "uint32",
  "int16",
  "uint16",
  "int8",
  "uint8",
  "uint8c",
  "complex64",
  "complex128"
];
var dtypes = DTYPES$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isBuffer = lib$1u;
var isArray = lib$1B;
var constructorName = lib$1t;
var ctor2dtype = ctor2dtype$1;
var CTORS$6 = ctors$3;
var DTYPES = dtypes;
var NTYPES = DTYPES.length;
function dtype$1(value) {
  var i;
  if (isArray(value)) {
    return "generic";
  }
  if (isBuffer(value)) {
    return null;
  }
  for (i = 0; i < NTYPES; i++) {
    if (value instanceof CTORS$6[i]) {
      return DTYPES[i];
    }
  }
  return ctor2dtype[constructorName(value)] || null;
}
var main$j = dtype$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$i = main$j;
var lib$9 = main$i;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isAccessorArray = lib$14;
var getter = lib$13;
var setter = lib$12;
var accessorGetter = lib$11;
var accessorSetter = lib$10;
var dtype = lib$9;
function arraylike2object$2(x) {
  var dt = dtype(x);
  if (isAccessorArray(x)) {
    return {
      "data": x,
      "dtype": dt,
      "accessorProtocol": true,
      "accessors": [
        accessorGetter(dt),
        accessorSetter(dt)
      ]
    };
  }
  return {
    "data": x,
    "dtype": dt,
    "accessorProtocol": false,
    "accessors": [
      getter(dt),
      setter(dt)
    ]
  };
}
var main$h = arraylike2object$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$g = main$h;
var lib$8 = main$g;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function gcopy$3(N2, x, strideX, offsetX, y, strideY, offsetY) {
  var xbuf;
  var ybuf;
  var set3;
  var get11;
  var ix;
  var iy;
  var i;
  xbuf = x.data;
  ybuf = y.data;
  get11 = x.accessors[0];
  set3 = y.accessors[1];
  ix = offsetX;
  iy = offsetY;
  for (i = 0; i < N2; i++) {
    set3(ybuf, iy, get11(xbuf, ix));
    ix += strideX;
    iy += strideY;
  }
  return x;
}
var accessors$2 = gcopy$3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var arraylike2object$1 = lib$8;
var accessors$1 = accessors$2;
var M$2 = 8;
function gcopy$2(N2, x, strideX, y, strideY) {
  var ix;
  var iy;
  var ox;
  var oy;
  var m;
  var i;
  if (N2 <= 0) {
    return y;
  }
  ox = arraylike2object$1(x);
  oy = arraylike2object$1(y);
  if (ox.accessorProtocol || oy.accessorProtocol) {
    if (strideX < 0) {
      ix = (1 - N2) * strideX;
    } else {
      ix = 0;
    }
    if (strideY < 0) {
      iy = (1 - N2) * strideY;
    } else {
      iy = 0;
    }
    accessors$1(N2, ox, strideX, ix, oy, strideY, iy);
    return oy.data;
  }
  if (strideX === 1 && strideY === 1) {
    m = N2 % M$2;
    if (m > 0) {
      for (i = 0; i < m; i++) {
        y[i] = x[i];
      }
    }
    if (N2 < M$2) {
      return y;
    }
    for (i = m; i < N2; i += M$2) {
      y[i] = x[i];
      y[i + 1] = x[i + 1];
      y[i + 2] = x[i + 2];
      y[i + 3] = x[i + 3];
      y[i + 4] = x[i + 4];
      y[i + 5] = x[i + 5];
      y[i + 6] = x[i + 6];
      y[i + 7] = x[i + 7];
    }
    return y;
  }
  if (strideX < 0) {
    ix = (1 - N2) * strideX;
  } else {
    ix = 0;
  }
  if (strideY < 0) {
    iy = (1 - N2) * strideY;
  } else {
    iy = 0;
  }
  for (i = 0; i < N2; i++) {
    y[iy] = x[ix];
    ix += strideX;
    iy += strideY;
  }
  return y;
}
var main$f = gcopy$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var arraylike2object = lib$8;
var accessors = accessors$2;
var M$1 = 8;
function gcopy$1(N2, x, strideX, offsetX, y, strideY, offsetY) {
  var ix;
  var iy;
  var ox;
  var oy;
  var m;
  var i;
  if (N2 <= 0) {
    return y;
  }
  ox = arraylike2object(x);
  oy = arraylike2object(y);
  if (ox.accessorProtocol || oy.accessorProtocol) {
    accessors(N2, ox, strideX, offsetX, oy, strideY, offsetY);
    return oy.data;
  }
  ix = offsetX;
  iy = offsetY;
  if (strideX === 1 && strideY === 1) {
    m = N2 % M$1;
    if (m > 0) {
      for (i = 0; i < m; i++) {
        y[iy] = x[ix];
        ix += strideX;
        iy += strideY;
      }
    }
    if (N2 < M$1) {
      return y;
    }
    for (i = m; i < N2; i += M$1) {
      y[iy] = x[ix];
      y[iy + 1] = x[ix + 1];
      y[iy + 2] = x[ix + 2];
      y[iy + 3] = x[ix + 3];
      y[iy + 4] = x[ix + 4];
      y[iy + 5] = x[ix + 5];
      y[iy + 6] = x[ix + 6];
      y[iy + 7] = x[ix + 7];
      ix += M$1;
      iy += M$1;
    }
    return y;
  }
  for (i = 0; i < N2; i++) {
    y[iy] = x[ix];
    ix += strideX;
    iy += strideY;
  }
  return y;
}
var ndarray$1 = gcopy$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly$2 = lib$1J;
var main$e = main$f;
var ndarray = ndarray$1;
setReadOnly$2(main$e, "ndarray", ndarray);
var lib$7 = main$e;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function foo$1() {
}
var foo_1 = foo$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var foo = foo_1;
function hasFunctionNameSupport$1() {
  return foo.name === "foo";
}
var main$d = hasFunctionNameSupport$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$c = main$d;
var lib$6 = main$c;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isFunction = lib$1r;
var hasFunctionNameSupport = lib$6;
var format$3 = lib$1L;
var RE = lib$1x.REGEXP;
var isFunctionNameSupported = hasFunctionNameSupport();
function functionName(fcn) {
  if (isFunction(fcn) === false) {
    throw new TypeError(format$3("invalid argument. Must provide a function. Value: `%s`.", fcn));
  }
  if (isFunctionNameSupported) {
    return fcn.name;
  }
  return RE.exec(fcn.toString())[1];
}
var main$b = functionName;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$a = main$b;
var lib$5 = main$a;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Int8Array$2 = lib$w;
var Uint8Array$2 = lib$E;
var Uint8ClampedArray$2 = lib$B;
var Int16Array$2 = lib$I;
var Uint16Array$2 = lib$N;
var Int32Array$2 = lib$R;
var Uint32Array$3 = lib$19;
var Float32Array$2 = lib$W;
var Float64Array$3 = lib$Z;
var CTORS$5 = [
  Float64Array$3,
  Float32Array$2,
  Int32Array$2,
  Uint32Array$3,
  Int16Array$2,
  Uint16Array$2,
  Int8Array$2,
  Uint8Array$2,
  Uint8ClampedArray$2
];
var ctors$2 = CTORS$5;
const require$$6 = [
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctorName$2 = lib$1t;
var fcnName = lib$5;
var getPrototypeOf$2 = lib$1p;
var hasFloat64ArraySupport = lib$_;
var Float64Array$2 = lib$Z;
var CTORS$4 = ctors$2;
var NAMES$1 = require$$6;
var TypedArray = hasFloat64ArraySupport() ? getPrototypeOf$2(Float64Array$2) : Dummy;
TypedArray = fcnName(TypedArray) === "TypedArray" ? TypedArray : Dummy;
function Dummy() {
}
function isTypedArray$1(value) {
  var v;
  var i;
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (value instanceof TypedArray) {
    return true;
  }
  for (i = 0; i < CTORS$4.length; i++) {
    if (value instanceof CTORS$4[i]) {
      return true;
    }
  }
  while (value) {
    v = ctorName$2(value);
    for (i = 0; i < NAMES$1.length; i++) {
      if (NAMES$1[i] === v) {
        return true;
      }
    }
    value = getPrototypeOf$2(value);
  }
  return false;
}
var main$9 = isTypedArray$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$8 = main$9;
var lib$4 = main$8;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Complex64Array$1 = lib$d;
var Complex128Array$1 = lib$a;
var CTORS$3 = [
  Complex128Array$1,
  Complex64Array$1
];
var ctors$1 = CTORS$3;
const require$$3 = [
  "Complex64Array",
  "Complex128Array"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ctorName$1 = lib$1t;
var getPrototypeOf$1 = lib$1p;
var CTORS$2 = ctors$1;
var NAMES = require$$3;
function isComplexTypedArray$1(value) {
  var v;
  var i;
  if (typeof value !== "object" || value === null) {
    return false;
  }
  for (i = 0; i < CTORS$2.length; i++) {
    if (value instanceof CTORS$2[i]) {
      return true;
    }
  }
  while (value) {
    v = ctorName$1(value);
    for (i = 0; i < NAMES.length; i++) {
      if (NAMES[i] === v) {
        return true;
      }
    }
    value = getPrototypeOf$1(value);
  }
  return false;
}
var main$7 = isComplexTypedArray$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$6 = main$7;
var lib$3 = main$6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var format$2 = lib$1L;
function instanceOf$1(value, constructor) {
  if (typeof constructor !== "function") {
    throw new TypeError(format$2("invalid argument. Second argument must be callable. Value: `%s`.", constructor));
  }
  return value instanceof constructor;
}
var main$5 = instanceOf$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$4 = main$5;
var lib$2 = main$4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Int8Array$1 = lib$w;
var Uint8Array$1 = lib$E;
var Uint8ClampedArray$1 = lib$B;
var Int16Array$1 = lib$I;
var Uint16Array$1 = lib$N;
var Int32Array$1 = lib$R;
var Uint32Array$2 = lib$19;
var Float32Array$1 = lib$W;
var Float64Array$1 = lib$Z;
var Complex64Array = lib$d;
var Complex128Array = lib$a;
var CTORS$1 = [
  [Float64Array$1, "Float64Array"],
  [Float32Array$1, "Float32Array"],
  [Int32Array$1, "Int32Array"],
  [Uint32Array$2, "Uint32Array"],
  [Int16Array$1, "Int16Array"],
  [Uint16Array$1, "Uint16Array"],
  [Int8Array$1, "Int8Array"],
  [Uint8Array$1, "Uint8Array"],
  [Uint8ClampedArray$1, "Uint8ClampedArray"],
  [Complex64Array, "Complex64Array"],
  [Complex128Array, "Complex128Array"]
];
var ctors = CTORS$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var instanceOf = lib$2;
var ctorName = lib$1t;
var getPrototypeOf = lib$1p;
var CTORS = ctors;
function typeName$1(arr) {
  var v;
  var i;
  for (i = 0; i < CTORS.length; i++) {
    if (instanceOf(arr, CTORS[i][0])) {
      return CTORS[i][1];
    }
  }
  while (arr) {
    v = ctorName(arr);
    for (i = 0; i < CTORS.length; i++) {
      if (v === CTORS[i][1]) {
        return CTORS[i][1];
      }
    }
    arr = getPrototypeOf(arr);
  }
}
var type = typeName$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var isTypedArray = lib$4;
var isComplexTypedArray = lib$3;
var reinterpret64 = lib$f;
var reinterpret128 = lib$e;
var format$1 = lib$1L;
var typeName = type;
function typedarray2json$1(arr) {
  var data;
  var out;
  var i;
  if (isTypedArray(arr)) {
    data = arr;
  } else if (isComplexTypedArray(arr)) {
    if (arr.BYTES_PER_ELEMENT === 8) {
      data = reinterpret64(arr, 0);
    } else {
      data = reinterpret128(arr, 0);
    }
  } else {
    throw new TypeError(format$1("invalid argument. Must provide a typed array. Value: `%s`.", arr));
  }
  out = {
    "type": typeName(arr),
    "data": []
  };
  for (i = 0; i < data.length; i++) {
    out.data.push(data[i]);
  }
  return out;
}
var main$3 = typedarray2json$1;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var main$2 = main$3;
var lib$1 = main$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UINT32_MAX$1 = lib$1b;
var floor = lib$1n;
var MAX = UINT32_MAX$1 - 1;
function randuint32$2() {
  var v = floor(1 + MAX * Math.random());
  return v >>> 0;
}
var rand_uint32 = randuint32$2;
var setReadOnly$1 = lib$1J;
var setReadOnlyAccessor = lib$1I;
var setReadWriteAccessor = lib$1H;
var hasOwnProp = lib$1G;
var isObject = lib$1o;
var isCollection = lib$1k;
var isUint32Array = lib$1j;
var isBoolean = lib$1y.isPrimitive;
var isPositiveInteger = lib$1d.isPrimitive;
var FLOAT64_MAX_SAFE_INTEGER = lib$1c;
var UINT32_MAX = lib$1b;
var Uint32Array$1 = lib$19;
var max = lib$16;
var umul = lib$15;
var gcopy = lib$7;
var typedarray2json = lib$1;
var format = lib$1L;
var randuint32$1 = rand_uint32;
var N = 624;
var M = 397;
var MAX_SEED = UINT32_MAX >>> 0;
var SEED_ARRAY_INIT_STATE = 19650218 >>> 0;
var UPPER_MASK = 2147483648 >>> 0;
var LOWER_MASK = 2147483647 >>> 0;
var KNUTH_MULTIPLIER = 1812433253 >>> 0;
var MAGIC_MULTIPLIER_1 = 1664525 >>> 0;
var MAGIC_MULTIPLIER_2 = 1566083941 >>> 0;
var TEMPERING_COEFFICIENT_1 = 2636928640 >>> 0;
var TEMPERING_COEFFICIENT_2 = 4022730752 >>> 0;
var MATRIX_A = 2567483615 >>> 0;
var MAG01 = [0 >>> 0, MATRIX_A >>> 0];
var FLOAT64_NORMALIZATION_CONSTANT = 1 / (FLOAT64_MAX_SAFE_INTEGER + 1);
var TWO_26 = 67108864 >>> 0;
var TWO_32 = 2147483648 >>> 0;
var ONE = 1 >>> 0;
var MAX_NORMALIZED = FLOAT64_MAX_SAFE_INTEGER * FLOAT64_NORMALIZATION_CONSTANT;
var STATE_ARRAY_VERSION = 1;
var NUM_STATE_SECTIONS = 3;
var STATE_SECTION_OFFSET = 2;
var OTHER_SECTION_OFFSET = N + 3;
var SEED_SECTION_OFFSET = N + 5;
var STATE_FIXED_LENGTH = N + 6;
function verifyState(state, FLG2) {
  var s1;
  if (FLG2) {
    s1 = "option";
  } else {
    s1 = "argument";
  }
  if (state.length < STATE_FIXED_LENGTH + 1) {
    return new RangeError(format("invalid %s. `state` array has insufficient length.", s1));
  }
  if (state[0] !== STATE_ARRAY_VERSION) {
    return new RangeError(format("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`", s1, STATE_ARRAY_VERSION, state[0]));
  }
  if (state[1] !== NUM_STATE_SECTIONS) {
    return new RangeError(format("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.", s1, NUM_STATE_SECTIONS, state[1]));
  }
  if (state[STATE_SECTION_OFFSET] !== N) {
    return new RangeError(format("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.", s1, N, state[STATE_SECTION_OFFSET]));
  }
  if (state[OTHER_SECTION_OFFSET] !== 1) {
    return new RangeError(format("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.", s1, 1, state[OTHER_SECTION_OFFSET]));
  }
  if (state[SEED_SECTION_OFFSET] !== state.length - STATE_FIXED_LENGTH) {
    return new RangeError(format("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.", s1, state.length - STATE_FIXED_LENGTH, state[SEED_SECTION_OFFSET]));
  }
  return null;
}
function createState(state, N2, s) {
  var i;
  state[0] = s >>> 0;
  for (i = 1; i < N2; i++) {
    s = state[i - 1] >>> 0;
    s = (s ^ s >>> 30) >>> 0;
    state[i] = umul(s, KNUTH_MULTIPLIER) + i >>> 0;
  }
  return state;
}
function initState(state, N2, seed, M2) {
  var s;
  var i;
  var j;
  var k;
  i = 1;
  j = 0;
  for (k = max(N2, M2); k > 0; k--) {
    s = state[i - 1] >>> 0;
    s = (s ^ s >>> 30) >>> 0;
    s = umul(s, MAGIC_MULTIPLIER_1) >>> 0;
    state[i] = (state[i] >>> 0 ^ s) + seed[j] + j >>> 0;
    i += 1;
    j += 1;
    if (i >= N2) {
      state[0] = state[N2 - 1];
      i = 1;
    }
    if (j >= M2) {
      j = 0;
    }
  }
  for (k = N2 - 1; k > 0; k--) {
    s = state[i - 1] >>> 0;
    s = (s ^ s >>> 30) >>> 0;
    s = umul(s, MAGIC_MULTIPLIER_2) >>> 0;
    state[i] = (state[i] >>> 0 ^ s) - i >>> 0;
    i += 1;
    if (i >= N2) {
      state[0] = state[N2 - 1];
      i = 1;
    }
  }
  state[0] = TWO_32;
  return state;
}
function twist(state) {
  var w;
  var i;
  var j;
  var k;
  k = N - M;
  for (i = 0; i < k; i++) {
    w = state[i] & UPPER_MASK | state[i + 1] & LOWER_MASK;
    state[i] = state[i + M] ^ w >>> 1 ^ MAG01[w & ONE];
  }
  j = N - 1;
  for (; i < j; i++) {
    w = state[i] & UPPER_MASK | state[i + 1] & LOWER_MASK;
    state[i] = state[i - k] ^ w >>> 1 ^ MAG01[w & ONE];
  }
  w = state[j] & UPPER_MASK | state[0] & LOWER_MASK;
  state[j] = state[M - 1] ^ w >>> 1 ^ MAG01[w & ONE];
  return state;
}
function factory$2(options) {
  var STATE;
  var state;
  var opts;
  var seed;
  var slen;
  var err;
  opts = {};
  if (arguments.length) {
    if (!isObject(options)) {
      throw new TypeError(format("invalid argument. Options argument must be an object. Value: `%s`.", options));
    }
    if (hasOwnProp(options, "copy")) {
      opts.copy = options.copy;
      if (!isBoolean(options.copy)) {
        throw new TypeError(format("invalid option. `%s` option must be a boolean. Option: `%s`.", "copy", options.copy));
      }
    }
    if (hasOwnProp(options, "state")) {
      state = options.state;
      opts.state = true;
      if (!isUint32Array(state)) {
        throw new TypeError(format("invalid option. `%s` option must be a Uint32Array. Option: `%s`.", "state", state));
      }
      err = verifyState(state, true);
      if (err) {
        throw err;
      }
      if (opts.copy === false) {
        STATE = state;
      } else {
        STATE = new Uint32Array$1(state.length);
        gcopy(state.length, state, 1, STATE, 1);
      }
      state = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (STATE_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, N);
      seed = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (SEED_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, state[SEED_SECTION_OFFSET]);
    }
    if (seed === void 0) {
      if (hasOwnProp(options, "seed")) {
        seed = options.seed;
        opts.seed = true;
        if (isPositiveInteger(seed)) {
          if (seed > MAX_SEED) {
            throw new RangeError(format("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.", "seed", seed));
          }
          seed >>>= 0;
        } else if (isCollection(seed) === false || seed.length < 1) {
          throw new TypeError(format("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.", "seed", seed));
        } else if (seed.length === 1) {
          seed = seed[0];
          if (!isPositiveInteger(seed)) {
            throw new TypeError(format("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.", "seed", seed));
          }
          if (seed > MAX_SEED) {
            throw new RangeError(format("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.", "seed", seed));
          }
          seed >>>= 0;
        } else {
          slen = seed.length;
          STATE = new Uint32Array$1(STATE_FIXED_LENGTH + slen);
          STATE[0] = STATE_ARRAY_VERSION;
          STATE[1] = NUM_STATE_SECTIONS;
          STATE[STATE_SECTION_OFFSET] = N;
          STATE[OTHER_SECTION_OFFSET] = 1;
          STATE[OTHER_SECTION_OFFSET + 1] = N;
          STATE[SEED_SECTION_OFFSET] = slen;
          gcopy.ndarray(slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET + 1);
          state = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (STATE_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, N);
          seed = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (SEED_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, slen);
          state = createState(state, N, SEED_ARRAY_INIT_STATE);
          state = initState(state, N, seed, slen);
        }
      } else {
        seed = randuint32$1() >>> 0;
      }
    }
  } else {
    seed = randuint32$1() >>> 0;
  }
  if (state === void 0) {
    STATE = new Uint32Array$1(STATE_FIXED_LENGTH + 1);
    STATE[0] = STATE_ARRAY_VERSION;
    STATE[1] = NUM_STATE_SECTIONS;
    STATE[STATE_SECTION_OFFSET] = N;
    STATE[OTHER_SECTION_OFFSET] = 1;
    STATE[OTHER_SECTION_OFFSET + 1] = N;
    STATE[SEED_SECTION_OFFSET] = 1;
    STATE[SEED_SECTION_OFFSET + 1] = seed;
    state = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (STATE_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, N);
    seed = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (SEED_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, 1);
    state = createState(state, N, seed);
  }
  setReadOnly$1(mt199372, "NAME", "mt19937");
  setReadOnlyAccessor(mt199372, "seed", getSeed);
  setReadOnlyAccessor(mt199372, "seedLength", getSeedLength);
  setReadWriteAccessor(mt199372, "state", getState, setState);
  setReadOnlyAccessor(mt199372, "stateLength", getStateLength);
  setReadOnlyAccessor(mt199372, "byteLength", getStateSize);
  setReadOnly$1(mt199372, "toJSON", toJSON2);
  setReadOnly$1(mt199372, "MIN", 0);
  setReadOnly$1(mt199372, "MAX", UINT32_MAX);
  setReadOnly$1(mt199372, "normalized", normalized);
  setReadOnly$1(normalized, "NAME", mt199372.NAME);
  setReadOnlyAccessor(normalized, "seed", getSeed);
  setReadOnlyAccessor(normalized, "seedLength", getSeedLength);
  setReadWriteAccessor(normalized, "state", getState, setState);
  setReadOnlyAccessor(normalized, "stateLength", getStateLength);
  setReadOnlyAccessor(normalized, "byteLength", getStateSize);
  setReadOnly$1(normalized, "toJSON", toJSON2);
  setReadOnly$1(normalized, "MIN", 0);
  setReadOnly$1(normalized, "MAX", MAX_NORMALIZED);
  return mt199372;
  function getSeed() {
    var len = STATE[SEED_SECTION_OFFSET];
    return gcopy(len, seed, 1, new Uint32Array$1(len), 1);
  }
  function getSeedLength() {
    return STATE[SEED_SECTION_OFFSET];
  }
  function getStateLength() {
    return STATE.length;
  }
  function getStateSize() {
    return STATE.byteLength;
  }
  function getState() {
    var len = STATE.length;
    return gcopy(len, STATE, 1, new Uint32Array$1(len), 1);
  }
  function setState(s) {
    var err2;
    if (!isUint32Array(s)) {
      throw new TypeError(format("invalid argument. Must provide a Uint32Array. Value: `%s`.", s));
    }
    err2 = verifyState(s, false);
    if (err2) {
      throw err2;
    }
    if (opts.copy === false) {
      if (opts.state && s.length === STATE.length) {
        gcopy(s.length, s, 1, STATE, 1);
      } else {
        STATE = s;
        opts.state = true;
      }
    } else {
      if (s.length !== STATE.length) {
        STATE = new Uint32Array$1(s.length);
      }
      gcopy(s.length, s, 1, STATE, 1);
    }
    state = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (STATE_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, N);
    seed = new Uint32Array$1(STATE.buffer, STATE.byteOffset + (SEED_SECTION_OFFSET + 1) * STATE.BYTES_PER_ELEMENT, STATE[SEED_SECTION_OFFSET]);
  }
  function toJSON2() {
    var out = {};
    out.type = "PRNG";
    out.name = mt199372.NAME;
    out.state = typedarray2json(STATE);
    out.params = [];
    return out;
  }
  function mt199372() {
    var r;
    var i;
    i = STATE[OTHER_SECTION_OFFSET + 1];
    if (i >= N) {
      state = twist(state);
      i = 0;
    }
    r = state[i];
    STATE[OTHER_SECTION_OFFSET + 1] = i + 1;
    r ^= r >>> 11;
    r ^= r << 7 & TEMPERING_COEFFICIENT_1;
    r ^= r << 15 & TEMPERING_COEFFICIENT_2;
    r ^= r >>> 18;
    return r >>> 0;
  }
  function normalized() {
    var x = mt199372() >>> 5;
    var y = mt199372() >>> 6;
    return (x * TWO_26 + y) * FLOAT64_NORMALIZATION_CONSTANT;
  }
}
var factory_1 = factory$2;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var factory$1 = factory_1;
var randuint32 = rand_uint32;
var mt19937 = factory$1({
  "seed": randuint32()
});
var main$1 = mt19937;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var setReadOnly = lib$1J;
var main = main$1;
var factory = factory_1;
setReadOnly(main, "factory", factory);
var lib = main;
var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj2, key, value) => key in obj2 ? __defProp$3(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField$2 = (obj2, key, value) => __defNormalProp$3(obj2, key + "", value);
class StatTracker {
  constructor() {
    __publicField$2(this, "data", {});
  }
  /**
   * Clear all sample groups
   */
  reset() {
    this.data = {};
  }
  /**
   * Add a value to a sample group
   *
   * @param sampleGroup
   * @param value
   */
  add(sampleGroup, value) {
    if (!this.data[sampleGroup]) {
      this.data[sampleGroup] = [];
    }
    this.data[sampleGroup].push(value);
  }
  /**
   * Get the percentile value for a sample group
   *
   * @param sampleGroup
   * @param percentile
   * @returns
   */
  getPercentile(sampleGroup, percentile) {
    const values = this.data[sampleGroup];
    if (!values) {
      return 0;
    }
    values.sort((a, b) => a - b);
    const index = Math.floor(percentile / 100 * values.length);
    return values[index];
  }
  /**
   * Get the standard deviation for a sample group
   *
   * @param sampleGroup
   * @returns
   */
  getStdDev(sampleGroup) {
    const values = this.data[sampleGroup];
    if (!values) {
      return 0;
    }
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.map((value) => Math.pow(value - mean, 2)).reduce((a, b) => a + b) / values.length;
    return Math.sqrt(variance);
  }
  /**
   * Get the average value for a sample group
   *
   * @param sampleGroup
   * @returns
   */
  getAverage(sampleGroup) {
    const values = this.data[sampleGroup];
    if (!values) {
      return 0;
    }
    return values.reduce((a, b) => a + b, 0) / values.length;
  }
  /**
   * Get the sample count for a sample group
   *
   * @param sampleGroup
   * @returns
   */
  getCount(sampleGroup) {
    const values = this.data[sampleGroup];
    if (!values) {
      return 0;
    }
    return values.length;
  }
  /**
   * Get the names of all the sample groups
   *
   * @returns
   */
  getSampleGroups() {
    return Object.keys(this.data);
  }
}
function installFonts(stage) {
  stage.fontManager.addFontFace(
    new WebTrFontFace({
      fontFamily: "NotoSans",
      descriptors: {},
      fontUrl: "./fonts/NotoSans-Regular.ttf",
      metrics: {
        ascender: 1069,
        descender: -293,
        lineGap: 0,
        unitsPerEm: 1e3
      }
    })
  );
  stage.fontManager.addFontFace(
    new WebTrFontFace({
      fontFamily: "Ubuntu",
      descriptors: {},
      fontUrl: "./fonts/Ubuntu-Regular.ttf",
      metrics: {
        ascender: 776,
        descender: -185,
        lineGap: 56,
        unitsPerEm: 1e3
      }
    })
  );
  stage.fontManager.addFontFace(
    new WebTrFontFace({
      fontFamily: "Ubuntu-No-Metrics",
      descriptors: {},
      fontUrl: "./fonts/Ubuntu-Regular.ttf"
    })
  );
  const ubuntuModifiedMetrics = {
    ascender: 850,
    descender: -250,
    lineGap: 60,
    unitsPerEm: 1e3
  };
  stage.fontManager.addFontFace(
    new WebTrFontFace({
      fontFamily: "Ubuntu-Modified-Metrics",
      descriptors: {},
      fontUrl: "./fonts/Ubuntu-Regular.ttf",
      metrics: ubuntuModifiedMetrics
    })
  );
  if (stage.renderer.mode === "webgl") {
    stage.fontManager.addFontFace(
      new SdfTrFontFace("ssdf", {
        fontFamily: "NotoSans",
        descriptors: {},
        atlasUrl: "./fonts/NotoSans-Regular.ssdf.png",
        atlasDataUrl: "./fonts/NotoSans-Regular.ssdf.json",
        stage,
        metrics: {
          ascender: 1e3,
          descender: -200,
          lineGap: 0,
          unitsPerEm: 1e3
        }
      })
    );
    stage.fontManager.addFontFace(
      new SdfTrFontFace("msdf", {
        fontFamily: "Ubuntu",
        descriptors: {},
        atlasUrl: "./fonts/Ubuntu-Regular.msdf.png",
        atlasDataUrl: "./fonts/Ubuntu-Regular.msdf.json",
        stage
        // Instead of suppling `metrics` this font will rely on the ones
        // encoded in the json file under `lightningMetrics`.
      })
    );
    stage.fontManager.addFontFace(
      new SdfTrFontFace("msdf", {
        fontFamily: "Ubuntu-Modified-Metrics",
        descriptors: {},
        atlasUrl: "./fonts/Ubuntu-Regular.msdf.png",
        atlasDataUrl: "./fonts/Ubuntu-Regular.msdf.json",
        stage,
        metrics: ubuntuModifiedMetrics
      })
    );
    stage.fontManager.addFontFace(
      new SdfTrFontFace("ssdf", {
        fontFamily: "Ubuntu-ssdf",
        descriptors: {},
        atlasUrl: "./fonts/Ubuntu-Regular.ssdf.png",
        atlasDataUrl: "./fonts/Ubuntu-Regular.ssdf.json",
        stage,
        metrics: {
          ascender: 776,
          descender: -185,
          lineGap: 56,
          unitsPerEm: 1e3
        }
      })
    );
  }
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj2, key, value) => key in obj2 ? __defProp$2(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __publicField$1 = (obj2, key, value) => __defNormalProp$2(obj2, key + "", value);
class Component {
  constructor(renderer, nodeProps) {
    this.renderer = renderer;
    __publicField$1(this, "node");
    this.node = renderer.createNode(__spreadValues$1({}, nodeProps));
  }
  get x() {
    return this.node.x;
  }
  set x(x) {
    this.node.x = x;
  }
  get y() {
    return this.node.y;
  }
  set y(y) {
    this.node.y = y;
  }
  get width() {
    return this.node.width;
  }
  set width(width) {
    this.node.width = width;
  }
  get height() {
    return this.node.height;
  }
  set height(height) {
    this.node.height = height;
  }
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj2, key, value) => key in obj2 ? __defProp$1(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __publicField2 = (obj2, key, value) => __defNormalProp$1(obj2, typeof key !== "symbol" ? key + "" : key, value);
const MARGIN = 20;
const BAR_WIDTH = 20;
const BAR_HEIGHT = 300;
const INFO_TEXT_SIZE = 20;
const INFO_TEXT_LINEHEIGHT = INFO_TEXT_SIZE * 1.2;
function bytesToMb(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}
class MemMonitor extends Component {
  constructor(renderer, props) {
    super(renderer, props);
    __publicField2(this, "bar");
    __publicField2(this, "renderableMemBar");
    __publicField2(this, "memUsedBar");
    __publicField2(this, "criticalText");
    __publicField2(this, "criticalTick");
    __publicField2(this, "targetText");
    __publicField2(this, "targetTick");
    __publicField2(this, "criticalInfoText");
    __publicField2(this, "targetInfoText");
    __publicField2(this, "memUsedText");
    __publicField2(this, "renderableMemUsedText");
    __publicField2(this, "cacheInfoText");
    __publicField2(this, "intervalHandle", null);
    __publicField2(this, "_interval", 0);
    this.interval = props.interval || 500;
    this.node.color = 4294967210;
    this.node.width = 400;
    this.node.height = BAR_HEIGHT + MARGIN * 2;
    this.bar = renderer.createNode({
      x: this.node.width - BAR_WIDTH - MARGIN,
      y: MARGIN,
      width: BAR_WIDTH,
      height: BAR_HEIGHT,
      parent: this.node,
      color: 0
    });
    this.memUsedBar = renderer.createNode({
      x: 0,
      y: 0,
      width: BAR_WIDTH,
      height: 0,
      parent: this.bar,
      color: 65535
    });
    this.renderableMemBar = renderer.createNode({
      x: 0,
      y: 0,
      width: BAR_WIDTH,
      height: 0,
      parent: this.bar,
      color: 4278255615
    });
    renderer.createNode({
      width: BAR_WIDTH,
      height: BAR_HEIGHT,
      rtt: true,
      shader: renderer.createShader("DynamicShader", {
        effects: [
          {
            name: "e1",
            type: "border",
            props: {
              color: 204,
              width: 4
            }
          }
        ]
      }),
      parent: this.bar
    });
    this.criticalText = renderer.createTextNode({
      x: -15,
      y: 0,
      text: "Critical",
      fontFamily: "Ubuntu",
      parent: this.bar,
      fontSize: 20,
      color: 4278190335,
      mountX: 1,
      mountY: 0.5
    });
    this.criticalTick = renderer.createNode({
      x: BAR_WIDTH / 2,
      y: 0,
      width: BAR_WIDTH * 2,
      height: 2,
      parent: this.bar,
      color: 4278190335,
      mount: 0.5
    });
    this.targetText = renderer.createTextNode({
      x: -15,
      y: 0,
      text: "Target",
      fontFamily: "Ubuntu",
      parent: this.bar,
      fontSize: 20,
      color: 255,
      mountX: 1,
      mountY: 0.5
    });
    this.targetTick = renderer.createNode({
      x: BAR_WIDTH / 2,
      y: 0,
      width: BAR_WIDTH * 2,
      height: 2,
      parent: this.bar,
      color: 255,
      mount: 0.5
    });
    const numLines = 9;
    const infoTextY = this.node.height - MARGIN - INFO_TEXT_LINEHEIGHT * numLines;
    this.criticalInfoText = renderer.createTextNode({
      x: MARGIN,
      y: infoTextY,
      text: "",
      fontFamily: "Ubuntu",
      parent: this.node,
      fontSize: INFO_TEXT_SIZE,
      lineHeight: INFO_TEXT_LINEHEIGHT,
      color: 4278190335
    });
    this.targetInfoText = renderer.createTextNode({
      x: MARGIN,
      y: infoTextY + INFO_TEXT_LINEHEIGHT,
      text: "",
      fontFamily: "Ubuntu",
      parent: this.node,
      fontSize: INFO_TEXT_SIZE,
      lineHeight: INFO_TEXT_LINEHEIGHT,
      color: 255
    });
    this.memUsedText = renderer.createTextNode({
      x: MARGIN,
      y: infoTextY + INFO_TEXT_LINEHEIGHT * 2,
      text: "",
      fontFamily: "Ubuntu",
      parent: this.node,
      fontSize: INFO_TEXT_SIZE,
      lineHeight: INFO_TEXT_LINEHEIGHT,
      color: 65535
    });
    this.renderableMemUsedText = renderer.createTextNode({
      x: MARGIN,
      y: infoTextY + INFO_TEXT_LINEHEIGHT * 5,
      text: "",
      fontFamily: "Ubuntu",
      parent: this.node,
      fontSize: INFO_TEXT_SIZE,
      lineHeight: INFO_TEXT_LINEHEIGHT,
      color: 4278255615
    });
    this.cacheInfoText = renderer.createTextNode({
      x: MARGIN,
      y: infoTextY + INFO_TEXT_LINEHEIGHT * 8,
      text: "",
      fontFamily: "Ubuntu",
      parent: this.node,
      fontSize: INFO_TEXT_SIZE,
      lineHeight: INFO_TEXT_LINEHEIGHT,
      color: 255
    });
    const payload = this.renderer.stage.txMemManager.getMemoryInfo();
    const { criticalThreshold, targetThreshold } = payload;
    const targetFraction = targetThreshold / criticalThreshold;
    this.targetTick.y = BAR_HEIGHT - BAR_HEIGHT * targetFraction;
    this.targetText.y = this.targetTick.y;
    this.targetInfoText.text = "Target: ".concat(bytesToMb(targetThreshold), " mb (").concat((targetFraction * 100).toFixed(1), "%)");
    this.criticalInfoText.text = "Critical: ".concat(bytesToMb(criticalThreshold), " mb");
    this.update();
  }
  update() {
    const payload = this.renderer.stage.txMemManager.getMemoryInfo();
    const { criticalThreshold, memUsed, renderableMemUsed } = payload;
    const renderableMemoryFraction = renderableMemUsed / criticalThreshold;
    const memUsedFraction = memUsed / criticalThreshold;
    this.memUsedBar.height = BAR_HEIGHT * memUsedFraction;
    this.renderableMemBar.height = BAR_HEIGHT * renderableMemoryFraction;
    this.renderableMemBar.y = BAR_HEIGHT - this.renderableMemBar.height;
    this.memUsedBar.y = BAR_HEIGHT - this.memUsedBar.height;
    this.memUsedText.text = "\nTextures Loaded\n- Size: ".concat(bytesToMb(memUsed), " mb (").concat((memUsedFraction * 100).toFixed(1), "%)\n- Count: ").concat(payload.loadedTextures, "\n").trim();
    this.renderableMemUsedText.text = "\nRenderable Loaded\n- ".concat(bytesToMb(renderableMemUsed), " mb (").concat((renderableMemoryFraction * 100).toFixed(1), "%)\n- Count: ").concat(payload.renderableTexturesLoaded, "\n").trim();
    this.cacheInfoText.text = "Cache Size: ".concat(this.renderer.stage.txManager.keyCache.size);
  }
  get interval() {
    return this._interval;
  }
  set interval(interval) {
    this._interval = interval;
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle);
    }
    this.intervalHandle = setInterval(() => {
      this.update();
    }, this._interval);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj2, key, value) => key in obj2 ? __defProp2(obj2, key, { enumerable: true, configurable: true, writable: true, value }) : obj2[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
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
const getTestPath = (testName) => "./tests/".concat(testName, ".ts");
const testRegex = /\/tests\/(.*)\.ts$/;
const getTestName = (path) => {
  const match = path.match(testRegex);
  if (!match) {
    throw new Error("Invalid test path: ".concat(path));
  }
  return match[1];
};
const testModules = /* @__PURE__ */ Object.assign({ "./tests/absolute-position.ts": () => __vitePreload(() => import("./absolute-position-BblyzWic.js"), true ? [] : void 0), "./tests/alpha-blending.ts": () => __vitePreload(() => import("./alpha-blending-QLMMWKh2.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0), "./tests/alpha.ts": () => __vitePreload(() => import("./alpha-DaefnnTY.js"), true ? [] : void 0), "./tests/animation-events.ts": () => __vitePreload(() => import("./animation-events-US5bf_m6.js"), true ? __vite__mapDeps([4,1]) : void 0), "./tests/animation.ts": () => __vitePreload(() => import("./animation-BROCmLCA.js"), true ? [] : void 0), "./tests/child-positioning.ts": () => __vitePreload(() => import("./child-positioning-Dszd-CF-.js"), true ? [] : void 0), "./tests/clipping-mutations.ts": () => __vitePreload(() => import("./clipping-mutations-FBqkEt-I.js"), true ? __vite__mapDeps([5,1]) : void 0), "./tests/clipping.ts": () => __vitePreload(() => import("./clipping-DQ8l7S7_.js"), true ? __vite__mapDeps([6,7,8,3,9,1]) : void 0), "./tests/destroy.ts": () => __vitePreload(() => import("./destroy-DGGwR_Vm.js"), true ? __vite__mapDeps([10,11]) : void 0), "./tests/ds-effect-radial-progress.ts": () => __vitePreload(() => import("./ds-effect-radial-progress-CsCZ2A68.js"), true ? [] : void 0), "./tests/dynamic-shader-circle-border-radius.ts": () => __vitePreload(() => import("./dynamic-shader-circle-border-radius-BwYwakCw.js"), true ? [] : void 0), "./tests/dynamic-shader.ts": () => __vitePreload(() => import("./dynamic-shader-DVY0rtDf.js"), true ? [] : void 0), "./tests/gradient.ts": () => __vitePreload(() => import("./gradient-M7tIa63t.js"), true ? [] : void 0), "./tests/hole-punch-effect.ts": () => __vitePreload(() => import("./hole-punch-effect-C9Yo7YIV.js"), true ? __vite__mapDeps([12,13]) : void 0), "./tests/inspector.ts": () => __vitePreload(() => import("./inspector-BIzbgRXG.js"), true ? __vite__mapDeps([14,11]) : void 0), "./tests/mount-pivot.ts": () => __vitePreload(() => import("./mount-pivot-By4b-lO5.js"), true ? [] : void 0), "./tests/no-rtt.ts": () => __vitePreload(() => import("./no-rtt-Df9XOFdt.js"), true ? [] : void 0), "./tests/render-bounds.ts": () => __vitePreload(() => import("./render-bounds-C_WL2tvg.js"), true ? [] : void 0), "./tests/resize-mode.ts": () => __vitePreload(() => import("./resize-mode-Bw74lIkW.js"), true ? __vite__mapDeps([15,7,8,3]) : void 0), "./tests/robot.ts": () => __vitePreload(() => import("./robot-B4xFP6hS.js"), true ? __vite__mapDeps([16,1]) : void 0), "./tests/rotation.ts": () => __vitePreload(() => import("./rotation-Blrtebe5.js"), true ? [] : void 0), "./tests/rtt-dimension.ts": () => __vitePreload(() => import("./rtt-dimension-4_7Ojvt5.js"), true ? __vite__mapDeps([17,2]) : void 0), "./tests/rtt-reflection.ts": () => __vitePreload(() => import("./rtt-reflection-foTb9CCF.js"), true ? [] : void 0), "./tests/rtt.ts": () => __vitePreload(() => import("./rtt-B2QdAFgM.js"), true ? [] : void 0), "./tests/scaling-animations.ts": () => __vitePreload(() => import("./scaling-animations-BpyvEkXc.js"), true ? [] : void 0), "./tests/scaling.ts": () => __vitePreload(() => import("./scaling-DYXjPRA_.js"), true ? __vite__mapDeps([18,7,8,3,19,9,1]) : void 0), "./tests/shader-animation.ts": () => __vitePreload(() => import("./shader-animation-D90H8k8s.js"), true ? [] : void 0), "./tests/stress-multi-level-clipping.ts": () => __vitePreload(() => import("./stress-multi-level-clipping-DW3b_6gW.js"), true ? __vite__mapDeps([20,1]) : void 0), "./tests/stress-multi-level.ts": () => __vitePreload(() => import("./stress-multi-level-DFYKLkzu.js"), true ? __vite__mapDeps([21,11]) : void 0), "./tests/stress-multi-texture.ts": () => __vitePreload(() => import("./stress-multi-texture-TDyDMWB2.js"), true ? __vite__mapDeps([22,11,1]) : void 0), "./tests/stress-single-level-text.ts": () => __vitePreload(() => import("./stress-single-level-text-DNpeITYp.js"), true ? [] : void 0), "./tests/stress-single-level.ts": () => __vitePreload(() => import("./stress-single-level-A8XnphH7.js"), true ? __vite__mapDeps([23,11]) : void 0), "./tests/test.ts": () => __vitePreload(() => import("./test-C2C13V_k.js"), true ? __vite__mapDeps([24,2,13,25]) : void 0), "./tests/text-align.ts": () => __vitePreload(() => import("./text-align-e4TunNw4.js"), true ? __vite__mapDeps([26,27]) : void 0), "./tests/text-alpha.ts": () => __vitePreload(() => import("./text-alpha-Kbm2n7Y6.js"), true ? __vite__mapDeps([28,7,8,3,19,9]) : void 0), "./tests/text-baseline.ts": () => __vitePreload(() => import("./text-baseline-BowA-CFT.js"), true ? __vite__mapDeps([29,7,8,3,9,19]) : void 0), "./tests/text-canvas-font-no-metrics.ts": () => __vitePreload(() => import("./text-canvas-font-no-metrics-Bv8LqB8S.js"), true ? [] : void 0), "./tests/text-canvas.ts": () => __vitePreload(() => import("./text-canvas-BsAoe2jv.js"), true ? [] : void 0), "./tests/text-contain.ts": () => __vitePreload(() => import("./text-contain-DzAhV_rf.js"), true ? __vite__mapDeps([30,9]) : void 0), "./tests/text-dimensions.ts": () => __vitePreload(() => import("./text-dimensions-IlaH963y.js"), true ? __vite__mapDeps([31,9]) : void 0), "./tests/text-events.ts": () => __vitePreload(() => import("./text-events-VkrFEQ8r.js"), true ? [] : void 0), "./tests/text-layout-consistency-modified-metrics.ts": () => __vitePreload(() => import("./text-layout-consistency-modified-metrics-CPW60Ict.js"), true ? __vite__mapDeps([32,27]) : void 0), "./tests/text-layout-consistency.ts": () => __vitePreload(() => import("./text-layout-consistency-nX7u-DSR.js"), true ? __vite__mapDeps([33,27]) : void 0), "./tests/text-line-height.ts": () => __vitePreload(() => import("./text-line-height-CbCzCPjS.js"), true ? __vite__mapDeps([34,7,8,3,19,9]) : void 0), "./tests/text-max-lines.ts": () => __vitePreload(() => import("./text-max-lines-DYmM70cg.js"), true ? __vite__mapDeps([35,7,8,3,19,9,27]) : void 0), "./tests/text-offscreen-move.ts": () => __vitePreload(() => import("./text-offscreen-move-BifZhSmC.js"), true ? __vite__mapDeps([36,8,3]) : void 0), "./tests/text-overflow-suffix.ts": () => __vitePreload(() => import("./text-overflow-suffix-DdzK9EiG.js"), true ? __vite__mapDeps([37,7,8,3,19,9,27]) : void 0), "./tests/text-rotation.ts": () => __vitePreload(() => import("./text-rotation-5F9qOjt8.js"), true ? __vite__mapDeps([38,7,8,3,9,19]) : void 0), "./tests/text-scaling.ts": () => __vitePreload(() => import("./text-scaling-iPWG23hv.js"), true ? __vite__mapDeps([39,7,8,3,9,19]) : void 0), "./tests/text-ssdf.ts": () => __vitePreload(() => import("./text-ssdf-CbKbYZUw.js"), true ? [] : void 0), "./tests/text-vertical-align.ts": () => __vitePreload(() => import("./text-vertical-align-DT2Gdhyq.js"), true ? __vite__mapDeps([40,7,8,3,19,9]) : void 0), "./tests/text.ts": () => __vitePreload(() => import("./text-DqzDygsI.js"), true ? __vite__mapDeps([41,27,3]) : void 0), "./tests/texture-autosize.ts": () => __vitePreload(() => import("./texture-autosize-jHpXh2OK.js"), true ? __vite__mapDeps([42,1,9]) : void 0), "./tests/texture-cleanup-critical.ts": () => __vitePreload(() => import("./texture-cleanup-critical-BYqctD66.js"), true ? [] : void 0), "./tests/texture-cleanup-idle.ts": () => __vitePreload(() => import("./texture-cleanup-idle-DiE38Kqf.js"), true ? [] : void 0), "./tests/texture-factory.ts": () => __vitePreload(() => import("./texture-factory-Bljmufgw.js"), true ? [] : void 0), "./tests/texture-source.ts": () => __vitePreload(() => import("./texture-source-C09WArAw.js"), true ? __vite__mapDeps([43,2,11,13]) : void 0), "./tests/texture-svg.ts": () => __vitePreload(() => import("./texture-svg-Dbyv6Byp.js"), true ? [] : void 0), "./tests/textures.ts": () => __vitePreload(() => import("./textures-BXzhtZxm.js"), true ? __vite__mapDeps([44,2,13,25]) : void 0), "./tests/tx-compression.ts": () => __vitePreload(() => import("./tx-compression-BTCv9u9R.js"), true ? [] : void 0), "./tests/viewport-events-canvas.ts": () => __vitePreload(() => import("./viewport-events-canvas-Bvp3ucUS.js"), true ? [] : void 0), "./tests/viewport-events.ts": () => __vitePreload(() => import("./viewport-events-BPxx9PbQ.js"), true ? [] : void 0), "./tests/zIndex.ts": () => __vitePreload(() => import("./zIndex-Dl9DA-35.js"), true ? [] : void 0) });
const appWidth = 1920;
const appHeight = 1080;
const defaultResolution = 720;
const defaultPhysicalPixelRatio = 1;
(() => __async(void 0, null, function* () {
  var _a2;
  const urlParams = new URLSearchParams(window.location.search);
  const automation = urlParams.get("automation") === "true";
  const test2 = urlParams.get("test") || (automation ? "*" : "test");
  const showOverlay = urlParams.get("overlay") !== "false";
  const showMemMonitor = urlParams.get("monitor") === "true";
  const logFps = urlParams.get("fps") === "true";
  const enableContextSpy = urlParams.get("contextSpy") === "true";
  const perfMultiplier = Number(urlParams.get("multiplier")) || 1;
  const resolution = Number(urlParams.get("resolution")) || 720;
  const enableInspector = urlParams.get("inspector") === "true";
  const numImageWorkers = (_a2 = urlParams.get("numImageWorkers")) != null ? _a2 : 2;
  const physicalPixelRatio = Number(urlParams.get("ppr")) || defaultPhysicalPixelRatio;
  const logicalPixelRatio = resolution / appHeight;
  let renderMode = urlParams.get("renderMode");
  if (renderMode !== "webgl" && renderMode !== "canvas") {
    renderMode = "webgl";
  }
  if (!automation) {
    yield runTest(
      test2,
      renderMode,
      urlParams,
      showOverlay,
      showMemMonitor,
      logicalPixelRatio,
      physicalPixelRatio,
      logFps,
      enableContextSpy,
      perfMultiplier,
      enableInspector,
      numImageWorkers
    );
    return;
  }
  assertTruthy(automation);
  yield runAutomation(renderMode, test2, logFps);
}))().catch((err) => {
  console.error(err);
});
function runTest(test2, renderMode, urlParams, showOverlay, showMemMonitor, logicalPixelRatio, physicalPixelRatio, logFps, enableContextSpy, perfMultiplier, enableInspector, numImageWorkers) {
  return __async(this, null, function* () {
    const testModule = testModules[getTestPath(test2)];
    if (!testModule) {
      throw new Error('Test "'.concat(test2, '" not found'));
    }
    const module = yield testModule();
    const customSettings = typeof module.customSettings === "function" ? module.customSettings(urlParams) : {};
    const { renderer, appElement } = yield initRenderer(
      renderMode,
      logFps,
      enableContextSpy,
      logicalPixelRatio,
      physicalPixelRatio,
      enableInspector,
      numImageWorkers,
      customSettings
    );
    let testRoot = renderer.root;
    if (showOverlay) {
      const overlayText = renderer.createTextNode({
        color: 4278190335,
        text: "Test: ".concat(test2),
        zIndex: 99999,
        parent: renderer.root,
        fontSize: 50
      });
      overlayText.once(
        "loaded",
        (target, { dimensions }) => {
          overlayText.x = renderer.settings.appWidth - dimensions.width - 20;
          overlayText.y = renderer.settings.appHeight - dimensions.height - 20;
        }
      );
    }
    let memMonitor = null;
    if (showMemMonitor) {
      memMonitor = new MemMonitor(renderer, {
        mount: 1,
        x: renderer.settings.appWidth - 20,
        y: renderer.settings.appHeight - 100,
        parent: renderer.root,
        zIndex: 99999
      });
    }
    if (showOverlay || showMemMonitor) {
      testRoot = renderer.createNode({
        parent: renderer.root,
        x: renderer.root.x,
        y: renderer.root.y,
        width: renderer.settings.appWidth,
        height: renderer.settings.appHeight - 100,
        color: 0
      });
    }
    const exampleSettings = {
      testName: test2,
      renderer,
      appElement,
      testRoot,
      automation: false,
      perfMultiplier,
      snapshot: () => __async(this, null, function* () {
      }),
      memMonitor
    };
    yield module.default(exampleSettings);
  });
}
function initRenderer(renderMode, logFps, enableContextSpy, logicalPixelRatio, physicalPixelRatio, enableInspector, numImageWorkers, customSettings) {
  return __async(this, null, function* () {
    let inspector;
    if (enableInspector) inspector = Inspector;
    const renderer = new RendererMain(
      __spreadValues({
        appWidth,
        appHeight,
        boundsMargin: [100, 100, 100, 100],
        deviceLogicalPixelRatio: logicalPixelRatio,
        devicePhysicalPixelRatio: physicalPixelRatio,
        clearColor: 0,
        fpsUpdateInterval: logFps ? 1e3 : 0,
        enableContextSpy,
        numImageWorkers,
        inspector,
        renderEngine: renderMode === "webgl" ? WebGlCoreRenderer : CanvasCoreRenderer,
        fontEngines: [SdfTextRenderer, CanvasTextRenderer]
      }, customSettings),
      "app"
    );
    installFonts(renderer.stage);
    const samples = new StatTracker();
    const fpsSampleCount = 100;
    const fpsSampleSkipCount = 10;
    let fpsSampleIndex = 0;
    let fpsSamplesLeft = fpsSampleCount;
    renderer.on(
      "fpsUpdate",
      (target, fpsData) => {
        const captureSample = fpsSampleIndex >= fpsSampleSkipCount;
        if (captureSample) {
          samples.add("fps", fpsData.fps);
          if (fpsData.contextSpyData) {
            let totalCalls = 0;
            for (const key in fpsData.contextSpyData) {
              const numCalls = fpsData.contextSpyData[key];
              totalCalls += numCalls;
              samples.add(key, numCalls);
            }
            samples.add("totalCalls", totalCalls);
          }
          fpsSamplesLeft--;
          if (fpsSamplesLeft === 0) {
            const averageFps = samples.getAverage("fps");
            const p01Fps = samples.getPercentile("fps", 1);
            const p05Fps = samples.getPercentile("fps", 5);
            const p25Fps = samples.getPercentile("fps", 25);
            const medianFps = samples.getPercentile("fps", 50);
            const stdDevFps = samples.getStdDev("fps");
            console.log("---------------------------------");
            console.log("Average FPS: ".concat(averageFps));
            console.log("Median FPS: ".concat(medianFps));
            console.log("P01 FPS: ".concat(p01Fps));
            console.log("P05 FPS: ".concat(p05Fps));
            console.log("P25 FPS: ".concat(p25Fps));
            console.log("Std Dev FPS: ".concat(stdDevFps));
            console.log("Num samples: ".concat(samples.getCount("fps")));
            console.log("---------------------------------");
            if (fpsData.contextSpyData) {
              const contextKeys = samples.getSampleGroups().filter((key) => key !== "fps" && key !== "totalCalls");
              for (const key of contextKeys) {
                const median = samples.getPercentile(key, 50);
                console.log(
                  "median(".concat(key, ") / median(fps): ").concat(Math.round(
                    median / medianFps
                  ))
                );
              }
              const medianTotalCalls = samples.getPercentile("totalCalls", 50);
              console.log(
                "median(totalCalls) / median(fps): ".concat(Math.round(
                  medianTotalCalls / medianFps
                ))
              );
              console.log("---------------------------------");
            }
            samples.reset();
            fpsSamplesLeft = fpsSampleCount;
          }
        }
        console.log("FPS: ".concat(fpsData.fps, " (samples left: ").concat(fpsSamplesLeft, ")"));
        fpsSampleIndex++;
      }
    );
    const appElement = document.querySelector("#app");
    assertTruthy(appElement instanceof HTMLDivElement);
    return { renderer, appElement };
  });
}
function wildcardMatch(string, wildcardString) {
  const escapeRegex = (s) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  return new RegExp(
    "^".concat(wildcardString.split("*").map(escapeRegex).join(".*"), "$")
  ).test(string);
}
function runAutomation(renderMode, filter3, logFps) {
  return __async(this, null, function* () {
    const logicalPixelRatio = defaultResolution / appHeight;
    const { renderer, appElement } = yield initRenderer(
      renderMode,
      logFps,
      false,
      logicalPixelRatio,
      defaultPhysicalPixelRatio,
      false
      // enableInspector
    );
    for (const testPath in testModules) {
      const testModule = testModules[testPath];
      const testName = getTestName(testPath);
      if (filter3 && !wildcardMatch(testName, filter3)) {
        continue;
      }
      assertTruthy(testModule);
      const { automation, customSettings } = yield testModule();
      console.log("Attempting to run automation for ".concat(testName, "..."));
      if (automation) {
        console.log("Running automation for ".concat(testName, "..."));
        const rand = lib.factory({ seed: 1234 });
        Math.random = function() {
          return rand() / rand.MAX;
        };
        if (customSettings) {
          console.error("customSettings not supported for automation");
        } else {
          assertTruthy(renderer.root);
          const testRoot = renderer.createNode({
            parent: renderer.root,
            x: renderer.root.x,
            y: renderer.root.y,
            width: renderer.root.width,
            height: renderer.root.height,
            color: 0
          });
          const exampleSettings = {
            testName,
            renderer,
            testRoot,
            appElement,
            automation: true,
            perfMultiplier: 1,
            snapshot: (options) => __async(this, null, function* () {
              const snapshot = window.snapshot;
              const clipRect = (options == null ? void 0 : options.clip) || {
                x: testRoot.x,
                y: testRoot.y,
                width: testRoot.width,
                height: testRoot.height
              };
              const adjustedOptions = __spreadProps(__spreadValues({}, options), {
                clip: {
                  x: Math.round(clipRect.x * logicalPixelRatio),
                  y: Math.round(clipRect.y * logicalPixelRatio),
                  width: Math.round(clipRect.width * logicalPixelRatio),
                  height: Math.round(clipRect.height * logicalPixelRatio)
                }
              });
              yield delay(200);
              if (snapshot) {
                console.log("Calling snapshot(".concat(testName, ")"));
                yield snapshot(testName, adjustedOptions);
              } else {
                console.error(
                  "snapshot() not defined (not running in playwright?)"
                );
              }
            }),
            memMonitor: null
          };
          yield automation(exampleSettings);
          testRoot.parent = null;
          testRoot.destroy();
        }
      }
    }
    const doneTests = window.doneTests;
    if (doneTests) {
      console.error("Calling doneTests()");
      yield doneTests();
    } else {
      console.error("doneTests() not defined (not running in playwright?)");
    }
  });
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  Component as C,
  EventEmitter as E,
  __vite_legacy_guard,
  assertTruthy as a,
  deg2Rad as d,
  mergeColorAlpha as m
};
//# sourceMappingURL=index-CRSMeQPo.js.map
