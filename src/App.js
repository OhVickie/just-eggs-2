import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import Home from './components/home';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
	return (
		<Router>
			<header class="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/resume" component={Resume} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</header>
		</Router>
		
  );
}

export default App;
