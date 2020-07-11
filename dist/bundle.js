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

/**
 * Represents a single playable element (Note, Scale, Chord, Mode, Triad or Rest)
 */
// FIXME: Support rests (~)
var Element = function () {
  function Element(data) {
    classCallCheck(this, Element);

    this.data = data;
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
      return this.data.atom.init['arguments'];
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      var explicits = ['Note', 'Scale', 'Chord', 'Mode', 'Triad', 'Pentatonic', 'Rest'];
      var keyword = this.data.atom.keyword;

      if (explicits.includes(keyword)) {
        return keyword.toLowerCase();
      }

      return this.identify();
    }
  }]);
  return Element;
}();

/**
 * Represents a single beat in a track.
 *
 * Beats are represented as a duple and may contain multiple elements
 *
 * duration -> notes (elements)
 */
var Beat = function () {
  function Beat(data) {
    classCallCheck(this, Beat);

    this.data = data;
  }

  createClass(Beat, [{
    key: 'duration',
    get: function get$$1() {
      return !this.empty ? this.data.duration : 0;
    }
  }, {
    key: 'items',
    get: function get$$1() {
      if (this.empty) return [];

      var notes = this.data.notes;

      var items = Array.isArray(notes) ? notes : [notes];

      return items.map(function (item) {
        return new Element(item);
      });
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
     * Determines how long to wait between each interval based on the track and user tempo
     *
     * @returns {number}
     */

  }, {
    key: 'at',


    // TODO: get mspb (ms-per-meter-beat essentially, since our `ms-per-beat` in bach is really, in practice, `ms-per-lowest-beat` (need to correct for this in `bach!)
    // TODO: consider moving `interval` (and this new getter) to a `time` module or something

    /**
     * Determines the measure and beat found at the provided indices
     *
     * @param {number} measureIndex
     * @param {number} beatIndex
     * @returns {Object}
     */
    value: function at(measureIndex, beatIndex) {
      try {
        var measure = this.data[measureIndex];
        var beat = measure[beatIndex];

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

      return this.headers['ms-per-beat'] / diff;
    }
  }]);
  return Track;
}();

// Creates Bach.JSON elements/atoms from minimal data
// WARN: Now dup'd in rebach
var atomize = function atomize(kind, value) {
  return {
    atom: {
      keyword: kind.toLowerCase(),
      init: { arguments: [value] }
    }
  };
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
var condense = function condense(source) {};var simplifyNote = function simplifyNote(note) {
  var _note$atom = note.atom,
      keyword = _note$atom.keyword,
      init = _note$atom.init;

  var _init$arguments = slicedToArray(init.arguments, 1),
      value = _init$arguments[0];

  var kind = keyword.toLowerCase();

  return { kind: kind, value: value };
};

// Provides a reduced/simplified representation of a Bach beat and its notes
var simplifyBeat = function simplifyBeat(beat) {
  return beat.data.notes.map(simplifyNote).reduce(function (acc, note) {
    return Object.assign(acc, defineProperty({
      duration: beat.data.duration
    }, note.kind, note.value));
  }, {});
};

exports.Track = Track;
exports.Element = Element;
exports.Beat = Beat;
exports.validate = validate;
exports.atomize = atomize;
exports.sectionize = sectionize;
exports.condense = condense;
exports.simplifyNote = simplifyNote;
exports.simplifyBeat = simplifyBeat;
