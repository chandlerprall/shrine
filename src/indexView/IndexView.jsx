import React from 'react';
import {Link} from 'react-router';

export default function IndexView() {
	return (
		<div>
			<p>This is the universalbundle recipe. Page contents are rendered on a node server and sent to the browser before the bundled script takes over allowing for an SEO-friendly Single Page App experience.</p>
			<Link to="/details">see specific details</Link>
		</div>
	);
}

IndexView.displayName = 'IndexView';