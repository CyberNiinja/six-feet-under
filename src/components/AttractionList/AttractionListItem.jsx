import { useState } from 'react';
import AttractionDetail from '../AttractionDetail/AttractionDetail';
import './AttractionListItem.css';
const AttractionListItem = ({ item, service }) => {
	const [showDetail, setShowDetail] = useState(false);
	const [details, setDetails] = useState();

	return showDetail ? (
		<AttractionDetail
			place={details}
			onClick={() => {
				setShowDetail(false);
			}}></AttractionDetail>
	) : (
		<div className="list-item">
			<img
				className="list-item-img"
				alt="preview"
				src={item.photos ? item.photos[0].getUrl() : ''}></img>
			<div className="list-item-info">
				<div className="list-item-title">{item.name}</div>
				<div className="list-item-address">{item.vicinity}</div>
				<div className="list-item-latlong">
					Lat: {item.geometry.location.lat()} | Lng:{' '}
					{item.geometry.location.lng()}
				</div>
				<div className="list-item-type-container">
					{item.types.map((x) => (
						<div className="list-item-type">{x}</div>
					))}
				</div>
			</div>
			<div
				className="open"
				onClick={() => {
					service.getDetails({ placeId: item.place_id }, (result, status) => {
						setDetails(result);
					});
					setShowDetail(true);
				}}>
				&#8594;
			</div>
		</div>
	);
};

export default AttractionListItem;
