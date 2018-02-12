import axios from 'axios';

export const API = {
  getTriviaQuestion: function() {
    console.log('trivia')

    return axios.get('/trivia');
  }
};
