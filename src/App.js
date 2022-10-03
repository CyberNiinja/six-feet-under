import './App.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import AttractionList from './components/AttractionList/AttractionList';
import { useState } from 'react';
import Catalogues from './components/Catalogues';
function App() {
	const [page, setPage] = useState('home');
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
		</div>
	);
}

export default App;
