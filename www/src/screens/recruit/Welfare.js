import React from "react";

const Welfare = ({ welfareText }) => {
	var list = welfareText.map((welfare, index) => {
		return (
			<li className="welfare_item" key={index}>
				<p className="welfare_num">{String(index + 1).padStart(2, "0")}</p>
				<p className="welfare_tit">{welfare.title}</p>
				<p className="welfare_txt">{welfare.text}</p>
			</li>
		);
	});

	return <ul className="welfare_wrap">{list}</ul>;
};

export default Welfare;
