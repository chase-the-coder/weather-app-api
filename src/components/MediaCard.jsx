import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import '../styles/App.css';

const MediaCard = (props) => {
	const { forecastData, weekArray, months } = props;
	const contextValue = useContext(ThemeContext);
	const { temp, convert } = contextValue;
	const date = new Date(forecastData.dt * 1000);
	return (
		<div className="d-flex justify-content-center">
			<Card style={{ width: '13rem' }} className="mb-4">
				<div className="text-center">
					<Card.Img
						className="card-img mt-3"
						variant="top"
						src={`https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`}
					/>
				</div>
				<Card.Body>
					<Card.Title className="text-center">
						{Math.round(convert(forecastData.temp.day))}°{temp}
					</Card.Title>
					<Card.Title className="text-center">
						{forecastData.weather[0].description.charAt(0).toUpperCase() +
							forecastData.weather[0].description.slice(1)}
					</Card.Title>

					<Card.Text className="text-center">
						{weekArray[date.getDay()]}, {months[date.getMonth()]} {date.getUTCDate()}
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						Max Temp: {Math.round(convert(forecastData.temp.max))}°{temp}
					</ListGroupItem>
					<ListGroupItem>
						Min Temp: {Math.round(convert(forecastData.temp.min))}°{temp}{' '}
					</ListGroupItem>
				</ListGroup>
			</Card>
		</div>
	);
};

export default MediaCard;
