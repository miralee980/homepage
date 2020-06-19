import React from "react";

const SectionTitle = ({ subHead, title, fontWhite }) => {
	return (
		<div className="m_section_title">
			<p className="m_section_subhead">{subHead}</p>
			{fontWhite ? (
				<p className="m_section_tit font_white">{title}</p>
			) : (
				<p className="m_section_tit">{title}</p>
			)}
		</div>
	);
};

export default SectionTitle;
