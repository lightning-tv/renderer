;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  System.register(['./index-legacy-D-N-k8NI.js', './LocalStorage-legacy-DdztG2dl.js'], function (exports, module) {
    'use strict';

    var Component, loadStorage, saveStorage;
    return {
      setters: [function (module) {
        Component = module.C;
      }, function (module) {
        loadStorage = module.l;
        saveStorage = module.s;
      }],
      execute: function execute() {
        var __defProp = Object.defineProperty;
        var __defNormalProp = function __defNormalProp(obj, key, value) {
          return key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          }) : obj[key] = value;
        };
        var __publicField = function __publicField(obj, key, value) {
          return __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
        var TITLE_FONT_SIZE = 40;
        var PADDING = 20;
        var PageContainer = /*#__PURE__*/function (_Component) {
          function PageContainer(settings, props) {
            var _this;
            _classCallCheck(this, PageContainer);
            var _a, _b;
            var renderer = settings.renderer;
            _this = _callSuper(this, PageContainer, [renderer, {
              x: props.x,
              y: props.y,
              color: (_a = props.color) != null ? _a : 0,
              width: props.width,
              height: props.height,
              parent: props.parent ? props.parent : settings.testRoot
            }]);
            __publicField(_this, "titleNode");
            __publicField(_this, "pageNumberNode");
            __publicField(_this, "curPageNode", null);
            __publicField(_this, "curPageIndex", -1);
            __publicField(_this, "pageConstructors", []);
            __publicField(_this, "settings");
            _this.titleNode = renderer.createTextNode({
              fontFamily: "Ubuntu",
              fontSize: TITLE_FONT_SIZE,
              x: PADDING,
              y: PADDING,
              parent: _this.node,
              text: (_b = props.title) != null ? _b : ""
            });
            _this.settings = settings;
            _this.pageNumberNode = renderer.createTextNode({
              fontFamily: "Ubuntu",
              fontSize: 30,
              x: PADDING,
              y: _this.node.height - 30 - PADDING,
              parent: _this.node
            });
            return _this;
          }
          _inherits(PageContainer, _Component);
          return _createClass(PageContainer, [{
            key: "pushPage",
            value: function pushPage(pageConstructor) {
              this.pageConstructors.push(pageConstructor);
            }
          }, {
            key: "finalizePages",
            value: function finalizePages() {
              if (this.curPageIndex === -1 && this.pageConstructors.length > 0) {
                var _this$settings = this.settings,
                  automation = _this$settings.automation,
                  testName = _this$settings.testName;
                var pageNum = 0;
                if (!automation) {
                  var savedState = loadStorage("".concat(testName, "-PageContainer"));
                  if (savedState && savedState.curPage && savedState.curPage < this.pageConstructors.length) {
                    pageNum = savedState.curPage;
                  }
                  this.bindWindowKeys();
                }
                this.setPage(pageNum).catch(console.error);
              }
            }
          }, {
            key: "setPage",
            value: function setPage(pageIndex) {
              return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this$settings2, automation, testName;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
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
                      _this$settings2 = this.settings, automation = _this$settings2.automation, testName = _this$settings2.testName;
                      if (!automation) {
                        saveStorage("".concat(testName, "-PageContainer"), {
                          curPage: pageIndex
                        });
                      }
                      _context.next = 8;
                      return this.pageConstructors[pageIndex](this.curPageNode);
                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            }
            /**
             * Performs an automation run of all the pages in this container.
             */
          }, {
            key: "snapshotPages",
            value: function snapshotPages() {
              return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var i;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.settings.automation) {
                        _context2.next = 2;
                        break;
                      }
                      throw new Error("Cannot snapshot pages when not in automation mode");
                    case 2:
                      i = 0;
                    case 3:
                      if (!(i < this.pageConstructors.length)) {
                        _context2.next = 11;
                        break;
                      }
                      _context2.next = 6;
                      return this.setPage(i);
                    case 6:
                      _context2.next = 8;
                      return this.settings.snapshot();
                    case 8:
                      i++;
                      _context2.next = 3;
                      break;
                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }
          }, {
            key: "bindWindowKeys",
            value: function bindWindowKeys() {
              var _this2 = this;
              window.addEventListener("keydown", function (e) {
                var numPages = _this2.pageConstructors.length;
                if (e.key === "ArrowLeft") {
                  var newPageIndex = (_this2.curPageIndex + numPages - 1) % numPages;
                  _this2.setPage(newPageIndex).catch(console.error);
                } else if (e.key === "ArrowRight") {
                  var _newPageIndex = (_this2.curPageIndex + 1) % numPages;
                  _this2.setPage(_newPageIndex).catch(console.error);
                }
                var numPressed = parseInt(e.key, 10);
                if (numPressed >= 1 && numPressed <= numPages) {
                  _this2.setPage(numPressed - 1).catch(console.error);
                }
              });
              this.bindWindowKeys = function () {};
            }
          }, {
            key: "contentHeight",
            get: function get() {
              return this.node.height - TITLE_FONT_SIZE - PADDING * 2;
            }
          }, {
            key: "contentWidth",
            get: function get() {
              return this.node.width - PADDING * 2;
            }
          }, {
            key: "padding",
            get: function get() {
              return PADDING;
            }
          }]);
        }(Component);
        exports("P", PageContainer);
      }
    };
  });
})();
//# sourceMappingURL=PageContainer-legacy-DU5UrY0o.js.map
