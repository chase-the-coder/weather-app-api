import React from 'react';
import { Container, ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import '../styles/App.css';
export default function TodaysForecast(props) {
	const { consolidated_weather } = props.forecastData;
	let date = consolidated_weather[0].applicable_date;

	const dateArray = date.split('');
	const modifiedDate = `${dateArray.slice(5, 7).join('')}/${dateArray.slice(-2).join('')}/${dateArray
		.slice(0, 4)
		.join('')}`;
	// console.log(modifiedDate);
	date = new Date(modifiedDate);
	return (
		<Container className="d-flex justify-content-center m-4">
			<div className="d-flex justify-content-center">
				<Card style={{ width: '20rem' }}>
					<div className="text-center">
						<Card.Img
							className="featured-image mt-3"
							variant="top"
							src={`https://www.metaweather.com/static/img/weather/${consolidated_weather[0]
								.weather_state_abbr}.svg`}
						/>
					</div>
					<Card.Body>
						<Card.Title className="text-center">
							{props.weekArray[date.getDay()]}, {props.months[date.getMonth()]} {date.getUTCDate()}
						</Card.Title>

						<Card.Text className="text-center">{consolidated_weather[0].weather_state_name}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem>Current Temp: {Math.round(consolidated_weather[0].the_temp)}°C</ListGroupItem>
						<ListGroupItem>Max Temp: {Math.round(consolidated_weather[0].max_temp)}°C </ListGroupItem>
						<ListGroupItem>Min Temp: {Math.round(consolidated_weather[0].min_temp)}°C</ListGroupItem>
					</ListGroup>
					{/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
				</Card>
			</div>
		</Container>
	);
}
