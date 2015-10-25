import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('minute-marker', 'Integration | Component | minute marker', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(6);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{minute-marker value=minute }}`);

  assert.equal(this.$().text().trim(), '');

  // check the class names
  assert.ok(this.$('.minute-mark').get(0));

  // check the tag name
  assert.equal(this.$('.minute-mark').get(0).tagName, 'LINE');

  assert.equal(this.$('.minute-mark').css('transform'), 'none');

  this.set( 'minute', 10 );

  assert.equal(this.$('.minute-mark').attr('transform'), 'rotate(60 50 50)');

  this.set( 'minute', 30 );

  assert.equal(this.$('.minute-mark').attr('transform'), 'rotate(180 50 50)');
});
