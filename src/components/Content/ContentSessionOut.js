import React from "react";
import { Link } from "react-router-dom";

const ContentSessionOut = () => {
	return (
		<section className="section section-login login-container container">
			<div className="login-body">
				<ul>
					<li>Are you a member?</li>
					<li>If not, register below.</li>
				</ul>
			</div>
			<span className="button-group">
				<Link to={`/user/login`} className="button">Login</Link>
				<Link to={`/user/register`} className="button">Register</Link>
			</span>
		</section>
	)
};

export default ContentSessionOut;