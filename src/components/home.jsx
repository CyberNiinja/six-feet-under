import { Wrapper } from '@googlemaps/react-wrapper';
import { SearchField } from './SearchField/SearchField';
import { useState } from 'react';
import Catalogues from './Catalogues';
import AttractionList from './AttractionList/AttractionList';
export const Home = ({ logout, username }) => {
	const [page, setPage] = useState('home');
	const [place, setPlace] = useState();
	return (
		<>
			{console.log(place)}
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
					<button onClick={() => logout()}>Logout {username}</button>
				</nav>
			</header>
			<main>
				{page === 'home' && (
					<Wrapper
						apiKey="AIzaSyC_yWvLfwqaS3kE2MUOLM7P3otOl-KSFbU"
						libraries={['places']}>
						<SearchField setPlace={setPlace} />
						<AttractionList place={place} />
					</Wrapper>
				)}

				{(page === 'sweden' ||
					page === 'iran' ||
					page === 'pakistan' ||
					page === 'ukraine') && <Catalogues country={page}></Catalogues>}
			</main>
		</>
	);
};
