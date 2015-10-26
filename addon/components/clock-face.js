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
    Computed Property.
    
    @property hour
    @type {Number}
  */
  hour: Ember.computed( 'clock.hour', 'clock.minute', function() {
    var hour = this.clock.get('hour');
    var minute = this.clock.get('minute');
    return 30 * ( hour % 12 ) + minute / 2;
  }),

  /**
    Computed Property.
    
    @property minute
    @type {Number}
  */
  minute: Ember.computed( 'clock.minute', function() {
    return 6 * this.clock.get('minute');
  }),

  /**
    Computed Property.
    
    @property second
    @type {Number}
  */
  second: Ember.computed( 'clock.second', function() {
    return 6 * this.clock.get('second');
  })
});
