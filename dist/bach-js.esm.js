var _typeof3 = require("@babel/runtime-corejs3/helpers/typeof");

var _concatInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _mapInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/map");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _includesInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/includes");

var _sortInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/sort");

var _flatMapInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/flat-map");

var _valuesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/values");

var _keysInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/keys");

var _reduceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _entriesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/entries");

var _everyInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _findInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime-corejs3/helpers/esm/defineProperty", "@babel/runtime-corejs3/helpers/esm/toConsumableArray", "@babel/runtime-corejs3/helpers/esm/classCallCheck", "@babel/runtime-corejs3/helpers/esm/createClass", "@babel/runtime-corejs3/helpers/esm/slicedToArray", "@babel/runtime-corejs3/helpers/esm/typeof", "@babel/runtime-corejs3/core-js-stable/json/stringify", "@babel/runtime-corejs3/core-js-stable/instance/concat", "@babel/runtime-corejs3/core-js-stable/instance/slice", "@babel/runtime-corejs3/core-js-stable/instance/map", "@babel/runtime-corejs3/core-js-stable/instance/filter", "@babel/runtime-corejs3/core-js-stable/instance/includes", "@babel/runtime-corejs3/core-js-stable/set", "@babel/runtime-corejs3/core-js-stable/instance/sort", "@babel/runtime-corejs3/core-js-stable/instance/flat-map", "@babel/runtime-corejs3/core-js-stable/object/values", "@babel/runtime-corejs3/core-js-stable/object/keys", "@babel/runtime-corejs3/core-js-stable/instance/reduce", "@babel/runtime-corejs3/core-js-stable/object/entries", "@babel/runtime-corejs3/core-js-stable/instance/every", "@babel/runtime-corejs3/core-js-stable/instance/find", "@babel/runtime-corejs3/core-js-stable/array/is-array", "teoria", "bach-cljs", "bach-json-schema", "ajv"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime-corejs3/helpers/esm/defineProperty"), require("@babel/runtime-corejs3/helpers/esm/toConsumableArray"), require("@babel/runtime-corejs3/helpers/esm/classCallCheck"), require("@babel/runtime-corejs3/helpers/esm/createClass"), require("@babel/runtime-corejs3/helpers/esm/slicedToArray"), require("@babel/runtime-corejs3/helpers/esm/typeof"), require("@babel/runtime-corejs3/core-js-stable/json/stringify"), require("@babel/runtime-corejs3/core-js-stable/instance/concat"), require("@babel/runtime-corejs3/core-js-stable/instance/slice"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/includes"), require("@babel/runtime-corejs3/core-js-stable/set"), require("@babel/runtime-corejs3/core-js-stable/instance/sort"), require("@babel/runtime-corejs3/core-js-stable/instance/flat-map"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/instance/reduce"), require("@babel/runtime-corejs3/core-js-stable/object/entries"), require("@babel/runtime-corejs3/core-js-stable/instance/every"), require("@babel/runtime-corejs3/core-js-stable/instance/find"), require("@babel/runtime-corejs3/core-js-stable/array/is-array"), require("teoria"), require("bach-cljs"), require("bach-json-schema"), require("ajv"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.toConsumableArray, global.classCallCheck, global.createClass, global.slicedToArray, global._typeof, global.stringify, _concatInstanceProperty2(global), _sliceInstanceProperty2(global), _mapInstanceProperty2(global), _filterInstanceProperty2(global), _includesInstanceProperty2(global), global.set, _sortInstanceProperty2(global), _flatMapInstanceProperty2(global), _valuesInstanceProperty(global), _keysInstanceProperty(global), _reduceInstanceProperty2(global), _entriesInstanceProperty(global), _everyInstanceProperty2(global), _findInstanceProperty2(global), global.isArray, global.teoria, global.bachCljs, global.bachJsonSchema, global.ajv);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _toConsumableArray2, _classCallCheck2, _createClass2, _slicedToArray2, _typeof2, _stringify, _concat, _slice, _map, _filter, _includes, _set, _sort, _flatMap, _values, _keys, _reduce, _entries, _every, _find, _isArray, _teoria, _bachCljs, _bachJsonSchema, _ajv) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

  _Object$defineProperty(_exports, "__esModule", {
    value: true
  });

  _exports.chordify = chordify;
  _exports.clamp = _clamp;
  _exports.gcd = gcd;
  _exports.invlerp = invlerp;
  _exports.lerp = lerp;
  _exports.notesIn = notesIn;
  _exports.notesInChord = notesInChord;
  _exports.notesInScale = notesInScale;
  _exports.notesIntersect = notesIntersect;
  _exports.scaleToString = scaleToString;
  _exports.scaleify = scaleify;
  _exports.steps = steps;
  _exports.validate = _exports.valid = _exports.unitsOf = _exports.timesOf = _exports.notesOf = _exports.compose = _exports.Note = _exports.Music = _exports.MUSICAL_ELEMENTS = _exports.Elements = _exports.Element = _exports.Durations = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _stringify = _interopRequireDefault(_stringify);
  _concat = _interopRequireDefault(_concat);
  _slice = _interopRequireDefault(_slice);
  _map = _interopRequireDefault(_map);
  _filter = _interopRequireDefault(_filter);
  _includes = _interopRequireDefault(_includes);
  _set = _interopRequireDefault(_set);
  _sort = _interopRequireDefault(_sort);
  _flatMap = _interopRequireDefault(_flatMap);
  _values = _interopRequireDefault(_values);
  _keys = _interopRequireDefault(_keys);
  _reduce = _interopRequireDefault(_reduce);
  _entries = _interopRequireDefault(_entries);
  _every = _interopRequireDefault(_every);
  _find = _interopRequireDefault(_find);
  _isArray = _interopRequireDefault(_isArray);
  _bachCljs = _interopRequireWildcard(_bachCljs);
  _bachJsonSchema = _interopRequireDefault(_bachJsonSchema);
  _ajv = _interopRequireDefault(_ajv);

  function _getRequireWildcardCache(nodeInterop) { if (typeof _WeakMap !== "function") return null; var cacheBabelInterop = new _WeakMap(); var cacheNodeInterop = new _WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { _Object$defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context31; _forEachInstanceProperty(_context31 = ownKeys(Object(source), true)).call(_context31, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context32; _forEachInstanceProperty(_context32 = ownKeys(Object(source))).call(_context32, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var ajv = new _ajv["default"]({
    strictTuples: false
  });
  var validate = ajv.compile(_bachJsonSchema["default"]);
  _exports.validate = validate;

  var valid = function valid(bach) {
    if (!validate(bach)) {
      var message = 'Invalid Bach.JSON source data';

      var pretty = function pretty(json) {
        return (0, _stringify["default"])(json, null, 2);
      };

      console.error(message, pretty(bach));
      console.error(pretty(validate.errors));
      throw TypeError("Invalid Bach.JSON source data");
    }

    return bach;
  }; // Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
  // Given a string, automatically upgrades source to v3 (simple replacement of !play with play!).
  // Main entry point for integrating with core bach ClojureScript library.


  _exports.valid = valid;

  var compose = function compose(source) {
    if (typeof source === 'string') {
      var upgraded = source.replace(/!play/i, 'play!');
      return _bachCljs["default"].compose(upgraded);
    }

    if ((0, _typeof2["default"])(source) === 'object') {
      return valid(source);
    }

    throw TypeError("Unsupported Bach.JSON data type (".concat((0, _typeof2["default"])(source), "). Must be a bach.json object or raw bach string."));
  };

  _exports.compose = compose;

  function scaleify(value) {
    var _context;

    if (typeof value === 'string') {
      var _value$split = value.split(' '),
          _value$split2 = (0, _slicedToArray2["default"])(_value$split, 2),
          tonic = _value$split2[0],
          type = _value$split2[1]; // TODO: Potentially use type.toLowerCase instead, to guarantee smooth interopability


      return (0, _teoria.scale)(tonic, type.toLowerCase());
    } else if (value instanceof _teoria.Scale) {
      return value;
    }

    throw TypeError((0, _concat["default"])(_context = "Unknown scale type (".concat((0, _typeof2["default"])(value), "): ")).call(_context, value));
  }

  function chordify(value) {
    var _context2;

    if (typeof value === 'string') {
      return (0, _teoria.chord)(value);
    } else if (value instanceof _teoria.Chord) {
      return value;
    }

    throw TypeError((0, _concat["default"])(_context2 = "Unknown chord type (".concat((0, _typeof2["default"])(value), "): ")).call(_context2, value));
  }

  function scaleToString(scale) {
    var _context3, _context4;

    return (0, _concat["default"])(_context3 = "".concat((0, _slice["default"])(_context4 = scale.tonic.toString()).call(_context4, 0, 2), " ")).call(_context3, scale.name);
  }

  function notesInChord(value) {
    var _context5;

    return (0, _map["default"])(_context5 = chordify(value).notes()).call(_context5, function (note) {
      return Note.valueOf(note);
    });
  }

  function notesInScale(value) {
    var _context6;

    return (0, _map["default"])(_context6 = scaleify(value).notes()).call(_context6, function (note) {
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
      return value;
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

  _exports.notesOf = notesOf;

  function notesIntersect(left, right) {
    return (0, _filter["default"])(left).call(left, function (note) {
      return (0, _includes["default"])(right).call(right, note);
    });
  } // TODO: Remove


  var unitsOf = function unitsOf(source) {
    return {
      step: source.units.beat.step,
      pulse: source.units.beat.pulse,
      bar: source.units.bar.step,
      ms: 1 / source.units.time.bar
    };
  };

  _exports.unitsOf = unitsOf;

  var timesOf = function timesOf(source) {
    var _source$units$time = source.units.time,
        step = _source$units$time.step,
        pulse = _source$units$time.pulse,
        bar = _source$units$time.bar;
    return {
      ms: 1,
      second: 1000,
      step: step,
      pulse: pulse,
      bar: bar,
      's': step,
      'p': pulse,
      'm': bar,
      '2n': bar / 2,
      '4n': bar / 4,
      '8n': bar / 8,
      '16n': bar / 16,
      '32n': bar / 32,
      '64n': bar / 64,
      '4up': bar - bar / 4,
      '8up': bar - bar / 8
    };
  };

  _exports.timesOf = timesOf;

  var Note = /*#__PURE__*/function () {
    function Note() {
      (0, _classCallCheck2["default"])(this, Note);
    }

    (0, _createClass2["default"])(Note, null, [{
      key: "parse",
      value: function parse(value) {
        var _context7;

        if (typeof value === 'string') {
          return (0, _teoria.note)(value);
        } else if ((0, _typeof2["default"])(value) === 'object' || value instanceof _teoria.Note) {
          return value;
        }

        throw TypeError((0, _concat["default"])(_context7 = "Unknown note type (".concat((0, _typeof2["default"])(value), "): ")).call(_context7, value));
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
        return (0, _map["default"])(notes).call(notes, Note.valueOf);
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
        return (0, _toConsumableArray2["default"])(new _set["default"](Note.valuesOf(notes)));
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

  function gcd(a, b) {
    if (b == 0) {
      return a;
    }

    return gcd(b, a % b);
  }
  /**
   * Modifies a value so that it is always between the provided min and max
   *
   * @param {Number} value
   * @param {Number} min
   * @param {Number} max
   * @returns {Number}
   */


  function _clamp(value) {
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


  function lerp(ratio, x, y) {
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


  function invlerp(value, x, y) {
    return _clamp((value - x) / (y - x));
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

  var Durations = /*#__PURE__*/function () {
    function Durations(source) {
      (0, _classCallCheck2["default"])(this, Durations);
      this.source = compose(source);
    }

    (0, _createClass2["default"])(Durations, [{
      key: "steps",
      get: function get() {
        return this.source.steps;
      }
    }, {
      key: "metrics",
      get: function get() {
        return this.source.metrics;
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
      key: "step",
      get: function get() {
        return this.units.step;
      }
    }, {
      key: "pulse",
      get: function get() {
        return this.units.pulse;
      }
    }, {
      key: "bar",
      get: function get() {
        return this.units.bar;
      }
    }, {
      key: "units",
      get: function get() {
        // TODO: Remove, just return this.units
        return unitsOf(this.source);
      }
    }, {
      key: "times",
      get: function get() {
        return timesOf(this.source);
      }
    }, {
      key: "interval",
      get: function get() {
        return this.times.step;
      }
    }, {
      key: "cast",
      value: function cast(duration) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$is = _ref.is,
            is = _ref$is === void 0 ? 'step' : _ref$is,
            _ref$as = _ref.as,
            as = _ref$as === void 0 ? 'pulse' : _ref$as;

        return duration / (this.times[as] / this.times[is]);
      }
    }, {
      key: "metronize",
      value: function metronize(duration) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$is = _ref2.is,
            is = _ref2$is === void 0 ? 'ms' : _ref2$is,
            _ref2$as = _ref2.as,
            as = _ref2$as === void 0 ? 'pulse' : _ref2$as;

        var index = this.cast(duration, {
          is: is,
          as: as
        });
        var bar = this.cast(this.bar, {
          as: as
        });
        return Math.floor(index % bar);
      }
    }, {
      key: "ratio",
      value: function ratio(duration) {
        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        return this.cast(duration, {
          is: is,
          as: 'step'
        }) / this.total;
      }
    }, {
      key: "percentage",
      value: function percentage(duration) {
        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        return this.ratio(duration, is) * 100;
      }
    }, {
      key: "clamp",
      value: function clamp(duration) {
        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$is = _ref3.is,
            is = _ref3$is === void 0 ? 'step' : _ref3$is,
            _ref3$min = _ref3.min,
            min = _ref3$min === void 0 ? 0 : _ref3$min,
            max = _ref3.max;

        var step = this.cast(duration, {
          is: is,
          as: 'step'
        });
        var head = this.cast(min || 0, {
          is: is,
          as: 'step'
        });
        var tail = this.cast(max || this.total, {
          is: is,
          as: 'step'
        });
        return _clamp(step, head, tail);
      }
    }, {
      key: "cyclic",
      value: function cyclic(duration) {
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref4$is = _ref4.is,
            is = _ref4$is === void 0 ? 'step' : _ref4$is,
            _ref4$min = _ref4.min,
            min = _ref4$min === void 0 ? 0 : _ref4$min,
            max = _ref4.max;

        this.cast(duration, {
          is: is,
          as: 'step'
        });
        var head = this.cast(min || 0, {
          is: is,
          as: 'step'
        });
        var tail = this.cast(max || this.total, {
          is: is,
          as: 'step'
        });
        var key = duration >= head ? duration : duration + tail;
        return key % tail;
      }
    }, {
      key: "interpolate",
      value: function interpolate(ratio) {
        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref5$is = _ref5.is,
            is = _ref5$is === void 0 ? 'step' : _ref5$is,
            _ref5$min = _ref5.min,
            min = _ref5$min === void 0 ? 0 : _ref5$min,
            max = _ref5.max;

        var head = this.cast(min || 0, {
          is: is,
          as: 'step'
        });
        var tail = this.cast(max || this.total, {
          is: is,
          as: 'step'
        });
        return lerp(ratio, head, tail);
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

        var _ref6 = state || [],
            _ref7 = (0, _slicedToArray2["default"])(_ref6, 3),
            context = _ref7[0],
            play = _ref7[1],
            stop = _ref7[2];

        return {
          beat: context[0],
          elems: (0, _slice["default"])(context).call(context, 1),
          play: play,
          stop: stop,
          index: index
        };
      } // TODO: Either replace or improve via inspiration with this:
      // @see: https://tonejs.github.io/docs/r13/Time#quantize

    }, {
      key: "rhythmic",
      value: function rhythmic(duration) {
        var _context8,
            _this = this;

        var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref8$is = _ref8.is,
            is = _ref8$is === void 0 ? 'ms' : _ref8$is,
            _ref8$units = _ref8.units,
            units = _ref8$units === void 0 ? ['8n', '4n'] : _ref8$units,
            _ref8$calc = _ref8.calc,
            calc = _ref8$calc === void 0 ? 'floor' : _ref8$calc,
            _ref8$size = _ref8.size,
            size = _ref8$size === void 0 ? 'min' : _ref8$size;

        var durations = (0, _sort["default"])(_context8 = (0, _map["default"])(units).call(units, function (unit) {
          var value = _this.cast(duration, {
            is: is,
            as: unit
          });

          var result = Math[calc](value);
          return _this.cast(result, {
            is: unit,
            as: is
          });
        })).call(_context8, function (a, b) {
          return Math.abs(duration - a) - Math.abs(duration - b);
        });
        return Math[size].apply(Math, (0, _toConsumableArray2["default"])(durations));
      }
    }]);
    return Durations;
  }();
  /**
   * Represents a single and unique playable element.
   * Uniqueness and equality are determined by `id`.
   */


  _exports.Durations = Durations;

  var Element = /*#__PURE__*/function () {
    function Element(data) {
      (0, _classCallCheck2["default"])(this, Element);
      this.data = data;
    }

    (0, _createClass2["default"])(Element, [{
      key: "id",
      get: function get() {
        var _context9;

        return (0, _concat["default"])(_context9 = "".concat(this.data.kind, ".")).call(_context9, this.data.id);
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
        return this.data.kind; //.toLowerCase()
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
      } // TODO: Hoist out to Music, leaky abstraction

    }, {
      key: "musical",
      get: function get() {
        return (0, _includes["default"])(MUSICAL_ELEMENTS).call(MUSICAL_ELEMENTS, this.kind);
      }
    }], [{
      key: "uid",
      value: function uid(id) {
        return id.split('.').pop();
      }
    }]);
    return Element;
  }();

  _exports.Element = Element;

  var Elements = /*#__PURE__*/function () {
    function Elements() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          source = _ref9.source,
          store = _ref9.store,
          cast = _ref9.cast;

      (0, _classCallCheck2["default"])(this, Elements);
      this.source = compose(source);

      this.cast = cast || function (_) {
        return _;
      };

      this.data = store || Elements.cast(this.source.elements, cast);
    }

    (0, _createClass2["default"])(Elements, [{
      key: "all",
      get: function get() {
        var _context10,
            _this2 = this;

        return (0, _flatMap["default"])(_context10 = this.kinds).call(_context10, function (kind) {
          var _context11;

          return (0, _map["default"])(_context11 = (0, _values["default"])(_this2.data[kind])).call(_context11, function (elem) {
            return new Element(elem);
          });
        });
      }
    }, {
      key: "kinds",
      get: function get() {
        return (0, _keys["default"])(this.data);
      }
    }, {
      key: "values",
      get: function get() {
        var _context12;

        return (0, _map["default"])(_context12 = this.all).call(_context12, function (elem) {
          return elem.value;
        });
      }
    }, {
      key: "ids",
      get: function get() {
        var _context13;

        return (0, _map["default"])(_context13 = this.all).call(_context13, function (elem) {
          return elem.id;
        });
      }
    }, {
      key: "get",
      value: function get(id) {
        var parts = typeof id === 'string' ? id.split('.') : [];

        if (parts.length === 2) {
          var _parts = (0, _slicedToArray2["default"])(parts, 2),
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
      key: "resolve",
      value: function resolve(elem) {
        // FIXME: Use json-schema validator here instead to support cross-context typing (instanceof doesn't work from workers etc.)
        // if (elem instanceof Element) return elem
        if ((0, _typeof2["default"])(elem) === 'object') return elem;
        if (typeof elem === 'string') return this.get(elem); // if (typeof elem === 'object') return new Element(this.cast(elem))

        throw TypeError('Failed to resolve element due to unsupported data type');
      } // TODO: Rename to `insert`

    }, {
      key: "register",
      value: function register(_ref10) {
        var _context14;

        var kind = _ref10.kind,
            value = _ref10.value,
            props = _ref10.props;
        if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
        if (value == null) throw TypeError('value must be defined and non-null');
        var elem = (0, _bachCljs.elementize)(kind, (0, _concat["default"])(_context14 = [value]).call(_context14, (0, _toConsumableArray2["default"])(props)));
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
        var _context15;

        var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
          return _;
        };
        if (!elements) return null; // TODO: Validate element shape with JSON Schema

        return (0, _reduce["default"])(_context15 = (0, _entries["default"])(elements)).call(_context15, function (acc, _ref11) {
          var _context16;

          var _ref12 = (0, _slicedToArray2["default"])(_ref11, 2),
              kind = _ref12[0],
              ids = _ref12[1];

          var elems = (0, _reduce["default"])(_context16 = (0, _entries["default"])(ids)).call(_context16, function (acc, _ref13) {
            var _ref14 = (0, _slicedToArray2["default"])(_ref13, 2),
                id = _ref14[0],
                elem = _ref14[1];

            return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, id, as(_objectSpread({
              id: id,
              kind: kind
            }, elem))));
          }, {});
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, kind, elems));
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
      (0, _classCallCheck2["default"])(this, Beat);
      this.data = data;
      this.store = store;
    }

    (0, _createClass2["default"])(Beat, [{
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
            _this3 = this;

        return (0, _map["default"])(_context17 = this.data.items).call(_context17, function (item) {
          var _context18;

          return _objectSpread(_objectSpread({}, item), {}, {
            elements: (0, _map["default"])(_context18 = item.elements).call(_context18, function (elem) {
              return _this3.store.resolve(elem);
            })
          });
        });
      }
    }, {
      key: "elements",
      get: function get() {
        var _context19,
            _this4 = this;

        return (0, _flatMap["default"])(_context19 = this.data.items).call(_context19, function (_ref15) {
          var elements = _ref15.elements;
          return (0, _map["default"])(elements).call(elements, function (elem) {
            return _this4.store.resolve(elem);
          });
        });
      }
    }, {
      key: "kinds",
      get: function get() {
        return this.all(function (_ref16) {
          var kind = _ref16.kind;
          return kind;
        });
      }
    }, {
      key: "values",
      get: function get() {
        return this.all(function (_ref17) {
          var value = _ref17.value;
          return value;
        });
      }
    }, {
      key: "notes",
      get: function get() {
        return this.notesOf(this.elements);
      } // Provides map of elements in a beat grouped by kind.
      // FIXME: Doesn't support multiple elements of the same kind

    }, {
      key: "parts",
      get: function get() {
        var _context20;

        return (0, _reduce["default"])(_context20 = this.elements).call(_context20, function (parts, elem) {
          return _objectSpread(_objectSpread({}, parts), {}, (0, _defineProperty2["default"])({}, elem.kind, elem));
        }, {});
      }
    }, {
      key: "musical",
      get: function get() {
        var _context21;

        return (0, _every["default"])(_context21 = this.elements).call(_context21, function (elem) {
          return elem.musical;
        });
      }
    }, {
      key: "all",
      value: function all() {
        var _context22;

        var cast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
          return _;
        };
        return (0, _toConsumableArray2["default"])(new _set["default"]((0, _map["default"])(_context22 = this.elements).call(_context22, cast)));
      }
    }, {
      key: "find",
      value: function find(kind) {
        var _context23;

        return (0, _find["default"])(_context23 = this.elements).call(_context23, function (elem) {
          return kind === elem.kind;
        });
      }
    }, {
      key: "filter",
      value: function filter(kind) {
        var _context24;

        return (0, _filter["default"])(_context24 = this.elements).call(_context24, function (elem) {
          return kind === elem.kind;
        });
      }
    }, {
      key: "either",
      value: function either(kinds) {
        var _this5 = this;

        return (0, _reduce["default"])(kinds).call(kinds, function (acc, kind) {
          return acc.length ? acc : (0, _filter["default"])(_this5).call(_this5, kind);
        }, []);
      }
    }, {
      key: "notesOf",
      value: function notesOf(elements) {
        return Note.unite((0, _flatMap["default"])(elements).call(elements, function (_ref18) {
          var notes = _ref18.notes;
          return notes;
        }));
      }
    }], [{
      key: "from",
      value: function from(beats, store) {
        if ((0, _isArray["default"])(beats)) {
          return (0, _map["default"])(beats).call(beats, function (beat) {
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
      (0, _classCallCheck2["default"])(this, Music);
      this.source = source;
      this.data = compose(source);
      this.store = this.parses ? new Elements({
        source: this.data,
        cast: function cast(elem) {
          return _objectSpread(_objectSpread({}, elem), {}, {
            notes: Note.all(elem.kind, elem.value)
          });
        }
      }) : null;
    }

    (0, _createClass2["default"])(Music, [{
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
      key: "beats",
      get: function get() {
        return Beat.from(this.data.beats, this.store);
      }
    }, {
      key: "durations",
      get: function get() {
        return new Durations(this.data);
      }
    }, {
      key: "notes",
      get: function get() {
        var _context25;

        return Note.unite((0, _flatMap["default"])(_context25 = this.beats).call(_context25, function (beat) {
          var _context26;

          return (0, _flatMap["default"])(_context26 = beat.elements).call(_context26, function (_ref19) {
            var notes = _ref19.notes;
            return notes;
          });
        }));
      }
    }, {
      key: "musical",
      get: function get() {
        var _context27;

        return (0, _every["default"])(_context27 = this.beats).call(_context27, function (beat) {
          return beat.musical;
        });
      } // get playable () {
      //   return this.elements.every(({ notes }) => !!notes.length)
      // }

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
        var _context28,
            _this6 = this,
            _context29,
            _context30;

        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        var cursor = this.durations.at(duration, is);
        return {
          beat: this.beats[cursor.beat],
          elems: (0, _map["default"])(_context28 = cursor.elems || []).call(_context28, function (elem) {
            return _this6.store.resolve(elem);
          }),
          play: (0, _map["default"])(_context29 = cursor.play || []).call(_context29, function (elem) {
            return _this6.store.resolve(elem);
          }),
          stop: (0, _map["default"])(_context30 = cursor.stop || []).call(_context30, function (elem) {
            return _this6.store.resolve(elem);
          })
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
    }, {
      key: "adjust",
      value: function adjust(tempo) {}
    }]);
    return Music;
  }();

  _exports.Music = Music;
});
