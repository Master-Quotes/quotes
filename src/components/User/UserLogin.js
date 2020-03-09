import React, { useState, useContext, useMemo } from 'react';
import { useHistory } from "react-router-dom";
// import axios from 'axios';

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import GlobalContext from "../../context/GlobalContext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";

// IMPORT INITIAL STATE
import User                               from "./User";

const UserLogin = () => {

	// const { history } = useContext(GlobalContext);
	const { login, setLogin } = useContext(UserContext);
	const { session, setSession } = useContext(SessionContext);

	// MEMOIZE STATE
	const userValue = useMemo(() => ({ login, setLogin }), [login, setLogin]);

	console.log("User: ", login);

	const handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post('http://quotes-db-mike.herokuapp.com/auth/login')
			.then(response => {
				console.log('response: ', response);
				localStorage.setItem("token", response.data.payload);
				setLogin(login);
				setSession(localStorage.getItem("token"));
				console.log("Really logged? ", session);
				history.push("/");
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
		<div className="form-container">
			<h2>Login</h2>
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
				<input
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	)
};

export default UserLogin;