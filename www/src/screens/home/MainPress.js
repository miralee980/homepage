import React from "react";
import Press from "components/Press";
import SectionLeftTitle from "components/SectionLeftTitle";

const MainPress = () => {
	return (
		<div className="press">
			<SectionLeftTitle subHead="PRESS" title="언론보도" fontWhite={false} />

			<div className="section_inner">
				<Press />
			</div>
		</div>
	);
};

export default MainPress;
