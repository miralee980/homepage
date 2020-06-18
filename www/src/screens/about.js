import React, { useState, useEffect } from "react";
import "styles/about.css";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import Location from "components/Location/Location";
import moment from "moment";

const AboutTitle = () => {
	return (
		<div className="page_title_wrap">
			<div className="page_title">
				<p className="page_subhead">Forward Thinking in Finance</p>
				<p className="page_heading">About Quantec</p>
			</div>

			<div className="about_page_img">
				<img
					src={require("assets/images/line-sectionline.svg")}
					alt="section_line"
					className="page_line"
				/>
				<p className="img_subhead">MISSION</p>
				<p className="img_title">
					쉽고 편한 자산관리, <br className="br" />
					모두의 일상으로 자리잡게 만들겠습니다.
				</p>
			</div>
		</div>
	);
};

const AboutQuantec = () => {
	return (
		<div className="section_wrap">
			<div className="section">
				<div className="about_wrap">
					<p className="section_subhead">ABOUT QUANTEC</p>
					<p className="section_tit left">콴텍이 하는 일</p>
					<div className="about_txt right">
						<p>
							개별 기업의 재무데이터를 분석한 주식 투자전략, 자산배분에 기초한
							ETF 및 펀드 투자전략을 필두로 자산관리 앱 “머니포트”와 기존 은행,
							증권사를 판매 채널로 한 금융투자 상품과 서비스를 고객에게 제공하고
							있습니다. 또한 직접 로보 어드바이저를 만들 수 있는 “아이라”를
							사용하여 PB나 일반인이 직접 자산 배분 금융 투자 상품과 서비스를
							개발하고 판매할 수 있는 마켓플레이스를 목표로 확장해 나가고
							있습니다. 자산관리 앱 머니포트, 로보어드바이저 개발 솔루션 아이라,
							그리고 무인점포 솔루션 큐오스크는 자산관리를 갈망하는 모든 사람이
							투자금액에 차별 없이 양질의 서비스를 쉽고 편리한 자산관리가 모두의
							일상으로 자리 잡게 만들고 있습니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

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

const History = () => {
	const [history, setHistory] = useState(null);

	async function fetchData() {
		const res = await fetch("/api/quantec/history");
		const body = await res.json();
		if (body.status === "OK") {
			historyData(body.data);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const historyData = history => {
		var list = [];
		var year = "";
		var monthList = [];
		history.map(data => {
			if (year !== String(moment(data.did_at).year())) {
				year = String(moment(data.did_at).year());
				monthList = [];
				monthList.push({
					month: String(moment(data.did_at).month()),
					text: data.desc,
				});
				list.push({
					year: year,
					month: monthList,
				});
			} else {
				monthList.push({
					month: String(moment(data.did_at).month()),
					text: data.desc,
				});
			}
		});
		setHistory(list);
	};

	return (
		<div className="section_wrap">
			<div className="section">
				<div className="section_title">
					<p className="section_subhead">HISTORY</p>
					<p className="section_tit left">걸어온 길</p>
					<div className="history_wrap right">
						<ul className="history_list">
							{history &&
								history.map((yearData, index) => {
									return (
										<li className="history_cont" key={index}>
											<p className="history_year">{yearData.year}</p>
											{yearData.month.map((monthData, index) => {
												return (
													<p key={index}>
														<span className="history_month">
															{monthData.month}
														</span>
														<span className="history_txt">
															{monthData.text}
														</span>
													</p>
												);
											})}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

const About = () => {
	return (
		<div>
			<Header isVideo={false} />
			<div className="about_content">
				<AboutTitle />
				<AboutQuantec />
				<CoreValue />
				<History />
				<Location />
			</div>
			<Footer />
		</div>
	);
};

export default About;
