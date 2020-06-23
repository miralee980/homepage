import React from "react";
import SectionLeftTitle from "components/SectionLeftTitle/index";

const Location = () => {
	const subHead = "LOCATION";
	const title = "오시는 길";
	return (
		<div className="location dark">
			<SectionLeftTitle subHead={subHead} title={title} fontWhite={true} />

			<div className="location_wrap">
				<div className="map"></div>
			</div>
		</div>
	);
};
export default Location;
