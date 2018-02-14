import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  paperStyle: {
    height: 500,
    width: 'calc(33% - 40px)',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage:'url("https://ak5.picdn.net/shutterstock/videos/12107555/thumb/1.jpg")',
    "background-size": "cover"
  },
  titleStyle: {
    display: "inline-block",
    color: "teal",
    border: "5px dashed teal",
    "font-weight": "bolder",
    "letter-spacing": "5px",
    transform: "rotate(-7deg)"
  },
  articleTextStyle: {
    color: "black",
    "font-weight": "bolder",
    "font-size": "19px"
  }

};
//da2ac971785e4eaa8fbe780f5927876e
export default class TechArticles extends React.Component {

  render() {
    console.log('testing: ', this.props);
    return (
      <Paper style={style.paperStyle} zDepth={5} rounded={false}>
        <h3 style={style.titleStyle}>Tech News</h3>
        <div>
          {this.props.articles.map((article, i) => (
            <div  className='article'>
              {/* <h5>{article.source.name}</h5> */}
              <a style={style.articleTextStyle} target='_blank' href={article.url}><p>{article.title}</p></a>
            </div>
          ))}
        </div>
    	</Paper>
    );
  }
}
