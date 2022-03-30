import { Alert } from 'react-bootstrap';

const AlertBanner = () => {
	return (
		<Alert variant="danger" className="pt-1 pb-1 mt-2">
			{/* <Alert.Heading>Hey, nice to see you</Alert.Heading> */}
			<p className="mb-1">Your city was not found. Please search for a different city.</p>
		</Alert>
	);
};
export default AlertBanner;
