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
  */
  classNames: [ 'clock-hand', 'minute-hand' ],

  /**
    Computed Property.

    @property value
    @type {Number}
  */
  value: Ember.computed( 'clock.minute', function() {
    var clock = this.clock;
    if ( !clock ) {
      return 0;
    }
    return 6 * clock.get('minute');
  })
});
