import React from 'react';
import {StyleNavbar} from './styled_components/Navbar';

//Note the Navbar was done as an example to demonstrate styled-components but we can switch this out for Bootstrap or something else later if we want. 

export const Navbar = () => {
	return (
		<StyleNavbar>
			<li>Home</li>
			<li>Notes</li>
			<li>Logout</li>
		</StyleNavbar>
		)
};