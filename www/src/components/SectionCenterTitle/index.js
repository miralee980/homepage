import React from "react";

const SectionCenterTitle = ({ subHead, title, text }) => {
	return (
		<div className="section_title">
			<p className="section_subhead">{subHead}</p>
			<p className="section_tit">{title}</p>
			{text !== null ? (
				<>
					<img
						className="line_titline"
						src={require("assets/images/line-sectionline.svg")}
						alt="line_titline"
					/>
					<p className="section_txt">{text}</p>
				</>
			) : null}
		</div>
	);
};

export default SectionCenterTitle;
