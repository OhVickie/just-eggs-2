import React from 'react';
import { Link } from 'react-router-dom';

function Education(props) {
	return (
		<div className="header-links">
			<h2>{props.title}</h2>
			<p>{props.degreeName}</p>
			<p>{props.schoolName}</p>
			<p>{props.year}</p>
		</div>
	);
}

export default Education;