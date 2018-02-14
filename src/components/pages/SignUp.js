import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const style = {

  titleStyle: {
		backgroundImage:`linear-gradient to top left, #008F7A, #EAECC6`,
		"background-size": "cover",
    display: "inline-block",
    color: "teal",
    "font-weight": "bolder",
    "letter-spacing": "5px",
		"font-size": "20px"
  },
	signupFormat: {
		display: "inline-grid",
		"line-height": "5.5"

	},
  CreateAccountTextStyle: {
    color: "teal",
    "font-weight": "bolder",
    "font-size": "19px"

  }
};

export default class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div style={style.signupFormat} className="SignupForm">
				<label style={style.titleStyle} htmlFor="username">Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label style={style.titleStyle} htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label style={style.titleStyle} htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button  className="btn waves-effect waves-light" onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}
