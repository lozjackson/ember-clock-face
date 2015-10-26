import Ember from 'ember';

/*
  Pad the `value` with a leading zero if it is less than 10.
*/
export function padZero(value/*, hash*/) {
  return( parseInt( value ) < 10 ) ? '0' + value : value;
}

export default Ember.Helper.helper(padZero);
