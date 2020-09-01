import React, { useState, useEffect } from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";
import CrewList from "./CrewList";
import PressPageNum from "components/PressPageNum";

const Crew = () => {
	const [crew, setCrew] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalSnsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	const DEFINE_LIST_NUM = 6;
	var list = [];

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dev.quantec.co.kr/api/quantec/crew");
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK") {
					setTotalNewsNum(body.data.length);
					setCrew(body.data);
					setPageNum(
						parseInt(body.data.length / DEFINE_LIST_NUM) +
							(body.data.length % DEFINE_LIST_NUM > 0 ? 1 : 0)
					);
				}
			}
		}
		fetchData();
	}, []);
	if (crew) {
		list = crew.map((people, index) => {
			return (
				<li className="crew_item" key={index}>
					{people.job_position.length !== 0 && people.name.length !== 0 ? (
						<>
							<div className="profile_wrap">
								{people.profile_img.length !== 0 ? (
									<img
										src={require(`assets/images/${people.profile_img}`)}
										alt="crew_profile"
										className="crew_profile"
									/>
								) : null}
							</div>
							<div className="crew_info">
								<p className="crew_position">{people.job_position}</p>
								<p className="crew_name">{people.name}</p>
							</div>
						</>
					) : null}
				</li>
			);
		});
	}

	const onClickHandler = (pageNum) => {
		setSelNum(Number(pageNum));
	};

	return (
		<div className="section_wrapper gray">
			<div className="section center">
				<SectionCenterTitle
					subHead="QUANTEC CREW"
					title="콴텍 크루"
					text="콴텍을 빛내는 크루들을 소개합니다."
				/>

				<div className="crew_wrap">
					<ul className="crew_list">{list}</ul>
					<ul className="mobile_crew_list">
						<CrewList selNum={selNum} totalSnsNum={totalSnsNum} crew={crew} />

						<PressPageNum
							pageNum={pageNum}
							selNum={selNum}
							setSelNum={setSelNum}
							onClickHandler={onClickHandler}
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Crew;
