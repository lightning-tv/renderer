;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register(['./paginateTestRows-legacy-CLe-L7TJ.js', './PageContainer-legacy-Vt1L5TeH.js', './utils-legacy-BJnZ2DR0.js', './robot-legacy-qlNob2Ki.js', './index-legacy-qyIsAgiU.js', './LocalStorage-legacy-DdztG2dl.js'], function (exports, module) {
    'use strict';

    var paginateTestRows, PageContainer, waitForLoadedDimensions, robotImg, deg2Rad;
    return {
      setters: [function (module) {
        paginateTestRows = module.p;
      }, function (module) {
        PageContainer = module.P;
      }, function (module) {
        waitForLoadedDimensions = module.w;
      }, function (module) {
        robotImg = module.r;
      }, function (module) {
        deg2Rad = module.d;
      }, null],
      execute: function execute() {
        exports({
          automation: automation,
          default: test
        });
        var __defProp = Object.defineProperty;
        var __defProps = Object.defineProperties;
        var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = function __defNormalProp(obj, key, value) {
          return key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          }) : obj[key] = value;
        };
        var __spreadValues = function __spreadValues(a, b) {
          for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          if (__getOwnPropSymbols) {
            var _iterator = _createForOfIteratorHelper(__getOwnPropSymbols(b)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var prop = _step.value;
                if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return a;
        };
        var __spreadProps = function __spreadProps(a, b) {
          return __defProps(a, __getOwnPropDescs(b));
        };
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
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return test(settings);
                case 2:
                  _context.next = 4;
                  return _context.sent.snapshotPages();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        }
        var SQUARE_SIZE = 200;
        var PADDING = 20;
        function test(settings) {
          return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this = this;
            var renderer, pageContainer;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  renderer = settings.renderer;
                  pageContainer = new PageContainer(settings, {
                    width: renderer.settings.appWidth,
                    height: renderer.settings.appHeight,
                    title: "Clipping Tests"
                  });
                  _context9.next = 4;
                  return paginateTestRows(pageContainer, [{
                    title: "Standard node clips DIRECT children that are outside of its bounds",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var curX, clipContainerTopLeft, clipContainerTopRight, clipContainerBottomRight, clipContainerBottomLeft, clipAllSides;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              curX = 0;
                              clipContainerTopLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerTopLeft
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerTopRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerTopRight
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 100,
                                y: 100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerBottomRight
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createNode({
                                x: -100,
                                y: 100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerBottomLeft
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipAllSides = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE * 2,
                                height: SQUARE_SIZE * 2,
                                src: robotImg,
                                parent: clipAllSides
                              });
                              return _context2.abrupt("return", SQUARE_SIZE);
                            case 16:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                    }
                  }, {
                    title: "Standard node clips ANCESTOR children that are outside of its bounds",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        var curX, clipContainerTopLeft, clipContainerTopLeft2, clipContainerTopRight, clipContainerTopRight2, clipContainerBottomRight, clipContainerBottomRight2, clipContainerBottomLeft, clipContainerBottomLeft2, clipAllSides, clipAllSides2;
                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) switch (_context3.prev = _context3.next) {
                            case 0:
                              curX = 0;
                              clipContainerTopLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerTopLeft2 = renderer.createNode({
                                parent: clipContainerTopLeft
                              });
                              renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerTopLeft2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerTopRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerTopRight2 = renderer.createNode({
                                parent: clipContainerTopRight
                              });
                              renderer.createNode({
                                x: 100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerTopRight2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerBottomRight2 = renderer.createNode({
                                parent: clipContainerBottomRight
                              });
                              renderer.createNode({
                                x: 100,
                                y: 100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerBottomRight2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerBottomLeft2 = renderer.createNode({
                                parent: clipContainerBottomLeft
                              });
                              renderer.createNode({
                                x: -100,
                                y: 100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerBottomLeft2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipAllSides = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipAllSides2 = renderer.createNode({
                                parent: clipAllSides
                              });
                              renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE * 2,
                                height: SQUARE_SIZE * 2,
                                src: robotImg,
                                parent: clipAllSides2
                              });
                              rowNode.height = SQUARE_SIZE;
                              return _context3.abrupt("return", SQUARE_SIZE);
                            case 22:
                            case "end":
                              return _context3.stop();
                          }
                        }, _callee3);
                      }));
                    }
                  }, {
                    title: "Nested clipping nodes clip children that are outside of their interesected bounds",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var curX, clipContainerTopLeft, clipContainerTopLeft2, clipContainerTopRight, clipContainerTopRight2, clipContainerBottomRight, clipContainerBottomRight2, clipContainerBottomLeft, clipContainerBottomLeft2, clipContainerAllSides, clipContainerAllSides2;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              curX = 0;
                              clipContainerTopLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerTopLeft2 = renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 4278190335,
                                src: robotImg,
                                parent: clipContainerTopLeft,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 50,
                                y: 50,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                src: robotImg,
                                parent: clipContainerTopLeft2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerTopRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerTopRight2 = renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 4278190335,
                                src: robotImg,
                                parent: clipContainerTopRight,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 150,
                                y: 50,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                src: robotImg,
                                parent: clipContainerTopRight2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomRight = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerBottomRight2 = renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 4278190335,
                                src: robotImg,
                                parent: clipContainerBottomRight,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 150,
                                y: 150,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                src: robotImg,
                                parent: clipContainerBottomRight2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerBottomLeft = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerBottomLeft2 = renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 4278190335,
                                src: robotImg,
                                parent: clipContainerBottomLeft,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 50,
                                y: 150,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                src: robotImg,
                                parent: clipContainerBottomLeft2
                              });
                              curX += SQUARE_SIZE + PADDING;
                              clipContainerAllSides = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 16711935,
                                parent: rowNode,
                                clipping: true
                              });
                              clipContainerAllSides2 = renderer.createNode({
                                x: -100,
                                y: -100,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                color: 4278190335,
                                src: robotImg,
                                parent: clipContainerAllSides,
                                clipping: true
                              });
                              renderer.createNode({
                                x: 50,
                                y: 50,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                src: robotImg,
                                parent: clipContainerAllSides2
                              });
                              return _context4.abrupt("return", SQUARE_SIZE);
                            case 21:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4);
                      }));
                    }
                  }, {
                    title: "Canvas text clips ANCESTOR text node children that is outside of its bounds",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                        var curX, parent;
                        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                          while (1) switch (_context5.prev = _context5.next) {
                            case 0:
                              curX = 0;
                              parent = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createTextNode({
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: parent,
                                fontFamily: "Ubuntu",
                                fontSize: 40,
                                color: 255,
                                textRendererOverride: "canvas",
                                text: "Canvas ancestor clipping"
                              });
                              return _context5.abrupt("return", SQUARE_SIZE);
                            case 4:
                            case "end":
                              return _context5.stop();
                          }
                        }, _callee5);
                      }));
                    }
                  }, {
                    title: "SDF text clips ANCESTOR text node children that is outside of its bounds",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                        var curX, parent;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                          while (1) switch (_context6.prev = _context6.next) {
                            case 0:
                              curX = 0;
                              parent = renderer.createNode({
                                x: curX,
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: rowNode,
                                clipping: true
                              });
                              renderer.createTextNode({
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: parent,
                                fontFamily: "Ubuntu",
                                fontSize: 40,
                                color: 255,
                                textRendererOverride: "sdf",
                                text: "SDF ancestor clipping"
                              });
                              return _context6.abrupt("return", SQUARE_SIZE);
                            case 4:
                            case "end":
                              return _context6.stop();
                          }
                        }, _callee6);
                      }));
                    }
                  }, {
                    title: "Clipping bounds are scaled with the `scale` property",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                        var curX, containerProps, clippingParentProps, clippingChildProps, container, clippingParent, dim, container2, clippingParent2, container3, clippingParent3, container4, clippingParent4;
                        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                          while (1) switch (_context7.prev = _context7.next) {
                            case 0:
                              curX = 0;
                              containerProps = {
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: rowNode,
                                color: 16711935,
                                clipping: true
                              };
                              clippingParentProps = {
                                mount: 0.5,
                                x: SQUARE_SIZE / 2,
                                y: SQUARE_SIZE / 2,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                clipping: true
                                // rotation: Math.PI / 4
                              };
                              clippingChildProps = {
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                mount: 0.5,
                                src: robotImg
                              };
                              container = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent
                              }));
                              curX += SQUARE_SIZE + PADDING;
                              _context7.next = 10;
                              return waitForLoadedDimensions(renderer.createTextNode({
                                mountY: 0.5,
                                x: curX,
                                y: SQUARE_SIZE / 2,
                                text: "scale 2 >",
                                parent: rowNode
                              }));
                            case 10:
                              dim = _context7.sent;
                              curX += dim.width + PADDING;
                              container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent2 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container2,
                                scale: 2
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent2
                              }));
                              curX += SQUARE_SIZE + PADDING;
                              _context7.next = 18;
                              return waitForLoadedDimensions(renderer.createTextNode({
                                mountY: 0.5,
                                x: curX,
                                y: SQUARE_SIZE / 2,
                                text: "pivot 0 >",
                                parent: rowNode
                              }));
                            case 18:
                              curX += dim.width + PADDING;
                              container3 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent3 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container3,
                                scale: 2,
                                pivot: 0
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent3
                              }));
                              curX += SQUARE_SIZE + PADDING;
                              _context7.next = 25;
                              return waitForLoadedDimensions(renderer.createTextNode({
                                mountY: 0.5,
                                x: curX,
                                y: SQUARE_SIZE / 2,
                                text: "pivot 1 >",
                                parent: rowNode
                              }));
                            case 25:
                              curX += dim.width + PADDING;
                              container4 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent4 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container4,
                                scale: 2,
                                pivot: 1
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent4
                              }));
                              return _context7.abrupt("return", SQUARE_SIZE);
                            case 30:
                            case "end":
                              return _context7.stop();
                          }
                        }, _callee7);
                      }));
                    }
                  }, {
                    title: "Clipping is automatically disabled when node is rotated",
                    content: function content(rowNode) {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                        var curX, containerProps, clippingParentProps, clippingChildProps, container, clippingParent, dimensions, container2, clippingParent2;
                        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                          while (1) switch (_context8.prev = _context8.next) {
                            case 0:
                              curX = 0;
                              containerProps = {
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                parent: rowNode,
                                color: 16711935,
                                clipping: true
                              };
                              clippingParentProps = {
                                mount: 0.5,
                                x: SQUARE_SIZE / 2,
                                y: SQUARE_SIZE / 2,
                                width: SQUARE_SIZE / 2,
                                height: SQUARE_SIZE / 2,
                                clipping: true
                              };
                              clippingChildProps = {
                                width: SQUARE_SIZE,
                                height: SQUARE_SIZE,
                                mount: 0.5,
                                src: robotImg
                              };
                              container = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent
                              }));
                              curX += SQUARE_SIZE + PADDING;
                              _context8.next = 10;
                              return waitForLoadedDimensions(renderer.createTextNode({
                                mountY: 0.5,
                                x: curX,
                                y: SQUARE_SIZE / 2,
                                text: "rotate 45 degrees >",
                                parent: rowNode
                              }));
                            case 10:
                              dimensions = _context8.sent;
                              curX += dimensions.width + PADDING;
                              container2 = renderer.createNode(__spreadProps(__spreadValues({}, containerProps), {
                                x: curX
                              }));
                              clippingParent2 = renderer.createNode(__spreadProps(__spreadValues({}, clippingParentProps), {
                                parent: container2,
                                rotation: deg2Rad(45)
                              }));
                              renderer.createNode(__spreadProps(__spreadValues({}, clippingChildProps), {
                                parent: clippingParent2
                              }));
                              return _context8.abrupt("return", SQUARE_SIZE);
                            case 16:
                            case "end":
                              return _context8.stop();
                          }
                        }, _callee8);
                      }));
                    }
                  }]);
                case 4:
                  return _context9.abrupt("return", pageContainer);
                case 5:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          }));
        }
      }
    };
  });
})();
//# sourceMappingURL=clipping-legacy-nQ3gQJb7.js.map