/**
  @module ember-clock-face
*/
import Ember from 'ember';
import layout from '../templates/components/clock-face';

/**
  @class ClockFaceComponent
  @namespace EmberClockFace
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {Object}
  */
  layout: layout,

  /**
    @property tagName
    @type {String}
    @default `svg`
  */
  tagName: 'svg',

  /**
    @property attributeBindings
    @type {Array}
    @default `[ 'width', 'height', 'viewBox' ]`
  */
  attributeBindings: [ 'width', 'height', 'viewBox' ],

  /**
    @property classNames
    @type {Array}
    @default `[ 'ember-clock-face', 'clock-face' ]`
  */
  classNames: [ 'ember-clock-face', 'clock-face' ],

  /**
    @property size
    @type {Number}
    @default `200`
  */
  size: 200,

  /**
    @property viewBox
    @type {String}
    @default `0 0 100 100`
  */
  viewBox: "0 0 100 100",

   /**
    @property showClockNumbers
    @type {Boolean}
    @default `false`
  */
  showClockNumbers: false,

  /**
    @property showClockHours
    @type {Boolean}
    @default `false`
  */
  showClockHours: false,

  /**
    @property showClockMinutes
    @type {Boolean}
    @default `false`
  */
  showClockMinutes: false,

  /**
    @property faceRadius
    @type {Number}
    @default `48`
  */
  faceRadius: 48,

  /**
    Alias of `size`.

    @property width
    @type {Number}
  */
  width: Ember.computed.alias('size'),

  /**
    Alias of `size`.

    @property height
    @type {Number}
  */
  height: Ember.computed.alias('size'),

  /**

    @property clockNumbers
    @type {Array}
  */
  clockNumbers: Ember.A([
    { text: 1,  x: 67,   y: 18   },
    { text: 2,  x: 82.5, y: 33   },
    { text: 3,  x: 89,   y: 54   },
    { text: 4,  x: 82.5, y: 73.5 },
    { text: 5,  x: 67,   y: 89   },
    { text: 6,  x: 47,   y: 95   },
    { text: 7,  x: 27,   y: 90   },
    { text: 8,  x: 11.5, y: 73.5 },
    { text: 9,  x: 5.5,  y: 54   },
    { text: 10, x: 10,   y: 33   },
    { text: 11, x: 24.5, y: 18   },
    { text: 12, x: 44,   y: 12   }
  ]),

  /**

    @property clockMinutes
    @type {Array}
  */
  clockMinutes: Ember.computed( function() {
    var minutes = [];
    for (var i = 1; i < 61; i++) {
      minutes.push({ value: i });
    }
    return minutes;
  })
});
