import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import ClockService from 'ember-clock/services/clock';
import Ember from 'ember';

moduleForComponent('second-hand', 'Integration | Component | second hand', {
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

  this.render(hbs`{{second-hand}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.clock-hand.second-hand').get(0));

  // check the tag name
  assert.equal(this.$('.clock-hand.second-hand').get(0).tagName, 'LINE');
});

test('hand rotates', function(assert) {
  assert.expect(2);

  this.render(hbs`{{second-hand clock=clock}}`);

  assert.equal(this.$('.clock-hand.second-hand').css('transform'), 'none');
  var date = new Date();
  var second = date.getSeconds();
  var rotateSecond = 6 * second;

  assert.equal(this.$('.clock-hand.second-hand').attr('transform'), `rotate(${rotateSecond} 50 50)`, 'second-hand should be rotated by ' + rotateSecond );
});

test('second hand ticks', function (assert) {
  assert.expect(2);
  var that = this;
  this.render(hbs`{{second-hand clock=clock}}`);


  var date = new Date();
  var second = date.getSeconds();
  var rotateSecond = 6 * second;

  assert.equal(that.$('.clock-hand.second-hand').attr('transform'), `rotate(${rotateSecond} 50 50)`, 'second-hand should be rotated by ' + rotateSecond );

  window.QUnit.stop();

  Ember.run.later(function() {
    var date = new Date();
    var second = date.getSeconds();
    var rotateSecond = 6 * second;

    assert.equal(that.$('.clock-hand.second-hand').attr('transform'), `rotate(${rotateSecond} 50 50)`, 'second-hand should be rotated by ' + rotateSecond );

    window.QUnit.start();
  }, 2050);
});
