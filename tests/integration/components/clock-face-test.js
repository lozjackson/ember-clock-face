import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import ClockService from 'ember-clock/services/clock';
// import Ember from 'ember';

moduleForComponent('clock-face', 'Integration | Component | clock face', {
  integration: true,
  // setup: function( container ) {
  //   //var app = arguments[1] || arguments[0];
  //   // Ember.Logger.log('app', container);
  //   // app.register('service:clock', ClockService);
  //   // app.inject('component', 'clock', 'service:clock');
  // }
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clock-face size=clockSize}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.ember-clock-face.clock-face').get(0));

  // check the tag name
  assert.equal(this.$('.ember-clock-face.clock-face').get(0).tagName, 'svg');
});
