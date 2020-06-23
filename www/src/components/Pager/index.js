import React from "react";

const Pager = props => {
	return (
		<div className="pager">
			<p
				className={props.pageNum === "pager01" ? "pager01 on" : "pager01"}
				onClick={() => {
					props.onMoneyPotScroll();
				}}
			>
				01
			</p>
			<p
				className={props.pageNum === "pager02" ? "pager02 on" : "pager02"}
				onClick={() => {
					props.onIraScroll();
				}}
			>
				02
			</p>
			<p
				className={props.pageNum === "pager03" ? "pager03 on" : "pager03"}
				onClick={() => {
					props.onQoskScroll();
				}}
			>
				03
			</p>
		</div>
	);
};
export default Pager;
