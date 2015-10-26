import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ClockService from 'ember-clock/services/clock';

moduleForComponent('minute-hand', 'Integration | Component | minute hand', {
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

  this.render(hbs`{{minute-hand}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.clock-hand.minute-hand').get(0));

  // check the tag name
  assert.equal(this.$('.clock-hand.minute-hand').get(0).tagName, 'LINE');
});

test('hand rotates', function(assert) {
  assert.expect(2);

  this.render(hbs`{{minute-hand clock=clock}}`);

  assert.equal(this.$('.clock-hand.minute-hand').css('transform'), 'none');
  var date = new Date();
  var minute = date.getMinutes();
  var rotateMinute = 6 * minute;

  assert.equal(this.$('.clock-hand.minute-hand').attr('transform'), `rotate(${rotateMinute} 50 50)`, 'minute-hand should be rotated by ' + rotateMinute );
});
