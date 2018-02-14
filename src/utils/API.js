import axios from 'axios';

export const API = {
  getTriviaQuestion: function() {
    console.log('trivia')
    return axios.get('/trivia');
  },

  getNews: function() {
    return axios.get('/news');
  },

  getMeetups: function() {
    return axios.get('/meetups');
  },

  getTodos: function() {
    return axios.get('/getTodos');
  },

  createTodo: function(newTodo, description) {
    return axios.post('/createTodo', {
      newTodo,
      description
    });
  },

  deleteTodo: function(todo) {
    return axios.delete(`/deleteTodo/${todo}`);
  },

  getArticles: function() {
    return axios.get('/techArticles');
  }
};
