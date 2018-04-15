import { helper } from '@ember/component/helper';

export function formatTime( params ) {
  var value = params[0];
  var mode = params[1];
  var result = value;
  switch( mode ) {
    case '12-hour':
      result = value % 12 || 12;
      break;
    case 'meridian':
      result = ( value < 12 ) ? 'am':'pm';
      break;
    default:
      result = value;
  }
  return result;
}

export default helper(formatTime);
