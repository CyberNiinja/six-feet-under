import { useState } from 'react';
import './user.css';
import axios from "axios";

export const Login = ({ onRegister }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [msg, setMsg] = useState('');
	const onSubmit = () => {};

	const Auth = async (e) => {
	        e.preventDefault();
	        try {
	            await axios.post('http://localhost:5000/login', {
	                email: email,
	                password: password
	            });
	        } catch (error) {
	            if (error.response) {
	                setMsg(error.response.data.msg);
	            }
	        }
	    }
	return (
		<div className="form">
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
				<a href="#" onClick={onRegister}>
					Register now!
				</a>
			</div>
			<button onClick={onSubmit}>Login</button>
		</div>
	);
};
