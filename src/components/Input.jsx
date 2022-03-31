import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/Input.css';

const Input = (props) => {
	return (
		<form onSubmit={(e) => props.onInputSubmit(e)}>
			<InputGroup size="lg" dismissible>
				<FormControl
					type="search"
					placeholder="Berlin"
					aria-label="city"
					aria-describedby="basic-addon1"
					onKeyDown={(e) => props.onKeyDown(e)}
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
};

export default Input;
