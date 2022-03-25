import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import Input from './components/Input';
import './App.css'
function App() {
	const context = useContext(ThemeContext);
	return (

    <>
      <Input />
    </>
  )
}

export default App;
