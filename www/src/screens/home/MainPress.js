import React from "react";
import Press from "components/Press";
import SectionTitle from "components/SectionTitle";

const MainPress = () => {
	const subHead = "PRESS";
	const title = "언론보도";
	return (
		<div className="press">
			<SectionTitle subHead={subHead} title={title} fontWhite={false} />

			<div className="section_inner">
				<Press />
			</div>
		</div>
	);
};

export default MainPress;
