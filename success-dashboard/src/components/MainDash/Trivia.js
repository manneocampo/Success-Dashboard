import React from 'react';
import './Trivia.css';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
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
			return null;
		}
		let question = this.props.data[0] && this.props.data[0].question ? this.props.data[0].question : '';
		let answers = this.renderAnswers();
		let answeredCorrect = this.props.data[0] && this.props.data[0].correct_answer === this.state.selectedAnswer;
		let selectedAnswerCurrent = this.props.data[0].incorrect_answers.indexOf(this.state.selectedAnswer) > -1 || this.state.selectedAnswer === this.props.data[0].correct_answer;

		return (
			<div className='yarb'>
				<Paper style={style} zDepth={5}>
					<div className='trivia'>
						<h3>Trivia</h3>
						<div className='question'>
							{question}
						</div>
						<div className='answers'>
							{answers}
						</div>
						{answeredCorrect &&
							<p>Correct!</p>
						}
						{this.state.selectedAnswer && !answeredCorrect && selectedAnswerCurrent &&
							<p>Incorrect!</p>
						}
					</div>
				</Paper>
			</div>
		);
	}
};
