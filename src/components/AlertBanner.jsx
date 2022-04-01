import { Alert } from 'react-bootstrap';

const AlertBanner = () => {
	return (
		<Alert variant="danger" className="pt-1 pb-1 mt-2">
			<p className="mb-1">Your city was not found. Please search for a different city.</p>
		</Alert>
	);
};
export default AlertBanner;
