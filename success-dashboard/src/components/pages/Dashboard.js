import React from 'react';
import Trivia from '../MainDash/Trivia';

import { API } from '../../utils/API';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import GoodVibesNews from '../MainDash/GoodVibesNews.js';
import {TechArticles} from '../MainDash/TechArticles.js';
import MeetupFeed from '../MainDash/MeetupFeed.js';
import {ToDoList} from '../MainDash/ToDoList.js';
import CreateNote from '../MainDash/CreateNote.js';


const style = {
  height: 300,
  width: 1500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trivia: [],
      news: []
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
  }

  render() {
    return (
        <div>
          <MuiThemeProvider>
            <Paper style={style} zDepth={5}>
            <Trivia refresh={this.refresh} data={this.state.trivia} />
            </Paper>
            <div style={{justifyContent: 'center', flexDirection: 'row'}}>
              <GoodVibesNews news={this.state.news} />
              <TechArticles />
              <MeetupFeed />
            </div>
            <div style={{justifyContent: 'center', flexDirection: 'row'}}>
              <ToDoList />
              <CreateNote />
            </div>
          </MuiThemeProvider>
        </div>
  	);
  }
};
