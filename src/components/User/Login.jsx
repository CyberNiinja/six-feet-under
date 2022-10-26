import { useState } from 'react';
import './user.css';
import axios from 'axios';

export const Login = ({ onRegisterClick, onAuth }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const authenticate = async (e) => {
		e.preventDefault();
		try {
			var x = await axios.post('http://localhost:5000/login', {
				email: email,
				password: password,
			});

			if (x.status === 200) {
				onAuth();
			}
			if (x.status === 404) {
				alert('email not found');
			}
			if (x.status === 400) {
				alert('authentication failed, invalid credentials');
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.msg);
			}
		}
	};
	return (
		<div className="form">
		<h2>Login to Six Feet Under</h2>
			<div className="form-field">
				<label html-for="form-email" className="form-field-label">
					Email
				</label>
				<input
					id="form-email"
					name="form-email"
					className="form-field-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}></input>
			</div>
			<div className="form-field">
				<label html-for="form-password" className="form-field-label">
					Password
				</label>
				<input
					id="form-password"
					name="form-password"
					className="form-field-input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>
			</div>
			<div>
				Not registered yet?{' '}
				<a href="#" onClick={onRegisterClick}>
					Register now!
				</a>
			</div>
			<button class="button2" onClick={authenticate}>Login</button>
		</div>
	);
};
