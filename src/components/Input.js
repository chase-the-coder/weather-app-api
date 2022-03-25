import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import Dropdown from './Dropdown';
import '../styles/Input.css';

function Input(props) {
	const context = useContext(ThemeContext);
	return (
		<form>
			<label htmlFor="location" />
			<input
				className="centered"
				type="text"
				id="location"
				value={props.userInput}
				onChange={(e) => props.onInputChange(e.target.value)}
			/>
		</form>
	);
}

export default Input;
