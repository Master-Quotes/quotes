import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'
import { useHistory } from "react-router-dom";

const ActionsButton = () => {

	let history = useHistory();

	const handleLogOut = () => {
		return localStorage.removeItem("token");
	};
	// console.log("Working: ", handleLogOut());

	return (
		<Container>
			<Link
				href="/"
			  tooltip="Leave Mo'Quotes app"
			  icon="cil-account-logout"
				onClick={(handleLogOut())}
			/>
			<Link
				href="#"
			  tooltip="Create Mo'Quote"
			  icon="cis-pencil"
			/>
			<Link
				href="#"
			  tooltip="A List of Mo'Quotes"
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