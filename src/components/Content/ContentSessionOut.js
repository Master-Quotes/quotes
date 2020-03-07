import React from "react";
import { Link } from "react-router-dom";

const ContentSessionOut = () => {
	return (
		<section className="section section-container is-flex-centered is-full-height">
			<p>
				Are you a member?<br />
				If not, register below!
			</p>
			<span className="button-group">
				<Link to={`/user/login`} className="button">Login</Link>
				<Link to={`/user/register`} className="button">Register</Link>
			</span>
		</section>
	)
};

export default ContentSessionOut;