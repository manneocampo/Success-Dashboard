import React from 'react';
import { Link } from 'react-router-dom';

const style = {
	navOptions: {
		paddingLeft: '10px'
	},
	brandLogo: {
		paddingRight: '10px'
	}
}

const Navbar = () => {
	return (
	  <nav>
	    <div className="nav-wrapper teal">
	      <a href="#" style={style.brandLogo} className="brand-logo right">Student Success Dashboard</a>
	      <ul style={style.navOptions} id="nav-mobile" className="left hide-on-med-and-down">
	        <li><a href="/app/dashboard">Home</a></li>
	        <li><a href="/app/notes">Notes</a></li>
	        <li><a href="/">Logout</a></li>
	      </ul>
	    </div>
	  </nav>
		)
};

export default Navbar;
