import { useState } from 'react';
import axios from 'axios';
import { FlexiPasswordChecklist } from 'react-flexi-password-checklist';
import './user.css';
export const Register = ({ onLoginClick }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const onClick = async (e) => {
		e.preventDefault();
		try {
			let x = await axios.post('http://localhost:5000/users', {
				name: name,
				email: email,
				password: password,
				confPassword: confPassword,
			});
			if (x.status === 200) {
				alert('success');
				onLoginClick();
			}
			if (x.status !== 200) {
				alert('something went wrong');
			}
		} catch (error) {
			if (error.response) {
				alert(error.response.data.msg);
			}
		}
	};

	return (
		<div className="form">
		<h2>Register Now</h2>
			<div className="form-field">
				<label html-for="form-nam" className="form-field-label">
					Username
				</label>
				<input
					id="form-nam"
					name="form-nam"
					placeholder="Enter Username"
					type="text"
					className="form-field-input"
					value={name}
					onChange={(e) => setName(e.target.value)}></input>
			</div>
			<div className="form-field">
				<label html-for="form-email" className="form-field-label">
					Email
				</label>
				<input
					id="form-email"
					name="form-email"
					placeholder="Enter Email"
					type="text"
					className="form-field-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}></input>
			</div>
			<div className="form-field">
				<label html-for="form-password" className="form-field-label">
					Provide Password
				</label>
				<input
					id="form-password"
					name="form-password"
					placeholder="Enter Password"
					type="password"
					className="form-field-input"
					value={password}
					onChange={(e) => setPassword(e.target.value)}></input>
			</div>
			<div className="form-field">
				<label html-for="form-password-confirm" className="form-field-label">
					Repeat Password
				</label>
				<input
					id="form-password-confirm"
					name="form-password-confirm"
					placeholder="Repeat Password"
					type="password"
					className="form-field-input"
					value={confPassword}
					onChange={(e) => setConfPassword(e.target.value)}></input>
			</div>

				<FlexiPasswordChecklist password={password}
               confirmPassword={confPassword}
                	config={{ matchPasswords : true}}
										/>
			<button class="button2" onClick={onClick}>Register</button>
			<div>
				Already have an account?{' '}
				<a href="#" onClick={onLoginClick}>
					Log in now!
				</a>
			</div>
		</div>
	);
};
