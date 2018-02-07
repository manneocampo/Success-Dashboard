import React from 'react';
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


//******Still need to create these container components named below***********
export const App = () =>
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/notes" component={NoteManager} />
    </div>
  </Router>;


// export const App = () => {
//   return (
//     <MuiThemeProvider>
//     	<div>
//     		<Navbar />
//     		<Trivia />
//     		<GoodVibesNews />
//     		<TechArticles />
//     		<MeetupFeed />
//     		<ToDoList />
//     		<CreateNote />
//     	</div>
//     </MuiThemeProvider>

//   	);

// };



