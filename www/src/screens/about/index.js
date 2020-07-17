import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import Location from "components/Location";
import PageTitle from "components/PageTitle";
import AboutQuantec from "./AboutQuantec";
import CoreValue from "./CoreValue";
import History from "./History";

const About = () => {
	const subHead = "Forward Thinking in Finance";
	const heading = "About Quantec";
	const pageImage = "about_page_img";
	const imgSubHead = "MISSION";
	const imgTitle1 = "쉽고 편한 자산관리, ";
	const imgTitle2 = "모두의 일상으로 자리잡게 만들겠습니다.";

	return (
		<div>
			<Header isVideo={false} />
			<div className="about_content">
				<PageTitle
					subHead={subHead}
					heading={heading}
					pageImage={pageImage}
					imgSubHead={imgSubHead}
					imgTitle1={imgTitle1}
					imgTitle2={imgTitle2}
				/>
				<AboutQuantec />
				<CoreValue />
				<History />
			</div>
			<Location />
			<Footer />
		</div>
	);
};

export default About;
