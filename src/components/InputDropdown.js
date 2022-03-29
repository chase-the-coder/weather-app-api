import Dropdown from 'react-bootstrap/Dropdown';

export default function InputDropdown({ cityList, onCityClick }) {
	return (
		<Dropdown.Menu show>
			<Dropdown.Header />
			{cityList.map((city) => {
				return (
					<Dropdown.Item
						action
						key={city.woeid}
						onClick={() => {
							onCityClick(city);
						}}
					>
						{city.title}
					</Dropdown.Item>
				);
			})}
		</Dropdown.Menu>
	);
}
