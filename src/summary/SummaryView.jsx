import React, {PropTypes} from 'react';

export default function Summary({title, content}) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
}

Summary.displayName = 'Article';

Summary.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};