import React, { useContext, useMemo } from 'react';
import { Link, useHistory } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
// import GlobalContext from "../../context/GlobalContext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";

// IMPORT INITIAL STATES
import User from "./User";

const UserAuth = ({role}) => {

	let history = useHistory();

	const { login, setLogin } = useContext(UserContext);
	const { session, setSession } = useContext(SessionContext);
	console.log("Still logged in? ", session);
	console.log("User: ", login);

	// MEMOIZE STATE
	const userValue = useMemo(() => ({ login, setLogin }), [login, setLogin]);
	console.log("Memoizing? ", userValue );

	const handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post(`/auth/${role}`, login)
			.then(response => {
				console.log('response: ', response);
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("username", login.username);
				setSession(true);
				history.push("/");
				setLogin(User);
			})
			.catch(error => console.log('error: ', error));
	};

	const handleChange = event => {
		setLogin({
			...login,
			[event.target.name]: event.target.value
		});
	};

	return(
		<section className="section section-container container">
			<div className="form-container">
				<div className="form-header header">
					<h2>Please, {role}</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<label>
						Username:
						<input
							type="text"
							name="username"
							onChange={handleChange}
							value={login.username}
							required
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							name="password"
							value={login.password}
							onChange={handleChange}
							required
						/>
					</label>
					<div className="button-group">
						<input
							type="submit"
							value="Submit"
							className="button success"
						/>
						<Link to="/" className="outline">Cancel</Link>
					</div>
				</form>
			</div>
		</section>
	)
};

export default UserAuth;