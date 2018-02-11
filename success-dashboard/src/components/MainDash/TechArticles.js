import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 'calc(33% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export const TechArticles = () => (
    <Paper style={style} zDepth={5} rounded={false}>
    	<h2>TechArticles</h2>
  	</Paper>
);
