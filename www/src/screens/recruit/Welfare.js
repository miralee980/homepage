import React from "react";

const Welfare = () => {
	var list = [];
	var welfareText = [
		{
			title: "우리가 만드는 워크샵",
			text:
				"평범한 워크샵이 아닌, 평소 크루들의 버킷 리스트로 완성된 우리만의 특별한 워크샵을 가집니다.",
		},
		{
			title: "도서비, 교육비 지원",
			text: "업무 성장에 필요한 도서와 외부 교육 수강 비용을 100% 지원합니다.",
		},
		{
			title: "장기근속자 리프레쉬 휴가",
			text:
				"3년 근속 시마다 한 달간의 유급 휴가와 휴가비 100만원이 별도 지급됩니다.",
		},
		{
			title: "경조사 지원",
			text:
				"크루들의 기쁨과 슬픔을 헤아려 경조 휴가를 부여하고, 결혼 및 자녀 탄생 축하금, 유족 위로금이 지급됩니다.",
		},
		{
			title: "사내 스터디, 동호회 지원",
			text:
				"크루 간의 활발한 교류를 위한 사내 동호회 및 스터디 운영 비용을 지원합니다.",
		},
		{
			title: "MacBook Pro 지급",
			text:
				"크루가 속한 직군에 따라 생산적 업무를 위한 업무 기기와 적극적인 협업 툴을 제공합니다.",
		},
		{
			title: "스낵프리",
			text:
				"열심히 일하는 크루들을 위한 쉼터와 무제한으로 즐길 수 있는 스낵과 음료를 제공합니다.",
		},
		{
			title: "제도 개선함 운영",
			text:
				"익명의 제도개선함을 운영하여 투명하게 정보를 공유하고 공정한 사내 문화를 형성합니다.",
		},
		{
			title: "팀워크 충전데이",
			text:
				"크루들의 더욱더 단단한 팀워크를 위해 한 달에 한 번 다양한 이벤트 및 회식을 진행합니다.",
		},
	];
	list = welfareText.map((welfare, index) => {
		return (
			<li className="welfare_item" key={index}>
				<p className="welfare_num">{String(index).padStart(2, "0")}</p>
				<p className="welfare_tit">{welfare.title}</p>
				<p className="welfare_txt">{welfare.text}</p>
			</li>
		);
	});

	return <ul className="welfare_wrap">{list}</ul>;
};

export default Welfare;
