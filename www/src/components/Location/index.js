/*global daum */
import React, { useEffect } from "react";
import SectionLeftTitle from "components/SectionLeftTitle/index";

const Location = () => {
	const subHead = "LOCATION";
	const title = "오시는 길";
	useEffect(() => {
		var container = document.getElementById("map");
		var coords = new daum.maps.LatLng(37.5217045, 126.919041);
		var options = {
			center: new daum.maps.LatLng(37.5217045, 126.919041),
			level: 4,
			// mapTypeId: daum.maps.mapTypeId.ROADMAP,
		};

		var map = new daum.maps.Map(container, options);
		var marker = new daum.maps.Marker({ map: map, position: coords });
		var infowindow = new daum.maps.InfoWindow({
			content:
				'<div style="width:150px; border-radius:5px;text-align:center;padding:6px 0;">콴텍(주)</div>',
		});
		infowindow.open(map, marker);
	}, []);

	return (
		<div className="location dark">
			<SectionLeftTitle subHead={subHead} title={title} fontWhite={true} />

			<div className="location_wrap">
				<div className="map" id="map"></div>
			</div>
		</div>
	);
};
export default Location;
