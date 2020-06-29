import React, { useState, useEffect } from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";
import PressPageNum from "components/Press/PressPageNum";

const OpeningsList = ({ selNum, totalRecruitNum, recruit }) => {
	const endNum = selNum * 5 > totalRecruitNum ? totalRecruitNum : selNum * 5;
	const list = [];
	console.log("selNum = " + selNum);
	console.log("endNum = " + endNum);
	console.log("totalRecruitNum = " + totalRecruitNum);

	for (var i = (selNum - 1) * 6; i < endNum; i++) {
		if (recruit)
			list.push(
				<div className="opening_list" key={i}>
					<div
						className={
							recruit[i].recruit_type === "마감"
								? "opening_type_closed"
								: "opening_type"
						}
					>
						<p
							className="regular_recruit"
							style={
								recruit[i].recruit_type === "마감"
									? { color: "#d6d6d6" }
									: { color: "#249feb" }
							}
						>
							{recruit ? recruit[i].recruit_type : ""}
						</p>
					</div>
					<div className="opening_title">
						<p
							className={
								recruit[i].recruit_type === "마감"
									? "opening_sub font_gray"
									: "opening_sub"
							}
						>
							{recruit ? recruit[i].part : ""}
						</p>
						<p
							className={
								recruit[i].recruit_type === "마감"
									? "opening_tit font_gray"
									: "opening_tit"
							}
						>
							{recruit ? recruit[i].title : ""}
						</p>
					</div>
					<a
						className="opening_btn"
						href={recruit ? recruit[i].link : ""}
						target="_blank"
						rel="noopener noreferrer"
					>
						<p
							className={
								recruit[i].recruit_type === "마감"
									? "opening_btn_txt font_gray"
									: "opening_btn_txt"
							}
						>
							<span className="opening_view">VIEW</span> MORE
						</p>
					</a>
				</div>
			);
	}
	return <>{list}</>;
};
const Openings = () => {
	const [recruit, setRecruitList] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalRecruitNum, setTotalRecruitNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	// const recruit = [
	// 	{
	// 		type: "상시",
	// 		position: "UX/UI",
	// 		title: "콴텍 UX 기획자 / PM 경력직 채용 공고",
	// 		link: "",
	// 	},
	// 	{
	// 		type: "상시",
	// 		position: "마케팅 기획",
	// 		title: "콴텍 소셜마케팅 담당자 채용공고",
	// 		link: "",
	// 	},
	// 	{
	// 		type: "마감",
	// 		position: "소프트웨어 개발",
	// 		title: "콴텍 iOS 앱 개발자 채용공고",
	// 		link: "",
	// 	},
	// ];

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/quantec/recruit");
			const body = await res.json();
			if (body.status === "OK") {
				setTotalRecruitNum(body.data.length);
				setRecruitList(body.data);
				setPageNum(
					parseInt(body.data.length / 5) + (body.data.length % 5 > 0 ? 1 : 0)
				);
			}
		}
		fetchData();
	}, []);

	const onClickHandler = pageNum => {
		setSelNum(Number(pageNum));
	};
	// var list = recruit
	// 	? recruit.map((item, index) => {
	// 			return (
	// 				<div className="opening_list" key={index}>
	// 					<div
	// 						className={
	// 							item.recruit_type === "마감"
	// 								? "opening_type_closed"
	// 								: "opening_type"
	// 						}
	// 					>
	// 						<p
	// 							className="regular_recruit"
	// 							style={
	// 								item.recruit_type === "마감"
	// 									? { color: "#d6d6d6" }
	// 									: { color: "#249feb" }
	// 							}
	// 						>
	// 							{item.recruit_type}
	// 						</p>
	// 					</div>
	// 					<div className="opening_title">
	// 						<p
	// 							className={
	// 								item.recruit_type === "마감"
	// 									? "opening_sub font_gray"
	// 									: "opening_sub"
	// 							}
	// 						>
	// 							{item.part}
	// 						</p>
	// 						<p
	// 							className={
	// 								item.recruit_type === "마감"
	// 									? "opening_tit font_gray"
	// 									: "opening_tit"
	// 							}
	// 						>
	// 							{item.title}
	// 						</p>
	// 					</div>
	// 					<a
	// 						className="opening_btn"
	// 						href={item.link}
	// 						target="_blank"
	// 						rel="noopener noreferrer"
	// 					>
	// 						<p
	// 							className={
	// 								item.recruit_type === "마감"
	// 									? "opening_btn_txt font_gray"
	// 									: "opening_btn_txt"
	// 							}
	// 						>
	// 							<span className="opening_view">VIEW</span> MORE
	// 						</p>
	// 					</a>
	// 				</div>
	// 			);
	// 	  })
	// 	: null;
	return (
		<div className="section_bar center">
			<div className="section_box">
				<SectionCenterTitle subHead="OPENINGS" title="채용공고" text={null} />
				<div className="opening_wrap">
					<OpeningsList
						selNum={selNum}
						totalRecruitNum={totalRecruitNum}
						recruit={recruit}
					/>
					<div className="press_number_wrap">
						<ul className="press_number_list">
							<li className="press_prev">
								<div
									onClick={() =>
										selNum > 1 ? setSelNum(selNum - 1) : setSelNum(1)
									}
								>
									<img
										src={require("assets/images/ic-m-partners-arrowleft.svg")}
										alt="prev_btn"
									/>
								</div>
							</li>
							<PressPageNum
								pageNum={pageNum}
								selNum={selNum}
								onClickHandler={onClickHandler}
							/>
							<li className="press_next">
								<div
									onClick={() =>
										selNum < pageNum
											? setSelNum(selNum + 1)
											: setSelNum(pageNum)
									}
								>
									<img
										src={require("assets/images/ic-m-partners-arrowright.svg")}
										alt="next_btn"
									/>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Openings;
