import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			email,
			password
		};

		try {
			const config = {
				headers: { 'Content-Type': 'application/json' }
			};
			const body = JSON.stringify(user);
			const res = await axios.post('/api/auth', body, config);
			console.log(res.data);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const { email, password } = formData;
	return (
		<section className="LoginForm">
			<h4>Login to Account</h4>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => handleChange(e)}
					required
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={(e) => handleChange(e)}
					required
				/>
				<button>Login</button>
			</form>
			<Link to="/register">
				Don&lsquo;t have an account? Click here to register an account.
			</Link>
		</section>
	);
};

export default LoginForm;
