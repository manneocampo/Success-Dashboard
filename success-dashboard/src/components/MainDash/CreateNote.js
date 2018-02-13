import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paperStyle: {
    height: 500,
    width: 'calc(50% - 40px)',
    margin: 20,
    padding: '25px 0 0 75px',
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/000/098/954/non_2x/notebook-paper-background-vector.jpg")',
    "background-size": 'cover'
  },
  titleStyle: {
    display: "inline-block",
    color: "teal",
    "font-weight": "bolder",
    "letter-spacing": "5px",
  },

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
  }

  render() {
    return (
      <Paper style={style.paperStyle} zDepth={5} rounded={false}>
        <h3 style={style.titleStyle}>Create a Note</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea rows="20" type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add Note" />
        </form>
      </Paper>
    );
  }
}
