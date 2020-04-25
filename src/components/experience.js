import React from 'react';
import { Link } from 'react-router-dom';

function Experience(props) {
	return (
		<div class="header-links">
			<h2>{props.title}</h2>
			<p>{props.positionName}</p>
			<p>{props.companyName}</p>
			<ul>
				<li>{props.role1}</li>
				<li>{props.role2}</li>
				<li>{props.role3}</li>
			</ul>
		</div>
	);
}

export default Experience;