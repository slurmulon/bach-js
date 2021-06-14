'use strict';

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _forEachInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

var _toConsumableArray = require("@babel/runtime-corejs3/helpers/toConsumableArray");

var _classCallCheck = require("@babel/runtime-corejs3/helpers/classCallCheck");

var _createClass = require("@babel/runtime-corejs3/helpers/createClass");

var _defineProperty = require("@babel/runtime-corejs3/helpers/defineProperty");

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

var _everyInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _Object$keys = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$values = require("@babel/runtime-corejs3/core-js-stable/object/values");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _reduceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _Object$entries = require("@babel/runtime-corejs3/core-js-stable/object/entries");

var _findInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _reverseInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/reverse");

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context31; _forEachInstanceProperty(_context31 = ownKeys(Object(source), true)).call(_context31, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context32; _forEachInstanceProperty(_context32 = ownKeys(Object(source))).call(_context32, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
}

var unitsOf = function unitsOf(source) {
  var _source$units = source.units,
      beat = _source$units.beat,
      bar = _source$units.bar,
      time = _source$units.time;
  return durationsOf({
    step: 1,
    pulse: 1 / (beat.step / beat.pulse),
    bar: bar.step,
    ms: 1 / time.step,
    second: 1 / time.step * 1000
  });
};

var timesOf = function timesOf(source) {
  source.units;
  return durationsOf(_objectSpread({
    ms: 1,
    second: 1000
  }, source.units.time));
};

var durationsOf = function durationsOf(units) {
  var step = units.step,
      pulse = units.pulse,
      bar = units.bar;
  return _objectSpread(_objectSpread({}, units), {}, {
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
  });
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
    key: "unitize",
    value: function unitize(duration) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$is = _ref2.is,
          is = _ref2$is === void 0 ? 'step' : _ref2$is,
          _ref2$as = _ref2.as,
          as = _ref2$as === void 0 ? 'pulse' : _ref2$as;

      return duration / (this.units[as] / this.units[is]);
    }
  }, {
    key: "metronize",
    value: function metronize(duration) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$is = _ref3.is,
          is = _ref3$is === void 0 ? 'ms' : _ref3$is,
          _ref3$as = _ref3.as,
          as = _ref3$as === void 0 ? 'pulse' : _ref3$as;

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
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$is = _ref4.is,
          is = _ref4$is === void 0 ? 'step' : _ref4$is,
          _ref4$min = _ref4.min,
          min = _ref4$min === void 0 ? 0 : _ref4$min,
          max = _ref4.max;

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
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$is = _ref5.is,
          is = _ref5$is === void 0 ? 'step' : _ref5$is,
          _ref5$min = _ref5.min,
          min = _ref5$min === void 0 ? 0 : _ref5$min,
          max = _ref5.max;

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
      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$is = _ref6.is,
          is = _ref6$is === void 0 ? 'step' : _ref6$is,
          _ref6$min = _ref6.min,
          min = _ref6$min === void 0 ? 0 : _ref6$min,
          max = _ref6.max;

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
    } // TODO: Either replace or improve via inspiration with this:
    // @see: https://tonejs.github.io/docs/r13/Time#quantize

  }, {
    key: "rhythmic",
    value: function rhythmic(duration) {
      var _context8,
          _this = this;

      var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref9$is = _ref9.is,
          is = _ref9$is === void 0 ? 'ms' : _ref9$is,
          _ref9$units = _ref9.units,
          units = _ref9$units === void 0 ? ['8n', '4n'] : _ref9$units,
          _ref9$calc = _ref9.calc,
          calc = _ref9$calc === void 0 ? 'floor' : _ref9$calc,
          _ref9$size = _ref9.size,
          size = _ref9$size === void 0 ? 'min' : _ref9$size;

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
    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        source = _ref10.source,
        store = _ref10.store,
        cast = _ref10.cast;

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
        return _everyInstanceProperty(_this2).call(_this2, kind);
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
      var _context11;

      return _mapInstanceProperty(_context11 = this.all).call(_context11, function (elem) {
        return elem.value;
      });
    }
  }, {
    key: "ids",
    get: function get() {
      var _context12;

      return _mapInstanceProperty(_context12 = this.all).call(_context12, function (elem) {
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
      var _context13;

      return _everyInstanceProperty(_context13 = this).call(_context13, kind)[0];
    }
  }, {
    key: "every",
    value: function every(kind) {
      var _context14;

      return _mapInstanceProperty(_context14 = _Object$values(this.data[kind])).call(_context14, function (elem) {
        return new Element(elem);
      });
    }
  }, {
    key: "resolve",
    value: function resolve(elem) {
      var _this3 = this;

      // FIXME: Use json-schema validator here instead to support cross-context typing (instanceof doesn't work from workers etc.)
      // if (elem instanceof Element) return elem
      if (_typeof(elem) === 'object') return elem;
      if (typeof elem === 'string') return this.get(elem);
      if (_Array$isArray(elem)) return _mapInstanceProperty(elem).call(elem, function (el) {
        return _this3.get(el);
      });
      if (elem == null) return null; // if (typeof elem === 'object') return new Element(this.cast(elem))

      throw TypeError('Failed to resolve element due to unsupported data type');
    } // TODO: Rename to `insert`

  }, {
    key: "register",
    value: function register(_ref11) {
      var _context15;

      var kind = _ref11.kind,
          value = _ref11.value,
          props = _ref11.props;
      if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
      if (value == null) throw TypeError('value must be defined and non-null');
      var elem = bach.elementize(kind, _concatInstanceProperty(_context15 = [value]).call(_context15, _toConsumableArray(props)));
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
      var _context16;

      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
        return _;
      };
      if (!elements) return null; // TODO: Validate element shape with JSON Schema

      return _reduceInstanceProperty(_context16 = _Object$entries(elements)).call(_context16, function (acc, _ref12) {
        var _context17;

        var _ref13 = _slicedToArray(_ref12, 2),
            kind = _ref13[0],
            ids = _ref13[1];

        var elems = _reduceInstanceProperty(_context17 = _Object$entries(ids)).call(_context17, function (acc, _ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              id = _ref15[0],
              elem = _ref15[1];

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
      var _context18,
          _this4 = this;

      return _mapInstanceProperty(_context18 = this.data.items).call(_context18, function (item) {
        var _context19;

        return _objectSpread(_objectSpread({}, item), {}, {
          elements: _mapInstanceProperty(_context19 = item.elements).call(_context19, function (elem) {
            return _this4.store.resolve(elem);
          })
        });
      });
    }
  }, {
    key: "elements",
    get: function get() {
      var _context20,
          _this5 = this;

      return _flatMapInstanceProperty(_context20 = this.data.items).call(_context20, function (_ref16) {
        var elements = _ref16.elements;
        return _mapInstanceProperty(elements).call(elements, function (elem) {
          return _this5.store.resolve(elem);
        });
      });
    }
  }, {
    key: "kinds",
    get: function get() {
      return this.all(function (_ref17) {
        var kind = _ref17.kind;
        return kind;
      });
    }
  }, {
    key: "values",
    get: function get() {
      return this.all(function (_ref18) {
        var value = _ref18.value;
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
      var _context21;

      return _reduceInstanceProperty(_context21 = this.elements).call(_context21, function (parts, elem) {
        return _objectSpread(_objectSpread({}, parts), {}, _defineProperty({}, elem.kind, elem));
      }, {});
    }
  }, {
    key: "musical",
    get: function get() {
      var _context22;

      return _everyInstanceProperty(_context22 = this.elements).call(_context22, function (elem) {
        return elem.musical;
      });
    }
  }, {
    key: "all",
    value: function all() {
      var _context23;

      var cast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
        return _;
      };
      return _toConsumableArray(new _Set(_mapInstanceProperty(_context23 = this.elements).call(_context23, cast)));
    }
  }, {
    key: "find",
    value: function find(kind) {
      var _context24;

      return _findInstanceProperty(_context24 = this.elements).call(_context24, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "filter",
    value: function filter(kind) {
      var _context25;

      return _filterInstanceProperty(_context25 = this.elements).call(_context25, function (elem) {
        return kind === elem.kind;
      });
    }
  }, {
    key: "last",
    value: function last(kind) {
      var _context26, _context27;

      return _reverseInstanceProperty(_context26 = _filterInstanceProperty(_context27 = this).call(_context27, kind)).call(_context26)[0];
    }
  }, {
    key: "either",
    value: function either(kinds) {
      var _this6 = this;

      return _reduceInstanceProperty(kinds).call(kinds, function (acc, kind) {
        return acc.length ? acc : _filterInstanceProperty(_this6).call(_this6, kind);
      }, []);
    }
  }, {
    key: "notesOf",
    value: function notesOf(elements) {
      return Note.unite(_flatMapInstanceProperty(elements).call(elements, function (_ref19) {
        var notes = _ref19.notes;
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
      var _context28;

      return Note.unite(_flatMapInstanceProperty(_context28 = this.beats).call(_context28, function (beat) {
        var _context29;

        return _flatMapInstanceProperty(_context29 = beat.elements).call(_context29, function (_ref20) {
          var notes = _ref20.notes;
          return notes;
        });
      }));
    }
  }, {
    key: "musical",
    get: function get() {
      var _context30;

      return _everyInstanceProperty(_context30 = this.beats).call(_context30, function (beat) {
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
exports.durationsOf = durationsOf;
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
