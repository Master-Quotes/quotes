import React, { useState, useContext }    from 'react';
import { useHistory }                     from "react-router-dom";
import axios from 'axios';

// IMPORT UTILITIES
import { axiosWithAuth }                  from "../../utilities/axiosWithAuth";


// IMPORT CONTEXTS
import LoggedContext                      from "../../context/LoggedContext";


const Login = () => {

	const { logged, setLogged} = useContext(LoggedContext);

	let history = useHistory();

	const [login, setLogin] = useState({
		username: "",
		password: ""
	});

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post('https://quotes-db-mike.herokuapp.com/')
			.then(response => {
				console.log('response: ', response);
				localStorage.setItem("token", response.data.payload);
				setLogin(login);
				setLogged(localStorage.getItem("token"));
				console.log("Really logged? ", logged);
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
		<div className="container">
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={login.name}
						required
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={login.email}
						onChange={handleChange}
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
}