import React from 'react';
import Trivia from '../MainDash/Trivia';
import { API } from '../../utils/API';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GoodVibesNews from '../MainDash/GoodVibesNews.js';
import TechArticles from '../MainDash/TechArticles.js';
import MeetupFeed from '../MainDash/MeetupFeed.js';
import ToDoList from '../MainDash/ToDoList.js';
import CreateNote from '../MainDash/CreateNote.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trivia: [],
      news: [],
      todos: [],
      articles: [],
      meetup: []
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
      console.log('Trivia Error: ', err);
    });

    API.getNews()
    .then((res) => {
      this.setState({news: res.data.data.children.slice(0, 3)})
    })
    .catch((err) => {
      console.log('Good News Error: ', err);
    });

    API.getMeetups()
    .then((res) => {
      this.setState({meetup: res.data})
    })
    .catch((err) => {
      console.log('Meetups Error: ', err);
    });

    API.getTodos()
    .then((res) => {
      console.log('todo res: ', res);
      this.setState({todos: res.data});
    })
    .catch((err) => {
      console.log('ToDos Error: ', err);
    })

    API.getArticles()
    .then((res) => {
      this.setState({articles: res.data.articles});
    })
    .catch((err) => {
      console.log('Tech Articles Error: ', err);
    });

  }

  render() {
    return (
          <MuiThemeProvider>
            <Trivia refresh={this.refresh} data={this.state.trivia} />
            <div style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
              <GoodVibesNews news={this.state.news} />
              <TechArticles articles={this.state.articles} />
              <MeetupFeed meetup={this.state.meetup} />
            </div>
            <div style={{justifyContent: 'center', flexDirection: 'row', display: 'flex'}}>
              <ToDoList todos={this.state.todos} />
              <CreateNote />
            </div>
          </MuiThemeProvider>
  	);
  }
};