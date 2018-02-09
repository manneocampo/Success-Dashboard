import React from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './App.css';
import Navbar from '../Navbar.js';
import {Trivia} from '../MainDash/Trivia.js';
import {GoodVibesNews} from '../MainDash/GoodVibesNews.js';
import {TechArticles} from '../MainDash/TechArticles.js';
import {MeetupFeed} from '../MainDash/MeetupFeed.js';
import {ToDoList} from '../MainDash/ToDoList.js';
import {CreateNote} from '../MainDash/CreateNote.js';

 const Dashboard = () => {
    return (
  		<MuiThemeProvider>
	    	<div>
	    		<Trivia />
	    		<GoodVibesNews />
	    		<TechArticles />
	    		<MeetupFeed />
	    		<ToDoList />
	    		<CreateNote />
	    	</div>
    	</MuiThemeProvider>
  	)
};

export default Dashboard;