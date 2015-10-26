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




## Dependencies

* [ember-clock](https://github.com/lozjackson/ember-clock)




## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
