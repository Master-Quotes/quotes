import React from "react";
import { useHistory } from "react-router-dom";

//IMPORT ASSETS
import Logo from "../../assets/images/Logo.png"

// IMPORT APP COMPONENTS
import Back from "../Layout/Back";

const Header = () => {

	let history = useHistory();

	return (
		<header id="header" className="header">
			{/*{history.location.pathname !== "/" ? (*/}
			{/*	<div id="branding" className="branding">*/}
			{/*			<Back />*/}
			{/*		<span className="brand-logo">*/}
			{/*			<img src={Logo} alt="Mo'Quotes Logo" className="logo-image"/>*/}
			{/*		</span>*/}
			{/*		<span*/}
			{/*			className="brand-title"*/}
			{/*			onClick={() => history.push("/")}*/}
			{/*		>*/}
			{/*			<h1>Mo'Quotes</h1>*/}
			{/*		</span>*/}
			{/*	</div>*/}
			{/*) : (*/}
				<div id="branding" className="branding centered">
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
			{/*)}*/}
		</header>
	)
};

export default Header;