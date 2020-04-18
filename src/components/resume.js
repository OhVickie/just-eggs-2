import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './nav';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

function Resume() {
	return (
		<div className="resume-page">
				<Nav />

			<div className="resume-page--content">
				<h1>Resume</h1>
				<div class="row">
					<div class="col-1-of-2">
						<h2></h2>
						<p></p>
						<hr></hr>
						<h2>I am:</h2>
						<p>
							<li></li>
						</p>
					</div>
					<div class="col-1-of-2">
						<h2>Education</h2>
						<Education />
						<h2>Experience</h2>
						<Experience />
						<h2>Skills</h2>
						<Skills/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;