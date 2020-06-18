import React from "react";

const PressList = ({ selNum, totalNewsNum, news }) => {
	const endNum = selNum * 5 > totalNewsNum ? totalNewsNum : selNum * 5;
	const list = [];
	for (var i = (selNum - 1) * 5; i < endNum; i++) {
		list.push(
			<div className="press_list">
				<div className="press_info">
					<p className="press_date">{news ? news[i].pub_at : ""}</p>
					<p className="press_tit">{news ? news[i].title : ""}</p>
				</div>

				<a
					className="press_btn"
					href={news ? news[i].link : ""}
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="press_btn_txt">
						<span className="press_view">VIEW</span> MORE
					</p>
				</a>
			</div>
		);
	}
	return <div>{list}</div>;
};
export default PressList;
