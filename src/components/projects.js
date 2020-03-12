import React from 'react'; import Nav from './nav';
import { Link } from 'react-router-dom';

function Projects() {
	return (
		<header class="header-links">
			<Nav />

			{/*Will have cards with the project name and description on them, also a button to view Github code*/}
			<div class="projects-page">

				<div class="row">
					<div class="col-1-of-3">
						<div class="card ">
							<h3>Recipe App</h3>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<Link to="/#" class="btn btn--white btn--animated">View Project</Link>
						</div>
					</div>

					<div class="col-1-of-3">
						<div class="card">
							<h3>Recipe App</h3>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<Link to="/#" class="btn btn--white btn--animated">View Project</Link>
						</div>
					</div>

					<div class="col-1-of-3">
						<div class="card ">
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<Link to="/#" class="btn btn--white btn--animated">View Project</Link>
						</div>
					</div>
				</div>

			</div>
			
		</header>
		
	);
}

export default Projects;