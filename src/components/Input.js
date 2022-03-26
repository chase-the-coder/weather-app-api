import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import { InputGroup, FormControl } from 'react-bootstrap';
function Input(props) {
	const context = useContext(ThemeContext);
	return (
		<InputGroup size="lg">
			<FormControl
				placeholder="Berlin"
				aria-label="city"
				aria-describedby="basic-addon1"
				onChange={(e) => props.onInputChange(e)}
				value={props.userInput}
			/>
		</InputGroup>
	);
}

export default Input;
