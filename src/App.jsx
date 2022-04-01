import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import AlertBanner from './components/AlertBanner';
import { Container } from 'react-bootstrap';
import InputDropdown from './components/InputDropdown';
import Input from './components/Input';
import Forecast from './components/Forecast';
import './styles/App.css'
import TodaysForecast from './components/TodaysForecast';
import Loader from './components/Loading'
import CustomizedSwitches from './components/CustomizedSwitches';
import Footer from './components/Footer';

const App = () => {
  const [ userInput, setUserInput ] = useState('');
  const [cityList, setCityList] = useState([]);
  const [cityObject, setCityObject] = useState('')
  const [todayData, setTodayData] = useState('')
  const [forecastData, setForecastData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [alertEnabled, setAlertEnabled] = useState(false)
  const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
  const weekArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];


  useEffect(() => {
    if (userInput === '') {
      setAlertEnabled(false)
      setCityList([])
      return
    }
    // if(cityObject) {
     
    //   if(userInput === cityObject.title) {
    //     setButtonDisabled(false)
    //     return
    //   }
    // } 
    // const delayDebounceFn = setTimeout(() => {

    //   axios
      
		// 	.get(
		// 		`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
		// 	)
		// 	.then((res) => {
    //     if(res.data.length === 0) {
    //       setAlertEnabled(true)
    //     }
    //     console.log(res.data)
    //     // setCityList(res.data)

        
    //   })
    // }, 1500)
    //   return () => clearTimeout(delayDebounceFn)
      }, [userInput])

  const handleInputChange = (e) => {
    setUserInput(e.target.value) 
  }
  const handleLoading = () => {
    setIsLoading(true)
  }

  const handleCityClick = (city) => {
    setCityList([])
    setUserInput(city.title)
    setCityObject(city)

  }
  const handleInputSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((res) => {
      if(res.data.length === 0) {
        setAlertEnabled(true)
      }
      setCityObject(res.data)
      return axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )      
    }).then(res => {
      setForecastData(res.data)
    })
    .finally(setIsLoading(false))
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 8) {
      setAlertEnabled(false)
      setCityList([])
    }
  }
	return (

    <>
      
      <Container className='mt-4'>
        <div className="d-flex justify-content-between">
          <h5>Type a city name, and select from the dropown list.</h5>
          <CustomizedSwitches />
        </div>
        <div className="dropdown">
          <Input  userInput={userInput} onInputChange={handleInputChange} cityList={cityList} onKeyDown={handleKeyDown} onInputSubmit={handleInputSubmit} buttonDisabled={buttonDisabled} />
          {alertEnabled && <AlertBanner />}
          {isLoading && <Loader />}
          {/* {cityList.length !== 0 && <InputDropdown onCityClick={handleCityClick} cityList={cityList} onLoading={handleLoading}/>} */}
          {forecastData.length !== 0 &&<TodaysForecast city={cityObject} forecastData={forecastData} months={months} weekArray={weekArray} />}
          {forecastData.length !== 0 &&<Forecast forecastData={forecastData} months={months} weekArray={weekArray}/>}
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default App;
