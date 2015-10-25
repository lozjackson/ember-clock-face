/**
  @module ember-clock-face
*/
import Ember from 'ember';

/**
  @class ClockHandComponent
  @namespace EmberClockFace
*/
export default Ember.Component.extend({

  /**
    @property tagName
    @type {String}
    @default `line`
  */
  tagName: 'line',

  /**
    @property attributeBindings
    @type {Array}
    @default `[ 'x1', 'x2', 'y1', 'y2', 'transform' ]`
  */
  attributeBindings: [ 'x1', 'x2', 'y1', 'y2', 'transform' ],

  /**
    @property classNames
    @type {Array}
    @default `[ 'minute-mark' ]`
  */
  classNames: [ 'clock-hand' ],

  /**
    This is the value of the minute where the marker should be displayed.

    @property value
    @type {Number}
  */
  value: 0,

  /**
    @property x1
    @type {Number}
    @default 50
  */
  x1:50,

  /**
    @property y1
    @type {Number}
    @default 53
  */
  y1:53,

  /**
    @property x2
    @type {Number}
    @default 50
  */
  x2:50,

  /**
    @property y2
    @type {Number}
    @default 15
  */
  y2:15,

  /**
    @property transform
    @type {String}
    @default `rotate(0 50 50)`
  */
  transform: Ember.computed('value', function() {
    var value = this.get('value') || 0;
    return `rotate(${value} 50 50)`;
  }),
});
