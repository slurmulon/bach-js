var _indexOfInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/index-of");

var _sliceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _filterInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/filter");

var _mapInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/map");

var _bindInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/bind");

var _reduceInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/reduce");

var _forEachInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/for-each");

var _concatInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/concat");

var _trimInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/trim");

var _keysInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/keys");

var _includesInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/includes");

var _sortInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/sort");

var _flatMapInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/flat-map");

var _valuesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/values");

var _entriesInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/entries");

var _everyInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/every");

var _findInstanceProperty2 = require("@babel/runtime-corejs3/core-js-stable/instance/find");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$keys2 = require("@babel/runtime-corejs3/core-js-stable/object/keys");

var _Object$getOwnPropertySymbols = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _Object$getOwnPropertyDescriptors = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors");

var _Object$defineProperties = require("@babel/runtime-corejs3/core-js-stable/object/define-properties");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime-corejs3/helpers/defineProperty", "@babel/runtime-corejs3/helpers/toArray", "@babel/runtime-corejs3/helpers/toConsumableArray", "@babel/runtime-corejs3/helpers/classCallCheck", "@babel/runtime-corejs3/helpers/createClass", "@babel/runtime-corejs3/helpers/slicedToArray", "@babel/runtime-corejs3/helpers/typeof", "@babel/runtime-corejs3/core-js-stable/instance/index-of", "@babel/runtime-corejs3/core-js-stable/instance/slice", "@babel/runtime-corejs3/core-js-stable/instance/filter", "@babel/runtime-corejs3/core-js-stable/instance/map", "@babel/runtime-corejs3/core-js-stable/instance/bind", "@babel/runtime-corejs3/core-js-stable/instance/reduce", "@babel/runtime-corejs3/core-js-stable/instance/for-each", "@babel/runtime-corejs3/core-js-stable/instance/concat", "@babel/runtime-corejs3/core-js-stable/instance/trim", "@babel/runtime-corejs3/core-js-stable/object/keys", "@babel/runtime-corejs3/core-js-stable/instance/includes", "@babel/runtime-corejs3/core-js-stable/set", "@babel/runtime-corejs3/core-js-stable/instance/sort", "@babel/runtime-corejs3/core-js-stable/instance/flat-map", "@babel/runtime-corejs3/core-js-stable/object/values", "@babel/runtime-corejs3/core-js-stable/object/entries", "@babel/runtime-corejs3/core-js-stable/instance/every", "@babel/runtime-corejs3/core-js-stable/instance/find", "@babel/runtime-corejs3/core-js-stable/array/is-array"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime-corejs3/helpers/defineProperty"), require("@babel/runtime-corejs3/helpers/toArray"), require("@babel/runtime-corejs3/helpers/toConsumableArray"), require("@babel/runtime-corejs3/helpers/classCallCheck"), require("@babel/runtime-corejs3/helpers/createClass"), require("@babel/runtime-corejs3/helpers/slicedToArray"), require("@babel/runtime-corejs3/helpers/typeof"), require("@babel/runtime-corejs3/core-js-stable/instance/index-of"), require("@babel/runtime-corejs3/core-js-stable/instance/slice"), require("@babel/runtime-corejs3/core-js-stable/instance/filter"), require("@babel/runtime-corejs3/core-js-stable/instance/map"), require("@babel/runtime-corejs3/core-js-stable/instance/bind"), require("@babel/runtime-corejs3/core-js-stable/instance/reduce"), require("@babel/runtime-corejs3/core-js-stable/instance/for-each"), require("@babel/runtime-corejs3/core-js-stable/instance/concat"), require("@babel/runtime-corejs3/core-js-stable/instance/trim"), require("@babel/runtime-corejs3/core-js-stable/object/keys"), require("@babel/runtime-corejs3/core-js-stable/instance/includes"), require("@babel/runtime-corejs3/core-js-stable/set"), require("@babel/runtime-corejs3/core-js-stable/instance/sort"), require("@babel/runtime-corejs3/core-js-stable/instance/flat-map"), require("@babel/runtime-corejs3/core-js-stable/object/values"), require("@babel/runtime-corejs3/core-js-stable/object/entries"), require("@babel/runtime-corejs3/core-js-stable/instance/every"), require("@babel/runtime-corejs3/core-js-stable/instance/find"), require("@babel/runtime-corejs3/core-js-stable/array/is-array"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.toArray, global.toConsumableArray, global.classCallCheck, global.createClass, global.slicedToArray, global._typeof, _indexOfInstanceProperty2(global), _sliceInstanceProperty2(global), _filterInstanceProperty2(global), _mapInstanceProperty2(global), _bindInstanceProperty2(global), _reduceInstanceProperty2(global), _forEachInstanceProperty2(global), _concatInstanceProperty2(global), _trimInstanceProperty2(global), _keysInstanceProperty(global), _includesInstanceProperty2(global), global.set, _sortInstanceProperty2(global), _flatMapInstanceProperty2(global), _valuesInstanceProperty(global), _entriesInstanceProperty(global), _everyInstanceProperty2(global), _findInstanceProperty2(global), global.isArray);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _defineProperty2, _toArray2, _toConsumableArray2, _classCallCheck2, _createClass2, _slicedToArray2, _typeof2, _indexOf, _slice, _filter, _map, _bind, _reduce, _forEach, _concat, _trim, _keys, _includes, _set, _sort, _flatMap, _values, _entries, _every, _find, _isArray) {
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
  _exports.unitsOf = _exports.timesOf = _exports.notesOf = _exports.compose = _exports.Note = _exports.Music = _exports.MUSICAL_ELEMENTS = _exports.Elements = _exports.Element = _exports.Durations = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _toArray2 = _interopRequireDefault(_toArray2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _indexOf = _interopRequireDefault(_indexOf);
  _slice = _interopRequireDefault(_slice);
  _filter = _interopRequireDefault(_filter);
  _map = _interopRequireDefault(_map);
  _bind = _interopRequireDefault(_bind);
  _reduce = _interopRequireDefault(_reduce);
  _forEach = _interopRequireDefault(_forEach);
  _concat = _interopRequireDefault(_concat);
  _trim = _interopRequireDefault(_trim);
  _keys = _interopRequireDefault(_keys);
  _includes = _interopRequireDefault(_includes);
  _set = _interopRequireDefault(_set);
  _sort = _interopRequireDefault(_sort);
  _flatMap = _interopRequireDefault(_flatMap);
  _values = _interopRequireDefault(_values);
  _entries = _interopRequireDefault(_entries);
  _every = _interopRequireDefault(_every);
  _find = _interopRequireDefault(_find);
  _isArray = _interopRequireDefault(_isArray);

  function ownKeys(object, enumerableOnly) { var keys = _Object$keys2(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) { symbols = _filterInstanceProperty2(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context45; _forEachInstanceProperty2(_context45 = ownKeys(Object(source), true)).call(_context45, function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context46; _forEachInstanceProperty2(_context46 = ownKeys(Object(source))).call(_context46, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  } // First coord is octaves, second is fifths. Distances are relative to c


  var notes = {
    c: [0, 0],
    d: [-1, 2],
    e: [-2, 4],
    f: [1, -1],
    g: [0, 1],
    a: [-1, 3],
    b: [-2, 5],
    h: [-2, 5]
  };

  var notecoord = function notecoord(name) {
    return name in notes ? [notes[name][0], notes[name][1]] : null;
  };

  var notes_1 = notes;
  var A4 = [3, 3]; // Relative to C0 (scientic notation, ~16.35Hz)

  var sharp$1 = [-4, 7];
  notecoord.notes = notes_1;
  notecoord.A4 = A4;
  notecoord.sharp = sharp$1;
  var accidentalValues = {
    'bb': -2,
    'b': -1,
    '': 0,
    '#': 1,
    'x': 2
  };

  var accidentalValue = function accidentalNumber(acc) {
    return accidentalValues[acc];
  };

  var interval$1 = function accidentalInterval(acc) {
    var val = accidentalValues[acc];
    return [-4 * val, 7 * val];
  };

  accidentalValue.interval = interval$1;

  var scientificNotation = function scientific(name) {
    var format = /^([a-h])(x|#|bb|b?)(-?\d*)/i;
    var parser = name.match(format);
    if (!(parser && name === parser[0] && parser[3].length)) return;
    var noteName = parser[1];
    var octave = +parser[3];
    var accidental = parser[2].length ? parser[2].toLowerCase() : '';
    var accidentalValue$1 = accidentalValue.interval(accidental);
    var coord = notecoord(noteName.toLowerCase());
    coord[0] += octave;
    coord[0] += accidentalValue$1[0] - notecoord.A4[0];
    coord[1] += accidentalValue$1[1] - notecoord.A4[1];
    return coord;
  };

  var helmholtz = function helmholtz(name) {
    var name = name.replace(/\u2032/g, "'").replace(/\u0375/g, ',');
    var parts = name.match(/^(,*)([a-h])(x|#|bb|b?)([,\']*)$/i);
    if (!parts || name !== parts[0]) throw new Error('Invalid formatting');
    var note = parts[2];
    var octaveFirst = parts[1];
    var octaveLast = parts[4];
    var lower = note === note.toLowerCase();
    var octave;

    if (octaveFirst) {
      if (lower) throw new Error('Invalid formatting - found commas before lowercase note');
      octave = 2 - octaveFirst.length;
    } else if (octaveLast) {
      if (octaveLast.match(/^'+$/) && lower) octave = 3 + octaveLast.length;else if (octaveLast.match(/^,+$/) && !lower) octave = 2 - octaveLast.length;else throw new Error('Invalid formatting - mismatch between octave ' + 'indicator and letter case');
    } else octave = lower ? 3 : 2;

    var accidentalValue$1 = accidentalValue.interval(parts[3].toLowerCase());
    var coord = notecoord(note.toLowerCase());
    coord[0] += octave;
    coord[0] += accidentalValue$1[0] - notecoord.A4[0];
    coord[1] += accidentalValue$1[1] - notecoord.A4[1];
    return coord;
  };

  var pitchFq = function pitchFq(coord, stdPitch) {
    if (typeof coord === 'number') {
      stdPitch = coord;
      return function (coord) {
        return stdPitch * Math.pow(2, (coord[0] * 12 + coord[1] * 7) / 12);
      };
    }

    stdPitch = stdPitch || 440;
    return stdPitch * Math.pow(2, (coord[0] * 12 + coord[1] * 7) / 12);
  }; // Note coordinates [octave, fifth] relative to C


  var knowledge = {
    notes: {
      c: [0, 0],
      d: [-1, 2],
      e: [-2, 4],
      f: [1, -1],
      g: [0, 1],
      a: [-1, 3],
      b: [-2, 5],
      h: [-2, 5]
    },
    intervals: {
      unison: [0, 0],
      second: [3, -5],
      third: [2, -3],
      fourth: [1, -1],
      fifth: [0, 1],
      sixth: [3, -4],
      seventh: [2, -2],
      octave: [1, 0]
    },
    intervalFromFifth: ['second', 'sixth', 'third', 'seventh', 'fourth', 'unison', 'fifth'],
    intervalsIndex: ['unison', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'octave', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth'],
    // linear index to fifth = (2 * index + 1) % 7
    fifths: ['f', 'c', 'g', 'd', 'a', 'e', 'b'],
    accidentals: ['bb', 'b', '', '#', 'x'],
    sharp: [-4, 7],
    A4: [3, 3],
    durations: {
      '0.25': 'longa',
      '0.5': 'breve',
      '1': 'whole',
      '2': 'half',
      '4': 'quarter',
      '8': 'eighth',
      '16': 'sixteenth',
      '32': 'thirty-second',
      '64': 'sixty-fourth',
      '128': 'hundred-twenty-eighth'
    },
    qualityLong: {
      P: 'perfect',
      M: 'major',
      m: 'minor',
      A: 'augmented',
      AA: 'doubly augmented',
      d: 'diminished',
      dd: 'doubly diminished'
    },
    alterations: {
      perfect: ['dd', 'd', 'P', 'A', 'AA'],
      minor: ['dd', 'd', 'm', 'M', 'A', 'AA']
    },
    symbols: {
      'min': ['m3', 'P5'],
      'm': ['m3', 'P5'],
      '-': ['m3', 'P5'],
      'M': ['M3', 'P5'],
      '': ['M3', 'P5'],
      '+': ['M3', 'A5'],
      'aug': ['M3', 'A5'],
      'dim': ['m3', 'd5'],
      'o': ['m3', 'd5'],
      'maj': ['M3', 'P5', 'M7'],
      'dom': ['M3', 'P5', 'm7'],
      'ø': ['m3', 'd5', 'm7'],
      '5': ['P5']
    },
    chordShort: {
      'major': 'M',
      'minor': 'm',
      'augmented': 'aug',
      'diminished': 'dim',
      'half-diminished': '7b5',
      'power': '5',
      'dominant': '7'
    },
    stepNumber: {
      'unison': 1,
      'first': 1,
      'second': 2,
      'third': 3,
      'fourth': 4,
      'fifth': 5,
      'sixth': 6,
      'seventh': 7,
      'octave': 8,
      'ninth': 9,
      'eleventh': 11,
      'thirteenth': 13
    },
    // Adjusted Shearer syllables - Chromatic solfege system
    // Some intervals are not provided for. These include:
    // dd2 - Doubly diminished second
    // dd3 - Doubly diminished third
    // AA3 - Doubly augmented third
    // dd6 - Doubly diminished sixth
    // dd7 - Doubly diminished seventh
    // AA7 - Doubly augmented seventh
    intervalSolfege: {
      'dd1': 'daw',
      'd1': 'de',
      'P1': 'do',
      'A1': 'di',
      'AA1': 'dai',
      'd2': 'raw',
      'm2': 'ra',
      'M2': 're',
      'A2': 'ri',
      'AA2': 'rai',
      'd3': 'maw',
      'm3': 'me',
      'M3': 'mi',
      'A3': 'mai',
      'dd4': 'faw',
      'd4': 'fe',
      'P4': 'fa',
      'A4': 'fi',
      'AA4': 'fai',
      'dd5': 'saw',
      'd5': 'se',
      'P5': 'so',
      'A5': 'si',
      'AA5': 'sai',
      'd6': 'law',
      'm6': 'le',
      'M6': 'la',
      'A6': 'li',
      'AA6': 'lai',
      'd7': 'taw',
      'm7': 'te',
      'M7': 'ti',
      'A7': 'tai',
      'dd8': 'daw',
      'd8': 'de',
      'P8': 'do',
      'A8': 'di',
      'AA8': 'dai'
    }
  };
  var vector = {
    add: function add(note, interval) {
      return [note[0] + interval[0], note[1] + interval[1]];
    },
    sub: function sub(note, interval) {
      return [note[0] - interval[0], note[1] - interval[1]];
    },
    mul: function mul(note, interval) {
      if (typeof interval === 'number') return [note[0] * interval, note[1] * interval];else return [note[0] * interval[0], note[1] * interval[1]];
    },
    sum: function sum(coord) {
      return coord[0] + coord[1];
    }
  };
  var pattern = /^(AA|A|P|M|m|d|dd)(-?\d+)$/; // The interval it takes to raise a note a semitone

  var sharp = [-4, 7];
  var pAlts = ['dd', 'd', 'P', 'A', 'AA'];
  var mAlts = ['dd', 'd', 'm', 'M', 'A', 'AA'];
  var baseIntervals = [[0, 0], [3, -5], [2, -3], [1, -1], [0, 1], [3, -4], [2, -2], [1, 0]];

  var intervalCoords = function intervalCoords(simple) {
    var parser = simple.match(pattern);
    if (!parser) return null;
    var quality = parser[1];
    var number = +parser[2];
    var sign = number < 0 ? -1 : 1;
    number = sign < 0 ? -number : number;
    var lower = number > 8 ? number % 7 || 7 : number;
    var octaves = (number - lower) / 7;
    var base = baseIntervals[lower - 1];
    var alts = base[0] <= 1 ? pAlts : mAlts;
    var alt = (0, _indexOf["default"])(alts).call(alts, quality) - 2; // this happens, if the alteration wasn't suitable for this type
    // of interval, such as P2 or M5 (no "perfect second" or "major fifth")

    if (alt === -3) return null;
    return [sign * (base[0] + octaves + sharp[0] * alt), sign * (base[1] + sharp[1] * alt)];
  }; // Copy to avoid overwriting internal base intervals


  var coords = (0, _slice["default"])(baseIntervals).call(baseIntervals, 0);
  intervalCoords.coords = coords;

  function Interval(coord) {
    if (!(this instanceof Interval)) return new Interval(coord);
    this.coord = coord;
  }

  Interval.prototype = {
    name: function name() {
      return knowledge.intervalsIndex[this.number() - 1];
    },
    semitones: function semitones() {
      return vector.sum(vector.mul(this.coord, [12, 7]));
    },
    number: function number() {
      return Math.abs(this.value());
    },
    value: function value() {
      var toMultiply = Math.floor((this.coord[1] - 2) / 7) + 1;
      var product = vector.mul(knowledge.sharp, toMultiply);
      var without = vector.sub(this.coord, product);
      var i = knowledge.intervalFromFifth[without[1] + 5];
      var diff = without[0] - knowledge.intervals[i][0];
      var val = knowledge.stepNumber[i] + diff * 7;
      return val > 0 ? val : val - 2;
    },
    type: function type() {
      return knowledge.intervals[this.base()][0] <= 1 ? 'perfect' : 'minor';
    },
    base: function base() {
      var product = vector.mul(knowledge.sharp, this.qualityValue());
      var fifth = vector.sub(this.coord, product)[1];
      fifth = this.value() > 0 ? fifth + 5 : -(fifth - 5) % 7;
      fifth = fifth < 0 ? knowledge.intervalFromFifth.length + fifth : fifth;
      var name = knowledge.intervalFromFifth[fifth];
      if (name === 'unison' && this.number() >= 8) name = 'octave';
      return name;
    },
    direction: function direction(dir) {
      if (dir) {
        var is = this.value() >= 1 ? 'up' : 'down';
        if (is !== dir) this.coord = vector.mul(this.coord, -1);
        return this;
      } else return this.value() >= 1 ? 'up' : 'down';
    },
    simple: function simple(ignore) {
      // Get the (upwards) base interval (with quality)
      var simple = knowledge.intervals[this.base()];
      var toAdd = vector.mul(knowledge.sharp, this.qualityValue());
      simple = vector.add(simple, toAdd); // Turn it around if necessary

      if (!ignore) simple = this.direction() === 'down' ? vector.mul(simple, -1) : simple;
      return new Interval(simple);
    },
    isCompound: function isCompound() {
      return this.number() > 8;
    },
    octaves: function octaves() {
      var toSubtract, without, octaves;

      if (this.direction() === 'up') {
        toSubtract = vector.mul(knowledge.sharp, this.qualityValue());
        without = vector.sub(this.coord, toSubtract);
        octaves = without[0] - knowledge.intervals[this.base()][0];
      } else {
        toSubtract = vector.mul(knowledge.sharp, -this.qualityValue());
        without = vector.sub(this.coord, toSubtract);
        octaves = -(without[0] + knowledge.intervals[this.base()][0]);
      }

      return octaves;
    },
    invert: function invert() {
      var i = this.base();
      var qual = this.qualityValue();
      var acc = this.type() === 'minor' ? -(qual - 1) : -qual;
      var idx = 9 - knowledge.stepNumber[i] - 1;
      var coord = knowledge.intervals[knowledge.intervalsIndex[idx]];
      coord = vector.add(coord, vector.mul(knowledge.sharp, acc));
      return new Interval(coord);
    },
    quality: function quality(lng) {
      var quality = knowledge.alterations[this.type()][this.qualityValue() + 2];
      return lng ? knowledge.qualityLong[quality] : quality;
    },
    qualityValue: function qualityValue() {
      if (this.direction() === 'down') return Math.floor((-this.coord[1] - 2) / 7) + 1;else return Math.floor((this.coord[1] - 2) / 7) + 1;
    },
    equal: function equal(interval) {
      return this.coord[0] === interval.coord[0] && this.coord[1] === interval.coord[1];
    },
    greater: function greater(interval) {
      var semi = this.semitones();
      var isemi = interval.semitones(); // If equal in absolute size, measure which interval is bigger
      // For example P4 is bigger than A3

      return semi === isemi ? this.number() > interval.number() : semi > isemi;
    },
    smaller: function smaller(interval) {
      return !this.equal(interval) && !this.greater(interval);
    },
    add: function add(interval) {
      return new Interval(vector.add(this.coord, interval.coord));
    },
    toString: function toString(ignore) {
      // If given true, return the positive value
      var number = ignore ? this.number() : this.value();
      return this.quality() + number;
    }
  };

  Interval.toCoord = function (simple) {
    var coord = intervalCoords(simple);
    if (!coord) throw new Error('Invalid simple format interval');
    return new Interval(coord);
  };

  Interval.from = function (from, to) {
    return from.interval(to);
  };

  Interval.between = function (from, to) {
    return new Interval(vector.sub(to.coord, from.coord));
  };

  Interval.invert = function (sInterval) {
    return Interval.toCoord(sInterval).invert().toString();
  };

  var _interval = Interval;

  function pad(str, ch, len) {
    for (; len > 0; len--) {
      str += ch;
    }

    return str;
  }

  function Note$1(coord, duration) {
    if (!(this instanceof Note$1)) return new Note$1(coord, duration);
    duration = duration || {};
    this.duration = {
      value: duration.value || 4,
      dots: duration.dots || 0
    };
    this.coord = coord;
  }

  Note$1.prototype = {
    octave: function octave() {
      return this.coord[0] + knowledge.A4[0] - knowledge.notes[this.name()][0] + this.accidentalValue() * 4;
    },
    name: function name() {
      var value = this.accidentalValue();
      var idx = this.coord[1] + knowledge.A4[1] - value * 7 + 1;
      return knowledge.fifths[idx];
    },
    accidentalValue: function accidentalValue() {
      return Math.round((this.coord[1] + knowledge.A4[1] - 2) / 7);
    },
    accidental: function accidental() {
      return knowledge.accidentals[this.accidentalValue() + 2];
    },

    /**
     * Returns the key number of the note
     */
    key: function key(white) {
      if (white) return this.coord[0] * 7 + this.coord[1] * 4 + 29;else return this.coord[0] * 12 + this.coord[1] * 7 + 49;
    },

    /**
    * Returns a number ranging from 0-127 representing a MIDI note value
    */
    midi: function midi() {
      return this.key() + 20;
    },

    /**
     * Calculates and returns the frequency of the note.
     * Optional concert pitch (def. 440)
     */
    fq: function fq(concertPitch) {
      return pitchFq(this.coord, concertPitch);
    },

    /**
     * Returns the pitch class index (chroma) of the note
     */
    chroma: function chroma() {
      var value = (vector.sum(vector.mul(this.coord, [12, 7])) - 3) % 12;
      return value < 0 ? value + 12 : value;
    },
    interval: function interval(interval$1) {
      if (typeof interval$1 === 'string') interval$1 = _interval.toCoord(interval$1);
      if (interval$1 instanceof _interval) return new Note$1(vector.add(this.coord, interval$1.coord), this.duration);else if (interval$1 instanceof Note$1) return new _interval(vector.sub(interval$1.coord, this.coord));
    },
    transpose: function transpose(interval) {
      this.coord = vector.add(this.coord, interval.coord);
      return this;
    },

    /**
     * Returns the Helmholtz notation form of the note (fx C,, d' F# g#'')
     */
    helmholtz: function helmholtz() {
      var octave = this.octave();
      var name = this.name();
      name = octave < 3 ? name.toUpperCase() : name.toLowerCase();
      var padchar = octave < 3 ? ',' : '\'';
      var padcount = octave < 2 ? 2 - octave : octave - 3;
      return pad(name + this.accidental(), padchar, padcount);
    },

    /**
     * Returns the scientific notation form of the note (fx E4, Bb3, C#7 etc.)
     */
    scientific: function scientific() {
      return this.name().toUpperCase() + this.accidental() + this.octave();
    },

    /**
     * Returns notes that are enharmonic with this note.
     */
    enharmonics: function enharmonics(oneaccidental) {
      var _context, _context2, _context3;

      var key = this.key(),
          limit = oneaccidental ? 2 : 3;
      return (0, _filter["default"])(_context = (0, _map["default"])(_context2 = ['m3', 'm2', 'm-2', 'm-3']).call(_context2, (0, _bind["default"])(_context3 = this.interval).call(_context3, this))).call(_context, function (note) {
        var acc = note.accidentalValue();
        var diff = key - (note.key() - acc);

        if (diff < limit && diff > -limit) {
          var product = vector.mul(knowledge.sharp, diff - acc);
          note.coord = vector.add(note.coord, product);
          return true;
        }
      });
    },
    solfege: function solfege(scale, showOctaves) {
      var interval = scale.tonic.interval(this),
          solfege,
          stroke,
          count;
      if (interval.direction() === 'down') interval = interval.invert();

      if (showOctaves) {
        count = (this.key(true) - scale.tonic.key(true)) / 7;
        count = count >= 0 ? Math.floor(count) : -Math.ceil(-count);
        stroke = count >= 0 ? '\'' : ',';
      }

      solfege = knowledge.intervalSolfege[interval.simple(true).toString()];
      return showOctaves ? pad(solfege, stroke, Math.abs(count)) : solfege;
    },
    scaleDegree: function scaleDegree(scale) {
      var _context4;

      var inter = scale.tonic.interval(this); // If the direction is down, or we're dealing with an octave - invert it

      if (inter.direction() === 'down' || inter.coord[1] === 0 && inter.coord[0] !== 0) {
        inter = inter.invert();
      }

      inter = inter.simple(true).coord;
      return (0, _reduce["default"])(_context4 = scale.scale).call(_context4, function (index, current, i) {
        var coord = _interval.toCoord(current).coord;

        return coord[0] === inter[0] && coord[1] === inter[1] ? i + 1 : index;
      }, 0);
    },

    /**
     * Returns the name of the duration value,
     * such as 'whole', 'quarter', 'sixteenth' etc.
     */
    durationName: function durationName() {
      return knowledge.durations[this.duration.value];
    },

    /**
     * Returns the duration of the note (including dots)
     * in seconds. The first argument is the tempo in beats
     * per minute, the second is the beat unit (i.e. the
     * lower numeral in a time signature).
     */
    durationInSeconds: function durationInSeconds(bpm, beatUnit) {
      var secs = 60 / bpm / (this.duration.value / 4) / (beatUnit / 4);
      return secs * 2 - secs / Math.pow(2, this.duration.dots);
    },

    /**
     * Returns the name of the note, with an optional display of octave number
     */
    toString: function toString(dont) {
      return this.name() + this.accidental() + (dont ? '' : this.octave());
    }
  };

  Note$1.fromString = function (name, dur) {
    var coord = scientificNotation(name);
    if (!coord) coord = helmholtz(name);
    return new Note$1(coord, dur);
  };

  Note$1.fromKey = function (key) {
    var octave = Math.floor((key - 4) / 12);
    var distance = key - octave * 12 - 4;
    var name = knowledge.fifths[(2 * Math.round(distance / 2) + 1) % 7];
    var subDiff = vector.sub(knowledge.notes[name], knowledge.A4);
    var note = vector.add(subDiff, [octave + 1, 0]);
    var diff = key - 49 - vector.sum(vector.mul(note, [12, 7]));
    var arg = diff ? vector.add(note, vector.mul(knowledge.sharp, diff)) : note;
    return new Note$1(arg);
  };

  Note$1.fromFrequency = function (fq, concertPitch) {
    var key, cents, originalFq;
    concertPitch = concertPitch || 440;
    key = 49 + 12 * ((Math.log(fq) - Math.log(concertPitch)) / Math.log(2));
    key = Math.round(key);
    originalFq = concertPitch * Math.pow(2, (key - 49) / 12);
    cents = 1200 * (Math.log(fq / originalFq) / Math.log(2));
    return {
      note: Note$1.fromKey(key),
      cents: cents
    };
  };

  Note$1.fromMIDI = function (note) {
    return Note$1.fromKey(note - 20);
  };

  var note = Note$1;
  var SYMBOLS = {
    'm': ['m3', 'P5'],
    'mi': ['m3', 'P5'],
    'min': ['m3', 'P5'],
    '-': ['m3', 'P5'],
    'M': ['M3', 'P5'],
    'ma': ['M3', 'P5'],
    '': ['M3', 'P5'],
    '+': ['M3', 'A5'],
    'aug': ['M3', 'A5'],
    'dim': ['m3', 'd5'],
    'o': ['m3', 'd5'],
    'maj': ['M3', 'P5', 'M7'],
    'dom': ['M3', 'P5', 'm7'],
    'ø': ['m3', 'd5', 'm7'],
    '5': ['P5'],
    '6/9': ['M3', 'P5', 'M6', 'M9']
  };

  var daccord = function daccord(symbol) {
    var _context5;

    var c,
        parsing = 'quality',
        additionals = [],
        name,
        chordLength = 2;
    var notes = ['P1', 'M3', 'P5', 'm7', 'M9', 'P11', 'M13'];
    var explicitMajor = false;

    function setChord(name) {
      var intervals = SYMBOLS[name];

      for (var i = 0, len = intervals.length; i < len; i++) {
        notes[i + 1] = intervals[i];
      }

      chordLength = intervals.length;
    } // Remove whitespace, commas and parentheses


    symbol = symbol.replace(/[,\s\(\)]/g, '');

    for (var i = 0, len = symbol.length; i < len; i++) {
      if (!(c = symbol[i])) return;

      if (parsing === 'quality') {
        var sub3 = i + 2 < len ? symbol.substr(i, 3).toLowerCase() : null;
        var sub2 = i + 1 < len ? symbol.substr(i, 2).toLowerCase() : null;
        if (sub3 in SYMBOLS) name = sub3;else if (sub2 in SYMBOLS) name = sub2;else if (c in SYMBOLS) name = c;else name = '';
        if (name) setChord(name);
        if (name === 'M' || name === 'ma' || name === 'maj') explicitMajor = true;
        i += name.length - 1;
        parsing = 'extension';
      } else if (parsing === 'extension') {
        c = c === '1' && symbol[i + 1] ? +symbol.substr(i, 2) : +c;

        if (!isNaN(c) && c !== 6) {
          chordLength = (c - 1) / 2;
          if (chordLength !== Math.round(chordLength)) return new Error('Invalid interval extension: ' + c.toString(10));
          if (name === 'o' || name === 'dim') notes[3] = 'd7';else if (explicitMajor) notes[3] = 'M7';
          i += c >= 10 ? 1 : 0;
        } else if (c === 6) {
          notes[3] = 'M6';
          chordLength = Math.max(3, chordLength);
        } else i -= 1;

        parsing = 'alterations';
      } else if (parsing === 'alterations') {
        var alterations = symbol.substr(i).split(/(#|b|add|maj|sus|M)/i),
            flat = false,
            sharp = false;
        if (alterations.length === 1) return new Error('Invalid alteration');else if (alterations[0].length !== 0) return new Error('Invalid token: \'' + alterations[0] + '\'');
        var ignore = false;
        (0, _forEach["default"])(alterations).call(alterations, function (alt, i, arr) {
          if (ignore || !alt.length) return ignore = false;
          var next = arr[i + 1],
              lower = alt.toLowerCase();

          if (alt === 'M' || lower === 'maj') {
            if (next === '7') ignore = true;
            chordLength = Math.max(3, chordLength);
            notes[3] = 'M7';
          } else if (lower === 'sus') {
            var type = 'P4';

            if (next === '2' || next === '4') {
              ignore = true;
              if (next === '2') type = 'M2';
            }

            notes[1] = type; // Replace third with M2 or P4
          } else if (lower === 'add') {
            if (next === '9') additionals.push('M9');else if (next === '11') additionals.push('P11');else if (next === '13') additionals.push('M13');
            ignore = true;
          } else if (lower === 'b') {
            flat = true;
          } else if (lower === '#') {
            sharp = true;
          } else {
            var token = +alt,
                quality,
                intPos;
            if (isNaN(token) || String(token).length !== alt.length) return new Error('Invalid token: \'' + alt + '\'');

            if (token === 6) {
              if (sharp) notes[3] = 'A6';else if (flat) notes[3] = 'm6';else notes[3] = 'M6';
              chordLength = Math.max(3, chordLength);
              return;
            } // Calculate the position in the 'note' array


            intPos = (token - 1) / 2;
            if (chordLength < intPos) chordLength = intPos;
            if (token < 5 || token === 7 || intPos !== Math.round(intPos)) return new Error('Invalid interval alteration: ' + token);
            quality = notes[intPos][0]; // Alterate the quality of the interval according the accidentals

            if (sharp) {
              if (quality === 'd') quality = 'm';else if (quality === 'm') quality = 'M';else if (quality === 'M' || quality === 'P') quality = 'A';
            } else if (flat) {
              if (quality === 'A') quality = 'M';else if (quality === 'M') quality = 'm';else if (quality === 'm' || quality === 'P') quality = 'd';
            }

            sharp = flat = false;
            notes[intPos] = quality + token;
          }
        });
        parsing = 'ended';
      } else if (parsing === 'ended') {
        break;
      }
    }

    return (0, _concat["default"])(_context5 = (0, _slice["default"])(notes).call(notes, 0, chordLength + 1)).call(_context5, additionals);
  };

  function Chord(root, name) {
    var _context6, _context8, _context9;

    if (!(this instanceof Chord)) return new Chord(root, name);
    name = name || '';
    this.name = root.name().toUpperCase() + root.accidental() + name;
    this.symbol = name;
    this.root = root;
    this.intervals = [];
    this._voicing = [];
    var bass = name.split('/');

    if (bass.length === 2 && (0, _trim["default"])(_context6 = bass[1]).call(_context6) !== '9') {
      var _context7;

      name = bass[0];
      bass = (0, _trim["default"])(_context7 = bass[1]).call(_context7);
    } else {
      bass = null;
    }

    this.intervals = (0, _map["default"])(_context8 = daccord(name)).call(_context8, _interval.toCoord);
    this._voicing = (0, _slice["default"])(_context9 = this.intervals).call(_context9);

    if (bass) {
      var intervals = this.intervals,
          bassInterval,
          note$1; // Make sure the bass is atop of the root note

      note$1 = note.fromString(bass + (root.octave() + 1)); // crude

      bassInterval = _interval.between(root, note$1);
      bass = bassInterval.simple();
      bassInterval = bassInterval.invert().direction('down');
      this._voicing = [bassInterval];

      for (var i = 0, length = intervals.length; i < length; i++) {
        if (!intervals[i].simple().equal(bass)) this._voicing.push(intervals[i]);
      }
    }
  }

  Chord.prototype = {
    notes: function notes() {
      var _context10;

      var root = this.root;
      return (0, _map["default"])(_context10 = this.voicing()).call(_context10, function (interval) {
        return root.interval(interval);
      });
    },
    simple: function simple() {
      var _context11;

      return (0, _map["default"])(_context11 = this.notes()).call(_context11, function (n) {
        return n.toString(true);
      });
    },
    bass: function bass() {
      return this.root.interval(this._voicing[0]);
    },
    voicing: function voicing(_voicing) {
      // Get the voicing
      if (!_voicing) {
        return this._voicing;
      } // Set the voicing


      this._voicing = [];

      for (var i = 0, length = _voicing.length; i < length; i++) {
        this._voicing[i] = _interval.toCoord(_voicing[i]);
      }

      return this;
    },
    resetVoicing: function resetVoicing() {
      this._voicing = this.intervals;
    },
    dominant: function dominant(additional) {
      additional = additional || '';
      return new Chord(this.root.interval('P5'), additional);
    },
    subdominant: function subdominant(additional) {
      additional = additional || '';
      return new Chord(this.root.interval('P4'), additional);
    },
    parallel: function parallel(additional) {
      var quality = this.quality();

      if (this.chordType() !== 'triad' || quality === 'diminished' || quality === 'augmented') {
        throw new Error('Only major/minor triads have parallel chords');
      }

      if (quality === 'major') {
        return new Chord(this.root.interval('m3', 'down'), 'm');
      } else {
        return new Chord(this.root.interval('m3', 'up'));
      }
    },
    quality: function quality() {
      var third,
          fifth,
          seventh,
          intervals = this.intervals;

      for (var i = 0, length = intervals.length; i < length; i++) {
        if (intervals[i].number() === 3) {
          third = intervals[i];
        } else if (intervals[i].number() === 5) {
          fifth = intervals[i];
        } else if (intervals[i].number() === 7) {
          seventh = intervals[i];
        }
      }

      if (!third) {
        return;
      }

      third = third.direction() === 'down' ? third.invert() : third;
      third = third.simple().toString();

      if (fifth) {
        fifth = fifth.direction === 'down' ? fifth.invert() : fifth;
        fifth = fifth.simple().toString();
      }

      if (seventh) {
        seventh = seventh.direction === 'down' ? seventh.invert() : seventh;
        seventh = seventh.simple().toString();
      }

      if (third === 'M3') {
        if (fifth === 'A5') {
          return 'augmented';
        } else if (fifth === 'P5') {
          return seventh === 'm7' ? 'dominant' : 'major';
        }

        return 'major';
      } else if (third === 'm3') {
        if (fifth === 'P5') {
          return 'minor';
        } else if (fifth === 'd5') {
          return seventh === 'm7' ? 'half-diminished' : 'diminished';
        }

        return 'minor';
      }
    },
    chordType: function chordType() {
      // In need of better name
      var length = this.intervals.length,
          interval,
          has,
          invert,
          i,
          name;

      if (length === 2) {
        return 'dyad';
      } else if (length === 3) {
        has = {
          unison: false,
          third: false,
          fifth: false
        };

        for (i = 0; i < length; i++) {
          interval = this.intervals[i];
          invert = interval.invert();

          if (interval.base() in has) {
            has[interval.base()] = true;
          } else if (invert.base() in has) {
            has[invert.base()] = true;
          }
        }

        name = has.unison && has.third && has.fifth ? 'triad' : 'trichord';
      } else if (length === 4) {
        has = {
          unison: false,
          third: false,
          fifth: false,
          seventh: false
        };

        for (i = 0; i < length; i++) {
          interval = this.intervals[i];
          invert = interval.invert();

          if (interval.base() in has) {
            has[interval.base()] = true;
          } else if (invert.base() in has) {
            has[invert.base()] = true;
          }
        }

        if (has.unison && has.third && has.fifth && has.seventh) {
          name = 'tetrad';
        }
      }

      return name || 'unknown';
    },
    get: function get(interval) {
      if (typeof interval === 'string' && interval in knowledge.stepNumber) {
        var intervals = this.intervals,
            i,
            length;
        interval = knowledge.stepNumber[interval];

        for (i = 0, length = intervals.length; i < length; i++) {
          if (intervals[i].number() === interval) {
            return this.root.interval(intervals[i]);
          }
        }

        return null;
      } else {
        throw new Error('Invalid interval name');
      }
    },
    interval: function interval(_interval2) {
      return new Chord(this.root.interval(_interval2), this.symbol);
    },
    transpose: function transpose(interval) {
      this.root.transpose(interval);
      this.name = this.root.name().toUpperCase() + this.root.accidental() + this.symbol;
      return this;
    },
    toString: function toString() {
      return this.name;
    }
  };
  var chord = Chord;
  var scales = {
    aeolian: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
    blues: ['P1', 'm3', 'P4', 'd5', 'P5', 'm7'],
    chromatic: ['P1', 'm2', 'M2', 'm3', 'M3', 'P4', 'A4', 'P5', 'm6', 'M6', 'm7', 'M7'],
    dorian: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7'],
    doubleharmonic: ['P1', 'm2', 'M3', 'P4', 'P5', 'm6', 'M7'],
    harmonicminor: ['P1', 'M2', 'm3', 'P4', 'P5', 'm6', 'M7'],
    ionian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
    locrian: ['P1', 'm2', 'm3', 'P4', 'd5', 'm6', 'm7'],
    lydian: ['P1', 'M2', 'M3', 'A4', 'P5', 'M6', 'M7'],
    majorpentatonic: ['P1', 'M2', 'M3', 'P5', 'M6'],
    melodicminor: ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'M7'],
    minorpentatonic: ['P1', 'm3', 'P4', 'P5', 'm7'],
    mixolydian: ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7'],
    phrygian: ['P1', 'm2', 'm3', 'P4', 'P5', 'm6', 'm7'],
    wholetone: ['P1', 'M2', 'M3', 'A4', 'A5', 'A6']
  }; // synonyms

  scales.harmonicchromatic = scales.chromatic;
  scales.minor = scales.aeolian;
  scales.major = scales.ionian;
  scales.flamenco = scales.doubleharmonic;

  function Scale(tonic, scale) {
    if (!(this instanceof Scale)) return new Scale(tonic, scale);
    var scaleName, i;

    if (!('coord' in tonic)) {
      throw new Error('Invalid Tonic');
    }

    if (typeof scale === 'string') {
      scaleName = scale;
      scale = scales[scale];
      if (!scale) throw new Error('Invalid Scale');
    } else {
      for (i in scales) {
        if (scales.hasOwnProperty(i)) {
          if (scales[i].toString() === scale.toString()) {
            scaleName = i;
            break;
          }
        }
      }
    }

    this.name = scaleName;
    this.tonic = tonic;
    this.scale = scale;
  }

  Scale.prototype = {
    notes: function notes() {
      var notes = [];

      for (var i = 0, length = this.scale.length; i < length; i++) {
        notes.push(this.tonic.interval(this.scale[i]));
      }

      return notes;
    },
    simple: function simple() {
      var _context12;

      return (0, _map["default"])(_context12 = this.notes()).call(_context12, function (n) {
        return n.toString(true);
      });
    },
    type: function type() {
      var length = this.scale.length - 2;

      if (length < 8) {
        return ['di', 'tri', 'tetra', 'penta', 'hexa', 'hepta', 'octa'][length] + 'tonic';
      }
    },
    get: function get(i) {
      var isStepStr = typeof i === 'string' && i in knowledge.stepNumber;
      i = isStepStr ? knowledge.stepNumber[i] : i;
      var len = this.scale.length;
      var interval$1, octaves;

      if (i < 0) {
        interval$1 = this.scale[i % len + len - 1];
        octaves = Math.floor((i - 1) / len);
      } else if (i % len === 0) {
        interval$1 = this.scale[len - 1];
        octaves = i / len - 1;
      } else {
        interval$1 = this.scale[i % len - 1];
        octaves = Math.floor(i / len);
      }

      return this.tonic.interval(interval$1).interval(new _interval([octaves, 0]));
    },
    solfege: function solfege(index, showOctaves) {
      var _context13;

      if (index) return this.get(index).solfege(this, showOctaves);
      return (0, _map["default"])(_context13 = this.notes()).call(_context13, function (n) {
        return n.solfege(this, showOctaves);
      });
    },
    interval: function interval(interval$1) {
      interval$1 = typeof interval$1 === 'string' ? _interval.toCoord(interval$1) : interval$1;
      return new Scale(this.tonic.interval(interval$1), this.scale);
    },
    transpose: function transpose(interval) {
      var scale = this.interval(interval);
      this.scale = scale.scale;
      this.tonic = scale.tonic;
      return this;
    }
  };
  Scale.KNOWN_SCALES = (0, _keys["default"])(scales);
  var scale = Scale;

  var sugar = function sugar(teoria) {
    var Note = teoria.Note;
    var Chord = teoria.Chord;
    var Scale = teoria.Scale;

    Note.prototype.chord = function (chord) {
      var isShortChord = (chord in knowledge.chordShort);
      chord = isShortChord ? knowledge.chordShort[chord] : chord;
      return new Chord(this, chord);
    };

    Note.prototype.scale = function (scale) {
      return new Scale(this, scale);
    };
  };

  var teoria_1 = createCommonjsModule(function (module, exports) {
    var teoria; // never thought I would write this, but: Legacy support

    function intervalConstructor(from, to) {
      // Construct a Interval object from string representation
      if (typeof from === 'string') return _interval.toCoord(from);
      if (typeof to === 'string' && from instanceof note) return _interval.from(from, _interval.toCoord(to));
      if (to instanceof _interval && from instanceof note) return _interval.from(from, to);
      if (to instanceof note && from instanceof note) return _interval.between(from, to);
      throw new Error('Invalid parameters');
    }

    intervalConstructor.toCoord = _interval.toCoord;
    intervalConstructor.from = _interval.from;
    intervalConstructor.between = _interval.between;
    intervalConstructor.invert = _interval.invert;

    function noteConstructor(name, duration) {
      if (typeof name === 'string') return note.fromString(name, duration);else return new note(name, duration);
    }

    noteConstructor.fromString = note.fromString;
    noteConstructor.fromKey = note.fromKey;
    noteConstructor.fromFrequency = note.fromFrequency;
    noteConstructor.fromMIDI = note.fromMIDI;

    function chordConstructor(name, symbol) {
      if (typeof name === 'string') {
        var root, octave;
        root = name.match(/^([a-h])(x|#|bb|b?)/i);

        if (root && root[0]) {
          octave = typeof symbol === 'number' ? symbol.toString(10) : '4';
          return new chord(note.fromString(root[0].toLowerCase() + octave), name.substr(root[0].length));
        }
      } else if (name instanceof note) return new chord(name, symbol);

      throw new Error('Invalid Chord. Couldn\'t find note name');
    }

    function scaleConstructor(tonic, scale$1) {
      tonic = tonic instanceof note ? tonic : teoria.note(tonic);
      return new scale(tonic, scale$1);
    }

    teoria = {
      note: noteConstructor,
      chord: chordConstructor,
      interval: intervalConstructor,
      scale: scaleConstructor,
      Note: note,
      Chord: chord,
      Scale: scale,
      Interval: _interval
    };
    sugar(teoria);
    module.exports = teoria;
  });

  var bach = require('bach-cljs'); //.default
  // Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
  // Main entry point for integrating with core bach ClojureScript library.


  var compose = function compose(source) {
    if (typeof source === 'string') {
      return bach.compose(source);
    }

    if ((0, _typeof2["default"])(source) === 'object') {
      // FIXME: Enable again once bach-json-schema is updated to v3
      // return valid(source)
      return source;
    }

    throw TypeError("Unsupported Bach.JSON data type (".concat((0, _typeof2["default"])(source), "). Must be a bach.json object or raw bach string."));
  };

  _exports.compose = compose;

  function scaleify(value) {
    var _context14;

    if (typeof value === 'string') {
      var _value$split = value.split(' '),
          _value$split2 = (0, _slicedToArray2["default"])(_value$split, 2),
          tonic = _value$split2[0],
          type = _value$split2[1]; // TODO: Potentially use type.toLowerCase instead, to guarantee smooth interopability


      return teoria_1.scale(tonic, type.toLowerCase());
    } else if (value instanceof teoria_1.Scale) {
      return value;
    }

    throw TypeError((0, _concat["default"])(_context14 = "Unknown scale type (".concat((0, _typeof2["default"])(value), "): ")).call(_context14, value));
  }

  function chordify(value) {
    var _context15;

    if (typeof value === 'string') {
      return teoria_1.chord(value);
    } else if (value instanceof teoria_1.Chord) {
      return value;
    }

    throw TypeError((0, _concat["default"])(_context15 = "Unknown chord type (".concat((0, _typeof2["default"])(value), "): ")).call(_context15, value));
  }

  function scaleToString(scale) {
    var _context16, _context17;

    return (0, _concat["default"])(_context16 = "".concat((0, _slice["default"])(_context17 = scale.tonic.toString()).call(_context17, 0, 2), " ")).call(_context16, scale.name);
  }

  function notesInChord(value) {
    var _context18;

    return (0, _map["default"])(_context18 = chordify(value).notes()).call(_context18, function (note) {
      return Note.valueOf(note);
    });
  }

  function notesInScale(value) {
    var _context19;

    return (0, _map["default"])(_context19 = scaleify(value).notes()).call(_context19, function (note) {
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
  } // TODO: Use empty-schema (or another approach) to return default bach.json ehaders instead of empty object
  // export const headersOf = source => (source && source.headers) || {}
  // TODO: Remove


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
        var _context20;

        if (typeof value === 'string') {
          return teoria_1.note(value);
        } else if ((0, _typeof2["default"])(value) === 'object' || value instanceof teoria_1.Note) {
          return value;
        }

        throw TypeError((0, _concat["default"])(_context20 = "Unknown note type (".concat((0, _typeof2["default"])(value), "): ")).call(_context20, value));
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
      value: function generalize(note) {
        return teoria_1.note(Note.valueOf(note));
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
        // return this.source.signals
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

        var _state = (0, _slicedToArray2["default"])(state, 3),
            _state$ = (0, _toArray2["default"])(_state[0]),
            beat = _state$[0],
            elem = (0, _slice["default"])(_state$).call(_state$, 1),
            play = _state[1],
            stop = _state[2];

        return {
          beat: beat,
          // TODO: Add once tests are updated
          // elem,
          play: play,
          stop: stop,
          index: index
        }; // return Object.entries(this.steps)
        //   .reduce((acc, [key, steps]) => ({
        //     ...acc,
        //     [key]: steps[index]
        //   }), { index })
      } // TODO: Either replace or improve via inspiration with this:
      // @see: https://tonejs.github.io/docs/r13/Time#quantize

    }, {
      key: "rhythmic",
      value: function rhythmic(duration) {
        var _context21,
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

        var durations = (0, _sort["default"])(_context21 = (0, _map["default"])(units).call(units, function (unit) {
          var value = _this.cast(duration, {
            is: is,
            as: unit
          });

          var result = Math[calc](value);
          return _this.cast(result, {
            is: unit,
            as: is
          });
        })).call(_context21, function (a, b) {
          return Math.abs(duration - a) - Math.abs(duration - b);
        });
        return Math[size].apply(Math, (0, _toConsumableArray2["default"])(durations));
      }
    }]);
    return Durations;
  }(); // import { elementize } from 'bach-cljs'


  _exports.Durations = Durations;

  var _require = require('bach-cljs'),
      elementize = _require.elementize;
  /**
   * Represents a single and unique playable element.
   * Uniqueness and equality are determined by `id`.
   */


  var Element = /*#__PURE__*/function () {
    function Element(data) {
      (0, _classCallCheck2["default"])(this, Element);
      this.data = data;
    }

    (0, _createClass2["default"])(Element, [{
      key: "id",
      get: function get() {
        var _context22;

        return (0, _concat["default"])(_context22 = "".concat(this.data.kind, ".")).call(_context22, this.data.id);
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
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          source = _ref7.source,
          store = _ref7.store,
          cast = _ref7.cast;

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
        var _context23,
            _this2 = this;

        return (0, _flatMap["default"])(_context23 = this.kinds).call(_context23, function (kind) {
          var _context24;

          return (0, _map["default"])(_context24 = (0, _values["default"])(_this2.data[kind])).call(_context24, function (elem) {
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
        var _context25;

        return (0, _map["default"])(_context25 = this.all).call(_context25, function (elem) {
          return elem.value;
        });
      }
    }, {
      key: "ids",
      get: function get() {
        var _context26;

        return (0, _map["default"])(_context26 = this.all).call(_context26, function (elem) {
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
      value: function register(_ref8) {
        var _context27;

        var kind = _ref8.kind,
            value = _ref8.value,
            props = _ref8.props;
        if (!kind || typeof kind !== 'string') throw TypeError('kind must be a non-empty string');
        if (value == null) throw TypeError('value must be defined and non-null');
        var elem = elementize(kind, (0, _concat["default"])(_context27 = [value]).call(_context27, (0, _toConsumableArray2["default"])(props)));
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
        var _context28;

        var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_) {
          return _;
        };
        if (!elements) return null; // TODO: Validate element shape with JSON Schema

        return (0, _reduce["default"])(_context28 = (0, _entries["default"])(elements)).call(_context28, function (acc, _ref9) {
          var _context29;

          var _ref10 = (0, _slicedToArray2["default"])(_ref9, 2),
              kind = _ref10[0],
              ids = _ref10[1];

          var elems = (0, _reduce["default"])(_context29 = (0, _entries["default"])(ids)).call(_context29, function (acc, _ref11) {
            var _ref12 = (0, _slicedToArray2["default"])(_ref11, 2),
                id = _ref12[0],
                elem = _ref12[1];

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
        var _context30,
            _this3 = this;

        return (0, _map["default"])(_context30 = this.data.items).call(_context30, function (item) {
          var _context31;

          return _objectSpread(_objectSpread({}, item), {}, {
            elements: (0, _map["default"])(_context31 = item.elements).call(_context31, function (elem) {
              return _this3.store.resolve(elem);
            })
          });
        });
      }
    }, {
      key: "elements",
      get: function get() {
        var _context32,
            _this4 = this;

        return (0, _flatMap["default"])(_context32 = this.data.items).call(_context32, function (_ref13) {
          var elements = _ref13.elements;
          return (0, _map["default"])(elements).call(elements, function (elem) {
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
        // return Note.unite(this.elements.flatMap(({ notes }) => notes))
        return this.notesOf(this.elements);
      } // Provides map of elements in a beat grouped by kind.
      // FIXME: Doesn't support multiple elements of the same kind

    }, {
      key: "parts",
      get: function get() {
        var _context33;

        return (0, _reduce["default"])(_context33 = this.elements).call(_context33, function (parts, elem) {
          return _objectSpread(_objectSpread({}, parts), {}, (0, _defineProperty2["default"])({}, elem.kind, elem));
        }, {});
      }
    }, {
      key: "musical",
      get: function get() {
        var _context34;

        return (0, _every["default"])(_context34 = this.elements).call(_context34, function (elem) {
          return elem.musical;
        });
      }
    }, {
      key: "all",
      value: function all() {
        var _context35;

        var cast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {
          return _;
        };
        return (0, _toConsumableArray2["default"])(new _set["default"]((0, _map["default"])(_context35 = this.elements).call(_context35, cast)));
      }
    }, {
      key: "find",
      value: function find(kind) {
        var _context36;

        return (0, _find["default"])(_context36 = this.elements).call(_context36, function (elem) {
          return kind === elem.kind;
        });
      }
    }, {
      key: "filter",
      value: function filter(kind) {
        var _context37;

        return (0, _filter["default"])(_context37 = this.elements).call(_context37, function (elem) {
          return kind === elem.kind;
        });
      } // first (kinds) {

    }, {
      key: "either",
      value: function either(kinds) {
        var _this5 = this;

        return (0, _reduce["default"])(kinds).call(kinds, function (acc, kind) {
          // return acc.length ? acc : this.elements.filter(elem => kind === elem.kind)
          return acc.length ? acc : (0, _filter["default"])(_this5).call(_this5, kind);
        }, []); // for (kind of kinds) {
        //   const elems = item.elements.filter(elem => kind === elem.kind)
        //   if (elems.length) return elems
        // }
      }
    }, {
      key: "notesOf",
      value: function notesOf(elements) {
        return Note.unite((0, _flatMap["default"])(elements).call(elements, function (_ref16) {
          var notes = _ref16.notes;
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
        } // return new Beat(beats, store)


        return [new Beat(beats, store)];
      }
    }]);
    return Beat;
  }(); // export class BeatItem {
  //   constructor (data, beat) {
  //     this.data = data
  //     this.beat = beat
  //   }
  //   get duration () {
  //     return this.data.duration
  //   }
  //   get elements () {
  //     return this.data.elements.map(elem => this.beat.store.resolve(elem))
  //   }
  //   add (elem) {
  //     const record = this.beat.store.register(elem)
  //     this.data.elements = this.data.elements.concat(record.id)
  //     return this
  //   }
  // }
  // NOTE: Basically Track v3. Probably just rename to Track eventually.


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
      }) : null; // console.log('COMPOSED DATA (2)', this.data)
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
        var _context38;

        return Note.unite((0, _flatMap["default"])(_context38 = this.beats).call(_context38, function (beat) {
          var _context39;

          return (0, _flatMap["default"])(_context39 = beat.elements).call(_context39, function (_ref17) {
            var notes = _ref17.notes;
            return notes;
          });
        }));
      }
    }, {
      key: "musical",
      get: function get() {
        var _context40;

        return (0, _every["default"])(_context40 = this.beats).call(_context40, function (beat) {
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
        var _context41,
            _this6 = this,
            _context42;

        var is = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'step';
        var cursor = this.durations.at(duration, is);
        return {
          beat: this.beats[cursor.beat],
          play: (0, _map["default"])(_context41 = cursor.play || []).call(_context41, function (elem) {
            return _this6.store.resolve(elem);
          }),
          stop: (0, _map["default"])(_context42 = cursor.stop || []).call(_context42, function (elem) {
            return _this6.store.resolve(elem);
          })
        };
      } // add (id, elem) {
      // insert
      // TODO: Probably move to `rebach` package

    }, {
      key: "add",
      value: function add(record) {
        var _context43, _context44;

        var beat = (0, _find["default"])(_context43 = this.beats).call(_context43, function (beat) {
          return beat.id == record.beat;
        });
        var elem = this.store.register(record.elem);
        console.log('adding beat', record, beat, (0, _map["default"])(_context44 = this.beats).call(_context44, function (_ref18) {
          var id = _ref18.id;
          return id;
        }));
        this.data.beats[beat.id].items[record.item || 0].elements.push(elem); // const item = this.data.beats[beat].items[record.item || 0]
        // const stop = this.durations.cyclic(beat.index + item.duration)
        // beat

        this.data.steps[beat.index][0].push(elem.id); // play

        this.data.steps[beat.index][1].push(elem.id); // stop

        this.data.steps[beat.index][2].push(elem.id); // TODO: Add to `steps`!
        // return this

        return new Element(elem);
      }
    }, {
      key: "adjust",
      value: function adjust(tempo) {}
    }]);
    return Music;
  }();

  _exports.Music = Music;
});
//# sourceMappingURL=bach-js.umd.js.map
