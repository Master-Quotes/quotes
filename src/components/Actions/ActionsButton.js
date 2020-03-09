import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Button, Link } from 'react-floating-action-button'

//IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalContext";
import SessionContext from "../../context/SessionContext";

const ActionsButton = () => {

	const { modal, setModal } = useContext(GlobalContext);
	const { session, setSession } = useContext(SessionContext);
	console.log("Seesion true?: ", session);

	let history = useHistory();
	// console.log("History: ", history.location.pathname);

	const handleOnClick = () => {
		localStorage.removeItem("token");
		setSession(false);
	};

	return (
		<Container>

			{!session ? (
				<></>
			) : (
				<>
					<Button
						className="item-action action-link link-exit"
						tooltip="Leave Mo'Quotes app"
						icon="cis-account-logout"
						onClick={() => handleOnClick()}
					/>
				</>
			)}
			{history.location.pathname !== "/quotes/add" ? (
				<Button
					className="item-action action-link link-add"
					tooltip="Create Mo'Quotes"
					icon="cis-plus-circle"
					onClick={() => {setModal(true)}}
				/>
			) : (<></>)}
			{history.location.pathname !== "/quotes" ? (
				<Button
					className="item-action action-link link-quotes"
					tooltip="A List of Mo'Quotes"
					icon="cis-list"
					onClick={() => history.push("/quotes")}
				/>
			) : (<></>)}
			{history.location.pathname !== "/" ? (
				<Button
					className="item-action action-link link-home"
					tooltip="Go Home"
					icon="cis-house"
					onClick={() => history.push("/")}
				/>
			) : (<></>)}
			<Button
				className="fab-item item-action action-fab is-large text-white"
				icon="cis-plus"
				rotate={true}
				// onClick={() => alert('FAB Rocks!')}
			/>
		</Container>
	);
};

export default ActionsButton;