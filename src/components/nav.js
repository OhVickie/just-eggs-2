import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function Nav() {
	return (
		<div className="header-links">
			<div><h4 className="header-link--title"><Link to="/">My Portfolio</Link></h4></div>
			<ul className="header-links--list">
				{/*<li className="header-links--item"><Link to="/">Home</Link></li>*/}
				<li className="header-links--item"><Link to="/resume">Resume</Link></li>
				<li className="header-links--item"><Link to="/projects">Projects</Link></li>
				<li className="header-links--item"><Link to="/contact">Contact</Link></li>
			</ul>

		</div>
	);
}

export default Nav;