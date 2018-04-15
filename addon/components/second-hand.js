/**
  @module ember-clock-face
*/
import ClockHandComponent from 'ember-clock-face/components/clock-hand';
import { alias } from '@ember/object/computed';

/**
  @class SecondHandComponent
  @extends EmberClockFace.ClockHandComponent
  @namespace EmberClockFace
*/
export default ClockHandComponent.extend({

  /**
    @property classNames
    @type {Array}
    @default `[ 'clock-hand', 'second-hand' ]`
    @private
  */
  classNames: [ 'clock-hand', 'second-hand' ],

  /**
    @property y2
    @type {Number}
    @default 10
    @private
  */
  y2:10,

  /**
    An alias of `clock.second`.  The value is set using the clock service to synchronize time.

    This the value of the clockhand in seconds.  A value of `15` will mean the
    clock hand will be rotated to point to the 15 second mark (3 o'clock).

    @property value
    @type {Number}
  */
  value: alias( 'clock.second' )
});
