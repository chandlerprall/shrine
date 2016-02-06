import React from 'react';
import {Router, Route, IndexRoute, createMemoryHistory, browserHistory} from 'react-router';

import AppView from './AppView';
import IndexView from '@shrine/indexView';
import DetailsView from '@shrine/detailsView';

const isInBrowser = typeof document !== 'undefined';

export let routes = (
	<Route path="/" component={AppView}>
		<IndexRoute component={IndexView}/>
		<Route path="/details" component={DetailsView}/>
	</Route>
);