import _Reflect$construct from "@babel/runtime-corejs3/core-js-stable/reflect/construct";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _toConsumableArray from "@babel/runtime-corejs3/helpers/esm/toConsumableArray";
import _inherits from "@babel/runtime-corejs3/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime-corejs3/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime-corejs3/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/esm/createClass";
import _slicedToArray from "@babel/runtime-corejs3/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime-corejs3/helpers/esm/typeof";
function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context32, _context33; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty(_context32 = ownKeys(Object(source), !0)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context33 = ownKeys(Object(source))).call(_context33, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/some";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Number$MAX_SAFE_INTEGER from "@babel/runtime-corejs3/core-js-stable/number/max-safe-integer";
import _Object$assign from "@babel/runtime-corejs3/core-js-stable/object/assign";
import _Object$entries from "@babel/runtime-corejs3/core-js-stable/object/entries";
import _sortInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/sort";
import _flatMapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/flat-map";
import _everyInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/every";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _Object$values from "@babel/runtime-corejs3/core-js-stable/object/values";
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _Set from "@babel/runtime-corejs3/core-js-stable/set";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import _reverseInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reverse";
import { scale as t, chord as e, note as s, Note as r } from "teoria";
import { compose as i, elementize as n } from "bach-cljs";
import a from "bach-json-schema";
import u from "ajv";
var o = new u({
  strictTuples: !1,
  code: {
    es5: !0
  },
  unicodeRegExp: !1
});
a.$id = "http://codebach.tech/bach.json";
var h = o.compile(a),
  c = function c(t) {
    if (!h(t)) throw TypeError("Invalid Bach.JSON source data");
    return t;
  },
  l = function l(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    if ("string" == typeof t) {
      var _e = t.replace(/!play/i, "play!");
      return i(_e);
    }
    if ("object" == _typeof(t)) return e ? c(t) : t;
    throw TypeError("Unsupported Bach.JSON data type (".concat(_typeof(t), "). Must be a bach.json object or raw bach string."));
  },
  p = function p(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    var s = l(t, e);
    return JSON.parse(_JSON$stringify(s));
  };
function d(e) {
  var _context;
  if ("string" == typeof e) {
    var _e$split = e.split(" "),
      _e$split2 = _slicedToArray(_e$split, 2),
      _s = _e$split2[0],
      _r = _e$split2[1];
    return t(_s, _r.toLowerCase());
  }
  if ("object" == _typeof(e)) return e;
  throw TypeError(_concatInstanceProperty(_context = "Unknown scale type (".concat(_typeof(e), "): ")).call(_context, e));
}
function m(t) {
  var _context2;
  if ("string" == typeof t) return e(t);
  if ("object" == _typeof(t)) return t;
  throw TypeError(_concatInstanceProperty(_context2 = "Unknown chord type (".concat(_typeof(t), "): ")).call(_context2, t));
}
function f(t) {
  var _context3, _context4;
  return _concatInstanceProperty(_context3 = "".concat(_sliceInstanceProperty(_context4 = t.tonic.toString()).call(_context4, 0, 2), " ")).call(_context3, t.name);
}
var g = /*#__PURE__*/function () {
  function g() {
    _classCallCheck(this, g);
  }
  _createClass(g, null, [{
    key: "parse",
    value: function parse(t) {
      var _context5;
      if ("string" == typeof t) return s(t);
      if ("object" == _typeof(t) || t instanceof r) return t;
      throw TypeError(_concatInstanceProperty(_context5 = "Unknown note type (".concat(_typeof(t), "): ")).call(_context5, t));
    }
  }, {
    key: "all",
    value: function all(t, e) {
      try {
        return v(t, e);
      } catch (t) {
        return [];
      }
    }
  }, {
    key: "hash",
    value: function hash(t) {
      return g.parse(t).chroma();
    }
  }, {
    key: "pitchOf",
    value: function pitchOf(t) {
      return g.valueOf(t);
    }
  }, {
    key: "valueOf",
    value: function valueOf(t) {
      return g.parse(t).scientific().replace(/[0-9]+$/, "");
    }
  }, {
    key: "valuesOf",
    value: function valuesOf(t) {
      return _mapInstanceProperty(t).call(t, g.valueOf);
    }
  }, {
    key: "generalize",
    value: function generalize(t) {
      return s(g.valueOf(t));
    }
  }, {
    key: "unite",
    value: function unite() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _reduceInstanceProperty(t).call(t, function (t, e) {
        var s = g.valueOf(e);
        return _includesInstanceProperty(g).call(g, t, s) ? t : _concatInstanceProperty(t).call(t, s);
      }, []);
    }
  }, {
    key: "includes",
    value: function includes() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 ? arguments[1] : undefined;
      return _someInstanceProperty(t).call(t, function (t) {
        return g.equals(t, e);
      });
    }
  }, {
    key: "equals",
    value: function equals(t, e) {
      return g.hash(t) == g.hash(e);
    }
  }]);
  return g;
}();
function y(t) {
  var _context6;
  return _mapInstanceProperty(_context6 = m(t).notes()).call(_context6, function (t) {
    return g.valueOf(t);
  });
}
function b(t) {
  var _context7;
  return _mapInstanceProperty(_context7 = d(t).notes()).call(_context7, function (t) {
    return g.valueOf(t);
  });
}
function v(t, e) {
  var s = w[t];
  return s ? s(e) : [];
}
var w = {
  note: function note(t) {
    return [t];
  },
  chord: function chord(t) {
    return y(t);
  },
  scale: function scale(t) {
    return b(t);
  },
  penta: function penta(t) {
    return b(t);
  }
};
function x(t, e) {
  return _filterInstanceProperty(t).call(t, function (t) {
    return _includesInstanceProperty(e).call(e, t);
  });
}
var O = /*#__PURE__*/function () {
  function O() {
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
      i = _ref$max === void 0 ? 1 : _ref$max,
      _ref$grid = _ref.grid,
      n = _ref$grid === void 0 ? 1 : _ref$grid,
      _ref$origin = _ref.origin,
      a = _ref$origin === void 0 ? 0 : _ref$origin;
    _classCallCheck(this, O);
    this.data = {
      unit: t,
      is: e,
      as: s,
      min: r,
      max: i,
      grid: n,
      origin: a
    };
  }
  _createClass(O, [{
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
    value: function use() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      return _Object$assign({}, this.data, t);
    }
  }, {
    key: "assign",
    value: function assign(t) {
      return this.data = this.use(t), this;
    }
  }]);
  return O;
}();
function k(t, e) {
  return 0 === e ? t : k(e, t % e);
}
function M(t, e, s) {
  return Math.min(s, Math.max(e, t));
}
var j = /*#__PURE__*/function () {
  function j() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$map = _mapInstanceProperty(_ref2),
      t = _ref2$map === void 0 ? {} : _ref2$map,
      _ref2$lens = _ref2.lens,
      e = _ref2$lens === void 0 ? {} : _ref2$lens;
    _classCallCheck(this, j);
    this.map = t, this.lens = new O(e);
  }
  _createClass(j, [{
    key: "normalize",
    value: function normalize(t) {
      if ("number" == typeof t) return t;
      if ("string" == typeof t) {
        var _e2 = _mapInstanceProperty(this)[t] || 1;
        return "function" == typeof _e2 ? _e2(t, this) : Number(_e2);
      }
      return 1;
    }
  }, {
    key: "scope",
    value: function scope() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _this$lens$use = this.lens.use(e),
        s = _this$lens$use.is,
        r = _this$lens$use.as,
        i = _this$lens$use.min,
        n = _this$lens$use.max,
        a = _this$lens$use.origin;
      return {
        value: t,
        index: this.cast(t - a, {
          is: s,
          as: r
        }),
        head: this.cast(i || 0, {
          is: s,
          as: r
        }),
        tail: this.cast(n || t, {
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
        i = _this$scope2.tail;
      return M(s, r, i);
    }
  }, {
    key: "cyclic",
    value: function cyclic(t, e) {
      var _this$scope3 = this.scope(t, e),
        s = _this$scope3.index,
        r = _this$scope3.head,
        i = _this$scope3.tail;
      return function (t, e, s) {
        return (t >= e ? t : t + s) % s;
      }(s, r, i);
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
        i = _this$scope5.tail;
      return function (t, e, s) {
        return M((t - e) / (s - e));
      }(s, r, i);
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
        r = k(t, s),
        i = this.clamp(t, e),
        n = this.snap(i, {
          as: r
        }),
        a = Math.max(1, Math.min(t / r, s)),
        u = t >= s ? s : r;
      return Math.max(u, this.snap(n, {
        as: a
      }));
    }
  }, {
    key: "rebase",
    value: function rebase() {
      var _context8,
        _this = this;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lens.unit;
      if (t === this.lens.unit) return this;
      var e = _reduceInstanceProperty(_context8 = _Object$entries(_mapInstanceProperty(this))).call(_context8, function (e, _ref4) {
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
      return new j({
        map: e,
        lens: s
      });
    }
  }], [{
    key: "use",
    value: function use(t) {
      return new j(t);
    }
  }]);
  return j;
}();
var E = /*#__PURE__*/function (_j) {
  _inherits(E, _j);
  var _super = _createSuper(E);
  function E(t, e) {
    var _this2;
    _classCallCheck(this, E);
    _this2 = _super.call(this, {
      map: null,
      lens: e
    }), _this2.source = t, _this2.data = p(t), _this2.init();
    return _this2;
  }
  _createClass(E, [{
    key: "init",
    value: function init() {
      this.map = _mapInstanceProperty(E).call(E, this.data), this.lens.assign({
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
        i = this.steps[r],
        _ref6 = i || [],
        _ref7 = _slicedToArray(_ref6, 3),
        n = _ref7[0],
        a = _ref7[1],
        u = _ref7[2];
      return {
        beat: n[0],
        elems: _sliceInstanceProperty(n).call(n, 1),
        play: a,
        stop: u,
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
        i = this.cast(this.bar.step, {
          as: s
        });
      return Math.floor(r % i);
    }
  }, {
    key: "rhythmic",
    value: function rhythmic(t) {
      var _context9,
        _this3 = this;
      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref9$is = _ref9.is,
        e = _ref9$is === void 0 ? "ms" : _ref9$is,
        _ref9$units = _ref9.units,
        s = _ref9$units === void 0 ? ["8n", "4n"] : _ref9$units,
        _ref9$calc = _ref9.calc,
        r = _ref9$calc === void 0 ? "floor" : _ref9$calc,
        _ref9$size = _ref9.size,
        i = _ref9$size === void 0 ? "min" : _ref9$size;
      var n = _sortInstanceProperty(_context9 = _mapInstanceProperty(s).call(s, function (s) {
        var i = _this3.cast(t, {
            is: e,
            as: s
          }),
          n = Math[r](i);
        return _this3.cast(n, {
          is: s,
          as: e
        });
      })).call(_context9, function (e, s) {
        return Math.abs(t - e) - Math.abs(t - s);
      });
      return Math[i].apply(Math, _toConsumableArray(n));
    }
  }], [{
    key: "map",
    value: function map(t) {
      var e = l(t, !1),
        _e$units = e.units,
        s = _e$units.beat,
        r = _e$units.step,
        i = _e$units.pulse,
        n = _e$units.time,
        a = _e$units.bar;
      return {
        step: 1,
        pulse: 1 / (s.step / s.pulse),
        bar: a.step,
        ms: 1 / n.step,
        second: 1 / n.step * 1e3,
        s: r,
        p: i,
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
  return E;
}(j);
var $ = /*#__PURE__*/function () {
  function $(t) {
    _classCallCheck(this, $);
    this.data = t;
  }
  _createClass($, [{
    key: "id",
    get: function get() {
      var _context10;
      return _concatInstanceProperty(_context10 = "".concat(this.data.kind, ".")).call(_context10, this.data.id);
    }
  }, {
    key: "uid",
    get: function get() {
      return $.uid(this.id);
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
      return g.all(this.kind, this.value);
    }
  }, {
    key: "musical",
    get: function get() {
      return _includesInstanceProperty(z).call(z, this.kind);
    }
  }], [{
    key: "uid",
    value: function uid(t) {
      return t.split(".").pop();
    }
  }]);
  return $;
}();
var T = /*#__PURE__*/function () {
  function T() {
    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref10.source,
      e = _ref10.store,
      s = _ref10.cast;
    _classCallCheck(this, T);
    this.source = l(t, !1), this.cast = s || function (t) {
      return t;
    }, this.data = e || T.cast(this.source.elements, this.cast);
  }
  _createClass(T, [{
    key: "all",
    get: function get() {
      var _context11,
        _this4 = this;
      return _flatMapInstanceProperty(_context11 = this.kinds).call(_context11, function (t) {
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
      var _context12;
      return _mapInstanceProperty(_context12 = this.all).call(_context12, function (t) {
        return t.value;
      });
    }
  }, {
    key: "ids",
    get: function get() {
      var _context13;
      return _mapInstanceProperty(_context13 = this.all).call(_context13, function (t) {
        return t.id;
      });
    }
  }, {
    key: "get",
    value: function get(t) {
      var e = "string" == typeof t ? t.split(".") : [];
      if (2 === e.length) {
        var _e3 = _slicedToArray(e, 2),
          _t = _e3[0],
          _s2 = _e3[1],
          _r2 = this.data[_t][_s2];
        return _r2 ? _objectSpread(_objectSpread({}, _r2), {}, {
          id: _s2,
          kind: _t
        }) : null;
      }
      throw TypeError('Element id must be a string in the format of "kind.hash"');
    }
  }, {
    key: "one",
    value: function one(t) {
      var _context14;
      return _everyInstanceProperty(_context14 = this).call(_context14, t)[0];
    }
  }, {
    key: "every",
    value: function every(t) {
      var _context15;
      return _mapInstanceProperty(_context15 = _Object$values(this.data[t])).call(_context15, function (t) {
        return new $(t);
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
      var _context16;
      var t = _ref11.kind,
        e = _ref11.value,
        s = _ref11.props;
      if (!t || "string" != typeof t) throw TypeError("kind must be a non-empty string");
      if (null == e) throw TypeError("value must be defined and non-null");
      var r = n(t, _concatInstanceProperty(_context16 = [e]).call(_context16, _toConsumableArray(s))),
        i = $.uid(r.id),
        a = this.cast(_objectSpread(_objectSpread({}, r), {}, {
          id: i,
          kind: t
        }));
      return this.data[t] = this.data[t] || {}, this.data[t][i] = a, this.source.elements = this.data, new $(a);
    }
  }], [{
    key: "cast",
    value: function cast(t) {
      var _context17;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (t) {
        return t;
      };
      return t ? _reduceInstanceProperty(_context17 = _Object$entries(t)).call(_context17, function (t, _ref12) {
        var _context18;
        var _ref13 = _slicedToArray(_ref12, 2),
          s = _ref13[0],
          r = _ref13[1];
        var i = _reduceInstanceProperty(_context18 = _Object$entries(r)).call(_context18, function (t, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
            r = _ref15[0],
            i = _ref15[1];
          return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, r, e(_objectSpread({
            id: r,
            kind: s
          }, i))));
        }, {});
        return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, s, i));
      }, {}) : null;
    }
  }]);
  return T;
}();
var z = ["note", "chord", "scale", " penta"];
var N = /*#__PURE__*/function () {
  function N(t, e) {
    _classCallCheck(this, N);
    this.data = t, this.store = e;
  }
  _createClass(N, [{
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
      var _context19,
        _this6 = this;
      return _mapInstanceProperty(_context19 = this.data.items).call(_context19, function (t) {
        var _context20;
        return _objectSpread(_objectSpread({}, t), {}, {
          elements: _mapInstanceProperty(_context20 = t.elements).call(_context20, function (t) {
            return _this6.store.resolve(t);
          })
        });
      });
    }
  }, {
    key: "elements",
    get: function get() {
      var _context21,
        _this7 = this;
      return _flatMapInstanceProperty(_context21 = this.data.items).call(_context21, function (_ref16) {
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
      var _context22;
      return _reduceInstanceProperty(_context22 = this.elements).call(_context22, function (t, e) {
        return _objectSpread(_objectSpread({}, t), {}, _defineProperty({}, e.kind, e));
      }, {});
    }
  }, {
    key: "musical",
    get: function get() {
      var _context23;
      return _everyInstanceProperty(_context23 = this.elements).call(_context23, function (t) {
        return t.musical;
      });
    }
  }, {
    key: "all",
    value: function all() {
      var _context24;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (t) {
        return t;
      };
      return _toConsumableArray(new _Set(_mapInstanceProperty(_context24 = this.elements).call(_context24, t)));
    }
  }, {
    key: "find",
    value: function find(t) {
      var _context25;
      return _findInstanceProperty(_context25 = this.elements).call(_context25, function (e) {
        return t === e.kind;
      });
    }
  }, {
    key: "filter",
    value: function filter(t) {
      var _context26;
      return _filterInstanceProperty(_context26 = this.elements).call(_context26, function (e) {
        return t === e.kind;
      });
    }
  }, {
    key: "last",
    value: function last(t) {
      var _context27, _context28;
      return _reverseInstanceProperty(_context27 = _filterInstanceProperty(_context28 = this).call(_context28, t)).call(_context27)[0];
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
      return g.unite(_flatMapInstanceProperty(t).call(t, function (_ref19) {
        var t = _ref19.notes;
        return t;
      }));
    }
  }], [{
    key: "from",
    value: function from(t, e) {
      return _Array$isArray(t) ? _mapInstanceProperty(t).call(t, function (t) {
        return new N(t, e);
      }) : [new N(t, e)];
    }
  }]);
  return N;
}();
var S = /*#__PURE__*/function () {
  function S(t) {
    _classCallCheck(this, S);
    this.assign(t);
  }
  _createClass(S, [{
    key: "init",
    value: function init() {
      if (!this.parses) return null;
      this.store = new T({
        source: this.data,
        cast: function cast(t) {
          return _objectSpread(_objectSpread({}, t), {}, {
            notes: g.all(t.kind, t.value)
          });
        }
      }), this.beats = N.from(this.data.beats, this.store), this.durations = new E(this.data);
    }
  }, {
    key: "assign",
    value: function assign(t) {
      return this.source = t, this.data = p(t, !1), this.init(), this;
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
      var _context29;
      return g.unite(_flatMapInstanceProperty(_context29 = this.beats).call(_context29, function (t) {
        var _context30;
        return _flatMapInstanceProperty(_context30 = t.elements).call(_context30, function (_ref20) {
          var t = _ref20.notes;
          return t;
        });
      }));
    }
  }, {
    key: "musical",
    get: function get() {
      var _context31;
      return _everyInstanceProperty(_context31 = this.beats).call(_context31, function (t) {
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
  return S;
}();
function A(t, e) {
  return 0 == e ? t : A(e, t % e);
}
function J(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.min(s, Math.max(e, t));
}
function U(t, e, s) {
  return e * (1 - t) + s * t;
}
function q(t, e, s) {
  return J((t - e) / (s - e));
}
function B(t, e) {
  return (t %= 1) < 0 && (t += 1), e[Math.floor(t * e.length)];
}
export { E as Durations, $ as Element, T as Elements, z as MUSICAL_ELEMENTS, S as Music, g as Note, m as chordify, J as clamp, p as compile, l as compose, A as gcd, q as invlerp, U as lerp, v as notesIn, y as notesInChord, b as notesInScale, x as notesIntersect, w as notesOf, f as scaleToString, d as scaleify, B as steps, c as valid, h as validate };
//# sourceMappingURL=bach-js.esm.js.map
