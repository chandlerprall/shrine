import React from 'react';
import Header from '@shrine/header';
import Footer from '@shrine/footer';

export default function AppView() {
	return (
		<div>
			<Header/>
			<Footer/>
		</div>
	);
}

AppView.displayName = 'AppView';