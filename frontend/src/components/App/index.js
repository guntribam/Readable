import React from 'react';
import Header from '../Header';
import Sidebar from "../Sidebar";
import Posts from "../Posts";
import Categories from "../Categories";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

const App = () =>
	<Router>
		<div>
			<Header/>
			<main className="container" style={{marginTop: '20px'}}>
				<div className="row">
					<Route exact path="/" render={() => <Posts/>}/>
					<Route exact path="/categories" render={() => <Categories/>}/>
					<Sidebar/>
				</div>
			</main>
		</div>
	</Router>

export default App;
