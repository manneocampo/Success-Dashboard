// import React from 'react';
// import Paper from 'material-ui/Paper';

// const style = {
//   height: 300,
//   width: 'calc(33% - 40px)',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// export const TechArticles = () => (
//     <Paper style={style} zDepth={5} rounded={false}>
//     	<h2>TechArticles</h2>
//   	</Paper>
// );

import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 'calc(33% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class TechArticles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    console.log('testing: ');
    return (
      <Paper style={style} zDepth={5} rounded={false}>
        <h3>Tech News</h3>

    	</Paper>
    );
  }
}
