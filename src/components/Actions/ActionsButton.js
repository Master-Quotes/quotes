import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'

const ActionsButton = () => {
	return (
		<Container>
			<Link
				href="#"
			  tooltip="Create note link"
			  icon="far fa-sticky-note"
			/>
			<Link
				href="#"
			  tooltip="Add user link"
			  icon="fas fa-user-plus"
			/>
			<Button
				className="fab-item btn btn-link btn-lg text-white"
				tooltip="The big plus button!"
				icon="fas fa-plus"
				rotate={true}
				// onClick={() => alert('FAB Rocks!')}
			/>
		</Container>
	);
};

export default ActionsButton;