import React, {useContext} from "react";

// IMPORT CONTEXTS
import SessionContext from "../../context/SessionContext";

// IMPORT APP COMPONENTS
import ContentSessionOut from "./ContentSessionOut";
import ContentSessionIn from "./ContentSessionIn";

const Content = () => {

	const { session } = useContext(SessionContext);
	console.log("Seesion true?: ", session);
	return (
		<section className="main-content session-out">
			{!session ? (
				<ContentSessionOut />
			) : (
				<ContentSessionIn />
			)}
		</section>
	)
};

export default Content;