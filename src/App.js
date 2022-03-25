import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import Input from './components/Input';
import './styles/App.css'
function App() {
	const context = useContext(ThemeContext);
	return (

    <>
      <div className='container'>
        <Input />
      </div>
    </>
  )
}

export default App;
