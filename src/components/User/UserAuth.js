import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

// IMPORT UTILITIES
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

// IMPORT CONTEXTS
// import GlobalContext from "../../context/GlobalContext";
import UserContext from "../../context/UserContext";
import SessionContext from "../../context/SessionContext";

const UserAuth = ({role}) => {

	let history = useHistory();

	// const { history } = useContext(GlobalContext);
	const { login, setLogin } = useContext(UserContext);
	const { setSession } = useContext(SessionContext);

	console.log("User: ", login);

	const handleSubmit = event => {
		event.preventDefault();
		axiosWithAuth()
			.post(`https://quotes-db-mike.herokuapp.com/auth/${role}`, login)
			.then(response => {
				console.log('response: ', response);
				localStorage.setItem("token", response.data.token);
				setSession(true);
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
			<div className="form-header">
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
				<input
					type="submit"
					value="Submit"
					className="button"
				/>
			</form>
		</div>
	)
};

export default UserAuth;