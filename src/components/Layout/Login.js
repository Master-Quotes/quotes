import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [login, setLogin] = useState('');

    handleSubmit = event => {
        event.preventDefault();
        axios
            .post('')
            .then(response => {
                console.log('response: ', response);
                // setLogin(response);
            })
            .catch(error => console.log('error: ', error));
    }

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