import { useEffect } from 'react';
import { useRef } from 'react';

export const SearchField = ({ setPlace }) => {
	const inputRef = useRef(null);
	const infoRef = useRef(null);

	useEffect(() => {
		if (inputRef.current && infoRef.current) {
			const autocomplete = new window.google.maps.places.Autocomplete(
				inputRef.current,
				{}
			);
			const infowindow = new window.google.maps.InfoWindow();
			infowindow.setContent(infoRef.current);
			autocomplete.addListener('place_changed', () => {
				infowindow.close();
				const place = autocomplete.getPlace();

				setPlace(place);
			});
		}
	}, [inputRef, infoRef]);
	return (
		<>
			<div className="search-container" style={{ width: '100%' }}>
				<input type="text" ref={inputRef} style={{ width: '100%' }} />
				<div id="infowindow-content" ref={infoRef} style={{ width: '100%' }}>
					<span id="place-name" className="title"></span>
					<span id="place-address"></span>
				</div>
			</div>
		</>
	);
};
