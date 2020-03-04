import React from "react";
import { Link } from "react-router-dom";

// IMPORT APP COMPONENT
import UserLogin from "../User/UserLogin";

const ContentSessionOut = () => {
	return (
		<section className="main-content session-out">
			<Link to={`/user/login`}>Login</Link>
			<Link to={`/user/register`}>Register</Link>
		</section>
	)
};

export default ContentSessionOut;