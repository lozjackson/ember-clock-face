import EmberObject from '@ember/object';
// import SvgLineMixin from '../../../mixins/svg-line';
import SvgLineMixin from 'ember-clock-face/mixins/svg-line';
import { module, test } from 'qunit';

module('Unit | Mixin | svg line');

// Replace this with your real tests.
test('it works', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();
  assert.ok(subject);
});

test('tagName is line', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('tagName'), 'line', '`tagName` should be `LINE`');
});

test('test x1', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('x1'), 50, '`x1` should be `50`');

  subject.set('x1', 25);

  assert.equal(subject.get('x1'), 25, '`x1` should be `25`');
});

test('test x2', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('x2'), 50, '`x2` should be `50`');

  subject.set('x2', 25);

  assert.equal(subject.get('x2'), 25, '`x2` should be `25`');
});

test('test y1', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('y1'), 50, '`y1` should be `50`');

  subject.set('y1', 25);

  assert.equal(subject.get('y1'), 25, '`y1` should be `25`');
});

test('test y2', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('y2'), 0, '`y2` should be `0`');

  subject.set('y2', 25);

  assert.equal(subject.get('y2'), 25, '`y2` should be `25`');
});

test('test transform', function(assert) {
  var SvgLineObject = EmberObject.extend(SvgLineMixin);
  var subject = SvgLineObject.create();


  assert.equal(subject.get('transform'), 'rotate(0 50 50)', '`transform` should be `rotate(0 50 50)`');

  subject.set('rotate', 25);

  assert.equal(subject.get('transform'), 'rotate(25 50 50)', '`transform` should be `rotate(25 50 50)`');
});
