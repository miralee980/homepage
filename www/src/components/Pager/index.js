import React from "react";
const MONEYPOT_INDEX = 2;
const IRA_INDEX = 3;
const Q_OSK_INDEX = 4;

const Pager = (props) => {
	return (
		<div className="pager">
			<p
				className={props.pageNum === "1" ? "pager01 on" : "pager01"}
				onClick={() => {
					props.fullpageApi.moveTo(MONEYPOT_INDEX);
				}}
			>
				01
			</p>
			<p
				className={props.pageNum === "2" ? "pager02 on" : "pager02"}
				onClick={() => {
					props.fullpageApi.moveTo(IRA_INDEX);
				}}
			>
				02
			</p>
			<p
				className={props.pageNum === "3" ? "pager03 on" : "pager03"}
				onClick={() => {
					props.fullpageApi.moveTo(Q_OSK_INDEX);
				}}
			>
				03
			</p>
		</div>
	);
};
export default Pager;
