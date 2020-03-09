import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {

	let history = useHistory();

	return (
		<header id="header" className="header">
			<div id="branding" className="branding">
				<span onClick={() => history.push("/")}>
					<h1>Mo'Quotes</h1>
				</span>

			</div>
		</header>
	)
};

export default Header;