import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/App.css';
export default function TodaysForecast(props) {
	const { consolidated_weather } = props.forecastData;
	return (
		<Container className="d-flex justify-content-center">
			<img
				className="card-img"
				src={`https://www.metaweather.com/static/img/weather/${consolidated_weather[0].weather_state_abbr}.svg`}
				alt=""
			/>
		</Container>
	);
}
