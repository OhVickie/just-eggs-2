import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';

function Contact() {
	return (
		<div className="contact-page">
				<Nav />

				<div className="contact-page__body">
					<div className="contact-page__title"> <h4 className="contact-page__title--text">Let's Talk</h4></div>
					<div className="contact-page__content">
						<div className="contact-page__box">
							<i className="box__icon"></i>
							<h4 className="box__heading">Speak with Victory</h4>
							<p className="box__description">
							litter box until
							treats are fed stare at guinea pigs curl up and
							sleep on the freshly laundered towels
							</p>
							<Link to="/resume" className="btn btn--white btn--animated">Speak with Victory</Link>
						</div>
						<div className="contact-page__box">
							<i className="box__icon"></i>
							<h4 className="box__heading">Send an Email</h4>
							<p className="box__description">
							litter box until
							treats are fed stare at guinea pigs curl up and
							sleep on the freshly laundered towels
							</p>
							<Link to="/resume" className="btn btn--white btn--animated">Send an Email</Link>
						</div>
					</div>
					
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
		
	);
}

export default Contact;