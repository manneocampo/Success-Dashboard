import React from 'react';
import Paper from 'material-ui/Paper';
import axios from 'axios';

const style = {
  height: 300,
  width: 'calc(50% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
          axios
        .post('/createNote', {
          note: this.state.value
        })
        .then(response => {
          console.log(response)
        })
    }

  render() {
    return (
      <Paper style={style} zDepth={5} rounded={false}>
        <h3>Create a Note</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="20" type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add Note" />
        </form>
      </Paper>
    );
  }
}
