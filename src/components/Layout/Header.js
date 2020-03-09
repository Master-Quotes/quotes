import React from "react";
import { useHistory } from "react-router-dom";

//IMPORT ASSETS
import Logo from "../../assets/images/Logo.png"

const Header = () => {

	let history = useHistory();

	return (
		<header id="header" className="header">
			<div id="branding" className="branding">
				<span className="brand-logo">
					<img src={Logo} alt="Mo'Quotes Logo" className="logo-image"/>
				</span>
				<span
					className="brand-title"
					onClick={() => history.push("/")}
				>
					<h1>Mo'Quotes</h1>
				</span>

			</div>
		</header>
	)
};

export default Header;