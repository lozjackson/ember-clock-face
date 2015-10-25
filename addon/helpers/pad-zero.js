import Ember from 'ember';

export function padZero(value/*, hash*/) {
  if (parseInt(value) < 10) {
    value = '0' + value;
  }
  return value;
}

export default Ember.Helper.helper(padZero);
