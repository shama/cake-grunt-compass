# CakePHP Grunt Compass

An example CakePHP app setup using [gruntjs.com](http://gruntjs.com),
[compass-style.org](http://compass-style.org) and [cakephp.org](http://cakephp.org).

## Installation

* [Install nodejs](https://github.com/joyent/node/wiki/Installation)
* [Install ruby/gem](http://docs.rubygems.org/read/chapter/3)
* Install compass: `gem install compass`
* Install grunt: `npm install -g grunt`
* Install dependencies: `npm install`

## Usage

Merge this repo into your CakePHP project app folder. The required files in this repo
are: `grunt.js` and `package.json`.

Run `grunt` to compile your scss and js.

Run `grunt prod` to compile your scss and js for production.

Run `grunt watch` to compile your files as you save.

## File Locations

All the editing javascript is in `webroot/js/src`. Concat'd and minified are placed
into the `webroot/js` folder.

All the editing SCSS is in `webroot/css/src`. Compiled CSS is placed into the
`webroot/css` folder.

