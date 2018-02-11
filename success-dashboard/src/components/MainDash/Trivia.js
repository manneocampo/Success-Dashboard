import React from 'react';
import './Trivia.css';


export default class Trivia extends React.Component {
	constructor(props) {
		super(props);

		this.renderAnswers = this.renderAnswers.bind(this);
	}

	renderAnswers() {
		if (!this.props.data[0]) {
			return;
		}

		let answer = this.props.data[0].correct_answer;
		let answerArr = this.props.data[0].incorrect_answers;

		answerArr.splice(Math.round(Math.random() * answerArr.length), 0, answer);

		return (
			<div>
				{answerArr.map((answer, i) => (
					<p>{answer}</p>
				))}
			</div>
		);
	}

	render() {
		console.log('props: ', this.props.data);
		let question = this.props.data[0] && this.props.data[0].question ? this.props.data[0].question : '';
		let answers = this.renderAnswers();
		return (
			<div className='trivia'>
				<h3>Trivia</h3>
				<div className='question'>
					{question}
				</div>
				<div className='answers'>
					{answers}
				</div>
			</div>
		);
	}
};
