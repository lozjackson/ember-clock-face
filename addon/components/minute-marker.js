/**
  @module ember-clock-face
*/
import Ember from 'ember';

/**
  @class MinuteMarkerComponent
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
  classNames: [ 'minute-mark' ],

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
    @default 8
  */
  y1:8,

  /**
    @property x2
    @type {Number}
    @default 50
  */
  x2:50,

  /**
    @property y2
    @type {Number}
    @default 5
  */
  y2:5,

  /**
    @property transform
    @type {String}
    @default `rotate(0 50 50)`
  */
  transform: Ember.computed('value', function() {
    var value = this.get('value') || 0;
    return `rotate(${6 * value} 50 50)`;
  })
});
