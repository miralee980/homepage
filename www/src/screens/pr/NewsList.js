import React from "react";
const DEFINE_LIST_NUM = 4;

const NewsList = ({ selNum, totalNewsNum, news }) => {
	const endNum =
		selNum * DEFINE_LIST_NUM > totalNewsNum
			? totalNewsNum
			: selNum * DEFINE_LIST_NUM;
	const list = [];
	for (var i = (selNum - 1) * DEFINE_LIST_NUM; i < endNum; i++) {
		list.push(
			<div className="press_list" key={i}>
				<div className="press_info">
					<p className="press_date">{news ? news[i].pub_at : ""}</p>
					<a
						href={news ? news[i].link : ""}
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="press_tit">{news ? news[i].title : ""}</p>
					</a>
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
export default NewsList;
