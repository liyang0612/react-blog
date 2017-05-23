import React from 'react';
import { Link } from 'react-router'
class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="row home-banner">
					<div className="navbar navbar-static-top bs-docs-nav">
						<div className="container">
							<a className="navbar-brand">About</a>
							<Link to="/message" className="navbar-brand">Message</Link>
						</div>
					</div>
					<div className="col-md-12"></div>
				</div>
			</div>
		)
	}
}

export default Home