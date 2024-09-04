;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  System.register(['./robot-legacy-qlNob2Ki.js', './rocko-legacy-DFBMEg6f.js', './LocalStorage-legacy-DdztG2dl.js', './index-legacy-B71_XFT2.js'], function (exports, module) {
    'use strict';

    var robotImg, rockoImg, loadStorage, saveStorage, mergeColorAlpha;
    return {
      setters: [function (module) {
        robotImg = module.r;
      }, function (module) {
        rockoImg = module.r;
      }, function (module) {
        loadStorage = module.l;
        saveStorage = module.s;
      }, function (module) {
        mergeColorAlpha = module.m;
      }],
      execute: function execute() {
        exports({
          automation: automation,
          default: test
        });
        var red25 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWP4z8DgAAAEQQFArKo0hgAAAABJRU5ErkJggg==";
        var red50 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWP4z8DQAAAEgQGADgLFJAAAAABJRU5ErkJggg==";
        var red100 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg==";
        var green25 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWNg+M/gAAADQgFAcjfFzAAAAABJRU5ErkJggg==";
        var green50 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWNg+M/QAAADggGA0J80bgAAAABJRU5ErkJggg==";
        var green100 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADUlEQVQImWNg+M/wHwAEAQH/U7xMcQAAAABJRU5ErkJggg==";
        var __async = function __async(__this, __arguments, generator) {
          return new Promise(function (resolve, reject) {
            var fulfilled = function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            };
            var rejected = function rejected(value) {
              try {
                step(generator.throw(value));
              } catch (e) {
                reject(e);
              }
            };
            var step = function step(x) {
              return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
            };
            step((generator = generator.apply(__this, __arguments)).next());
          });
        };
        function automation(settings) {
          return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var appElement, oldBackground;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  appElement = settings.appElement;
                  oldBackground = appElement.style.background;
                  _context.prev = 2;
                  _context.next = 5;
                  return test(settings);
                case 5:
                  _context.next = 7;
                  return _context.sent.snapshotPages();
                case 7:
                  _context.prev = 7;
                  appElement.style.background = oldBackground;
                  return _context.finish(7);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[2,, 7, 10]]);
          }));
        }
        function test(settings) {
          return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;
            var testName, renderer, appElement, automation2, testRoot, savedState, leftSideBg, rightSideBg, curPage, rightBackground, PADDING, HEADER_FONT_SIZE, RECT_SIZE, pageNumberNode, buildSidePg0, buildSidePg1, curLeftSide, curRightSide, buildPage, NUM_PAGES;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  buildPage = function _buildPage(pageNumber) {
                    if (curLeftSide) {
                      curLeftSide.parent = null;
                      curLeftSide.destroy();
                      curLeftSide = null;
                    }
                    if (curRightSide) {
                      curRightSide.parent = null;
                      curRightSide.destroy();
                      curRightSide = null;
                    }
                    if (pageNumber === 0) {
                      curLeftSide = buildSidePg0(leftSideBg, testRoot);
                      curRightSide = buildSidePg0(rightSideBg, rightBackground);
                    } else if (pageNumber === 1) {
                      curLeftSide = buildSidePg1(leftSideBg, testRoot);
                      curRightSide = buildSidePg1(rightSideBg, rightBackground);
                    }
                    pageNumberNode.text = "Page ".concat(pageNumber + 1, "/").concat(NUM_PAGES);
                    if (!automation2) {
                      saveStorage(testName, {
                        curPage: pageNumber
                      });
                    }
                  };
                  buildSidePg1 = function _buildSidePg2(bgColorName, parent) {
                    var bgColor = bgColorName === "red" ? 4278190335 : 16711935;
                    var curY = PADDING * 2 + HEADER_FONT_SIZE;
                    var curX = PADDING;
                    var sideContainer = renderer.createNode({
                      parent: parent
                    });
                    renderer.createTextNode({
                      text: "The text below should appear invisible",
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      color: 4294967295,
                      y: curY,
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    var CANVAS_TEXT = 'This "canvas" text should appear invisible';
                    renderer.createTextNode({
                      text: CANVAS_TEXT,
                      fontFamily: "NotoSans",
                      fontSize: 30,
                      alpha: 1,
                      color: bgColor,
                      y: curY,
                      textRendererOverride: "canvas",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: CANVAS_TEXT,
                      fontFamily: "NotoSans",
                      fontSize: 30,
                      alpha: 0.5,
                      color: bgColor,
                      y: curY,
                      textRendererOverride: "canvas",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: CANVAS_TEXT,
                      fontFamily: "NotoSans",
                      fontSize: 30,
                      alpha: 1,
                      color: mergeColorAlpha(bgColor, 0.5),
                      y: curY,
                      textRendererOverride: "canvas",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: CANVAS_TEXT,
                      fontFamily: "NotoSans",
                      fontSize: 30,
                      alpha: 0.5,
                      color: mergeColorAlpha(bgColor, 0.5),
                      y: curY,
                      textRendererOverride: "canvas",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    var SDF_TEXT = 'This "SDF" text should appear invisible';
                    renderer.createTextNode({
                      text: SDF_TEXT,
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      alpha: 1,
                      color: bgColor,
                      y: curY,
                      textRendererOverride: "sdf",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: SDF_TEXT,
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      alpha: 0.5,
                      color: bgColor,
                      y: curY,
                      textRendererOverride: "sdf",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: SDF_TEXT,
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      alpha: 1,
                      color: mergeColorAlpha(bgColor, 0.5),
                      y: curY,
                      textRendererOverride: "sdf",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: SDF_TEXT,
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      alpha: 0.5,
                      color: mergeColorAlpha(bgColor, 0.5),
                      y: curY,
                      textRendererOverride: "sdf",
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createTextNode({
                      text: "The textures below should have smooth edges",
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      color: 4294967295,
                      y: curY,
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    var sizeToTexture = function sizeToTexture(target, payload) {
                      var _payload$dimensions = payload.dimensions,
                        width = _payload$dimensions.width,
                        height = _payload$dimensions.height;
                      target.width = width;
                      target.height = height;
                    };
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: robotImg,
                      alpha: 1,
                      parent: sideContainer
                    }).once("loaded", sizeToTexture);
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      src: rockoImg,
                      alpha: 1,
                      parent: sideContainer
                    }).once("loaded", sizeToTexture);
                    curX += RECT_SIZE + PADDING;
                    return sideContainer;
                  };
                  buildSidePg0 = function _buildSidePg(bgColorName, parent) {
                    var bgColor = bgColorName === "red" ? 4278190335 : 16711935;
                    var curY = PADDING * 2 + HEADER_FONT_SIZE;
                    var curX = PADDING;
                    var sideContainer = renderer.createNode({
                      parent: parent
                    });
                    renderer.createTextNode({
                      text: "The rectangles below should appear the same",
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      color: 4294967295,
                      y: curY,
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    curX = PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: 4294967295,
                      alpha: 0.5,
                      parent: sideContainer
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: mergeColorAlpha(4294967295, 0.5),
                      alpha: 1,
                      parent: sideContainer
                    });
                    curX = PADDING;
                    curY += RECT_SIZE + PADDING;
                    renderer.createTextNode({
                      text: "The rectangles below should appear invisible",
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      color: 4294967295,
                      y: curY,
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    curX = PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: bgColor,
                      parent: sideContainer,
                      alpha: 1
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: bgColor,
                      parent: sideContainer,
                      alpha: 0.5
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: mergeColorAlpha(bgColor, 0.5),
                      parent: sideContainer,
                      alpha: 1
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      color: mergeColorAlpha(bgColor, 0.5),
                      parent: sideContainer,
                      alpha: 0.5
                    });
                    curY += RECT_SIZE + PADDING;
                    curX = PADDING;
                    renderer.createTextNode({
                      text: "The texture rects below should appear invisible",
                      fontFamily: "Ubuntu",
                      fontSize: 30,
                      color: 4294967295,
                      y: curY,
                      parent: sideContainer
                    });
                    curY += 30 + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: bgColorName === "red" ? red100 : green100,
                      alpha: 1,
                      parent: sideContainer
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: bgColorName === "red" ? red50 : green50,
                      alpha: 1,
                      parent: sideContainer
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: bgColorName === "red" ? red100 : green100,
                      alpha: 0.5,
                      parent: sideContainer
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: bgColorName === "red" ? red50 : green50,
                      alpha: 0.5,
                      parent: sideContainer
                    });
                    curX += RECT_SIZE + PADDING;
                    renderer.createNode({
                      x: curX,
                      y: curY,
                      width: RECT_SIZE,
                      height: RECT_SIZE,
                      src: bgColorName === "red" ? red25 : green25,
                      alpha: 1,
                      parent: sideContainer
                    });
                    return sideContainer;
                  };
                  testName = settings.testName, renderer = settings.renderer, appElement = settings.appElement, automation2 = settings.automation, testRoot = settings.testRoot;
                  savedState = automation2 ? null : loadStorage(testName);
                  leftSideBg = "red";
                  rightSideBg = "green";
                  curPage = (savedState == null ? void 0 : savedState.curPage) || 0;
                  appElement.style.background = "#ff0000";
                  rightBackground = renderer.createNode({
                    x: renderer.settings.appWidth / 2,
                    y: 0,
                    width: renderer.settings.appWidth / 2,
                    height: renderer.settings.appHeight,
                    color: 16711935,
                    parent: testRoot,
                    zIndex: 0,
                    alpha: 1
                  });
                  PADDING = 20;
                  HEADER_FONT_SIZE = 45;
                  RECT_SIZE = 150;
                  renderer.createTextNode({
                    text: "WebGL -> Browser Alpha",
                    fontFamily: "Ubuntu",
                    fontSize: HEADER_FONT_SIZE,
                    color: 4294967295,
                    contain: "width",
                    width: renderer.settings.appWidth / 2,
                    y: PADDING,
                    textAlign: "center",
                    parent: testRoot
                  });
                  renderer.createTextNode({
                    text: "WebGL -> WebGL Alpha",
                    fontFamily: "Ubuntu",
                    fontSize: HEADER_FONT_SIZE,
                    color: 4294967295,
                    contain: "width",
                    width: renderer.settings.appWidth / 2,
                    x: renderer.settings.appWidth / 2,
                    y: PADDING,
                    textAlign: "center",
                    parent: testRoot
                  });
                  pageNumberNode = renderer.createTextNode({
                    fontFamily: "Ubuntu",
                    fontSize: 30,
                    color: 4294967295,
                    x: PADDING,
                    y: renderer.settings.appHeight - 30 - PADDING,
                    parent: testRoot
                  });
                  curLeftSide = null;
                  curRightSide = null;
                  NUM_PAGES = 2;
                  buildPage(curPage);
                  if (!automation2) {
                    window.addEventListener("keydown", function (e) {
                      if (e.key === "ArrowLeft") {
                        curPage = (curPage + NUM_PAGES - 1) % NUM_PAGES;
                        buildPage(curPage);
                      } else if (e.key === "ArrowRight") {
                        curPage = (curPage + 1) % NUM_PAGES;
                        buildPage(curPage);
                      }
                    });
                  }
                  return _context3.abrupt("return", {
                    snapshotPages: function snapshotPages() {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var i;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (automation2) {
                                _context2.next = 2;
                                break;
                              }
                              throw new Error("Cannot snapshot pages when not in automation mode");
                            case 2:
                              i = 0;
                            case 3:
                              if (!(i < NUM_PAGES)) {
                                _context2.next = 10;
                                break;
                              }
                              buildPage(i);
                              _context2.next = 7;
                              return settings.snapshot();
                            case 7:
                              i++;
                              _context2.next = 3;
                              break;
                            case 10:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                    }
                  });
                case 22:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
        }
      }
    };
  });
})();
//# sourceMappingURL=alpha-blending-legacy-QO9FlrG4.js.map
