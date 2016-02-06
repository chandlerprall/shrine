# universalbundle recipe

Further extending the [webbundle recipe](https://github.com/chandlerprall/shrine/tree/recipe/webbundle) which ran the bundled application only in the browser, the universalbundle also runs the application in node to deliver pre-rendered content to the browser.

Key differences to `universalbundle` are:
1. `@shrine/app` module separately defines the applications routes and exports some `react` and `react-router` modules so the client-side bootstrap code can live in `template.html` instead of `AppView.jsx`
2. The build script has one modification: adding the `standalone` browserify configuration so the bundle can properly export a few modules needed in client-side rendering.
3. `server.js` imports the bundle and passes all requests through to the application..