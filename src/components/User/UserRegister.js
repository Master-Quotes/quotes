import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
// import axios from 'axios';

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";

const UserRegister = () => {

	const { login, setLogin } = useContext(UserContext);
	const { session, setSession } = useContext(SessionContext);

	let history = useHistory();

	console.log("User: ", login);

	const handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post('https://quotes-db-mike.herokuapp.com/auth/register', login)
			.then(response => {
				console.log('response: ', response);
				localStorage.setItem("token", response.data.token);
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
			<h2>Register</h2>
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

export default UserRegister;