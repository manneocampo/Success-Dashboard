import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 'calc(33% - 40px)',
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
        <h3>Feel Good News</h3>
      	{this.props.news.map((story, i) => (
          <div>
            <a target='_blank' href={story.data.url}><p>{story.data.title}</p></a>
          </div>
        ))}
    	</Paper>
    );
  }
}
