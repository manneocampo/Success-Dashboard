import React from 'react';
import Trivia from '../MainDash/Trivia';
import { API } from '../../utils/API';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trivia: []
    }
  }

  componentDidMount() {
    API.getTriviaQuestion()
    .then((res) => {
      console.log('res: ', res.data.results)
      this.setState({trivia: res.data.results})
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  }

  render() {
    return (
  		  <div>
          <Trivia data={this.state.trivia} />
        </div>
      
// import { Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// // import './App.css';
// import Navbar from '../Navbar.js';
// import {Trivia} from '../MainDash/Trivia.js';
// import {GoodVibesNews} from '../MainDash/GoodVibesNews.js';
// import {TechArticles} from '../MainDash/TechArticles.js';
// import {MeetupFeed} from '../MainDash/MeetupFeed.js';
// import {ToDoList} from '../MainDash/ToDoList.js';
// import {CreateNote} from '../MainDash/CreateNote.js';

//  const Dashboard = () => {
//     return (
//   		<MuiThemeProvider>
// 	    	<div>
// 	    		<Trivia />
// 	    		<GoodVibesNews />
// 	    		<TechArticles />
// 	    		<MeetupFeed />
// 	    		<ToDoList />
// 	    		<CreateNote />
// 	    	</div>
//     	</MuiThemeProvider>

  	)
};

export default Dashboard;