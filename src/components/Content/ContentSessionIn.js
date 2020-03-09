import React, { useContext, useMemo } from "react";

// IMPORT CONTEXTS
import UserContext from "../../context/UserContext";

// IMPORT APP COMPONENTS
import QuotesFeatured from "../Quote/QuoteFeatured";

const ContentSessionIn = () => {
	const {login, setLogin, username } = useContext(UserContext);
	console.log(login);

	// MEMOIZE STATE
	const userValue = useMemo(() => ({ login, setLogin, username }), [login, setLogin, username]);
	console.log("Memoizing? ", userValue );

	return (
		<section className="section section-home home-container container">
			<div className="home-header header">
				<h2>Hi, {username}!</h2>
			</div>
			<QuotesFeatured />
		</section>
	)
};

export default ContentSessionIn;