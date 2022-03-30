import React from 'react';
import MediaCard from './MediaCard';
import '../styles/Forecast.css'

const Forecast = (props) => {
    // const fakeForecastData = {
    //     "consolidated_weather": [
    //     {
    //     "id": 6103116224135168,
    //     "weather_state_name": "Light Cloud",
    //     "weather_state_abbr": "lc",
    //     "wind_direction_compass": "W",
    //     "created": "2022-03-25T21:59:17.280609Z",
    //     "applicable_date": "2022-03-25",
    //     "min_temp": 8.335,
    //     "max_temp": 14.665,
    //     "the_temp": 15.184999999999999,
    //     "wind_speed": 5.749423953482331,
    //     "wind_direction": 264.6821712428129,
    //     "air_pressure": 1018,
    //     "humidity": 74,
    //     "visibility": 13.47350224687823,
    //     "predictability": 70
    //     },
    //     {
    //     "id": 5847107350036480,
    //     "weather_state_name": "Light Cloud",
    //     "weather_state_abbr": "lc",
    //     "wind_direction_compass": "W",
    //     "created": "2022-03-25T21:59:21.016813Z",
    //     "applicable_date": "2022-03-26",
    //     "min_temp": 9.274999999999999,
    //     "max_temp": 14.285,
    //     "the_temp": 15.559999999999999,
    //     "wind_speed": 5.980867486168775,
    //     "wind_direction": 268.71991752948315,
    //     "air_pressure": 1013.5,
    //     "humidity": 75,
    //     "visibility": 12.766071144516026,
    //     "predictability": 70
    //     },
    //     {
    //     "id": 4848488497020928,
    //     "weather_state_name": "Heavy Rain",
    //     "weather_state_abbr": "hr",
    //     "wind_direction_compass": "S",
    //     "created": "2022-03-25T21:59:22.991375Z",
    //     "applicable_date": "2022-03-27",
    //     "min_temp": 10.655000000000001,
    //     "max_temp": 16.055,
    //     "the_temp": 15.459999999999999,
    //     "wind_speed": 11.329171693841301,
    //     "wind_direction": 173.55255361663674,
    //     "air_pressure": 1005,
    //     "humidity": 70,
    //     "visibility": 11.302431301200986,
    //     "predictability": 77
    //     },
    //     {
    //     "id": 4672777492627456,
    //     "weather_state_name": "Light Rain",
    //     "weather_state_abbr": "lr",
    //     "wind_direction_compass": "ESE",
    //     "created": "2022-03-25T21:59:26.795615Z",
    //     "applicable_date": "2022-03-28",
    //     "min_temp": 10.245000000000001,
    //     "max_temp": 13.504999999999999,
    //     "the_temp": 13.98,
    //     "wind_speed": 5.6783873288369255,
    //     "wind_direction": 103.77352116873737,
    //     "air_pressure": 1007,
    //     "humidity": 78,
    //     "visibility": 10.250449872743179,
    //     "predictability": 75
    //     },
    //     {
    //     "id": 5312875259232256,
    //     "weather_state_name": "Light Cloud",
    //     "weather_state_abbr": "lc",
    //     "wind_direction_compass": "W",
    //     "created": "2022-03-25T21:59:29.098974Z",
    //     "applicable_date": "2022-03-29",
    //     "min_temp": 9.23,
    //     "max_temp": 13.025,
    //     "the_temp": 14.89,
    //     "wind_speed": 7.891756617007345,
    //     "wind_direction": 280.82255843489656,
    //     "air_pressure": 1018,
    //     "humidity": 75,
    //     "visibility": 13.424413922691482,
    //     "predictability": 70
    //     },
    //     {
    //     "id": 6365912899780608,
    //     "weather_state_name": "Heavy Cloud",
    //     "weather_state_abbr": "hc",
    //     "wind_direction_compass": "W",
    //     "created": "2022-03-25T21:59:33.253774Z",
    //     "applicable_date": "2022-03-30",
    //     "min_temp": 8.98,
    //     "max_temp": 13.535,
    //     "the_temp": 13.73,
    //     "wind_speed": 6.805867732442535,
    //     "wind_direction": 275,
    //     "air_pressure": 1019,
    //     "humidity": 70,
    //     "visibility": 9.999726596675416,
    //     "predictability": 71
    //     }
    //     ],
    //     "time": "2022-03-25T15:22:30.967834-07:00",
    //     "sun_rise": "2022-03-25T07:05:21.829045-07:00",
    //     "sun_set": "2022-03-25T19:25:27.265631-07:00",
    //     "timezone_name": "LMT",
    //     "parent": {
    //     "title": "California",
    //     "location_type": "Region / State / Province",
    //     "woeid": 2347563,
    //     "latt_long": "37.271881,-119.270233"
    //     },
    //     "sources": [
    //     {
    //     "title": "BBC",
    //     "slug": "bbc",
    //     "url": "http://www.bbc.co.uk/weather/",
    //     "crawl_rate": 360
    //     },
    //     {
    //     "title": "Forecast.io",
    //     "slug": "forecast-io",
    //     "url": "http://forecast.io/",
    //     "crawl_rate": 480
    //     },
    //     {
    //     "title": "HAMweather",
    //     "slug": "hamweather",
    //     "url": "http://www.hamweather.com/",
    //     "crawl_rate": 360
    //     },
    //     {
    //     "title": "Met Office",
    //     "slug": "met-office",
    //     "url": "http://www.metoffice.gov.uk/",
    //     "crawl_rate": 180
    //     },
    //     {
    //     "title": "OpenWeatherMap",
    //     "slug": "openweathermap",
    //     "url": "http://openweathermap.org/",
    //     "crawl_rate": 360
    //     },
    //     {
    //     "title": "Weather Underground",
    //     "slug": "wunderground",
    //     "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
    //     "crawl_rate": 720
    //     },
    //     {
    //     "title": "World Weather Online",
    //     "slug": "world-weather-online",
    //     "url": "http://www.worldweatheronline.com/",
    //     "crawl_rate": 360
    //     }
    //     ],
    //     "title": "San Francisco",
    //     "location_type": "City",
    //     "woeid": 2487956,
    //     "latt_long": "37.777119, -122.41964",
    //     "timezone": "US/Pacific"
    //     }
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