/**
  @module ember-clock-face
*/
import Ember from 'ember';
import layout from '../templates/components/clock-face';

/**
  # Clock Face

  This component renders a clock face using an svg image element.

  To create a basic clock face using the default parameters.

  ```
  {{clock-face}}
  ```

  Clock face, 150px in size, with numbers.

  ```
  {{clock-face size="150" showClockNumbers=true}}
  ```


  @class ClockFaceComponent
  @namespace EmberClockFace
*/
export default Ember.Component.extend({

  /**
    @property layout
    @type {Object}
    @private
  */
  layout: layout,

  /**
    @property tagName
    @type {String}
    @default `svg`
    @private
  */
  tagName: 'svg',

  /**
    @property attributeBindings
    @type {Array}
    @default `[ 'width', 'height', 'viewBox' ]`
    @private
  */
  attributeBindings: [ 'width', 'height', 'viewBox' ],

  /**
    @property classNames
    @type {Array}
    @default `[ 'ember-clock-face', 'clock-face' ]`
    @private
  */
  classNames: [ 'ember-clock-face', 'clock-face' ],

  /**
    ## Size

    This is the size of the clock.  The size is used to set the `height` and `width`
    attributes of the svg element.  You can set a number, such as `50`, which
    would produce a clock face 50x50 pixels, or provide a string such as `50px`,
    `50cm`, `50mm`, etc

    ```
    // 50 px
    {{clock-face size="50"}}

    // 50 cm
    {{clock-face size="50cm"}}
    ```

    @property size
    @type {Number|String}
    @default `200`
  */
  size: 200,

  /**
    @property viewBox
    @type {String}
    @default `0 0 100 100`
    @private
  */
  viewBox: "0 0 100 100",

   /**
    ## Show Clock Numbers

    Display clock numbers on the clock face.

    ```
    {{clock-face showClockNumbers=true}}
    ```

    @property showClockNumbers
    @type {Boolean}
    @default `false`
  */
  showClockNumbers: false,

  /**
    ## Show hour markers

    Display hour-markers on the clock face.

    ```
    {{clock-face showClockHours=true}}
    ```

    @property showClockHours
    @type {Boolean}
    @default `false`
  */
  showClockHours: false,

  /**
    ## Show minute markers

    Display minute-markers on the clock face.

    ```
    {{clock-face showClockMinutes=true}}
    ```

    @property showClockMinutes
    @type {Boolean}
    @default `false`
  */
  showClockMinutes: false,

  /**
    This is the radius of the circle that makes up the body of the clock face.
    The svg element's viewbox is 100px in size. Therefore the clock face circle
    will fill the viewbox completely when set to 50.

    ```
    {{clock-face faceRadius="25"}}
    ```

    @property faceRadius
    @type {Number|String}
    @default `48`
  */
  faceRadius: 48,

  /**
    Alias of `size`.

    @property width
    @type {Number}
  */
  width: Ember.computed.alias('size'),

  /**
    Alias of `size`.

    @property height
    @type {Number}
  */
  height: Ember.computed.alias('size'),

  /**
    @property clockNumbers
    @type {Array}
    @private
  */
  clockNumbers: Ember.A([
    { text: 1,  x: 67,   y: 18   },
    { text: 2,  x: 82.5, y: 33   },
    { text: 3,  x: 89,   y: 54   },
    { text: 4,  x: 82.5, y: 73.5 },
    { text: 5,  x: 67,   y: 89   },
    { text: 6,  x: 47,   y: 95   },
    { text: 7,  x: 27,   y: 90   },
    { text: 8,  x: 11.5, y: 73.5 },
    { text: 9,  x: 5.5,  y: 54   },
    { text: 10, x: 10,   y: 33   },
    { text: 11, x: 24.5, y: 18   },
    { text: 12, x: 44,   y: 12   }
  ]),

  /**
    @property clockMinutes
    @type {Array}
    @private
  */
  clockMinutes: Ember.computed( function() {
    var minutes = [];
    for (var i = 1; i < 61; i++) {
      minutes.push({ value: i });
    }
    return minutes;
  })
});
