var React = require('react');
var reactDomServer = require('react-dom/server');
var express = require('express');
var reactRouter = require('react-router');

// load react-router routes
var bundle = require('./public/bundle');
var routes = bundle.exports.routes;

// start server
var app = express();

app.use(express.static('public'));

app.get('*', function (req, res) {
	reactRouter.match(
		{
			routes: routes,
			location: req.url
		},
		(error, redirectLocation, renderProps) => {
			if (error) {
				res.status(500).send(error.message);
			} else if (redirectLocation) {
				res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			} else if (renderProps) {
				res.status(200).send(
					'<!DOCTYPE html>' + reactDomServer.renderToString(
						React.createElement(
							reactRouter.RouterContext,
							renderProps
						)
					)
				);
			} else {
				res.status(404).send('Not found');
			}
		}
	);
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});