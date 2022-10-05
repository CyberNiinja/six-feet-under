import { useState, useEffect, useRef } from 'react';
import AttractionListItem from './AttractionListItem';
const AttractionList = () => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [service, setService] = useState();
	const [items, setItems] = useState();

	// When the map variable is set add listeners for clicks etc.
	useEffect(() => {
		if (map) {
			['click', 'idle'].forEach((eventName) =>
				window.google.maps.event.clearListeners(map, eventName)
			);
			map.addListener('click', () => {});
			map.addListener('idle', () => (map) => {});
		}
	}, [map]);

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
		if (service && !items) {
			const request = {
				location: { lat: 56.1612, lng: 15.5869 },
				radius: 4000,
				type: ['tourist_attraction'],
			};
			service.nearbySearch(request, (result, status) => {
				setItems(result);
				console.log(result);
			});
		}
	}, [items, service]);

	return (
		<div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
			<div ref={ref}></div>
			{items ? (
				items.map((x) => (
					<AttractionListItem item={x} key={x.place_id} service={service} />
				))
			) : (
				<div>is loading</div>
			)}
		</div>
	);
};
export default AttractionList;
