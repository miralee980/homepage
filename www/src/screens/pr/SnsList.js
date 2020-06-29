import React from "react";

const SnsList = ({ selNum, totalSnsNum, sns }) => {
	const endNum = selNum * 6 > totalSnsNum ? totalSnsNum : selNum * 6;
	const list = [];

	for (var i = (selNum - 1) * 6; i < endNum; i++) {
		list.push(
			<ul className="sns_box">
				<li className="sns_img_box">
					<a
						href={sns ? sns[i].link : ""}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={require("assets/images/img-sub-04-sns-img-01@3x.jpg")}
							alt="sns_img"
						/>
					</a>
				</li>
				<li className="sns_txt_box">
					<p className="sns_name">{sns ? sns[i].sns_type : ""}</p>
					<a
						href={sns ? sns[i].link : ""}
						target="_blank"
						rel="noopener noreferrer"
						className="sns_txt_wrap"
					>
						<p className="sns_title">{sns ? sns[i].title : ""}</p>
						<div className="sns_view_box">
							<div className="sns_view_list">
								<p className="sns_view">VIEW MORE</p>
								<img
									src={require("assets/images/ic-sub-04-sns-add.svg")}
									alt="ic_plus"
									className="sns_plus"
								/>
							</div>
						</div>
					</a>
				</li>
			</ul>
		);
	}
	return <div className="sns_wrap">{list}</div>;
};

export default SnsList;
