import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import Input from './components/Input';
function App() {
	const context = useContext(ThemeContext);
	return (
    
    <>
      <Input />
    </>
  )
}

export default App;
