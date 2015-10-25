import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hour-marker', 'Integration | Component | hour marker', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(6);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hour-marker value=hour}}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.hour-mark').get(0));

  // check the tag name
  assert.equal(this.$('.hour-mark').get(0).tagName, 'LINE');

  assert.equal(this.$('.hour-mark').css('transform'), 'none');

  this.set( 'hour', 2 );

  assert.equal(this.$('.hour-mark').attr('transform'), 'rotate(60 50 50)');

  this.set( 'hour', 6 );

  assert.equal(this.$('.hour-mark').attr('transform'), 'rotate(180 50 50)');
});
