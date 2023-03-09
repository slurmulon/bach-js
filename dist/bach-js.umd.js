(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "teoria", "bach-cljs", "bach-json-schema"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("teoria"), require("bach-cljs"), require("bach-json-schema"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.teoria, global.bachCljs, global.bachJsonSchema);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _teoria, _bachCljs, _bachJsonSchema) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Note = _exports.Music = _exports.MUSICAL_ELEMENTS = _exports.Elements = _exports.Element = _exports.Durations = void 0;
  _exports.chordify = chordify;
  _exports.clamp = clamp$1;
  _exports.compose = _exports.compile = void 0;
  _exports.gcd = gcd$1;
  _exports.invlerp = invlerp$1;
  _exports.lerp = lerp$1;
  _exports.notesIn = notesIn;
  _exports.notesInChord = notesInChord;
  _exports.notesInScale = notesInScale;
  _exports.notesIntersect = notesIntersect;
  _exports.notesOf = void 0;
  _exports.scaleToString = scaleToString;
  _exports.scaleify = scaleify;
  _exports.steps = steps;
  _exports.validate = _exports.valid = void 0;
  _bachCljs = _interopRequireWildcard(_bachCljs);
  _bachJsonSchema = _interopRequireDefault(_bachJsonSchema);
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282;
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }
  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }
  var code$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = /*#__PURE__*/_createClass(function _CodeOrName() {
      _classCallCheck(this, _CodeOrName);
    });
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = /*#__PURE__*/function (_CodeOrName2) {
      _inherits(Name, _CodeOrName2);
      var _super = _createSuper(Name);
      function Name(s) {
        var _this;
        _classCallCheck(this, Name);
        _this = _super.call(this);
        if (!exports.IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier");
        _this.str = s;
        return _this;
      }
      _createClass(Name, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          return false;
        }
      }, {
        key: "names",
        get: function get() {
          return _defineProperty({}, this.str, 1);
        }
      }]);
      return Name;
    }(_CodeOrName);
    exports.Name = Name;
    var _Code = /*#__PURE__*/function (_CodeOrName3) {
      _inherits(_Code, _CodeOrName3);
      var _super2 = _createSuper(_Code);
      function _Code(code) {
        var _this2;
        _classCallCheck(this, _Code);
        _this2 = _super2.call(this);
        _this2._items = typeof code === "string" ? [code] : code;
        return _this2;
      }
      _createClass(_Code, [{
        key: "toString",
        value: function toString() {
          return this.str;
        }
      }, {
        key: "emptyStr",
        value: function emptyStr() {
          if (this._items.length > 1) return false;
          var item = this._items[0];
          return item === "" || item === '""';
        }
      }, {
        key: "str",
        get: function get() {
          var _a;
          return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce(function (s, c) {
            return "".concat(s).concat(c);
          }, "");
        }
      }, {
        key: "names",
        get: function get() {
          var _a;
          return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce(function (names, c) {
            if (c instanceof Name) names[c.str] = (names[c.str] || 0) + 1;
            return names;
          }, {});
        }
      }]);
      return _Code;
    }(_CodeOrName);
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _(strs) {
      var code = [strs[0]];
      var i = 0;
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
      }
      return new _Code(code);
    }
    exports._ = _;
    var plus = new _Code("+");
    function str(strs) {
      var expr = [safeStringify(strs[0])];
      var i = 0;
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
      }
      optimize(expr);
      return new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      if (arg instanceof _Code) code.push.apply(code, _toConsumableArray(arg._items));else if (arg instanceof Name) code.push(arg);else code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      var i = 1;
      while (i < expr.length - 1) {
        if (expr[i] === plus) {
          var res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== undefined) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""') return a;
      if (a === '""') return b;
      if (typeof a == "string") {
        if (b instanceof Name || a[a.length - 1] !== '"') return;
        if (typeof b != "string") return "".concat(a.slice(0, -1)).concat(b, "\"");
        if (b[0] === '"') return a.slice(0, -1) + b.slice(1);
        return;
      }
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name)) return "\"".concat(a).concat(b.slice(1));
      return;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str(_templateObject || (_templateObject = _taggedTemplateLiteral(["", "", ""])), c1, c2);
    }
    exports.strConcat = strConcat;
    // TODO do not allow arrays here
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(".".concat(key)) : _(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[", "]"])), key);
    }
    exports.getProperty = getProperty;
    //Does best effort to format the name properly
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code("".concat(key));
      }
      throw new Error("CodeGen: invalid export name: ".concat(key, ", use explicit $id name mapping"));
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  });
  var scope = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var ValueError = /*#__PURE__*/function (_Error) {
      _inherits(ValueError, _Error);
      var _super3 = _createSuper(ValueError);
      function ValueError(name) {
        var _this3;
        _classCallCheck(this, ValueError);
        _this3 = _super3.call(this, "CodeGen: \"code\" for ".concat(name, " not defined"));
        _this3.value = name.value;
        return _this3;
      }
      return _createClass(ValueError);
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    var UsedValueState;
    (function (UsedValueState) {
      UsedValueState[UsedValueState["Started"] = 0] = "Started";
      UsedValueState[UsedValueState["Completed"] = 1] = "Completed";
    })(UsedValueState = exports.UsedValueState || (exports.UsedValueState = {}));
    exports.varKinds = {
      "const": new code$1.Name("const"),
      "let": new code$1.Name("let"),
      "var": new code$1.Name("var")
    };
    var Scope = /*#__PURE__*/function () {
      function Scope() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          prefixes = _ref2.prefixes,
          parent = _ref2.parent;
        _classCallCheck(this, Scope);
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
      }
      _createClass(Scope, [{
        key: "toName",
        value: function toName(nameOrPrefix) {
          return nameOrPrefix instanceof code$1.Name ? nameOrPrefix : this.name(nameOrPrefix);
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new code$1.Name(this._newName(prefix));
        }
      }, {
        key: "_newName",
        value: function _newName(prefix) {
          var ng = this._names[prefix] || this._nameGroup(prefix);
          return "".concat(prefix).concat(ng.index++);
        }
      }, {
        key: "_nameGroup",
        value: function _nameGroup(prefix) {
          var _a, _b;
          if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) {
            throw new Error("CodeGen: prefix \"".concat(prefix, "\" is not allowed in this scope"));
          }
          return this._names[prefix] = {
            prefix: prefix,
            index: 0
          };
        }
      }]);
      return Scope;
    }();
    exports.Scope = Scope;
    var ValueScopeName = /*#__PURE__*/function (_code$1$Name) {
      _inherits(ValueScopeName, _code$1$Name);
      var _super4 = _createSuper(ValueScopeName);
      function ValueScopeName(prefix, nameStr) {
        var _this4;
        _classCallCheck(this, ValueScopeName);
        _this4 = _super4.call(this, nameStr);
        _this4.prefix = prefix;
        return _this4;
      }
      _createClass(ValueScopeName, [{
        key: "setValue",
        value: function setValue(value, _ref3) {
          var property = _ref3.property,
            itemIndex = _ref3.itemIndex;
          this.value = value;
          this.scopePath = (0, code$1._)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([".", "[", "]"])), new code$1.Name(property), itemIndex);
        }
      }]);
      return ValueScopeName;
    }(code$1.Name);
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code$1._)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"], ["\\n"])));
    var ValueScope = /*#__PURE__*/function (_Scope) {
      _inherits(ValueScope, _Scope);
      var _super5 = _createSuper(ValueScope);
      function ValueScope(opts) {
        var _this5;
        _classCallCheck(this, ValueScope);
        _this5 = _super5.call(this, opts);
        _this5._values = {};
        _this5._scope = opts.scope;
        _this5.opts = _objectSpread(_objectSpread({}, opts), {}, {
          _n: opts.lines ? line : code$1.nil
        });
        return _this5;
      }
      _createClass(ValueScope, [{
        key: "get",
        value: function get() {
          return this._scope;
        }
      }, {
        key: "name",
        value: function name(prefix) {
          return new ValueScopeName(prefix, this._newName(prefix));
        }
      }, {
        key: "value",
        value: function value(nameOrPrefix, _value) {
          var _a;
          if (_value.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
          var name = this.toName(nameOrPrefix);
          var prefix = name.prefix;
          var valueKey = (_a = _value.key) !== null && _a !== void 0 ? _a : _value.ref;
          var vs = this._values[prefix];
          if (vs) {
            var _name = vs.get(valueKey);
            if (_name) return _name;
          } else {
            vs = this._values[prefix] = new Map();
          }
          vs.set(valueKey, name);
          var s = this._scope[prefix] || (this._scope[prefix] = []);
          var itemIndex = s.length;
          s[itemIndex] = _value.ref;
          name.setValue(_value, {
            property: prefix,
            itemIndex: itemIndex
          });
          return name;
        }
      }, {
        key: "getValue",
        value: function getValue(prefix, keyOrRef) {
          var vs = this._values[prefix];
          if (!vs) return;
          return vs.get(keyOrRef);
        }
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._values;
          return this._reduceValues(values, function (name) {
            if (name.scopePath === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return (0, code$1._)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["", "", ""])), scopeName, name.scopePath);
          });
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._values;
          var usedValues = arguments.length > 1 ? arguments[1] : undefined;
          var getCode = arguments.length > 2 ? arguments[2] : undefined;
          return this._reduceValues(values, function (name) {
            if (name.value === undefined) throw new Error("CodeGen: name \"".concat(name, "\" has no value"));
            return name.value.code;
          }, usedValues, getCode);
        }
      }, {
        key: "_reduceValues",
        value: function _reduceValues(values, valueCode) {
          var _this6 = this;
          var usedValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var getCode = arguments.length > 3 ? arguments[3] : undefined;
          var code = code$1.nil;
          var _loop = function _loop() {
            var vs = values[prefix];
            if (!vs) return "continue";
            var nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
            vs.forEach(function (name) {
              if (nameSet.has(name)) return;
              nameSet.set(name, UsedValueState.Started);
              var c = valueCode(name);
              if (c) {
                var _def = _this6.opts.es5 ? exports.varKinds["var"] : exports.varKinds["const"];
                code = (0, code$1._)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["", "", " ", " = ", ";", ""])), code, _def, name, c, _this6.opts._n);
              } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) {
                code = (0, code$1._)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", "", "", ""])), code, c, _this6.opts._n);
              } else {
                throw new ValueError(name);
              }
              nameSet.set(name, UsedValueState.Completed);
            });
          };
          for (var prefix in values) {
            var _ret = _loop();
            if (_ret === "continue") continue;
          }
          return code;
        }
      }]);
      return ValueScope;
    }(Scope);
    exports.ValueScope = ValueScope;
  });
  var codegen = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_2 = code$1;
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return code_2._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return code_2.str;
      }
    });
    Object.defineProperty(exports, "strConcat", {
      enumerable: true,
      get: function get() {
        return code_2.strConcat;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return code_2.nil;
      }
    });
    Object.defineProperty(exports, "getProperty", {
      enumerable: true,
      get: function get() {
        return code_2.getProperty;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return code_2.stringify;
      }
    });
    Object.defineProperty(exports, "regexpCode", {
      enumerable: true,
      get: function get() {
        return code_2.regexpCode;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return code_2.Name;
      }
    });
    var scope_2 = scope;
    Object.defineProperty(exports, "Scope", {
      enumerable: true,
      get: function get() {
        return scope_2.Scope;
      }
    });
    Object.defineProperty(exports, "ValueScope", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScope;
      }
    });
    Object.defineProperty(exports, "ValueScopeName", {
      enumerable: true,
      get: function get() {
        return scope_2.ValueScopeName;
      }
    });
    Object.defineProperty(exports, "varKinds", {
      enumerable: true,
      get: function get() {
        return scope_2.varKinds;
      }
    });
    exports.operators = {
      GT: new code$1._Code(">"),
      GTE: new code$1._Code(">="),
      LT: new code$1._Code("<"),
      LTE: new code$1._Code("<="),
      EQ: new code$1._Code("==="),
      NEQ: new code$1._Code("!=="),
      NOT: new code$1._Code("!"),
      OR: new code$1._Code("||"),
      AND: new code$1._Code("&&"),
      ADD: new code$1._Code("+")
    };
    var Node = /*#__PURE__*/function () {
      function Node() {
        _classCallCheck(this, Node);
      }
      _createClass(Node, [{
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(_names, _constants) {
          return this;
        }
      }]);
      return Node;
    }();
    var Def = /*#__PURE__*/function (_Node) {
      _inherits(Def, _Node);
      var _super6 = _createSuper(Def);
      function Def(varKind, name, rhs) {
        var _this7;
        _classCallCheck(this, Def);
        _this7 = _super6.call(this);
        _this7.varKind = varKind;
        _this7.name = name;
        _this7.rhs = rhs;
        return _this7;
      }
      _createClass(Def, [{
        key: "render",
        value: function render(_ref4) {
          var es5 = _ref4.es5,
            _n = _ref4._n;
          var varKind = es5 ? scope.varKinds["var"] : this.varKind;
          var rhs = this.rhs === undefined ? "" : " = ".concat(this.rhs);
          return "".concat(varKind, " ").concat(this.name).concat(rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!names[this.name.str]) return;
          if (this.rhs) this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.rhs instanceof code$1._CodeOrName ? this.rhs.names : {};
        }
      }]);
      return Def;
    }(Node);
    var Assign = /*#__PURE__*/function (_Node2) {
      _inherits(Assign, _Node2);
      var _super7 = _createSuper(Assign);
      function Assign(lhs, rhs, sideEffects) {
        var _this8;
        _classCallCheck(this, Assign);
        _this8 = _super7.call(this);
        _this8.lhs = lhs;
        _this8.rhs = rhs;
        _this8.sideEffects = sideEffects;
        return _this8;
      }
      _createClass(Assign, [{
        key: "render",
        value: function render(_ref5) {
          var _n = _ref5._n;
          return "".concat(this.lhs, " = ").concat(this.rhs, ";") + _n;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (this.lhs instanceof code$1.Name && !names[this.lhs.str] && !this.sideEffects) return;
          this.rhs = optimizeExpr(this.rhs, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = this.lhs instanceof code$1.Name ? {} : _objectSpread({}, this.lhs.names);
          return addExprNames(names, this.rhs);
        }
      }]);
      return Assign;
    }(Node);
    var AssignOp = /*#__PURE__*/function (_Assign) {
      _inherits(AssignOp, _Assign);
      var _super8 = _createSuper(AssignOp);
      function AssignOp(lhs, op, rhs, sideEffects) {
        var _this9;
        _classCallCheck(this, AssignOp);
        _this9 = _super8.call(this, lhs, rhs, sideEffects);
        _this9.op = op;
        return _this9;
      }
      _createClass(AssignOp, [{
        key: "render",
        value: function render(_ref6) {
          var _n = _ref6._n;
          return "".concat(this.lhs, " ").concat(this.op, "= ").concat(this.rhs, ";") + _n;
        }
      }]);
      return AssignOp;
    }(Assign);
    var Label = /*#__PURE__*/function (_Node3) {
      _inherits(Label, _Node3);
      var _super9 = _createSuper(Label);
      function Label(label) {
        var _this10;
        _classCallCheck(this, Label);
        _this10 = _super9.call(this);
        _this10.label = label;
        _this10.names = {};
        return _this10;
      }
      _createClass(Label, [{
        key: "render",
        value: function render(_ref7) {
          var _n = _ref7._n;
          return "".concat(this.label, ":") + _n;
        }
      }]);
      return Label;
    }(Node);
    var Break = /*#__PURE__*/function (_Node4) {
      _inherits(Break, _Node4);
      var _super10 = _createSuper(Break);
      function Break(label) {
        var _this11;
        _classCallCheck(this, Break);
        _this11 = _super10.call(this);
        _this11.label = label;
        _this11.names = {};
        return _this11;
      }
      _createClass(Break, [{
        key: "render",
        value: function render(_ref8) {
          var _n = _ref8._n;
          var label = this.label ? " ".concat(this.label) : "";
          return "break".concat(label, ";") + _n;
        }
      }]);
      return Break;
    }(Node);
    var Throw = /*#__PURE__*/function (_Node5) {
      _inherits(Throw, _Node5);
      var _super11 = _createSuper(Throw);
      function Throw(error) {
        var _this12;
        _classCallCheck(this, Throw);
        _this12 = _super11.call(this);
        _this12.error = error;
        return _this12;
      }
      _createClass(Throw, [{
        key: "render",
        value: function render(_ref9) {
          var _n = _ref9._n;
          return "throw ".concat(this.error, ";") + _n;
        }
      }, {
        key: "names",
        get: function get() {
          return this.error.names;
        }
      }]);
      return Throw;
    }(Node);
    var AnyCode = /*#__PURE__*/function (_Node6) {
      _inherits(AnyCode, _Node6);
      var _super12 = _createSuper(AnyCode);
      function AnyCode(code) {
        var _this13;
        _classCallCheck(this, AnyCode);
        _this13 = _super12.call(this);
        _this13.code = code;
        return _this13;
      }
      _createClass(AnyCode, [{
        key: "render",
        value: function render(_ref10) {
          var _n = _ref10._n;
          return "".concat(this.code, ";") + _n;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          return "".concat(this.code) ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          this.code = optimizeExpr(this.code, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return this.code instanceof code$1._CodeOrName ? this.code.names : {};
        }
      }]);
      return AnyCode;
    }(Node);
    var ParentNode = /*#__PURE__*/function (_Node7) {
      _inherits(ParentNode, _Node7);
      var _super13 = _createSuper(ParentNode);
      function ParentNode() {
        var _this14;
        var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _classCallCheck(this, ParentNode);
        _this14 = _super13.call(this);
        _this14.nodes = nodes;
        return _this14;
      }
      _createClass(ParentNode, [{
        key: "render",
        value: function render(opts) {
          return this.nodes.reduce(function (code, n) {
            return code + n.render(opts);
          }, "");
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            var n = nodes[i].optimizeNodes();
            if (Array.isArray(n)) nodes.splice.apply(nodes, [i, 1].concat(_toConsumableArray(n)));else if (n) nodes[i] = n;else nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var nodes = this.nodes;
          var i = nodes.length;
          while (i--) {
            // iterating backwards improves 1-pass optimization
            var n = nodes[i];
            if (n.optimizeNames(names, constants)) continue;
            subtractNames(names, n.names);
            nodes.splice(i, 1);
          }
          return nodes.length > 0 ? this : undefined;
        }
      }, {
        key: "names",
        get: function get() {
          return this.nodes.reduce(function (names, n) {
            return addNames(names, n.names);
          }, {});
        }
      }]);
      return ParentNode;
    }(Node);
    var BlockNode = /*#__PURE__*/function (_ParentNode) {
      _inherits(BlockNode, _ParentNode);
      var _super14 = _createSuper(BlockNode);
      function BlockNode() {
        _classCallCheck(this, BlockNode);
        return _super14.apply(this, arguments);
      }
      _createClass(BlockNode, [{
        key: "render",
        value: function render(opts) {
          return "{" + opts._n + _get(_getPrototypeOf(BlockNode.prototype), "render", this).call(this, opts) + "}" + opts._n;
        }
      }]);
      return BlockNode;
    }(ParentNode);
    var Root = /*#__PURE__*/function (_ParentNode2) {
      _inherits(Root, _ParentNode2);
      var _super15 = _createSuper(Root);
      function Root() {
        _classCallCheck(this, Root);
        return _super15.apply(this, arguments);
      }
      return _createClass(Root);
    }(ParentNode);
    var Else = /*#__PURE__*/function (_BlockNode) {
      _inherits(Else, _BlockNode);
      var _super16 = _createSuper(Else);
      function Else() {
        _classCallCheck(this, Else);
        return _super16.apply(this, arguments);
      }
      return _createClass(Else);
    }(BlockNode);
    Else.kind = "else";
    var If = /*#__PURE__*/function (_BlockNode2) {
      _inherits(If, _BlockNode2);
      var _super17 = _createSuper(If);
      function If(condition, nodes) {
        var _this15;
        _classCallCheck(this, If);
        _this15 = _super17.call(this, nodes);
        _this15.condition = condition;
        return _this15;
      }
      _createClass(If, [{
        key: "render",
        value: function render(opts) {
          var code = "if(".concat(this.condition, ")") + _get(_getPrototypeOf(If.prototype), "render", this).call(this, opts);
          if (this["else"]) code += "else " + this["else"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          _get(_getPrototypeOf(If.prototype), "optimizeNodes", this).call(this);
          var cond = this.condition;
          if (cond === true) return this.nodes; // else is ignored here
          var e = this["else"];
          if (e) {
            var ns = e.optimizeNodes();
            e = this["else"] = Array.isArray(ns) ? new Else(ns) : ns;
          }
          if (e) {
            if (cond === false) return e instanceof If ? e : e.nodes;
            if (this.nodes.length) return this;
            return new If(not(cond), e instanceof If ? [e] : e.nodes);
          }
          if (cond === false || !this.nodes.length) return undefined;
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a;
          this["else"] = (_a = this["else"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          if (!(_get(_getPrototypeOf(If.prototype), "optimizeNames", this).call(this, names, constants) || this["else"])) return;
          this.condition = optimizeExpr(this.condition, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _get(_getPrototypeOf(If.prototype), "names", this);
          addExprNames(names, this.condition);
          if (this["else"]) addNames(names, this["else"].names);
          return names;
        }
      }]);
      return If;
    }(BlockNode);
    If.kind = "if";
    var For = /*#__PURE__*/function (_BlockNode3) {
      _inherits(For, _BlockNode3);
      var _super18 = _createSuper(For);
      function For() {
        _classCallCheck(this, For);
        return _super18.apply(this, arguments);
      }
      return _createClass(For);
    }(BlockNode);
    For.kind = "for";
    var ForLoop = /*#__PURE__*/function (_For) {
      _inherits(ForLoop, _For);
      var _super19 = _createSuper(ForLoop);
      function ForLoop(iteration) {
        var _this16;
        _classCallCheck(this, ForLoop);
        _this16 = _super19.call(this);
        _this16.iteration = iteration;
        return _this16;
      }
      _createClass(ForLoop, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.iteration, ")") + _get(_getPrototypeOf(ForLoop.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_get(_getPrototypeOf(ForLoop.prototype), "optimizeNames", this).call(this, names, constants)) return;
          this.iteration = optimizeExpr(this.iteration, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_get(_getPrototypeOf(ForLoop.prototype), "names", this), this.iteration.names);
        }
      }]);
      return ForLoop;
    }(For);
    var ForRange = /*#__PURE__*/function (_For2) {
      _inherits(ForRange, _For2);
      var _super20 = _createSuper(ForRange);
      function ForRange(varKind, name, from, to) {
        var _this17;
        _classCallCheck(this, ForRange);
        _this17 = _super20.call(this);
        _this17.varKind = varKind;
        _this17.name = name;
        _this17.from = from;
        _this17.to = to;
        return _this17;
      }
      _createClass(ForRange, [{
        key: "render",
        value: function render(opts) {
          var varKind = opts.es5 ? scope.varKinds["var"] : this.varKind;
          var name = this.name,
            from = this.from,
            to = this.to;
          return "for(".concat(varKind, " ").concat(name, "=").concat(from, "; ").concat(name, "<").concat(to, "; ").concat(name, "++)") + _get(_getPrototypeOf(ForRange.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "names",
        get: function get() {
          var names = addExprNames(_get(_getPrototypeOf(ForRange.prototype), "names", this), this.from);
          return addExprNames(names, this.to);
        }
      }]);
      return ForRange;
    }(For);
    var ForIter = /*#__PURE__*/function (_For3) {
      _inherits(ForIter, _For3);
      var _super21 = _createSuper(ForIter);
      function ForIter(loop, varKind, name, iterable) {
        var _this18;
        _classCallCheck(this, ForIter);
        _this18 = _super21.call(this);
        _this18.loop = loop;
        _this18.varKind = varKind;
        _this18.name = name;
        _this18.iterable = iterable;
        return _this18;
      }
      _createClass(ForIter, [{
        key: "render",
        value: function render(opts) {
          return "for(".concat(this.varKind, " ").concat(this.name, " ").concat(this.loop, " ").concat(this.iterable, ")") + _get(_getPrototypeOf(ForIter.prototype), "render", this).call(this, opts);
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          if (!_get(_getPrototypeOf(ForIter.prototype), "optimizeNames", this).call(this, names, constants)) return;
          this.iterable = optimizeExpr(this.iterable, names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          return addNames(_get(_getPrototypeOf(ForIter.prototype), "names", this), this.iterable.names);
        }
      }]);
      return ForIter;
    }(For);
    var Func = /*#__PURE__*/function (_BlockNode4) {
      _inherits(Func, _BlockNode4);
      var _super22 = _createSuper(Func);
      function Func(name, args, async) {
        var _this19;
        _classCallCheck(this, Func);
        _this19 = _super22.call(this);
        _this19.name = name;
        _this19.args = args;
        _this19.async = async;
        return _this19;
      }
      _createClass(Func, [{
        key: "render",
        value: function render(opts) {
          var _async = this.async ? "async " : "";
          return "".concat(_async, "function ").concat(this.name, "(").concat(this.args, ")") + _get(_getPrototypeOf(Func.prototype), "render", this).call(this, opts);
        }
      }]);
      return Func;
    }(BlockNode);
    Func.kind = "func";
    var Return = /*#__PURE__*/function (_ParentNode3) {
      _inherits(Return, _ParentNode3);
      var _super23 = _createSuper(Return);
      function Return() {
        _classCallCheck(this, Return);
        return _super23.apply(this, arguments);
      }
      _createClass(Return, [{
        key: "render",
        value: function render(opts) {
          return "return " + _get(_getPrototypeOf(Return.prototype), "render", this).call(this, opts);
        }
      }]);
      return Return;
    }(ParentNode);
    Return.kind = "return";
    var Try = /*#__PURE__*/function (_BlockNode5) {
      _inherits(Try, _BlockNode5);
      var _super24 = _createSuper(Try);
      function Try() {
        _classCallCheck(this, Try);
        return _super24.apply(this, arguments);
      }
      _createClass(Try, [{
        key: "render",
        value: function render(opts) {
          var code = "try" + _get(_getPrototypeOf(Try.prototype), "render", this).call(this, opts);
          if (this["catch"]) code += this["catch"].render(opts);
          if (this["finally"]) code += this["finally"].render(opts);
          return code;
        }
      }, {
        key: "optimizeNodes",
        value: function optimizeNodes() {
          var _a, _b;
          _get(_getPrototypeOf(Try.prototype), "optimizeNodes", this).call(this);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
          return this;
        }
      }, {
        key: "optimizeNames",
        value: function optimizeNames(names, constants) {
          var _a, _b;
          _get(_getPrototypeOf(Try.prototype), "optimizeNames", this).call(this, names, constants);
          (_a = this["catch"]) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
          (_b = this["finally"]) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
          return this;
        }
      }, {
        key: "names",
        get: function get() {
          var names = _get(_getPrototypeOf(Try.prototype), "names", this);
          if (this["catch"]) addNames(names, this["catch"].names);
          if (this["finally"]) addNames(names, this["finally"].names);
          return names;
        }
      }]);
      return Try;
    }(BlockNode);
    var Catch = /*#__PURE__*/function (_BlockNode6) {
      _inherits(Catch, _BlockNode6);
      var _super25 = _createSuper(Catch);
      function Catch(error) {
        var _this20;
        _classCallCheck(this, Catch);
        _this20 = _super25.call(this);
        _this20.error = error;
        return _this20;
      }
      _createClass(Catch, [{
        key: "render",
        value: function render(opts) {
          return "catch(".concat(this.error, ")") + _get(_getPrototypeOf(Catch.prototype), "render", this).call(this, opts);
        }
      }]);
      return Catch;
    }(BlockNode);
    Catch.kind = "catch";
    var Finally = /*#__PURE__*/function (_BlockNode7) {
      _inherits(Finally, _BlockNode7);
      var _super26 = _createSuper(Finally);
      function Finally() {
        _classCallCheck(this, Finally);
        return _super26.apply(this, arguments);
      }
      _createClass(Finally, [{
        key: "render",
        value: function render(opts) {
          return "finally" + _get(_getPrototypeOf(Finally.prototype), "render", this).call(this, opts);
        }
      }]);
      return Finally;
    }(BlockNode);
    Finally.kind = "finally";
    var CodeGen = /*#__PURE__*/function () {
      function CodeGen(extScope) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, CodeGen);
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = _objectSpread(_objectSpread({}, opts), {}, {
          _n: opts.lines ? "\n" : ""
        });
        this._extScope = extScope;
        this._scope = new scope.Scope({
          parent: extScope
        });
        this._nodes = [new Root()];
      }
      _createClass(CodeGen, [{
        key: "toString",
        value: function toString() {
          return this._root.render(this.opts);
        }
        // returns unique name in the internal scope
      }, {
        key: "name",
        value: function name(prefix) {
          return this._scope.name(prefix);
        }
        // reserves unique name in the external scope
      }, {
        key: "scopeName",
        value: function scopeName(prefix) {
          return this._extScope.name(prefix);
        }
        // reserves unique name in the external scope and assigns value to it
      }, {
        key: "scopeValue",
        value: function scopeValue(prefixOrName, value) {
          var name = this._extScope.value(prefixOrName, value);
          var vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
          vs.add(name);
          return name;
        }
      }, {
        key: "getScopeValue",
        value: function getScopeValue(prefix, keyOrRef) {
          return this._extScope.getValue(prefix, keyOrRef);
        }
        // return code that assigns values in the external scope to the names that are used internally
        // (same names that were returned by gen.scopeName or gen.scopeValue)
      }, {
        key: "scopeRefs",
        value: function scopeRefs(scopeName) {
          return this._extScope.scopeRefs(scopeName, this._values);
        }
      }, {
        key: "scopeCode",
        value: function scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
      }, {
        key: "_def",
        value: function _def(varKind, nameOrPrefix, rhs, constant) {
          var name = this._scope.toName(nameOrPrefix);
          if (rhs !== undefined && constant) this._constants[name.str] = rhs;
          this._leafNode(new Def(varKind, name, rhs));
          return name;
        }
        // `const` declaration (`var` in es5 mode)
      }, {
        key: "const",
        value: function _const(nameOrPrefix, rhs, _constant) {
          return this._def(scope.varKinds["const"], nameOrPrefix, rhs, _constant);
        }
        // `let` declaration with optional assignment (`var` in es5 mode)
      }, {
        key: "let",
        value: function _let(nameOrPrefix, rhs, _constant) {
          return this._def(scope.varKinds["let"], nameOrPrefix, rhs, _constant);
        }
        // `var` declaration with optional assignment
      }, {
        key: "var",
        value: function _var(nameOrPrefix, rhs, _constant) {
          return this._def(scope.varKinds["var"], nameOrPrefix, rhs, _constant);
        }
        // assignment code
      }, {
        key: "assign",
        value: function assign(lhs, rhs, sideEffects) {
          return this._leafNode(new Assign(lhs, rhs, sideEffects));
        }
        // `+=` code
      }, {
        key: "add",
        value: function add(lhs, rhs) {
          return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
        }
        // appends passed SafeExpr to code or executes Block
      }, {
        key: "code",
        value: function code(c) {
          if (typeof c == "function") c();else if (c !== code$1.nil) this._leafNode(new AnyCode(c));
          return this;
        }
        // returns code for object literal for the passed argument list of key-value pairs
      }, {
        key: "object",
        value: function object() {
          var code = ["{"];
          for (var _len4 = arguments.length, keyValues = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            keyValues[_key4] = arguments[_key4];
          }
          for (var _i2 = 0, _keyValues = keyValues; _i2 < _keyValues.length; _i2++) {
            var _keyValues$_i = _slicedToArray(_keyValues[_i2], 2),
              key = _keyValues$_i[0],
              value = _keyValues$_i[1];
            if (code.length > 1) code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
              code.push(":");
              (0, code$1.addCodeArg)(code, value);
            }
          }
          code.push("}");
          return new code$1._Code(code);
        }
        // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      }, {
        key: "if",
        value: function _if(condition, thenBody, elseBody) {
          this._blockNode(new If(condition));
          if (thenBody && elseBody) {
            this.code(thenBody)["else"]().code(elseBody).endIf();
          } else if (thenBody) {
            this.code(thenBody).endIf();
          } else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
          }
          return this;
        }
        // `else if` clause - invalid without `if` or after `else` clauses
      }, {
        key: "elseIf",
        value: function elseIf(condition) {
          return this._elseNode(new If(condition));
        }
        // `else` clause - only valid after `if` or `else if` clauses
      }, {
        key: "else",
        value: function _else() {
          return this._elseNode(new Else());
        }
        // end `if` statement (needed if gen.if was used only with condition)
      }, {
        key: "endIf",
        value: function endIf() {
          return this._endBlockNode(If, Else);
        }
      }, {
        key: "_for",
        value: function _for(node, forBody) {
          this._blockNode(node);
          if (forBody) this.code(forBody).endFor();
          return this;
        }
        // a generic `for` clause (or statement if `forBody` is passed)
      }, {
        key: "for",
        value: function _for(iteration, forBody) {
          return this._for(new ForLoop(iteration), forBody);
        }
        // `for` statement for a range of values
      }, {
        key: "forRange",
        value: function forRange(nameOrPrefix, from, to, forBody) {
          var varKind = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.es5 ? scope.varKinds["var"] : scope.varKinds["let"];
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForRange(varKind, name, from, to), function () {
            return forBody(name);
          });
        }
        // `for-of` statement (in es5 mode replace with a normal for loop)
      }, {
        key: "forOf",
        value: function forOf(nameOrPrefix, iterable, forBody) {
          var _this21 = this;
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : scope.varKinds["const"];
          var name = this._scope.toName(nameOrPrefix);
          if (this.opts.es5) {
            var arr = iterable instanceof code$1.Name ? iterable : this["var"]("_arr", iterable);
            return this.forRange("_i", 0, (0, code$1._)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["", ".length"])), arr), function (i) {
              _this21["var"](name, (0, code$1._)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["", "[", "]"])), arr, i));
              forBody(name);
            });
          }
          return this._for(new ForIter("of", varKind, name, iterable), function () {
            return forBody(name);
          });
        }
        // `for-in` statement.
        // With option `ownProperties` replaced with a `for-of` loop for object keys
      }, {
        key: "forIn",
        value: function forIn(nameOrPrefix, obj, forBody) {
          var varKind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.es5 ? scope.varKinds["var"] : scope.varKinds["const"];
          if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code$1._)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Object.keys(", ")"])), obj), forBody);
          }
          var name = this._scope.toName(nameOrPrefix);
          return this._for(new ForIter("in", varKind, name, obj), function () {
            return forBody(name);
          });
        }
        // end `for` loop
      }, {
        key: "endFor",
        value: function endFor() {
          return this._endBlockNode(For);
        }
        // `label` statement
      }, {
        key: "label",
        value: function label(_label) {
          return this._leafNode(new Label(_label));
        }
        // `break` statement
      }, {
        key: "break",
        value: function _break(label) {
          return this._leafNode(new Break(label));
        }
        // `return` statement
      }, {
        key: "return",
        value: function _return(value) {
          var node = new Return();
          this._blockNode(node);
          this.code(value);
          if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(Return);
        }
        // `try` statement
      }, {
        key: "try",
        value: function _try(tryBody, catchCode, finallyCode) {
          if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
          var node = new Try();
          this._blockNode(node);
          this.code(tryBody);
          if (catchCode) {
            var _error = this.name("e");
            this._currNode = node["catch"] = new Catch(_error);
            catchCode(_error);
          }
          if (finallyCode) {
            this._currNode = node["finally"] = new Finally();
            this.code(finallyCode);
          }
          return this._endBlockNode(Catch, Finally);
        }
        // `throw` statement
      }, {
        key: "throw",
        value: function _throw(error) {
          return this._leafNode(new Throw(error));
        }
        // start self-balancing block
      }, {
        key: "block",
        value: function block(body, nodeCount) {
          this._blockStarts.push(this._nodes.length);
          if (body) this.code(body).endBlock(nodeCount);
          return this;
        }
        // end the current self-balancing block
      }, {
        key: "endBlock",
        value: function endBlock(nodeCount) {
          var len = this._blockStarts.pop();
          if (len === undefined) throw new Error("CodeGen: not in self-balancing block");
          var toClose = this._nodes.length - len;
          if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) {
            throw new Error("CodeGen: wrong number of nodes: ".concat(toClose, " vs ").concat(nodeCount, " expected"));
          }
          this._nodes.length = len;
          return this;
        }
        // `function` heading (or definition if funcBody is passed)
      }, {
        key: "func",
        value: function func(name) {
          var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : code$1.nil;
          var async = arguments.length > 2 ? arguments[2] : undefined;
          var funcBody = arguments.length > 3 ? arguments[3] : undefined;
          this._blockNode(new Func(name, args, async));
          if (funcBody) this.code(funcBody).endFunc();
          return this;
        }
        // end function definition
      }, {
        key: "endFunc",
        value: function endFunc() {
          return this._endBlockNode(Func);
        }
      }, {
        key: "optimize",
        value: function optimize() {
          var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          while (n-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
          }
        }
      }, {
        key: "_leafNode",
        value: function _leafNode(node) {
          this._currNode.nodes.push(node);
          return this;
        }
      }, {
        key: "_blockNode",
        value: function _blockNode(node) {
          this._currNode.nodes.push(node);
          this._nodes.push(node);
        }
      }, {
        key: "_endBlockNode",
        value: function _endBlockNode(N1, N2) {
          var n = this._currNode;
          if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
          }
          throw new Error("CodeGen: not in block \"".concat(N2 ? "".concat(N1.kind, "/").concat(N2.kind) : N1.kind, "\""));
        }
      }, {
        key: "_elseNode",
        value: function _elseNode(node) {
          var n = this._currNode;
          if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
          }
          this._currNode = n["else"] = node;
          return this;
        }
      }, {
        key: "_root",
        get: function get() {
          return this._nodes[0];
        }
      }, {
        key: "_currNode",
        get: function get() {
          var ns = this._nodes;
          return ns[ns.length - 1];
        },
        set: function set(node) {
          var ns = this._nodes;
          ns[ns.length - 1] = node;
        }
      }]);
      return CodeGen;
    }();
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code$1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code$1.Name) return replaceName(expr);
      if (!canOptimize(expr)) return expr;
      return new code$1._Code(expr._items.reduce(function (items, c) {
        if (c instanceof code$1.Name) c = replaceName(c);
        if (c instanceof code$1._Code) items.push.apply(items, _toConsumableArray(c._items));else items.push(c);
        return items;
      }, []));
      function replaceName(n) {
        var c = constants[n.str];
        if (c === undefined || names[n.str] !== 1) return n;
        delete names[n.str];
        return c;
      }
      function canOptimize(e) {
        return e instanceof code$1._Code && e._items.some(function (c) {
          return c instanceof code$1.Name && names[c.str] === 1 && constants[c.str] !== undefined;
        });
      }
    }
    function subtractNames(names, from) {
      for (var n in from) names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code$1._)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["!", ""])), par(x));
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    // boolean AND (&&) expression with the passed arguments
    function and() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    // boolean OR (||) expression with the passed arguments
    function or() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return function (x, y) {
        return x === code$1.nil ? y : y === code$1.nil ? x : (0, code$1._)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["", " ", " ", ""])), par(x), op, par(y));
      };
    }
    function par(x) {
      return x instanceof code$1.Name ? x : (0, code$1._)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["(", ")"])), x);
    }
  });
  var util = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;

    // TODO refactor to use Set
    function toHash(arr) {
      var hash = {};
      var _iterator4 = _createForOfIteratorHelper(arr),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          hash[item] = true;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return hash;
    }
    exports.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      if (typeof schema == "boolean") return schema;
      if (Object.keys(schema).length === 0) return true;
      checkUnknownRules(it, schema);
      return !schemaHasRules(schema, it.self.RULES.all);
    }
    exports.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it) {
      var schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : it.schema;
      var opts = it.opts,
        self = it.self;
      if (!opts.strictSchema) return;
      if (typeof schema === "boolean") return;
      var rules = self.RULES.keywords;
      for (var key in schema) {
        if (!rules[key]) checkStrictMode(it, "unknown keyword: \"".concat(key, "\""));
      }
    }
    exports.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (rules[key]) return true;
      return false;
    }
    exports.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES) {
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (key !== "$ref" && RULES.all[key]) return true;
      return false;
    }
    exports.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal(_ref11, schema, keyword, $data) {
      var topSchemaRef = _ref11.topSchemaRef,
        schemaPath = _ref11.schemaPath;
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean") return schema;
        if (typeof schema == "string") return (0, codegen._)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["", ""])), schema);
      }
      return (0, codegen._)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["", "", "", ""])), topSchemaRef, schemaPath, (0, codegen.getProperty)(keyword));
    }
    exports.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    exports.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    exports.escapeFragment = escapeFragment;
    function escapeJsonPointer(str) {
      if (typeof str == "number") return "".concat(str);
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.escapeJsonPointer = escapeJsonPointer;
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports.unescapeJsonPointer = unescapeJsonPointer;
    function eachItem(xs, f) {
      if (Array.isArray(xs)) {
        var _iterator5 = _createForOfIteratorHelper(xs),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var x = _step5.value;
            f(x);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } else {
        f(xs);
      }
    }
    exports.eachItem = eachItem;
    function makeMergeEvaluated(_ref12) {
      var mergeNames = _ref12.mergeNames,
        mergeToName = _ref12.mergeToName,
        mergeValues = _ref12.mergeValues,
        resultToName = _ref12.resultToName;
      return function (gen, from, to, toName) {
        var res = to === undefined ? from : to instanceof codegen.Name ? (from instanceof codegen.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === codegen.Name && !(res instanceof codegen.Name) ? resultToName(gen, res) : res;
      };
    }
    exports.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: function mergeNames(gen, from, to) {
          return gen["if"]((0, codegen._)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
            gen["if"]((0, codegen._)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["", " === true"])), from), function () {
              return gen.assign(to, true);
            }, function () {
              return gen.assign(to, (0, codegen._)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["", " || {}"])), to)).code((0, codegen._)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Object.assign(", ", ", ")"])), to, from));
            });
          });
        },
        mergeToName: function mergeToName(gen, from, to) {
          return gen["if"]((0, codegen._)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["", " !== true"])), to), function () {
            if (from === true) {
              gen.assign(to, true);
            } else {
              gen.assign(to, (0, codegen._)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["", " || {}"])), to));
              setEvaluated(gen, to, from);
            }
          });
        },
        mergeValues: function mergeValues(from, to) {
          return from === true ? true : _objectSpread(_objectSpread({}, from), to);
        },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: function mergeNames(gen, from, to) {
          return gen["if"]((0, codegen._)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["", " !== true && ", " !== undefined"])), to, from), function () {
            return gen.assign(to, (0, codegen._)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["", " === true ? true : ", " > ", " ? ", " : ", ""])), from, to, from, to, from));
          });
        },
        mergeToName: function mergeToName(gen, from, to) {
          return gen["if"]((0, codegen._)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["", " !== true"])), to), function () {
            return gen.assign(to, from === true ? true : (0, codegen._)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["", " > ", " ? ", " : ", ""])), to, from, to, from));
          });
        },
        mergeValues: function mergeValues(from, to) {
          return from === true ? true : Math.max(from, to);
        },
        resultToName: function resultToName(gen, items) {
          return gen["var"]("items", items);
        }
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === true) return gen["var"]("props", true);
      var props = gen["var"]("props", (0, codegen._)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["{}"]))));
      if (ps !== undefined) setEvaluated(gen, props, ps);
      return props;
    }
    exports.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach(function (p) {
        return gen.assign((0, codegen._)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["", "", ""])), props, (0, codegen.getProperty)(p)), true);
      });
    }
    exports.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f) {
      return gen.scopeValue("func", {
        ref: f,
        code: snippets[f.code] || (snippets[f.code] = new code$1._Code(f.code))
      });
    }
    exports.useFunc = useFunc;
    var Type;
    (function (Type) {
      Type[Type["Num"] = 0] = "Num";
      Type[Type["Str"] = 1] = "Str";
    })(Type = exports.Type || (exports.Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      // let path
      if (dataProp instanceof codegen.Name) {
        var isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen._)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\"[\" + ", " + \"]\""])), dataProp) : (0, codegen._)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\"['\" + ", " + \"']\""])), dataProp) : isNumber ? (0, codegen._)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\"/\" + ", ""])), dataProp) : (0, codegen._)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\//g, \"~1\")"], ["\"/\" + ", ".replace(/~/g, \"~0\").replace(/\\\\//g, \"~1\")"])), dataProp); // TODO maybe use global escapePointer
      }

      return jsPropertySyntax ? (0, codegen.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
    }
    exports.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : it.opts.strictSchema;
      if (!mode) return;
      msg = "strict mode: ".concat(msg);
      if (mode === true) throw new Error(msg);
      it.self.logger.warn(msg);
    }
    exports.checkStrictMode = checkStrictMode;
  });
  var names = {
    // validation function arguments
    data: new codegen.Name("data"),
    // args passed from referencing schema
    valCxt: new codegen.Name("valCxt"),
    instancePath: new codegen.Name("instancePath"),
    parentData: new codegen.Name("parentData"),
    parentDataProperty: new codegen.Name("parentDataProperty"),
    rootData: new codegen.Name("rootData"),
    dynamicAnchors: new codegen.Name("dynamicAnchors"),
    // function scoped variables
    vErrors: new codegen.Name("vErrors"),
    errors: new codegen.Name("errors"),
    "this": new codegen.Name("this"),
    // "globals"
    self: new codegen.Name("self"),
    scope: new codegen.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new codegen.Name("json"),
    jsonPos: new codegen.Name("jsonPos"),
    jsonLen: new codegen.Name("jsonLen"),
    jsonPart: new codegen.Name("jsonPart")
  };
  var _default$A = names;
  var names_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$A
  }, '__esModule', {
    value: true
  });
  var errors = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
    exports.keywordError = {
      message: function message(_ref13) {
        var keyword = _ref13.keyword;
        return (0, codegen.str)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["must pass \"", "\" keyword validation"])), keyword);
      }
    };
    exports.keyword$DataError = {
      message: function message(_ref14) {
        var keyword = _ref14.keyword,
          schemaType = _ref14.schemaType;
        return schemaType ? (0, codegen.str)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\"", "\" keyword must be ", " ($data)"])), keyword, schemaType) : (0, codegen.str)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\"", "\" keyword is invalid ($data)"])), keyword);
      }
    };
    function reportError(cxt) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
      var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
      var overrideAllErrors = arguments.length > 3 ? arguments[3] : undefined;
      var it = cxt.it;
      var gen = it.gen,
        compositeRule = it.compositeRule,
        allErrors = it.allErrors;
      var errObj = errorObjectCode(cxt, error, errorPaths);
      if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) {
        addError(gen, errObj);
      } else {
        returnErrors(it, (0, codegen._)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["[", "]"])), errObj));
      }
    }
    exports.reportError = reportError;
    function reportExtraError(cxt) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : exports.keywordError;
      var errorPaths = arguments.length > 2 ? arguments[2] : undefined;
      var it = cxt.it;
      var gen = it.gen,
        compositeRule = it.compositeRule,
        allErrors = it.allErrors;
      var errObj = errorObjectCode(cxt, error, errorPaths);
      addError(gen, errObj);
      if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1["default"].vErrors);
      }
    }
    exports.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1["default"].errors, errsCount);
      gen["if"]((0, codegen._)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["", " !== null"])), names_1["default"].vErrors), function () {
        return gen["if"](errsCount, function () {
          return gen.assign((0, codegen._)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors), errsCount);
        }, function () {
          return gen.assign(names_1["default"].vErrors, null);
        });
      });
    }
    exports.resetErrorsCount = resetErrorsCount;
    function extendErrors(_ref15) {
      var gen = _ref15.gen,
        keyword = _ref15.keyword,
        schemaValue = _ref15.schemaValue,
        data = _ref15.data,
        errsCount = _ref15.errsCount,
        it = _ref15.it;
      /* istanbul ignore if */
      if (errsCount === undefined) throw new Error("ajv implementation error");
      var err = gen.name("err");
      gen.forRange("i", errsCount, names_1["default"].errors, function (i) {
        gen["const"](err, (0, codegen._)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["", "[", "]"])), names_1["default"].vErrors, i));
        gen["if"]((0, codegen._)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["", ".instancePath === undefined"])), err), function () {
          return gen.assign((0, codegen._)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["", ".instancePath"])), err), (0, codegen.strConcat)(names_1["default"].instancePath, it.errorPath));
        });
        gen.assign((0, codegen._)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["", ".schemaPath"])), err), (0, codegen.str)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["", "/", ""])), it.errSchemaPath, keyword));
        if (it.opts.verbose) {
          gen.assign((0, codegen._)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["", ".schema"])), err), schemaValue);
          gen.assign((0, codegen._)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["", ".data"])), err), data);
        }
      });
    }
    exports.extendErrors = extendErrors;
    function addError(gen, errObj) {
      var err = gen["const"]("err", errObj);
      gen["if"]((0, codegen._)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["", " === null"])), names_1["default"].vErrors), function () {
        return gen.assign(names_1["default"].vErrors, (0, codegen._)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["[", "]"])), err));
      }, (0, codegen._)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["", ".push(", ")"])), names_1["default"].vErrors, err));
      gen.code((0, codegen._)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["", "++"])), names_1["default"].errors));
    }
    function returnErrors(it, errs) {
      var gen = it.gen,
        validateName = it.validateName,
        schemaEnv = it.schemaEnv;
      if (schemaEnv.$async) {
        gen["throw"]((0, codegen._)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["new ", "(", ")"])), it.ValidationError, errs));
      } else {
        gen.assign((0, codegen._)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["", ".errors"])), validateName), errs);
        gen["return"](false);
      }
    }
    var E = {
      keyword: new codegen.Name("keyword"),
      schemaPath: new codegen.Name("schemaPath"),
      params: new codegen.Name("params"),
      propertyName: new codegen.Name("propertyName"),
      message: new codegen.Name("message"),
      schema: new codegen.Name("schema"),
      parentSchema: new codegen.Name("parentSchema")
    };
    function errorObjectCode(cxt, error, errorPaths) {
      var createErrors = cxt.it.createErrors;
      if (createErrors === false) return (0, codegen._)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["{}"])));
      return errorObject(cxt, error, errorPaths);
    }
    function errorObject(cxt, error) {
      var errorPaths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var gen = cxt.gen,
        it = cxt.it;
      var keyValues = [errorInstancePath(it, errorPaths), errorSchemaPath(cxt, errorPaths)];
      extraErrorProps(cxt, error, keyValues);
      return gen.object.apply(gen, keyValues);
    }
    function errorInstancePath(_ref16, _ref17) {
      var errorPath = _ref16.errorPath;
      var instancePath = _ref17.instancePath;
      var instPath = instancePath ? (0, codegen.str)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util.getErrorPath)(instancePath, util.Type.Str)) : errorPath;
      return [names_1["default"].instancePath, (0, codegen.strConcat)(names_1["default"].instancePath, instPath)];
    }
    function errorSchemaPath(_ref18, _ref19) {
      var keyword = _ref18.keyword,
        errSchemaPath = _ref18.it.errSchemaPath;
      var schemaPath = _ref19.schemaPath,
        parentSchema = _ref19.parentSchema;
      var schPath = parentSchema ? errSchemaPath : (0, codegen.str)(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["", "/", ""])), errSchemaPath, keyword);
      if (schemaPath) {
        schPath = (0, codegen.str)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["", "", ""])), schPath, (0, util.getErrorPath)(schemaPath, util.Type.Str));
      }
      return [E.schemaPath, schPath];
    }
    function extraErrorProps(cxt, _ref20, keyValues) {
      var params = _ref20.params,
        message = _ref20.message;
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaValue = cxt.schemaValue,
        it = cxt.it;
      var opts = it.opts,
        propertyName = it.propertyName,
        topSchemaRef = it.topSchemaRef,
        schemaPath = it.schemaPath;
      keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen._)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["{}"])))]);
      if (opts.messages) {
        keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
      }
      if (opts.verbose) {
        keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen._)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["", "", ""])), topSchemaRef, schemaPath)], [names_1["default"].data, data]);
      }
      if (propertyName) keyValues.push([E.propertyName, propertyName]);
    }
  });
  var boolSchema = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
    var boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      var gen = it.gen,
        schema = it.schema,
        validateName = it.validateName;
      if (schema === false) {
        falseSchemaError(it, false);
      } else if (_typeof(schema) == "object" && schema.$async === true) {
        gen["return"](names_1["default"].data);
      } else {
        gen.assign((0, codegen._)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["", ".errors"])), validateName), null);
        gen["return"](true);
      }
    }
    exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      var gen = it.gen,
        schema = it.schema;
      if (schema === false) {
        gen["var"](valid, false); // TODO var
        falseSchemaError(it);
      } else {
        gen["var"](valid, true); // TODO var
      }
    }

    exports.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      var gen = it.gen,
        data = it.data;
      // TODO maybe some other interface should be used for non-keyword validation errors...
      var cxt = {
        gen: gen,
        keyword: "false schema",
        data: data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: it
      };
      (0, errors.reportError)(cxt, boolError, undefined, overrideAllErrors);
    }
  });
  var rules = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRules = exports.isJSONType = void 0;
    var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
    var jsonTypes = new Set(_jsonTypes);
    function isJSONType(x) {
      return typeof x == "string" && jsonTypes.has(x);
    }
    exports.isJSONType = isJSONType;
    function getRules() {
      var groups = {
        number: {
          type: "number",
          rules: []
        },
        string: {
          type: "string",
          rules: []
        },
        array: {
          type: "array",
          rules: []
        },
        object: {
          type: "object",
          rules: []
        }
      };
      return {
        types: _objectSpread(_objectSpread({}, groups), {}, {
          integer: true,
          "boolean": true,
          "null": true
        }),
        rules: [{
          rules: []
        }, groups.number, groups.string, groups.array, groups.object],
        post: {
          rules: []
        },
        all: {},
        keywords: {}
      };
    }
    exports.getRules = getRules;
  });
  var applicability = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
    function schemaHasRulesForType(_ref21, type) {
      var schema = _ref21.schema,
        self = _ref21.self;
      var group = self.RULES.types[type];
      return group && group !== true && shouldUseGroup(schema, group);
    }
    exports.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some(function (rule) {
        return shouldUseRule(schema, rule);
      });
    }
    exports.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a;
      return schema[rule.keyword] !== undefined || ((_a = rule.definition["implements"]) === null || _a === void 0 ? void 0 : _a.some(function (kwd) {
        return schema[kwd] !== undefined;
      }));
    }
    exports.shouldUseRule = shouldUseRule;
  });
  var dataType = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
    var DataType;
    (function (DataType) {
      DataType[DataType["Correct"] = 0] = "Correct";
      DataType[DataType["Wrong"] = 1] = "Wrong";
    })(DataType = exports.DataType || (exports.DataType = {}));
    function getSchemaTypes(schema) {
      var types = getJSONTypes(schema.type);
      var hasNull = types.includes("null");
      if (hasNull) {
        if (schema.nullable === false) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== undefined) {
          throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true) types.push("null");
      }
      return types;
    }
    exports.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      var types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules.isJSONType)) return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      var gen = it.gen,
        data = it.data,
        opts = it.opts;
      var coerceTo = coerceToTypes(types, opts.coerceTypes);
      var checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        var wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen["if"](wrongType, function () {
          if (coerceTo.length) coerceData(it, types, coerceTo);else reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter(function (t) {
        return COERCIBLE.has(t) || coerceTypes === "array" && t === "array";
      }) : [];
    }
    function coerceData(it, types, coerceTo) {
      var gen = it.gen,
        data = it.data,
        opts = it.opts;
      var dataType = gen["let"]("dataType", (0, codegen._)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["typeof ", ""])), data));
      var coerced = gen["let"]("coerced", (0, codegen._)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["undefined"]))));
      if (opts.coerceTypes === "array") {
        gen["if"]((0, codegen._)(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["", " == 'object' && Array.isArray(", ") && ", ".length == 1"])), dataType, data, data), function () {
          return gen.assign(data, (0, codegen._)(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["", "[0]"])), data)).assign(dataType, (0, codegen._)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["typeof ", ""])), data))["if"](checkDataTypes(types, data, opts.strictNumbers), function () {
            return gen.assign(coerced, data);
          });
        });
      }
      gen["if"]((0, codegen._)(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["", " !== undefined"])), coerced));
      var _iterator6 = _createForOfIteratorHelper(coerceTo),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var t = _step6.value;
          if (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") {
            coerceSpecificType(t);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      gen["else"]();
      reportTypeError(it);
      gen.endIf();
      gen["if"]((0, codegen._)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["", " !== undefined"])), coerced), function () {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
      });
      function coerceSpecificType(t) {
        switch (t) {
          case "string":
            gen.elseIf((0, codegen._)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["", " == \"number\" || ", " == \"boolean\""])), dataType, dataType)).assign(coerced, (0, codegen._)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\"\" + ", ""])), data)).elseIf((0, codegen._)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["", " === null"])), data)).assign(coerced, (0, codegen._)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\"\""]))));
            return;
          case "number":
            gen.elseIf((0, codegen._)(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["", " == \"boolean\" || ", " === null\n              || (", " == \"string\" && ", " && ", " == +", ")"])), dataType, data, dataType, data, data, data)).assign(coerced, (0, codegen._)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["+", ""])), data));
            return;
          case "integer":
            gen.elseIf((0, codegen._)(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["", " === \"boolean\" || ", " === null\n              || (", " === \"string\" && ", " && ", " == +", " && !(", " % 1))"])), dataType, data, dataType, data, data, data, data)).assign(coerced, (0, codegen._)(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["+", ""])), data));
            return;
          case "boolean":
            gen.elseIf((0, codegen._)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["", " === \"false\" || ", " === 0 || ", " === null"])), data, data, data)).assign(coerced, false).elseIf((0, codegen._)(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["", " === \"true\" || ", " === 1"])), data, data)).assign(coerced, true);
            return;
          case "null":
            gen.elseIf((0, codegen._)(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["", " === \"\" || ", " === 0 || ", " === false"])), data, data, data));
            gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen._)(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["", " === \"string\" || ", " === \"number\"\n              || ", " === \"boolean\" || ", " === null"])), dataType, dataType, dataType, data)).assign(coerced, (0, codegen._)(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["[", "]"])), data));
        }
      }
    }
    function assignParentData(_ref22, expr) {
      var gen = _ref22.gen,
        parentData = _ref22.parentData,
        parentDataProperty = _ref22.parentDataProperty;
      // TODO use gen.property
      gen["if"]((0, codegen._)(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["", " !== undefined"])), parentData), function () {
        return gen.assign((0, codegen._)(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["", "[", "]"])), parentData, parentDataProperty), expr);
      });
    }
    function checkDataType(dataType, data, strictNums) {
      var correct = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DataType.Correct;
      var EQ = correct === DataType.Correct ? codegen.operators.EQ : codegen.operators.NEQ;
      var cond;
      switch (dataType) {
        case "null":
          return (0, codegen._)(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["", " ", " null"])), data, EQ);
        case "array":
          cond = (0, codegen._)(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Array.isArray(", ")"])), data);
          break;
        case "object":
          cond = (0, codegen._)(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["", " && typeof ", " == \"object\" && !Array.isArray(", ")"])), data, data, data);
          break;
        case "integer":
          cond = numCond((0, codegen._)(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["!(", " % 1) && !isNaN(", ")"])), data, data));
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen._)(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["typeof ", " ", " ", ""])), data, EQ, dataType);
      }
      return correct === DataType.Correct ? cond : (0, codegen.not)(cond);
      function numCond() {
        var _cond = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen.nil;
        return (0, codegen.and)((0, codegen._)(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["typeof ", " == \"number\""])), data), _cond, strictNums ? (0, codegen._)(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["isFinite(", ")"])), data) : codegen.nil);
      }
    }
    exports.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
      }
      var cond;
      var types = (0, util.toHash)(dataTypes);
      if (types.array && types.object) {
        var notObj = (0, codegen._)(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["typeof ", " != \"object\""])), data);
        cond = types["null"] ? notObj : (0, codegen._)(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["!", " || ", ""])), data, notObj);
        delete types["null"];
        delete types.array;
        delete types.object;
      } else {
        cond = codegen.nil;
      }
      if (types.number) delete types.integer;
      for (var t in types) cond = (0, codegen.and)(cond, checkDataType(t, data, strictNums, correct));
      return cond;
    }
    exports.checkDataTypes = checkDataTypes;
    var typeError = {
      message: function message(_ref23) {
        var schema = _ref23.schema;
        return "must be ".concat(schema);
      },
      params: function params(_ref24) {
        var schema = _ref24.schema,
          schemaValue = _ref24.schemaValue;
        return typeof schema == "string" ? (0, codegen._)(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["{type: ", "}"])), schema) : (0, codegen._)(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["{type: ", "}"])), schemaValue);
      }
    };
    function reportTypeError(it) {
      var cxt = getTypeErrorContext(it);
      (0, errors.reportError)(cxt, typeError);
    }
    exports.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      var gen = it.gen,
        data = it.data,
        schema = it.schema;
      var schemaCode = (0, util.schemaRefOrVal)(it, schema, "type");
      return {
        gen: gen,
        keyword: "type",
        data: data,
        schema: schema.type,
        schemaCode: schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it: it
      };
    }
  });
  var defaults = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.assignDefaults = void 0;
    function assignDefaults(it, ty) {
      var _it$schema = it.schema,
        properties = _it$schema.properties,
        items = _it$schema.items;
      if (ty === "object" && properties) {
        for (var key in properties) {
          assignDefault(it, key, properties[key]["default"]);
        }
      } else if (ty === "array" && Array.isArray(items)) {
        items.forEach(function (sch, i) {
          return assignDefault(it, i, sch["default"]);
        });
      }
    }
    exports.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      var gen = it.gen,
        compositeRule = it.compositeRule,
        data = it.data,
        opts = it.opts;
      if (defaultValue === undefined) return;
      var childData = (0, codegen._)(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen.getProperty)(prop));
      if (compositeRule) {
        (0, util.checkStrictMode)(it, "default is ignored for: ".concat(childData));
        return;
      }
      var condition = (0, codegen._)(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["", " === undefined"])), childData);
      if (opts.useDefaults === "empty") {
        condition = (0, codegen._)(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["", " || ", " === null || ", " === \"\""])), condition, childData, childData);
      }
      // `${childData} === undefined` +
      // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
      gen["if"](condition, (0, codegen._)(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["", " = ", ""])), childData, (0, codegen.stringify)(defaultValue)));
    }
  });
  var _code = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
    var util_2 = util;
    function checkReportMissingProp(cxt, prop) {
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      gen["if"](noPropertyInData(gen, data, prop, it.opts.ownProperties), function () {
        cxt.setParams({
          missingProperty: (0, codegen._)(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["", ""])), prop)
        }, true);
        cxt.error();
      });
    }
    exports.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp(_ref25, properties, missing) {
      var gen = _ref25.gen,
        data = _ref25.data,
        opts = _ref25.it.opts;
      return (0, codegen.or).apply(void 0, _toConsumableArray(properties.map(function (prop) {
        return (0, codegen.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen._)(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["", " = ", ""])), missing, prop));
      })));
    }
    exports.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({
        missingProperty: missing
      }, true);
      cxt.error();
    }
    exports.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen._)(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Object.prototype.hasOwnProperty"])))
      });
    }
    exports.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen._)(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), hasPropFunc(gen), data, property);
    }
    exports.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      var cond = (0, codegen._)(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["", "", " !== undefined"])), data, (0, codegen.getProperty)(property));
      return ownProperties ? (0, codegen._)(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["", " && ", ""])), cond, isOwnProperty(gen, data, property)) : cond;
    }
    exports.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      var cond = (0, codegen._)(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["", "", " === undefined"])), data, (0, codegen.getProperty)(property));
      return ownProperties ? (0, codegen.or)(cond, (0, codegen.not)(isOwnProperty(gen, data, property))) : cond;
    }
    exports.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter(function (p) {
        return p !== "__proto__";
      }) : [];
    }
    exports.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter(function (p) {
        return !(0, util.alwaysValidSchema)(it, schemaMap[p]);
      });
    }
    exports.schemaProperties = schemaProperties;
    function callValidateCode(_ref26, func, context, passSchema) {
      var schemaCode = _ref26.schemaCode,
        data = _ref26.data,
        _ref26$it = _ref26.it,
        gen = _ref26$it.gen,
        topSchemaRef = _ref26$it.topSchemaRef,
        schemaPath = _ref26$it.schemaPath,
        errorPath = _ref26$it.errorPath,
        it = _ref26.it;
      var dataAndSchema = passSchema ? (0, codegen._)(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["", ", ", ", ", "", ""])), schemaCode, data, topSchemaRef, schemaPath) : data;
      var valCxt = [[names_1["default"].instancePath, (0, codegen.strConcat)(names_1["default"].instancePath, errorPath)], [names_1["default"].parentData, it.parentData], [names_1["default"].parentDataProperty, it.parentDataProperty], [names_1["default"].rootData, names_1["default"].rootData]];
      if (it.opts.dynamicRef) valCxt.push([names_1["default"].dynamicAnchors, names_1["default"].dynamicAnchors]);
      var args = (0, codegen._)(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["", ", ", ""])), dataAndSchema, gen.object.apply(gen, valCxt));
      return context !== codegen.nil ? (0, codegen._)(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["", ".call(", ", ", ")"])), func, context, args) : (0, codegen._)(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["", "(", ")"])), func, args);
    }
    exports.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen._)(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["new RegExp"])));
    function usePattern(_ref27, pattern) {
      var gen = _ref27.gen,
        opts = _ref27.it.opts;
      var u = opts.unicodeRegExp ? "u" : "";
      var regExp = opts.code.regExp;
      var rx = regExp(pattern, u);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen._)(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["", "(", ", ", ")"])), regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp), pattern, u)
      });
    }
    exports.usePattern = usePattern;
    function validateArray(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      var valid = gen.name("valid");
      if (it.allErrors) {
        var validArr = gen["let"]("valid", true);
        validateItems(function () {
          return gen.assign(validArr, false);
        });
        return validArr;
      }
      gen["var"](valid, true);
      validateItems(function () {
        return gen["break"]();
      });
      return valid;
      function validateItems(notValid) {
        var len = gen["const"]("len", (0, codegen._)(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["", ".length"])), data));
        gen.forRange("i", 0, len, function (i) {
          cxt.subschema({
            keyword: keyword,
            dataProp: i,
            dataPropType: util.Type.Num
          }, valid);
          gen["if"]((0, codegen.not)(valid), notValid);
        });
      }
    }
    exports.validateArray = validateArray;
    function validateUnion(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        keyword = cxt.keyword,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      var alwaysValid = schema.some(function (sch) {
        return (0, util.alwaysValidSchema)(it, sch);
      });
      if (alwaysValid && !it.opts.unevaluated) return;
      var valid = gen["let"]("valid", false);
      var schValid = gen.name("_valid");
      gen.block(function () {
        return schema.forEach(function (_sch, i) {
          var schCxt = cxt.subschema({
            keyword: keyword,
            schemaProp: i,
            compositeRule: true
          }, schValid);
          gen.assign(valid, (0, codegen._)(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["", " || ", ""])), valid, schValid));
          var merged = cxt.mergeValidEvaluated(schCxt, schValid);
          // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
          // or if all properties and items were evaluated (it.props === true && it.items === true)
          if (!merged) gen["if"]((0, codegen.not)(valid));
        });
      });
      cxt.result(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error(true);
      });
    }
    exports.validateUnion = validateUnion;
  });
  var keyword = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
    function macroKeywordCode(cxt, def) {
      var gen = cxt.gen,
        keyword = cxt.keyword,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var macroSchema = def.macro.call(it.self, schema, parentSchema, it);
      var schemaRef = useKeyword(gen, keyword, macroSchema);
      if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true);
      var valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen.nil,
        errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword),
        topSchemaRef: schemaRef,
        compositeRule: true
      }, valid);
      cxt.pass(valid, function () {
        return cxt.error(true);
      });
    }
    exports.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a;
      var gen = cxt.gen,
        keyword = cxt.keyword,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        $data = cxt.$data,
        it = cxt.it;
      checkAsyncKeyword(it, def);
      var validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
      var validateRef = useKeyword(gen, keyword, validate);
      var valid = gen["let"]("valid");
      cxt.block$data(valid, validateKeyword);
      cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
      function validateKeyword() {
        if (def.errors === false) {
          assignValid();
          if (def.modifying) modifyData(cxt);
          reportErrs(function () {
            return cxt.error();
          });
        } else {
          var ruleErrs = def.async ? validateAsync() : validateSync();
          if (def.modifying) modifyData(cxt);
          reportErrs(function () {
            return addErrs(cxt, ruleErrs);
          });
        }
      }
      function validateAsync() {
        var ruleErrs = gen["let"]("ruleErrs", null);
        gen["try"](function () {
          return assignValid((0, codegen._)(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["await "]))));
        }, function (e) {
          return gen.assign(valid, false)["if"]((0, codegen._)(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["", " instanceof ", ""])), e, it.ValidationError), function () {
            return gen.assign(ruleErrs, (0, codegen._)(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["", ".errors"])), e));
          }, function () {
            return gen["throw"](e);
          });
        });
        return ruleErrs;
      }
      function validateSync() {
        var validateErrs = (0, codegen._)(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["", ".errors"])), validateRef);
        gen.assign(validateErrs, null);
        assignValid(codegen.nil);
        return validateErrs;
      }
      function assignValid() {
        var _await = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def.async ? (0, codegen._)(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["await "]))) : codegen.nil;
        var passCxt = it.opts.passContext ? names_1["default"]["this"] : names_1["default"].self;
        var passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, (0, codegen._)(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["", "", ""])), _await, (0, _code.callValidateCode)(cxt, validateRef, passCxt, passSchema)), def.modifying);
      }
      function reportErrs(errors) {
        var _a;
        gen["if"]((0, codegen.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
      }
    }
    exports.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      gen["if"](it.parentData, function () {
        return gen.assign(data, (0, codegen._)(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["", "[", "]"])), it.parentData, it.parentDataProperty));
      });
    }
    function addErrs(cxt, errs) {
      var gen = cxt.gen;
      gen["if"]((0, codegen._)(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["Array.isArray(", ")"])), errs), function () {
        gen.assign(names_1["default"].vErrors, (0, codegen._)(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1["default"].vErrors, errs, names_1["default"].vErrors, errs)).assign(names_1["default"].errors, (0, codegen._)(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors));
        (0, errors.extendErrors)(cxt);
      }, function () {
        return cxt.error();
      });
    }
    function checkAsyncKeyword(_ref28, def) {
      var schemaEnv = _ref28.schemaEnv;
      if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === undefined) throw new Error("keyword \"".concat(keyword, "\" failed to compile"));
      return gen.scopeValue("keyword", typeof result == "function" ? {
        ref: result
      } : {
        ref: result,
        code: (0, codegen.stringify)(result)
      });
    }
    function validSchemaType(schema, schemaType) {
      var allowUndefined = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // TODO add tests
      return !schemaType.length || schemaType.some(function (st) {
        return st === "array" ? Array.isArray(schema) : st === "object" ? schema && _typeof(schema) == "object" && !Array.isArray(schema) : _typeof(schema) == st || allowUndefined && typeof schema == "undefined";
      });
    }
    exports.validSchemaType = validSchemaType;
    function validateKeywordUsage(_ref29, def, keyword) {
      var schema = _ref29.schema,
        opts = _ref29.opts,
        self = _ref29.self,
        errSchemaPath = _ref29.errSchemaPath;
      /* istanbul ignore if */
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
      }
      var deps = def.dependencies;
      if (deps === null || deps === void 0 ? void 0 : deps.some(function (kwd) {
        return !Object.prototype.hasOwnProperty.call(schema, kwd);
      })) {
        throw new Error("parent schema must have dependencies of ".concat(keyword, ": ").concat(deps.join(",")));
      }
      if (def.validateSchema) {
        var _valid2 = def.validateSchema(schema[keyword]);
        if (!_valid2) {
          var msg = "keyword \"".concat(keyword, "\" value is invalid at path \"").concat(errSchemaPath, "\": ") + self.errorsText(def.validateSchema.errors);
          if (opts.validateSchema === "log") self.logger.error(msg);else throw new Error(msg);
        }
      }
    }
    exports.validateKeywordUsage = validateKeywordUsage;
  });
  var _subschema = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
    function getSubschema(it, _ref30) {
      var keyword = _ref30.keyword,
        schemaProp = _ref30.schemaProp,
        schema = _ref30.schema,
        schemaPath = _ref30.schemaPath,
        errSchemaPath = _ref30.errSchemaPath,
        topSchemaRef = _ref30.topSchemaRef;
      if (keyword !== undefined && schema !== undefined) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      }
      if (keyword !== undefined) {
        var sch = it.schema[keyword];
        return schemaProp === undefined ? {
          schema: sch,
          schemaPath: (0, codegen._)(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["", "", ""])), it.schemaPath, (0, codegen.getProperty)(keyword)),
          errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword)
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen._)(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["", "", "", ""])), it.schemaPath, (0, codegen.getProperty)(keyword), (0, codegen.getProperty)(schemaProp)),
          errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword, "/").concat((0, util.escapeFragment)(schemaProp))
        };
      }
      if (schema !== undefined) {
        if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
          schema: schema,
          schemaPath: schemaPath,
          topSchemaRef: topSchemaRef,
          errSchemaPath: errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    exports.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, _ref31) {
      var dataProp = _ref31.dataProp,
        dpType = _ref31.dataPropType,
        data = _ref31.data,
        dataTypes = _ref31.dataTypes,
        propertyName = _ref31.propertyName;
      if (data !== undefined && dataProp !== undefined) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      }
      var gen = it.gen;
      if (dataProp !== undefined) {
        var errorPath = it.errorPath,
          dataPathArr = it.dataPathArr,
          opts = it.opts;
        var nextData = gen["let"]("data", (0, codegen._)(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["", "", ""])), it.data, (0, codegen.getProperty)(dataProp)), true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen.str)(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["", "", ""])), errorPath, (0, util.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax));
        subschema.parentDataProperty = (0, codegen._)(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["", ""])), dataProp);
        subschema.dataPathArr = [].concat(_toConsumableArray(dataPathArr), [subschema.parentDataProperty]);
      }
      if (data !== undefined) {
        var _nextData2 = data instanceof codegen.Name ? data : gen["let"]("data", data, true); // replaceable if used once?
        dataContextProps(_nextData2);
        if (propertyName !== undefined) subschema.propertyName = propertyName;
        // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
      }

      if (dataTypes) subschema.dataTypes = dataTypes;
      function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [].concat(_toConsumableArray(it.dataNames), [_nextData]);
      }
    }
    exports.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, _ref32) {
      var jtdDiscriminator = _ref32.jtdDiscriminator,
        jtdMetadata = _ref32.jtdMetadata,
        compositeRule = _ref32.compositeRule,
        createErrors = _ref32.createErrors,
        allErrors = _ref32.allErrors;
      if (compositeRule !== undefined) subschema.compositeRule = compositeRule;
      if (createErrors !== undefined) subschema.createErrors = createErrors;
      if (allErrors !== undefined) subschema.allErrors = allErrors;
      subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
      subschema.jtdMetadata = jtdMetadata; // not inherited
    }

    exports.extendSubschemaMode = extendSubschemaMode;
  });

  // do not edit .js files directly - edit src/index.jst

  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return false;
      }
      return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
  };
  var jsonSchemaTraverse = createCommonjsModule(function (module) {
    var traverse = module.exports = function (schema, opts, cb) {
      // Legacy support for v0.3.1 and earlier.
      if (typeof opts == 'function') {
        cb = opts;
        opts = {};
      }
      cb = opts.cb || cb;
      var pre = typeof cb == 'function' ? cb : cb.pre || function () {};
      var post = cb.post || function () {};
      _traverse(opts, pre, post, schema, '', schema);
    };
    traverse.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true,
      "if": true,
      then: true,
      "else": true
    };
    traverse.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    };
    traverse.propsKeywords = {
      $defs: true,
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    };
    traverse.skipKeywords = {
      "default": true,
      "enum": true,
      "const": true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && _typeof(schema) == 'object' && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords) {
              for (var i = 0; i < sch.length; i++) _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
            }
          } else if (key in traverse.propsKeywords) {
            if (sch && _typeof(sch) == 'object') {
              for (var prop in sch) _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            }
          } else if (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) {
            _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
          }
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, '~0').replace(/\//g, '~1');
    }
  });
  var resolve = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;

    // TODO refactor to use keyword definitions
    var SIMPLE_INLINED = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    function inlineRef(schema) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (typeof schema == "boolean") return true;
      if (limit === true) return !hasRef(schema);
      if (!limit) return false;
      return countKeys(schema) <= limit;
    }
    exports.inlineRef = inlineRef;
    var REF_KEYWORDS = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function hasRef(schema) {
      for (var key in schema) {
        if (REF_KEYWORDS.has(key)) return true;
        var sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef)) return true;
        if (_typeof(sch) == "object" && hasRef(sch)) return true;
      }
      return false;
    }
    function countKeys(schema) {
      var count = 0;
      for (var key in schema) {
        if (key === "$ref") return Infinity;
        count++;
        if (SIMPLE_INLINED.has(key)) continue;
        if (_typeof(schema[key]) == "object") {
          (0, util.eachItem)(schema[key], function (sch) {
            return count += countKeys(sch);
          });
        }
        if (count === Infinity) return Infinity;
      }
      return count;
    }
    function getFullPath(resolver) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var normalize = arguments.length > 2 ? arguments[2] : undefined;
      if (normalize !== false) id = normalizeId(id);
      var p = resolver.parse(id);
      return _getFullPath(resolver, p);
    }
    exports.getFullPath = getFullPath;
    function _getFullPath(resolver, p) {
      var serialized = resolver.serialize(p);
      return serialized.split("#")[0] + "#";
    }
    exports._getFullPath = _getFullPath;
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    exports.normalizeId = normalizeId;
    function resolveUrl(resolver, baseId, id) {
      id = normalizeId(id);
      return resolver.resolve(baseId, id);
    }
    exports.resolveUrl = resolveUrl;
    var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
    function getSchemaRefs(schema, baseId) {
      var _this22 = this;
      if (typeof schema == "boolean") return {};
      var _this$opts = this.opts,
        schemaId = _this$opts.schemaId,
        uriResolver = _this$opts.uriResolver;
      var schId = normalizeId(schema[schemaId] || baseId);
      var baseIds = {
        "": schId
      };
      var pathPrefix = getFullPath(uriResolver, schId, false);
      var localRefs = {};
      var schemaRefs = new Set();
      jsonSchemaTraverse(schema, {
        allKeys: true
      }, function (sch, jsonPtr, _, parentJsonPtr) {
        if (parentJsonPtr === undefined) return;
        var fullPath = pathPrefix + jsonPtr;
        var baseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string") baseId = addRef.call(_this22, sch[schemaId]);
        addAnchor.call(_this22, sch.$anchor);
        addAnchor.call(_this22, sch.$dynamicAnchor);
        baseIds[jsonPtr] = baseId;
        function addRef(ref) {
          // eslint-disable-next-line @typescript-eslint/unbound-method
          var _resolve = this.opts.uriResolver.resolve;
          ref = normalizeId(baseId ? _resolve(baseId, ref) : ref);
          if (schemaRefs.has(ref)) throw ambiguos(ref);
          schemaRefs.add(ref);
          var schOrRef = this.refs[ref];
          if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
          if (_typeof(schOrRef) == "object") {
            checkAmbiguosRef(sch, schOrRef.schema, ref);
          } else if (ref !== normalizeId(fullPath)) {
            if (ref[0] === "#") {
              checkAmbiguosRef(sch, localRefs[ref], ref);
              localRefs[ref] = sch;
            } else {
              this.refs[ref] = fullPath;
            }
          }
          return ref;
        }
        function addAnchor(anchor) {
          if (typeof anchor == "string") {
            if (!ANCHOR.test(anchor)) throw new Error("invalid anchor \"".concat(anchor, "\""));
            addRef.call(this, "#".concat(anchor));
          }
        }
      });
      return localRefs;
      function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== undefined && !fastDeepEqual(sch1, sch2)) throw ambiguos(ref);
      }
      function ambiguos(ref) {
        return new Error("reference \"".concat(ref, "\" resolves to more than one schema"));
      }
    }
    exports.getSchemaRefs = getSchemaRefs;
  });
  var validate$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
    var dataType_2 = dataType;

    // schema compilation - generates validation function, subschemaCode (below) is used for subschemas
    function validateFunctionCode(it) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          topSchemaObjCode(it);
          return;
        }
      }
      validateFunction(it, function () {
        return (0, boolSchema.topBoolOrEmptySchema)(it);
      });
    }
    exports.validateFunctionCode = validateFunctionCode;
    function validateFunction(_ref33, body) {
      var gen = _ref33.gen,
        validateName = _ref33.validateName,
        schema = _ref33.schema,
        schemaEnv = _ref33.schemaEnv,
        opts = _ref33.opts;
      if (opts.code.es5) {
        gen.func(validateName, (0, codegen._)(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, names_1["default"].valCxt), schemaEnv.$async, function () {
          gen.code((0, codegen._)(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\"use strict\"; ", ""])), funcSourceUrl(schema, opts)));
          destructureValCxtES5(gen, opts);
          gen.code(body);
        });
      } else {
        gen.func(validateName, (0, codegen._)(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["", ", ", ""])), names_1["default"].data, destructureValCxt(opts)), schemaEnv.$async, function () {
          return gen.code(funcSourceUrl(schema, opts)).code(body);
        });
      }
    }
    function destructureValCxt(opts) {
      return (0, codegen._)(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["{", "=\"\", ", ", ", ", ", "=", "", "}={}"])), names_1["default"].instancePath, names_1["default"].parentData, names_1["default"].parentDataProperty, names_1["default"].rootData, names_1["default"].data, opts.dynamicRef ? (0, codegen._)(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral([", ", "={}"])), names_1["default"].dynamicAnchors) : codegen.nil);
    }
    function destructureValCxtES5(gen, opts) {
      gen["if"](names_1["default"].valCxt, function () {
        gen["var"](names_1["default"].instancePath, (0, codegen._)(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].instancePath));
        gen["var"](names_1["default"].parentData, (0, codegen._)(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentData));
        gen["var"](names_1["default"].parentDataProperty, (0, codegen._)(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].parentDataProperty));
        gen["var"](names_1["default"].rootData, (0, codegen._)(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].rootData));
        if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen._)(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["", ".", ""])), names_1["default"].valCxt, names_1["default"].dynamicAnchors));
      }, function () {
        gen["var"](names_1["default"].instancePath, (0, codegen._)(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\"\""]))));
        gen["var"](names_1["default"].parentData, (0, codegen._)(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["undefined"]))));
        gen["var"](names_1["default"].parentDataProperty, (0, codegen._)(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["undefined"]))));
        gen["var"](names_1["default"].rootData, names_1["default"].data);
        if (opts.dynamicRef) gen["var"](names_1["default"].dynamicAnchors, (0, codegen._)(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["{}"]))));
      });
    }
    function topSchemaObjCode(it) {
      var schema = it.schema,
        opts = it.opts,
        gen = it.gen;
      validateFunction(it, function () {
        if (opts.$comment && schema.$comment) commentKeyword(it);
        checkNoDefault(it);
        gen["let"](names_1["default"].vErrors, null);
        gen["let"](names_1["default"].errors, 0);
        if (opts.unevaluated) resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
      });
      return;
    }
    function resetEvaluated(it) {
      // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
      var gen = it.gen,
        validateName = it.validateName;
      it.evaluated = gen["const"]("evaluated", (0, codegen._)(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["", ".evaluated"])), validateName));
      gen["if"]((0, codegen._)(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["", ".dynamicProps"])), it.evaluated), function () {
        return gen.assign((0, codegen._)(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["", ".props"])), it.evaluated), (0, codegen._)(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["undefined"]))));
      });
      gen["if"]((0, codegen._)(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["", ".dynamicItems"])), it.evaluated), function () {
        return gen.assign((0, codegen._)(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["", ".items"])), it.evaluated), (0, codegen._)(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["undefined"]))));
      });
    }
    function funcSourceUrl(schema, opts) {
      var schId = _typeof(schema) == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen._)(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["/*# sourceURL=", " */"])), schId) : codegen.nil;
    }
    // schema compilation - this function is used recursively to generate code for sub-schemas
    function subschemaCode(it, valid) {
      if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
          subSchemaObjCode(it, valid);
          return;
        }
      }
      (0, boolSchema.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules(_ref34) {
      var schema = _ref34.schema,
        self = _ref34.self;
      if (typeof schema == "boolean") return !schema;
      for (var key in schema) if (self.RULES.all[key]) return true;
      return false;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      var schema = it.schema,
        gen = it.gen,
        opts = it.opts;
      if (opts.$comment && schema.$comment) commentKeyword(it);
      updateContext(it);
      checkAsyncSchema(it);
      var errsCount = gen["const"]("_errs", names_1["default"].errors);
      typeAndKeywords(it, errsCount);
      // TODO var
      gen["var"](valid, (0, codegen._)(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
    }
    function checkKeywords(it) {
      (0, util.checkUnknownRules)(it);
      checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd) return schemaKeywords(it, [], false, errsCount);
      var types = (0, dataType.getSchemaTypes)(it.schema);
      var checkedTypes = (0, dataType.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      var schema = it.schema,
        errSchemaPath = it.errSchemaPath,
        opts = it.opts,
        self = it.self;
      if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn("$ref: keywords ignored in schema at path \"".concat(errSchemaPath, "\""));
      }
    }
    function checkNoDefault(it) {
      var schema = it.schema,
        opts = it.opts;
      if (schema["default"] !== undefined && opts.useDefaults && opts.strictSchema) {
        (0, util.checkStrictMode)(it, "default is ignored in the schema root");
      }
    }
    function updateContext(it) {
      var schId = it.schema[it.opts.schemaId];
      if (schId) it.baseId = (0, resolve.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function commentKeyword(_ref35) {
      var gen = _ref35.gen,
        schemaEnv = _ref35.schemaEnv,
        schema = _ref35.schema,
        errSchemaPath = _ref35.errSchemaPath,
        opts = _ref35.opts;
      var msg = schema.$comment;
      if (opts.$comment === true) {
        gen.code((0, codegen._)(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["", ".logger.log(", ")"])), names_1["default"].self, msg));
      } else if (typeof opts.$comment == "function") {
        var schemaPath = (0, codegen.str)(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["", "/$comment"])), errSchemaPath);
        var rootName = gen.scopeValue("root", {
          ref: schemaEnv.root
        });
        gen.code((0, codegen._)(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["", ".opts.$comment(", ", ", ", ", ".schema)"])), names_1["default"].self, msg, schemaPath, rootName));
      }
    }
    function returnResults(it) {
      var gen = it.gen,
        schemaEnv = it.schemaEnv,
        validateName = it.validateName,
        ValidationError = it.ValidationError,
        opts = it.opts;
      if (schemaEnv.$async) {
        // TODO assign unevaluated
        gen["if"]((0, codegen._)(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors), function () {
          return gen["return"](names_1["default"].data);
        }, function () {
          return gen["throw"]((0, codegen._)(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["new ", "(", ")"])), ValidationError, names_1["default"].vErrors));
        });
      } else {
        gen.assign((0, codegen._)(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["", ".errors"])), validateName), names_1["default"].vErrors);
        if (opts.unevaluated) assignEvaluated(it);
        gen["return"]((0, codegen._)(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["", " === 0"])), names_1["default"].errors));
      }
    }
    function assignEvaluated(_ref36) {
      var gen = _ref36.gen,
        evaluated = _ref36.evaluated,
        props = _ref36.props,
        items = _ref36.items;
      if (props instanceof codegen.Name) gen.assign((0, codegen._)(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["", ".props"])), evaluated), props);
      if (items instanceof codegen.Name) gen.assign((0, codegen._)(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["", ".items"])), evaluated), items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      var gen = it.gen,
        schema = it.schema,
        data = it.data,
        allErrors = it.allErrors,
        opts = it.opts,
        self = it.self;
      var RULES = self.RULES;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(function () {
          return keywordCode(it, "$ref", RULES.all.$ref.definition);
        }); // TODO typecast
        return;
      }
      if (!opts.jtd) checkStrictTypes(it, types);
      gen.block(function () {
        var _iterator7 = _createForOfIteratorHelper(RULES.rules),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var group = _step7.value;
            groupKeywords(group);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        groupKeywords(RULES.post);
      });
      function groupKeywords(group) {
        if (!(0, applicability.shouldUseGroup)(schema, group)) return;
        if (group.type) {
          gen["if"]((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
          iterateKeywords(it, group);
          if (types.length === 1 && types[0] === group.type && typeErrors) {
            gen["else"]();
            (0, dataType_2.reportTypeError)(it);
          }
          gen.endIf();
        } else {
          iterateKeywords(it, group);
        }
        // TODO make it "ok" call?
        if (!allErrors) gen["if"]((0, codegen._)(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["", " === ", ""])), names_1["default"].errors, errsCount || 0));
      }
    }
    function iterateKeywords(it, group) {
      var gen = it.gen,
        schema = it.schema,
        useDefaults = it.opts.useDefaults;
      if (useDefaults) (0, defaults.assignDefaults)(it, group.type);
      gen.block(function () {
        var _iterator8 = _createForOfIteratorHelper(group.rules),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var rule = _step8.value;
            if ((0, applicability.shouldUseRule)(schema, rule)) {
              keywordCode(it, rule.keyword, rule.definition, group.type);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      });
    }
    function checkStrictTypes(it, types) {
      if (it.schemaEnv.meta || !it.opts.strictTypes) return;
      checkContextTypes(it, types);
      if (!it.opts.allowUnionTypes) checkMultipleTypes(it, types);
      checkKeywordTypes(it, it.dataTypes);
    }
    function checkContextTypes(it, types) {
      if (!types.length) return;
      if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
      }
      types.forEach(function (t) {
        if (!includesType(it.dataTypes, t)) {
          strictTypesError(it, "type \"".concat(t, "\" not allowed by context \"").concat(it.dataTypes.join(","), "\""));
        }
      });
      narrowSchemaTypes(it, types);
    }
    function checkMultipleTypes(it, ts) {
      if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
      }
    }
    function checkKeywordTypes(it, ts) {
      var rules = it.self.RULES.all;
      for (var _keyword in rules) {
        var rule = rules[_keyword];
        if (_typeof(rule) == "object" && (0, applicability.shouldUseRule)(it.schema, rule)) {
          var _type = rule.definition.type;
          if (_type.length && !_type.some(function (t) {
            return hasApplicableType(ts, t);
          })) {
            strictTypesError(it, "missing type \"".concat(_type.join(","), "\" for keyword \"").concat(_keyword, "\""));
          }
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t) {
      return ts.includes(t) || t === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      var ts = [];
      var _iterator9 = _createForOfIteratorHelper(it.dataTypes),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var t = _step9.value;
          if (includesType(withTypes, t)) ts.push(t);else if (withTypes.includes("integer") && t === "number") ts.push("integer");
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += " at \"".concat(schemaPath, "\" (strictTypes)");
      (0, util.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = /*#__PURE__*/function () {
      function KeywordCxt(it, def, keyword$1) {
        _classCallCheck(this, KeywordCxt);
        (0, keyword.validateKeywordUsage)(it, def, keyword$1);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword$1;
        this.data = it.data;
        this.schema = it.schema[keyword$1];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util.schemaRefOrVal)(it, this.schema, keyword$1, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
          this.schemaCode = it.gen["const"]("vSchema", getData(this.$data, it));
        } else {
          this.schemaCode = this.schemaValue;
          if (!(0, keyword.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
            throw new Error("".concat(keyword$1, " value must be ").concat(JSON.stringify(def.schemaType)));
          }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
          this.errsCount = it.gen["const"]("_errs", names_1["default"].errors);
        }
      }
      _createClass(KeywordCxt, [{
        key: "result",
        value: function result(condition, successAction, failAction) {
          this.failResult((0, codegen.not)(condition), successAction, failAction);
        }
      }, {
        key: "failResult",
        value: function failResult(condition, successAction, failAction) {
          this.gen["if"](condition);
          if (failAction) failAction();else this.error();
          if (successAction) {
            this.gen["else"]();
            successAction();
            if (this.allErrors) this.gen.endIf();
          } else {
            if (this.allErrors) this.gen.endIf();else this.gen["else"]();
          }
        }
      }, {
        key: "pass",
        value: function pass(condition, failAction) {
          this.failResult((0, codegen.not)(condition), undefined, failAction);
        }
      }, {
        key: "fail",
        value: function fail(condition) {
          if (condition === undefined) {
            this.error();
            if (!this.allErrors) this.gen["if"](false); // this branch will be removed by gen.optimize
            return;
          }
          this.gen["if"](condition);
          this.error();
          if (this.allErrors) this.gen.endIf();else this.gen["else"]();
        }
      }, {
        key: "fail$data",
        value: function fail$data(condition) {
          if (!this.$data) return this.fail(condition);
          var schemaCode = this.schemaCode;
          this.fail((0, codegen._)(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["", " !== undefined && (", ")"])), schemaCode, (0, codegen.or)(this.invalid$data(), condition)));
        }
      }, {
        key: "error",
        value: function error(append, errorParams, errorPaths) {
          if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
          }
          this._error(append, errorPaths);
        }
      }, {
        key: "_error",
        value: function _error(append, errorPaths) {
          (append ? errors.reportExtraError : errors.reportError)(this, this.def.error, errorPaths);
        }
      }, {
        key: "$dataError",
        value: function $dataError() {
          (0, errors.reportError)(this, this.def.$dataError || errors.keyword$DataError);
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
          (0, errors.resetErrorsCount)(this.gen, this.errsCount);
        }
      }, {
        key: "ok",
        value: function ok(cond) {
          if (!this.allErrors) this.gen["if"](cond);
        }
      }, {
        key: "setParams",
        value: function setParams(obj, assign) {
          if (assign) Object.assign(this.params, obj);else this.params = obj;
        }
      }, {
        key: "block$data",
        value: function block$data(valid, codeBlock) {
          var _this23 = this;
          var $dataValid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : codegen.nil;
          this.gen.block(function () {
            _this23.check$data(valid, $dataValid);
            codeBlock();
          });
        }
      }, {
        key: "check$data",
        value: function check$data() {
          var valid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : codegen.nil;
          var $dataValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : codegen.nil;
          if (!this.$data) return;
          var gen = this.gen,
            schemaCode = this.schemaCode,
            schemaType = this.schemaType,
            def = this.def;
          gen["if"]((0, codegen.or)((0, codegen._)(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["", " === undefined"])), schemaCode), $dataValid));
          if (valid !== codegen.nil) gen.assign(valid, true);
          if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid !== codegen.nil) gen.assign(valid, false);
          }
          gen["else"]();
        }
      }, {
        key: "invalid$data",
        value: function invalid$data() {
          var gen = this.gen,
            schemaCode = this.schemaCode,
            schemaType = this.schemaType,
            def = this.def,
            it = this.it;
          return (0, codegen.or)(wrong$DataType(), invalid$DataSchema());
          function wrong$DataType() {
            if (schemaType.length) {
              /* istanbul ignore if */
              if (!(schemaCode instanceof codegen.Name)) throw new Error("ajv implementation error");
              var st = Array.isArray(schemaType) ? schemaType : [schemaType];
              return (0, codegen._)(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["", ""])), (0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong));
            }
            return codegen.nil;
          }
          function invalid$DataSchema() {
            if (def.validateSchema) {
              var validateSchemaRef = gen.scopeValue("validate$data", {
                ref: def.validateSchema
              }); // TODO value.code for standalone
              return (0, codegen._)(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["!", "(", ")"])), validateSchemaRef, schemaCode);
            }
            return codegen.nil;
          }
        }
      }, {
        key: "subschema",
        value: function subschema(appl, valid) {
          var subschema$1 = (0, _subschema.getSubschema)(this.it, appl);
          (0, _subschema.extendSubschemaData)(subschema$1, this.it, appl);
          (0, _subschema.extendSubschemaMode)(subschema$1, appl);
          var nextContext = _objectSpread(_objectSpread(_objectSpread({}, this.it), subschema$1), {}, {
            items: undefined,
            props: undefined
          });
          subschemaCode(nextContext, valid);
          return nextContext;
        }
      }, {
        key: "mergeEvaluated",
        value: function mergeEvaluated(schemaCxt, toName) {
          var it = this.it,
            gen = this.gen;
          if (!it.opts.unevaluated) return;
          if (it.props !== true && schemaCxt.props !== undefined) {
            it.props = util.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
          }
          if (it.items !== true && schemaCxt.items !== undefined) {
            it.items = util.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
          }
        }
      }, {
        key: "mergeValidEvaluated",
        value: function mergeValidEvaluated(schemaCxt, valid) {
          var _this24 = this;
          var it = this.it,
            gen = this.gen;
          if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
            gen["if"](valid, function () {
              return _this24.mergeEvaluated(schemaCxt, codegen.Name);
            });
            return true;
          }
        }
      }]);
      return KeywordCxt;
    }();
    exports.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword$1, def, ruleType) {
      var cxt = new KeywordCxt(it, def, keyword$1);
      if ("code" in def) {
        def.code(cxt, ruleType);
      } else if (cxt.$data && def.validate) {
        (0, keyword.funcKeywordCode)(cxt, def);
      } else if ("macro" in def) {
        (0, keyword.macroKeywordCode)(cxt, def);
      } else if (def.compile || def.validate) {
        (0, keyword.funcKeywordCode)(cxt, def);
      }
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
    var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, _ref37) {
      var dataLevel = _ref37.dataLevel,
        dataNames = _ref37.dataNames,
        dataPathArr = _ref37.dataPathArr;
      var jsonPointer;
      var data;
      if ($data === "") return names_1["default"].rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data)) throw new Error("Invalid JSON-pointer: ".concat($data));
        jsonPointer = $data;
        data = names_1["default"].rootData;
      } else {
        var matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches) throw new Error("Invalid JSON-pointer: ".concat($data));
        var up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
          if (up >= dataLevel) throw new Error(errorMsg("property/index", up));
          return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel) throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer) return data;
      }
      var expr = data;
      var segments = jsonPointer.split("/");
      var _iterator10 = _createForOfIteratorHelper(segments),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var segment = _step10.value;
          if (segment) {
            data = (0, codegen._)(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen.getProperty)((0, util.unescapeJsonPointer)(segment)));
            expr = (0, codegen._)(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["", " && ", ""])), expr, data);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return expr;
      function errorMsg(pointerType, up) {
        return "Cannot access ".concat(pointerType, " ").concat(up, " levels up, current level is ").concat(dataLevel);
      }
    }
    exports.getData = getData;
  });
  var ValidationError = /*#__PURE__*/function (_Error2) {
    _inherits(ValidationError, _Error2);
    var _super27 = _createSuper(ValidationError);
    function ValidationError(errors) {
      var _this25;
      _classCallCheck(this, ValidationError);
      _this25 = _super27.call(this, "validation failed");
      _this25.errors = errors;
      _this25.ajv = _this25.validation = true;
      return _this25;
    }
    return _createClass(ValidationError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var _default$z = ValidationError;
  var validation_error = /*#__PURE__*/Object.defineProperty({
    "default": _default$z
  }, '__esModule', {
    value: true
  });
  var MissingRefError = /*#__PURE__*/function (_Error3) {
    _inherits(MissingRefError, _Error3);
    var _super28 = _createSuper(MissingRefError);
    function MissingRefError(resolver, baseId, ref, msg) {
      var _this26;
      _classCallCheck(this, MissingRefError);
      _this26 = _super28.call(this, msg || "can't resolve reference ".concat(ref, " from id ").concat(baseId));
      _this26.missingRef = (0, resolve.resolveUrl)(resolver, baseId, ref);
      _this26.missingSchema = (0, resolve.normalizeId)((0, resolve.getFullPath)(resolver, _this26.missingRef));
      return _this26;
    }
    return _createClass(MissingRefError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var _default$y = MissingRefError;
  var ref_error = /*#__PURE__*/Object.defineProperty({
    "default": _default$y
  }, '__esModule', {
    value: true
  });
  var compile$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
    var SchemaEnv = /*#__PURE__*/_createClass(function SchemaEnv(env) {
      _classCallCheck(this, SchemaEnv);
      var _a;
      this.refs = {};
      this.dynamicAnchors = {};
      var schema;
      if (_typeof(env.schema) == "object") schema = env.schema;
      this.schema = env.schema;
      this.schemaId = env.schemaId;
      this.root = env.root || this;
      this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
      this.schemaPath = env.schemaPath;
      this.localRefs = env.localRefs;
      this.meta = env.meta;
      this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
      this.refs = {};
    });
    exports.SchemaEnv = SchemaEnv;
    // let codeSize = 0
    // let nodeCount = 0
    // Compiles schema in SchemaEnv
    function compileSchema(sch) {
      // TODO refactor - remove compilations
      var _sch = getCompilingSchema.call(this, sch);
      if (_sch) return _sch;
      var rootId = (0, resolve.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
      var _this$opts$code = this.opts.code,
        es5 = _this$opts$code.es5,
        lines = _this$opts$code.lines;
      var ownProperties = this.opts.ownProperties;
      var gen = new codegen.CodeGen(this.scope, {
        es5: es5,
        lines: lines,
        ownProperties: ownProperties
      });
      var _ValidationError;
      if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
          ref: validation_error["default"],
          code: (0, codegen._)(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["require(\"ajv/dist/runtime/validation_error\").default"])))
        });
      }
      var validateName = gen.scopeName("validate");
      sch.validateName = validateName;
      var schemaCxt = {
        gen: gen,
        allErrors: this.opts.allErrors,
        data: names_1["default"].data,
        parentData: names_1["default"].parentData,
        parentDataProperty: names_1["default"].parentDataProperty,
        dataNames: [names_1["default"].data],
        dataPathArr: [codegen.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
          ref: sch.schema,
          code: (0, codegen.stringify)(sch.schema)
        } : {
          ref: sch.schema
        }),
        validateName: validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId: rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen._)(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\"\""]))),
        opts: this.opts,
        self: this
      };
      var sourceCode;
      try {
        this._compilations.add(sch);
        (0, validate$1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        // gen.optimize(1)
        var validateCode = gen.toString();
        sourceCode = "".concat(gen.scopeRefs(names_1["default"].scope), "return ").concat(validateCode);
        // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
        if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
        // console.log("\n\n\n *** \n", sourceCode)
        var makeValidate = new Function("".concat(names_1["default"].self), "".concat(names_1["default"].scope), sourceCode);
        var _validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, {
          ref: _validate
        });
        _validate.errors = null;
        _validate.schema = sch.schema;
        _validate.schemaEnv = sch;
        if (sch.$async) _validate.$async = true;
        if (this.opts.code.source === true) {
          _validate.source = {
            validateName: validateName,
            validateCode: validateCode,
            scopeValues: gen._values
          };
        }
        if (this.opts.unevaluated) {
          var props = schemaCxt.props,
            _items = schemaCxt.items;
          _validate.evaluated = {
            props: props instanceof codegen.Name ? undefined : props,
            items: _items instanceof codegen.Name ? undefined : _items,
            dynamicProps: props instanceof codegen.Name,
            dynamicItems: _items instanceof codegen.Name
          };
          if (_validate.source) _validate.source.evaluated = (0, codegen.stringify)(_validate.evaluated);
        }
        sch.validate = _validate;
        return sch;
      } catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode);
        // console.log("\n\n\n *** \n", sourceCode, this.opts)
        throw e;
      } finally {
        this._compilations["delete"](sch);
      }
    }
    exports.compileSchema = compileSchema;
    function resolveRef(root, baseId, ref) {
      var _a;
      ref = (0, resolve.resolveUrl)(this.opts.uriResolver, baseId, ref);
      var schOrFunc = root.refs[ref];
      if (schOrFunc) return schOrFunc;
      var _sch = resolve$1.call(this, root, ref);
      if (_sch === undefined) {
        var _schema2 = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
        var schemaId = this.opts.schemaId;
        if (_schema2) _sch = new SchemaEnv({
          schema: _schema2,
          schemaId: schemaId,
          root: root,
          baseId: baseId
        });
      }
      if (_sch === undefined) return;
      return root.refs[ref] = inlineOrCompile.call(this, _sch);
    }
    exports.resolveRef = resolveRef;
    function inlineOrCompile(sch) {
      if ((0, resolve.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
      return sch.validate ? sch : compileSchema.call(this, sch);
    }
    // Index of schema compilation in the currently compiled list
    function getCompilingSchema(schEnv) {
      var _iterator11 = _createForOfIteratorHelper(this._compilations),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var sch = _step11.value;
          if (sameSchemaEnv(sch, schEnv)) return sch;
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
    exports.getCompilingSchema = getCompilingSchema;
    function sameSchemaEnv(s1, s2) {
      return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
    }
    // resolve and compile the references ($ref)
    // TODO returns AnySchemaObject (if the schema can be inlined) or validation function
    function resolve$1(root,
    // information about the root schema for the current schema
    ref // reference to resolve
    ) {
      var sch;
      while (typeof (sch = this.refs[ref]) == "string") ref = sch;
      return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
    }
    // Resolve schema, its root and baseId
    function resolveSchema(root,
    // root object with properties schema, refs TODO below SchemaEnv is assigned to it
    ref // reference to resolve
    ) {
      var p = this.opts.uriResolver.parse(ref);
      var refPath = (0, resolve._getFullPath)(this.opts.uriResolver, p);
      var baseId = (0, resolve.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
      // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
      if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p, root);
      }
      var id = (0, resolve.normalizeId)(refPath);
      var schOrRef = this.refs[id] || this.schemas[id];
      if (typeof schOrRef == "string") {
        var sch = resolveSchema.call(this, root, schOrRef);
        if (_typeof(sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
        return getJsonPointer.call(this, p, sch);
      }
      if (_typeof(schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
      if (!schOrRef.validate) compileSchema.call(this, schOrRef);
      if (id === (0, resolve.normalizeId)(ref)) {
        var _schema3 = schOrRef.schema;
        var schemaId = this.opts.schemaId;
        var schId = _schema3[schemaId];
        if (schId) baseId = (0, resolve.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({
          schema: _schema3,
          schemaId: schemaId,
          root: root,
          baseId: baseId
        });
      }
      return getJsonPointer.call(this, p, schOrRef);
    }
    exports.resolveSchema = resolveSchema;
    var PREVENT_SCOPE_CHANGE = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function getJsonPointer(parsedRef, _ref38) {
      var baseId = _ref38.baseId,
        schema = _ref38.schema,
        root = _ref38.root;
      var _a;
      if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/") return;
      var _iterator12 = _createForOfIteratorHelper(parsedRef.fragment.slice(1).split("/")),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var part = _step12.value;
          if (typeof schema === "boolean") return;
          var partSchema = schema[(0, util.unescapeFragment)(part)];
          if (partSchema === undefined) return;
          schema = partSchema;
          // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
          var schId = _typeof(schema) === "object" && schema[this.opts.schemaId];
          if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
            baseId = (0, resolve.resolveUrl)(this.opts.uriResolver, baseId, schId);
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      var env;
      if (typeof schema != "boolean" && schema.$ref && !(0, util.schemaHasRulesButRef)(schema, this.RULES)) {
        var $ref = (0, resolve.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
      }
      // even though resolution failed we need to return SchemaEnv to throw exception
      // so that compileAsync loads missing schema.
      var schemaId = this.opts.schemaId;
      env = env || new SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
      });
      if (env.schema !== env.root.schema) return env;
      return undefined;
    }
  });
  var $id$1 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
  var description = "Meta-schema for $data reference (JSON AnySchema extension proposal)";
  var type$1 = "object";
  var required$1 = ["$data"];
  var properties$2 = {
    $data: {
      type: "string",
      anyOf: [{
        format: "relative-json-pointer"
      }, {
        format: "json-pointer"
      }]
    }
  };
  var additionalProperties$1 = false;
  var $dataRefSchema = {
    $id: $id$1,
    description: description,
    type: type$1,
    required: required$1,
    properties: properties$2,
    additionalProperties: additionalProperties$1
  };

  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */

  var uri_all = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
      factory(exports);
    })(commonjsGlobal, function (exports) {
      function merge() {
        for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
        }
        if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join('');
        } else {
          return sets[0];
        }
      }
      function subexp(str) {
        return "(?:" + str + ")";
      }
      function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
      }
      function toUpperCase(str) {
        return str.toUpperCase();
      }
      function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
      }
      function assign(target, source) {
        var obj = target;
        if (source) {
          for (var key in source) {
            obj[key] = source[key];
          }
        }
        return obj;
      }
      function buildExps(isIRI) {
        var ALPHA$$ = "[A-Za-z]",
          DIGIT$$ = "[0-9]",
          HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
          PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
          //expanded
          GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
          SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
          RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
          UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
          //subset, excludes bidi control characters
          IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
          //subset
          UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
        subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
        subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*");
        var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
          //relaxed parsing rules
          IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
          H16$ = subexp(HEXDIG$$ + "{1,4}"),
          LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
          IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
          //                           6( h16 ":" ) ls32
          IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
          //                      "::" 5( h16 ":" ) ls32
          IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
          //[               h16 ] "::" 4( h16 ":" ) ls32
          IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
          //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
          IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
          //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
          IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
          //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
          IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
          //[ *4( h16 ":" ) h16 ] "::"              ls32
          IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
          //[ *5( h16 ":" ) h16 ] "::"              h16
          IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
          //[ *6( h16 ":" ) h16 ] "::"
          IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
          ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+");
        //RFC 6874, with relaxed parsing rules
        subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+");
        //RFC 6874
        subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*");
        var PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]"));
        subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+");
        subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
        return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
        };
      }

      var URI_PROTOCOL = buildExps(false);
      var IRI_PROTOCOL = buildExps(true);
      var slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;
          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      var toConsumableArray = function toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
          return arr2;
        } else {
          return Array.from(arr);
        }
      };

      /** Highest positive signed 32-bit float value */

      var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

      /** Bootstring parameters */
      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128; // 0x80
      var delimiter = '-'; // '\x2D'

      /** Regular expressions */
      var regexPunycode = /^xn--/;
      var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
      var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

      /** Error messages */
      var errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
      };

      /** Convenience shortcuts */
      var baseMinusTMin = base - tMin;
      var floor = Math.floor;
      var stringFromCharCode = String.fromCharCode;

      /*--------------------------------------------------------------------------*/

      /**
       * A generic error utility function.
       * @private
       * @param {String} type The error type.
       * @returns {Error} Throws a `RangeError` with the applicable error message.
       */
      function error$1(type) {
        throw new RangeError(errors[type]);
      }

      /**
       * A generic `Array#map` utility function.
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} callback The function that gets called for every array
       * item.
       * @returns {Array} A new array of values returned by the callback function.
       */
      function map(array, fn) {
        var result = [];
        var length = array.length;
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }

      /**
       * A simple `Array#map`-like wrapper to work with domain name strings or email
       * addresses.
       * @private
       * @param {String} domain The domain name or email address.
       * @param {Function} callback The function that gets called for every
       * character.
       * @returns {Array} A new string of characters returned by the callback
       * function.
       */
      function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
          // In email addresses, only the domain name should be punycoded. Leave
          // the local part (i.e. everything up to `@`) intact.
          result = parts[0] + '@';
          string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
      }

      /**
       * Creates an array containing the numeric code points of each Unicode
       * character in the string. While JavaScript uses UCS-2 internally,
       * this function will convert a pair of surrogate halves (each of which
       * UCS-2 exposes as separate characters) into a single code point,
       * matching UTF-16.
       * @see `punycode.ucs2.encode`
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode.ucs2
       * @name decode
       * @param {String} string The Unicode input string (UCS-2).
       * @returns {Array} The new array of code points.
       */
      function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while (counter < length) {
          var value = string.charCodeAt(counter++);
          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);
            if ((extra & 0xFC00) == 0xDC00) {
              // Low surrogate.
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // It's an unmatched surrogate; only append this code unit, in case the
              // next code unit is the high surrogate of a surrogate pair.
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }

      /**
       * Creates a string based on an array of numeric code points.
       * @see `punycode.ucs2.decode`
       * @memberOf punycode.ucs2
       * @name encode
       * @param {Array} codePoints The array of numeric code points.
       * @returns {String} The new Unicode string (UCS-2).
       */
      var ucs2encode = function ucs2encode(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
      };

      /**
       * Converts a basic code point into a digit/integer.
       * @see `digitToBasic()`
       * @private
       * @param {Number} codePoint The basic numeric code point value.
       * @returns {Number} The numeric value of a basic code point (for use in
       * representing integers) in the range `0` to `base - 1`, or `base` if
       * the code point does not represent a value.
       */
      var basicToDigit = function basicToDigit(codePoint) {
        if (codePoint - 0x30 < 0x0A) {
          return codePoint - 0x16;
        }
        if (codePoint - 0x41 < 0x1A) {
          return codePoint - 0x41;
        }
        if (codePoint - 0x61 < 0x1A) {
          return codePoint - 0x61;
        }
        return base;
      };

      /**
       * Converts a digit/integer into a basic code point.
       * @see `basicToDigit()`
       * @private
       * @param {Number} digit The numeric value of a basic code point.
       * @returns {Number} The basic code point whose value (when used for
       * representing integers) is `digit`, which needs to be in the range
       * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
       * used; else, the lowercase form is used. The behavior is undefined
       * if `flag` is non-zero and `digit` has no uppercase form.
       */
      var digitToBasic = function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      };

      /**
       * Bias adaptation function as per section 3.4 of RFC 3492.
       * https://tools.ietf.org/html/rfc3492#section-3.4
       * @private
       */
      var adapt = function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };

      /**
       * Converts a Punycode string of ASCII-only symbols to a string of Unicode
       * symbols.
       * @memberOf punycode
       * @param {String} input The Punycode string of ASCII-only symbols.
       * @returns {String} The resulting string of Unicode symbols.
       */
      var decode = function decode(input) {
        // Don't use UCS-2.
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;

        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.

        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (var j = 0; j < basic; ++j) {
          // if it's not a basic code point
          if (input.charCodeAt(j) >= 0x80) {
            error$1('not-basic');
          }
          output.push(input.charCodeAt(j));
        }

        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.

        for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{
          // `index` is the index of the next character to be consumed.
          // Decode a generalized variable-length integer into `delta`,
          // which gets added to `i`. The overflow checking is easier
          // if we increase `i` as we go, then subtract off its starting
          // value at the end to obtain `delta`.
          var oldi = i;
          for (var w = 1, k = base;; /* no condition */k += base) {
            if (index >= inputLength) {
              error$1('invalid-input');
            }
            var digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error$1('overflow');
            }
            i += digit * w;
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            var baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error$1('overflow');
            }
            w *= baseMinusT;
          }
          var out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);

          // `i` was supposed to wrap around from `out` to `0`,
          // incrementing `n` each time, so we'll fix that now:
          if (floor(i / out) > maxInt - n) {
            error$1('overflow');
          }
          n += floor(i / out);
          i %= out;

          // Insert `n` at position `i` of the output.
          output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
      };

      /**
       * Converts a string of Unicode symbols (e.g. a domain name label) to a
       * Punycode string of ASCII-only symbols.
       * @memberOf punycode
       * @param {String} input The string of Unicode symbols.
       * @returns {String} The resulting Punycode string of ASCII-only symbols.
       */
      var encode = function encode(input) {
        var output = [];

        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);

        // Cache the length.
        var inputLength = input.length;

        // Initialize the state.
        var n = initialN;
        var delta = 0;
        var bias = initialBias;

        // Handle the basic code points.
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _currentValue2 = _step.value;
            if (_currentValue2 < 0x80) {
              output.push(stringFromCharCode(_currentValue2));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"]) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;

        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.

        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) {
          output.push(delimiter);
        }

        // Main encoding loop:
        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next
          // larger one:
          var m = maxInt;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;
          try {
            for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var currentValue = _step2.value;
              if (currentValue >= n && currentValue < m) {
                m = currentValue;
              }
            }

            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow.
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          var handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error$1('overflow');
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;
          try {
            for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _currentValue = _step3.value;
              if (_currentValue < n && ++delta > maxInt) {
                error$1('overflow');
              }
              if (_currentValue == n) {
                // Represent delta as a generalized variable-length integer.
                var q = delta;
                for (var k = base;; /* no condition */k += base) {
                  var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                  if (q < t) {
                    break;
                  }
                  var qMinusT = q - t;
                  var baseMinusT = base - t;
                  output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                  q = floor(qMinusT / baseMinusT);
                }
                output.push(stringFromCharCode(digitToBasic(q, 0)));
                bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                delta = 0;
                ++handledCPCount;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          ++delta;
          ++n;
        }
        return output.join('');
      };

      /**
       * Converts a Punycode string representing a domain name or an email address
       * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
       * it doesn't matter if you call it on a string that has already been
       * converted to Unicode.
       * @memberOf punycode
       * @param {String} input The Punycoded domain name or email address to
       * convert to Unicode.
       * @returns {String} The Unicode representation of the given Punycode
       * string.
       */
      var toUnicode = function toUnicode(input) {
        return mapDomain(input, function (string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      };

      /**
       * Converts a Unicode string representing a domain name or an email address to
       * Punycode. Only the non-ASCII parts of the domain name will be converted,
       * i.e. it doesn't matter if you call it with a domain that's already in
       * ASCII.
       * @memberOf punycode
       * @param {String} input The domain name or email address to convert, as a
       * Unicode string.
       * @returns {String} The Punycode representation of the given domain name or
       * email address.
       */
      var toASCII = function toASCII(input) {
        return mapDomain(input, function (string) {
          return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
      };

      /*--------------------------------------------------------------------------*/

      /** Define the public API */
      var punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        'version': '2.1.0',
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        'ucs2': {
          'decode': ucs2decode,
          'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
      };

      /**
       * URI.js
       *
       * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
       * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
       * @see http://github.com/garycourt/uri-js
       */
      /**
       * Copyright 2011 Gary Court. All rights reserved.
       *
       * Redistribution and use in source and binary forms, with or without modification, are
       * permitted provided that the following conditions are met:
       *
       *    1. Redistributions of source code must retain the above copyright notice, this list of
       *       conditions and the following disclaimer.
       *
       *    2. Redistributions in binary form must reproduce the above copyright notice, this list
       *       of conditions and the following disclaimer in the documentation and/or other materials
       *       provided with the distribution.
       *
       * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
       * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
       * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
       * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
       * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
       * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
       * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
       * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
       * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
       *
       * The views and conclusions contained in the software and documentation are those of the
       * authors and should not be interpreted as representing official policies, either expressed
       * or implied, of Gary Court.
       */
      var SCHEMES = {};
      function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
      }
      function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
          } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
              var c2 = parseInt(str.substr(i + 4, 2), 16);
              newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
              newStr += str.substr(i, 6);
            }
            i += 6;
          } else if (c >= 224) {
            if (il - i >= 9) {
              var _c = parseInt(str.substr(i + 4, 2), 16);
              var c3 = parseInt(str.substr(i + 7, 2), 16);
              newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
              newStr += str.substr(i, 9);
            }
            i += 9;
          } else {
            newStr += str.substr(i, 3);
            i += 3;
          }
        }
        return newStr;
      }
      function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
      }
      function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
      }
      function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2),
          address = _matches[1];
        if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
        } else {
          return host;
        }
      }
      function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3),
          address = _matches2[1],
          zone = _matches2[2];
        if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
            last = _address$toLowerCase$2[0],
            first = _address$toLowerCase$2[1];
          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
          }
          if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function (acc, field, index) {
            if (!field || field === "0") {
              var lastLongest = acc[acc.length - 1];
              if (lastLongest && lastLongest.index + lastLongest.length === index) {
                lastLongest.length++;
              } else {
                acc.push({
                  index: index,
                  length: 1
                });
              }
            }
            return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function (a, b) {
            return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
            newHost = fields.join(":");
          }
          if (zone) {
            newHost += "%" + zone;
          }
          return newHost;
        } else {
          return host;
        }
      }
      var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
      var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
      function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
            //store each component
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            //fix port number
            if (isNaN(components.port)) {
              components.port = matches[5];
            }
          } else {
            //IE FIX for improper RegExp matching
            //store each component
            components.scheme = matches[1] || undefined;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
            //fix port number
            if (isNaN(components.port)) {
              components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
            }
          }
          if (components.host) {
            //normalize IP hosts
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          //determine reference type
          if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
            components.reference = "same-document";
          } else if (components.scheme === undefined) {
            components.reference = "relative";
          } else if (components.fragment === undefined) {
            components.reference = "absolute";
          } else {
            components.reference = "uri";
          }
          //check for reference errors
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          //find scheme handler
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          //check if scheme can't handle IRIs
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            //if host component is a domain name
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
              //convert Unicode IDN -> ASCII IDN
              try {
                components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
              } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
              }
            }
            //convert IRI -> URI
            _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
            //normalize encodings
            _normalizeComponentEncoding(components, protocol);
          }
          //perform scheme specific parsing
          if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
          }
        } else {
          components.error = components.error || "URI can not be parsed.";
        }
        return components;
      }
      function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== undefined) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
        }
        if (components.host !== undefined) {
          //normalize IP hosts, add brackets and escape zone separator for IPv6
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
        }
        if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : undefined;
      }
      var RDS1 = /^\.\.?\//;
      var RDS2 = /^\/\.(\/|$)/;
      var RDS3 = /^\/\.\.(\/|$)/;
      var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
      function removeDotSegments(input) {
        var output = [];
        while (input.length) {
          if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
          } else if (input === "." || input === "..") {
            input = "";
          } else {
            var im = input.match(RDS5);
            if (im) {
              var s = im[0];
              input = input.slice(s.length);
              output.push(s);
            } else {
              throw new Error("Unexpected dot segment condition");
            }
          }
        }
        return output.join("");
      }
      function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //perform scheme specific serialization
        if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
        if (components.host) {
          //if host component is an IPv6 address
          if (protocol.IPV6ADDRESS.test(components.host)) ;
          //TODO: normalize IPv6 address as per RFC 5952

          //if host component is a domain name
          else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
            //convert IDN via punycode
            try {
              components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
              components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
          }
        }
        //normalize encoding
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== undefined) {
          if (options.reference !== "suffix") {
            uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
          }
        }
        if (components.path !== undefined) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
          }
          if (authority === undefined) {
            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
          }

          uriTokens.push(s);
        }
        if (components.query !== undefined) {
          uriTokens.push("?");
          uriTokens.push(components.query);
        }
        if (components.fragment !== undefined) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
        }
        return uriTokens.join(""); //merge tokens into a string
      }

      function resolveComponents(base, relative) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
          base = parse(serialize(base, options), options); //normalize base components
          relative = parse(serialize(relative, options), options); //normalize relative components
        }

        options = options || {};
        if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          //target.authority = relative.authority;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
        } else {
          if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
          } else {
            if (!relative.path) {
              target.path = base.path;
              if (relative.query !== undefined) {
                target.query = relative.query;
              } else {
                target.query = base.query;
              }
            } else {
              if (relative.path.charAt(0) === "/") {
                target.path = removeDotSegments(relative.path);
              } else {
                if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                  target.path = "/" + relative.path;
                } else if (!base.path) {
                  target.path = relative.path;
                } else {
                  target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                }
                target.path = removeDotSegments(target.path);
              }
              target.query = relative.query;
            }
            //target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
          }
          target.scheme = base.scheme;
        }
        target.fragment = relative.fragment;
        return target;
      }
      function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({
          scheme: 'null'
        }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
      }
      function normalize(uri, options) {
        if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
        } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
        }
        return uri;
      }
      function equal(uriA, uriB, options) {
        if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
        } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
        }
        if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
        } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
        }
        return uriA === uriB;
      }
      function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
      }
      function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
      }
      var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse(components, options) {
          //report missing host
          if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
        },
        serialize: function serialize(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          //normalize the default port
          if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = undefined;
          }
          //normalize the empty path
          if (!components.path) {
            components.path = "/";
          }
          //NOTE: We do not parse query strings for HTTP URIs
          //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
          //and not the HTTP spec.
          return components;
        }
      };
      var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
      };
      function isSecure(wsComponents) {
        return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
      }
      //RFC 6455
      var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse(components, options) {
          var wsComponents = components;
          //indicate if the secure flag is set
          wsComponents.secure = isSecure(wsComponents);
          //construct resouce name
          wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
          wsComponents.path = undefined;
          wsComponents.query = undefined;
          return wsComponents;
        },
        serialize: function serialize(wsComponents, options) {
          //normalize the default port
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = undefined;
          }
          //ensure scheme matches secure flag
          if (typeof wsComponents.secure === 'boolean') {
            wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
            wsComponents.secure = undefined;
          }
          //reconstruct path from resource name
          if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split('?'),
              _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
              path = _wsComponents$resourc2[0],
              query = _wsComponents$resourc2[1];
            wsComponents.path = path && path !== '/' ? path : undefined;
            wsComponents.query = query;
            wsComponents.resourceName = undefined;
          }
          //forbid fragment component
          wsComponents.fragment = undefined;
          return wsComponents;
        }
      };
      var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
      };
      var O = {};
      //RFC 3986
      var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" + "]";
      var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
      var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
      //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
      //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
      //const WSP$$ = "[\\x20\\x09]";
      //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
      //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
      //const VCHAR$$ = "[\\x21-\\x7E]";
      //const WSP$$ = "[\\x20\\x09]";
      //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
      //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
      //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
      //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
      var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
      var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
      var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
      var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
      var UNRESERVED = new RegExp(UNRESERVED$$, "g");
      var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
      var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
      var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
      var NOT_HFVALUE = NOT_HFNAME;
      function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
      }
      var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = undefined;
          if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
              var hfield = hfields[x].split("=");
              switch (hfield[0]) {
                case "to":
                  var toAddrs = hfield[1].split(",");
                  for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                    to.push(toAddrs[_x]);
                  }
                  break;
                case "subject":
                  mailtoComponents.subject = unescapeComponent(hfield[1], options);
                  break;
                case "body":
                  mailtoComponents.body = unescapeComponent(hfield[1], options);
                  break;
                default:
                  unknownHeaders = true;
                  headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                  break;
              }
            }
            if (unknownHeaders) mailtoComponents.headers = headers;
          }
          mailtoComponents.query = undefined;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
              //convert Unicode IDN -> ASCII IDN
              try {
                addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
              } catch (e) {
                mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
              }
            } else {
              addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
          }
          return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
              var toAddr = String(to[x]);
              var atIdx = toAddr.lastIndexOf("@");
              var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
              var domain = toAddr.slice(atIdx + 1);
              //convert IDN via punycode
              try {
                domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
              } catch (e) {
                components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
              }
              to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
            if (headers[name] !== O[name]) {
              fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
          }
          if (fields.length) {
            components.query = fields.join("&");
          }
          return components;
        }
      };
      var URN_PARSE = /^([^\:]+)\:(.*)/;
      //RFC 2141
      var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
              urnComponents = schemeHandler.parse(urnComponents, options);
            }
          } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
        }
      };
      var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
      //RFC 4122
      var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = undefined;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
        },
        serialize: function serialize(uuidComponents, options) {
          var urnComponents = uuidComponents;
          //normalize UUID
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
        }
      };
      SCHEMES[handler.scheme] = handler;
      SCHEMES[handler$1.scheme] = handler$1;
      SCHEMES[handler$2.scheme] = handler$2;
      SCHEMES[handler$3.scheme] = handler$3;
      SCHEMES[handler$4.scheme] = handler$4;
      SCHEMES[handler$5.scheme] = handler$5;
      SCHEMES[handler$6.scheme] = handler$6;
      exports.SCHEMES = SCHEMES;
      exports.pctEncChar = pctEncChar;
      exports.pctDecChars = pctDecChars;
      exports.parse = parse;
      exports.removeDotSegments = removeDotSegments;
      exports.serialize = serialize;
      exports.resolveComponents = resolveComponents;
      exports.resolve = resolve;
      exports.normalize = normalize;
      exports.equal = equal;
      exports.escapeComponent = escapeComponent;
      exports.unescapeComponent = unescapeComponent;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    });
  });
  uri_all.code = 'require("ajv/dist/runtime/uri").default';
  var _default$x = uri_all;
  var uri_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$x
  }, '__esModule', {
    value: true
  });
  var core$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate$1.KeywordCxt;
      }
    });
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen.CodeGen;
      }
    });
    var codegen_2 = codegen;
    var defaultRegExp = function defaultRegExp(str, flags) {
      return new RegExp(str, flags);
    };
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
    var EXT_SCOPE_NAMES = new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]);
    var removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    };
    var deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    var MAX_EXPRESSION = 200;
    // eslint-disable-next-line complexity
    function requiredOptions(o) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      var s = o.strict;
      var _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
      var optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
      var regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
      var uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1["default"];
      return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? _objectSpread(_objectSpread({}, o.code), {}, {
          optimize: optimize,
          regExp: regExp
        }) : {
          optimize: optimize,
          regExp: regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver: uriResolver
      };
    }
    var Ajv = /*#__PURE__*/function () {
      function Ajv() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Ajv);
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = _objectSpread(_objectSpread({}, opts), requiredOptions(opts));
        var _this$opts$code2 = this.opts.code,
          es5 = _this$opts$code2.es5,
          lines = _this$opts$code2.lines;
        this.scope = new codegen_2.ValueScope({
          scope: {},
          prefixes: EXT_SCOPE_NAMES,
          es5: es5,
          lines: lines
        });
        this.logger = getLogger(opts.logger);
        var formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats) addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) addInitialKeywords.call(this, opts.keywords);
        if (_typeof(opts.meta) == "object") this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
      }
      _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          this.addKeyword("$async");
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          var _this$opts2 = this.opts,
            $data = _this$opts2.$data,
            meta = _this$opts2.meta,
            schemaId = _this$opts2.schemaId;
          var _dataRefSchema = $dataRefSchema;
          if (schemaId === "id") {
            _dataRefSchema = _objectSpread({}, $dataRefSchema);
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
          }
          if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          var _this$opts3 = this.opts,
            meta = _this$opts3.meta,
            schemaId = _this$opts3.schemaId;
          return this.opts.defaultMeta = _typeof(meta) == "object" ? meta[schemaId] || meta : undefined;
        }
      }, {
        key: "validate",
        value: function validate(schemaKeyRef,
        // key, ref or schema object
        data // to be validated
        ) {
          var v;
          if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v) throw new Error("no schema with key or ref \"".concat(schemaKeyRef, "\""));
          } else {
            v = this.compile(schemaKeyRef);
          }
          var valid = v(data);
          if (!("$async" in v)) this.errors = v.errors;
          return valid;
        }
      }, {
        key: "compile",
        value: function compile(schema, _meta) {
          var sch = this._addSchema(schema, _meta);
          return sch.validate || this._compileSchemaEnv(sch);
        }
      }, {
        key: "compileAsync",
        value: function compileAsync(schema, meta) {
          if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
          }
          var loadSchema = this.opts.loadSchema;
          return runCompileAsync.call(this, schema, meta);
          function runCompileAsync(_x3, _x4) {
            return _runCompileAsync.apply(this, arguments);
          }
          function _runCompileAsync() {
            _runCompileAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_schema, _meta) {
              var sch;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 2:
                    sch = this._addSchema(_schema, _meta);
                    return _context.abrupt("return", sch.validate || _compileAsync.call(this, sch));
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
            return _runCompileAsync.apply(this, arguments);
          }
          function loadMetaSchema(_x5) {
            return _loadMetaSchema.apply(this, arguments);
          }
          function _loadMetaSchema() {
            _loadMetaSchema = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2($ref) {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!($ref && !this.getSchema($ref))) {
                      _context2.next = 3;
                      break;
                    }
                    _context2.next = 3;
                    return runCompileAsync.call(this, {
                      $ref: $ref
                    }, true);
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
            return _loadMetaSchema.apply(this, arguments);
          }
          function _compileAsync(_x6) {
            return _compileAsync2.apply(this, arguments);
          }
          function _compileAsync2() {
            _compileAsync2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sch) {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    return _context3.abrupt("return", this._compileSchemaEnv(sch));
                  case 4:
                    _context3.prev = 4;
                    _context3.t0 = _context3["catch"](0);
                    if (_context3.t0 instanceof ref_error["default"]) {
                      _context3.next = 8;
                      break;
                    }
                    throw _context3.t0;
                  case 8:
                    checkLoaded.call(this, _context3.t0);
                    _context3.next = 11;
                    return loadMissingSchema.call(this, _context3.t0.missingSchema);
                  case 11:
                    return _context3.abrupt("return", _compileAsync.call(this, sch));
                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this, [[0, 4]]);
            }));
            return _compileAsync2.apply(this, arguments);
          }
          function checkLoaded(_ref39) {
            var ref = _ref39.missingSchema,
              missingRef = _ref39.missingRef;
            if (this.refs[ref]) {
              throw new Error("AnySchema ".concat(ref, " is loaded but ").concat(missingRef, " cannot be resolved"));
            }
          }
          function loadMissingSchema(_x7) {
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadMissingSchema() {
            _loadMissingSchema = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ref) {
              var _schema;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return _loadSchema.call(this, ref);
                  case 2:
                    _schema = _context4.sent;
                    if (this.refs[ref]) {
                      _context4.next = 6;
                      break;
                    }
                    _context4.next = 6;
                    return loadMetaSchema.call(this, _schema.$schema);
                  case 6:
                    if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
            return _loadMissingSchema.apply(this, arguments);
          }
          function _loadSchema(_x8) {
            return _loadSchema2.apply(this, arguments);
          }
          function _loadSchema2() {
            _loadSchema2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(ref) {
              var p;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    p = this._loading[ref];
                    if (!p) {
                      _context5.next = 3;
                      break;
                    }
                    return _context5.abrupt("return", p);
                  case 3:
                    _context5.prev = 3;
                    _context5.next = 6;
                    return this._loading[ref] = loadSchema(ref);
                  case 6:
                    return _context5.abrupt("return", _context5.sent);
                  case 7:
                    _context5.prev = 7;
                    delete this._loading[ref];
                    return _context5.finish(7);
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this, [[3,, 7, 10]]);
            }));
            return _loadSchema2.apply(this, arguments);
          }
        }
        // Adds schema to the instance
      }, {
        key: "addSchema",
        value: function addSchema(schema,
        // If array is passed, `key` will be ignored
        key,
        // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
        _meta) {
          var _validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          if (Array.isArray(schema)) {
            var _iterator13 = _createForOfIteratorHelper(schema),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var sch = _step13.value;
                this.addSchema(sch, undefined, _meta, _validateSchema);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            return this;
          }
          var id;
          if (_typeof(schema) === "object") {
            var schemaId = this.opts.schemaId;
            id = schema[schemaId];
            if (id !== undefined && typeof id != "string") {
              throw new Error("schema ".concat(schemaId, " must be string"));
            }
          }
          key = (0, resolve.normalizeId)(key || id);
          this._checkUnique(key);
          this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
          return this;
        }
        // Add schema that will be used to validate other schemas
        // options in META_IGNORE_OPTIONS are alway set to false
      }, {
        key: "addMetaSchema",
        value: function addMetaSchema(schema, key) {
          var _validateSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.opts.validateSchema;
          this.addSchema(schema, key, true, _validateSchema);
          return this;
        }
        //  Validate schema against its meta-schema
      }, {
        key: "validateSchema",
        value: function validateSchema(schema, throwOrLogError) {
          if (typeof schema == "boolean") return true;
          var $schema;
          $schema = schema.$schema;
          if ($schema !== undefined && typeof $schema != "string") {
            throw new Error("$schema must be a string");
          }
          $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
          if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
          }
          var valid = this.validate($schema, schema);
          if (!valid && throwOrLogError) {
            var message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(message);else throw new Error(message);
          }
          return valid;
        }
        // Get compiled schema by `key` or `ref`.
        // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      }, {
        key: "getSchema",
        value: function getSchema(keyRef) {
          var sch;
          while (typeof (sch = getSchEnv.call(this, keyRef)) == "string") keyRef = sch;
          if (sch === undefined) {
            var schemaId = this.opts.schemaId;
            var root = new compile$1.SchemaEnv({
              schema: {},
              schemaId: schemaId
            });
            sch = compile$1.resolveSchema.call(this, root, keyRef);
            if (!sch) return;
            this.refs[keyRef] = sch;
          }
          return sch.validate || this._compileSchemaEnv(sch);
        }
        // Remove cached schema(s).
        // If no parameter is passed all schemas but meta-schemas are removed.
        // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
        // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      }, {
        key: "removeSchema",
        value: function removeSchema(schemaKeyRef) {
          if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
          }
          switch (_typeof(schemaKeyRef)) {
            case "undefined":
              this._removeAllSchemas(this.schemas);
              this._removeAllSchemas(this.refs);
              this._cache.clear();
              return this;
            case "string":
              {
                var sch = getSchEnv.call(this, schemaKeyRef);
                if (_typeof(sch) == "object") this._cache["delete"](sch.schema);
                delete this.schemas[schemaKeyRef];
                delete this.refs[schemaKeyRef];
                return this;
              }
            case "object":
              {
                var cacheKey = schemaKeyRef;
                this._cache["delete"](cacheKey);
                var _id = schemaKeyRef[this.opts.schemaId];
                if (_id) {
                  _id = (0, resolve.normalizeId)(_id);
                  delete this.schemas[_id];
                  delete this.refs[_id];
                }
                return this;
              }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        // add "vocabulary" - a collection of keywords
      }, {
        key: "addVocabulary",
        value: function addVocabulary(definitions) {
          var _iterator14 = _createForOfIteratorHelper(definitions),
            _step14;
          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _def2 = _step14.value;
              this.addKeyword(_def2);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }
          return this;
        }
      }, {
        key: "addKeyword",
        value: function addKeyword(kwdOrDef, def // deprecated
        ) {
          var _this27 = this;
          var keyword;
          if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (_typeof(def) == "object") {
              this.logger.warn("these parameters are deprecated, see docs for addKeyword");
              def.keyword = keyword;
            }
          } else if (_typeof(kwdOrDef) == "object" && def === undefined) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
              throw new Error("addKeywords: keyword must be string or non-empty array");
            }
          } else {
            throw new Error("invalid addKeywords parameters");
          }
          checkKeyword.call(this, keyword, def);
          if (!def) {
            (0, util.eachItem)(keyword, function (kwd) {
              return addRule.call(_this27, kwd);
            });
            return this;
          }
          keywordMetaschema.call(this, def);
          var definition = _objectSpread(_objectSpread({}, def), {}, {
            type: (0, dataType.getJSONTypes)(def.type),
            schemaType: (0, dataType.getJSONTypes)(def.schemaType)
          });
          (0, util.eachItem)(keyword, definition.type.length === 0 ? function (k) {
            return addRule.call(_this27, k, definition);
          } : function (k) {
            return definition.type.forEach(function (t) {
              return addRule.call(_this27, k, definition, t);
            });
          });
          return this;
        }
      }, {
        key: "getKeyword",
        value: function getKeyword(keyword) {
          var rule = this.RULES.all[keyword];
          return _typeof(rule) == "object" ? rule.definition : !!rule;
        }
        // Remove keyword
      }, {
        key: "removeKeyword",
        value: function removeKeyword(keyword) {
          // TODO return type should be Ajv
          var RULES = this.RULES;
          delete RULES.keywords[keyword];
          delete RULES.all[keyword];
          var _iterator15 = _createForOfIteratorHelper(RULES.rules),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var group = _step15.value;
              var i = group.rules.findIndex(function (rule) {
                return rule.keyword === keyword;
              });
              if (i >= 0) group.rules.splice(i, 1);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          return this;
        }
        // Add format
      }, {
        key: "addFormat",
        value: function addFormat(name, format) {
          if (typeof format == "string") format = new RegExp(format);
          this.formats[name] = format;
          return this;
        }
      }, {
        key: "errorsText",
        value: function errorsText() {
          var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.errors;
          var _ref40 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref40$separator = _ref40.separator,
            separator = _ref40$separator === void 0 ? ", " : _ref40$separator,
            _ref40$dataVar = _ref40.dataVar,
            dataVar = _ref40$dataVar === void 0 ? "data" : _ref40$dataVar;
          if (!errors || errors.length === 0) return "No errors";
          return errors.map(function (e) {
            return "".concat(dataVar).concat(e.instancePath, " ").concat(e.message);
          }).reduce(function (text, msg) {
            return text + separator + msg;
          });
        }
      }, {
        key: "$dataMetaSchema",
        value: function $dataMetaSchema(metaSchema, keywordsJsonPointers) {
          var rules = this.RULES.all;
          metaSchema = JSON.parse(JSON.stringify(metaSchema));
          var _iterator16 = _createForOfIteratorHelper(keywordsJsonPointers),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var jsonPointer = _step16.value;
              var segments = jsonPointer.split("/").slice(1); // first segment is an empty string
              var keywords = metaSchema;
              var _iterator17 = _createForOfIteratorHelper(segments),
                _step17;
              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var seg = _step17.value;
                  keywords = keywords[seg];
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
              for (var key in rules) {
                var rule = rules[key];
                if (_typeof(rule) != "object") continue;
                var $data = rule.definition.$data;
                var _schema4 = keywords[key];
                if ($data && _schema4) keywords[key] = schemaOrData(_schema4);
              }
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
          return metaSchema;
        }
      }, {
        key: "_removeAllSchemas",
        value: function _removeAllSchemas(schemas, regex) {
          for (var keyRef in schemas) {
            var sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
              if (typeof sch == "string") {
                delete schemas[keyRef];
              } else if (sch && !sch.meta) {
                this._cache["delete"](sch.schema);
                delete schemas[keyRef];
              }
            }
          }
        }
      }, {
        key: "_addSchema",
        value: function _addSchema(schema, meta, baseId) {
          var validateSchema = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.opts.validateSchema;
          var addSchema = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.opts.addUsedSchema;
          var id;
          var schemaId = this.opts.schemaId;
          if (_typeof(schema) == "object") {
            id = schema[schemaId];
          } else {
            if (this.opts.jtd) throw new Error("schema must be object");else if (typeof schema != "boolean") throw new Error("schema must be object or boolean");
          }
          var sch = this._cache.get(schema);
          if (sch !== undefined) return sch;
          baseId = (0, resolve.normalizeId)(id || baseId);
          var localRefs = resolve.getSchemaRefs.call(this, schema, baseId);
          sch = new compile$1.SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            meta: meta,
            baseId: baseId,
            localRefs: localRefs
          });
          this._cache.set(sch.schema, sch);
          if (addSchema && !baseId.startsWith("#")) {
            // TODO atm it is allowed to overwrite schemas without id (instead of not adding them)
            if (baseId) this._checkUnique(baseId);
            this.refs[baseId] = sch;
          }
          if (validateSchema) this.validateSchema(schema, true);
          return sch;
        }
      }, {
        key: "_checkUnique",
        value: function _checkUnique(id) {
          if (this.schemas[id] || this.refs[id]) {
            throw new Error("schema with key or id \"".concat(id, "\" already exists"));
          }
        }
      }, {
        key: "_compileSchemaEnv",
        value: function _compileSchemaEnv(sch) {
          if (sch.meta) this._compileMetaSchema(sch);else compile$1.compileSchema.call(this, sch);
          /* istanbul ignore if */
          if (!sch.validate) throw new Error("ajv implementation error");
          return sch.validate;
        }
      }, {
        key: "_compileMetaSchema",
        value: function _compileMetaSchema(sch) {
          var currentOpts = this.opts;
          this.opts = this._metaOpts;
          try {
            compile$1.compileSchema.call(this, sch);
          } finally {
            this.opts = currentOpts;
          }
        }
      }]);
      return Ajv;
    }();
    exports["default"] = Ajv;
    Ajv.ValidationError = validation_error["default"];
    Ajv.MissingRefError = ref_error["default"];
    function checkOptions(checkOpts, options, msg) {
      var log = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "error";
      for (var key in checkOpts) {
        var opt = key;
        if (opt in options) this.logger[log]("".concat(msg, ": option ").concat(key, ". ").concat(checkOpts[opt]));
      }
    }
    function getSchEnv(keyRef) {
      keyRef = (0, resolve.normalizeId)(keyRef); // TODO tests fail without this line
      return this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      var optsSchemas = this.opts.schemas;
      if (!optsSchemas) return;
      if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);else for (var key in optsSchemas) this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (var name in this.opts.formats) {
        var _format = this.opts.formats[name];
        if (_format) this.addFormat(name, _format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (var _keyword2 in defs) {
        var _def3 = defs[_keyword2];
        if (!_def3.keyword) _def3.keyword = _keyword2;
        this.addKeyword(_def3);
      }
    }
    function getMetaSchemaOptions() {
      var metaOpts = _objectSpread({}, this.opts);
      var _iterator18 = _createForOfIteratorHelper(META_IGNORE_OPTIONS),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var opt = _step18.value;
          delete metaOpts[opt];
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
      return metaOpts;
    }
    var noLogs = {
      log: function log() {},
      warn: function warn() {},
      error: function error() {}
    };
    function getLogger(logger) {
      if (logger === false) return noLogs;
      if (logger === undefined) return console;
      if (logger.log && logger.warn && logger.error) return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      var RULES = this.RULES;
      (0, util.eachItem)(keyword, function (kwd) {
        if (RULES.keywords[kwd]) throw new Error("Keyword ".concat(kwd, " is already defined"));
        if (!KEYWORD_NAME.test(kwd)) throw new Error("Keyword ".concat(kwd, " has invalid name"));
      });
      if (!def) return;
      if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
      }
    }
    function addRule(keyword, definition, dataType$1) {
      var _this28 = this;
      var _a;
      var post = definition === null || definition === void 0 ? void 0 : definition.post;
      if (dataType$1 && post) throw new Error('keyword with "post" flag cannot have "type"');
      var RULES = this.RULES;
      var ruleGroup = post ? RULES.post : RULES.rules.find(function (_ref41) {
        var t = _ref41.type;
        return t === dataType$1;
      });
      if (!ruleGroup) {
        ruleGroup = {
          type: dataType$1,
          rules: []
        };
        RULES.rules.push(ruleGroup);
      }
      RULES.keywords[keyword] = true;
      if (!definition) return;
      var rule = {
        keyword: keyword,
        definition: _objectSpread(_objectSpread({}, definition), {}, {
          type: (0, dataType.getJSONTypes)(definition.type),
          schemaType: (0, dataType.getJSONTypes)(definition.schemaType)
        })
      };
      if (definition.before) addBeforeRule.call(this, ruleGroup, rule, definition.before);else ruleGroup.rules.push(rule);
      RULES.all[keyword] = rule;
      (_a = definition["implements"]) === null || _a === void 0 ? void 0 : _a.forEach(function (kwd) {
        return _this28.addKeyword(kwd);
      });
    }
    function addBeforeRule(ruleGroup, rule, before) {
      var i = ruleGroup.rules.findIndex(function (_rule) {
        return _rule.keyword === before;
      });
      if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
      } else {
        ruleGroup.rules.push(rule);
        this.logger.warn("rule ".concat(before, " is not defined"));
      }
    }
    function keywordMetaschema(def) {
      var metaSchema = def.metaSchema;
      if (metaSchema === undefined) return;
      if (def.$data && this.opts.$data) metaSchema = schemaOrData(metaSchema);
      def.validateSchema = this.compile(metaSchema, true);
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return {
        anyOf: [schema, $dataRef]
      };
    }
  });
  var def$p = {
    keyword: "id",
    code: function code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  var _default$w = def$p;
  var id = /*#__PURE__*/Object.defineProperty({
    "default": _default$w
  }, '__esModule', {
    value: true
  });
  var ref = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.callRef = exports.getValidate = void 0;
    var def = {
      keyword: "$ref",
      schemaType: "string",
      code: function code(cxt) {
        var gen = cxt.gen,
          $ref = cxt.schema,
          it = cxt.it;
        var baseId = it.baseId,
          env = it.schemaEnv,
          validateName = it.validateName,
          opts = it.opts,
          self = it.self;
        var root = env.root;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
        var schOrEnv = compile$1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === undefined) throw new ref_error["default"](it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile$1.SchemaEnv) return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
          if (env === root) return callRef(cxt, validateName, env, env.$async);
          var rootName = gen.scopeValue("root", {
            ref: root
          });
          return callRef(cxt, (0, codegen._)(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["", ".validate"])), rootName), root, root.$async);
        }
        function callValidate(sch) {
          var v = getValidate(cxt, sch);
          callRef(cxt, v, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
          var schName = gen.scopeValue("schema", opts.code.source === true ? {
            ref: sch,
            code: (0, codegen.stringify)(sch)
          } : {
            ref: sch
          });
          var valid = gen.name("valid");
          var schCxt = cxt.subschema({
            schema: sch,
            dataTypes: [],
            schemaPath: codegen.nil,
            topSchemaRef: schName,
            errSchemaPath: $ref
          }, valid);
          cxt.mergeEvaluated(schCxt);
          cxt.ok(valid);
        }
      }
    };
    function getValidate(cxt, sch) {
      var gen = cxt.gen;
      return sch.validate ? gen.scopeValue("validate", {
        ref: sch.validate
      }) : (0, codegen._)(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["", ".validate"])), gen.scopeValue("wrapper", {
        ref: sch
      }));
    }
    exports.getValidate = getValidate;
    function callRef(cxt, v, sch, $async) {
      var gen = cxt.gen,
        it = cxt.it;
      var allErrors = it.allErrors,
        env = it.schemaEnv,
        opts = it.opts;
      var passCxt = opts.passContext ? names_1["default"]["this"] : codegen.nil;
      if ($async) callAsyncRef();else callSyncRef();
      function callAsyncRef() {
        if (!env.$async) throw new Error("async schema referenced by sync schema");
        var valid = gen["let"]("valid");
        gen["try"](function () {
          gen.code((0, codegen._)(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["await ", ""])), (0, _code.callValidateCode)(cxt, v, passCxt)));
          addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
          if (!allErrors) gen.assign(valid, true);
        }, function (e) {
          gen["if"]((0, codegen._)(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["!(", " instanceof ", ")"])), e, it.ValidationError), function () {
            return gen["throw"](e);
          });
          addErrorsFrom(e);
          if (!allErrors) gen.assign(valid, false);
        });
        cxt.ok(valid);
      }
      function callSyncRef() {
        cxt.result((0, _code.callValidateCode)(cxt, v, passCxt), function () {
          return addEvaluatedFrom(v);
        }, function () {
          return addErrorsFrom(v);
        });
      }
      function addErrorsFrom(source) {
        var errs = (0, codegen._)(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["", ".errors"])), source);
        gen.assign(names_1["default"].vErrors, (0, codegen._)(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["", " === null ? ", " : ", ".concat(", ")"])), names_1["default"].vErrors, errs, names_1["default"].vErrors, errs)); // TODO tagged
        gen.assign(names_1["default"].errors, (0, codegen._)(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["", ".length"])), names_1["default"].vErrors));
      }
      function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated) return;
        var schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        // TODO refactor
        if (it.props !== true) {
          if (schEvaluated && !schEvaluated.dynamicProps) {
            if (schEvaluated.props !== undefined) {
              it.props = util.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            }
          } else {
            var props = gen["var"]("props", (0, codegen._)(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["", ".evaluated.props"])), source));
            it.props = util.mergeEvaluated.props(gen, props, it.props, codegen.Name);
          }
        }
        if (it.items !== true) {
          if (schEvaluated && !schEvaluated.dynamicItems) {
            if (schEvaluated.items !== undefined) {
              it.items = util.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            }
          } else {
            var _items2 = gen["var"]("items", (0, codegen._)(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["", ".evaluated.items"])), source));
            it.items = util.mergeEvaluated.items(gen, _items2, it.items, codegen.Name);
          }
        }
      }
    }
    exports.callRef = callRef;
    exports["default"] = def;
  });
  var core = ["$schema", "$id", "$defs", "$vocabulary", {
    keyword: "$comment"
  }, "definitions", id["default"], ref["default"]];
  var _default$v = core;
  var core_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$v
  }, '__esModule', {
    value: true
  });
  var ops = codegen.operators;
  var KWDs = {
    maximum: {
      okStr: "<=",
      ok: ops.LTE,
      fail: ops.GT
    },
    minimum: {
      okStr: ">=",
      ok: ops.GTE,
      fail: ops.LT
    },
    exclusiveMaximum: {
      okStr: "<",
      ok: ops.LT,
      fail: ops.GTE
    },
    exclusiveMinimum: {
      okStr: ">",
      ok: ops.GT,
      fail: ops.LTE
    }
  };
  var error$h = {
    message: function message(_ref42) {
      var keyword = _ref42.keyword,
        schemaCode = _ref42.schemaCode;
      return (0, codegen.str)(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["must be ", " ", ""])), KWDs[keyword].okStr, schemaCode);
    },
    params: function params(_ref43) {
      var keyword = _ref43.keyword,
        schemaCode = _ref43.schemaCode;
      return (0, codegen._)(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["{comparison: ", ", limit: ", "}"])), KWDs[keyword].okStr, schemaCode);
    }
  };
  var def$o = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: error$h,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      cxt.fail$data((0, codegen._)(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["", " ", " ", " || isNaN(", ")"])), data, KWDs[keyword].fail, schemaCode, data));
    }
  };
  var _default$u = def$o;
  var limitNumber = /*#__PURE__*/Object.defineProperty({
    "default": _default$u
  }, '__esModule', {
    value: true
  });
  var error$g = {
    message: function message(_ref44) {
      var schemaCode = _ref44.schemaCode;
      return (0, codegen.str)(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["must be multiple of ", ""])), schemaCode);
    },
    params: function params(_ref45) {
      var schemaCode = _ref45.schemaCode;
      return (0, codegen._)(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["{multipleOf: ", "}"])), schemaCode);
    }
  };
  var def$n = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: error$g,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
      var prec = it.opts.multipleOfPrecision;
      var res = gen["let"]("res");
      var invalid = prec ? (0, codegen._)(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["Math.abs(Math.round(", ") - ", ") > 1e-", ""])), res, res, prec) : (0, codegen._)(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["", " !== parseInt(", ")"])), res, res);
      cxt.fail$data((0, codegen._)(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["(", " === 0 || (", " = ", "/", ", ", "))"])), schemaCode, res, data, schemaCode, invalid));
    }
  };
  var _default$t = def$n;
  var multipleOf = /*#__PURE__*/Object.defineProperty({
    "default": _default$t
  }, '__esModule', {
    value: true
  });

  // https://mathiasbynens.be/notes/javascript-encoding
  // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
  function ucs2length(str) {
    var len = str.length;
    var length = 0;
    var pos = 0;
    var value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 0xd800 && value <= 0xdbff && pos < len) {
        // high surrogate, and there is a next character
        value = str.charCodeAt(pos);
        if ((value & 0xfc00) === 0xdc00) pos++; // low surrogate
      }
    }

    return length;
  }
  var _default$s = ucs2length;
  ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  var ucs2length_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$s
  }, '__esModule', {
    value: true
  });
  var error$f = {
    message: function message(_ref46) {
      var keyword = _ref46.keyword,
        schemaCode = _ref46.schemaCode;
      var comp = keyword === "maxLength" ? "more" : "fewer";
      return (0, codegen.str)(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["must NOT have ", " than ", " characters"])), comp, schemaCode);
    },
    params: function params(_ref47) {
      var schemaCode = _ref47.schemaCode;
      return (0, codegen._)(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$m = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: true,
    error: error$f,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var op = keyword === "maxLength" ? codegen.operators.GT : codegen.operators.LT;
      var len = it.opts.unicode === false ? (0, codegen._)(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["", ".length"])), data) : (0, codegen._)(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["", "(", ")"])), (0, util.useFunc)(cxt.gen, ucs2length_1["default"]), data);
      cxt.fail$data((0, codegen._)(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["", " ", " ", ""])), len, op, schemaCode));
    }
  };
  var _default$r = def$m;
  var limitLength = /*#__PURE__*/Object.defineProperty({
    "default": _default$r
  }, '__esModule', {
    value: true
  });
  var error$e = {
    message: function message(_ref48) {
      var schemaCode = _ref48.schemaCode;
      return (0, codegen.str)(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["must match pattern \"", "\""])), schemaCode);
    },
    params: function params(_ref49) {
      var schemaCode = _ref49.schemaCode;
      return (0, codegen._)(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["{pattern: ", "}"])), schemaCode);
    }
  };
  var def$l = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: error$e,
    code: function code(cxt) {
      var data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      // TODO regexp should be wrapped in try/catchs
      var u = it.opts.unicodeRegExp ? "u" : "";
      var regExp = $data ? (0, codegen._)(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["(new RegExp(", ", ", "))"])), schemaCode, u) : (0, _code.usePattern)(cxt, schema);
      cxt.fail$data((0, codegen._)(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["!", ".test(", ")"])), regExp, data));
    }
  };
  var _default$q = def$l;
  var pattern = /*#__PURE__*/Object.defineProperty({
    "default": _default$q
  }, '__esModule', {
    value: true
  });
  var error$d = {
    message: function message(_ref50) {
      var keyword = _ref50.keyword,
        schemaCode = _ref50.schemaCode;
      var comp = keyword === "maxProperties" ? "more" : "fewer";
      return (0, codegen.str)(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["must NOT have ", " than ", " properties"])), comp, schemaCode);
    },
    params: function params(_ref51) {
      var schemaCode = _ref51.schemaCode;
      return (0, codegen._)(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$k = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: true,
    error: error$d,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxProperties" ? codegen.operators.GT : codegen.operators.LT;
      cxt.fail$data((0, codegen._)(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["Object.keys(", ").length ", " ", ""])), data, op, schemaCode));
    }
  };
  var _default$p = def$k;
  var limitProperties = /*#__PURE__*/Object.defineProperty({
    "default": _default$p
  }, '__esModule', {
    value: true
  });
  var error$c = {
    message: function message(_ref52) {
      var missingProperty = _ref52.params.missingProperty;
      return (0, codegen.str)(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["must have required property '", "'"])), missingProperty);
    },
    params: function params(_ref53) {
      var missingProperty = _ref53.params.missingProperty;
      return (0, codegen._)(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["{missingProperty: ", "}"])), missingProperty);
    }
  };
  var def$j = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: error$c,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        data = cxt.data,
        $data = cxt.$data,
        it = cxt.it;
      var opts = it.opts;
      if (!$data && schema.length === 0) return;
      var useLoop = schema.length >= opts.loopRequired;
      if (it.allErrors) allErrorsMode();else exitOnErrorMode();
      if (opts.strictRequired) {
        var props = cxt.parentSchema.properties;
        var definedProperties = cxt.it.definedProperties;
        var _iterator19 = _createForOfIteratorHelper(schema),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var requiredKey = _step19.value;
            if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
              var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
              var msg = "required property \"".concat(requiredKey, "\" is not defined at \"").concat(schemaPath, "\" (strictRequired)");
              (0, util.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
      function allErrorsMode() {
        if (useLoop || $data) {
          cxt.block$data(codegen.nil, loopAllRequired);
        } else {
          var _iterator20 = _createForOfIteratorHelper(schema),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var prop = _step20.value;
              (0, _code.checkReportMissingProp)(cxt, prop);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
      }
      function exitOnErrorMode() {
        var missing = gen["let"]("missing");
        if (useLoop || $data) {
          var _valid3 = gen["let"]("valid", true);
          cxt.block$data(_valid3, function () {
            return loopUntilMissing(missing, _valid3);
          });
          cxt.ok(_valid3);
        } else {
          gen["if"]((0, _code.checkMissingProp)(cxt, schema, missing));
          (0, _code.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      }
      function loopAllRequired() {
        gen.forOf("prop", schemaCode, function (prop) {
          cxt.setParams({
            missingProperty: prop
          });
          gen["if"]((0, _code.noPropertyInData)(gen, data, prop, opts.ownProperties), function () {
            return cxt.error();
          });
        });
      }
      function loopUntilMissing(missing, valid) {
        cxt.setParams({
          missingProperty: missing
        });
        gen.forOf(missing, schemaCode, function () {
          gen.assign(valid, (0, _code.propertyInData)(gen, data, missing, opts.ownProperties));
          gen["if"]((0, codegen.not)(valid), function () {
            cxt.error();
            gen["break"]();
          });
        }, codegen.nil);
      }
    }
  };
  var _default$o = def$j;
  var required = /*#__PURE__*/Object.defineProperty({
    "default": _default$o
  }, '__esModule', {
    value: true
  });
  var error$b = {
    message: function message(_ref54) {
      var keyword = _ref54.keyword,
        schemaCode = _ref54.schemaCode;
      var comp = keyword === "maxItems" ? "more" : "fewer";
      return (0, codegen.str)(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["must NOT have ", " than ", " items"])), comp, schemaCode);
    },
    params: function params(_ref55) {
      var schemaCode = _ref55.schemaCode;
      return (0, codegen._)(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["{limit: ", "}"])), schemaCode);
    }
  };
  var def$i = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: true,
    error: error$b,
    code: function code(cxt) {
      var keyword = cxt.keyword,
        data = cxt.data,
        schemaCode = cxt.schemaCode;
      var op = keyword === "maxItems" ? codegen.operators.GT : codegen.operators.LT;
      cxt.fail$data((0, codegen._)(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["", ".length ", " ", ""])), data, op, schemaCode));
    }
  };
  var _default$n = def$i;
  var limitItems = /*#__PURE__*/Object.defineProperty({
    "default": _default$n
  }, '__esModule', {
    value: true
  });

  // https://github.com/ajv-validator/ajv/issues/889

  fastDeepEqual.code = 'require("ajv/dist/runtime/equal").default';
  var _default$m = fastDeepEqual;
  var equal_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$m
  }, '__esModule', {
    value: true
  });
  var error$a = {
    message: function message(_ref56) {
      var _ref56$params = _ref56.params,
        i = _ref56$params.i,
        j = _ref56$params.j;
      return (0, codegen.str)(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["must NOT have duplicate items (items ## ", " and ", " are identical)"])), j, i);
    },
    params: function params(_ref57) {
      var _ref57$params = _ref57.params,
        i = _ref57$params.i,
        j = _ref57$params.j;
      return (0, codegen._)(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["{i: ", ", j: ", "}"])), i, j);
    }
  };
  var def$h = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: error$a,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && !schema) return;
      var valid = gen["let"]("valid");
      var itemTypes = parentSchema.items ? (0, dataType.getSchemaTypes)(parentSchema.items) : [];
      cxt.block$data(valid, validateUniqueItems, (0, codegen._)(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["", " === false"])), schemaCode));
      cxt.ok(valid);
      function validateUniqueItems() {
        var i = gen["let"]("i", (0, codegen._)(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["", ".length"])), data));
        var j = gen["let"]("j");
        cxt.setParams({
          i: i,
          j: j
        });
        gen.assign(valid, true);
        gen["if"]((0, codegen._)(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["", " > 1"])), i), function () {
          return (canOptimize() ? loopN : loopN2)(i, j);
        });
      }
      function canOptimize() {
        return itemTypes.length > 0 && !itemTypes.some(function (t) {
          return t === "object" || t === "array";
        });
      }
      function loopN(i, j) {
        var item = gen.name("item");
        var wrongType = (0, dataType.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType.DataType.Wrong);
        var indices = gen["const"]("indices", (0, codegen._)(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["{}"]))));
        gen["for"]((0, codegen._)(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          gen["let"](item, (0, codegen._)(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["", "[", "]"])), data, i));
          gen["if"](wrongType, (0, codegen._)(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["continue"]))));
          if (itemTypes.length > 1) gen["if"]((0, codegen._)(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), item), (0, codegen._)(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["", " += \"_\""])), item));
          gen["if"]((0, codegen._)(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["typeof ", "[", "] == \"number\""])), indices, item), function () {
            gen.assign(j, (0, codegen._)(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["", "[", "]"])), indices, item));
            cxt.error();
            gen.assign(valid, false)["break"]();
          }).code((0, codegen._)(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["", "[", "] = ", ""])), indices, item, i));
        });
      }
      function loopN2(i, j) {
        var eql = (0, util.useFunc)(gen, equal_1["default"]);
        var outer = gen.name("outer");
        gen.label(outer)["for"]((0, codegen._)(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral([";", "--;"])), i), function () {
          return gen["for"]((0, codegen._)(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["", " = ", "; ", "--;"])), j, i, j), function () {
            return gen["if"]((0, codegen._)(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["", "(", "[", "], ", "[", "])"])), eql, data, i, data, j), function () {
              cxt.error();
              gen.assign(valid, false)["break"](outer);
            });
          });
        });
      }
    }
  };
  var _default$l = def$h;
  var uniqueItems = /*#__PURE__*/Object.defineProperty({
    "default": _default$l
  }, '__esModule', {
    value: true
  });
  var error$9 = {
    message: "must be equal to constant",
    params: function params(_ref58) {
      var schemaCode = _ref58.schemaCode;
      return (0, codegen._)(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["{allowedValue: ", "}"])), schemaCode);
    }
  };
  var def$g = {
    keyword: "const",
    $data: true,
    error: error$9,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schemaCode = cxt.schemaCode,
        schema = cxt.schema;
      if ($data || schema && _typeof(schema) == "object") {
        cxt.fail$data((0, codegen._)(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["!", "(", ", ", ")"])), (0, util.useFunc)(gen, equal_1["default"]), data, schemaCode));
      } else {
        cxt.fail((0, codegen._)(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["", " !== ", ""])), schema, data));
      }
    }
  };
  var _default$k = def$g;
  var _const = /*#__PURE__*/Object.defineProperty({
    "default": _default$k
  }, '__esModule', {
    value: true
  });
  var error$8 = {
    message: "must be equal to one of the allowed values",
    params: function params(_ref59) {
      var schemaCode = _ref59.schemaCode;
      return (0, codegen._)(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["{allowedValues: ", "}"])), schemaCode);
    }
  };
  var def$f = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: error$8,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      if (!$data && schema.length === 0) throw new Error("enum must have non-empty array");
      var useLoop = schema.length >= it.opts.loopEnum;
      var eql;
      var getEql = function getEql() {
        return eql !== null && eql !== void 0 ? eql : eql = (0, util.useFunc)(gen, equal_1["default"]);
      };
      var valid;
      if (useLoop || $data) {
        valid = gen["let"]("valid");
        cxt.block$data(valid, loopEnum);
      } else {
        /* istanbul ignore if */
        if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        var vSchema = gen["const"]("vSchema", schemaCode);
        valid = (0, codegen.or).apply(void 0, _toConsumableArray(schema.map(function (_x, i) {
          return equalCode(vSchema, i);
        })));
      }
      cxt.pass(valid);
      function loopEnum() {
        gen.assign(valid, false);
        gen.forOf("v", schemaCode, function (v) {
          return gen["if"]((0, codegen._)(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["", "(", ", ", ")"])), getEql(), data, v), function () {
            return gen.assign(valid, true)["break"]();
          });
        });
      }
      function equalCode(vSchema, i) {
        var sch = schema[i];
        return _typeof(sch) === "object" && sch !== null ? (0, codegen._)(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["", "(", ", ", "[", "])"])), getEql(), data, vSchema, i) : (0, codegen._)(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["", " === ", ""])), data, sch);
      }
    }
  };
  var _default$j = def$f;
  var _enum = /*#__PURE__*/Object.defineProperty({
    "default": _default$j
  }, '__esModule', {
    value: true
  });
  var validation = [
  // number
  limitNumber["default"], multipleOf["default"],
  // string
  limitLength["default"], pattern["default"],
  // object
  limitProperties["default"], required["default"],
  // array
  limitItems["default"], uniqueItems["default"],
  // any
  {
    keyword: "type",
    schemaType: ["string", "array"]
  }, {
    keyword: "nullable",
    schemaType: "boolean"
  }, _const["default"], _enum["default"]];
  var _default$i = validation;
  var validation_1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$i
  }, '__esModule', {
    value: true
  });
  var additionalItems = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateAdditionalItems = void 0;
    var error = {
      message: function message(_ref60) {
        var len = _ref60.params.len;
        return (0, codegen.str)(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
      },
      params: function params(_ref61) {
        var len = _ref61.params.len;
        return (0, codegen._)(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["{limit: ", "}"])), len);
      }
    };
    var def = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: error,
      code: function code(cxt) {
        var parentSchema = cxt.parentSchema,
          it = cxt.it;
        var items = parentSchema.items;
        if (!Array.isArray(items)) {
          (0, util.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        validateAdditionalItems(cxt, items);
      }
    };
    function validateAdditionalItems(cxt, items) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      it.items = true;
      var len = gen["const"]("len", (0, codegen._)(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral(["", ".length"])), data));
      if (schema === false) {
        cxt.setParams({
          len: items.length
        });
        cxt.pass((0, codegen._)(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length));
      } else if (_typeof(schema) == "object" && !(0, util.alwaysValidSchema)(it, schema)) {
        var _valid4 = gen["var"]("valid", (0, codegen._)(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral(["", " <= ", ""])), len, items.length)); // TODO var
        gen["if"]((0, codegen.not)(_valid4), function () {
          return validateItems(_valid4);
        });
        cxt.ok(_valid4);
      }
      function validateItems(valid) {
        gen.forRange("i", items.length, len, function (i) {
          cxt.subschema({
            keyword: keyword,
            dataProp: i,
            dataPropType: util.Type.Num
          }, valid);
          if (!it.allErrors) gen["if"]((0, codegen.not)(valid), function () {
            return gen["break"]();
          });
        });
      }
    }
    exports.validateAdditionalItems = validateAdditionalItems;
    exports["default"] = def;
  });
  var items = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateTuple = void 0;
    var def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code: function code(cxt) {
        var schema = cxt.schema,
          it = cxt.it;
        if (Array.isArray(schema)) return validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, util.alwaysValidSchema)(it, schema)) return;
        cxt.ok((0, _code.validateArray)(cxt));
      }
    };
    function validateTuple(cxt, extraItems) {
      var schArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cxt.schema;
      var gen = cxt.gen,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      checkStrictTuple(parentSchema);
      if (it.opts.unevaluated && schArr.length && it.items !== true) {
        it.items = util.mergeEvaluated.items(gen, schArr.length, it.items);
      }
      var valid = gen.name("valid");
      var len = gen["const"]("len", (0, codegen._)(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral(["", ".length"])), data));
      schArr.forEach(function (sch, i) {
        if ((0, util.alwaysValidSchema)(it, sch)) return;
        gen["if"]((0, codegen._)(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral(["", " > ", ""])), len, i), function () {
          return cxt.subschema({
            keyword: keyword,
            schemaProp: i,
            dataProp: i
          }, valid);
        });
        cxt.ok(valid);
      });
      function checkStrictTuple(sch) {
        var opts = it.opts,
          errSchemaPath = it.errSchemaPath;
        var l = schArr.length;
        var fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
          var msg = "\"".concat(keyword, "\" is ").concat(l, "-tuple, but minItems or maxItems/").concat(extraItems, " are not specified or different at path \"").concat(errSchemaPath, "\"");
          (0, util.checkStrictMode)(it, msg, opts.strictTuples);
        }
      }
    }
    exports.validateTuple = validateTuple;
    exports["default"] = def;
  });
  var def$e = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: function code(cxt) {
      return (0, items.validateTuple)(cxt, "items");
    }
  };
  var _default$h = def$e;
  var prefixItems = /*#__PURE__*/Object.defineProperty({
    "default": _default$h
  }, '__esModule', {
    value: true
  });
  var error$7 = {
    message: function message(_ref62) {
      var len = _ref62.params.len;
      return (0, codegen.str)(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral(["must NOT have more than ", " items"])), len);
    },
    params: function params(_ref63) {
      var len = _ref63.params.len;
      return (0, codegen._)(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral(["{limit: ", "}"])), len);
    }
  };
  var def$d = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: error$7,
    code: function code(cxt) {
      var schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var prefixItems = parentSchema.prefixItems;
      it.items = true;
      if ((0, util.alwaysValidSchema)(it, schema)) return;
      if (prefixItems) (0, additionalItems.validateAdditionalItems)(cxt, prefixItems);else cxt.ok((0, _code.validateArray)(cxt));
    }
  };
  var _default$g = def$d;
  var items2020 = /*#__PURE__*/Object.defineProperty({
    "default": _default$g
  }, '__esModule', {
    value: true
  });
  var error$6 = {
    message: function message(_ref64) {
      var _ref64$params = _ref64.params,
        min = _ref64$params.min,
        max = _ref64$params.max;
      return max === undefined ? (0, codegen.str)(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral(["must contain at least ", " valid item(s)"])), min) : (0, codegen.str)(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral(["must contain at least ", " and no more than ", " valid item(s)"])), min, max);
    },
    params: function params(_ref65) {
      var _ref65$params = _ref65.params,
        min = _ref65$params.min,
        max = _ref65$params.max;
      return max === undefined ? (0, codegen._)(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral(["{minContains: ", "}"])), min) : (0, codegen._)(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral(["{minContains: ", ", maxContains: ", "}"])), min, max);
    }
  };
  var def$c = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: true,
    error: error$6,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      var min;
      var max;
      var minContains = parentSchema.minContains,
        maxContains = parentSchema.maxContains;
      if (it.opts.next) {
        min = minContains === undefined ? 1 : minContains;
        max = maxContains;
      } else {
        min = 1;
      }
      var len = gen["const"]("len", (0, codegen._)(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral(["", ".length"])), data));
      cxt.setParams({
        min: min,
        max: max
      });
      if (max === undefined && min === 0) {
        (0, util.checkStrictMode)(it, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
        return;
      }
      if (max !== undefined && min > max) {
        (0, util.checkStrictMode)(it, "\"minContains\" > \"maxContains\" is always invalid");
        cxt.fail();
        return;
      }
      if ((0, util.alwaysValidSchema)(it, schema)) {
        var cond = (0, codegen._)(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral(["", " >= ", ""])), len, min);
        if (max !== undefined) cond = (0, codegen._)(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral(["", " && ", " <= ", ""])), cond, len, max);
        cxt.pass(cond);
        return;
      }
      it.items = true;
      var valid = gen.name("valid");
      if (max === undefined && min === 1) {
        validateItems(valid, function () {
          return gen["if"](valid, function () {
            return gen["break"]();
          });
        });
      } else if (min === 0) {
        gen["let"](valid, true);
        if (max !== undefined) gen["if"]((0, codegen._)(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral(["", ".length > 0"])), data), validateItemsWithCount);
      } else {
        gen["let"](valid, false);
        validateItemsWithCount();
      }
      cxt.result(valid, function () {
        return cxt.reset();
      });
      function validateItemsWithCount() {
        var schValid = gen.name("_valid");
        var count = gen["let"]("count", 0);
        validateItems(schValid, function () {
          return gen["if"](schValid, function () {
            return checkLimits(count);
          });
        });
      }
      function validateItems(_valid, block) {
        gen.forRange("i", 0, len, function (i) {
          cxt.subschema({
            keyword: "contains",
            dataProp: i,
            dataPropType: util.Type.Num,
            compositeRule: true
          }, _valid);
          block();
        });
      }
      function checkLimits(count) {
        gen.code((0, codegen._)(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral(["", "++"])), count));
        if (max === undefined) {
          gen["if"]((0, codegen._)(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true)["break"]();
          });
        } else {
          gen["if"]((0, codegen._)(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral(["", " > ", ""])), count, max), function () {
            return gen.assign(valid, false)["break"]();
          });
          if (min === 1) gen.assign(valid, true);else gen["if"]((0, codegen._)(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral(["", " >= ", ""])), count, min), function () {
            return gen.assign(valid, true);
          });
        }
      }
    }
  };
  var _default$f = def$c;
  var contains = /*#__PURE__*/Object.defineProperty({
    "default": _default$f
  }, '__esModule', {
    value: true
  });
  var dependencies = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    exports.error = {
      message: function message(_ref66) {
        var _ref66$params = _ref66.params,
          property = _ref66$params.property,
          depsCount = _ref66$params.depsCount,
          deps = _ref66$params.deps;
        var property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen.str)(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral(["must have ", " ", " when property ", " is present"])), property_ies, deps, property);
      },
      params: function params(_ref67) {
        var _ref67$params = _ref67.params,
          property = _ref67$params.property,
          depsCount = _ref67$params.depsCount,
          deps = _ref67$params.deps,
          missingProperty = _ref67$params.missingProperty;
        return (0, codegen._)(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral(["{property: ", ",\n    missingProperty: ", ",\n    depsCount: ", ",\n    deps: ", "}"])), property, missingProperty, depsCount, deps);
      } // TODO change to reference
    };

    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code: function code(cxt) {
        var _splitDependencies = splitDependencies(cxt),
          _splitDependencies2 = _slicedToArray(_splitDependencies, 2),
          propDeps = _splitDependencies2[0],
          schDeps = _splitDependencies2[1];
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies(_ref68) {
      var schema = _ref68.schema;
      var propertyDeps = {};
      var schemaDeps = {};
      for (var key in schema) {
        if (key === "__proto__") continue;
        var deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt) {
      var propertyDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        it = cxt.it;
      if (Object.keys(propertyDeps).length === 0) return;
      var missing = gen["let"]("missing");
      var _loop2 = function _loop2() {
        var deps = propertyDeps[prop];
        if (deps.length === 0) return "continue";
        var hasProperty = (0, _code.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        });
        if (it.allErrors) {
          gen["if"](hasProperty, function () {
            var _iterator21 = _createForOfIteratorHelper(deps),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var depProp = _step21.value;
                (0, _code.checkReportMissingProp)(cxt, depProp);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          });
        } else {
          gen["if"]((0, codegen._)(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral(["", " && (", ")"])), hasProperty, (0, _code.checkMissingProp)(cxt, deps, missing)));
          (0, _code.reportMissingProp)(cxt, missing);
          gen["else"]();
        }
      };
      for (var prop in propertyDeps) {
        var _ret2 = _loop2();
        if (_ret2 === "continue") continue;
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt) {
      var schemaDeps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cxt.schema;
      var gen = cxt.gen,
        data = cxt.data,
        keyword = cxt.keyword,
        it = cxt.it;
      var valid = gen.name("valid");
      var _loop3 = function _loop3(prop) {
        if ((0, util.alwaysValidSchema)(it, schemaDeps[prop])) return "continue";
        gen["if"]((0, _code.propertyInData)(gen, data, prop, it.opts.ownProperties), function () {
          var schCxt = cxt.subschema({
            keyword: keyword,
            schemaProp: prop
          }, valid);
          cxt.mergeValidEvaluated(schCxt, valid);
        }, function () {
          return gen["var"](valid, true);
        } // TODO var
        );

        cxt.ok(valid);
      };
      for (var prop in schemaDeps) {
        var _ret3 = _loop3(prop);
        if (_ret3 === "continue") continue;
      }
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports["default"] = def;
  });
  var error$5 = {
    message: "property name must be valid",
    params: function params(_ref69) {
      var _params = _ref69.params;
      return (0, codegen._)(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral(["{propertyName: ", "}"])), _params.propertyName);
    }
  };
  var def$b = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: error$5,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        it = cxt.it;
      if ((0, util.alwaysValidSchema)(it, schema)) return;
      var valid = gen.name("valid");
      gen.forIn("key", data, function (key) {
        cxt.setParams({
          propertyName: key
        });
        cxt.subschema({
          keyword: "propertyNames",
          data: key,
          dataTypes: ["string"],
          propertyName: key,
          compositeRule: true
        }, valid);
        gen["if"]((0, codegen.not)(valid), function () {
          cxt.error(true);
          if (!it.allErrors) gen["break"]();
        });
      });
      cxt.ok(valid);
    }
  };
  var _default$e = def$b;
  var propertyNames = /*#__PURE__*/Object.defineProperty({
    "default": _default$e
  }, '__esModule', {
    value: true
  });
  var error$4 = {
    message: "must NOT have additional properties",
    params: function params(_ref70) {
      var _params2 = _ref70.params;
      return (0, codegen._)(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral(["{additionalProperty: ", "}"])), _params2.additionalProperty);
    }
  };
  var def$a = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: true,
    trackErrors: true,
    error: error$4,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        errsCount = cxt.errsCount,
        it = cxt.it;
      /* istanbul ignore if */
      if (!errsCount) throw new Error("ajv implementation error");
      var allErrors = it.allErrors,
        opts = it.opts;
      it.props = true;
      if (opts.removeAdditional !== "all" && (0, util.alwaysValidSchema)(it, schema)) return;
      var props = (0, _code.allSchemaProperties)(parentSchema.properties);
      var patProps = (0, _code.allSchemaProperties)(parentSchema.patternProperties);
      checkAdditionalProperties();
      cxt.ok((0, codegen._)(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral(["", " === ", ""])), errsCount, names_1["default"].errors));
      function checkAdditionalProperties() {
        gen.forIn("key", data, function (key) {
          if (!props.length && !patProps.length) additionalPropertyCode(key);else gen["if"](isAdditional(key), function () {
            return additionalPropertyCode(key);
          });
        });
      }
      function isAdditional(key) {
        var definedProp;
        if (props.length > 8) {
          // TODO maybe an option instead of hard-coded 8?
          var propsSchema = (0, util.schemaRefOrVal)(it, parentSchema.properties, "properties");
          definedProp = (0, _code.isOwnProperty)(gen, propsSchema, key);
        } else if (props.length) {
          definedProp = (0, codegen.or).apply(void 0, _toConsumableArray(props.map(function (p) {
            return (0, codegen._)(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral(["", " === ", ""])), key, p);
          })));
        } else {
          definedProp = codegen.nil;
        }
        if (patProps.length) {
          definedProp = (0, codegen.or).apply(void 0, [definedProp].concat(_toConsumableArray(patProps.map(function (p) {
            return (0, codegen._)(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, _code.usePattern)(cxt, p), key);
          }))));
        }
        return (0, codegen.not)(definedProp);
      }
      function deleteAdditional(key) {
        gen.code((0, codegen._)(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral(["delete ", "[", "]"])), data, key));
      }
      function additionalPropertyCode(key) {
        if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
          deleteAdditional(key);
          return;
        }
        if (schema === false) {
          cxt.setParams({
            additionalProperty: key
          });
          cxt.error();
          if (!allErrors) gen["break"]();
          return;
        }
        if (_typeof(schema) == "object" && !(0, util.alwaysValidSchema)(it, schema)) {
          var _valid5 = gen.name("valid");
          if (opts.removeAdditional === "failing") {
            applyAdditionalSchema(key, _valid5, false);
            gen["if"]((0, codegen.not)(_valid5), function () {
              cxt.reset();
              deleteAdditional(key);
            });
          } else {
            applyAdditionalSchema(key, _valid5);
            if (!allErrors) gen["if"]((0, codegen.not)(_valid5), function () {
              return gen["break"]();
            });
          }
        }
      }
      function applyAdditionalSchema(key, valid, errors) {
        var subschema = {
          keyword: "additionalProperties",
          dataProp: key,
          dataPropType: util.Type.Str
        };
        if (errors === false) {
          Object.assign(subschema, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          });
        }
        cxt.subschema(subschema, valid);
      }
    }
  };
  var _default$d = def$a;
  var additionalProperties = /*#__PURE__*/Object.defineProperty({
    "default": _default$d
  }, '__esModule', {
    value: true
  });
  var def$9 = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        data = cxt.data,
        it = cxt.it;
      if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
        additionalProperties["default"].code(new validate$1.KeywordCxt(it, additionalProperties["default"], "additionalProperties"));
      }
      var allProps = (0, _code.allSchemaProperties)(schema);
      var _iterator22 = _createForOfIteratorHelper(allProps),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var prop = _step22.value;
          it.definedProperties.add(prop);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      if (it.opts.unevaluated && allProps.length && it.props !== true) {
        it.props = util.mergeEvaluated.props(gen, (0, util.toHash)(allProps), it.props);
      }
      var properties = allProps.filter(function (p) {
        return !(0, util.alwaysValidSchema)(it, schema[p]);
      });
      if (properties.length === 0) return;
      var valid = gen.name("valid");
      var _iterator23 = _createForOfIteratorHelper(properties),
        _step23;
      try {
        for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
          var _prop = _step23.value;
          if (hasDefault(_prop)) {
            applyPropertySchema(_prop);
          } else {
            gen["if"]((0, _code.propertyInData)(gen, data, _prop, it.opts.ownProperties));
            applyPropertySchema(_prop);
            if (!it.allErrors) gen["else"]()["var"](valid, true);
            gen.endIf();
          }
          cxt.it.definedProperties.add(_prop);
          cxt.ok(valid);
        }
      } catch (err) {
        _iterator23.e(err);
      } finally {
        _iterator23.f();
      }
      function hasDefault(prop) {
        return it.opts.useDefaults && !it.compositeRule && schema[prop]["default"] !== undefined;
      }
      function applyPropertySchema(prop) {
        cxt.subschema({
          keyword: "properties",
          schemaProp: prop,
          dataProp: prop
        }, valid);
      }
    }
  };
  var _default$c = def$9;
  var properties$1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$c
  }, '__esModule', {
    value: true
  });
  var util_2 = util;
  var def$8 = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        data = cxt.data,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var opts = it.opts;
      var patterns = (0, _code.allSchemaProperties)(schema);
      var alwaysValidPatterns = patterns.filter(function (p) {
        return (0, util.alwaysValidSchema)(it, schema[p]);
      });
      if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) {
        return;
      }
      var checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
      var valid = gen.name("valid");
      if (it.props !== true && !(it.props instanceof codegen.Name)) {
        it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
      }
      var props = it.props;
      validatePatternProperties();
      function validatePatternProperties() {
        var _iterator24 = _createForOfIteratorHelper(patterns),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var pat = _step24.value;
            if (checkProperties) checkMatchingProperties(pat);
            if (it.allErrors) {
              validateProperties(pat);
            } else {
              gen["var"](valid, true); // TODO var
              validateProperties(pat);
              gen["if"](valid);
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
      function checkMatchingProperties(pat) {
        for (var prop in checkProperties) {
          if (new RegExp(pat).test(prop)) {
            (0, util.checkStrictMode)(it, "property ".concat(prop, " matches pattern ").concat(pat, " (use allowMatchingProperties)"));
          }
        }
      }
      function validateProperties(pat) {
        gen.forIn("key", data, function (key) {
          gen["if"]((0, codegen._)(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral(["", ".test(", ")"])), (0, _code.usePattern)(cxt, pat), key), function () {
            var alwaysValid = alwaysValidPatterns.includes(pat);
            if (!alwaysValid) {
              cxt.subschema({
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: util_2.Type.Str
              }, valid);
            }
            if (it.opts.unevaluated && props !== true) {
              gen.assign((0, codegen._)(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral(["", "[", "]"])), props, key), true);
            } else if (!alwaysValid && !it.allErrors) {
              // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
              // or if all properties were evaluated (props === true)
              gen["if"]((0, codegen.not)(valid), function () {
                return gen["break"]();
              });
            }
          });
        });
      }
    }
  };
  var _default$b = def$8;
  var patternProperties = /*#__PURE__*/Object.defineProperty({
    "default": _default$b
  }, '__esModule', {
    value: true
  });
  var def$7 = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      if ((0, util.alwaysValidSchema)(it, schema)) {
        cxt.fail();
        return;
      }
      var valid = gen.name("valid");
      cxt.subschema({
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false
      }, valid);
      cxt.failResult(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error();
      });
    },
    error: {
      message: "must NOT be valid"
    }
  };
  var _default$a = def$7;
  var not = /*#__PURE__*/Object.defineProperty({
    "default": _default$a
  }, '__esModule', {
    value: true
  });
  var def$6 = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: _code.validateUnion,
    error: {
      message: "must match a schema in anyOf"
    }
  };
  var _default$9 = def$6;
  var anyOf = /*#__PURE__*/Object.defineProperty({
    "default": _default$9
  }, '__esModule', {
    value: true
  });
  var error$3 = {
    message: "must match exactly one schema in oneOf",
    params: function params(_ref71) {
      var _params3 = _ref71.params;
      return (0, codegen._)(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral(["{passingSchemas: ", "}"])), _params3.passing);
    }
  };
  var def$5 = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: error$3,
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      if (it.opts.discriminator && parentSchema.discriminator) return;
      var schArr = schema;
      var valid = gen["let"]("valid", false);
      var passing = gen["let"]("passing", null);
      var schValid = gen.name("_valid");
      cxt.setParams({
        passing: passing
      });
      // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
      gen.block(validateOneOf);
      cxt.result(valid, function () {
        return cxt.reset();
      }, function () {
        return cxt.error(true);
      });
      function validateOneOf() {
        schArr.forEach(function (sch, i) {
          var schCxt;
          if ((0, util.alwaysValidSchema)(it, sch)) {
            gen["var"](schValid, true);
          } else {
            schCxt = cxt.subschema({
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: true
            }, schValid);
          }
          if (i > 0) {
            gen["if"]((0, codegen._)(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral(["", " && ", ""])), schValid, valid)).assign(valid, false).assign(passing, (0, codegen._)(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral(["[", ", ", "]"])), passing, i))["else"]();
          }
          gen["if"](schValid, function () {
            gen.assign(valid, true);
            gen.assign(passing, i);
            if (schCxt) cxt.mergeEvaluated(schCxt, codegen.Name);
          });
        });
      }
    }
  };
  var _default$8 = def$5;
  var oneOf = /*#__PURE__*/Object.defineProperty({
    "default": _default$8
  }, '__esModule', {
    value: true
  });
  var def$4 = {
    keyword: "allOf",
    schemaType: "array",
    code: function code(cxt) {
      var gen = cxt.gen,
        schema = cxt.schema,
        it = cxt.it;
      /* istanbul ignore if */
      if (!Array.isArray(schema)) throw new Error("ajv implementation error");
      var valid = gen.name("valid");
      schema.forEach(function (sch, i) {
        if ((0, util.alwaysValidSchema)(it, sch)) return;
        var schCxt = cxt.subschema({
          keyword: "allOf",
          schemaProp: i
        }, valid);
        cxt.ok(valid);
        cxt.mergeEvaluated(schCxt);
      });
    }
  };
  var _default$7 = def$4;
  var allOf = /*#__PURE__*/Object.defineProperty({
    "default": _default$7
  }, '__esModule', {
    value: true
  });
  var error$2 = {
    message: function message(_ref72) {
      var params = _ref72.params;
      return (0, codegen.str)(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral(["must match \"", "\" schema"])), params.ifClause);
    },
    params: function params(_ref73) {
      var _params4 = _ref73.params;
      return (0, codegen._)(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral(["{failingKeyword: ", "}"])), _params4.ifClause);
    }
  };
  var def$3 = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    error: error$2,
    code: function code(cxt) {
      var gen = cxt.gen,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      if (parentSchema.then === undefined && parentSchema["else"] === undefined) {
        (0, util.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
      }
      var hasThen = hasSchema(it, "then");
      var hasElse = hasSchema(it, "else");
      if (!hasThen && !hasElse) return;
      var valid = gen["let"]("valid", true);
      var schValid = gen.name("_valid");
      validateIf();
      cxt.reset();
      if (hasThen && hasElse) {
        var ifClause = gen["let"]("ifClause");
        cxt.setParams({
          ifClause: ifClause
        });
        gen["if"](schValid, validateClause("then", ifClause), validateClause("else", ifClause));
      } else if (hasThen) {
        gen["if"](schValid, validateClause("then"));
      } else {
        gen["if"]((0, codegen.not)(schValid), validateClause("else"));
      }
      cxt.pass(valid, function () {
        return cxt.error(true);
      });
      function validateIf() {
        var schCxt = cxt.subschema({
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, schValid);
        cxt.mergeEvaluated(schCxt);
      }
      function validateClause(keyword, ifClause) {
        return function () {
          var schCxt = cxt.subschema({
            keyword: keyword
          }, schValid);
          gen.assign(valid, schValid);
          cxt.mergeValidEvaluated(schCxt, valid);
          if (ifClause) gen.assign(ifClause, (0, codegen._)(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral(["", ""])), keyword));else cxt.setParams({
            ifClause: keyword
          });
        };
      }
    }
  };
  function hasSchema(it, keyword) {
    var schema = it.schema[keyword];
    return schema !== undefined && !(0, util.alwaysValidSchema)(it, schema);
  }
  var _default$6 = def$3;
  var _if = /*#__PURE__*/Object.defineProperty({
    "default": _default$6
  }, '__esModule', {
    value: true
  });
  var def$2 = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code: function code(_ref74) {
      var keyword = _ref74.keyword,
        parentSchema = _ref74.parentSchema,
        it = _ref74.it;
      if (parentSchema["if"] === undefined) (0, util.checkStrictMode)(it, "\"".concat(keyword, "\" without \"if\" is ignored"));
    }
  };
  var _default$5 = def$2;
  var thenElse = /*#__PURE__*/Object.defineProperty({
    "default": _default$5
  }, '__esModule', {
    value: true
  });
  function getApplicator() {
    var draft2020 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var applicator = [
    // any
    not["default"], anyOf["default"], oneOf["default"], allOf["default"], _if["default"], thenElse["default"],
    // object
    propertyNames["default"], additionalProperties["default"], dependencies["default"], properties$1["default"], patternProperties["default"]];
    // array
    if (draft2020) applicator.push(prefixItems["default"], items2020["default"]);else applicator.push(additionalItems["default"], items["default"]);
    applicator.push(contains["default"]);
    return applicator;
  }
  var _default$4 = getApplicator;
  var applicator = /*#__PURE__*/Object.defineProperty({
    "default": _default$4
  }, '__esModule', {
    value: true
  });
  var error$1 = {
    message: function message(_ref75) {
      var schemaCode = _ref75.schemaCode;
      return (0, codegen.str)(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral(["must match format \"", "\""])), schemaCode);
    },
    params: function params(_ref76) {
      var schemaCode = _ref76.schemaCode;
      return (0, codegen._)(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral(["{format: ", "}"])), schemaCode);
    }
  };
  var def$1 = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: true,
    error: error$1,
    code: function code(cxt, ruleType) {
      var gen = cxt.gen,
        data = cxt.data,
        $data = cxt.$data,
        schema = cxt.schema,
        schemaCode = cxt.schemaCode,
        it = cxt.it;
      var opts = it.opts,
        errSchemaPath = it.errSchemaPath,
        schemaEnv = it.schemaEnv,
        self = it.self;
      if (!opts.validateFormats) return;
      if ($data) validate$DataFormat();else validateFormat();
      function validate$DataFormat() {
        var fmts = gen.scopeValue("formats", {
          ref: self.formats,
          code: opts.code.formats
        });
        var fDef = gen["const"]("fDef", (0, codegen._)(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral(["", "[", "]"])), fmts, schemaCode));
        var fType = gen["let"]("fType");
        var format = gen["let"]("format");
        // TODO simplify
        gen["if"]((0, codegen._)(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral(["typeof ", " == \"object\" && !(", " instanceof RegExp)"])), fDef, fDef), function () {
          return gen.assign(fType, (0, codegen._)(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral(["", ".type || \"string\""])), fDef)).assign(format, (0, codegen._)(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral(["", ".validate"])), fDef));
        }, function () {
          return gen.assign(fType, (0, codegen._)(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral(["\"string\""])))).assign(format, fDef);
        });
        cxt.fail$data((0, codegen.or)(unknownFmt(), invalidFmt()));
        function unknownFmt() {
          if (opts.strictSchema === false) return codegen.nil;
          return (0, codegen._)(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral(["", " && !", ""])), schemaCode, format);
        }
        function invalidFmt() {
          var callFormat = schemaEnv.$async ? (0, codegen._)(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral(["(", ".async ? await ", "(", ") : ", "(", "))"])), fDef, format, data, format, data) : (0, codegen._)(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral(["", "(", ")"])), format, data);
          var validData = (0, codegen._)(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral(["(typeof ", " == \"function\" ? ", " : ", ".test(", "))"])), format, callFormat, format, data);
          return (0, codegen._)(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral(["", " && ", " !== true && ", " === ", " && !", ""])), format, format, fType, ruleType, validData);
        }
      }
      function validateFormat() {
        var formatDef = self.formats[schema];
        if (!formatDef) {
          unknownFormat();
          return;
        }
        if (formatDef === true) return;
        var _getFormat = getFormat(formatDef),
          _getFormat2 = _slicedToArray(_getFormat, 3),
          fmtType = _getFormat2[0],
          format = _getFormat2[1],
          fmtRef = _getFormat2[2];
        if (fmtType === ruleType) cxt.pass(validCondition());
        function unknownFormat() {
          if (opts.strictSchema === false) {
            self.logger.warn(unknownMsg());
            return;
          }
          throw new Error(unknownMsg());
          function unknownMsg() {
            return "unknown format \"".concat(schema, "\" ignored in schema at path \"").concat(errSchemaPath, "\"");
          }
        }
        function getFormat(fmtDef) {
          var code = fmtDef instanceof RegExp ? (0, codegen.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen._)(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral(["", "", ""])), opts.code.formats, (0, codegen.getProperty)(schema)) : undefined;
          var fmt = gen.scopeValue("formats", {
            key: schema,
            ref: fmtDef,
            code: code
          });
          if (_typeof(fmtDef) == "object" && !(fmtDef instanceof RegExp)) {
            return [fmtDef.type || "string", fmtDef.validate, (0, codegen._)(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral(["", ".validate"])), fmt)];
          }
          return ["string", fmtDef, fmt];
        }
        function validCondition() {
          if (_typeof(formatDef) == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
            if (!schemaEnv.$async) throw new Error("async format in sync schema");
            return (0, codegen._)(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral(["await ", "(", ")"])), fmtRef, data);
          }
          return typeof format == "function" ? (0, codegen._)(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral(["", "(", ")"])), fmtRef, data) : (0, codegen._)(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral(["", ".test(", ")"])), fmtRef, data);
        }
      }
    }
  };
  var _default$3 = def$1;
  var format$1 = /*#__PURE__*/Object.defineProperty({
    "default": _default$3
  }, '__esModule', {
    value: true
  });
  var format = [format$1["default"]];
  var _default$2 = format;
  var format_2 = /*#__PURE__*/Object.defineProperty({
    "default": _default$2
  }, '__esModule', {
    value: true
  });
  var metadata = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.contentVocabulary = exports.metadataVocabulary = void 0;
    exports.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
    exports.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  });
  var draft7Vocabularies = [core_1["default"], validation_1["default"], (0, applicator["default"])(), format_2["default"], metadata.metadataVocabulary, metadata.contentVocabulary];
  var _default$1 = draft7Vocabularies;
  var draft7 = /*#__PURE__*/Object.defineProperty({
    "default": _default$1
  }, '__esModule', {
    value: true
  });
  var types = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DiscrError = void 0;
    (function (DiscrError) {
      DiscrError["Tag"] = "tag";
      DiscrError["Mapping"] = "mapping";
    })(exports.DiscrError || (exports.DiscrError = {}));
  });
  var error = {
    message: function message(_ref77) {
      var _ref77$params = _ref77.params,
        discrError = _ref77$params.discrError,
        tagName = _ref77$params.tagName;
      return discrError === types.DiscrError.Tag ? "tag \"".concat(tagName, "\" must be string") : "value of tag \"".concat(tagName, "\" must be in oneOf");
    },
    params: function params(_ref78) {
      var _ref78$params = _ref78.params,
        discrError = _ref78$params.discrError,
        tag = _ref78$params.tag,
        tagName = _ref78$params.tagName;
      return (0, codegen._)(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral(["{error: ", ", tag: ", ", tagValue: ", "}"])), discrError, tagName, tag);
    }
  };
  var def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: error,
    code: function code(cxt) {
      var gen = cxt.gen,
        data = cxt.data,
        schema = cxt.schema,
        parentSchema = cxt.parentSchema,
        it = cxt.it;
      var oneOf = parentSchema.oneOf;
      if (!it.opts.discriminator) {
        throw new Error("discriminator: requires discriminator option");
      }
      var tagName = schema.propertyName;
      if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
      if (schema.mapping) throw new Error("discriminator: mapping is not supported");
      if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
      var valid = gen["let"]("valid", false);
      var tag = gen["const"]("tag", (0, codegen._)(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral(["", "", ""])), data, (0, codegen.getProperty)(tagName)));
      gen["if"]((0, codegen._)(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral(["typeof ", " == \"string\""])), tag), function () {
        return validateMapping();
      }, function () {
        return cxt.error(false, {
          discrError: types.DiscrError.Tag,
          tag: tag,
          tagName: tagName
        });
      });
      cxt.ok(valid);
      function validateMapping() {
        var mapping = getMapping();
        gen["if"](false);
        for (var tagValue in mapping) {
          gen.elseIf((0, codegen._)(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral(["", " === ", ""])), tag, tagValue));
          gen.assign(valid, applyTagSchema(mapping[tagValue]));
        }
        gen["else"]();
        cxt.error(false, {
          discrError: types.DiscrError.Mapping,
          tag: tag,
          tagName: tagName
        });
        gen.endIf();
      }
      function applyTagSchema(schemaProp) {
        var _valid = gen.name("valid");
        var schCxt = cxt.subschema({
          keyword: "oneOf",
          schemaProp: schemaProp
        }, _valid);
        cxt.mergeEvaluated(schCxt, codegen.Name);
        return _valid;
      }
      function getMapping() {
        var _a;
        var oneOfMapping = {};
        var topRequired = hasRequired(parentSchema);
        var tagRequired = true;
        for (var i = 0; i < oneOf.length; i++) {
          var sch = oneOf[i];
          if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util.schemaHasRulesButRef)(sch, it.self.RULES)) {
            sch = compile$1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
            if (sch instanceof compile$1.SchemaEnv) sch = sch.schema;
          }
          var propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
          if (_typeof(propSch) != "object") {
            throw new Error("discriminator: oneOf subschemas (or referenced schemas) must have \"properties/".concat(tagName, "\""));
          }
          tagRequired = tagRequired && (topRequired || hasRequired(sch));
          addMappings(propSch, i);
        }
        if (!tagRequired) throw new Error("discriminator: \"".concat(tagName, "\" must be required"));
        return oneOfMapping;
        function hasRequired(_ref79) {
          var required = _ref79.required;
          return Array.isArray(required) && required.includes(tagName);
        }
        function addMappings(sch, i) {
          if (sch["const"]) {
            addMapping(sch["const"], i);
          } else if (sch["enum"]) {
            var _iterator25 = _createForOfIteratorHelper(sch["enum"]),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var tagValue = _step25.value;
                addMapping(tagValue, i);
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          } else {
            throw new Error("discriminator: \"properties/".concat(tagName, "\" must have \"const\" or \"enum\""));
          }
        }
        function addMapping(tagValue, i) {
          if (typeof tagValue != "string" || tagValue in oneOfMapping) {
            throw new Error("discriminator: \"".concat(tagName, "\" values must be unique strings"));
          }
          oneOfMapping[tagValue] = i;
        }
      }
    }
  };
  var _default = def;
  var discriminator = /*#__PURE__*/Object.defineProperty({
    "default": _default
  }, '__esModule', {
    value: true
  });
  var $schema = "http://json-schema.org/draft-07/schema#";
  var $id = "http://json-schema.org/draft-07/schema#";
  var title = "Core schema meta-schema";
  var definitions = {
    schemaArray: {
      type: "array",
      minItems: 1,
      items: {
        $ref: "#"
      }
    },
    nonNegativeInteger: {
      type: "integer",
      minimum: 0
    },
    nonNegativeIntegerDefault0: {
      allOf: [{
        $ref: "#/definitions/nonNegativeInteger"
      }, {
        "default": 0
      }]
    },
    simpleTypes: {
      "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
    },
    stringArray: {
      type: "array",
      items: {
        type: "string"
      },
      uniqueItems: true,
      "default": []
    }
  };
  var type = ["object", "boolean"];
  var properties = {
    $id: {
      type: "string",
      format: "uri-reference"
    },
    $schema: {
      type: "string",
      format: "uri"
    },
    $ref: {
      type: "string",
      format: "uri-reference"
    },
    $comment: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    "default": true,
    readOnly: {
      type: "boolean",
      "default": false
    },
    examples: {
      type: "array",
      items: true
    },
    multipleOf: {
      type: "number",
      exclusiveMinimum: 0
    },
    maximum: {
      type: "number"
    },
    exclusiveMaximum: {
      type: "number"
    },
    minimum: {
      type: "number"
    },
    exclusiveMinimum: {
      type: "number"
    },
    maxLength: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minLength: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    pattern: {
      type: "string",
      format: "regex"
    },
    additionalItems: {
      $ref: "#"
    },
    items: {
      anyOf: [{
        $ref: "#"
      }, {
        $ref: "#/definitions/schemaArray"
      }],
      "default": true
    },
    maxItems: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minItems: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    uniqueItems: {
      type: "boolean",
      "default": false
    },
    contains: {
      $ref: "#"
    },
    maxProperties: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minProperties: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    required: {
      $ref: "#/definitions/stringArray"
    },
    additionalProperties: {
      $ref: "#"
    },
    definitions: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      "default": {}
    },
    properties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      "default": {}
    },
    patternProperties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      propertyNames: {
        format: "regex"
      },
      "default": {}
    },
    dependencies: {
      type: "object",
      additionalProperties: {
        anyOf: [{
          $ref: "#"
        }, {
          $ref: "#/definitions/stringArray"
        }]
      }
    },
    propertyNames: {
      $ref: "#"
    },
    "const": true,
    "enum": {
      type: "array",
      items: true,
      minItems: 1,
      uniqueItems: true
    },
    type: {
      anyOf: [{
        $ref: "#/definitions/simpleTypes"
      }, {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: true
      }]
    },
    format: {
      type: "string"
    },
    contentMediaType: {
      type: "string"
    },
    contentEncoding: {
      type: "string"
    },
    "if": {
      $ref: "#"
    },
    then: {
      $ref: "#"
    },
    "else": {
      $ref: "#"
    },
    allOf: {
      $ref: "#/definitions/schemaArray"
    },
    anyOf: {
      $ref: "#/definitions/schemaArray"
    },
    oneOf: {
      $ref: "#/definitions/schemaArray"
    },
    not: {
      $ref: "#"
    }
  };
  var draft7MetaSchema = {
    $schema: $schema,
    $id: $id,
    title: title,
    definitions: definitions,
    type: type,
    properties: properties,
    "default": true
  };
  var ajv$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var META_SUPPORT_DATA = ["/properties"];
    var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
    var Ajv = /*#__PURE__*/function (_core$1$default) {
      _inherits(Ajv, _core$1$default);
      var _super29 = _createSuper(Ajv);
      function Ajv() {
        _classCallCheck(this, Ajv);
        return _super29.apply(this, arguments);
      }
      _createClass(Ajv, [{
        key: "_addVocabularies",
        value: function _addVocabularies() {
          var _this29 = this;
          _get(_getPrototypeOf(Ajv.prototype), "_addVocabularies", this).call(this);
          draft7["default"].forEach(function (v) {
            return _this29.addVocabulary(v);
          });
          if (this.opts.discriminator) this.addKeyword(discriminator["default"]);
        }
      }, {
        key: "_addDefaultMetaSchema",
        value: function _addDefaultMetaSchema() {
          _get(_getPrototypeOf(Ajv.prototype), "_addDefaultMetaSchema", this).call(this);
          if (!this.opts.meta) return;
          var metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
          this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
          this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
        }
      }, {
        key: "defaultMeta",
        value: function defaultMeta() {
          return this.opts.defaultMeta = _get(_getPrototypeOf(Ajv.prototype), "defaultMeta", this).call(this) || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
        }
      }]);
      return Ajv;
    }(core$1["default"]);
    module.exports = exports = Ajv;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = Ajv;
    Object.defineProperty(exports, "KeywordCxt", {
      enumerable: true,
      get: function get() {
        return validate$1.KeywordCxt;
      }
    });
    Object.defineProperty(exports, "_", {
      enumerable: true,
      get: function get() {
        return codegen._;
      }
    });
    Object.defineProperty(exports, "str", {
      enumerable: true,
      get: function get() {
        return codegen.str;
      }
    });
    Object.defineProperty(exports, "stringify", {
      enumerable: true,
      get: function get() {
        return codegen.stringify;
      }
    });
    Object.defineProperty(exports, "nil", {
      enumerable: true,
      get: function get() {
        return codegen.nil;
      }
    });
    Object.defineProperty(exports, "Name", {
      enumerable: true,
      get: function get() {
        return codegen.Name;
      }
    });
    Object.defineProperty(exports, "CodeGen", {
      enumerable: true,
      get: function get() {
        return codegen.CodeGen;
      }
    });
    Object.defineProperty(exports, "ValidationError", {
      enumerable: true,
      get: function get() {
        return validation_error["default"];
      }
    });
    Object.defineProperty(exports, "MissingRefError", {
      enumerable: true,
      get: function get() {
        return ref_error["default"];
      }
    });
  });
  var Ajv = /*@__PURE__*/getDefaultExportFromCjs(ajv$1);
  var ajv = new Ajv({
    strictTuples: false,
    code: {
      es5: true
    },
    unicodeRegExp: false
  });
  var validate = ajv.compile(JSON.parse(JSON.stringify(_bachJsonSchema["default"])));
  _exports.validate = validate;
  var valid = function valid(bach) {
    if (!validate(bach)) {
      var message = 'Invalid Bach.JSON source data';
      var pretty = function pretty(json) {
        return JSON.stringify(json, null, 2);
      };
      console.error(message, pretty(bach));
      console.error(pretty(validate.errors));
      throw TypeError("Invalid Bach.JSON source data");
    }
    return bach;
  };

  /**
   * Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
   * Given a string, automatically upgrades source to v3 (simple replacement of !play with play!).
   * Main entry point for integrating with core bach ClojureScript library.
   */
  _exports.valid = valid;
  var compose = function compose(source) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (typeof source === 'string') {
      var upgraded = source.replace(/!play/i, 'play!');
      return _bachCljs["default"].compose(upgraded);
    }
    if (_typeof(source) === 'object') {
      return strict ? valid(source) : source;
    }
    throw TypeError("Unsupported Bach.JSON data type (".concat(_typeof(source), "). Must be a bach.json object or raw bach string."));
  };
  _exports.compose = compose;
  var compile = function compile(source) {
    var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var data = compose(source, strict);
    return JSON.parse(JSON.stringify(data));
  };
  _exports.compile = compile;
  function scaleify(value) {
    if (typeof value === 'string') {
      var _value$split = value.split(' '),
        _value$split2 = _slicedToArray(_value$split, 2),
        tonic = _value$split2[0],
        _type2 = _value$split2[1];
      return (0, _teoria.scale)(tonic, _type2.toLowerCase());
    } else if (_typeof(value) === 'object') {
      return value;
    }
    throw TypeError("Unknown scale type (".concat(_typeof(value), "): ").concat(value));
  }
  function chordify(value) {
    if (typeof value === 'string') {
      return (0, _teoria.chord)(value);
    } else if (_typeof(value) === 'object') {
      return value;
    }
    throw TypeError("Unknown chord type (".concat(_typeof(value), "): ").concat(value));
  }
  function scaleToString(scale) {
    return "".concat(scale.tonic.toString().slice(0, 2), " ").concat(scale.name);
  }
  function notesInChord(value) {
    return chordify(value).notes().map(function (note) {
      return Note.valueOf(note);
    });
  }
  function notesInScale(value) {
    return scaleify(value).notes().map(function (note) {
      return Note.valueOf(note);
    });
  }
  function notesIn(kind, value) {
    var notes = notesOf[kind];
    if (notes) {
      return notes(value);
    }
    return [];
  }

  // TODO: Allow custom note resolvers to be registered globally or locally so people can easily define their own semantics
  //  - Could call this `itemsOf` to be more generic and flexible
  var notesOf = {
    note: function note(value) {
      return [value];
    },
    chord: function chord(value) {
      return notesInChord(value);
    },
    scale: function scale(value) {
      return notesInScale(value);
    },
    penta: function penta(value) {
      return notesInScale(value);
    }
  };

  // TODO: Note.valueOf
  _exports.notesOf = notesOf;
  function notesIntersect(left, right) {
    return left.filter(function (note) {
      return right.includes(note);
    });
  }

  // TODO: Replce with individual functions and remove class, no longer necessary
  // TODO: Remove cyclic reference between data module by bringing in all note related functions.
  var Note = /*#__PURE__*/function () {
    function Note() {
      _classCallCheck(this, Note);
    }
    _createClass(Note, null, [{
      key: "parse",
      value: function parse(value) {
        if (typeof value === 'string') {
          return (0, _teoria.note)(value);
        } else if (_typeof(value) === 'object' || value instanceof _teoria.Note) {
          return value;
        }
        throw TypeError("Unknown note type (".concat(_typeof(value), "): ").concat(value));
      }
    }, {
      key: "all",
      value: function all(kind, note) {
        try {
          return notesIn(kind, note);
        } catch (e) {
          return [];
        }
      }
    }, {
      key: "hash",
      value: function hash(note) {
        return Note.parse(note).chroma();
      }
    }, {
      key: "pitchOf",
      value: function pitchOf(note) {
        return Note.valueOf(note);
      }

      // TODO: Consider using chroma instead
      // TODO: Use this in nek, and anywhere else this same logic might be used
    }, {
      key: "valueOf",
      value: function valueOf(note) {
        return Note.parse(note).scientific()
        // .toLowerCase()
        // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
        .replace(/[0-9]+$/, '');
      }
    }, {
      key: "valuesOf",
      value: function valuesOf(notes) {
        return notes.map(Note.valueOf);
      }
    }, {
      key: "generalize",
      value: function generalize(note$1) {
        return (0, _teoria.note)(Note.valueOf(note$1));
      }
    }, {
      key: "unite",
      value: function unite() {
        var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return notes.reduce(function (all, note) {
          var value = Note.valueOf(note);
          var has = Note.includes(all, value);
          return !has ? all.concat(value) : all;
        }, []);
      }
    }, {
      key: "includes",
      value: function includes() {
        var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var note = arguments.length > 1 ? arguments[1] : undefined;
        return notes.some(function (other) {
          return Note.equals(other, note);
        });
      }
    }, {
      key: "equals",
      value: function equals(left, right) {
        return Note.hash(left) == Note.hash(right);
      }
    }]);
    return Note;
  }();
  /**
   * Recursively calculates the greatest common denominator (GCD) between two values
   *
   * @param {Number} a
   * @param {Number} b
   * @returns {Number}
   */
  _exports.Note = Note;
  function gcd$1(a, b) {
    if (b == 0) {
      return a;
    }
    return gcd$1(b, a % b);
  }

  /**
   * Modifies a value so that it is always between the provided min and max
   *
   * @param {Number} value
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */
  function clamp$1(value) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return Math.min(max, Math.max(min, value));
  }

  /**
   * Interpolation function returning the value between x and y at a specific ratio
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */
  function lerp$1(ratio, x, y) {
    return x * (1 - ratio) + y * ratio;
  }

  /**
   * Interpolation function returning the ratio of a value clamped between x and y
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */

  function invlerp$1(value, x, y) {
    return clamp$1((value - x) / (y - x));
  }

  /**
   * Determines the element found in an array at a given ratio
   *
   * @param {Float} ratio
   * @param {Array} all
   */
  function steps(ratio, all) {
    ratio %= 1;
    if (ratio < 0) ratio += 1;
    return all[Math.floor(ratio * all.length)];
  }
  var Lens = /*#__PURE__*/function () {
    function Lens() {
      var _ref80 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref80$unit = _ref80.unit,
        unit = _ref80$unit === void 0 ? 1 : _ref80$unit,
        _ref80$is = _ref80.is,
        is = _ref80$is === void 0 ? 1 : _ref80$is,
        _ref80$as = _ref80.as,
        as = _ref80$as === void 0 ? 1 : _ref80$as,
        _ref80$min = _ref80.min,
        min = _ref80$min === void 0 ? 0 : _ref80$min,
        _ref80$max = _ref80.max,
        max = _ref80$max === void 0 ? 1 : _ref80$max,
        _ref80$grid = _ref80.grid,
        grid = _ref80$grid === void 0 ? 1 : _ref80$grid,
        _ref80$origin = _ref80.origin,
        origin = _ref80$origin === void 0 ? 0 : _ref80$origin;
      _classCallCheck(this, Lens);
      this.data = {
        unit: unit,
        is: is,
        as: as,
        min: min,
        max: max,
        grid: grid,
        origin: origin
      };
      // Would improve flexibility by wrapping all getters in Lens with this, allowing Units and Lens to use the same normalization function
      // this.normalize = normalize || Units.normalize
    }
    _createClass(Lens, [{
      key: "unit",
      get: function get() {
        return this.data.unit || this.data.is || 1;
      }
    }, {
      key: "is",
      get: function get() {
        return this.data.is || this.unit;
      }
    }, {
      key: "as",
      get: function get() {
        return this.data.as || this.unit;
      }
    }, {
      key: "min",
      get: function get() {
        return this.data.min || 0;
      }
    }, {
      key: "max",
      get: function get() {
        return this.data.max || Number.MAX_SAFE_INTEGER;
      }
    }, {
      key: "grid",
      get: function get() {
        return this.data.grid || 1;
      }
    }, {
      key: "origin",
      get: function get() {
        return this.data.origin || 0;
      }
    }, {
      key: "use",
      value: function use(data) {
        return Object.assign({}, this.data, data);
      }
    }, {
      key: "assign",
      value: function assign(data) {
        this.data = this.use(data);
        return this;
      }
    }]);
    return Lens;
  }();
  /**
   * Recursively calculates the greatest common denominator (GCD) between two values
   *
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */
  function gcd(x, y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  /**
   * Modifies a value so that it is always between x and y
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */
  function _clamp(value) {
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return Math.min(y, Math.max(x, value));
  }

  /**
   * Interpolation function returning the value between x and y at a specific ratio
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */
  function _lerp(ratio, x, y) {
    return x * (1 - ratio) + y * ratio;
  }

  /**
   * Interpolation function returning the ratio of a value clamped between x and y
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */

  function _invlerp(value, x, y) {
    return _clamp((value - x) / (y - x));
  }

  /**
   * Cycles a value around an range (from x to y).
   *
   * @param {Number} value
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
  */
  function _cyclic(value, x, y) {
    return (value >= x ? value : value + y) % y;
  }

  // TODO: Support calc method for allowing conversion of units via string (like CSS):
  var Units = /*#__PURE__*/function () {
    function Units() {
      var _ref81 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref81$map = _ref81.map,
        map = _ref81$map === void 0 ? {} : _ref81$map,
        _ref81$lens = _ref81.lens,
        lens = _ref81$lens === void 0 ? {} : _ref81$lens;
      _classCallCheck(this, Units);
      this.map = map;
      this.lens = new Lens(lens);
    }
    _createClass(Units, [{
      key: "normalize",
      value: function normalize(unit) {
        if (typeof unit === 'number') {
          return unit;
        }
        if (typeof unit === 'string') {
          var value = this.map[unit] || 1;
          return typeof value === 'function' ? value(unit, this) : Number(value);
        }
        return 1;
      }
    }, {
      key: "scope",
      value: function scope() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var lens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
        var _this$lens$use = this.lens.use(lens),
          is = _this$lens$use.is,
          as = _this$lens$use.as,
          min = _this$lens$use.min,
          max = _this$lens$use.max,
          origin = _this$lens$use.origin;
        var index = this.cast(value - origin, {
          is: is,
          as: as
        });
        var head = this.cast(min || 0, {
          is: is,
          as: as
        });
        var tail = this.cast(max || value, {
          is: is,
          as: as
        });
        return {
          value: value,
          index: index,
          head: head,
          tail: tail
        };
      }

      // TODO: Allow `is` and `as` to be provided as mapping functions
    }, {
      key: "cast",
      value: function cast() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var _ref82 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref82$is = _ref82.is,
          is = _ref82$is === void 0 ? this.lens.unit : _ref82$is,
          _ref82$as = _ref82.as,
          as = _ref82$as === void 0 ? this.lens.unit : _ref82$as;
        return this.normalize(value) / (this.normalize(as) / this.normalize(is));
      }
    }, {
      key: "snap",
      value: function snap(value) {
        var lens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
        var _this$scope = this.scope(value, lens),
          index = _this$scope.index;
        var unit = this.normalize(lens.as || lens.unit);
        var calc = typeof lens.calc === 'function' ? lens.calc : Math.floor;
        return calc(index) * unit;
      }
    }, {
      key: "clamp",
      value: function clamp(value, lens) {
        var _this$scope2 = this.scope(value, lens),
          index = _this$scope2.index,
          head = _this$scope2.head,
          tail = _this$scope2.tail;
        return _clamp(index, head, tail);
      }
    }, {
      key: "cyclic",
      value: function cyclic(value, lens) {
        var _this$scope3 = this.scope(value, lens),
          index = _this$scope3.index,
          head = _this$scope3.head,
          tail = _this$scope3.tail;
        return _cyclic(index, head, tail);
      }
    }, {
      key: "lerp",
      value: function lerp(ratio, lens) {
        var _this$scope4 = this.scope(0, lens),
          head = _this$scope4.head,
          tail = _this$scope4.tail;
        return _lerp(ratio, head, tail);
      }
    }, {
      key: "invlerp",
      value: function invlerp(value, lens) {
        var _this$scope5 = this.scope(value, lens),
          index = _this$scope5.index,
          head = _this$scope5.head,
          tail = _this$scope5.tail;
        return _invlerp(index, head, tail);
      }
    }, {
      key: "delta",
      value: function delta(value, lens) {
        var _this$scope6 = this.scope(value, lens),
          index = _this$scope6.index,
          head = _this$scope6.head;
        return index - head;
      }
    }, {
      key: "range",
      value: function range(value, lens) {
        var _this$scope7 = this.scope(value, lens),
          head = _this$scope7.head,
          tail = _this$scope7.tail;
        return tail - head;
      }
    }, {
      key: "progress",
      value: function progress(value, lens) {
        var delta = this.delta(value, lens);
        var range = this.range(value, lens);
        return delta / range;
      }
    }, {
      key: "fold",
      value: function fold(value) {
        var lens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
        var grid = lens.grid || 1;
        var basis = gcd(value, grid);
        var size = this.clamp(value, lens);
        var container = this.snap(size, {
          as: basis
        });
        var ratio = Math.max(1, Math.min(value / basis, grid));
        var min = value >= grid ? grid : basis;
        return Math.max(min, this.snap(container, {
          as: ratio
        }));
      }

      // Changes the base unit to the provided key by recalculating and replacing the unit map pairs.
      // TODO: Test, and ensure that the base unit is equal to 1 (or, could just use scale)
    }, {
      key: "rebase",
      value: function rebase() {
        var _this30 = this;
        var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lens.unit;
        if (unit === this.lens.unit) return this;
        var map = Object.entries(this.map).reduce(function (map, _ref83) {
          var _ref84 = _slicedToArray(_ref83, 2),
            key = _ref84[0],
            value = _ref84[1];
          return Object.assign(map, _defineProperty({}, key, _this30.cast(value, {
            is: _this30.lens.is,
            as: unit
          })), _defineProperty({}, unit, 1));
        });
        this.map = map;
        this.lens.unit = unit;
        return this;
      }
    }, {
      key: "clone",
      value: function clone(props) {
        var map = Object.assign({}, this.map, props.map);
        var lens = Object.assign({}, this.lens, props.lens);
        return new Units({
          map: map,
          lens: lens
        });
      }
    }], [{
      key: "use",
      value: function use(props) {
        return new Units(props);
      }
    }]);
    return Units;
  }();
  /**
   * Provides essential duration values and calculations of a bach track.
   * Enables trivial conversions between any duration unit via cast (based
   * on milliseconds) and unitize (based on steps, bach's iteration unit).
   */
  var Durations = /*#__PURE__*/function (_Units) {
    _inherits(Durations, _Units);
    var _super30 = _createSuper(Durations);
    function Durations(source, lens) {
      var _this31;
      _classCallCheck(this, Durations);
      _this31 = _super30.call(this, {
        map: null,
        lens: lens
      });
      _this31.source = source;
      _this31.data = compile(source);
      _this31.init();
      return _this31;
    }
    _createClass(Durations, [{
      key: "init",
      value: function init() {
        this.map = Durations.map(this.data);
        this.lens.assign({
          unit: 'step',
          max: this.total
        });
      }
    }, {
      key: "units",
      get: function get() {
        return this.data.units;
      }
    }, {
      key: "steps",
      get: function get() {
        return this.data.steps;
      }
    }, {
      key: "bar",
      get: function get() {
        return this.units.bar;
      }
    }, {
      key: "metrics",
      get: function get() {
        return this.data.metrics;
      }
    }, {
      key: "min",
      get: function get() {
        return this.metrics.min;
      }
    }, {
      key: "max",
      get: function get() {
        return this.metrics.max;
      }
    }, {
      key: "total",
      get: function get() {
        return this.metrics.total;
      }
    }, {
      key: "at",
      value: function at(duration) {
        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        var step = Math.floor(this.cast(duration, {
          is: is,
          as: 'step'
        }));
        var index = this.cyclic(step);
        var state = this.steps[index];
        var _ref85 = state || [],
          _ref86 = _slicedToArray(_ref85, 3),
          context = _ref86[0],
          play = _ref86[1],
          stop = _ref86[2];
        return {
          beat: context[0],
          elems: context.slice(1),
          play: play,
          stop: stop,
          index: index
        };
      }
    }, {
      key: "metronize",
      value: function metronize(duration) {
        var _ref87 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref87$is = _ref87.is,
          is = _ref87$is === void 0 ? 'ms' : _ref87$is,
          _ref87$as = _ref87.as,
          as = _ref87$as === void 0 ? 'pulse' : _ref87$as;
        var index = this.cast(duration, {
          is: is,
          as: as
        });
        var bar = this.cast(this.bar.step, {
          as: as
        });
        return Math.floor(index % bar);
      }

      // TODO: Either replace or improve via inspiration with this:
      // @see: https://tonejs.github.io/docs/r13/Time#quantize
    }, {
      key: "rhythmic",
      value: function rhythmic(duration) {
        var _this32 = this;
        var _ref88 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref88$is = _ref88.is,
          is = _ref88$is === void 0 ? 'ms' : _ref88$is,
          _ref88$units = _ref88.units,
          units = _ref88$units === void 0 ? ['8n', '4n'] : _ref88$units,
          _ref88$calc = _ref88.calc,
          calc = _ref88$calc === void 0 ? 'floor' : _ref88$calc,
          _ref88$size = _ref88.size,
          size = _ref88$size === void 0 ? 'min' : _ref88$size;
        var durations = units.map(function (unit) {
          var value = _this32.cast(duration, {
            is: is,
            as: unit
          });
          var result = Math[calc](value);
          return _this32.cast(result, {
            is: unit,
            as: is
          });
        }).sort(function (a, b) {
          return Math.abs(duration - a) - Math.abs(duration - b);
        });
        return Math[size].apply(Math, _toConsumableArray(durations));
      }
    }], [{
      key: "map",
      value: function map(source) {
        var data = compose(source, false);
        var _data$units = data.units,
          beat = _data$units.beat,
          step = _data$units.step,
          pulse = _data$units.pulse,
          time = _data$units.time,
          bar = _data$units.bar;
        return {
          step: 1,
          pulse: 1 / (beat.step / beat.pulse),
          bar: bar.step,
          ms: 1 / time.step,
          second: 1 / time.step * 1000,
          's': step,
          'p': pulse,
          'm': bar.step,
          '2n': bar.step / 2,
          '4n': bar.step / 4,
          '8n': bar.step / 8,
          '16n': bar.step / 16,
          '32n': bar.step / 32,
          '64n': bar.step / 64,
          '4up': bar.step - bar.step / 4,
          '8up': bar.step - bar.step / 8,
          '16up': bar.step - bar.step / 16,
          '32up': bar.step - bar.step / 32,
          '64up': bar.step - bar.step / 64
        };
      }
    }]);
    return Durations;
  }(Units);
  /**
   * Represents a single and unique playable element.
   * Uniqueness and equality are determined by `id`.
   */
  _exports.Durations = Durations;
  var Element = /*#__PURE__*/function () {
    function Element(data) {
      _classCallCheck(this, Element);
      this.data = data;
    }
    _createClass(Element, [{
      key: "id",
      get: function get() {
        return "".concat(this.data.kind, ".").concat(this.data.id);
      }
    }, {
      key: "uid",
      get: function get() {
        return Element.uid(this.id);
      }
    }, {
      key: "value",
      get: function get() {
        return this.data.value;
      }
    }, {
      key: "props",
      get: function get() {
        return this.data.props || [];
      }
    }, {
      key: "kind",
      get: function get() {
        return this.data.kind.toLowerCase();
      }
    }, {
      key: "duration",
      get: function get() {
        return this.data.duration;
      }
    }, {
      key: "notes",
      get: function get() {
        return Note.all(this.kind, this.value);
      }
    }, {
      key: "musical",
      get: function get() {
        return MUSICAL_ELEMENTS.includes(this.kind);
      }
    }], [{
      key: "uid",
      value: function uid(id) {
        return id.split('.').pop();
      }
    }]);
    return Element;
  }();
  /**
   * Provides a centralized and shareable store of parsed elements in a bach track.
   */
  _exports.Element = Element;
  var Elements = /*#__PURE__*/function () {
    function Elements() {
      var _ref89 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        source = _ref89.source,
        store = _ref89.store,
        cast = _ref89.cast;
      _classCallCheck(this, Elements);
      this.source = compose(source);
      this.cast = cast || function (_) {
        return _;
      };
      this.data = store || Elements.cast(this.source.elements, cast);
    }
    _createClass(Elements, [{
      key: "all",
      get: function get() {
        var _this33 = this;
        return this.kinds.flatMap(function (kind) {
          return _this33.every(kind);
        });
      }
    }, {
      key: "kinds",
      get: function get() {
        return Object.keys(this.data);
      }
    }, {
      key: "values",
      get: function get() {
        return this.all.map(function (elem) {
          return elem.value;
        });
      }
    }, {
      key: "ids",
      get: function get() {
        return this.all.map(function (elem) {
          return elem.id;
        });
      }
    }, {
      key: "get",
      value: function get(id) {
        var parts = typeof id === 'string' ? id.split('.') : [];
        if (parts.length === 2) {
          var _parts = _slicedToArray(parts, 2),
            kind = _parts[0],
            uid = _parts[1];
          var elem = this.data[kind][uid];
          return elem ? _objectSpread(_objectSpread({}, elem), {}, {
            id: uid,
            kind: kind
          }) : null;
        }
        throw TypeError('Element id must be a string in the format of "kind.hash"');
      }
    }, {
      key: "one",
      value: function one(kind) {
        return this.every(kind)[0];
      }
    }, {
      key: "every",
      value: function every(kind) {
        return Object.values(this.data[kind]).map(function (elem) {
          return new Element(elem);
        });
      }
    }, {
      key: "resolve",
      value: function resolve(elem) {
        var _this34 = this;
        // FIXME: Use json-schema validator here instead to support cross-context typing.
        // if (elem instanceof Element) return elem
        if (_typeof(elem) === 'object') return elem;
        if (typeof elem === 'string') return this.get(elem);
        if (Array.isArray(elem)) return elem.map(function (el) {
          return _this34.get(el);
        });
        if (elem == null) return null;
        throw TypeError('Failed to resolve element due to unsupported data type');
      }

      // TODO: Rename to `insert`
    }, {
      key: "register",
      value: function register(_ref90) {
        var kind = _ref90.kind,
          value = _ref90.value,
          props = _ref90.props;
        if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
        if (value == null) throw TypeError('value must be defined and non-null');
        var elem = (0, _bachCljs.elementize)(kind, [value].concat(_toConsumableArray(props)));
        var uid = Element.uid(elem.id);
        var record = this.cast(_objectSpread(_objectSpread({}, elem), {}, {
          id: uid,
          kind: kind
        }));
        this.data[kind] = this.data[kind] || {};
        this.data[kind][uid] = record;
        this.source.elements = this.data;
        return new Element(record);
      }
    }], [{
      key: "cast",
      value: function cast(elements) {
        var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
          return _;
        };
        if (!elements) return null;

        // TODO: Validate element shape with JSON Schema
        return Object.entries(elements).reduce(function (acc, _ref91) {
          var _ref92 = _slicedToArray(_ref91, 2),
            kind = _ref92[0],
            ids = _ref92[1];
          var elems = Object.entries(ids).reduce(function (acc, _ref93) {
            var _ref94 = _slicedToArray(_ref93, 2),
              id = _ref94[0],
              elem = _ref94[1];
            return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, id, as(_objectSpread({
              id: id,
              kind: kind
            }, elem))));
          }, {});
          return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, kind, elems));
        }, {});
      }
    }]);
    return Elements;
  }(); // TODO: Hoist out to Music, leaky abstraction
  _exports.Elements = Elements;
  var MUSICAL_ELEMENTS = ['note', 'chord', 'scale', ' penta']; // triad

  /**
   * Represents a single beat in a track.
   *
   * Beats are represented as a tuple and may contain multiple elements
   *
   * duration -> items -> elements
   */
  _exports.MUSICAL_ELEMENTS = MUSICAL_ELEMENTS;
  var Beat = /*#__PURE__*/function () {
    function Beat(data, store) {
      _classCallCheck(this, Beat);
      this.data = data;
      this.store = store;
    }
    _createClass(Beat, [{
      key: "id",
      get: function get() {
        return this.data.id;
      }
    }, {
      key: "index",
      get: function get() {
        return this.data.index;
      }
    }, {
      key: "duration",
      get: function get() {
        return this.data.duration;
      }
    }, {
      key: "items",
      get: function get() {
        var _this35 = this;
        return this.data.items.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            elements: item.elements.map(function (elem) {
              return _this35.store.resolve(elem);
            })
          });
        });
      }
    }, {
      key: "elements",
      get: function get() {
        var _this36 = this;
        return this.data.items.flatMap(function (_ref95) {
          var elements = _ref95.elements;
          return elements.map(function (elem) {
            return _this36.store.resolve(elem);
          });
        });
      }
    }, {
      key: "kinds",
      get: function get() {
        return this.all(function (_ref96) {
          var kind = _ref96.kind;
          return kind;
        });
      }
    }, {
      key: "values",
      get: function get() {
        return this.all(function (_ref97) {
          var value = _ref97.value;
          return value;
        });
      }
    }, {
      key: "notes",
      get: function get() {
        return this.notesOf(this.elements);
      }

      // Provides map of elements in a beat grouped by kind.
      // WARN: Doesn't support multiple elements of the same kind.
    }, {
      key: "parts",
      get: function get() {
        return this.elements.reduce(function (parts, elem) {
          return _objectSpread(_objectSpread({}, parts), {}, _defineProperty({}, elem.kind, elem));
        }, {});
      }
    }, {
      key: "musical",
      get: function get() {
        return this.elements.every(function (elem) {
          return elem.musical;
        });
      }
    }, {
      key: "all",
      value: function all() {
        var cast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
          return _;
        };
        return _toConsumableArray(new Set(this.elements.map(cast)));
      }
    }, {
      key: "find",
      value: function find(kind) {
        return this.elements.find(function (elem) {
          return kind === elem.kind;
        });
      }
    }, {
      key: "filter",
      value: function filter(kind) {
        return this.elements.filter(function (elem) {
          return kind === elem.kind;
        });
      }
    }, {
      key: "last",
      value: function last(kind) {
        return this.filter(kind).reverse()[0];
      }
    }, {
      key: "either",
      value: function either(kinds) {
        var _this37 = this;
        return kinds.reduce(function (acc, kind) {
          return acc.length ? acc : _this37.filter(kind);
        }, []);
      }
    }, {
      key: "notesOf",
      value: function notesOf(elements) {
        return Note.unite(elements.flatMap(function (_ref98) {
          var notes = _ref98.notes;
          return notes;
        }));
      }
    }], [{
      key: "from",
      value: function from(beats, store) {
        if (Array.isArray(beats)) {
          return beats.map(function (beat) {
            return new Beat(beat, store);
          });
        }
        return [new Beat(beats, store)];
      }
    }]);
    return Beat;
  }();
  var Music = /*#__PURE__*/function () {
    function Music(source) {
      _classCallCheck(this, Music);
      this.assign(source);
    }
    _createClass(Music, [{
      key: "init",
      value: function init() {
        if (!this.parses) return null;
        this.store = new Elements({
          source: this.data,
          cast: function cast(elem) {
            return _objectSpread(_objectSpread({}, elem), {}, {
              notes: Note.all(elem.kind, elem.value)
            });
          }
        });
        this.beats = Beat.from(this.data.beats, this.store);
        this.durations = new Durations(this.data);
      }
    }, {
      key: "assign",
      value: function assign(source) {
        this.source = source;
        this.data = compile(source);
        this.init();
        return this;
      }
    }, {
      key: "headers",
      get: function get() {
        return this.data.headers;
      }
    }, {
      key: "metrics",
      get: function get() {
        return this.data.metrics;
      }
    }, {
      key: "units",
      get: function get() {
        return this.data.units;
      }
    }, {
      key: "meter",
      get: function get() {
        return this.headers.meter;
      }
    }, {
      key: "tempo",
      get: function get() {
        return this.headers.tempo;
      }
    }, {
      key: "elements",
      get: function get() {
        return this.store.all;
      }
    }, {
      key: "notes",
      get: function get() {
        return Note.unite(this.beats.flatMap(function (beat) {
          return beat.elements.flatMap(function (_ref99) {
            var notes = _ref99.notes;
            return notes;
          });
        }));
      }
    }, {
      key: "musical",
      get: function get() {
        return this.beats.every(function (beat) {
          return beat.musical;
        });
      }
    }, {
      key: "step",
      get: function get() {
        return this.units.beat.step;
      }
    }, {
      key: "interval",
      get: function get() {
        return this.units.time.step;
      }
    }, {
      key: "parses",
      get: function get() {
        return !this.data.fail;
      }
    }, {
      key: "at",
      value: function at(duration) {
        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        var cursor = this.durations.at(duration, is);
        return {
          beat: this.beats[cursor.beat],
          elems: this.store.resolve(cursor.elems),
          play: this.store.resolve(cursor.play),
          stop: this.store.resolve(cursor.stop)
        };
      }
    }, {
      key: "beat",
      value: function beat(index) {
        var cursor = this.durations.cyclic(index, {
          max: this.beats.length
        });
        return this.beats[cursor];
      }
    }]);
    return Music;
  }();
  _exports.Music = Music;
});
//# sourceMappingURL=bach-js.umd.js.map
