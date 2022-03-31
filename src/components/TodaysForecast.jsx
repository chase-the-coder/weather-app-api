import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { Container, ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import '../styles/App.css';

const TodaysForecast = (props) => {
	const { current, daily } = props.forecastData;
	const contextValue = useContext(ThemeContext);
	const { temp, convert } = contextValue;
	let date = consolidated_weather[0].applicable_date;

	const dateArray = date.split('');
	const modifiedDate = `${dateArray.slice(5, 7).join('')}/${dateArray.slice(-2).join('')}/${dateArray
		.slice(0, 4)
		.join('')}`;
	// console.log(modifiedDate);
	date = new Date(modifiedDate);
	return (
		<Container className="d-flex align-items-center flex-column mt-4">
			<h3 className="mb-4">Today's weather for {title}</h3>
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
						<ListGroupItem>
							Current Temp: {Math.round(convert(consolidated_weather[0].the_temp))}°{temp}
						</ListGroupItem>
						<ListGroupItem>
							Max Temp: {Math.round(convert(consolidated_weather[0].max_temp))}°{temp}{' '}
						</ListGroupItem>
						<ListGroupItem>
							Min Temp: {Math.round(convert(consolidated_weather[0].min_temp))}°{temp}
						</ListGroupItem>
					</ListGroup>
					{/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
				</Card>
			</div>
		</Container>
	);
};
export default TodaysForecast;
