import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
function Input(props) {
	return (
		<form onSubmit={(e) => props.onInputSubmit(e)}>
			<InputGroup size="lg">
				<FormControl
					placeholder="Berlin"
					aria-label="city"
					aria-describedby="basic-addon1"
					onChange={(e) => {
						props.onInputChange(e);
					}}
					value={props.userInput}
				/>
				{props.buttonDisabled ? (
					<Button variant="primary" type="submit" disabled>
						Search
					</Button>
				) : (
					<Button variant="primary" type="submit">
						Search
					</Button>
				)}
				{}
			</InputGroup>
		</form>
	);
}

export default Input;
