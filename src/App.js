import './App.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import AttractionList from './components/AttractionList/AttractionList';
import { useState } from 'react';
import Catalogues from './components/Catalogues';
import { Login } from './components/User/Login';
import { Register } from './components/User/Register';
function App() {
	const [page, setPage] = useState('home');
	const [isShowing, setIsShowing] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	return (
		<div className="App">
			<header>
				<div>SIX FEET UNDER</div>
				<nav>
					<button onClick={() => setPage('home')}>Home</button>
					<button onClick={() => setPage('sweden')}>Sweden Catalogue</button>
					<button onClick={() => setPage('iran')}>Iran Catalogue</button>
					<button onClick={() => setPage('pakistan')}>
						Pakistan Catalogue
					</button>
					<button onClick={() => setPage('ukraine')}>Ukraine Catalogue</button>
					<button
						onClick={() => {
							setIsShowing(true);
						}}>
						Login
					</button>
				</nav>
			</header>
			<main>
				{page === 'home' && (
					<Wrapper
						apiKey="AIzaSyC_yWvLfwqaS3kE2MUOLM7P3otOl-KSFbU"
						libraries={['places']}>
						<AttractionList />
					</Wrapper>
				)}

				{(page === 'sweden' ||
					page === 'iran' ||
					page === 'pakistan' ||
					page === 'ukraine') && <Catalogues country={page}></Catalogues>}
			</main>
			{isShowing && (
				<div className="background-layer">
					<div className="modal">
						<div className="close">&#10006;</div>
						{!showRegister ? (
							<Login onRegister={() => setShowRegister(true)}></Login>
						) : (
							<Register></Register>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
