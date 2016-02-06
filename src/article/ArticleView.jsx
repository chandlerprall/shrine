import React, {PropTypes} from 'react';

export default function Article({title, content}) {
	return (
		<article>
			<h1>{title}</h1>
			<p>{content}</p>
		</article>
	);
}

Article.displayName = 'Article';

Article.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};