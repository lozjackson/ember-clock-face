/**
  @module ember-clock-face
*/
import Ember from 'ember';

/**
  ## Clock Hand

  The clock-hand component is used to render a svg `line` element to represent a
  clock hand.

  @class ClockHandComponent
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
    @default `[ 'minute-mark' ]`
    @private
  */
  classNames: [ 'clock-hand' ],

  /**
    This is the angle to rotate the clock hand by to point to the correct time.
    It is used by the `transform` computed property to set the rotate angle.

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
    @default 53
    @private
  */
  y1:53,

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
    @default 15
    @private
  */
  y2:15,

  /**
    @property transform
    @type {String}
    @default `rotate(0 50 50)`
    @private
  */
  transform: Ember.computed('value', function() {
    var value = this.get('value') || 0;
    return `rotate(${value} 50 50)`;
  }),
});
