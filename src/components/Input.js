import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { ThemeContext } from './ThemeContext';
import '../styles/Input.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function Input(props) {
	const context = useContext(ThemeContext);
	return (
		<form>
			<Autocomplete
				freeSolo
				disableClearable
				onChange={(event, newValue) => {
					props.onLocationSelect(event, newValue);
				}}
				onInputChange={(event, newInputValue) => {
					props.onInputChange(newInputValue);
				}}
				id="city-drobdown"
				options={props.cityList.map((city) => city.title)}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Search input"
						InputProps={{
							...params.InputProps,
							type: 'search'
						}}
					/>
				)}
			/>
		</form>
	);
}

export default Input;
