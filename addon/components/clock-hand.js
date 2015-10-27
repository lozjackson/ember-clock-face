/**
  @module ember-clock-face
*/
import Ember from 'ember';
import SvgLineMixin from 'ember-clock-face/mixins/svg-line';

/**
  ## Clock Hand

  The clock-hand component is an svg `line` element that is used to represent a
  clock hand.

  @class ClockHandComponent
  @uses EmberClockFace.SvgLineMixin
  @namespace EmberClockFace
*/
export default Ember.Component.extend( SvgLineMixin, {

  /**
    @property classNames
    @type {Array}
    @default `[ 'minute-mark' ]`
    @private
  */
  classNames: [ 'clock-hand' ],

  /**
    This the value of the clockhand in minutes.  A value of `15` will mean the
    clock hand will be rotated to point to the 15 minute mark (3 o'clock).

    @property value
    @type {Number}
  */
  value: 0,

  /**
    This is the angle to rotate the clock hand by to point to the correct time.
    It is used by the `transform` computed property to set the rotate angle.  A
    value of `90` will rotate the clock hand clockwise by 90 degrees, A value of
    `180` will rotate the clock hand by 180 degrees.

    @property rotate
    @type {Number}
    @private
  */
  rotate: Ember.computed( 'value', function() {
    var value = this.get('value') || 0;
    return 6 * value;
  }),

  /**
    @property y1
    @type {Number}
    @default 53
    @private
  */
  y1:53,

  /**
    @property y2
    @type {Number}
    @default 15
    @private
  */
  y2:15
});
