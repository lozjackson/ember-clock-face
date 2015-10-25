import Ember from 'ember';
import layout from '../templates/components/clock-face';

export default Ember.Component.extend({
  layout: layout,

  tagName: 'svg',

  attributeBindings: [ 'width', 'height', 'viewBox' ],

  classNames: [ 'ember-clock-face', 'clock-face' ],

  size: 200,

  viewBox: "0 0 100 100",

  showClockNumbers: false,

  showClockHours: false,

  showClockMinutes: false,

  faceRadius: 48,

  width: Ember.computed.alias('size'),

  height: Ember.computed.alias('size'),

  hour: Ember.computed( 'clock.hour', 'clock.minute', function() {
    var hour = this.clock.get('hour');
    var minute = this.clock.get('minute');
    return 30 * ( hour % 12 ) + minute / 2;
  }),

  minute: Ember.computed( 'clock.minute', function() {
    return 6 * this.clock.get('minute');
  }),

  second: Ember.computed( 'clock.second', function() {
    return 6 * this.clock.get('second');
  })
});
