import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import './styles/App.css'
import { useState } from 'react';
function App() {
  const [ userInput, setUserInput ] = useState('');
  const [location, setLocation] = useState('london')
	const context = useContext(ThemeContext);

  function handleInputChange(e) {
    setUserInput(e)
  }
	return (

    <>
      <div className='container'>
        <div className="dropdown">
          <Input userInput={userInput} onInputChange={handleInputChange}/>
          <Dropdown />
        </div>
      </div>
    </>
  )
}

export default App;
