import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PageTitle from "components/PageTitle";
import Welfare from "./Welfare";
import WelfareMobile from "./WelfareMobile";
import Crew from "./Crew";
import People from "./People";
import Process from "./Process";
import Openings from "./Openings";

const Recruit = () => {
	const subHead = "Forward Thinking in Finance";
	const heading = "Recruit";
	const pageImage = "hire_page_img";
	const imgSubHead = "CULTURE";
	const imgTitle1 = "콴텍 크루들을 위한";
	const imgTitle2 = "복지문화를 소개합니다.";
	return (
		<div>
			<Header isVideo={false} />
			<div className="hire_content">
				<PageTitle
					subHead={subHead}
					heading={heading}
					pageImage={pageImage}
					imgSubHead={imgSubHead}
					imgTitle1={imgTitle1}
					imgTitle2={imgTitle2}
				/>
				<div className="section_wrapper">
					<div className="section">
						<Welfare />
						<WelfareMobile />
					</div>
				</div>

				<Crew />

				<People />

				<div className="recruit_banner">
					<p className="banner_txt">
						우리와 함께 <span className="txt_bold">금융의 혁신</span>을
						<br />
						이끌 <span className="txt_bold">당신</span>을 기다리고 있습니다.
					</p>
				</div>

				<Process />
				<Openings />
			</div>
			<Footer />
		</div>
	);
};

export default Recruit;
