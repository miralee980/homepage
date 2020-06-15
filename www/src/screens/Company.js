import React, { useState, useEffect } from "react";
import "styles/about.css";
import Header from "components/Header/index";
import Footer from "components/Footer/index";

const Company = () => {
	return (
		<div className="content">
			<Header />
			<div className="page_title_wrap">
				<div className="page_title">
					<p className="page_subhead">Forward Thinking in Finance</p>
					<p className="page_heading">About Quantec</p>
				</div>

				<div className="page_img">
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

			<div className="section_wrap">
				<div className="section">
					<div className="section_title">
						<p className="section_subhead">ABOUT QUANTEC</p>
						<p className="section_tit left">콴텍이 하는 일</p>
						<div className="about_txt right">
							<p>
								개별 기업의 재무데이터를 분석한 주식 투자전략, 자산배분에 기초한
								ETF 및 펀드 투자전략을 필두로 자산관리 앱 “머니포트”와 기존
								은행, 증권사를 판매 채널로 한 금융투자 상품과 서비스를 고객에게
								제공하고 있습니다. 또한 직접 로보 어드바이저를 만들 수 있는
								“아이라”를 사용하여 PB나 일반인이 직접 자산 배분 금융 투자
								상품과 서비스를 개발하고 판매할 수 있는 마켓플레이스를 목표로
								확장해 나가고 있습니다. 자산관리 앱 머니포트, 로보어드바이저
								개발 솔루션 아이라, 그리고 무인점포 솔루션 큐오스크는 자산관리를
								갈망하는 모든 사람이 투자금액에 차별 없이 양질의 서비스를 쉽고
								편리한 자산관리가 모두의 일상으로 자리 잡게 만들고 있습니다.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="section_wrap center gray">
				<div className="section">
					<div className="section_title">
						<p className="section_subhead">CORE VALUE</p>
						<p className="section_tit">핵심 가치</p>
					</div>
					<div className="value_wrap">
						<ul className="value_list">
							<li className="value_item">
								<p className="value_num">01</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									모든 정보는 <br />
									투명합니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">02</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									의사 결정은 정량적 <br className="value_br" />
									통계를 기반합니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">03</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									신속하게 판단하고 <br className="value_br" />
									실행합니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">04</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									구체적 성과를 <br />
									목표합니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">05</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									합리적인 이유를 <br className="value_br" />
									제시합니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">06</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									갈등을 두려워하지 <br className="value_br" />
									않습니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">07</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									다른 팀의 일도 <br />
									우리 팀의 일입니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">08</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									나와 다른 의견은 반대
									<br className="value_br" />
									하거나, 받아들입니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">09</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									동료를 대하는 올바른 <br className="value_br" />
									태도를 갖춥니다.
								</p>
							</li>
							<li className="value_item">
								<p className="value_num">10</p>
								<img
									src={require("assets/images/line-sub-01-value-blueline.svg")}
									alt="line"
									className="value_line"
								/>
								<p className="value_txt">
									더 단순한, 더 편리한, <br className="value_br" />더 쉬운 것을
									추구합니다.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="section_wrap">
				<div className="section">
					<div className="section_title">
						<p className="section_subhead">HISTORY</p>
						<p className="section_tit left">걸어온 길</p>
						<div className="history_wrap right">
							<ul className="history_list">
								<li className="history_cont">
									<p className="history_year">2016</p>
									<p>
										<span className="history_month">03</span>
										<span className="history_txt">'콴텍' 설립</span>
									</p>
								</li>
								<li className="history_cont">
									<p className="history_year">2017</p>
									<p>
										<span className="history_month">12</span>
										<span className="history_txt">신한금융투자 MOU</span>
									</p>
								</li>
								<li className="history_cont">
									<p className="history_year">2018</p>
									<p>
										<span className="history_month">01</span>
										<span className="history_txt">
											신한금융지주 주관 FUTURE's LAB 4기 선정
										</span>
									</p>
									<p>
										<span className="history_month">03</span>
										<span className="history_txt">
											벤처 캐피탈 Pre-A 6억원 투자 유치
										</span>
									</p>
									<p>
										<span className="history_month">07</span>
										<span className="history_txt">
											한화 드림플러스 4기 선정
										</span>
									</p>
									<p>
										<span className="history_month">08</span>
										<span className="history_txt">한화투자증권 MOU</span>
									</p>
									<p>
										<span className="history_month">12</span>
										<span className="history_txt">이데일리 MOU</span>
									</p>
								</li>
								<li className="history_cont">
									<p className="history_year">2019</p>
									<p>
										<span className="history_month">04</span>
										<span className="history_txt">
											IBK 기업은행, 신한캐피탈 외 2곳 30억원 투자 유치
										</span>
									</p>
									<p>
										<span className="history_month">09</span>
										<span className="history_txt">
											콴텍 & NH투자증권 컨소시엄 금융위원회 주관 코스콤
											RA테스트베드 참여
										</span>
									</p>
									<p>
										<span className="history_month">12</span>
										<span className="history_txt">
											투자자문사 '콴텍투자자문' 등록
										</span>
									</p>
								</li>
								<li className="history_cont">
									<p className="history_year">2020</p>
									<p>
										<span className="history_month">03</span>
										<span className="history_txt">
											로보 자산관리 앱 서비스 '머니포트' 출시
										</span>
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="section_wrap dark">
				<div className="section">
					<div className="section_title">
						<p className="section_subhead">LOCATION</p>
						<p className="section_tit font_white">오시는 길</p>
					</div>
					<div className="location_wrap">
						<div className="map"></div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
	// Content
};

export default Company;
