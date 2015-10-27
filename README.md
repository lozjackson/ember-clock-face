# ember-clock-face

The is an Ember addon that provides a clock face.  It uses the [ember-clock](https://github.com/lozjackson/ember-clock) addon as a dependency.  If you don't need a clock face, but you want to use a clock to update time sensitive properties, use [ember-clock](https://github.com/lozjackson/ember-clock) instead.




## Use

Basic clock face using the default parameters.

  ```
  {{clock-face}}
  ```

Clock face, 150px in size, with numbers.

  ```
  {{clock-face size="150" showClockNumbers=true}}
  ```




## Styling

The clock can be styled using CSS.

The clock face's svg element has the class name `clock-face`.

The clock hands have `hour-hand`, `minute-hand` and `second-hand` class names.  
The markers have `hour-mark` and `minute-mark` class names.

The clock numbers have the class name `clock-number`.




## Dependencies

* [ember-clock](https://github.com/lozjackson/ember-clock)




## Installation

npm install ember-clock-face --save-dev




## Demo

To try out a demo..

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit the demo app at http://localhost:4200.




## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
