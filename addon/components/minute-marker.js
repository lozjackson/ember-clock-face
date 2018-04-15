/**
  @module ember-clock-face
*/
import Component from '@ember/component';
import SvgLineMixin from 'ember-clock-face/mixins/svg-line';
import { computed } from '@ember/object';

/**
  @class MinuteMarkerComponent
  @uses EmberClockFace.SvgLineMixin
  @namespace EmberClockFace
*/
export default Component.extend( SvgLineMixin, {

  /**
    @property classNames
    @type {Array}
    @default `[ 'minute-mark' ]`
    @private
  */
  classNames: [ 'minute-mark' ],

  /**
    This is the value of the minute where the marker should be displayed.

    @property value
    @type {Number}
  */
  value: 0,

  /**
    @property y1
    @type {Number}
    @default 8
    @private
  */
  y1:8,

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
  rotate: computed( 'value', function() {
    var value = this.get('value') || 0;
    return 6 * value;
  })
});
