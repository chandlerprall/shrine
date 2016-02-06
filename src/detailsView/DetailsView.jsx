import React from 'react';
import {Link} from 'react-router';
import Article from '@shrine/article';
import Summary from '@shrine/summary';

export default function DetailsView() {
	return (
		<div>
			<p>encapsulate works by automatically adding the module's name and version to JSX classNames and CSS selectors. For example, the Summary JSX and CSS is transformed to</p>

			<pre dangerouslySetInnerHTML={{__html:`&lt;div className=&quot;_shrine_summary_1_0_0&quot;&gt;
    &lt;h1 className=&quot;_shrine_summary_1_0_0&quot;&gt;{title}&lt;/h1&gt;
    &lt;p className=&quot;_shrine_summary_1_0_0&quot;&gt;{content}&lt;/p&gt;
&lt;/div&gt;`}}></pre>

			<pre dangerouslySetInnerHTML={{__html:`h2._shrine_summary_1_0_0 {
    font-size: 14px;
    margin: 5px 0;
}`}}></pre>

			<p>This scoping prevents modules from styling any content outside of itself. It keeps the source CSS simple and easy to work with while also providing peace of mind for developers as it is now impossible to break the CSS of another module.</p>

			<Link to="/">back home</Link>
		</div>
	);
}

DetailsView.displayName = 'DetailsView';