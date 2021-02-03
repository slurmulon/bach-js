'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var teoria$1 = require('teoria');
var bach = _interopDefault(require('bach-cljs'));
var schema = _interopDefault(require('bach-json-schema'));
var Ajv = _interopDefault(require('ajv'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};





















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













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Note$1 = function () {
  function Note$$1() {
    classCallCheck(this, Note$$1);
  }

  createClass(Note$$1, null, [{
    key: 'parse',
    value: function parse(value) {
      if (typeof value === 'string') {
        return teoria$1.note(value);
      } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || value instanceof teoria$1.Note) {
        return value;
      }

      throw TypeError('Unknown note type (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '): ' + value);
    }
  }, {
    key: 'expand',
    value: function expand(kind, note$$1) {
      return notesIn(kind, note$$1);
    }
  }, {
    key: 'hash',
    value: function hash(note$$1) {
      return Note$$1.parse(note$$1).chroma();
    }
  }, {
    key: 'pitchOf',
    value: function pitchOf(note$$1) {
      return Note$$1.valueOf(note$$1);
    }

    // TODO: Consider using chroma instead
    // TODO: Use this in nek, and anywhere else this same logic might be used

  }, {
    key: 'valueOf',
    value: function valueOf(note$$1) {
      return Note$$1.parse(note$$1).scientific()
      // .toLowerCase()
      // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
      .replace(/[0-9]+$/, '');
    }
  }, {
    key: 'valuesOf',
    value: function valuesOf(notes) {
      return notes.map(Note$$1.valueOf);
    }
  }, {
    key: 'generalize',
    value: function generalize(note$$1) {
      return teoria$1.note(Note$$1.valueOf(note$$1));
    }
  }, {
    key: 'unite',
    value: function unite() {
      var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return [].concat(toConsumableArray(new Set(Note$$1.valuesOf(notes))));
    }
  }, {
    key: 'equals',
    value: function equals(left, right) {
      return Note$$1.hash(left) == Note$$1.hash(right);
    }
  }]);
  return Note$$1;
}();

var ajv = new Ajv();

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

var validate = ajv.compile(schema);

var valid = function valid(bach$$1) {
  if (!validate(bach$$1)) {
    var message = 'Invalid Bach.JSON source data';
    var pretty = function pretty(json) {
      return JSON.stringify(json, null, 2);
    };

    console.error(message, pretty(bach$$1));
    console.error(pretty(validate.errors));

    throw TypeError('Invalid Bach.JSON source data');
  }

  return bach$$1;
};

// Either "composes" raw bach data into bach.json or, when provided an object, validates its structure as bach.json.
// Main entry point for integrating with core bach ClojureScript library.
var compose = function compose(source) {
  if (typeof source === 'string') {
    return bach(source);
  }

  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
    return valid(source);
  }

  throw TypeError('Unsupported Bach.JSON data type (' + (typeof source === 'undefined' ? 'undefined' : _typeof(source)) + '). Must be a bach.json object or raw bach string.');
};

// Creates Bach.JSON beat elements from minimal data.
// WARN: Now dup'd in rebach
var atomize = function atomize(kind, value) {
  return {
    keyword: kind.toLowerCase(),
    arguments: [value]
  };
};

// Consumes bach.json source data and parses/normalizes each beat.
// Light-weight alternative to using Track constructor.
var normalize = function normalize(source) {
  var bach$$1 = compose(source);

  return Object.assign({}, bach$$1, {
    data: bach$$1.data.map(Beat.from)
  });
};

// Converts a parsed Track's `data` back into its serialized form (vanilla bach.json).
var serialize = function serialize(track) {
  var data = track.data.map(function (measure) {
    return measure.map(function (beat) {
      return beat && beat.data;
    });
  });

  return Object.assign({}, track, { data: data });
};

// Creates a reduced and simplified version of the track with only populated sections.
// Ideal data format for high-level iteration and/or cursor tracing in bach engines.
var sectionize = function sectionize(source) {
  return source.data.map(function (measure) {
    return measure.filter(function (beat) {
      return !!beat.data;
    }).map(partitionBeat);
  }).reduce(function (all, one) {
    return all.concat(one);
  }, []);
};

// Groups sequentially identical phrases by summation of duration:
// TODO
var condense = function condense(source) {};var simplifyBeatItem = function simplifyBeatItem(item) {
  var keyword = item.keyword,
      _item$arguments = slicedToArray(item.arguments, 1),
      value = _item$arguments[0];

  var kind = keyword.toLowerCase();

  return { kind: kind, value: value };
};

// Expands a beat and its items into a usable object grouped by "parts".
// TODO: Instead of "parts" we should probably stick with "items", to be consistent with Bach
var partitionBeat = function partitionBeat(beat) {
  return beat.data.items.map(simplifyBeatItem).reduce(function (acc, item) {
    var parts = Object.assign({}, acc.parts, defineProperty({}, item.kind, item.value));

    return Object.assign(acc, {
      duration: beat.data.duration,
      parts: parts
    });
  }, {});
};

function scaleify(value) {
  if (typeof value === 'string') {
    var _value$split = value.split(' '),
        _value$split2 = slicedToArray(_value$split, 2),
        tonic = _value$split2[0],
        type = _value$split2[1];

    // TODO: Potentially use type.toLowerCase instead, to guarantee smooth interopability


    return teoria$1.scale(tonic, type.toLowerCase());
  } else if (value instanceof teoria$1.Scale) {
    return value;
  }

  throw TypeError('Unknown scale type (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '): ' + value);
}

function chordify(value) {
  if (typeof value === 'string') {
    return teoria$1.chord(value);
  } else if (value instanceof teoria$1.Chord) {
    return value;
  }

  throw TypeError('Unknown chord type (' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '): ' + value);
}

function scaleToString(scale$$1) {
  return scale$$1.tonic.toString().slice(0, 2) + ' ' + scale$$1.name;
}

function notesInChord(value) {
  return chordify(value).notes().map(function (note$$1) {
    return Note$1.valueOf(note$$1);
  });
}

function notesInScale(value) {
  return scaleify(value).notes().map(function (note$$1) {
    return Note$1.valueOf(note$$1);
  });
}

function notesIn$1(kind, value) {
  return value ? kind === 'chord' ? notesInChord(value) : notesInScale(value) : [];
}

// TODO: Use empty-schema (or another approach) to return default bach.json ehaders instead of empty object
var headersOf = function headersOf(source) {
  return source && source.headers || {};
};

var unitsOf = function unitsOf(source) {
  return {
    beat: headersOf(source)['beat-unit'] || 1 / 4,
    pulse: headersOf(source)['pulse-beat'] || 1 / 4,
    second: 1,
    ms: 1 / 1000
  };
};

var barsOf = function barsOf(source) {
  return {
    beat: headersOf(source)['beat-units-per-measure'] || 4,
    pulse: headersOf(source)['pulse-beats-per-measure'] || 4
  };
};

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
var Element = function () {
  function Element(data$$1) {
    classCallCheck(this, Element);

    this.data = data$$1;
    // TODO: Consider using nanoid to generate pseudo-unique beat element identifiers
    // this.id = id || nanoid()
  }

  createClass(Element, [{
    key: 'identify',


    // TODO: Refactor to use data/scaleify and data/chordify
    value: function identify() {
      try {
        teoria.note(this.value);

        return 'note';
      } catch (_) {}

      try {
        var _value$split = this.value.split(' '),
            _value$split2 = slicedToArray(_value$split, 2),
            key = _value$split2[0],
            scale$$1 = _value$split2[1];

        teoria.note(key).scale(scale$$1.toLowerCase());

        return 'scale';
      } catch (_) {}

      // FIXME: Make this support an optional octave (e.g. "Cm" and "C2m")
      try {
        var _ref = [this.value.substring(0, 2), this.value.substring(2)],
            _key = _ref[0],
            chord$$1 = _ref[1];


        teoria.note(_key).chord(chord$$1.toLowerCase());

        return 'chord';
      } catch (_) {}
    }
  }, {
    key: 'value',
    get: function get$$1() {
      return this.inputs[0];
    }
  }, {
    key: 'inputs',
    get: function get$$1() {
      return this.data['arguments'];
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      return this.data.keyword.toLowerCase();
    }
  }, {
    key: 'notes',
    get: function get$$1() {
      return notesIn$1(this.kind, this.value);
    }
  }]);
  return Element;
}();

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a tuple and may contain multiple elements
 *
 * duration -> items (elements)
 */
var Beat = function () {
  function Beat(data$$1) {
    classCallCheck(this, Beat);

    this.data = data$$1;
    // TODO: Consider using nanoid to generate pseudo-unique beat identifiers
    // this.id = id || nanoid()
  }

  createClass(Beat, [{
    key: 'first',
    value: function first(kind) {
      return this.items.find(function (item) {
        return kind == item.kind;
      });
    }
  }, {
    key: 'duration',
    get: function get$$1() {
      return this.exists ? this.data.duration : 0;
    }
  }, {
    key: 'items',
    get: function get$$1() {
      if (this.empty) return [];

      return this.data.items.map(function (item) {
        return new Element(item);
      });
    }
  }, {
    key: 'kinds',
    get: function get$$1() {
      return [].concat(toConsumableArray(new Set(this.items.map(function (_ref2) {
        var kind = _ref2.kind;
        return kind;
      }))));
    }
  }, {
    key: 'values',
    get: function get$$1() {
      return this.items.reduce(function (acc, item) {
        return Object.assign(acc, defineProperty({}, item.kind, item.value));
      }, {});
    }
  }, {
    key: 'empty',
    get: function get$$1() {
      return !this.data;
    }
  }, {
    key: 'exists',
    get: function get$$1() {
      return !this.empty;
    }
  }], [{
    key: 'from',
    value: function from(beats) {
      if (Array.isArray(beats)) {
        // in other words, a measure
        return beats.map(function (beat) {
          return new Beat(beat);
        });
      }

      return new Beat(beats);
    }
  }]);
  return Beat;
}();

// TODO: Possibly rename to Bach, Track will just be a Gig construct
var Track = function () {

  // TODO:
  // constructor ({ source, tempo })
  function Track(source) {
    classCallCheck(this, Track);

    this.origin = source;
    this.source = compose(source);
  }

  /**
   * Parses and returns the source track data as Beat elements
   *
   * @returns {Array<Object>}
   */


  createClass(Track, [{
    key: 'all',


    /**
     * Finds all Beat elements matching a kind
     *
     * @returns {Array<Object>}
     */
    value: function all() {
      var kind = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'note';

      return this.data.map(function (beats) {
        return beats.filter(function (beat) {
          if (beat.data) {
            return beat.items.some(function (item) {
              return item && item.kind === kind;
            });
          }
        });
      }).flat();
    }

    /**
     * Determines how long to wait between each interval (pulse beat) based on the track and user tempo
     *
     * @returns {number}
     */

  }, {
    key: 'at',


    /**
     * Determines the measure and beat found at the provided indices in a safe manner (modulates indices)
     *
     * @param {number} measure
     * @param {number} beat
     * @returns {Object}
     */
    value: function at(measureIndex, beatIndex) {
      try {
        var measure = this.data[Math.floor(measureIndex) % this.total.measures];
        var beat = measure[Math.floor(beatIndex) % measure.length];

        return { measure: measure, beat: beat };
      } catch (e) {
        return null;
      }
    }
  }, {
    key: 'data',
    get: function get$$1() {
      return this.source.data.map(Beat.from);
    }

    /**
     * Provides the source header data of the track
     *
     * @returns {Object}
     */

  }, {
    key: 'headers',
    get: function get$$1() {
      return this.source.headers;
    }
  }, {
    key: 'interval',
    get: function get$$1() {
      var header = this.headers.tempo;
      var tempos = {
        init: header,
        user: this.tempo || header
      };

      var diff = tempos.user / tempos.init;

      return this.headers['ms-per-pulse-beat'] / diff;
    }

    // TODO: Take `barOf` approach in client playing mixin instead (providing both pulse and beat units here)
    /**
     * Specifies the total number of pulse beats (i.e. "pulses") in a measure
     *
     * @returns {number}
     */

  }, {
    key: 'pulses',
    get: function get$$1() {
      return this.headers['pulse-beats-per-measure'];
    }

    /**
     * Determines the total number of measures and beats in the track.
     *
     * @returns {Object}
     */

  }, {
    key: 'total',
    get: function get$$1() {
      var measures = this.data.length;
      var beats = this.data.reduce(function (acc, measure) {
        return acc + measure.length;
      }, 0);

      return { measures: measures, beats: beats };
    }
  }]);
  return Track;
}();

var Sections = function () {
  function Sections(source) {
    classCallCheck(this, Sections);

    this.source = normalize(source);
    this.data = sectionize(this.source);
  }

  createClass(Sections, [{
    key: 'clamp',
    value: function clamp(index) {
      var length = this.data.length;

      var key = index >= 0 ? index : length + index;

      return key % length;
    }

    // compress (section) {
    //   // TODO: Returns original data struct, which is better if you want light-weight data and don't care about the compared/macroscopic view of the sections
    // }

    // TODO: Move to Section class so we dont' have to provide bach data

  }, {
    key: 'expand',
    value: function expand(section) {
      var parts = Object.entries(section.parts).reduce(function (acc, _ref) {
        var _ref2 = slicedToArray(_ref, 2),
            kind = _ref2[0],
            value = _ref2[1];

        return typeof value === 'string' ? Object.assign(acc, defineProperty({}, kind, {
          value: value,
          notes: notesIn$1(kind, value)
        })) : acc;
      }, section.parts);

      return Object.assign(section, { parts: parts });
    }
  }, {
    key: 'all',
    get: function get$$1() {
      var _this = this;

      return this.data.map(function (section) {
        return _this.expand(section);
      });
    }
  }]);
  return Sections;
}();

exports.Track = Track;
exports.Element = Element;
exports.Beat = Beat;
exports.Note = Note$1;
exports.Sections = Sections;
exports.validate = validate;
exports.valid = valid;
exports.compose = compose;
exports.atomize = atomize;
exports.normalize = normalize;
exports.serialize = serialize;
exports.sectionize = sectionize;
exports.condense = condense;
exports.simplifyBeatItem = simplifyBeatItem;
exports.partitionBeat = partitionBeat;
exports.scaleify = scaleify;
exports.chordify = chordify;
exports.scaleToString = scaleToString;
exports.notesInChord = notesInChord;
exports.notesInScale = notesInScale;
exports.notesIn = notesIn$1;
exports.headersOf = headersOf;
exports.unitsOf = unitsOf;
exports.barsOf = barsOf;
