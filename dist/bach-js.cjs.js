'use strict';

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _inherits = require("@babel/runtime-corejs3/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime-corejs3/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime-corejs3/helpers/getPrototypeOf");

var _defineProperty = require("@babel/runtime-corejs3/helpers/defineProperty");

var _toConsumableArray = require("@babel/runtime-corejs3/helpers/toConsumableArray");

var _classCallCheck = require("@babel/runtime-corejs3/helpers/classCallCheck");

var _createClass = require("@babel/runtime-corejs3/helpers/createClass");

var _slicedToArray = require("@babel/runtime-corejs3/helpers/slicedToArray");

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _JSON$stringify = require("@babel/runtime-corejs3/core-js-stable/json/stringify");

var _concatInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _mapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/map");

var _filterInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _includesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/includes");

var _Set = require("@babel/runtime-corejs3/core-js-stable/set");

var _Number$MAX_SAFE_INTEGER = require("@babel/runtime-corejs3/core-js-stable/number/max-safe-integer");

var _Object$assign = require("@babel/runtime-corejs3/core-js-stable/object/assign");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Object$entries = require("@babel/runtime-corejs3/core-js-stable/object/entries");

var _sortInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/sort");

var _flatMapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/flat-map");

var _everyInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$values = require("@babel/runtime-corejs3/core-js-stable/object/values");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _findInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context32; _forEachInstanceProperty(_context32 = ownKeys(Object(source), true)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context33; _forEachInstanceProperty(_context33 = ownKeys(Object(source))).call(_context33, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var teoria = require('teoria');

var bach = require('bach-cljs');

var schema = require('bach-json-schema');

var Ajv = require('ajv');

function _interopDefaultLegacy(e) {
  return e && _typeof(e) === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var bach__default = /*#__PURE__*/_interopDefaultLegacy(bach);

var schema__default = /*#__PURE__*/_interopDefaultLegacy(schema);

var Ajv__default = /*#__PURE__*/_interopDefaultLegacy(Ajv);

var ajv = new Ajv__default['default']({
  strictTuples: false
});
var validate = ajv.compile(schema__default['default']);

var valid = function valid(bach) {
  if (!validate(bach)) {
    var message = 'Invalid Bach.JSON source data';

    var pretty = function pretty(json) {
      return _JSON$stringify(json, null, 2);
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


var compose = function compose(source) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof source === 'string') {
    var upgraded = source.replace(/!play/i, 'play!');
    return bach__default['default'].compose(upgraded);
  }

  if (_typeof(source) === 'object') {
    return strict ? valid(source) : source;
  }

  throw TypeError("Unsupported Bach.JSON data type (".concat(_typeof(source), "). Must be a bach.json object or raw bach string."));
};

function scaleify(value) {
  var _context;

  if (typeof value === 'string') {
    var _value$split = value.split(' '),
        _value$split2 = _slicedToArray(_value$split, 2),
        tonic = _value$split2[0],
        type = _value$split2[1]; // TODO: Potentially use type.toLowerCase instead, to guarantee smooth interopability


    return teoria.scale(tonic, type.toLowerCase());
  } else if (value instanceof teoria.Scale) {
    return value;
  }

  throw TypeError(_concatInstanceProperty(_context = "Unknown scale type (".concat(_typeof(value), "): ")).call(_context, value));
}

function chordify(value) {
  var _context2;

  if (typeof value === 'string') {
    return teoria.chord(value);
  } else if (value instanceof teoria.Chord) {
    return value;
  }

  throw TypeError(_concatInstanceProperty(_context2 = "Unknown chord type (".concat(_typeof(value), "): ")).call(_context2, value));
}

function scaleToString(scale) {
  var _context3, _context4;

  return _concatInstanceProperty(_context3 = "".concat(_sliceInstanceProperty(_context4 = scale.tonic.toString()).call(_context4, 0, 2), " ")).call(_context3, scale.name);
}

function notesInChord(value) {
  var _context5;

  return _mapInstanceProperty(_context5 = chordify(value).notes()).call(_context5, function (note) {
    return Note.valueOf(note);
  });
}

function notesInScale(value) {
  var _context6;

  return _mapInstanceProperty(_context6 = scaleify(value).notes()).call(_context6, function (note) {
    return Note.valueOf(note);
  });
}

function notesIn(kind, value) {
  var notes = notesOf[kind];

  if (notes) {
    return notes(value);
  }

  return [];
} // TODO: Allow custom note resolvers to be registered globally or locally so people can easily define their own semantics
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
}; // TODO: Note.valueOf

function notesIntersect(left, right) {
  return _filterInstanceProperty(left).call(left, function (note) {
    return _includesInstanceProperty(right).call(right, note);
  });
} // TODO: Replce with individual functions and remove class, no longer necessary
// TODO: Remove cyclic reference between data module by bringing in all note related functions.


var Note = /*#__PURE__*/function () {
  function Note() {
    _classCallCheck(this, Note);
  }

  _createClass(Note, null, [{
    key: "parse",
    value: function parse(value) {
      var _context7;

      if (typeof value === 'string') {
        return teoria.note(value);
      } else if (_typeof(value) === 'object' || value instanceof teoria.Note) {
        return value;
      }

      throw TypeError(_concatInstanceProperty(_context7 = "Unknown note type (".concat(_typeof(value), "): ")).call(_context7, value));
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
    } // TODO: Consider using chroma instead
    // TODO: Use this in nek, and anywhere else this same logic might be used

  }, {
    key: "valueOf",
    value: function valueOf(note) {
      return Note.parse(note).scientific() // .toLowerCase()
      // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
      .replace(/[0-9]+$/, '');
    }
  }, {
    key: "valuesOf",
    value: function valuesOf(notes) {
      return _mapInstanceProperty(notes).call(notes, Note.valueOf);
    }
  }, {
    key: "generalize",
    value: function generalize(note) {
      return teoria.note(Note.valueOf(note));
    }
  }, {
    key: "unite",
    value: function unite() {
      var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _toConsumableArray(new _Set(Note.valuesOf(notes)));
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
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$unit = _ref.unit,
        unit = _ref$unit === void 0 ? 1 : _ref$unit,
        _ref$is = _ref.is,
        is = _ref$is === void 0 ? 1 : _ref$is,
        _ref$as = _ref.as,
        as = _ref$as === void 0 ? 1 : _ref$as,
        _ref$min = _ref.min,
        min = _ref$min === void 0 ? 0 : _ref$min,
        _ref$max = _ref.max,
        max = _ref$max === void 0 ? 1 : _ref$max,
        _ref$grid = _ref.grid,
        grid = _ref$grid === void 0 ? 1 : _ref$grid,
        _ref$origin = _ref.origin,
        origin = _ref$origin === void 0 ? 0 : _ref$origin;

    _classCallCheck(this, Lens);

    this.data = {
      unit: unit,
      is: is,
      as: as,
      min: min,
      max: max,
      grid: grid,
      origin: origin
    }; // Would improve flexibility by wrapping all getters in Lens with this, allowing Units and Lens to use the same normalization function
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
    value: function use(data) {
      return _Object$assign({}, this.data, data);
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

var Units = /*#__PURE__*/function () {
  function Units() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$map = _mapInstanceProperty(_ref2),
        map = _ref2$map === void 0 ? {} : _ref2$map,
        _ref2$lens = _ref2.lens,
        lens = _ref2$lens === void 0 ? {} : _ref2$lens;

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
        var value = _mapInstanceProperty(this)[unit] || 1;
        return typeof value === 'function' ? value(unit) : Number(value);
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
  }, {
    key: "cast",
    value: function cast() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$is = _ref3.is,
          is = _ref3$is === void 0 ? this.lens.unit : _ref3$is,
          _ref3$as = _ref3.as,
          as = _ref3$as === void 0 ? this.lens.unit : _ref3$as;

      // cast (value = 1, { is = this.lens.is, as = this.lens.as } = {}) {
      return this.normalize(value) / (this.normalize(as) / this.normalize(is));
    }
  }, {
    key: "snap",
    value: function snap() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$to = _ref4.to,
          to = _ref4$to === void 0 ? this.lens.unit : _ref4$to,
          _ref4$calc = _ref4.calc,
          calc = _ref4$calc === void 0 ? Math.floor : _ref4$calc;

      var unit = this.normalize(to);
      var adjust = typeof calc === 'function' ? calc : function (_) {
        return _;
      };
      var output = adjust(value / unit) * unit;
      return this.normalize(output || 0);
    }
  }, {
    key: "clamp",
    value: function clamp(value, lens) {
      var _this$scope = this.scope(value, lens),
          index = _this$scope.index,
          head = _this$scope.head,
          tail = _this$scope.tail;

      return _clamp(index, head, tail);
    }
  }, {
    key: "cyclic",
    value: function cyclic(value, lens) {
      var _this$scope2 = this.scope(value, lens),
          index = _this$scope2.index,
          head = _this$scope2.head,
          tail = _this$scope2.tail;

      return _cyclic(index, head, tail);
    }
  }, {
    key: "lerp",
    value: function lerp(ratio, lens) {
      var _this$scope3 = this.scope(0, lens),
          head = _this$scope3.head,
          tail = _this$scope3.tail;

      return _lerp(ratio, head, tail);
    }
  }, {
    key: "invlerp",
    value: function invlerp(value, lens) {
      var _this$scope4 = this.scope(value, lens),
          index = _this$scope4.index,
          head = _this$scope4.head,
          tail = _this$scope4.tail;

      return _invlerp(index, head, tail);
    }
  }, {
    key: "delta",
    value: function delta(value, lens) {
      var _this$scope5 = this.scope(value, lens),
          index = _this$scope5.index,
          head = _this$scope5.head;

      return index - head;
    }
  }, {
    key: "range",
    value: function range(value, lens) {
      var _this$scope6 = this.scope(value, lens),
          head = _this$scope6.head,
          tail = _this$scope6.tail;

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
        to: basis
      });
      var ratio = Math.max(1, Math.min(value / basis, grid));
      var min = value >= grid ? grid : basis;
      return Math.max(min, this.snap(container, {
        to: ratio
      }));
    } // Changes the base unit to the provided key by recalculating and replacing the unit map pairs.
    // TODO: Test, and ensure that the base unit is equal to 1 (or, could just use scale)

  }, {
    key: "rebase",
    value: function rebase() {
      var _context8,
          _this = this;

      var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lens.unit;
      if (unit === this.lens.unit) return this;

      var map = _reduceInstanceProperty(_context8 = _Object$entries(_mapInstanceProperty(this))).call(_context8, function (map, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            value = _ref6[1];

        return _Object$assign(map, _defineProperty({}, key, _this.cast(value, {
          is: _this.lens.is,
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
      var map = _Object$assign({}, _mapInstanceProperty(this), _mapInstanceProperty(props));

      var lens = _Object$assign({}, this.lens, props.lens);

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

  var _super = _createSuper(Durations);

  function Durations(source, lens) {
    var _this2;

    _classCallCheck(this, Durations);

    _this2 = _super.call(this, {
      map: null,
      lens: lens
    });
    _this2.source = source;
    _this2.data = compose(source);

    _this2.init();

    return _this2;
  }

  _createClass(Durations, [{
    key: "init",
    value: function init() {
      this.map = _mapInstanceProperty(Durations).call(Durations, this.data);
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

      var _ref7 = state || [],
          _ref8 = _slicedToArray(_ref7, 3),
          context = _ref8[0],
          play = _ref8[1],
          stop = _ref8[2];

      return {
        beat: context[0],
        elems: _sliceInstanceProperty(context).call(context, 1),
        play: play,
        stop: stop,
        index: index
      };
    }
  }, {
    key: "metronize",
    value: function metronize(duration) {
      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref9$is = _ref9.is,
          is = _ref9$is === void 0 ? 'ms' : _ref9$is,
          _ref9$as = _ref9.as,
          as = _ref9$as === void 0 ? 'pulse' : _ref9$as;

      var index = this.cast(duration, {
        is: is,
        as: as
      });
      var bar = this.cast(this.bar.step, {
        as: as
      });
      return Math.floor(index % bar);
    } // TODO: Either replace or improve via inspiration with this:
    // @see: https://tonejs.github.io/docs/r13/Time#quantize

  }, {
    key: "rhythmic",
    value: function rhythmic(duration) {
      var _context9,
          _this3 = this;

      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref10$is = _ref10.is,
          is = _ref10$is === void 0 ? 'ms' : _ref10$is,
          _ref10$units = _ref10.units,
          units = _ref10$units === void 0 ? ['8n', '4n'] : _ref10$units,
          _ref10$calc = _ref10.calc,
          calc = _ref10$calc === void 0 ? 'floor' : _ref10$calc,
          _ref10$size = _ref10.size,
          size = _ref10$size === void 0 ? 'min' : _ref10$size;

      var durations = _sortInstanceProperty(_context9 = _mapInstanceProperty(units).call(units, function (unit) {
        var value = _this3.cast(duration, {
          is: is,
          as: unit
        });

        var result = Math[calc](value);
        return _this3.cast(result, {
          is: unit,
          as: is
        });
      })).call(_context9, function (a, b) {
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


var Element = /*#__PURE__*/function () {
  function Element(data) {
    _classCallCheck(this, Element);

    this.data = data;
  }

  _createClass(Element, [{
    key: "id",
    get: function get() {
      var _context10;

      return _concatInstanceProperty(_context10 = "".concat(this.data.kind, ".")).call(_context10, this.data.id);
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
      return _includesInstanceProperty(MUSICAL_ELEMENTS).call(MUSICAL_ELEMENTS, this.kind);
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


var Elements = /*#__PURE__*/function () {
  function Elements() {
    var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        source = _ref11.source,
        store = _ref11.store,
        cast = _ref11.cast;

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
      var _context11,
          _this4 = this;

      return _flatMapInstanceProperty(_context11 = this.kinds).call(_context11, function (kind) {
        return _everyInstanceProperty(_this4).call(_this4, kind);
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

      return _mapInstanceProperty(_context12 = this.all).call(_context12, function (elem) {
        return elem.value;
      });
    }
  }, {
    key: "ids",
    get: function get() {
      var _context13;

      return _mapInstanceProperty(_context13 = this.all).call(_context13, function (elem) {
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
      var _context14;

      return _everyInstanceProperty(_context14 = this).call(_context14, kind)[0];
    }
  }, {
    key: "every",
    value: function every(kind) {
      var _context15;

      return _mapInstanceProperty(_context15 = _Object$values(this.data[kind])).call(_context15, function (elem) {
        return new Element(elem);
      });
    }
  }, {
    key: "resolve",
    value: function resolve(elem) {
      var _this5 = this;

      // FIXME: Use json-schema validator here instead to support cross-context typing.
      // if (elem instanceof Element) return elem
      if (_typeof(elem) === 'object') return elem;
      if (typeof elem === 'string') return this.get(elem);
      if (_Array$isArray(elem)) return _mapInstanceProperty(elem).call(elem, function (el) {
        return _this5.get(el);
      });
      if (elem == null) return null;
      throw TypeError('Failed to resolve element due to unsupported data type');
    } // TODO: Rename to `insert`

  }, {
    key: "register",
    value: function register(_ref12) {
      var _context16;

      var kind = _ref12.kind,
          value = _ref12.value,
          props = _ref12.props;
      if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
      if (value == null) throw TypeError('value must be defined and non-null');
      var elem = bach.elementize(kind, _concatInstanceProperty(_context16 = [value]).call(_context16, _toConsumableArray(props)));
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
      var _context17;

      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
        return _;
      };
      if (!elements) return null; // TODO: Validate element shape with JSON Schema

      return _reduceInstanceProperty(_context17 = _Object$entries(elements)).call(_context17, function (acc, _ref13) {
        var _context18;

        var _ref14 = _slicedToArray(_ref13, 2),
            kind = _ref14[0],
            ids = _ref14[1];

        var elems = _reduceInstanceProperty(_context18 = _Object$entries(ids)).call(_context18, function (acc, _ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              id = _ref16[0],
              elem = _ref16[1];

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


var MUSICAL_ELEMENTS = ['note', 'chord', 'scale', ' penta']; // triad

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items -> elements
 */

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
      var _context19,
          _this6 = this;

      return _mapInstanceProperty(_context19 = this.data.items).call(_context19, function (item) {
        var _context20;

        return _objectSpread(_objectSpread({}, item), {}, {
          elements: _mapInstanceProperty(_context20 = item.elements).call(_context20, function (elem) {
            return _this6.store.resolve(elem);
          })
        });
      });
    }
  }, {
    key: "elements",
    get: function get() {
      var _context21,
          _this7 = this;

      return _flatMapInstanceProperty(_context21 = this.data.items).call(_context21, function (_ref17) {
        var elements = _ref17.elements;
        return _mapInstanceProperty(elements).call(elements, function (elem) {
          return _this7.store.resolve(elem);
        });
      });
    }
  }, {
    key: "kinds",
    get: function get() {
      return this.all(function (_ref18) {
        var kind = _ref18.kind;
        return kind;
      });
    }
  }, {
    key: "values",
    get: function get() {
      return this.all(function (_ref19) {
        var value = _ref19.value;
        return value;
      });
    }
  }, {
    key: "notes",
    get: function get() {
      return this.notesOf(this.elements);
    } // Provides map of elements in a beat grouped by kind.
    // WARN: Doesn't support multiple elements of the same kind.

  }, {
    key: "parts",
    get: function get() {
      var _context22;

      return _reduceInstanceProperty(_context22 = this.elements).call(_context22, function (parts, elem) {
        return _objectSpread(_objectSpread({}, parts), {}, _defineProperty({}, elem.kind, elem));
      }, {});
    }
  }, {
    key: "musical",
    get: function get() {
      var _context23;

      return _everyInstanceProperty(_context23 = this.elements).call(_context23, function (elem) {
        return elem.musical;
      });
    }
  }, {
    key: "all",
    value: function all() {
      var _context24;

      var cast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
        return _;
      };
      return _toConsumableArray(new _Set(_mapInstanceProperty(_context24 = this.elements).call(_context24, cast)));
    }
  }, {
    key: "find",
    value: function find(kind) {
      var _context25;

      return _findInstanceProperty(_context25 = this.elements).call(_context25, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "filter",
    value: function filter(kind) {
      var _context26;

      return _filterInstanceProperty(_context26 = this.elements).call(_context26, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "last",
    value: function last(kind) {
      var _context27, _context28;

      return _reverseInstanceProperty(_context27 = _filterInstanceProperty(_context28 = this).call(_context28, kind)).call(_context27)[0];
    }
  }, {
    key: "either",
    value: function either(kinds) {
      var _this8 = this;

      return _reduceInstanceProperty(kinds).call(kinds, function (acc, kind) {
        return acc.length ? acc : _filterInstanceProperty(_this8).call(_this8, kind);
      }, []);
    }
  }, {
    key: "notesOf",
    value: function notesOf(elements) {
      return Note.unite(_flatMapInstanceProperty(elements).call(elements, function (_ref20) {
        var notes = _ref20.notes;
        return notes;
      }));
    }
  }], [{
    key: "from",
    value: function from(beats, store) {
      if (_Array$isArray(beats)) {
        return _mapInstanceProperty(beats).call(beats, function (beat) {
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
      this.data = compose(source);
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
      var _context29;

      return Note.unite(_flatMapInstanceProperty(_context29 = this.beats).call(_context29, function (beat) {
        var _context30;

        return _flatMapInstanceProperty(_context30 = beat.elements).call(_context30, function (_ref21) {
          var notes = _ref21.notes;
          return notes;
        });
      }));
    }
  }, {
    key: "musical",
    get: function get() {
      var _context31;

      return _everyInstanceProperty(_context31 = this.beats).call(_context31, function (beat) {
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

exports.Durations = Durations;
exports.Element = Element;
exports.Elements = Elements;
exports.MUSICAL_ELEMENTS = MUSICAL_ELEMENTS;
exports.Music = Music;
exports.Note = Note;
exports.chordify = chordify;
exports.clamp = clamp$1;
exports.compose = compose;
exports.gcd = gcd$1;
exports.invlerp = invlerp$1;
exports.lerp = lerp$1;
exports.notesIn = notesIn;
exports.notesInChord = notesInChord;
exports.notesInScale = notesInScale;
exports.notesIntersect = notesIntersect;
exports.notesOf = notesOf;
exports.scaleToString = scaleToString;
exports.scaleify = scaleify;
exports.steps = steps;
exports.valid = valid;
exports.validate = validate;
//# sourceMappingURL=bach-js.cjs.js.map
