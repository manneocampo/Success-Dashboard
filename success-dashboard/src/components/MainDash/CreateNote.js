import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export const CreateNote = () => (
    <Paper style={style} zDepth={5} rounded={false}>
			<h3>Create A Note</h3>
			<textarea>
			</textarea>
			<button>Add Note</button>
  	</Paper>
);

