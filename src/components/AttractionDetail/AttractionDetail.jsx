import './AttractionDetail.css';
import { useEffect, useState, useRef } from 'react';
const AttractionDetail = () => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [service, setService] = useState();
	const [data, setData] = useState();
	const onClick = () => {};
	const onIdle = () => {};

	useEffect(() => {
		if (map) {
			['click', 'idle'].forEach((eventName) =>
				window.google.maps.event.clearListeners(map, eventName)
			);
			if (onClick) {
				map.addListener('click', onClick);
			}

			if (onIdle) {
				map.addListener('idle', () => onIdle(map));
			}
		}
	}, [map, onClick, onIdle]);

	useEffect(() => {
		if (ref.current && !map) {
			setMap(new window.google.maps.Map(ref.current, {}));
		}
		if (ref.current && map && !service) {
			setService(new window.google.maps.places.PlacesService(map));
		}
	}, [ref, map, service]);

	useEffect(() => {
		if (service && !data) {
			const request = { placeId: 'ChIJB6CcRP5sVkYRenOflhTdY_Q' };
			service.getDetails(request, (result, status) => {
				setData(result);
				map.setCenter(result.geometry.location);
				map.setZoom(18);
				console.log(result);
			});
		}
	}, [data, service]);

	return (
		<div className="attraction-detail-container">
			<div className="attraction-detail-image-container">
				{data?.photos.map((x) => (
					<div className="attraction-detail-image">
						<a
							className="responsive"
							href={
								x.html_attributions[0].match(
									'(([\\w-]+:\\/\\/?|www[.])[^\\s()<>]+(?:\\([\\w\\d]+\\)|([^[:punct:]\\s]|\\/|\\d)))'
								)[0]
							}>
							<img src={x.getUrl()} alt="text" className="responsive" />
						</a>
					</div>
				))}
			</div>
			<div className="attraction-detail-header">
				<div className="attraction-detail-title-container">
					<div className="attraction-detail-title">
						<div className="attraction-detail-name">{data?.name ?? ''}</div>
						<div className="attraction-detail-location">
							{data?.address_components[2].long_name},{' '}
							{data?.address_components[4].long_name}
						</div>
					</div>
					<div className="attraction-detail-type-container">
						{data?.types.map((x) => (
							<div className="attraction-detail-type">{x}</div>
						))}
					</div>
				</div>
				<div className="attraction-detail-header-divider"></div>
				<div className="attraction-detail-rating">{data?.rating} &#11088;</div>
			</div>

			<div className="attraction-detail-body">
				<div className="attraction-detail-map" ref={ref}></div>
				<div className="attraction-detail-info">
					<div className="attraction-detail-description">
						<b>Description: </b>
					</div>
					<div className="attraction-detail-address">
						<b>Address:</b> {data?.formatted_address ?? ''}
					</div>
				</div>

				<div className="attraction-detail-reviews"></div>
			</div>
		</div>
	);
};
export default AttractionDetail;
