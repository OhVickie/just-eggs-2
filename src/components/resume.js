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
				<div className="row">
					<div className="">
						<h2></h2>
						<p></p>
						<hr></hr>
						<h2>I am:</h2>
						<p>
							<li></li>
						</p>
					</div>
					<div className="">
						<Education 
							title="Education"
							degreeName="Bachelor of Science in Computer Engineering (Co-Op)"
							schoolName="University of Ottawa"
							year="2012 - 2018"
						/>
						<h2>Experience</h2>
						<Experience 
							title="Experience"
							positionName=""
							companyName=""
							role1=""
							role2=""
							role3=""
						/>
						<Experience 
							title="Experience"
							positionName=""
							companyName=""
							role1=""
							role2=""
							role3=""
						/>
						<h2>Skills</h2>
						<Skills/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;