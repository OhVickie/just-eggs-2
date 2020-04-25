import React from 'react';
import { Link } from 'react-router-dom';
//import Nav from './nav';

function Home () {
    return (
		<body className="Home">

			<div className="home-grid">
				<div banner__text>
					<h1 className="banner__text--main">
						<span>Victory Esim</span>
					</h1>
					<h1 className="banner__text--sub">
						<span className="banner__text--sub-1">Developer </span>
						<span className="banner__text--sub-2"> + </span>
						<span className="banner__text--sub-3"> Designer</span>
					</h1>

					{/*----------Clicking on this should link to resume page-----------*/}
					{/*<a href="components/resume.js" class="btn btn--white btn--animated">View My Resume</a>*/}
					<Link to="/resume" className="btn btn--white btn--animated">View My Resume</Link>
				</div>

				<div className="social-links">
					{/*LinkedIn*/}
					<a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-linkedin-square" aria-hidden="true" />
					</a>

					{/*Github*/}
					<a href="https://github.com/OhVickie?tab=repositories" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-github-square" aria-hidden="true" />
					</a>
				</div>

			</div>

		</body>
    );
}

export default Home;
