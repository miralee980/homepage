import React from "react";

const CoreValue = () => {
	var list = [];
	var text = [
		{ first: "모든 정보는", second: "투명합니다." },
		{ first: "의사 결정은 정량적 ", second: "통계를 기반합니다." },
		{ first: "신속하게 판단하고 ", second: "실행합니다." },
		{ first: "구체적 성과를 ", second: "목표합니다." },
		{ first: "합리적인 이유를 ", second: "제시합니다." },
		{ first: "갈등을 두려워하지 ", second: "않습니다." },
		{ first: "다른 팀의 일도 ", second: "우리 팀의 일입니다." },
		{ first: "나와 다른 의견은 반대 ", second: "하거나, 받아들입니다." },
		{ first: "동료를 대하는 올바른 ", second: "태도를 갖춥니다." },
		{ first: "더 단순한, 더 편리한, ", second: "더 쉬운 것을 추구합니다." },
	];
	for (var i = 1; i < 11; i++) {
		list.push(
			<li className="value_item">
				<p className="value_num">{String(i).padStart(2, "0")}</p>
				<img
					src={require("assets/images/line-sub-01-value-blueline.svg")}
					alt="line"
					className="value_line"
				/>
				<p className="value_txt">
					{text[i - 1].first} <br />
					{text[i - 1].second}
				</p>
			</li>
		);
	}
	return (
		<div className="section_wrap center gray">
			<div className="section">
				<div className="section_title">
					<p className="section_subhead">CORE VALUE</p>
					<p className="section_tit">핵심 가치</p>
				</div>
				<div className="value_wrap">
					<ul className="value_list">{list}</ul>
				</div>
			</div>
		</div>
	);
};

export default CoreValue;
