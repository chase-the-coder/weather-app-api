import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const Loading = () => {
	return (
		<Modal.Dialog>
			<Modal.Body className="d-flex justify-content-center">
				<div>
					<p>Your results are loading</p>
					<div className="text-center">
						<Spinner animation="border" size="lg" />
					</div>
				</div>
			</Modal.Body>
		</Modal.Dialog>
	);
};

export default Loading;
