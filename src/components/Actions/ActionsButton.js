import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'

const ActionsButton = () => {

	const handleLogOut = () => {
		return localStorage.removeItem("token");
	};

	return (
		<Container>
			<Link
				href="#"
			  tooltip="Log out of Mo'Quotes"
			  icon="cil-account-logout"
				onClick={() => handleLogOut}
			/>
			<Link
				href="#"
			  tooltip="Create a Quote"
			  icon="cis-pencil"
			/>
			<Link
				href="#"
			  tooltip="Lists of Quotes"
			  icon="cis-list"
			/>
			<Button
				className="fab-item action action-link is-large text-white"
				icon="cis-plus"
				rotate={true}
				// onClick={() => alert('FAB Rocks!')}
			/>
		</Container>
	);
};

export default ActionsButton;