import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import {routes} from './routes';

export default function AppView({children}) {
	return (
		<div>
			<h1>scoped-jsx-scss recipe</h1>
			{children}
		</div>
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