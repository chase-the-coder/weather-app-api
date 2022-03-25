import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import '../styles/Input.css';

function Input() {
	const [ input, setInput ] = useState('');
	const context = useContext(ThemeContext);
	return (
		<form>
			<label htmlFor="location" />
			<input
				className="input-centered"
				type="text"
				id="location"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}

export default Input;
