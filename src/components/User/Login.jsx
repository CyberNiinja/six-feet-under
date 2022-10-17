import { useState } from 'react';
import './user.css';

export const Login = ({ onRegister }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const onSubmit = () => {};

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
					onChange={(e, o) => setEmail(o.target.value)}></input>
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
					onChange={(e, o) => setPassword(o.target.value)}></input>
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
