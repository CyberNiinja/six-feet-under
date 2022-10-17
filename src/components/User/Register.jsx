import { useState } from 'react';

export const Register = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const onSubmit = () => {};

	return (
		<div className="form">
			<div className="form-field">
				<label html-for="form-email" className="form-field-label"></label>
				<input
					id="form-email"
					name="form-email"
					className="form-field-input"
					value={email}
					onChange={(e, o) => setEmail(o.target.value)}></input>
			</div>
			<div className="form-field">
				<label html-for="form-password" className="form-field-label"></label>
				<input
					id="form-password"
					name="form-password"
					className="form-field-input"
					value={password}
					onChange={(e, o) => setPassword(o.target.value)}></input>
			</div>
			<div className="form-password-confirm">
				<label html-for="form-email" className="form-field-label"></label>
				<input
					id="form-password-confirm"
					name="form-password-confirm"
					className="form-field-input"
					value={confirmPassword}
					onChange={(e, o) => setConfirmPassword(o.target.value)}></input>
			</div>

			<button onClick={onSubmit}>Register</button>
		</div>
	);
};
