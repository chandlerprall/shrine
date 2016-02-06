import React from 'react';
import {Link} from 'react-router';
import Article from '@shrine/article';
import Summary from '@shrine/summary';

export default function IndexView() {
	return (
		<div>
			<p>What fun are modules if you can't use them to make your code better? The scoped-jsx-scss recipe demonstrates how your JSX and CSS code can be coupled together, providing some awesome benefits:</p>

			<ul>
				<li>your CSS (or SCSS, LESS, etc) stays simple as can be</li>
				<li>it is impossible to accidentally style code outside of your module</li>
				<li>clean, enforced separation of concern means concentrating on the right scope</li>
			</ul>

			<h2>Example</h2>

			<p>Let's build two modules: Summary and Article; their JSX and CSS is shown below.</p>

			<div className="left">
				<strong>Summary</strong>
				<pre dangerouslySetInnerHTML={{__html:`&lt;div&gt;
    &lt;h1&gt;{title}&lt;/h1&gt;
    &lt;p&gt;{content}&lt;/p&gt;
&lt;/div&gt;`}}></pre>

				<pre dangerouslySetInnerHTML={{__html:`h2 {
    font-size: 14px;
    margin: 5px 0;
}`}}></pre>
			</div>

			<div className="right">
				<strong>Article</strong>
				<pre dangerouslySetInnerHTML={{__html:`&lt;article&gt;
    &lt;h1&gt;{title}&lt;/h1&gt;
    &lt;p&gt;{content}&lt;/p&gt;
&lt;/article&gt;`}}></pre>

			<pre dangerouslySetInnerHTML={{__html:`h2 {
    font-size: 20px;
    margin: 5px 0;
}`}}></pre>
			</div>

			<p>Even though both modules style the &lt;h1&gt; tag, encapsulate has tied the JSX and CSS together allowing the modules to live on a page together without conflict:</p>

			<div className="left">
				<Summary title="Encapsulation Summary" content="Click to see the top 10 reasons why styles shouldn't cascade."/>
			</div>

			<div className="right">
				<Article title="Encapsulation Article" content="This is the awe-inspiring story of an h1 tag that finally found its family. For too long developers have had to come up with weird patterns to associate CSS with the correct HTML."/>
			</div>

			<div className="clear">
				<Link to="/details">see what's going on behind the scenes</Link>
			</div>
		</div>
	);
}

IndexView.displayName = 'IndexView';