;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  System.register(['./rocko-legacy-DFBMEg6f.js', './elevator-legacy-WOxR_DKh.js', './spritemap-legacy-BgaJ0z08.js', './index-legacy-B71_XFT2.js'], function (exports, module) {
    'use strict';

    var rockoImg, elevatorImg, spritemap, assertTruthy;
    return {
      setters: [function (module) {
        rockoImg = module.r;
      }, function (module) {
        elevatorImg = module.e;
      }, function (module) {
        spritemap = module.s;
      }, function (module) {
        assertTruthy = module.a;
      }],
      execute: function execute() {
        exports("default", test);
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
        var Character = /*#__PURE__*/function () {
          // Set in setState
          function Character(props, renderer, rightFrames) {
            _classCallCheck(this, Character);
            this.props = props;
            this.renderer = renderer;
            this.rightFrames = rightFrames;
            __publicField(this, "node");
            __publicField(this, "curIntervalAnimation", null);
            __publicField(this, "direction");
            // Set in setState
            __publicField(this, "state");
            this.node = renderer.createNode({
              x: props.x,
              y: props.y,
              width: 200 / 2,
              height: 300 / 2,
              texture: rightFrames[0],
              parent: renderer.root,
              zIndex: props.zIndex
            });
            assertTruthy(this.node);
            this.setState("right", "idle");
          }
          return _createClass(Character, [{
            key: "setState",
            value: function setState(direction, state) {
              if (this.direction === direction && this.state === state) {
                return;
              }
              this.direction = direction;
              this.state = state;
              switch (state) {
                case "idle":
                  this.animateCharacter(direction, 2, 3, 100);
                  break;
                case "walk":
                  this.animateCharacter(direction, 0, 7, 100);
                  break;
                case "run":
                  this.animateCharacter(direction, 0, 7, 100);
                  break;
                case "jump":
                  this.animateCharacter(direction, 0, 7, 100);
                  break;
              }
            }
          }, {
            key: "animateCharacter",
            value: function animateCharacter(direction, iStart, iEnd, intervalMs) {
              var _this = this;
              var curI = iStart;
              var flipX = direction === "left" ? true : false;
              if (iEnd + 1 > this.rightFrames.length || iStart < 0) {
                throw new Error("Animation out of bounds");
              }
              if (this.curIntervalAnimation) {
                clearInterval(this.curIntervalAnimation);
              }
              var nextFrame = function nextFrame() {
                _this.node.texture = _this.rightFrames[curI];
                _this.node.textureOptions.flipX = flipX;
                curI++;
                if (curI > iEnd) {
                  curI = iStart;
                }
              };
              nextFrame();
              this.curIntervalAnimation = setInterval(nextFrame, intervalMs);
            }
          }]);
        }();
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
        function test(_0) {
          return __async(this, arguments, function (_ref) {
            var _this2 = this;
            var renderer = _ref.renderer,
              testRoot = _ref.testRoot;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var redRect, holder, greenRect, shaft, relativePositioningPlatform, relativePositioningChild, rockoRect, elevatorRect, elevatorNumber, rockoAnimation, elevatorAnimation, blueRect, spriteMapTexture, frames, i, character, textNode, count;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    redRect = renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 100,
                      height: 100,
                      color: 4278190335,
                      shader: renderer.createShader("RoundedRectangle", {
                        radius: 50
                      }),
                      parent: testRoot
                    });
                    holder = renderer.createNode({
                      x: 150,
                      y: 900,
                      width: 100,
                      height: 100,
                      color: 4278190335,
                      parent: testRoot,
                      zIndex: 0,
                      zIndexLocked: 0,
                      alpha: 0.5
                    });
                    renderer.createNode({
                      x: 111,
                      y: 0,
                      width: 111,
                      height: 111,
                      color: 4278190335,
                      parent: holder,
                      zIndex: 12,
                      alpha: 0.5
                    });
                    greenRect = renderer.createNode({
                      x: 100,
                      y: 0,
                      width: 100,
                      height: 100,
                      color: 16711935,
                      parent: testRoot
                    });
                    shaft = renderer.createNode({
                      x: 395,
                      y: 0,
                      width: 210,
                      height: renderer.settings.appHeight,
                      color: 4294967295,
                      texture: renderer.createTexture("NoiseTexture", {
                        width: 210,
                        height: renderer.settings.appHeight
                      }),
                      parent: testRoot
                    });
                    relativePositioningPlatform = renderer.createNode({
                      x: 605,
                      y: 230,
                      width: 1315,
                      height: 50,
                      color: 2864408319,
                      texture: renderer.createTexture("NoiseTexture", {
                        width: 1315,
                        height: 50
                      }),
                      parent: testRoot
                    });
                    relativePositioningChild = renderer.createNode({
                      x: 10,
                      y: 10,
                      width: 1315 - 20,
                      height: 30,
                      color: 2867724202,
                      parent: relativePositioningPlatform,
                      texture: renderer.createTexture("NoiseTexture", {
                        width: 1315 - 20,
                        height: 30
                      })
                    });
                    renderer.createNode({
                      x: 10,
                      y: 10,
                      width: 1315 - 20 - 20,
                      height: 10,
                      color: 4278255615,
                      parent: relativePositioningChild,
                      texture: renderer.createTexture("NoiseTexture", {
                        width: 1315 - 20 - 20,
                        height: 50
                      })
                    });
                    rockoRect = renderer.createNode({
                      x: -181,
                      y: renderer.settings.appHeight - 218,
                      width: 181,
                      height: 218,
                      src: rockoImg,
                      color: 4294967295,
                      parent: testRoot,
                      zIndex: 1
                    });
                    elevatorRect = renderer.createNode({
                      x: 400,
                      y: 0,
                      width: 200,
                      height: 268,
                      src: elevatorImg,
                      color: 65535,
                      parent: testRoot,
                      zIndex: 2,
                      alpha: 0.9
                    });
                    elevatorNumber = renderer.createTextNode({
                      x: 0,
                      y: 0,
                      width: 200,
                      height: 268,
                      color: 4294967295,
                      alpha: 1,
                      text: "Dn",
                      contain: "both",
                      fontFamily: "Ubuntu",
                      fontSize: 100,
                      textAlign: "center",
                      parent: elevatorRect,
                      zIndex: 3
                    });
                    setInterval(function () {
                      shaft.texture = renderer.createTexture("NoiseTexture", {
                        width: 210,
                        height: renderer.settings.appHeight,
                        cacheId: Math.floor(Math.random() * 1e5)
                      });
                      shaft.textureOptions.preload = true;
                    }, 1e3);
                    rockoAnimation = null;
                    setTimeout(function () {
                      return __async(_this2, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              if (!true) {
                                _context.next = 21;
                                break;
                              }
                              rockoRect.zIndex = 1;
                              rockoAnimation = rockoRect.animate({}, {
                                duration: 1e3
                              }).start();
                              _context.next = 5;
                              return rockoAnimation.waitUntilStopped();
                            case 5:
                              rockoAnimation = rockoRect.animate({
                                x: 400
                              }, {
                                duration: 1e3
                              }).start();
                              _context.next = 8;
                              return rockoAnimation.waitUntilStopped();
                            case 8:
                              rockoAnimation = rockoRect.animate({
                                y: elevatorRect.height - rockoRect.height
                              }, {
                                duration: 1e3
                              }).start();
                              _context.next = 11;
                              return rockoAnimation.waitUntilStopped();
                            case 11:
                              rockoRect.zIndex = 3;
                              rockoAnimation = rockoRect.animate({
                                x: renderer.settings.appWidth
                                // y: 100,
                              }, {
                                duration: 2616
                              }).start();
                              _context.next = 15;
                              return rockoAnimation.waitUntilStopped();
                            case 15:
                              console.log("resetting rocko");
                              rockoRect.x = -rockoRect.width;
                              rockoRect.y = renderer.settings.appHeight - 218;
                              rockoRect.flush();
                              _context.next = 0;
                              break;
                            case 21:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                    }, 1e3);
                    elevatorAnimation = null;
                    setTimeout(function () {
                      return __async(_this2, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              if (!true) {
                                _context2.next = 20;
                                break;
                              }
                              elevatorNumber.text = "Dn";
                              elevatorRect.color = 65535;
                              elevatorAnimation = elevatorRect.animate({
                                y: 1080 - elevatorRect.height
                              }, {
                                duration: 1e3
                              }).start();
                              _context2.next = 6;
                              return elevatorAnimation.waitUntilStopped();
                            case 6:
                              elevatorAnimation = elevatorRect.animate({
                                // y: 1080 - elevatorRect.height,
                              }, {
                                duration: 1e3
                              }).start();
                              _context2.next = 9;
                              return elevatorAnimation.waitUntilStopped();
                            case 9:
                              elevatorNumber.text = "Up";
                              elevatorRect.color = 16711935;
                              elevatorAnimation = elevatorRect.animate({
                                y: 0
                              }, {
                                duration: 1e3
                              }).start();
                              _context2.next = 14;
                              return elevatorAnimation.waitUntilStopped();
                            case 14:
                              elevatorRect.color = 16711935;
                              elevatorAnimation = elevatorRect.animate({
                                // y: 0,
                              }, {
                                duration: 2616
                              }).start();
                              _context2.next = 18;
                              return elevatorAnimation.waitUntilStopped();
                            case 18:
                              _context2.next = 0;
                              break;
                            case 20:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                    }, 1e3);
                    blueRect = null;
                    setInterval(function () {
                      redRect.color++;
                    }, 100);
                    setInterval(function () {
                      if (blueRect) {
                        blueRect.destroy();
                        blueRect = null;
                      } else {
                        blueRect = renderer.createNode({
                          x: 200,
                          y: 0,
                          width: 100,
                          height: 100,
                          color: 65535,
                          parent: testRoot
                        });
                      }
                    }, 500);
                    setInterval(function () {
                      if (greenRect.parent) {
                        greenRect.parent = null;
                      } else {
                        greenRect.parent = testRoot;
                      }
                    }, 1e3);
                    spriteMapTexture = renderer.createTexture("ImageTexture", {
                      src: spritemap
                    });
                    frames = Array.from(Array(8).keys()).map(function (i) {
                      var x = i % 8 * 100;
                      var y = Math.floor(i / 8) * 150;
                      return renderer.createTexture("SubTexture", {
                        texture: spriteMapTexture,
                        x: x,
                        y: y,
                        width: 100,
                        height: 150
                      });
                    });
                    for (i = 0; i < 5; i++) {
                      new Character({
                        x: 800 + i * 200,
                        y: 125,
                        zIndex: i % 2 === 0 ? 3 : 1
                      }, renderer, frames);
                    }
                    character = new Character({
                      x: 1800,
                      y: 125,
                      zIndex: 6
                    }, renderer, frames);
                    window.addEventListener("keydown", function (e) {
                      if (e.code === "ArrowLeft") {
                        character.setState("left", "walk");
                        character.node.animate({
                          x: character.node.x - 30
                        }, {
                          duration: 200
                        }).start();
                      } else if (e.code === "ArrowRight") {
                        character.setState("right", "walk");
                        character.node.animate({
                          x: character.node.x + 30
                        }, {
                          duration: 200
                        }).start();
                      } else if (e.code === "Space") {
                        character.setState(character.direction, "jump");
                      }
                    });
                    window.addEventListener("keyup", function (e) {
                      if (e.code === "ArrowLeft") {
                        character.setState("left", "idle");
                      } else if (e.code === "ArrowRight") {
                        character.setState("right", "idle");
                      }
                    });
                    textNode = renderer.createTextNode({
                      x: shaft.x + shaft.width,
                      y: relativePositioningPlatform.y + relativePositioningPlatform.height,
                      width: 300,
                      height: 200,
                      color: 4294967295,
                      alpha: 1,
                      text: "Text Test: 0",
                      fontFamily: "Ubuntu",
                      contain: "width",
                      textAlign: "center",
                      fontSize: 100,
                      scale: 1,
                      parent: testRoot
                    });
                    renderer.createTextNode({
                      x: renderer.settings.appWidth,
                      y: renderer.settings.appHeight,
                      mount: 1,
                      width: 300,
                      height: 1,
                      color: 4294967295,
                      alpha: 1,
                      text: "Rocko Test",
                      fontFamily: "NotoSans",
                      contain: "width",
                      textAlign: "center",
                      fontSize: 100,
                      parent: testRoot
                    });
                    count = 1;
                    setInterval(function () {
                      textNode.text = "Text Test: ".concat(count++);
                    }, 1e3);
                    console.log("ready!");
                  case 31:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            })();
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=test-legacy-BxJGB7JQ.js.map
