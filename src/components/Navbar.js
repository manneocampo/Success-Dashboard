import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
	  <nav>
	    <div class="nav-wrapper teal">
	      <a href="#" class="brand-logo right">Student Success Dashboard</a>
	      <ul id="nav-mobile" class="left hide-on-med-and-down">
	        <li><a href="/app/dashboard">Home</a></li>
	        <li><a href="/app/notes">Notes</a></li>
	        <li><a href="/">Logout</a></li>
	      </ul>
	    </div>
	  </nav>
		)
};

export default Navbar;