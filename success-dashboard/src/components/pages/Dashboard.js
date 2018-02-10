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
  	)
  }
};
