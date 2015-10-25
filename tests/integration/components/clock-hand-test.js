import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clock-hand', 'Integration | Component | clock hand', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(6);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{clock-hand value=clockHandValue}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.clock-hand').get(0));

  // check the tag name
  assert.equal(this.$('.clock-hand').get(0).tagName, 'LINE');

  assert.equal(this.$('.clock-hand').css('transform'), 'none');

  this.set( 'clockHandValue', 60 );

  assert.equal(this.$('.clock-hand').attr('transform'), 'rotate(60 50 50)');

  this.set( 'clockHandValue', 180 );

  assert.equal(this.$('.clock-hand').attr('transform'), 'rotate(180 50 50)');
});
