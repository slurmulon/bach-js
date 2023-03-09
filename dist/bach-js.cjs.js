"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");
var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");
var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");
var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");
var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");
var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");
var _toConsumableArray = require("@babel/runtime-corejs3/helpers/toConsumableArray");
var _inherits = require("@babel/runtime-corejs3/helpers/inherits");
var _possibleConstructorReturn = require("@babel/runtime-corejs3/helpers/possibleConstructorReturn");
var _getPrototypeOf = require("@babel/runtime-corejs3/helpers/getPrototypeOf");
var _defineProperty = require("@babel/runtime-corejs3/helpers/defineProperty");
var _classCallCheck = require("@babel/runtime-corejs3/helpers/classCallCheck");
var _createClass = require("@babel/runtime-corejs3/helpers/createClass");
var _slicedToArray = require("@babel/runtime-corejs3/helpers/slicedToArray");
var _typeof = require("@babel/runtime-corejs3/helpers/typeof");
var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");
var _JSON$stringify = require("@babel/runtime-corejs3/core-js-stable/json/stringify");
var _concatInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/concat");
var _mapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/map");
var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");
var _includesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/includes");
var _someInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/some");
var _Number$MAX_SAFE_INTEGER = require("@babel/runtime-corejs3/core-js-stable/number/max-safe-integer");
var _Object$assign = require("@babel/runtime-corejs3/core-js-stable/object/assign");
var _Object$entries = require("@babel/runtime-corejs3/core-js-stable/object/entries");
var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");
var _sortInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/sort");
var _flatMapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/flat-map");
var _everyInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/every");
var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");
var _Object$values = require("@babel/runtime-corejs3/core-js-stable/object/values");
var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");
var _Set = require("@babel/runtime-corejs3/core-js-stable/set");
var _findInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/find");
var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");
var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");
function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context32, _context33; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty(_context32 = ownKeys(Object(source), !0)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context33 = ownKeys(Object(source))).call(_context33, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
_Object$defineProperty(exports, "__esModule", {
  value: !0
});
var t = require("teoria"),
  e = require("bach-cljs"),
  s = require("bach-json-schema"),
  r = require("ajv");
function n(t) {
  return t && "object" == _typeof(t) && "default" in t ? t : {
    "default": t
  };
}
var i = n(e),
  a = n(s);
var o = new (n(r)["default"])({
    strictTuples: !1,
    code: {
      es5: !0
    },
    unicodeRegExp: !1
  }).compile(JSON.parse(_JSON$stringify(a["default"]))),
  u = function u(t) {
    if (!o(t)) {
      var _e = "Invalid Bach.JSON source data",
        _s = function _s(t) {
          return _JSON$stringify(t, null, 2);
        };
      throw console.error(_e, _s(t)), console.error(_s(o.errors)), TypeError("Invalid Bach.JSON source data");
    }
    return t;
  },
  c = function c(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    if ("string" == typeof t) {
      var _e2 = t.replace(/!play/i, "play!");
      return i["default"].compose(_e2);
    }
    if ("object" == _typeof(t)) return e ? u(t) : t;
    throw TypeError("Unsupported Bach.JSON data type (".concat(_typeof(t), "). Must be a bach.json object or raw bach string."));
  },
  h = function h(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    var s = c(t, e);
    return JSON.parse(_JSON$stringify(s));
  };
function l(e) {
  var _context;
  if ("string" == typeof e) {
    var _e$split = e.split(" "),
      _e$split2 = _slicedToArray(_e$split, 2),
      _s2 = _e$split2[0],
      _r = _e$split2[1];
    return t.scale(_s2, _r.toLowerCase());
  }
  if ("object" == _typeof(e)) return e;
  throw TypeError(_concatInstanceProperty(_context = "Unknown scale type (".concat(_typeof(e), "): ")).call(_context, e));
}
function p(e) {
  var _context2;
  if ("string" == typeof e) return t.chord(e);
  if ("object" == _typeof(e)) return e;
  throw TypeError(_concatInstanceProperty(_context2 = "Unknown chord type (".concat(_typeof(e), "): ")).call(_context2, e));
}
function d(t) {
  var _context3;
  return _mapInstanceProperty(_context3 = p(t).notes()).call(_context3, function (t) {
    return y.valueOf(t);
  });
}
function m(t) {
  var _context4;
  return _mapInstanceProperty(_context4 = l(t).notes()).call(_context4, function (t) {
    return y.valueOf(t);
  });
}
function f(t, e) {
  var s = g[t];
  return s ? s(e) : [];
}
var g = {
  note: function note(t) {
    return [t];
  },
  chord: function chord(t) {
    return d(t);
  },
  scale: function scale(t) {
    return m(t);
  },
  penta: function penta(t) {
    return m(t);
  }
};
var y = /*#__PURE__*/function () {
  function y() {
    _classCallCheck(this, y);
  }
  _createClass(y, null, [{
    key: "parse",
    value: function parse(e) {
      var _context5;
      if ("string" == typeof e) return t.note(e);
      if ("object" == _typeof(e) || e instanceof t.Note) return e;
      throw TypeError(_concatInstanceProperty(_context5 = "Unknown note type (".concat(_typeof(e), "): ")).call(_context5, e));
    }
  }, {
    key: "all",
    value: function all(t, e) {
      try {
        return f(t, e);
      } catch (t) {
        return [];
      }
    }
  }, {
    key: "hash",
    value: function hash(t) {
      return y.parse(t).chroma();
    }
  }, {
    key: "pitchOf",
    value: function pitchOf(t) {
      return y.valueOf(t);
    }
  }, {
    key: "valueOf",
    value: function valueOf(t) {
      return y.parse(t).scientific().replace(/[0-9]+$/, "");
    }
  }, {
    key: "valuesOf",
    value: function valuesOf(t) {
      return _mapInstanceProperty(t).call(t, y.valueOf);
    }
  }, {
    key: "generalize",
    value: function generalize(e) {
      return t.note(y.valueOf(e));
    }
  }, {
    key: "unite",
    value: function unite() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _reduceInstanceProperty(t).call(t, function (t, e) {
        var s = y.valueOf(e);
        return _includesInstanceProperty(y).call(y, t, s) ? t : _concatInstanceProperty(t).call(t, s);
      }, []);
    }
  }, {
    key: "includes",
    value: function includes() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 ? arguments[1] : undefined;
      return _someInstanceProperty(t).call(t, function (t) {
        return y.equals(t, e);
      });
    }
  }, {
    key: "equals",
    value: function equals(t, e) {
      return y.hash(t) == y.hash(e);
    }
  }]);
  return y;
}();
function b(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(s, Math.max(e, t));
}
var x = /*#__PURE__*/function () {
  function x() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$unit = _ref.unit,
      t = _ref$unit === void 0 ? 1 : _ref$unit,
      _ref$is = _ref.is,
      e = _ref$is === void 0 ? 1 : _ref$is,
      _ref$as = _ref.as,
      s = _ref$as === void 0 ? 1 : _ref$as,
      _ref$min = _ref.min,
      r = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      n = _ref$max === void 0 ? 1 : _ref$max,
      _ref$grid = _ref.grid,
      i = _ref$grid === void 0 ? 1 : _ref$grid,
      _ref$origin = _ref.origin,
      a = _ref$origin === void 0 ? 0 : _ref$origin;
    _classCallCheck(this, x);
    this.data = {
      unit: t,
      is: e,
      as: s,
      min: r,
      max: n,
      grid: i,
      origin: a
    };
  }
  _createClass(x, [{
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
      return this.data.max || _Number$MAX_SAFE_INTEGER;
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
    value: function use(t) {
      return _Object$assign({}, this.data, t);
    }
  }, {
    key: "assign",
    value: function assign(t) {
      return this.data = this.use(t), this;
    }
  }]);
  return x;
}();
function v(t, e) {
  return 0 === e ? t : v(e, t % e);
}
function O(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(s, Math.max(e, t));
}
var w = /*#__PURE__*/function () {
  function w() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$map = _mapInstanceProperty(_ref2),
      t = _ref2$map === void 0 ? {} : _ref2$map,
      _ref2$lens = _ref2.lens,
      e = _ref2$lens === void 0 ? {} : _ref2$lens;
    _classCallCheck(this, w);
    this.map = t, this.lens = new x(e);
  }
  _createClass(w, [{
    key: "normalize",
    value: function normalize(t) {
      if ("number" == typeof t) return t;
      if ("string" == typeof t) {
        var _e3 = _mapInstanceProperty(this)[t] || 1;
        return "function" == typeof _e3 ? _e3(t, this) : Number(_e3);
      }
      return 1;
    }
  }, {
    key: "scope",
    value: function scope() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
      var _this$lens$use = this.lens.use(e),
        s = _this$lens$use.is,
        r = _this$lens$use.as,
        n = _this$lens$use.min,
        i = _this$lens$use.max,
        a = _this$lens$use.origin;
      return {
        value: t,
        index: this.cast(t - a, {
          is: s,
          as: r
        }),
        head: this.cast(n || 0, {
          is: s,
          as: r
        }),
        tail: this.cast(i || t, {
          is: s,
          as: r
        })
      };
    }
  }, {
    key: "cast",
    value: function cast() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$is = _ref3.is,
        e = _ref3$is === void 0 ? this.lens.unit : _ref3$is,
        _ref3$as = _ref3.as,
        s = _ref3$as === void 0 ? this.lens.unit : _ref3$as;
      return this.normalize(t) / (this.normalize(s) / this.normalize(e));
    }
  }, {
    key: "snap",
    value: function snap(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
      var _this$scope = this.scope(t, e),
        s = _this$scope.index,
        r = this.normalize(e.as || e.unit);
      return ("function" == typeof e.calc ? e.calc : Math.floor)(s) * r;
    }
  }, {
    key: "clamp",
    value: function clamp(t, e) {
      var _this$scope2 = this.scope(t, e),
        s = _this$scope2.index,
        r = _this$scope2.head,
        n = _this$scope2.tail;
      return O(s, r, n);
    }
  }, {
    key: "cyclic",
    value: function cyclic(t, e) {
      var _this$scope3 = this.scope(t, e),
        s = _this$scope3.index,
        r = _this$scope3.head,
        n = _this$scope3.tail;
      return function (t, e, s) {
        return (t >= e ? t : t + s) % s;
      }(s, r, n);
    }
  }, {
    key: "lerp",
    value: function lerp(t, e) {
      var _this$scope4 = this.scope(0, e),
        s = _this$scope4.head,
        r = _this$scope4.tail;
      return function (t, e, s) {
        return e * (1 - t) + s * t;
      }(t, s, r);
    }
  }, {
    key: "invlerp",
    value: function invlerp(t, e) {
      var _this$scope5 = this.scope(t, e),
        s = _this$scope5.index,
        r = _this$scope5.head,
        n = _this$scope5.tail;
      return function (t, e, s) {
        return O((t - e) / (s - e));
      }(s, r, n);
    }
  }, {
    key: "delta",
    value: function delta(t, e) {
      var _this$scope6 = this.scope(t, e),
        s = _this$scope6.index,
        r = _this$scope6.head;
      return s - r;
    }
  }, {
    key: "range",
    value: function range(t, e) {
      var _this$scope7 = this.scope(t, e),
        s = _this$scope7.head,
        r = _this$scope7.tail;
      return r - s;
    }
  }, {
    key: "progress",
    value: function progress(t, e) {
      return this.delta(t, e) / this.range(t, e);
    }
  }, {
    key: "fold",
    value: function fold(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.lens;
      var s = e.grid || 1,
        r = v(t, s),
        n = this.clamp(t, e),
        i = this.snap(n, {
          as: r
        }),
        a = Math.max(1, Math.min(t / r, s)),
        o = t >= s ? s : r;
      return Math.max(o, this.snap(i, {
        as: a
      }));
    }
  }, {
    key: "rebase",
    value: function rebase() {
      var _context6,
        _this = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lens.unit;
      if (t === this.lens.unit) return this;
      var e = _reduceInstanceProperty(_context6 = _Object$entries(_mapInstanceProperty(this))).call(_context6, function (e, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          s = _ref5[0],
          r = _ref5[1];
        return _Object$assign(e, _defineProperty({}, s, _this.cast(r, {
          is: _this.lens.is,
          as: t
        })), _defineProperty({}, t, 1));
      });
      return this.map = e, this.lens.unit = t, this;
    }
  }, {
    key: "clone",
    value: function clone(t) {
      var e = _Object$assign({}, _mapInstanceProperty(this), _mapInstanceProperty(t)),
        s = _Object$assign({}, this.lens, t.lens);
      return new w({
        map: e,
        lens: s
      });
    }
  }], [{
    key: "use",
    value: function use(t) {
      return new w(t);
    }
  }]);
  return w;
}();
var M = /*#__PURE__*/function (_w) {
  _inherits(M, _w);
  var _super = _createSuper(M);
  function M(t, e) {
    var _this2;
    _classCallCheck(this, M);
    _this2 = _super.call(this, {
      map: null,
      lens: e
    }), _this2.source = t, _this2.data = h(t), _this2.init();
    return _this2;
  }
  _createClass(M, [{
    key: "init",
    value: function init() {
      this.map = _mapInstanceProperty(M).call(M, this.data), this.lens.assign({
        unit: "step",
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
    value: function at(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "step";
      var s = Math.floor(this.cast(t, {
          is: e,
          as: "step"
        })),
        r = this.cyclic(s),
        n = this.steps[r],
        _ref6 = n || [],
        _ref7 = _slicedToArray(_ref6, 3),
        i = _ref7[0],
        a = _ref7[1],
        o = _ref7[2];
      return {
        beat: i[0],
        elems: _sliceInstanceProperty(i).call(i, 1),
        play: a,
        stop: o,
        index: r
      };
    }
  }, {
    key: "metronize",
    value: function metronize(t) {
      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$is = _ref8.is,
        e = _ref8$is === void 0 ? "ms" : _ref8$is,
        _ref8$as = _ref8.as,
        s = _ref8$as === void 0 ? "pulse" : _ref8$as;
      var r = this.cast(t, {
          is: e,
          as: s
        }),
        n = this.cast(this.bar.step, {
          as: s
        });
      return Math.floor(r % n);
    }
  }, {
    key: "rhythmic",
    value: function rhythmic(t) {
      var _context7,
        _this3 = this;
      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$is = _ref9.is,
        e = _ref9$is === void 0 ? "ms" : _ref9$is,
        _ref9$units = _ref9.units,
        s = _ref9$units === void 0 ? ["8n", "4n"] : _ref9$units,
        _ref9$calc = _ref9.calc,
        r = _ref9$calc === void 0 ? "floor" : _ref9$calc,
        _ref9$size = _ref9.size,
        n = _ref9$size === void 0 ? "min" : _ref9$size;
      var i = _sortInstanceProperty(_context7 = _mapInstanceProperty(s).call(s, function (s) {
        var n = _this3.cast(t, {
            is: e,
            as: s
          }),
          i = Math[r](n);
        return _this3.cast(i, {
          is: s,
          as: e
        });
      })).call(_context7, function (e, s) {
        return Math.abs(t - e) - Math.abs(t - s);
      });
      return Math[n].apply(Math, _toConsumableArray(i));
    }
  }], [{
    key: "map",
    value: function map(t) {
      var e = c(t, !1),
        _e$units = e.units,
        s = _e$units.beat,
        r = _e$units.step,
        n = _e$units.pulse,
        i = _e$units.time,
        a = _e$units.bar;
      return {
        step: 1,
        pulse: 1 / (s.step / s.pulse),
        bar: a.step,
        ms: 1 / i.step,
        second: 1 / i.step * 1e3,
        s: r,
        p: n,
        m: a.step,
        "2n": a.step / 2,
        "4n": a.step / 4,
        "8n": a.step / 8,
        "16n": a.step / 16,
        "32n": a.step / 32,
        "64n": a.step / 64,
        "4up": a.step - a.step / 4,
        "8up": a.step - a.step / 8,
        "16up": a.step - a.step / 16,
        "32up": a.step - a.step / 32,
        "64up": a.step - a.step / 64
      };
    }
  }]);
  return M;
}(w);
var k = /*#__PURE__*/function () {
  function k(t) {
    _classCallCheck(this, k);
    this.data = t;
  }
  _createClass(k, [{
    key: "id",
    get: function get() {
      var _context8;
      return _concatInstanceProperty(_context8 = "".concat(this.data.kind, ".")).call(_context8, this.data.id);
    }
  }, {
    key: "uid",
    get: function get() {
      return k.uid(this.id);
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
      return y.all(this.kind, this.value);
    }
  }, {
    key: "musical",
    get: function get() {
      return _includesInstanceProperty(E).call(E, this.kind);
    }
  }], [{
    key: "uid",
    value: function uid(t) {
      return t.split(".").pop();
    }
  }]);
  return k;
}();
var j = /*#__PURE__*/function () {
  function j() {
    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref10.source,
      e = _ref10.store,
      s = _ref10.cast;
    _classCallCheck(this, j);
    this.source = c(t), this.cast = s || function (t) {
      return t;
    }, this.data = e || j.cast(this.source.elements, s);
  }
  _createClass(j, [{
    key: "all",
    get: function get() {
      var _context9,
        _this4 = this;
      return _flatMapInstanceProperty(_context9 = this.kinds).call(_context9, function (t) {
        return _everyInstanceProperty(_this4).call(_this4, t);
      });
    }
  }, {
    key: "kinds",
    get: function get() {
      return _Object$keys(this.data);
    }
  }, {
    key: "values",
    get: function get() {
      var _context10;
      return _mapInstanceProperty(_context10 = this.all).call(_context10, function (t) {
        return t.value;
      });
    }
  }, {
    key: "ids",
    get: function get() {
      var _context11;
      return _mapInstanceProperty(_context11 = this.all).call(_context11, function (t) {
        return t.id;
      });
    }
  }, {
    key: "get",
    value: function get(t) {
      var e = "string" == typeof t ? t.split(".") : [];
      if (2 === e.length) {
        var _e4 = _slicedToArray(e, 2),
          _t = _e4[0],
          _s3 = _e4[1],
          _r2 = this.data[_t][_s3];
        return _r2 ? _objectSpread(_objectSpread({}, _r2), {}, {
          id: _s3,
          kind: _t
        }) : null;
      }
      throw TypeError('Element id must be a string in the format of "kind.hash"');
    }
  }, {
    key: "one",
    value: function one(t) {
      var _context12;
      return _everyInstanceProperty(_context12 = this).call(_context12, t)[0];
    }
  }, {
    key: "every",
    value: function every(t) {
      var _context13;
      return _mapInstanceProperty(_context13 = _Object$values(this.data[t])).call(_context13, function (t) {
        return new k(t);
      });
    }
  }, {
    key: "resolve",
    value: function resolve(t) {
      var _this5 = this;
      if ("object" == _typeof(t)) return t;
      if ("string" == typeof t) return this.get(t);
      if (_Array$isArray(t)) return _mapInstanceProperty(t).call(t, function (t) {
        return _this5.get(t);
      });
      if (null == t) return null;
      throw TypeError("Failed to resolve element due to unsupported data type");
    }
  }, {
    key: "register",
    value: function register(_ref11) {
      var _context14;
      var t = _ref11.kind,
        s = _ref11.value,
        r = _ref11.props;
      if (!t || "string" != typeof t) throw TypeError("kind must be a non-empty string");
      if (null == s) throw TypeError("value must be defined and non-null");
      var n = e.elementize(t, _concatInstanceProperty(_context14 = [s]).call(_context14, _toConsumableArray(r))),
        i = k.uid(n.id),
        a = this.cast(_objectSpread(_objectSpread({}, n), {}, {
          id: i,
          kind: t
        }));
      return this.data[t] = this.data[t] || {}, this.data[t][i] = a, this.source.elements = this.data, new k(a);
    }
  }], [{
    key: "cast",
    value: function cast(t) {
      var _context15;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (t) {
        return t;
      };
      return t ? _reduceInstanceProperty(_context15 = _Object$entries(t)).call(_context15, function (t, _ref12) {
        var _context16;
        var _ref13 = _slicedToArray(_ref12, 2),
          s = _ref13[0],
          r = _ref13[1];
        var n = _reduceInstanceProperty(_context16 = _Object$entries(r)).call(_context16, function (t, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
            r = _ref15[0],
            n = _ref15[1];
          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, r, e(_objectSpread({
            id: r,
            kind: s
          }, n))));
        }, {});
        return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, s, n));
      }, {}) : null;
    }
  }]);
  return j;
}();
var E = ["note", "chord", "scale", " penta"];
var S = /*#__PURE__*/function () {
  function S(t, e) {
    _classCallCheck(this, S);
    this.data = t, this.store = e;
  }
  _createClass(S, [{
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
      var _context17,
        _this6 = this;
      return _mapInstanceProperty(_context17 = this.data.items).call(_context17, function (t) {
        var _context18;
        return _objectSpread(_objectSpread({}, t), {}, {
          elements: _mapInstanceProperty(_context18 = t.elements).call(_context18, function (t) {
            return _this6.store.resolve(t);
          })
        });
      });
    }
  }, {
    key: "elements",
    get: function get() {
      var _context19,
        _this7 = this;
      return _flatMapInstanceProperty(_context19 = this.data.items).call(_context19, function (_ref16) {
        var t = _ref16.elements;
        return _mapInstanceProperty(t).call(t, function (t) {
          return _this7.store.resolve(t);
        });
      });
    }
  }, {
    key: "kinds",
    get: function get() {
      return this.all(function (_ref17) {
        var t = _ref17.kind;
        return t;
      });
    }
  }, {
    key: "values",
    get: function get() {
      return this.all(function (_ref18) {
        var t = _ref18.value;
        return t;
      });
    }
  }, {
    key: "notes",
    get: function get() {
      return this.notesOf(this.elements);
    }
  }, {
    key: "parts",
    get: function get() {
      var _context20;
      return _reduceInstanceProperty(_context20 = this.elements).call(_context20, function (t, e) {
        return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e.kind, e));
      }, {});
    }
  }, {
    key: "musical",
    get: function get() {
      var _context21;
      return _everyInstanceProperty(_context21 = this.elements).call(_context21, function (t) {
        return t.musical;
      });
    }
  }, {
    key: "all",
    value: function all() {
      var _context22;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (t) {
        return t;
      };
      return _toConsumableArray(new _Set(_mapInstanceProperty(_context22 = this.elements).call(_context22, t)));
    }
  }, {
    key: "find",
    value: function find(t) {
      var _context23;
      return _findInstanceProperty(_context23 = this.elements).call(_context23, function (e) {
        return t === e.kind;
      });
    }
  }, {
    key: "filter",
    value: function filter(t) {
      var _context24;
      return _filterInstanceProperty(_context24 = this.elements).call(_context24, function (e) {
        return t === e.kind;
      });
    }
  }, {
    key: "last",
    value: function last(t) {
      var _context25, _context26;
      return _reverseInstanceProperty(_context25 = _filterInstanceProperty(_context26 = this).call(_context26, t)).call(_context25)[0];
    }
  }, {
    key: "either",
    value: function either(t) {
      var _this8 = this;
      return _reduceInstanceProperty(t).call(t, function (t, e) {
        return t.length ? t : _filterInstanceProperty(_this8).call(_this8, e);
      }, []);
    }
  }, {
    key: "notesOf",
    value: function notesOf(t) {
      return y.unite(_flatMapInstanceProperty(t).call(t, function (_ref19) {
        var t = _ref19.notes;
        return t;
      }));
    }
  }], [{
    key: "from",
    value: function from(t, e) {
      return _Array$isArray(t) ? _mapInstanceProperty(t).call(t, function (t) {
        return new S(t, e);
      }) : [new S(t, e)];
    }
  }]);
  return S;
}();
exports.Durations = M, exports.Element = k, exports.Elements = j, exports.MUSICAL_ELEMENTS = E, exports.Music = /*#__PURE__*/function () {
  function _class(t) {
    _classCallCheck(this, _class);
    this.assign(t);
  }
  _createClass(_class, [{
    key: "init",
    value: function init() {
      if (!this.parses) return null;
      this.store = new j({
        source: this.data,
        cast: function cast(t) {
          return _objectSpread(_objectSpread({}, t), {}, {
            notes: y.all(t.kind, t.value)
          });
        }
      }), this.beats = S.from(this.data.beats, this.store), this.durations = new M(this.data);
    }
  }, {
    key: "assign",
    value: function assign(t) {
      return this.source = t, this.data = h(t), this.init(), this;
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
      var _context27;
      return y.unite(_flatMapInstanceProperty(_context27 = this.beats).call(_context27, function (t) {
        var _context28;
        return _flatMapInstanceProperty(_context28 = t.elements).call(_context28, function (_ref20) {
          var t = _ref20.notes;
          return t;
        });
      }));
    }
  }, {
    key: "musical",
    get: function get() {
      var _context29;
      return _everyInstanceProperty(_context29 = this.beats).call(_context29, function (t) {
        return t.musical;
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
    value: function at(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "step";
      var s = this.durations.at(t, e);
      return {
        beat: this.beats[s.beat],
        elems: this.store.resolve(s.elems),
        play: this.store.resolve(s.play),
        stop: this.store.resolve(s.stop)
      };
    }
  }, {
    key: "beat",
    value: function beat(t) {
      var e = this.durations.cyclic(t, {
        max: this.beats.length
      });
      return this.beats[e];
    }
  }]);
  return _class;
}(), exports.Note = y, exports.chordify = p, exports.clamp = b, exports.compile = h, exports.compose = c, exports.gcd = function t(e, s) {
  return 0 == s ? e : t(s, e % s);
}, exports.invlerp = function (t, e, s) {
  return b((t - e) / (s - e));
}, exports.lerp = function (t, e, s) {
  return e * (1 - t) + s * t;
}, exports.notesIn = f, exports.notesInChord = d, exports.notesInScale = m, exports.notesIntersect = function (t, e) {
  return _filterInstanceProperty(t).call(t, function (t) {
    return _includesInstanceProperty(e).call(e, t);
  });
}, exports.notesOf = g, exports.scaleToString = function (t) {
  var _context30, _context31;
  return _concatInstanceProperty(_context30 = "".concat(_sliceInstanceProperty(_context31 = t.tonic.toString()).call(_context31, 0, 2), " ")).call(_context30, t.name);
}, exports.scaleify = l, exports.steps = function (t, e) {
  return (t %= 1) < 0 && (t += 1), e[Math.floor(t * e.length)];
}, exports.valid = u, exports.validate = o;
//# sourceMappingURL=bach-js.cjs.js.map
