import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
	const [ theme, setTheme ] = useState('light');
	const [ location, setLocation ] = useState('london');
	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}
	const value = {
		theme,
		location,
		toggleTheme
	};
	return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}
export { ThemeContext, ThemeProvider };
