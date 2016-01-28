import React from 'react';
import Header from '@shrine/header';
import Footer from '@shrine/footer';
import {safeSort} from '@shrine/util';
import {colors} from './appdata.json';

const sortedColors = safeSort(colors);

export default function AppView() {
	return (
		<div>
			<Header/>
			<strong>A sorted list of colors</strong>
			<ul>
				{sortedColors.map((color) => color)}
			</ul>
			<Footer/>
		</div>
	);
}

AppView.displayName = 'AppView';