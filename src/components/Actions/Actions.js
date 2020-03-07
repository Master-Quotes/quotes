import React, {useContext} from 'react';

// IMPORT CONTEXTS
import SessionContext from "../../context/SessionContext";

// IMPORT APP COMPONENTS
import ActionsButton from "./ActionsButton";
import ActionsMenu from "./ActionsMenu";

const Actions = () => {

	// const { session } = useContext(SessionContext);
	// console.log("Seesion true?: ", session);

	return (
		<>
			<ActionsButton />
			{/*<ActionsMenu/>*/}
		</>
	);
};

export default Actions;