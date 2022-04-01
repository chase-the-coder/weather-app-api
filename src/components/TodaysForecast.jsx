import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Container, ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import '../styles/App.css';

const TodaysForecast = (props) => {
	const { current, daily } = props.forecastData;
	const contextValue = useContext(ThemeContext);
	const { temp, convert } = contextValue;
	const date = new Date(daily[0].dt * 1000);
	return (
		<Container className="d-flex align-items-center flex-column mt-4">
			<h3 className="mb-4">Today's weather for {props.city[0].name}</h3>
			<div className="d-flex justify-content-center">
				<Card style={{ width: '20rem' }}>
					<div className="text-center">
						<Card.Img
							className="featured-image mt-3"
							variant="top"
							src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
						/>
					</div>
					<Card.Body>
						<Card.Title className="text-center">
							{Math.round(convert(current.temp))}°{temp}
						</Card.Title>
						<Card.Title className="text-center">
							{current.weather[0].description.charAt(0).toUpperCase() +
								current.weather[0].description.slice(1)}
						</Card.Title>

						<Card.Text className="text-center">
							{props.weekArray[date.getDay()]}, {props.months[date.getMonth()]} {date.getUTCDate()}
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>
							Feels Like: {Math.round(convert(current.feels_like))}°{temp}{' '}
						</ListGroupItem>
						<ListGroupItem>
							Max Temp: {Math.round(convert(daily[0].temp.max))}°{temp}
						</ListGroupItem>
						<ListGroupItem>
							Min Temp: {Math.round(convert(daily[0].temp.min))}°{temp}
						</ListGroupItem>
					</ListGroup>
				</Card>
			</div>
		</Container>
	);
};
export default TodaysForecast;
