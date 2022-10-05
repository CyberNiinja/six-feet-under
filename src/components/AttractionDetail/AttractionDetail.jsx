import './AttractionDetail.css';
import { useEffect, useState, useRef } from 'react';
import { findBestMatch } from 'string-similarity';
const AttractionDetail = ({ place, onClick }) => {
	const ref = useRef(null);
	const [map, setMap] = useState();
	const [description, setDescription] = useState();

	useEffect(() => {
		if (!description && place) {
			console.log(place.geometry.location.lat());
			fetch(
				`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=true&explaintext=true&ggsprop=dist&generator=geosearch&ggscoord=${place.geometry.location.lat()}|${place.geometry.location.lng()}`
			)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					const obj = result.query.pages;
					const ob = Object.keys(obj);
					const titles = ob.map((x) => obj[x]['title']);
					const match = findBestMatch(place.name, titles);
					console.log(match.ratings[match.bestMatchIndex]);
					setDescription(obj[ob[match.bestMatchIndex]]['extract']);
				});
		}
	}, [description, place]);

	// set the api service and the map reference on first render
	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center: place.geometry.location,
					zoom: 18,
				})
			);
		}
	}, [ref, map, place]);
	return !place ? (
		<div>isLoading</div>
	) : (
		<div className="attraction-detail">
			<div className="attraction-detail-topbar">
				<button className="attraction-detail-back" onClick={onClick}>
					&#8592;
				</button>
				<div className="spacer"></div>
			</div>

			{/* IMAGE VIEW */}
			<div className="attraction-detail-image-container">
				{/* iterate over all the photos in data and display them */}
				{place.photos?.map((x) => (
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

			{/* HEADER */}
			<div className="attraction-detail-header">
				<div className="attraction-detail-title-container">
					<div className="attraction-detail-title">
						<div className="attraction-detail-name">{place.name ?? ''}</div>
						<div className="attraction-detail-location">
							{place.address_components?.length > 5
								? (place.address_components[2].long_name,
								  place.address_components[4].long_name)
								: ' '}
						</div>
					</div>
					<div className="attraction-detail-type-container">
						{place.types.map((x) => (
							<div className="attraction-detail-type">{x}</div>
						))}
					</div>
				</div>
				<div className="attraction-detail-header-divider"></div>
				<div className="attraction-detail-rating">{place.rating} &#11088;</div>
			</div>

			{/* BODY */}
			<div className="attraction-detail-body">
				<div className="attraction-detail-map" ref={ref}></div>
				<div className="attraction-detail-info">
					<div className="attraction-detail-description">
						<b>Description: </b>
						<p>{description}</p>
					</div>
					<div className="attraction-detail-address">
						<b>Address:</b> {place.formatted_address}
					</div>
				</div>

				<div className="attraction-detail-reviews"></div>
			</div>
		</div>
	);
};
export default AttractionDetail;
