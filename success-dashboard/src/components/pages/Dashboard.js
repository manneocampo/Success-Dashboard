import React from 'react';
import Trivia from '../MainDash/Trivia';

import { API } from '../../utils/API';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GoodVibesNews from '../MainDash/GoodVibesNews.js';
import {TechArticles} from '../MainDash/TechArticles.js';
import MeetupFeed from '../MainDash/MeetupFeed.js';
import ToDoList from '../MainDash/ToDoList.js';
import CreateNote from '../MainDash/CreateNote.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trivia: [],
      news: [],
      todos: []
    }

    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    API.getTriviaQuestion()
    .then((res) => {
      this.setState({trivia: res.data.results})
    })
    .catch((err) => {
      console.log('err: ', err);
    });

    API.getNews()
    .then((res) => {
      this.setState({news: res.data.data.children.slice(0, 3)})
    })
    .catch((err) => {

    });

    API.getTodos()
    .then((res) => {
      console.log('todo res: ', res);
      this.setState({todos: res.data});
    })
    .catch((err) => {

    })
  }

  render() {
    return (
        <div>
          <MuiThemeProvider>
            <Trivia refresh={this.refresh} data={this.state.trivia} />
            <div style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
              <GoodVibesNews news={this.state.news} />
              <TechArticles />
              <MeetupFeed />
            </div>
            <div style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
              <ToDoList todos={this.state.todos} />
              <CreateNote />
            </div>
          </MuiThemeProvider>
        </div>
  	);
  }
};
