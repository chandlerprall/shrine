import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import {routes} from './routes';

export default function AppView({children}) {
	return (
		<html>
			<head>
				<title>scoped-jsx-scss recipe</title>
				<link rel="stylesheet" type="text/css" href="/bundle.css"/>
			</head>

			<body>
				<h1>scoped-jsx-scss recipe</h1>
				{children}

				<script type="text/javascript" src="/bundle.js"></script>
				<script type="text/javascript" dangerouslySetInnerHTML={{__html:`
					BundledApp.exports.render(
						BundledApp.exports.React.createElement(
							BundledApp.exports.Router,
							{history: BundledApp.exports.browserHistory},
							BundledApp.exports.routes
						),
						document
					);
				`}}></script>
			</body>
		</html>
	);
}

AppView.displayName = 'AppView';

export const exports = {
	React,
	render,
	AppView,
	routes,
	Router,
	browserHistory
};