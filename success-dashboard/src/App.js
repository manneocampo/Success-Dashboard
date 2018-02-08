import React from 'react';
import { Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { Navbar } from './components/Navbar.js';
import {Trivia} from './components/MainDash/Trivia.js';
import {CreateNote} from './components/MainDash/CreateNote.js';
import {GoodVibesNews} from './components/MainDash/GoodVibesNews.js';
import {TechArticles} from './components/MainDash/TechArticles.js';
import {MeetupFeed} from './components/MainDash/MeetupFeed.js';
import {ToDoList} from './components/MainDash/ToDoList.js';

// Pages
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import NoteManager from './components/pages/NoteManager';

export const App = () =>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path='/app' component={Navbar} />
      <Route exact path="/app/dashboard" component={Dashboard} />
      <Route exact path="/app/notes" component={NoteManager} />
    </div>