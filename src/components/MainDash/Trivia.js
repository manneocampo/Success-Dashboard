import React from 'react';
import './Trivia.css';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import LoadingKitty from '../../images/loadingkitty.gif';

const style = {
  paperStyle: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundImage:'url("https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2012/01/Screen-Shot-2012-01-20-at-2.12.17-PM.png")',
    "background-size": "cover",
    "padding-bottom": '15px'
  },
  titleStyle: {
    display: "inline-block",
    color: "teal",
    "font-weight": "bolder",
    "letter-spacing": "5px",
  },
  triviaText: {
    color: "rgb(0, 188, 212)",
    "font-weight": "bolder",
    "font-size": "25px"
  },
  loadingKitty: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    messageTop: {
      margin: '30px 0 -75px 0',
      fontWeight: 'bold',
      fontSize: '1.25em'
    },
    messageBottom: {
      margin: '-50px 0 30px 0',
      fontWeight: 'bold',
      fontSize: '1.25em'
    }
  }

};

export default class Trivia extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		this.renderAnswers = this.renderAnswers.bind(this);
		this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
	}

	renderAnswers() {
		if (!this.props.data[0]) {
			return;
		}

		let answer = this.props.data[0].correct_answer;
		let answerArr = [];

		this.props.data[0].incorrect_answers.forEach((ans) => {
			answerArr.push(ans);
		});

		answerArr.splice(Math.round(Math.random() * answerArr.length), 0, answer);

		if (answerArr.indexOf(this.state.selectedAnswer) !== -1) {
			return;
		}

		return (
			<div>
				{answerArr.map((answer, i) => (
					<div>
						<FlatButton primary onClick={()=> {this.handleSelectAnswer(answer)}}>{answer}</FlatButton>
					</div>
				))}
			</div>
		);
	}

	handleSelectAnswer(answer) {
		let __this = this;

		this.setState({selectedAnswer: answer}, () => {
			setTimeout(() => {
					__this.props.refresh();
				}, 1000);
		})
	}


	render() {
		if (!this.props.data[0]) {
			return (
        <div style={style.loadingKitty.container} className='loading-kitty'>
          <span style={style.loadingKitty.messageTop}>Loading</span>
          <img src={LoadingKitty} />
          <span style={style.loadingKitty.messageBottom}>your trivia</span>
        </div>
      );
		} else {
      let question = this.props.data[0] && this.props.data[0].question ? this.props.data[0].question : '';
  		let answers = this.renderAnswers();
  		let answeredCorrect = this.props.data[0] && this.props.data[0].correct_answer === this.state.selectedAnswer;
  		let selectedAnswerCurrent = this.props.data[0].incorrect_answers.indexOf(this.state.selectedAnswer) > -1 || this.state.selectedAnswer === this.props.data[0].correct_answer;

  		return (
  			<div className='yarb'>
  				<Paper style={style.paperStyle} zDepth={5}>
  					<div className='trivia'>
  						<h3 style={style.titleStyle}>Trivia</h3>
  						<div style={style.triviaText} className='question'>
  							{question}
  						</div>
  						<div style={style.triviaText} className='answers'>
  							{answers}
  						</div>
  						{answeredCorrect &&
  							<p style={style.triviaText}>Correct!</p>
  						}
  						{this.state.selectedAnswer && !answeredCorrect && selectedAnswerCurrent &&
  							<p style={style.triviaText}>Incorrect!</p>
  						}
  					</div>
  				</Paper>
  			</div>
  		);
    }

	}
};
