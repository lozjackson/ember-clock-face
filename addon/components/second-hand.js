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
  */
  classNames: [ 'clock-hand', 'second-hand' ],

  /**
    @property y2
    @type {Number}
    @default 10
  */
  y2:10,

  /**
    Computed Property.

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
