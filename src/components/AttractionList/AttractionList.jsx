import { useState, useEffect, useRef } from 'react';
import AttractionListItem from './AttractionListItem';
const AttractionList = ({ place }) => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [service, setService] = useState();
	const [items, setItems] = useState();

	// set the api service and the map reference on first render
	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}));
		}
		if (ref.current && map && !service) {
			setService(new window.google.maps.places.PlacesService(map));
		}
	}, [ref, map, service]);

	// once the service is instantiated fetch the information
	// when we have a list of attractions this will be done outside of the component
	useEffect(() => {
		if (place && service) {
			console.log(place);
			const request = {
				location: {
					lat: place.geometry.location.lat(),
					lng: place.geometry.location.lng(),
				},
				radius: 4000,
				type: ['tourist_attraction'],
			};
			service.nearbySearch(request, (result, status) => {
				setItems(result);
				console.log(result);
			});
		}
	}, [service, place]);

	return (
		<>
			<div className="results-container">
				<div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
					<div ref={ref}></div>
					{items ? (
						items.map((x) => (
							<AttractionListItem item={x} key={x.place_id} service={service} />
						))
					) : (
						<div></div>
					)}
				</div>
			</div>
		</>
	);
};
export default AttractionList;
