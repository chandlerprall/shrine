import React from 'react';

export default function IndexView() {
	return (
		<div>
			This is the shrine webbundle recipe. It is powered by a simple node+express server that is serving bundle.js from the build.
			<br/><br/>
			<a href="/details">see specifics</a>
		</div>
	);
}

IndexView.displayName = 'IndexView';