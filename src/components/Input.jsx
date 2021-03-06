import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/Input.css';

const Input = (props) => {
	return (
		<form
			className="big-50"
			onSubmit={(e) => {
				props.onLoading();
				props.onInputSubmit(e);
			}}
		>
			<InputGroup size="lg" dismissible>
				<FormControl
					type="search"
					placeholder="Berlin"
					aria-label="city"
					aria-describedby="basic-addon1"
					onKeyDown={props.onKeyDown}
					onChange={props.onInputChange}
					value={props.userInput}
				/>
				{
					<Button variant="primary" type="submit">
						Search
					</Button>
				}
				{}
			</InputGroup>
		</form>
	);
};

export default Input;
