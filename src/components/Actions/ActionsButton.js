import React, {useContext} from 'react';
import { Container, Button, Link } from 'react-floating-action-button'
import { useHistory } from "react-router-dom";
import SessionContext from "../../context/SessionContext";

const ActionsButton = () => {

	const { session, setSession } = useContext(SessionContext);
	console.log("Seesion true?: ", session);

	let history = useHistory();
	// console.log("History: ", history.location.pathname);

	const handleOnClick = () => {
		// localStorage.removeItem("token");
		setSession(false);
	};

	return (
		<Container>

			{!session ? (
				<></>
			) : (
				<>
					<Link
						href="/"
						tooltip="Leave Mo'Quotes app"
						icon="cil-account-logout"
						onClick={handleOnClick}
					/>
				</>
			)}
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
			) : (<></>)}
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