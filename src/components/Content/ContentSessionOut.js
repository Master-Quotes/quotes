import React from "react";
import { Link } from "react-router-dom";

const ContentSessionOut = () => {
	return (
		<>
			<Link to={`/user/login`}>Login</Link>
			<Link to={`/user/register`}>Register</Link>
		</>
	)
};

export default ContentSessionOut;