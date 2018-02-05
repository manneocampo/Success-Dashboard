import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar.js';
import {Trivia} from './components/MainDash/Trivia.js';
import {CreateNote} from './components/MainDash/CreateNote.js';
import {GoodVibesNews} from './components/MainDash/GoodVibesNews.js';
import {TechArticles} from './components/MainDash/TechArticles.js';
import {MeetupFeed} from './components/MainDash/MeetupFeed.js';
import {ToDoList} from './components/MainDash/ToDoList.js';


export const App = () => {
  return (
  	<div>
  		<Navbar />
  		<Trivia />
  		<GoodVibesNews />
  		<TechArticles />
  		<MeetupFeed />
  		<ToDoList />
  		<CreateNote />
  	</div>
  	);

};

