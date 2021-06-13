'use strict';

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _defineProperty = require("@babel/runtime-corejs3/helpers/defineProperty");

var _toArray = require("@babel/runtime-corejs3/helpers/toArray");

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

var _sortInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/sort");

var _flatMapInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/flat-map");

var _Object$values = require("@babel/runtime-corejs3/core-js-stable/object/values");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Object$entries = require("@babel/runtime-corejs3/core-js-stable/object/entries");

var _everyInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _findInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context30; _forEachInstanceProperty(_context30 = ownKeys(Object(source), true)).call(_context30, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context31; _forEachInstanceProperty(_context31 = ownKeys(Object(source))).call(_context31, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
}; // Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
// Given a string, automatically upgrades source to v3 (simple replacement of !play with play!).
// Main entry point for integrating with core bach ClojureScript library.


var compose = function compose(source) {
  if (typeof source === 'string') {
    var upgraded = source.replace(/!play/i, 'play!');
    return bach__default['default'].compose(upgraded);
  }

  if (_typeof(source) === 'object') {
    return valid(source);
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

function notesIntersect(left, right) {
  return _filterInstanceProperty(left).call(left, function (note) {
    return _includesInstanceProperty(right).call(right, note);
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
    _classCallCheck(this, Durations);

    this.source = compose(source);
  }

  _createClass(Durations, [{
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
      var step = this.cast(duration, {
        is: is,
        as: 'step'
      });
      var index = this.cyclic(step);
      var state = this.steps[index];

      var _state = _slicedToArray(state, 3),
          _state$ = _toArray(_state[0]),
          beat = _state$[0],
          elems = _sliceInstanceProperty(_state$).call(_state$, 1),
          play = _state[1],
          stop = _state[2];

      return {
        beat: beat,
        elems: elems,
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

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$is = _ref6.is,
          is = _ref6$is === void 0 ? 'ms' : _ref6$is,
          _ref6$units = _ref6.units,
          units = _ref6$units === void 0 ? ['8n', '4n'] : _ref6$units,
          _ref6$calc = _ref6.calc,
          calc = _ref6$calc === void 0 ? 'floor' : _ref6$calc,
          _ref6$size = _ref6.size,
          size = _ref6$size === void 0 ? 'min' : _ref6$size;

      var durations = _sortInstanceProperty(_context8 = _mapInstanceProperty(units).call(units, function (unit) {
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

      return Math[size].apply(Math, _toConsumableArray(durations));
    }
  }]);

  return Durations;
}();
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
      var _context9;

      return _concatInstanceProperty(_context9 = "".concat(this.data.kind, ".")).call(_context9, this.data.id);
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

var Elements = /*#__PURE__*/function () {
  function Elements() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        source = _ref7.source,
        store = _ref7.store,
        cast = _ref7.cast;

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
      var _context10,
          _this2 = this;

      return _flatMapInstanceProperty(_context10 = this.kinds).call(_context10, function (kind) {
        var _context11;

        return _mapInstanceProperty(_context11 = _Object$values(_this2.data[kind])).call(_context11, function (elem) {
          return new Element(elem);
        });
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
    key: "resolve",
    value: function resolve(elem) {
      // FIXME: Use json-schema validator here instead to support cross-context typing (instanceof doesn't work from workers etc.)
      // if (elem instanceof Element) return elem
      if (_typeof(elem) === 'object') return elem;
      if (typeof elem === 'string') return this.get(elem); // if (typeof elem === 'object') return new Element(this.cast(elem))

      throw TypeError('Failed to resolve element due to unsupported data type');
    } // TODO: Rename to `insert`

  }, {
    key: "register",
    value: function register(_ref8) {
      var _context14;

      var kind = _ref8.kind,
          value = _ref8.value,
          props = _ref8.props;
      if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
      if (value == null) throw TypeError('value must be defined and non-null');
      var elem = bach.elementize(kind, _concatInstanceProperty(_context14 = [value]).call(_context14, _toConsumableArray(props)));
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

      return _reduceInstanceProperty(_context15 = _Object$entries(elements)).call(_context15, function (acc, _ref9) {
        var _context16;

        var _ref10 = _slicedToArray(_ref9, 2),
            kind = _ref10[0],
            ids = _ref10[1];

        var elems = _reduceInstanceProperty(_context16 = _Object$entries(ids)).call(_context16, function (acc, _ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              id = _ref12[0],
              elem = _ref12[1];

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
      var _context17,
          _this3 = this;

      return _mapInstanceProperty(_context17 = this.data.items).call(_context17, function (item) {
        var _context18;

        return _objectSpread(_objectSpread({}, item), {}, {
          elements: _mapInstanceProperty(_context18 = item.elements).call(_context18, function (elem) {
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

      return _flatMapInstanceProperty(_context19 = this.data.items).call(_context19, function (_ref13) {
        var elements = _ref13.elements;
        return _mapInstanceProperty(elements).call(elements, function (elem) {
          return _this4.store.resolve(elem);
        });
      });
    }
  }, {
    key: "kinds",
    get: function get() {
      return this.all(function (_ref14) {
        var kind = _ref14.kind;
        return kind;
      });
    }
  }, {
    key: "values",
    get: function get() {
      return this.all(function (_ref15) {
        var value = _ref15.value;
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

      return _reduceInstanceProperty(_context20 = this.elements).call(_context20, function (parts, elem) {
        return _objectSpread(_objectSpread({}, parts), {}, _defineProperty({}, elem.kind, elem));
      }, {});
    }
  }, {
    key: "musical",
    get: function get() {
      var _context21;

      return _everyInstanceProperty(_context21 = this.elements).call(_context21, function (elem) {
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
      return _toConsumableArray(new _Set(_mapInstanceProperty(_context22 = this.elements).call(_context22, cast)));
    }
  }, {
    key: "find",
    value: function find(kind) {
      var _context23;

      return _findInstanceProperty(_context23 = this.elements).call(_context23, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "filter",
    value: function filter(kind) {
      var _context24;

      return _filterInstanceProperty(_context24 = this.elements).call(_context24, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "either",
    value: function either(kinds) {
      var _this5 = this;

      return _reduceInstanceProperty(kinds).call(kinds, function (acc, kind) {
        return acc.length ? acc : _filterInstanceProperty(_this5).call(_this5, kind);
      }, []);
    }
  }, {
    key: "notesOf",
    value: function notesOf(elements) {
      return Note.unite(_flatMapInstanceProperty(elements).call(elements, function (_ref16) {
        var notes = _ref16.notes;
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

  _createClass(Music, [{
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

      return Note.unite(_flatMapInstanceProperty(_context25 = this.beats).call(_context25, function (beat) {
        var _context26;

        return _flatMapInstanceProperty(_context26 = beat.elements).call(_context26, function (_ref17) {
          var notes = _ref17.notes;
          return notes;
        });
      }));
    }
  }, {
    key: "musical",
    get: function get() {
      var _context27;

      return _everyInstanceProperty(_context27 = this.beats).call(_context27, function (beat) {
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
          _context29;

      var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
      var cursor = this.durations.at(duration, is);
      return {
        beat: this.beats[cursor.beat],
        play: _mapInstanceProperty(_context28 = cursor.play || []).call(_context28, function (elem) {
          return _this6.store.resolve(elem);
        }),
        stop: _mapInstanceProperty(_context29 = cursor.stop || []).call(_context29, function (elem) {
          return _this6.store.resolve(elem);
        })
      };
    }
  }, {
    key: "adjust",
    value: function adjust(tempo) {}
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
exports.clamp = _clamp;
exports.compose = compose;
exports.gcd = gcd;
exports.invlerp = invlerp;
exports.lerp = lerp;
exports.notesIn = notesIn;
exports.notesInChord = notesInChord;
exports.notesInScale = notesInScale;
exports.notesIntersect = notesIntersect;
exports.notesOf = notesOf;
exports.scaleToString = scaleToString;
exports.scaleify = scaleify;
exports.steps = steps;
exports.timesOf = timesOf;
exports.unitsOf = unitsOf;
exports.valid = valid;
exports.validate = validate;
