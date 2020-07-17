import React, { useState, useEffect } from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";
import PressPageNum from "components/Press/PressPageNum";
import moment from "moment";

const OpeningsList = ({ selNum, totalRecruitNum, recruit }) => {
	const endNum = selNum * 5 > totalRecruitNum ? totalRecruitNum : selNum * 5;
	const list = [];

	if (recruit) {
		for (var i = (selNum - 1) * 6; i < endNum; i++) {
			if (recruit[i].recruit_type === "채용기간") {
				var start = moment(recruit[i].start_at, "YYYY-MM-DD");
				var end = moment(recruit[i].end_at, "YYYY-MM-DD");
			}
			list.push(
				<div className="opening_list" key={i}>
					<div
						className={
							recruit[i].recruit_type === "마감"
								? "opening_type_closed"
								: recruit[i].recruit_type === "상시"
								? "opening_type_always"
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
							{recruit[i].recruit_type === "마감" ||
							recruit[i].recruit_type === "상시"
								? recruit[i].recruit_type
								: `D-${moment.duration(end.diff(start)).asDays()}`}
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
							{recruit[i].part}
						</p>
						<p
							className={
								recruit[i].recruit_type === "마감"
									? "opening_tit font_gray"
									: "opening_tit"
							}
						>
							{recruit[i].title}
						</p>
					</div>
					<a
						className="opening_btn"
						href={recruit[i].link}
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
	}
	return <>{list}</>;
};
const Openings = () => {
	const [recruit, setRecruitList] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalRecruitNum, setTotalRecruitNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dev.quantec.co.kr/api/quantec/recruit");
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK") {
					setTotalRecruitNum(body.data.length);
					setRecruitList(body.data);
					setPageNum(
						parseInt(body.data.length / 5) + (body.data.length % 5 > 0 ? 1 : 0)
					);
				}
			}
		}
		fetchData();
	}, []);

	const onClickHandler = (pageNum) => {
		setSelNum(Number(pageNum));
	};

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
