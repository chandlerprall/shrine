# webbundle recipe

This recipe demonstrates how to use browserify to bundle the mono repo and deploy it with an express server. To keep the build process simple `server.js` is intentionally restricted to ES5 to avoid additional transpiling.

An additional gulp task, `start-server` was added which will start the express server on port 3000 after a successful build.

Instead of keeping the server in the mono repo you could move it into its own project and build process, or further extend this repo's build steps to add more complexity to the server.  