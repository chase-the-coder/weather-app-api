import React from 'react';
import MediaCard from './MediaCard';
import '../styles/Forecast.css'

const Forecast = (props) => {

        const {consolidated_weather} = props.forecastData
        // console.log(props)
    // console.log(consolidated_weather)
	return (
        <>
            <div className="forecast-grid mt-4">
                {consolidated_weather.filter((day, index) => {
                    // console.log(index)
                    return index !== 0
                }).map(day => {
                    // console.log(day)
                    return  <MediaCard key={day.applicable_date} forecastData={day} months={props.months} weekArray={props.weekArray}/>
                })}
            </div>
        </>
    )
}
export default Forecast