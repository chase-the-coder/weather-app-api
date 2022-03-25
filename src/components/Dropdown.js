import React from 'react';
import '../styles/Dropdown.css';

export default function Dropdown({ input }) {
	return (
		<div className="centered">
			<ul className="dropdown-content">
				<li>link1</li>
				<li>link 2</li>
			</ul>
		</div>
	);
}
