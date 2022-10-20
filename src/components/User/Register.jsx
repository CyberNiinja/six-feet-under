import { useState } from 'react';
import axios from "axios";
import './user.css';
//import { useNavigate } from "react-router-dom";
export const Register = ({onSubmit}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState('');
	// const [confirmPassword, setConfirmPassword] = useState();
	const [confPassword, setConfPassword] = useState('');
	const [msg, setMsg] = useState('');
	//const navigate = useNavigate();
	const onClick = async(e) => {
				e.preventDefault();
        try {
            let x = axios.post('http://localhost:5000/users', {
								name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
						onSubmit();
						await x;
				//		navigate.push("/home");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
	};

	return (
			<div className="form">
			<div className="form-field">
				<label html-for="form-nam" className="form-field-label">Username</label>
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
				<label html-for="form-email" className="form-field-label">Email</label>
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
				<label html-for="form-password" className="form-field-label">Provide Password</label>
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
				<label html-for="form-password-confirm" className="form-field-label">Repeat Password</label>
				<input
					id="form-password-confirm"
					name="form-password-confirm"
					placeholder="Repeat Password"
					type="password"
					className="form-field-input"
					value={confPassword}
					onChange={(e) => setConfPassword(e.target.value)}></input>
			</div>
			<button onClick={onClick}>Register</button>
		</div>
	);
};
