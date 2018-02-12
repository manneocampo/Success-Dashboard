import React from 'react';
import Paper from 'material-ui/Paper';
import { API } from '../../utils/API';

const style = {
  height: 500,
  width: 'calc(50% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'auto'
};

export default class ToDoList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        newTodo: ''
      }

      this.handleNewTodo = this.handleNewTodo.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    handleNewTodo() {
      API.createTodo(this.state.newTodo, this.state.description)
      .then((res) => {
        console.log(res);
        this.setState({todos: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
    }

    handleInputChange(e, isTodoField) {

      if (isTodoField) {
        this.setState({
          newTodo: e.target.value
        });
      } else {
        this.setState({
          description: e.target.value
        });
      }
    }

    handleDeleteTodo(todo) {
      API.deleteTodo(todo)
      .then((res) => {
        this.setState({todos: res.data});
      })
      .catch((err) => {

      });
    }

    render() {
      let todos = this.state.todos ? this.state.todos : this.props.todos;
      return (
        <Paper style={style} zDepth={5} rounded={false}>
          <h3>Todo list</h3>
          <div>
            <label for='todo'>New Todo</label>
        	  <input name='todo' onChange={(e) => {this.handleInputChange(e, true)}} type='text' placeholder='New todo...' />
            <label for='description'>Description</label>
            <input name='description' onChange={(e) => {this.handleInputChange(e)}} type='text' placeholder='New todo description...' />
            <button  onClick={this.handleNewTodo}>Save</button>
          </div>
          <div>
          {todos.map((todoObj, i) => (
            <div>
              <h5>{todoObj.todo}</h5>
              <h6>{todoObj.description}</h6>
              <button className='red' onClick={() => {this.handleDeleteTodo(todoObj.todo)}}>Delete</button>
            </div>
          ))}
          </div>
      	</Paper>
      );
    }
};
