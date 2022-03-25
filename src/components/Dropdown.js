import React from 'react';
import '../styles/Dropdown.css';

export default function Dropdown(props) {
	console.log(props.cityList);
	return (
		<div className="centered">
			<ul className="dropdown-content">
				{props.cityList.map((city) => {
					return <li key={city.woeid}>{city.title}</li>;
				})}
			</ul>
		</div>
	);
}
