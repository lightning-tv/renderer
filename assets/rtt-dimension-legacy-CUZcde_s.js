;
(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
  System.register(['./rocko-legacy-DFBMEg6f.js'], function (exports, module) {
    'use strict';

    var rockoImg;
    return {
      setters: [function (module) {
        rockoImg = module.r;
      }],
      execute: function execute() {
        exports({
          automation: automation,
          default: test
        });
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
                  return settings.snapshot();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        }
        function test(_0) {
          return __async(this, arguments, function (_ref) {
            var renderer = _ref.renderer,
              testRoot = _ref.testRoot;
            return /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var node, rttNode, rttNode2, rttNode3, nestedRTTNode1, rocko4, i, animation;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    node = renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 1920,
                      height: 1080,
                      color: 255,
                      parent: testRoot
                    });
                    rttNode = renderer.createNode({
                      x: 100,
                      y: 200,
                      width: 300,
                      height: 300,
                      parent: node,
                      rtt: true,
                      zIndex: 5,
                      colorTop: 4293922815,
                      colorBottom: 16777215
                    });
                    renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 300,
                      height: 300,
                      parent: rttNode,
                      color: 4278190335
                    });
                    renderer.createTextNode({
                      x: 0,
                      y: 0,
                      text: "Render to texture",
                      parent: rttNode,
                      fontSize: 48,
                      color: 4294967295,
                      fontFamily: "Ubuntu"
                    });
                    renderer.createNode({
                      x: 50,
                      y: 100,
                      width: 300,
                      height: 300,
                      parent: rttNode,
                      src: rockoImg
                    });
                    rttNode2 = renderer.createNode({
                      x: 500,
                      y: 200,
                      width: 300,
                      height: 300,
                      parent: node,
                      rtt: true,
                      colorTop: 4293922815,
                      colorBottom: 16777215
                    });
                    renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 300,
                      height: 300,
                      parent: rttNode2,
                      color: 3237950463
                    });
                    renderer.createTextNode({
                      x: 0,
                      y: 0,
                      text: "Render to texture",
                      parent: rttNode2,
                      fontSize: 22,
                      color: 4278255615,
                      fontFamily: "Ubuntu"
                    });
                    renderer.createNode({
                      x: 50,
                      y: 100,
                      width: 300,
                      height: 300,
                      parent: rttNode2,
                      src: rockoImg
                    });
                    rttNode3 = renderer.createNode({
                      x: 900,
                      y: 200,
                      width: 800,
                      height: 300,
                      parent: node,
                      rtt: true,
                      colorTop: 1731694079,
                      colorBottom: 2629657087
                    });
                    renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 300,
                      height: 300,
                      parent: rttNode3,
                      color: 3237950463
                    });
                    renderer.createTextNode({
                      x: 0,
                      y: 0,
                      text: "Render to texture",
                      parent: rttNode3,
                      fontSize: 22,
                      color: 4278255615,
                      fontFamily: "Ubuntu"
                    });
                    renderer.createNode({
                      x: 50,
                      y: 100,
                      width: 300,
                      height: 300,
                      parent: rttNode3,
                      src: rockoImg
                    });
                    nestedRTTNode1 = renderer.createNode({
                      x: 400,
                      y: 0,
                      width: 150,
                      height: 150,
                      parent: rttNode3,
                      rtt: true,
                      colorTop: 653385983,
                      colorBottom: 4294967295
                    });
                    renderer.createNode({
                      x: 0,
                      y: 0,
                      width: 150,
                      height: 150,
                      parent: nestedRTTNode1,
                      color: 3237950463
                    });
                    renderer.createTextNode({
                      x: 0,
                      y: 0,
                      text: "Nested",
                      parent: nestedRTTNode1,
                      fontSize: 22,
                      color: 4278255615,
                      fontFamily: "Ubuntu"
                    });
                    rocko4 = renderer.createNode({
                      x: -120,
                      y: 50,
                      width: 300,
                      height: 300,
                      parent: nestedRTTNode1,
                      src: rockoImg
                    });
                    for (i = 0; i < 50; i++) {
                      renderer.createNode({
                        parent: node,
                        x: i % 15 * 120 + 100,
                        y: Math.floor(i / 15) * 120 + 600,
                        width: 100,
                        height: 100,
                        texture: nestedRTTNode1.texture,
                        // Flip every other one of them
                        textureOptions: {
                          flipY: i % 2 === 1
                        }
                      });
                    }
                    animation = rocko4.animate({
                      rotation: 0.3,
                      scale: 1.5,
                      y: 110,
                      x: -50
                    }, {
                      duration: Math.random() * 4e3 + 3e3,
                      loop: true,
                      stopMethod: "reverse",
                      easing: "ease-in-out"
                    });
                    renderer.createTextNode({
                      x: 100,
                      y: 160,
                      text: "RTT Dimension",
                      parent: node,
                      fontSize: 22,
                      color: 4294967295,
                      fontFamily: "Ubuntu"
                    });
                    renderer.createTextNode({
                      x: 900,
                      y: 160,
                      text: "Nested RTT",
                      parent: node,
                      fontSize: 22,
                      color: 4294967295,
                      fontFamily: "Ubuntu"
                    });
                    renderer.createTextNode({
                      x: 100,
                      y: 560,
                      text: "Nested RTT copies",
                      parent: node,
                      fontSize: 22,
                      color: 4294967295,
                      fontFamily: "Ubuntu"
                    });
                    window.addEventListener("keydown", function (e) {
                      if (e.key === "r") {
                        rttNode.rtt = !rttNode.rtt;
                        rttNode2.rtt = !rttNode2.rtt;
                        rttNode3.rtt = !rttNode3.rtt;
                      }
                      if (e.key === "s") {
                        animation.start();
                      }
                      if (e.key === "w") {
                        rttNode.width = rttNode.width === 200 ? 300 : 200;
                        rttNode.height = rttNode.height === 200 ? 300 : 200;
                      }
                    });
                  case 23:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })();
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=rtt-dimension-legacy-CUZcde_s.js.map
