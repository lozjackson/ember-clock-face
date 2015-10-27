/**
  @module ember-clock-face
*/
import Ember from 'ember';
import ClockHandComponent from 'ember-clock-face/components/clock-hand';

/**
  @class MinuteHandComponent
  @extends EmberClockFace.ClockHandComponent
  @namespace EmberClockFace
*/
export default ClockHandComponent.extend({

  /**
    @property classNames
    @type {Array}
    @default `[ 'clock-hand', 'minute-hand' ]`
    @private
  */
  classNames: [ 'clock-hand', 'minute-hand' ],

  /**
    An alias of `clock.minute`.  The value is set using the clock service to synchronize time.

    This the value of the clockhand in minutes.  A value of `15` will mean the
    clock hand will be rotated to point to the 15 minute mark (3 o'clock).

    @property value
    @type {Number}
  */
  value: Ember.computed.alias( 'clock.minute' )
});
