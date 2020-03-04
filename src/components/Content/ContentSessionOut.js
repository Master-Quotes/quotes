import React from "react";
import { Link } from "react-router-dom";

const ContentSessionOut = () => {
	return (
		<div>
			<Link to={`/user/login`}>Login</Link>
			<Link to={`/user/register`}>Register</Link>
		</div>
	)
};

export default ContentSessionOut;