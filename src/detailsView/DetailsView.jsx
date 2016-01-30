import React from 'react';
import {Link} from 'react-router';

export default function DetailsView() {
	return (
		<div>
			<p>This recipe builds on top of the base repo by using browserify to bundle the application and also servers the bundle through a simple express webserver.</p>
			<p>The gulp build task has been extended to call browserify and write the resulting bundle to the server's `public` directory. A new gulp task was added called `start-server` which, surprisingly enough, starts the express server.</p>
			<p>All CSS styles are coming from a global stylesheet in the server's public directory.</p>
			<Link to="/">back home</Link>
		</div>
	);
}

DetailsView.displayName = 'DetailsView';