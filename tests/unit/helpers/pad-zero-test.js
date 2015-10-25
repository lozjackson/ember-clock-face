import { padZero } from '../../../helpers/pad-zero';
import { module, test } from 'qunit';

module('Unit | Helper | pad zero');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = padZero(42);
  assert.ok(result);

  result = padZero(10);
  assert.ok(result);

  result = padZero(9);
  assert.equal(result, '09');

  result = padZero(2);
  assert.equal(result, '02');

  result = padZero(0);
  assert.equal(result, '00');
});
