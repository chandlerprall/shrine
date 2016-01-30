import React from 'react';
import {Link} from 'react-router';

export default function IndexView() {
	return (
		<div>
			<p>This is the shrine webbundle recipe. It is powered by a simple node+express server that is serving bundle.js from the build.</p>
			<Link to="/details">see specific details</Link>
		</div>
	);
}

IndexView.displayName = 'IndexView';