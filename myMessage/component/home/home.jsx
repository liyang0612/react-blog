import React from 'react';
import { Link } from 'react-router'
import List from './list'
class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="container">
					<div className="text-center blog-nav">
						<ul>
							<li>
								<a>About</a>
							</li>
							<li>
								<Link to="/message">Message</Link>
							</li>
						</ul>
					</div>
				</header>
				<section className="container bs-docs-container">
					<List/>
				</section>
			</div>
		)
	}
}

export default Home