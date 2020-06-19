import React from "react";
import SectionTitle from "components/SectionTitle/index";

const Location = () => {
	const subHead = "LOCATION";
	const title = "오시는 길";
	return (
		<div className="location dark">
			<SectionTitle subHead={subHead} title={title} fontWhite={true} />

			<div className="location_wrap">
				<div className="map"></div>
			</div>
		</div>
	);
};
export default Location;
