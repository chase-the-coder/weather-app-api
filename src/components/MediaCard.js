import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/App.css';

export default function MediaCard(props) {
	console.log('weather location data', props.forecastData);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				className="center"
				sx={{ width: 345, height: 140 }}
				component="img"
				image={`https://www.metaweather.com/static/img/weather/${props.forecastData.weather_state_abbr}.svg`}
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.forecastData.weather_state_name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
					continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Share</Button>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
