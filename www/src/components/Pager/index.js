import React from "react";
const MONEYPOT_INDEX = 1;
const IRA_INDEX = 2;
const Q_OSK_INDEX = 3;

const Pager = props => {
	return (
		<div className="pager">
			<p
				className={props.pageNum === "pager01" ? "pager01 on" : "pager01"}
				onClick={() => {
					props.setCurrentPage(MONEYPOT_INDEX);
				}}
			>
				01
			</p>
			<p
				className={props.pageNum === "pager02" ? "pager02 on" : "pager02"}
				onClick={() => {
					props.setCurrentPage(IRA_INDEX);
				}}
			>
				02
			</p>
			<p
				className={props.pageNum === "pager03" ? "pager03 on" : "pager03"}
				onClick={() => {
					props.setCurrentPage(Q_OSK_INDEX);
				}}
			>
				03
			</p>
		</div>
	);
};
export default Pager;
