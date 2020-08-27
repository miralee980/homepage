import React from "react";
import News from "screens/pr/News";
import SectionLeftTitle from "components/SectionLeftTitle";

const MainPress = () => {
	return (
		<div className="press">
			<SectionLeftTitle subHead="PRESS" title="언론보도" fontWhite={false} />

			<div className="section_inner">
				<News />
			</div>
		</div>
	);
};

export default MainPress;
