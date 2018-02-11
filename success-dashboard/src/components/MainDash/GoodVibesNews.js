import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class GoodVibesNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    console.log('this props: ', this.props);
    return (
      <Paper style={style} zDepth={5} rounded={false}>
      	{this.props.news.map((story, i) => (
          <div>
            <a target='_blank' href={story.data.url}><p>{story.data.title}</p></a>
          </div>
        ))}
    	</Paper>
    );
  }
}
