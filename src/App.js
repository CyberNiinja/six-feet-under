import './App.css';
import { useEffect, useState } from 'react';
import { Login } from './components/User/Login';
import { Register } from './components/User/Register';
import { Home } from './components/home';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [name, setName] = useState('');

	const refreshToken = async () => {
		try {
			const response = await axios.get('http://localhost:5000/token');
			if (response.status === 200) {
				const decoded = jwt_decode(response.data.accessToken);
				setName(decoded.name);
				setIsLoggedIn(true);
			}
		} catch (error) {}
	};

	const logout = async () => {
		await axios.delete('http://localhost:5000/logout');
		setIsLoggedIn(false);
	};

	useEffect(() => {
		refreshToken();
	});
	return (
		<div className="App">
			{!isLoggedIn && (
				<div className="background-layer">
					{!showRegister ? (
						<Login
							onRegisterClick={() => setShowRegister(true)}
							onAuth={() => setIsLoggedIn(true)}></Login>
					) : (
						<Register onLoginClick={() => setShowRegister(false)}></Register>
					)}
				</div>
			)}
			{isLoggedIn && <Home logout={logout} username={name}></Home>}
		</div>
	);
}

export default App;
