import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ClockService from 'ember-clock/services/clock';

moduleForComponent('clock-face', 'Integration | Component | clock face', {
  integration: true,

  beforeEach() {
    this.register( 'service:clock', ClockService );
    this.inject.service( 'clock' );
  }
});

/*
  check it renders with the correct `tagName` and `classNames`
*/
test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // this.inject.service( 'clock' );
  this.render(hbs`{{clock-face size=clockSize}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.ember-clock-face.clock-face').get(0));

  // check the tag name
  assert.equal(this.$('.ember-clock-face.clock-face').get(0).tagName, 'svg');
});

test('clock service exists and has correct time', function(assert) {
  assert.expect(4);

  this.render(hbs`{{clock-face}}`);

  assert.ok(this.clock);
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();

  this.clock.stop();

  assert.equal(this.clock.get('second'), second, 'clock.second should be ' + second);
  assert.equal(this.clock.get('minute'), minute, 'clock.minute should be ' + minute);
  assert.equal(this.clock.get('hour'), hour, 'clock.hour should be ' + hour);
});

test('clock hands exist', function(assert) {
  assert.expect(3);

  this.render(hbs`{{clock-face}}`);

  assert.ok(this.$('.clock-hand.hour-hand').get(0));
  assert.ok(this.$('.clock-hand.minute-hand').get(0));
  assert.ok(this.$('.clock-hand.second-hand').get(0));
});

test('can set size', function(assert) {
  assert.expect(4);

  this.render(hbs`{{clock-face size=clockSize}}`);

  this.set( 'clockSize', 500 );

  assert.equal(this.$('.clock-face').attr('width'), '500', 'width should be 500' );
  assert.equal(this.$('.clock-face').attr('height'), '500', 'height should be 500' );

  this.set( 'clockSize', 100 );

  assert.equal(this.$('.clock-face').attr('width'), '100', 'width should be 100' );
  assert.equal(this.$('.clock-face').attr('height'), '100', 'height should be 100' );
});

test('has correct viewbox attr', function(assert) {
  assert.expect(4);

  this.render(hbs`{{clock-face}}`);
  var viewBox = this.$('.clock-face').get(0).viewBox;
  assert.equal(viewBox.baseVal.height, '100', 'viewBox height should be 100' );
  assert.equal(viewBox.baseVal.width, '100', 'viewBox width should be 100' );
  assert.equal(viewBox.baseVal.x, '0', 'viewBox x should be 0' );
  assert.equal(viewBox.baseVal.y, '0', 'viewBox y should be 0' );
});

// test('hands rotate', function(assert) {
//   assert.expect(3);
//
//   this.render(hbs`{{clock-face clock=clock}}`);
//
//   var date = new Date();
//   var second = date.getSeconds();
//   var minute = date.getMinutes();
//   var hour = date.getHours();
//
//   var rotateHour = 30 * ( hour % 12 ) + minute / 2;
//   var rotateMinute = 6 * minute;
//   var rotateSecond = 6 * second;
//
//   assert.equal(this.$('.clock-hand.hour-hand').attr('transform'), `rotate(${rotateHour} 50 50)`, 'hour-hand should be rotated by ' + rotateHour );
//   assert.equal(this.$('.clock-hand.minute-hand').attr('transform'), `rotate(${rotateMinute} 50 50)`, 'minute-hand should be rotated by ' + rotateMinute );
//   assert.equal(this.$('.clock-hand.second-hand').attr('transform'), `rotate(${rotateSecond} 50 50)`, 'second-hand should be rotated by ' + rotateSecond );
// });

test('12 numbers are displayed', function(assert) {
  assert.expect(1);

  this.render(hbs`{{clock-face showClockNumbers=true}}`);

  assert.equal(this.$('.clock-face .clock-number').get('length'), 12);
});

test('12 hour markers are displayed', function(assert) {
  assert.expect(1);

  this.render(hbs`{{clock-face showClockHours=true}}`);

  assert.equal(this.$('.clock-face .hour-mark').get('length'), 12);
});

test('60 minute markers are displayed', function(assert) {
  assert.expect(1);

  this.render(hbs`{{clock-face showClockMinutes=true}}`);

  assert.equal(this.$('.clock-face .minute-mark').get('length'), 60);
});
