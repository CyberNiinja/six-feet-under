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
		<div
			className="list-item"
			onClick={() => {
				service.getDetails({ placeId: item.place_id }, (result, status) => {
					setDetails(result);
				});
				setShowDetail(true);
			}}>
			<img
				className="list-item-img"
				alt="preview"
				src={item.photos[0].getUrl()}></img>
			<div className="list-item-info">
				<div className="list-item-title">{item.name}</div>
				<div className="list-item-address">{item.vicinity}</div>
				<div className="list-item-latlong">
					{item.geometry.location.lat()} {item.geometry.location.lng()}
				</div>
				<div className="list-item-categories">{item.types.join(', ')}</div>
			</div>
		</div>
	);
};

export default AttractionListItem;
