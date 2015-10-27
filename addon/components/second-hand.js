/**
  @module ember-clock-face
*/
import Ember from 'ember';
import ClockHandComponent from 'ember-clock-face/components/clock-hand';

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
    Computed Property.  The value is set using the clock service to synchronize time.

    This is the angle to rotate the clock hand by to point to the correct time.
    It is used by the `transform` computed property to set the rotate angle.

    @property value
    @type {Number}
  */
  value: Ember.computed( 'clock.second', function() {
    var clock = this.clock;
    if ( !clock ) {
      return 0;
    }
    return 6 * clock.get('second');
  })
});
