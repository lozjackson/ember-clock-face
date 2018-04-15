/**
  @module ember-clock-face
*/
import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

/**
  @class SvgLineMixin
  @namespace EmberClockFace
*/
export default Mixin.create({

  /**
    @property tagName
    @type {String}
    @default `line`
    @private
  */
  tagName: 'line',

  /**
    @property attributeBindings
    @type {Array}
    @default `[ 'x1', 'x2', 'y1', 'y2', 'transform' ]`
    @private
  */
  attributeBindings: [ 'x1', 'x2', 'y1', 'y2', 'transform' ],

  /**
    @property x1
    @type {Number}
    @default 50
    @private
  */
  x1: 50,

  /**
    @property y1
    @type {Number}
    @default 50
    @private
  */
  y1: 50,

  /**
    @property x2
    @type {Number}
    @default 50
    @private
  */
  x2: 50,

  /**
    @property y2
    @type {Number}
    @default 0
    @private
  */
  y2:0,

  /**
    @property rotate
    @type {Number}
    @default `0`
    @private
  */
  rotate: 0,

  /**
    @property transform
    @type {String}
    @default `rotate(0 50 50)`
    @private
  */
  transform: computed('rotate', function() {
    var rotate = this.get('rotate') || 0;
    return `rotate(${rotate} 50 50)`;
  })
});
