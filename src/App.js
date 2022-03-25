import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';
import Input from './components/Input';
import './styles/App.css'
import { useState } from 'react';
function App() {
  const fakeLocationData = [
    {
    "title": "San Francisco",
    "location_type": "City",
    "woeid": 2487956,
    "latt_long": "37.777119, -122.41964"
    },
    {
    "title": "San Diego",
    "location_type": "City",
    "woeid": 2487889,
    "latt_long": "32.715691,-117.161720"
    },
    {
    "title": "San Jose",
    "location_type": "City",
    "woeid": 2488042,
    "latt_long": "37.338581,-121.885567"
    },
    {
    "title": "San Antonio",
    "location_type": "City",
    "woeid": 2487796,
    "latt_long": "29.424580,-98.494614"
    },
    {
    "title": "Santa Cruz",
    "location_type": "City",
    "woeid": 2488853,
    "latt_long": "36.974018,-122.030952"
    },
    {
    "title": "Santiago",
    "location_type": "City",
    "woeid": 349859,
    "latt_long": "-33.463039,-70.647942"
    },
    {
    "title": "Santorini",
    "location_type": "City",
    "woeid": 56558361,
    "latt_long": "36.406651,25.456530"
    },
    {
    "title": "Santander",
    "location_type": "City",
    "woeid": 773964,
    "latt_long": "43.461498,-3.810010"
    },
    {
    "title": "Busan",
    "location_type": "City",
    "woeid": 1132447,
    "latt_long": "35.170429,128.999481"
    },
    {
    "title": "Santa Cruz de Tenerife",
    "location_type": "City",
    "woeid": 773692,
    "latt_long": "28.46163,-16.267059"
    },
    {
    "title": "Santa Fe",
    "location_type": "City",
    "woeid": 2488867,
    "latt_long": "35.666431,-105.972572"
    }
    ]
  const [ userInput, setUserInput ] = useState('');
  const [cityList, setCityList] = useState(fakeLocationData);
  const [location, setLocation] = useState('london');
	const context = useContext(ThemeContext);

  useEffect(() => {
    if (userInput === '') {
      return
    }
    const delayDebounceFn = setTimeout(() => {
      console.log(userInput)
      axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${userInput}`
			)
			.then((res) => {
        console.log(res.data)
        
      })
    }, 3000)
      return () => clearTimeout(delayDebounceFn)
      }, [userInput])

  function handleInputChange(e) {
    setUserInput(e)
  }
	return (

    <>
      <div className='container'>
        <div className="dropdown">
          <Input userInput={userInput} onInputChange={handleInputChange} cityList={cityList}/>
        </div>
      </div>
    </>
  )
}

export default App;
