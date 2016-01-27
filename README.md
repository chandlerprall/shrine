# Shrine

This repo demonstrates how to setup and build many custom modules from a single repository. The build process is barebones for simplicity and to easily allow customization. You can fork Shrine as a starting point or copy its principles in your own project.

The example modules in the `src` folder use React only to show support for external modules, there is absolutely no requirement or constraint on external npm modules you want to use.

## Building
Building creates a `build/deploy` directory which is the final result of assembling custom modules and installing any external dependencies. This directory is immediately ready to `require` in node or bundle with your favorite tool such as [webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/). 

1. `$ cd shrine`
2. `$ npm install`
3. `$ gulp build`

## Custom modules
When working with custom modules there is a very real chance your name will conflict with one of the 230k modules in npm. To avoid this, the custom modules are prefixed with the `@shrine` scope; for example the [`app` module's name](https://github.com/chandlerprall/shrine/blob/master/src/app/package.json) is `@shrine/app`. This scope is configurable (see below). The `package.json` files also set `"private": true` which will prevent accidental publishing to npm.

The only constraint on where custom modules can live is that they must all be in one parent directory that contains only your modules. They can be anywhere inside of this directory and nested however you'd like. To show this, the `footer` and `header` modules are nested in `src/supportingviews`.

## Configuration
There are a couple configuration values you can change in [gulptasks/build-constants.js](https://github.com/chandlerprall/shrine/blob/master/gulptasks/build-constants.js):

* `MODULE_PREFIX` tells the build process what custom scope is used
* `ENTRY_MODULE` full, scoped module name of your application's entry point
* `SRC_DIR` directory in the repository where your custom modules live
* `BUILD_DIR` output directory of all build processes
* `MODULES_BUILD_DIR` before being installed alongside the entry point, this is where your modules are built
* `DEPLOY_DIR` final output directory of the application and all supporting `node_modules`

## Build process
The build process is broken down into three steps.

### transpile-src
Transpiling involves flattening the `src` directory so the custom modules end up in a predictable location, similar to how a `node_modules` contents appear. During this step babel is run to convert from ES6/jsx-harmony -> ES5 and some transforms are applied to the `package.json` files to account for the transpiling.

### copy-entry-module
After the modules have been transpiled the app's entry point is copied to the deploy directory

### build
Everything is now in place and `npm install` is executed on the deploy directory. This starts with your entry module and uses npm's dependency tree to install the appropriate modules, both custom and external.