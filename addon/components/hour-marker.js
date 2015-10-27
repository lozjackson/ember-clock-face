/**
  @module ember-clock-face
*/
import Ember from 'ember';
import SvgLineMixin from 'ember-clock-face/mixins/svg-line';

/**
  @class HourMarkerComponent
  @uses EmberClockFace.SvgLineMixin
  @namespace EmberClockFace
*/
export default Ember.Component.extend( SvgLineMixin, {

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
    @property y1
    @type {Number}
    @default 12
    @private
  */
  y1:12,

  /**
    @property y2
    @type {Number}
    @default 5
    @private
  */
  y2:5,

  /**
    This is the angle to rotate the marker to point to the correct time.
    It is used by the `transform` computed property to set the rotate angle.  A
    value of `90` will rotate the marker clockwise by 90 degrees and point to
    15 minutes (3 0'clock), A value of `180` will rotate the marker by 180 degrees
    and point to 30 minutes (6 o'clock).

    @property rotate
    @type {Number}
    @private
  */
  rotate: Ember.computed( 'value', function() {
    var value = this.get('value') || 0;
    return 30 * value;
  })
});
