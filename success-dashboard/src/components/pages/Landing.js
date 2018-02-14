import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import googleButton from '../../images/googlebutton.png';
import { Link } from 'react-router-dom';

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
	loginFormat: {
		display: "inline-grid",
		"line-height": "5.5"

	},
  CreateAccountTextStyle: {
    color: "teal",
    "font-weight": "bolder",
    "font-size": "19px"

  }
};

class Landing extends Component {
	constructor(props) {
		super(props)
    console.log(props);
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
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
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/app/dashboard' //testing only, change back to /
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div style={style.loginFormat} className="LoginForm">
					<form>
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
						<button  className="btn waves-effect waves-light"  onClick={this.handleSubmit}>Login</button>
					</form>
					{/* <a href="/auth/google"> */}
						{/* <GoogleButton /> */}
						{/* <img src={googleButton} alt="sign into Google Button" />
					</a> */}
        	<Link style={style.CreateAccountTextStyle} to='/signup'>Create Account</Link>
				</div>
			)
		}
	}
}

export default Landing;
