import './App.css';
import AttractionDetail from './components/AttractionDetail/AttractionDetail';
import { Wrapper } from '@googlemaps/react-wrapper';
function App() {
	return (
		<div className="App">
			<main>
				<Wrapper
					apiKey="AIzaSyC_yWvLfwqaS3kE2MUOLM7P3otOl-KSFbU"
					libraries={['places']}>
					<AttractionDetail />
				</Wrapper>
			</main>
		</div>
	);
}

export default App;
