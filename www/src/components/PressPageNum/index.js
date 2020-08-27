import React from "react";

const PressPageNum = (props) => {
	const { pageNum, selNum, setSelNum, onClickHandler } = props;
	var list = [];
	for (var i = 1; i < pageNum + 1; i++) {
		list.push(
			<li
				className={selNum === i ? "press_num on" : "press_num"}
				key={i}
				data-index={i}
				onClick={(e) => {
					onClickHandler(e.currentTarget.dataset.index);
				}}
			>
				<div className={selNum === i ? "num on" : "num"}>{i}</div>
			</li>
		);
	}
	return (
		<div className="press_number_wrap">
			<ul className="press_number_list">
				<li className="press_prev">
					<div
						onClick={() => (selNum > 1 ? setSelNum(selNum - 1) : setSelNum(1))}
					>
						<img
							src={require("assets/images/ic-m-partners-arrowleft.svg")}
							alt="prev_btn"
						/>
					</div>
				</li>
				{list}
				<li className="press_next">
					<div
						onClick={() =>
							selNum < pageNum ? setSelNum(selNum + 1) : setSelNum(pageNum)
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
	);
};
export default PressPageNum;
