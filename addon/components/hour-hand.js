/**
  @module ember-clock-face
*/
import Ember from 'ember';
import ClockHandComponent from 'ember-clock-face/components/clock-hand';

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
  */
  classNames: [ 'clock-hand', 'hour-hand' ],

  /**
    @property y2
    @type {Number}
    @default 25
  */
  y2:25,

  /**
    Computed Property.

    @property value
    @type {Number}
  */
  value: Ember.computed( 'clock.hour', 'clock.minute', function() {
    var clock = this.clock;
    if ( !clock ) {
      return 0;
    }
    var hour = clock.get('hour');
    var minute = clock.get('minute');
    return 30 * ( hour % 12 ) + minute / 2;
  })
});
