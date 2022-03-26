import * as React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import '../styles/App.css';

export default function MediaCard(props) {
	// console.log('weather location data', props.forecastData);
	let date = props.forecastData.applicable_date;
	const dateArray = date.split('');
	const modifiedDate = `${dateArray.slice(5, 7).join('')}/${dateArray.slice(-2).join('')}/${dateArray
		.slice(0, 4)
		.join('')}`;
	// console.log(modifiedDate);
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
	];
	const weekArray = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	date = new Date(modifiedDate);
	// console.log(dayOfWeek.getDay());
	return (
		<div className="d-flex justify-content-center">
			<Card style={{ width: '18rem' }}>
				<Card.Img
					className="card-img"
					variant="top"
					src={`https://www.metaweather.com/static/img/weather/${props.forecastData.weather_state_abbr}.svg`}
				/>
				<Card.Body>
					<Card.Title className="text-center">
						{weekArray[date.getDay()]}, {months[date.getMonth()]} {date.getUTCDate()}
					</Card.Title>

					<Card.Text>{props.forecastData.weather_state_name}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Current Temp: {Math.round(props.forecastData.the_temp)}°C</ListGroupItem>
					<ListGroupItem>Max Temp: {Math.round(props.forecastData.max_temp)}°C </ListGroupItem>
					<ListGroupItem>Min Temp: {Math.round(props.forecastData.min_temp)}°C</ListGroupItem>
				</ListGroup>
				{/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
			</Card>
		</div>
	);
}
