import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'
import { useHistory } from "react-router-dom";

const ActionsButton = () => {

	let history = useHistory();
	console.log("History: ", history.location.pathname);

	// const handleLogOut = (e) => {
	// 	 localStorage.removeItem("token");
	// };
	// console.log("Working: ", handleLogOut());

	return (
		<Container>
			{/*<Link*/}
			{/*	href="/"*/}
			{/*  tooltip="Leave Mo'Quotes app"*/}
			{/*  icon="cil-account-logout"*/}
			{/*	// onClick={(handleLogOut())}*/}
			{/*/>*/}
			<Link
				href="#"
			  tooltip="Create Mo'Quote"
			  icon="cis-pencil"
			/>
			<Link
				href="/quotes"
			  tooltip="A List of Mo'Quotes"
			  icon="cis-list"
			/>
			{history.location.pathname !== "/" ? (
				<Link
					href="/"
					tooltip="Go Home"
					icon="cis-house"
				/>
			) : (" ")}
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