import React from "react";

const WelfareMobile = ({ welfareText }) => {
	var list = welfareText.map((welfare, index) => {
		return (
			<li className="welfare_list_sm" key={index}>
				<p className="welfare_num_sm">{String(index + 1).padStart(2, "0")}</p>
				<div className="welfare_text">
					<p className="welfare_tit_sm">{welfare.title}</p>
					<p className="welfare_txt_sm">{welfare.text}</p>
				</div>
			</li>
		);
	});

	return <ul className="welfare_wrap_sm">{list}</ul>;
};

export default WelfareMobile;
