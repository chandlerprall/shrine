import React from 'react';
import {Link} from 'react-router';

export default function DetailsView() {
	return (
		<div>
			<p>This recipe takes the webbundle recipe further by introducing server-side rendering. After the bundle is generated it is used by both the node server and client-side in the browser to enable an SEO-friendly Single Page App.</p>
			<p>While a lot of the changes for this recipe are to the server itself, a few modifications are made to the react-router setup in @shrine/app. Most notably the module separately defines the application routes and exports a few react &amp; react-router modules for use by template.html in the browser.</p>
			<p>The build process itself has only one modification from the webbundle recipe: passing the `standalone` configuration option to browserify which allows the entry point (@shrine/app) to be used in an external module - in this case the client-side bootstraping code.</p>
			<p>CSS styles are still served from a single file in the server's public directory.</p>
			<Link to="/">back home</Link>
		</div>
	);
}

DetailsView.displayName = 'DetailsView';