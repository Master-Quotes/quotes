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
						to="/"
						tooltip="Leave Mo'Quotes app"
						icon="cis-account-logout"
						onClick={handleOnClick}
					/>
				</>
			)}
			{history.location.pathname !== "/quotes/add" ? (
				<Link
					href="/quotes/add"
					to="/quotes/add"
					tooltip="Create Mo'Quotes"
					icon="cis-plus-circle"
				/>
			) : (<></>)}
			{history.location.pathname !== "/quotes" ? (
				<Link
					href="/quotes"
					to="/quotes"
					tooltip="A List of Mo'Quotes"
					icon="cis-list"
				/>
			) : (<></>)}
			{history.location.pathname !== "/" ? (
				<Link
					href="/"
					to="/"
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