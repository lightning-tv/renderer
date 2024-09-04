;
(function () {
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
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  System.register(['./index-legacy-D-N-k8NI.js'], function (exports, module) {
    'use strict';

    var EventEmitter;
    return {
      setters: [function (module) {
        EventEmitter = module.E;
      }],
      execute: function execute() {
        exports("default", textEvents);
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
        var HEADER_SIZE = 45;
        var FONT_SIZE = 60;
        var BUTTON_PADDING = 10;
        var BEGIN_Y = HEADER_SIZE;
        function textEvents(_0) {
          return __async(this, arguments, function (_ref) {
            var renderer = _ref.renderer,
              testRoot = _ref.testRoot;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var marqueeSdf, marqueeCanvas, marqueeText, MARQUEE_MAX, numChars, i, state, textFailedEventTest, textError;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    renderer.createTextNode({
                      text: "Text Event Test",
                      fontSize: HEADER_SIZE,
                      offsetY: -5,
                      parent: testRoot
                    });
                    renderer.createTextNode({
                      text: "SDF:",
                      fontSize: 45,
                      parent: testRoot,
                      x: 100,
                      y: renderer.settings.appHeight * 1 / 4 - 45 / 2
                    });
                    marqueeSdf = new BoxedText({
                      x: 0,
                      y: BEGIN_Y,
                      boxColor1: 2674786303,
                      boxColor2: 11184895,
                      textColor: 4294967295,
                      fontFamily: "Ubuntu",
                      parent: testRoot
                    }, renderer);
                    marqueeSdf.on("afterLayout", function () {
                      marqueeSdf.x = renderer.settings.appWidth / 2 - marqueeSdf.node.width / 2;
                      marqueeSdf.y = renderer.settings.appHeight * 1 / 4 - marqueeSdf.node.height / 2;
                    });
                    renderer.createTextNode({
                      text: "Canvas:",
                      fontSize: 45,
                      parent: testRoot,
                      x: 100,
                      y: renderer.settings.appHeight * 3 / 4 - 45 / 2
                    });
                    marqueeCanvas = new BoxedText({
                      x: 0,
                      y: BEGIN_Y,
                      boxColor1: 11184895,
                      boxColor2: 2674786303,
                      textColor: 4294967295,
                      fontFamily: "NotoSans",
                      parent: testRoot
                    }, renderer);
                    marqueeCanvas.on("afterLayout", function () {
                      marqueeCanvas.x = renderer.settings.appWidth / 2 - marqueeCanvas.node.width / 2;
                      marqueeCanvas.y = renderer.settings.appHeight * 3 / 4 - marqueeCanvas.node.height / 2;
                    });
                    marqueeText = "The following is a test of the text loaded event...\nFrom Philly's streets to Dutch canal's grace,\nA code symphony spanned time and space.\nLightning 3 emerged, open and free,\nTV apps bloomed like waves on the sea.\n\nJavaScript's art with WebGL's embrace,\nA framework for screens, a virtual space.\nDispersed yet aligned, the team took flight,\nPhiladelphia and Netherlands, day and night.\n\nTogether they wove lines of code,\nInnovation sparked, passion glowed.\nLightning 3 arose, a collaborative dream,\nUniting two lands, a powerful stream.";
                    MARQUEE_MAX = 40;
                    numChars = 0;
                    i = 0;
                    state = "growing";
                    setInterval(function () {
                      if (state === "growing") {
                        numChars++;
                        if (numChars <= MARQUEE_MAX && numChars <= marqueeText.length - i) ;else if (numChars >= MARQUEE_MAX && numChars <= marqueeText.length - i) {
                          numChars = MARQUEE_MAX;
                          state = "scrolling";
                        } else if (numChars > 0) {
                          state = "shrinking";
                        }
                      } else if (state === "shrinking") {
                        i++;
                        numChars--;
                        if (numChars === 0) {
                          i = 0;
                          state = "growing";
                        }
                      } else {
                        i++;
                        if (numChars >= marqueeText.length - i) {
                          state = "shrinking";
                        }
                      }
                      marqueeSdf.text = marqueeText.substring(i, i + numChars);
                      marqueeCanvas.text = marqueeSdf.text;
                    }, 50);
                    textFailedEventTest = renderer.createTextNode({
                      y: 50,
                      fontFamily: "$$SDF_FAILURE_TEST$$",
                      textRendererOverride: "sdf",
                      parent: testRoot,
                      fontSize: 50
                    });
                    _context.prev = 14;
                    _context.next = 17;
                    return waitForTextFailed(textFailedEventTest);
                  case 17:
                    textError = _context.sent;
                    _context.next = 22;
                    break;
                  case 20:
                    _context.prev = 20;
                    _context.t0 = _context["catch"](14);
                  case 22:
                    textFailedEventTest.fontFamily = "Ubuntu";
                    if (textError) {
                      textFailedEventTest.text = "Failure Event Test Passed!";
                      textFailedEventTest.color = 16711935;
                    } else {
                      textFailedEventTest.text = "Failure Event Test Failed!";
                      textFailedEventTest.color = 4278190335;
                    }
                  case 24:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[14, 20]]);
            })();
          });
        }
        var BoxedText = /*#__PURE__*/function (_EventEmitter) {
          function BoxedText(props, renderer) {
            var _this;
            _classCallCheck(this, BoxedText);
            _this = _callSuper(this, BoxedText);
            _this.props = props;
            _this.renderer = renderer;
            __publicField(_this, "node");
            __publicField(_this, "textNode");
            __publicField(_this, "onTextLoaded", function (target, payload) {
              _this.layout(payload.dimensions);
            });
            _this.node = renderer.createNode({
              x: props.x,
              y: props.y,
              colorTop: props.boxColor1,
              colorBottom: props.boxColor2,
              shader: renderer.createShader("RoundedRectangle", {
                radius: 10
              }),
              parent: props.parent
            });
            _this.textNode = renderer.createTextNode({
              x: 0,
              y: 0,
              fontSize: FONT_SIZE,
              offsetY: -5,
              alpha: 0,
              color: props.textColor,
              fontFamily: props.fontFamily,
              parent: _this.node
            });
            _this.textNode.on("loaded", _this.onTextLoaded);
            return _this;
          }
          _inherits(BoxedText, _EventEmitter);
          return _createClass(BoxedText, [{
            key: "layout",
            value: function layout(textDimensions) {
              this.node.width = textDimensions.width + BUTTON_PADDING * 2;
              this.node.height = textDimensions.height + BUTTON_PADDING * 2;
              this.textNode.x = this.node.width / 2 - textDimensions.width / 2;
              this.textNode.y = this.node.height / 2 - textDimensions.height / 2;
              this.textNode.alpha = 1;
              this.emit("afterLayout");
            }
          }, {
            key: "text",
            get: function get() {
              return this.textNode.text;
            },
            set: function set(v) {
              this.textNode.text = v;
            }
          }, {
            key: "x",
            get: function get() {
              return this.node.x;
            },
            set: function set(v) {
              this.node.x = v;
            }
          }, {
            key: "y",
            get: function get() {
              return this.node.y;
            },
            set: function set(v) {
              this.node.y = v;
            }
          }, {
            key: "boxColor1",
            get: function get() {
              return this.node.colorTop;
            },
            set: function set(v) {
              this.node.colorTop = v;
            }
          }, {
            key: "boxColor2",
            get: function get() {
              return this.node.colorBottom;
            },
            set: function set(v) {
              this.node.colorBottom = v;
            }
          }, {
            key: "textColor",
            get: function get() {
              return this.textNode.color;
            },
            set: function set(v) {
              this.textNode.color = v;
            }
          }, {
            key: "fontFamily",
            get: function get() {
              return this.textNode.fontFamily;
            },
            set: function set(v) {
              this.textNode.fontFamily = v;
            }
          }, {
            key: "parent",
            get: function get() {
              return this.node.parent;
            },
            set: function set(v) {
              this.node.parent = v;
            }
          }]);
        }(EventEmitter);
        function waitForTextFailed(textNode) {
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              reject(new Error("TIMEOUT"));
            }, 1e3);
            textNode.once("failed", function (target, payload) {
              resolve(payload.error);
            });
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=text-events-legacy-C4zNPHsd.js.map
