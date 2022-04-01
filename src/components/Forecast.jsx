import React from 'react';
import MediaCard from './MediaCard';
import '../styles/Forecast.css'

const Forecast = (props) => {
        const {daily} = props.forecastData
	return (
        <>
            <div className="forecast-grid mt-4 mb-4">
                {daily.filter((day, index) => {
                    // console.log(index)
                    return index < 5
                }).map(day => {
                    // console.log(day)
                    return  <MediaCard key={day.dy} forecastData={day} months={props.months} weekArray={props.weekArray}/>
                })}
            </div>
        </>
    )
}
export default Forecast