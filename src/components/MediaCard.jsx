import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import '../styles/App.css';

const MediaCard = (props) => {
	// console.log('weather location data', props.forecastData);
	let date = props.forecastData.applicable_date;
	const contextValue = useContext(ThemeContext);
	const { temp, convert } = contextValue;

	const dateArray = date.split('');
	const modifiedDate = `${dateArray.slice(5, 7).join('')}/${dateArray.slice(-2).join('')}/${dateArray
		.slice(0, 4)
		.join('')}`;
	// console.log(modifiedDate);
	date = new Date(modifiedDate);
	// console.log(dayOfWeek.getDay());
	return (
		<div className="d-flex justify-content-center">
			<Card style={{ width: '13rem' }} className="mb-4">
				<div className="text-center">
					<Card.Img
						className="card-img mt-3"
						variant="top"
						src={`https://www.metaweather.com/static/img/weather/${props.forecastData
							.weather_state_abbr}.svg`}
					/>
				</div>
				<Card.Body>
					<Card.Title className="text-center">{props.weekArray[date.getDay()]},</Card.Title>
					<Card.Title className="text-center">
						{props.months[date.getMonth()]} {date.getUTCDate()}
					</Card.Title>

					<Card.Text className="text-center">{props.forecastData.weather_state_name}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>
						Current Temp: {Math.round(convert(props.forecastData.the_temp))}°{temp}
					</ListGroupItem>
					<ListGroupItem>
						Max Temp: {Math.round(convert(props.forecastData.max_temp))}°{temp}
					</ListGroupItem>
					<ListGroupItem>
						Min Temp: {Math.round(convert(props.forecastData.min_temp))}°{temp}
					</ListGroupItem>
				</ListGroup>
				{/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
			</Card>
		</div>
	);
};

export default MediaCard;
