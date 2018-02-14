import React from 'react';
import Paper from 'material-ui/Paper';
// import API from '../../utils/API'

const style = {
  paperStyle: {
    height: 500,
    width: 'calc(33% - 40px)',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'auto',
    backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FmWW8zfZjFr2A0Lw8KmGpszEWuYJycCWLYSZyve_BwDsnciwHA")',
    "background-size": 'cover'
  },
  titleStyle: {
    display: "inline-block",
    color: "teal",
    "font-weight": "bolder",
    border: "5px dashed teal",
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

export default class MeetupFeed extends React.Component {

  // componentDidMount(){
  //   var data = API.getMeetups();
  //   this.setState('meetup':data);
  // }

  render() {
    return (
      <Paper style={style.paperStyle} zDepth={5} rounded={false}>
        <h3 style={style.titleStyle}>Local Meetups</h3>
        {this.props.meetup.map((meetup, i) => (
          <div style={style.newsItemStyle}>
            <a style={style.newsItemTextStyle} target='_blank' href={meetup.link}><p>{meetup.name}</p></a>
          </div>
        ))}
      </Paper>
    );
  }
}
