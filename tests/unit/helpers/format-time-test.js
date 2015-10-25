import { formatTime } from '../../../helpers/format-time';
import { module, test } from 'qunit';

module('Unit | Helper | format time');


test('test 12-hour', function(assert) {
  var result = formatTime([ '21' ]);
  assert.equal(result, '21');

  result = formatTime([ '8', '12-hour' ]);
  assert.equal(result, '8');

  result = formatTime([ '21', '12-hour' ]);
  assert.equal(result, '9');

  result = formatTime([ '0', '12-hour' ]);
  assert.equal(result, '12');
});

test('test meridian', function(assert) {
  var result = formatTime([ '0', 'meridian' ]);
  assert.equal(result, 'am');

  result = formatTime([ '9', 'meridian' ]);
  assert.equal(result, 'am');

  result = formatTime([ '12', 'meridian' ]);
  assert.equal(result, 'pm');

  result = formatTime([ '21', 'meridian' ]);
  assert.equal(result, 'pm');
});
