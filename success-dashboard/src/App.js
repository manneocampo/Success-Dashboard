import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar.js';
import {Trivia} from './components/MainDash/Trivia.js';
import {CreateNote} from './components/MainDash/CreateNote.js';


export const App = () => {
  return (
  	<div>
  		<Navbar />
  		<Trivia />
  		<CreateNote />
  	</div>
  	);

};

