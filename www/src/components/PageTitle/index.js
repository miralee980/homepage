import React from "react";

const PageTitle = ({
	subHead,
	heading,
	pageImage,
	imgSubHead,
	imgTitle1,
	imgTitle2,
}) => {
	return (
		<div className="page_title_wrap">
			<div className="page_title">
				<p className="page_subhead">{subHead}</p>
				<p className="page_heading">{heading}</p>
			</div>

			<div className={pageImage}>
				<img
					src={require("assets/images/line-sectionline.svg")}
					alt="section_line"
					className="page_line"
				/>
				<p className="img_subhead">{imgSubHead}</p>
				<p className="img_title">
					{imgTitle1} <br className="br" />
					{imgTitle2}
				</p>
			</div>
		</div>
	);
};

export default PageTitle;
