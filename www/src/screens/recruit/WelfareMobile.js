import React from "react";

const WelfareMobile = () => {
	var list = [];
	var welfareText = [
		{
			title: "우리가 만드는 워크샵",
			text:
				"평범한 워크샵이 아닌, 평소 크루들의 버킷 리스트로 완성된 우리만의 특별한 워크샵을 가집니다."
		},
		{
			title: "도서비, 교육비 지원",
			text: "업무 성장에 필요한 도서와 외부 교육 수강 비용을 지원합니다."
		},
		{
			title: "스낵 프리",
			text:
				"열심히 일하는 크루들을 위한 쉼터와 무제한으로 즐길 수 있는 스낵과 음료를 제공합니다."
		},
		{
			title: "넉넉한 점심시간",
			text:
				"크루들의 리프레시를 위해 90분의 여유로운 점심 휴게시간을 제공합니다."
		},
		{
			title: "경조사 지원",
			text:
				"크루들의 기쁨과 슬픔을 헤아려 경조 휴가를 부여하고, 결혼 및 자녀 탄생 축하금, 유족 위로금이 지급됩니다."
		},
		{
			title: "최고급 장비 지급",
			text:
				"크루가 속한 직군에 따라 생산적 업무를 위한 업무 기기와 적극적인 협업 툴을 제공합니다."
		},
		{
			title: "리프레시 휴가 지급",
			text:
				"성실히 일하는 크루 모두가 자유롭게 사용할 수 있는 리프레시 휴가 제도를 운영합니다."
		},
		{
			title: "제도 개선함 운영",
			text:
				"익명의 제도개선함을 운영하여 투명하게 정보를 공유하고 공정한 사내 문화를 형성합니다."
		},
		{
			title: "위드런치데이",
			text:
				"크루들의 원활한 커뮤니케이션과 더욱 더 단단한 팀워크를 위해 점심 회식을 진행합니다."
		}
	];

	list = welfareText.map((welfare, index) => {
		return (
			<li className="welfare_list_sm" key={index}>
				<p className="welfare_num_sm">{String(index + 1).padStart(2, "0")}</p>
				<div className="welfare_text">
					<p className="welfare_tit_sm">{welfare.title}</p>
					<p className="welfare_txt_sm">{welfare.text}</p>
				</div>
			</li>
		);
	});
	return <ul className="welfare_wrap_sm">{list}</ul>;
};

export default WelfareMobile;
