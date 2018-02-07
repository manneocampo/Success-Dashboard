import React from 'react';
import {StyleNavbar} from './styled_components/Navbar';
import { Link } from 'react-router-dom';

//Note the Navbar was done as an example to demonstrate styled-components but we can switch this out for Bootstrap or something else later if we want.

export const Navbar = () => {
	return (
		<StyleNavbar>
			<li><Link to='/app/dashboard'>Home</Link></li>
			<li><Link to='/app/notes'>Notes</Link></li>
			<li><Link to='/'>Logout</Link></li>
		</StyleNavbar>
		)
};
