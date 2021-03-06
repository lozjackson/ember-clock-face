/**
  @module ember-clock-face
*/
import ClockHandComponent from 'ember-clock-face/components/clock-hand';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

/**
  @class HourHandComponent
  @extends EmberClockFace.ClockHandComponent
  @namespace EmberClockFace
*/
export default ClockHandComponent.extend({

  /**
    @property classNames
    @type {Array}
    @default `[ 'clock-hand', 'hour-hand' ]`
    @private
  */
  classNames: [ 'clock-hand', 'hour-hand' ],

  /**
    @property y2
    @type {Number}
    @default 25
    @private
  */
  y2:25,

  /**
    An alias of 'value'.

    @property rotate
    @type {Number}
    @private
  */
  rotate: alias( 'value' ),

  /**
    Computed Property.  The value is set using the clock service to synchronize time.

    This is the angle to rotate the clock hand by to point to the correct time.
    It is used by the `transform` computed property to set the rotate angle.

    @property value
    @type {Number}
  */
  value: computed( 'clock.{hour,minute}', function() {
    var clock = this.clock;
    if ( !clock ) {
      return 0;
    }
    var hour = clock.get('hour');
    var minute = clock.get('minute');
    return 30 * ( hour % 12 ) + minute / 2;
  })
});
