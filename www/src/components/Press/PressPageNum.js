import React from "react";

const PressPageNum = props => {
	const { pageNum, selNum } = props;
	var list = [];
	for (var i = 1; i < pageNum + 1; i++) {
		list.push(
			<li
				className={selNum === i ? "press_num on" : "press_num"}
				key={i}
				data-index={i}
				onClick={e => {
					props.onClickHandler(e.currentTarget.dataset.index);
				}}
			>
				<div className={selNum === i ? "num on" : "num"}>{i}</div>
			</li>
		);
	}
	return <>{list}</>;
};
export default PressPageNum;
