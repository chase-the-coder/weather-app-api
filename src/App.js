import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';

function App() {
	const context = useContext(ThemeContext);
	return <div>hello world</div>;
}

export default App;
