# scoped-jsx-css recipe

What fun are modules if you can't use them to make your code better? The scoped-jsx-scss recipe demonstrates how your JSX and CSS code can be coupled together, providing some awesome benefits:

* your CSS (or SCSS, LESS, etc) stays simple as can be
* it is impossible to accidentally style code outside of your module
* clean, enforced separation of concern means concentrating on the right scope

Running the recipe (`gulp start-server`) provides a live demo of this unique approach to styling.

The scoped-jsx-scss recipe makes two changes two the build:
1. an additional Babel plugin is used, [babel-plugin-encapsulate-jsx](https://github.com/Craftsy/babel-plugin-encapsulate-jsx)
2. the modules' SCSS files are transpiled to css, encapsulated with [gulp-encapsulate-css](https://github.com/Craftsy/gulp-encapsulate-css), and saved as bundle.css 