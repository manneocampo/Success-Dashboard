import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import googleButton from '../../images/googlebutton.png';
import { withRouter } from 'react-router-dom';

const SignupButton = withRouter(({ history }) => (
<button
className="btn waves-effect waves-light"
type="button"
onClick={() => history.push('/signup')}
>
Create Account
</button>
));

const style = {

  titleStyle: {

    // display: "inline-block",
    color: "teal",
    "font-weight": "bolder",
    "letter-spacing": "5px",
		"font-size": "20px",
    "margin": "-70px 0px 0px 0px"
  },
	loginFormat: {
    // backgroundImage:`linear-gradient to top left, #008F7A, #EAECC6`,
		// "background-size": "cover",
    // display: "inline-grid",
		"line-height": "10.5"
	},
  centerContainer: {
    "display": "flex",
    "flex-direction": "column",
    "width": "33%"
  }

};

class Landing extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    this.gotoSignup = this.gotoSignup.bind(this);
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

  gotoSignup(newRoute) {
    this.props.updateRoute(newRoute);
  }

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (

        <div style={style.loginFormat} className=" row LoginForm">
					<form className="col s12">
            <div style={style.centerContainer} className="row">
              <div className="input-field col s12">
    						<label style={style.titleStyle} htmlFor="username">Username: </label>
    						<input
    							type="text"
    							name="username"
    							value={this.state.username}
    							onChange={this.handleChange}
    						/>
              </div>

              <div className="input-field col s12">
    						<label style={style.titleStyle} htmlFor="password">Password: </label>
    						<input
    							type="password"
    							name="password"
    							value={this.state.password}
    							onChange={this.handleChange}
    						/>
              </div>

              <div>
  						<button  className="btn waves-effect waves-light"  onClick={this.handleSubmit}>Login</button>
                  {/* <a href="/auth/google"> */}
      						{/* <GoogleButton /> */}
      						{/* <img src={googleButton} alt="sign into Google Button" />
      					</a> */}
              <SignupButton />

              </div>
            </div>
          </form>

				</div>
			)
		}
	}
}

export default Landing;
