import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
	const [ temp, setTemp ] = useState('C');
	function toggleTemp() {
		if (temp === 'C') {
			setTemp('F');
		} else {
			setTemp('C');
		}
		console.log(temp);
	}
	function convert(temperature) {
		if (temp === 'C') {
			return temperature;
		} else {
			return temperature * 1.8 + 32;
		}
	}
	const value = {
		temp,
		toggleTemp,
		convert
	};
	return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
