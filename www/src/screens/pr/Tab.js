import React from "react";

const Tab = props => {
	const { tabSel } = props;
	return (
		<div className="pr_tab">
			<div
				className={tabSel === "news" ? "pr_news on" : "pr_news"}
				onClick={() => props.onSelTabHandler("news")}
			>
				<p>NEWS</p>
			</div>
			<img
				src={require("assets/images/ic-sub-04-tabcircle.svg")}
				alt="circle"
				className="tab_circle"
			/>
			<div
				className={tabSel === "sns" ? "pr_sns on" : "pr_sns"}
				onClick={() => props.onSelTabHandler("sns")}
			>
				<p>SNS</p>
			</div>
		</div>
	);
};

export default Tab;
