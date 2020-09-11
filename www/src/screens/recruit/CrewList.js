import React from "react";

const CrewList = ({ selNum, totalCrewNum, crew, listNum }) => {
	const endNum =
		selNum * listNum > totalCrewNum ? totalCrewNum : selNum * listNum;
	const list = [];

	if (crew) {
		for (var i = (selNum - 1) * listNum; i < endNum; i++) {
			list.push(
				<li className="crew_item" key={i}>
					{crew[i].job_position.length !== 0 && crew[i].name.length !== 0 ? (
						<>
							<div className="profile_wrap">
								{crew[i].profile_img.length !== 0 ? (
									<img
										src={`https://dev.quantec.co.kr/api/uploads/${crew[i].profile_img}`}
										alt="crew_profile"
										className="crew_profile"
									/>
								) : (
									<img
										src={require("assets/images/img-sub-03-crew-default.svg")}
										alt="crew_profile"
										className="crew_profile"
									/>
								)}
							</div>
							<div className="crew_info">
								<p className="crew_position">{crew[i].job_position}</p>
								<p className="crew_name">{crew[i].name}</p>
							</div>
						</>
					) : null}
				</li>
			);
		}
	}

	return <>{list}</>;
};

export default CrewList;
