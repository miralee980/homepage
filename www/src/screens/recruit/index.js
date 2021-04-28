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

	var welfareText = [
		{
			title: "우리가 만드는 워크샵",
			text:
				"평범한 워크샵이 아닌, 평소 크루들의 버킷 리스트로 완성된 우리만의 특별한 워크샵을 가집니다."
		},
		{
			title: "여유로운 점심시간",
			text: "크루들의 리프레시를 위해 90분의 충분하고 여유로운 점심 휴식 시간을 제공합니다."
		},
		{
			title: "도서/교육비 지원",
			text:
				"크루들의 업무 성장에 필요한 도서 및 외부 교육 수강 비용을 지원합니다."
		},
		{
			title: "리프레시 휴가 지급",
			text:
				"연차와는 별도로 크루들 모두가 자유롭게 사용할 수 있는 리프레시 휴가 제도를 운영합니다."
		},
		{
			title: "경조사 지원",
			text:
				"크루들의 기쁨과 슬픔을 함께하기 위해 경조 휴가를 부여하고, 결혼 축하금, 자녀 탄생 축하금, 유족 위로금이 지급됩니다."
		},
		{
			title: "최고급 장비 지급",
			text:
				"크루가 속한 직군별로 각자 생산적 업무를 위한 업무 기기와 적극적인 협업 툴을 제공합니다."
		},
		{
			title: "생일 선물 지급",
			text:
				"평소 고마운 크루들을 위해 생일을 맞이한 크루에게는 생일 축하 선물을 지급합니다."
		},
		{
			title: "위드 런치 데이",
			text:
				"크루들의 원활한 커뮤니케이션과 더욱 단단한 팀워크를 위해 점심 회식을 진행합니다."
		},
		{
			title: "제도 개선함 운영",
			text:
				"익명의 제도개선함을 운영하여 투명하게 정보를 공유하고 공정한 사내 문화를 형성합니다."
		}
	];

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
						<Welfare welfareText={welfareText} />
						<WelfareMobile welfareText={welfareText} />
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
