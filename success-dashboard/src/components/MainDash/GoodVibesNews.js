import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paperStyle: {
    height: 500,
    width: 'calc(33% - 40px)',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FmWW8zfZjFr2A0Lw8KmGpszEWuYJycCWLYSZyve_BwDsnciwHA")',
    "background-size": 'cover'
  },
  titleStyle: {
    display: "inline-block",
    color: "white",
    "font-weight": "bolder",
    border: "5px dashed white",
    "letter-spacing": "5px",
    transform: "rotate(-7deg)"
  },
  newsItemStyle: {
    display: "flex",
    width: "50%",
    margin: "5px 0px 0px 10px"
  },
  newsItemTextStyle: {
    color: "white",
    "font-weight": "bolder",
    "font-size": "19px"
  }
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
      <Paper style={style.paperStyle} zDepth={5} rounded={false}>
        <h3 style={style.titleStyle}>Feel Good News</h3>
      	{this.props.news.map((story, i) => (
          <div style={style.newsItemStyle}>
            <a style={style.newsItemTextStyle} target='_blank' href={story.data.url}><p>{story.data.title}</p></a>
          </div>
        ))}
    	</Paper>
    );
  }
}
