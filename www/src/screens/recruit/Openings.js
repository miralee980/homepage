import React from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";

const Openings = () => {
	const openingList = [
		{
			type: "상시",
			position: "UX/UI",
			title: "콴텍 UX 기획자 / PM 경력직 채용 공고",
			link: "",
		},
		{
			type: "상시",
			position: "마케팅 기획",
			title: "콴텍 소셜마케팅 담당자 채용공고",
			link: "",
		},
		{
			type: "마감",
			position: "소프트웨어 개발",
			title: "콴텍 iOS 앱 개발자 채용공고",
			link: "",
		},
	];
	var list = openingList.map((item, index) => {
		return (
			<div className="opening_list" key={index}>
				<div
					className={
						item.type === "마감" ? "opening_type_closed" : "opening_type"
					}
				>
					<p
						className="regular_recruit"
						style={
							item.type === "마감" ? { color: "#d6d6d6" } : { color: "#249feb" }
						}
					>
						{item.type}
					</p>
				</div>
				<div className="opening_title">
					<p
						className={
							item.type === "마감" ? "opening_sub font_gray" : "opening_sub"
						}
					>
						{item.position}
					</p>
					<p
						className={
							item.type === "마감" ? "opening_tit font_gray" : "opening_tit"
						}
					>
						{item.title}
					</p>
				</div>
				<a className="opening_btn">
					<p
						className={
							item.type === "마감"
								? "opening_btn_txt font_gray"
								: "opening_btn_txt"
						}
					>
						<span className="opening_view">VIEW</span> MORE
					</p>
				</a>
			</div>
		);
	});
	return (
		<div className="section_bar center">
			<div className="section_box">
				<SectionCenterTitle subHead="OPENINGS" title="채용공고" text={null} />
				<div className="opening_wrap">{list}</div>
			</div>
		</div>
	);
};

export default Openings;
