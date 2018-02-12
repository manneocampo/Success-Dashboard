import axios from 'axios';

export const API = {
  getTriviaQuestion: function() {
    console.log('trivia')

    return axios.get('/trivia');
  },

  getNews: function() {
    return axios.get('/news');
  }
};
