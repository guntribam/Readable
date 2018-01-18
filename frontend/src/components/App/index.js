import React from 'react';
import Header from '../Header';
import Sidebar from "../Sidebar";
import {Route} from 'react-router-dom';
import './App.css';
import MainArea from "../MainArea/index";
import PostForm from "../PostForm";

const App = () =>
	<div>
		<Header/>
		<main className="container" style={{marginTop: '20px'}}>
			<div className="row">
				<Route exact path="/" render={() => <MainArea/>}/>
				<Route exact path="/submit" render={() => <PostForm/>}/>
				<Sidebar/>
			</div>
		</main>
	</div>
export default App;
