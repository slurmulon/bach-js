'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var teoria = _interopDefault(require('teoria'));
var schema = _interopDefault(require('bach-json-schema'));
var Ajv = _interopDefault(require('ajv'));

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

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
var Element = function () {
  function Element(data) {
    classCallCheck(this, Element);

    this.data = data;
    // TODO: Consider using nanoid to generate pseudo-unique beat element identifiers
    // this.id = id || nanoid()
  }

  createClass(Element, [{
    key: 'identify',
    value: function identify() {
      try {
        teoria.note(this.value);

        return 'note';
      } catch (_) {}

      try {
        var _value$split = this.value.split(' '),
            _value$split2 = slicedToArray(_value$split, 2),
            key = _value$split2[0],
            scale = _value$split2[1];

        teoria.note(key).scale(scale.toLowerCase());

        return 'scale';
      } catch (_) {}

      // FIXME: Make this support an optional octave (e.g. "Cm" and "C2m")
      try {
        var _ref = [this.value.substring(0, 2), this.value.substring(2)],
            _key = _ref[0],
            chord = _ref[1];


        teoria.note(_key).chord(chord.toLowerCase());

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
  function Beat(data) {
    classCallCheck(this, Beat);

    this.data = data;
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

var ajv = new Ajv();

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

var validate = ajv.compile(schema);

// TODO: Possibly rename to Bach, Track will just be a Gig construct
var Track = function () {

  // TODO:
  // constructor ({ source, tempo })
  function Track(source) {
    classCallCheck(this, Track);

    if (!validate(source)) {
      throw TypeError('Invalid Bach.JSON source data: ' + JSON.stringify(validate.errors));
    }

    this.source = source;
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


    // TODO: get mspb (ms-per-meter-beat essentially, since our `ms-per-beat` in bach is really, in practice, `ms-per-lowest-beat` (need to correct for this in `bach!)
    // TODO: consider moving `interval` (and this new getter) to a `time` module or something

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

var Note = function () {
  function Note() {
    classCallCheck(this, Note);
  }

  createClass(Note, null, [{
    key: 'parse',
    value: function parse(value) {
      // return teoria.note.fromMIDI(value)//.scientific()
      return teoria.note(value);
    }

    // TODO: Consider using chroma instead
    // TODO: Use this in nek, and anywhere else this same logic might be used

  }, {
    key: 'valueOf',
    value: function valueOf(note) {
      // return teoria.note(note).midi() % 12
      // return teoria.note(note).chroma()
      return teoria.note(note).scientific()
      // TODO: Centralize! Replace everywhere in bach-sheet, nek, etc.
      .replace(/[0-9]+$/, '');
    }
  }, {
    key: 'valuesOf',
    value: function valuesOf(notes) {
      return notes.map(Note.valueOf);
    }
  }, {
    key: 'generalize',
    value: function generalize(note) {
      return teoria.note(Note.valueOf(note));
    }

    // static unify (notes = []) {

  }, {
    key: 'reduce',
    value: function reduce() {
      var notes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      // const unique = [...new Set(notes.map(Note.generalize))]
      var unique = [].concat(toConsumableArray(new Set(Note.valuesOf(notes))));

      return unique.map(function (value) {
        // return teoria.note.fromMIDI(value).scientific()
        return Note.parse(value).scientific();
      });
    }
  }]);
  return Note;
}();

// Creates Bach.JSON beat elements from minimal data
// WARN: Now dup'd in rebach
var atomize = function atomize(kind, value) {
  return {
    keyword: kind.toLowerCase(),
    arguments: [value]
  };
};

// TODO: Seems we should just use 'new Track' instead. Remove.
var normalize = function normalize(source) {
  if (validate(source)) {
    return Object.assign({}, source, {
      data: source.data.map(Beat.from)
    });
  }

  console.error(validate.errors);

  throw TypeError('Invalid Bach.JSON data');
};

// Converts a parsed Track's `data` back into its serialized form (vanilla bach.json)
//  - Perhaps better suited as a static method on Track
var serialize = function serialize(track) {
  var data = track.data.map(function (measure) {
    return measure.map(function (beat) {
      return beat && beat.data;
    });
  });

  return Object.assign({}, track, { data: data });
};

// Creates a reduced and simplified version of the track with only populated sections
var sectionize = function sectionize(source) {
  return source.data.map(function (measure) {
    return measure.filter(function (beat) {
      return !!beat.data;
    }).map(simplifyBeat);
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

// Provides a reduced/simplified representation of a Bach beat and its items
var simplifyBeat = function simplifyBeat(beat) {
  return beat.data.items.map(simplifyBeatItem).reduce(function (acc, item) {
    return Object.assign(acc, defineProperty({
      duration: beat.data.duration
    }, item.kind, item.value));
  }, {});
};

// TODO: Move to new 'note' module
// export const generalizeNote = note => {
//   const value = teoria.note(note).midi() % 12
// }

// // TODO: Move to new 'note' module
// export const reduceNotes = (notes = []) => {
//   const keys = notes.map(note => teoria.note(note).midi() % 12)
// }

exports.Track = Track;
exports.Element = Element;
exports.Beat = Beat;
exports.Note = Note;
exports.validate = validate;
exports.atomize = atomize;
exports.normalize = normalize;
exports.serialize = serialize;
exports.sectionize = sectionize;
exports.condense = condense;
exports.simplifyBeatItem = simplifyBeatItem;
exports.simplifyBeat = simplifyBeat;
