;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  System.register(['./robot-legacy-qlNob2Ki.js'], function (exports, module) {
    'use strict';

    var robotImg;
    return {
      setters: [function (module) {
        robotImg = module.r;
      }],
      execute: function execute() {
        exports("default", robot);
        var environmentImg = "/renderer/assets/environment-CVth_s_M.png";
        var doorLeftGroundImg = "/renderer/assets/elevator-door-left-ground-floor-CbPZASjZ.png";
        var doorRightGroundImg = "/renderer/assets/elevator-door-right-ground-floor-VvmCRn5D.png";
        var doorTopTopImg = "/renderer/assets/elevator-door-top-top-floor-xlIzO6ld.png";
        var doorBottomTopImg = "/renderer/assets/elevator-door-bottom-top-floor-mYjhoC1O.png";
        var elevatorBgImg = "/renderer/assets/elevator-background-ZN06wPOM.png";
        var shadowImg = "/renderer/assets/robot-shadow-B6bO8HxC.png";
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
        function robot(_0) {
          return __async(this, arguments, function (_ref) {
            var _this = this;
            var renderer = _ref.renderer,
              testRoot = _ref.testRoot;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var elevatorBg, doorLeftGround, doorRightGround, robot, shadow, robotCore, doorTopTop, doorBottomTop, openTopDoors, closeTopDoors, openGroundDoors, closeGroundDoors;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    closeGroundDoors = function _closeGroundDoors(duration) {
                      var a1 = doorLeftGround.animate({
                        x: 480 - 68
                      }, {
                        duration: duration
                      }).start();
                      var a2 = doorRightGround.animate({
                        x: 480
                      }, {
                        duration: duration
                      }).start();
                      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped()]);
                    };
                    openGroundDoors = function _openGroundDoors(duration) {
                      var a1 = doorLeftGround.animate({
                        x: 480 - 68 - 68
                      }, {
                        duration: duration
                      }).start();
                      var a2 = doorRightGround.animate({
                        x: 480 + 68
                      }, {
                        duration: duration
                      }).start();
                      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped()]);
                    };
                    closeTopDoors = function _closeTopDoors(duration) {
                      var a1 = doorTopTop.animate({
                        y: 207
                      }, {
                        duration: duration
                      }).start();
                      var a2 = doorBottomTop.animate({
                        y: 207 + 129
                      }, {
                        duration: duration
                      }).start();
                      var a3 = elevatorBg.animate({
                        y: 228
                      }, {
                        duration: duration
                      }).start();
                      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped(), a3.waitUntilStopped()]);
                    };
                    openTopDoors = function _openTopDoors(duration) {
                      var a1 = doorTopTop.animate({
                        y: 207 - 129
                      }, {
                        duration: duration
                      }).start();
                      var a2 = doorBottomTop.animate({
                        y: 207 + 129 + 20
                      }, {
                        duration: duration
                      }).start();
                      var a3 = elevatorBg.animate({
                        y: 228 - 20
                      }, {
                        duration: duration
                      }).start();
                      return Promise.all([a1.waitUntilStopped(), a2.waitUntilStopped(), a3.waitUntilStopped()]);
                    };
                    elevatorBg = renderer.createNode({
                      x: 368,
                      y: 228,
                      width: 226,
                      height: 214,
                      zIndex: 0,
                      src: elevatorBgImg,
                      parent: testRoot
                    });
                    renderer.createNode({
                      x: 368,
                      y: 827,
                      width: 226,
                      height: 214,
                      zIndex: 0,
                      src: elevatorBgImg,
                      parent: testRoot
                    });
                    doorLeftGround = renderer.createNode({
                      x: 480 - 68,
                      y: 827,
                      width: 68,
                      height: 194,
                      zIndex: 2,
                      src: doorLeftGroundImg,
                      parent: testRoot
                    });
                    doorRightGround = renderer.createNode({
                      x: 480,
                      y: 827,
                      width: 68,
                      height: 194,
                      zIndex: 2,
                      src: doorRightGroundImg,
                      parent: testRoot
                    });
                    renderer.createNode({
                      x: 0,
                      y: 0,
                      width: renderer.settings.appWidth,
                      height: renderer.settings.appHeight,
                      zIndex: 3,
                      src: environmentImg,
                      parent: testRoot
                    });
                    robot = renderer.createNode({
                      x: -140,
                      y: 850,
                      width: 140,
                      height: 140,
                      zIndex: 5,
                      color: 0,
                      parent: testRoot
                    });
                    shadow = renderer.createNode({
                      x: -40,
                      y: 180,
                      width: 228,
                      height: 65,
                      zIndex: 5,
                      src: shadowImg,
                      parent: robot
                    });
                    robotCore = renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 140,
                      height: 140,
                      zIndex: 5,
                      src: robotImg,
                      parent: robot
                    });
                    setTimeout(function () {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              if (!true) {
                                _context.next = 7;
                                break;
                              }
                              _context.next = 3;
                              return robotCore.animate({
                                y: 10
                              }, {
                                duration: 500
                              }).start().waitUntilStopped();
                            case 3:
                              _context.next = 5;
                              return robotCore.animate({
                                y: 0
                              }, {
                                duration: 500
                              }).start().waitUntilStopped();
                            case 5:
                              _context.next = 0;
                              break;
                            case 7:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                    }, 1e3);
                    doorTopTop = renderer.createNode({
                      x: 375,
                      y: 207,
                      width: 211,
                      height: 129,
                      zIndex: 4,
                      src: doorTopTopImg,
                      parent: testRoot
                    });
                    doorBottomTop = renderer.createNode({
                      x: 375,
                      y: 207 + 129,
                      width: 211,
                      height: 129,
                      zIndex: 4,
                      src: doorBottomTopImg,
                      parent: testRoot
                    });
                    setTimeout(function () {
                      return __async(_this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return openGroundDoors(1e3);
                            case 2:
                              _context2.next = 4;
                              return robot.animate({
                                x: 410
                              }, {
                                duration: 1e3
                              }).start().waitUntilStopped();
                            case 4:
                              shadow.animate({
                                alpha: 0
                              }, {
                                duration: 500
                              }).start();
                              robot.zIndex = 1;
                              robotCore.zIndex = 1;
                              shadow.zIndex = 1;
                              _context2.next = 10;
                              return closeGroundDoors(1e3);
                            case 10:
                              _context2.next = 12;
                              return robot.animate({
                                y: 200
                              }, {
                                duration: 1e3
                              }).start().waitUntilStopped();
                            case 12:
                              shadow.y = 100;
                              _context2.next = 15;
                              return openTopDoors(1e3);
                            case 15:
                              robot.zIndex = 5;
                              robotCore.zIndex = 5;
                              shadow.zIndex = 5;
                              shadow.animate({
                                alpha: 1
                              }, {
                                duration: 500
                              }).start();
                              _context2.next = 21;
                              return shadow.animate({}, {
                                duration: 2e3
                              }).start().waitUntilStopped();
                            case 21:
                              _context2.next = 23;
                              return robot.animate({
                                x: renderer.settings.appWidth
                              }, {
                                duration: 5e3
                              }).start().waitUntilStopped();
                            case 23:
                              _context2.next = 25;
                              return closeTopDoors(1e3);
                            case 25:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2);
                      }));
                    }, 1e3);
                  case 16:
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
//# sourceMappingURL=robot-legacy-BA8fCb80.js.map
