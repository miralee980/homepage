import React from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";

const People = () => {
	const peopleContents = [
		{
			title: "PEOPLE PERSON",
			text:
				"콴텍은 업무의 성과도 중요하지만, 함께 일하는 동료들과의 업무 환경 또한 매우 중요하게 여깁니다. 우리는 크루들과 잘 어울릴 수 있는 인재를 원합니다.",
			image: "img-sub-03-people-img-01.svg",
		},
		{
			title: "PROBLEM SOLVER",
			text:
				"크루자신과 동료가 어떠한 문제에 직면해 있는지, 문제를 해결하려면 먼저 무엇을 해야 하는지 문제의 명확한 원인을 스스로 파악하여 해결할 수 있는 인재를 원합니다.",
			image: "img-sub-03-people-img-02.svg",
		},
		{
			title: "SELF-LEADER",
			text:
				"콴텍의 크루들은 수평적 구조를 이룹니다. 모두가 동등한 관계 속에서 스스로 올바른 판단과 결단력을 내릴 수 있는 리더십과 자신감을 가진 인재를 원합니다.",
			image: "img-sub-03-people-img-03.svg",
		},
	];
	var list = peopleContents.map((contents, index) => {
		return (
			<div className="people" key={index}>
				<img
					src={require(`assets/images/${contents.image}`)}
					alt="people1"
					className="img_people"
				/>
				<p className="people_tit">{contents.title}</p>
				<p className="people_txt">{contents.text}</p>
			</div>
		);
	});
	return (
		<div className="section_wrapper">
			<div className="section center">
				<SectionCenterTitle
					subHead="PEOPLE"
					title="인재상"
					text="금융의 새로운 혁신을 이끄는 콴텍은 아래와 같은 역량을 갖춘 인재들을 원합니다."
				/>
				<div className="people_wrap">{list}</div>
			</div>
		</div>
	);
};

export default People;
