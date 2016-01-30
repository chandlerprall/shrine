import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import IndexView from '@shrine/indexView';
import DetailsView from '@shrine/detailsView';

function AppView() {
	return (
		<div>
			<h1>webbundle recipe</h1>
			<Router history={browserHistory}>
				<Route path="/" component={IndexView}/>
				<Route path="/details" component={DetailsView}/>
			</Router>
		</div>
	);
}

AppView.displayName = 'AppView';

// bootstrap the application
render(
	React.createElement(AppView),
	document.querySelector('#container')
);