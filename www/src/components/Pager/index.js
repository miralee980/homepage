import React from "react";

const Pager = props => {
	return (
		<div className="pager">
			<p
				className="pager01 on"
				onClick={() => {
					props.onMoneyPotScroll();
				}}
			>
				01
			</p>
			<p
				className="pager02"
				onClick={() => {
					props.onIraScroll();
				}}
			>
				02
			</p>
			<p
				className="pager03"
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
