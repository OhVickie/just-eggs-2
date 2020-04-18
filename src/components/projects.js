import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Projects() {
	return (
		<div className="projects-page">
			<Nav />

			{/*Will have cards with the project name and description on them, also a button to view Github code*/}
			<div className="projects-page--content">

				<div className="row">
					<div className="col-1-of-3">
						<div className="card ">
							<h3>Recipe App</h3>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<Link to="/#" className="btn btn--white btn--animated">View Project</Link>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card">
							<h3>Recipe App</h3>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<Link to="/#" className="btn btn--white btn--animated">View Project</Link>
						</div>
					</div>

					<div className="col-1-of-3">
						<div className="card ">
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua</p>
							<a href="https://github.com/OhVickie?tab=repositories" className="btn btn--white btn--animated">View Project</a>
						</div>
					</div>
				</div>

			</div>
			
		</div>
		
	);
}

export default Projects;