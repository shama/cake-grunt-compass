# CakePHP Grunt Compass Jam

An example CakePHP app setup using [gruntjs.com](http://gruntjs.com),
[compass-style.org](http://compass-style.org), [jamjs.org](http://jamjs.org)
and [cakephp.org](http://cakephp.org).

## Installation

* [Install nodejs](https://github.com/joyent/node/wiki/Installation)
* [Install ruby/gem](http://docs.rubygems.org/read/chapter/3)
* Install compass: `gem install compass`
* Install grunt-cli: `npm install grunt-cli@0.2.x -g`
* Install jamjs: `npm install jamjs -g`
* Install dependencies: `npm install && jam install`

## Usage

Merge this repo into your CakePHP project app folder. The required files in this repo
are: `Gruntfile.js` and `package.json`.

Run `grunt` to compile your scss and js.

Run `grunt prod` to compile your scss and js for production.

Run `grunt watch` to compile your files as you save.

Run `jam install jquery` to install frontend packages with jam. Then require
them in your `webroot/js/src/main.js` file.

## File Locations

All the editing javascript is in `webroot/js/src`. Concat'd and minified are placed
into the `webroot/js` folder.

All the editing SCSS is in `webroot/css/src`. Compiled CSS is placed into the
`webroot/css` folder.

