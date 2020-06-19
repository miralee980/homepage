import React from "react";
const CarouselButtonGroup = ({ next, previous }) => {
	return (
		<div className="partners_arrow">
			<img
				onClick={() => previous()}
				src={require("assets/images/ic-m-partners-arrowleft.svg")}
				alt="prev"
				className="partners_prev"
			/>
			<img
				src={require("assets/images/line-m-partners-verticalline-blue.svg")}
				alt="line"
				className="partners_line"
			/>
			<img
				onClick={() => next()}
				src={require("assets/images/ic-m-partners-arrowright.svg")}
				alt="next"
				className="partners_next"
			/>
		</div>
	);
};

export default CarouselButtonGroup;
