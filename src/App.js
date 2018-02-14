import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; //Looks like not needed since not used in App.js?
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import NoteManager from './components/pages/NoteManager';
import SignUp from './components/pages/SignUp';
import NotFound from './components/NotFound';
// Utilities
import axios from 'axios';

const style = {
  backgroundImage:
    `linear-gradient(
      to top left, #008F7A, #EAECC6)`
  };
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			loggedIn: false,
			user: null
		};

		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
  }

  componentDidMount() {
  		axios.get('/auth/user').then(response => {
  			console.log(response.data)
  			if (!!response.data.user) {
  				console.log('THERE IS A USER')
  				this.setState({
  					loggedIn: true,
  					user: response.data.user
  				})
  			} else {
  				this.setState({
  					loggedIn: false,
  					user: null
  				})
  			}
  		})
  	}

  	_logout(event) {
  		event.preventDefault()
  		console.log('logging out')
  		axios.post('/auth/logout').then(response => {
  			console.log(response.data)
  			if (response.status === 200) {
  				this.setState({
  					loggedIn: false,
  					user: null
  				})
  			}
  		})
  	}

  	_login(username, password) {
  		axios
  			.post('/auth/login', {
  				username,
  				password
  			})
  			.then(response => {
  				console.log(response)
  				if (response.status === 200) {
  					// update the state
  					this.setState({
  						loggedIn: true,
  						user: response.data.user
  					})
  				}
  			})
  	}

  render() {
    return (
      <div style={style}>
        <Route exact path="/" render={() => <Landing _login={this._login} />} />
        <Route exact path="/signup" render={() => <SignUp />} />
        <Route path='/app' component={Navbar} />
        <Route exact path="/app/dashboard" component={Dashboard} />
        <Route exact path="/app/notes" component={NoteManager} />
        <Route path="/notfound" component={NotFound} />
      </div>
    )
  }
}
