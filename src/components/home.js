import React from 'react';
import { Link } from 'react-router-dom';

function Home () {
    return (
		<header class="Home">


			<div class="home-grid">
				<div banner__text>
					<h1 class="banner__text--main">
						<span>Victory Esim</span>
					</h1>
					<h1 class="banner__text--sub">
						<span class="banner__text--sub-1">Developer </span>
						<span class="banner__text--sub-2"> + </span>
						<span class="banner__text--sub-3"> Designer</span>
					</h1>

					{/*----------Clicking on this should link to resume page-----------*/}
					{/*<a href="components/resume.js" class="btn btn--white btn--animated">View My Resume</a>*/}
					<Link to="/resume" class="btn btn--white btn--animated">View My Resume</Link>
				</div>

				<div class="social-links">
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

		</header>
    );
}

export default Home;
