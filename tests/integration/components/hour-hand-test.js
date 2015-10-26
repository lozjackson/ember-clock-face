import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ClockService from 'ember-clock/services/clock';

moduleForComponent('hour-hand', 'Integration | Component | hour hand', {
  integration: true,

  beforeEach() {
    this.register( 'service:clock', ClockService );
    this.inject.service( 'clock' );
  }
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hour-hand}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.clock-hand.hour-hand').get(0));

  // check the tag name
  assert.equal(this.$('.clock-hand.hour-hand').get(0).tagName, 'LINE');
});

test('hand rotates', function(assert) {
  assert.expect(2);

  this.render(hbs`{{hour-hand clock=clock}}`);

  assert.equal(this.$('.clock-hand.hour-hand').css('transform'), 'none');
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var rotateHour = 30 * ( hour % 12 ) + minute / 2;
  // var rotateMinute = 6 * minute;

  assert.equal(this.$('.clock-hand.hour-hand').attr('transform'), `rotate(${rotateHour} 50 50)`, 'hour-hand should be rotated by ' + rotateHour );
});
