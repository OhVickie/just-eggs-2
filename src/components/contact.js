import React from 'react';
import Nav from './nav';

function Contact() {
	return (
		<div className="contact-page">
				<Nav />
			
				{/*LinkedIn*/}
				<a href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
					<i className="fa fa-linkedin-square" aria-hidden="true" />
				</a>

				{/*Github*/}
				<a href="https://github.com/OhVickie?tab=repositories" rel="noopener noreferrer" target="_blank">
					<i className="fa fa-github-square" aria-hidden="true" />
				</a>
		</div>
		
	);
}

export default Contact;