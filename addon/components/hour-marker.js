/**
  @module ember-clock-face
*/
import Ember from 'ember';

/**
  @class HourMarkerComponent
  @namespace EmberClockFace
*/
export default Ember.Component.extend({

  /**
    @property tagName
    @type {String}
    @default `line`
    @private
  */
  tagName: 'line',

  /**
    @property attributeBindings
    @type {Array}
    @default `[ 'x1', 'x2', 'y1', 'y2', 'transform' ]`
    @private
  */
  attributeBindings: [ 'x1', 'x2', 'y1', 'y2', 'transform' ],

  /**
    @property classNames
    @type {Array}
    @default `[ 'hour-mark' ]`
    @private
  */
  classNames: [ 'hour-mark' ],

  /**
    This is the value of the hour where the marker should be displayed.

    @property value
    @type {Number}
  */
  value: 0,

  /**
    @property x1
    @type {Number}
    @default 50
    @private
  */
  x1:50,

  /**
    @property y1
    @type {Number}
    @default 12
    @private
  */
  y1:12,

  /**
    @property x2
    @type {Number}
    @default 50
    @private
  */
  x2:50,

  /**
    @property y2
    @type {Number}
    @default 5
    @private
  */
  y2:5,

  /**
    Computed Property.

    @property transform
    @type {String}
    @default `rotate(0 50 50)`
    @private
  */
  transform: Ember.computed('value', function() {
    var value = this.get('value') || 0;
    return `rotate(${30 * value} 50 50)`;
  })

});
