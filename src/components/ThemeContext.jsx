import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
	const [ theme, setTheme ] = useState('light');
	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}
	const value = {
		toggleTheme
	};
	return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}
export { ThemeContext, ThemeProvider };
