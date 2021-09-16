import React from "react";
import "antd/dist/antd.css";
import "../../styles/offerPrice.css";
import { Row, Col, Select, Popover, Divider } from "antd";

const { Option } = Select;

const gutters = {};
const vgutters = {};
const colCounts = {};
const programA = [0, 4, 7];
const programB = [0, 1, 2, 5, 6, 7, 8, 9, 14];
const programC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const modules = [
	{
		qEngine: "Hyper-Personalization",
		nameEn: "Propensity Anaysis",
		nameKo: "성향 분석",
		price: 50000000,
		definition:
			"나의 투자 성향 확인하기 + 콴텍만의 심화 문진을 통한 고객 세밀 분석"
	},
	{
		qEngine: "Hyper-Personalization",
		nameEn: "Trading pattern Analysis",
		nameKo: "매매패턴 분석",
		price: 35000000,
		definition:
			"고객의 상품 거래내역 정보를 기반으로 고객의 선호 종목, 교체 주기, 평균 보유 기간, 위험 감내 수준 등을 파악"
	},
	{
		qEngine: "Hyper-Personalization",
		nameEn: "Market Sentiment Anaysis",
		nameKo: "비정형 분석",
		price: 55000000,
		definition:
			"기간별(일, 주, 월 단위) 뉴스의 감성 분석을 통해 종목별, 섹터별 현황 분석"
	},
	{
		qEngine: "Hyper-Personalization",
		nameEn: "Market Trend Analsis",
		nameKo: "시장 트렌드 분석",
		price: 55000000,
		definition: "기간별(일, 주, 월 단위) 키워드 분석을 통해 트렌드 분석"
	},
	{
		qEngine: "Asse-Selection",
		nameEn: "Stock Selection Algorithm",
		nameKo: "종목 분석 알고리즘",
		price: 70000000,
		definition:
			"관련 제반 데이터 및 재무 요소를 스코어링하고 순위를 산출 후 최적의 조합군을 선정"
	},
	{
		qEngine: "Asse-Selection",
		nameEn: "Fund Selection Algorithm",
		nameKo: "펀드 분석 알고리즘",
		price: 70000000,
		definition:
			"펀드의 평가 요소를 스코어링하고 순위를 산출 후 최적의 조합군을 선정"
	},
	{
		qEngine: "Asse-Selection",
		nameEn: "Portfolio Evaluation",
		nameKo: "포트폴리오 분석",
		price: 50000000,
		definition:
			"보유 종목 위험도 구분 및 평가와 관련 포트폴리오의 감성분석 및 Factor 분석 제공"
	},
	{
		qEngine: "Asset-Allocation",
		nameEn: "Asset Optimization",
		nameKo: "자산 배분 최적화",
		price: 45000000,
		definition:
			"AI 를 활용한 최적의 효율적 파라미터 도출 후 시장 상황을 반영한 자산 분배"
	},
	{
		qEngine: "Asset-Allocation",
		nameEn: "Asset Rebalancing",
		nameKo: "자산 리밸런싱",
		price: 55000000,
		definition:
			"거래비용, 유동성(AUM), 모멘텀, 변동성, 자산 특성과 보유기간등을 반영한 비중 최적화"
	},
	{
		qEngine: "Risk-Management",
		nameEn: "Risk-Management Signal(Q-X)",
		nameKo: "위험 관리 신호",
		price: 70000000,
		definition:
			"Q-Crisis index에서 생성된 시그널을 바탕으로 단계적 위험관리 수행"
	},
	{
		qEngine: "Risk-Management",
		nameEn: "Q-Modeling Volatility",
		nameKo: "Q-Model 변동성 분석",
		price: 50000000,
		definition:
			"AI 기반 변동성 분석 모델들의 분석에 의해 도출된 위험 관련 데이터 제공"
	},
	{
		qEngine: "Customization",
		nameEn: "Q-DashBoard Make-up",
		nameKo: "대쉬보드 모델링",
		price: 45000000,
		definition:
			"Q-Engine 분석으로 도출된 각종 지표/차트/데이터 등에 대한 그래픽 도식화"
	},
	{
		qEngine: "Customization",
		nameEn: "DB. Customization",
		nameKo: "데이터 최적화",
		price: 50000000,
		definition:
			"제휴사별 서비스 관리를 위한 데이터베이스 구성 및 데이터 편입출 관리"
	},
	{
		qEngine: "Customization",
		nameEn: "Web/App. Customization",
		nameKo: "앱 최적화",
		price: 50000000,
		definition:
			"웹 또는 모바일 환경을 위한 서비스 개발 시, Q엔진 분석 결과에 대한 화면 프레임워크 제공, 제휴사 서비스 환경에 대한 화면 기획 협업"
	},
	{
		qEngine: "Post-Management",
		nameEn: "Reporting Management",
		nameKo: "사후 보고서 관리",
		price: 50000000,
		definition:
			"Q엔진 포트폴리오에 대한 수익률, 변동성, 시장 동향, 구성 종목 정보 등을 주기적으로 생성, 제휴사의 요건에 맞게 보고서 제작이 가능하도록 데이터 표시 규격 정의"
	},
	{
		qEngine: "Post-Management",
		nameEn: "Data Server Maintenance",
		nameKo: "데이터 서버 관리",
		price: 70000000,
		definition: "제휴사 서비스 정보가 저장된 데이터 서버에 대한 유지보수"
	}
];

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
	gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
	vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
	colCounts[i] = value;
});

class OfferPrice extends React.Component {
	state = {
		gutterKey: 1,
		vgutterKey: 1,
		colCountKey: 2,
		price: 0,
		year: 1,
		program: "",
		selModules: []
	};

	handleYearChange = (years) => {
		let price = 0;
		let year = Number(years);
		console.log(`selected ${year}`);
		let percent = year === 2 ? 0.9 : year === 3 ? 0.8 : 1;
		let selModules = this.state.selModules;

		selModules.forEach((value) => {
			if (modules[value].qEngine === "Customization") {
				price += modules[value].price;
			} else {
				price += modules[value].price * years * percent;
			}
		});
		this.setState({ year, price });
	};

	selProgram = (program) => {
		let price = 0;
		let percent = this.state.year === 2 ? 0.9 : this.state.year === 3 ? 0.8 : 1;
		let selModules = this.state.selModules;
		if (program === this.state.program) {
			this.setState({ price: 0, program: "" });
			this.setState({ selModules: [] });
		} else {
			if (program === "A") {
				selModules = programA.slice();
			} else if (program === "B") {
				selModules = programB.slice();
			} else if (program === "C") {
				selModules = programC.slice();
			}

			selModules.forEach((value) => {
				if (modules[value].qEngine === "Customization") {
					price += modules[value].price;
				} else {
					price += modules[value].price * this.state.year * percent;
				}
			});
			this.setState({ price, program, selModules });
		}
	};

	seleteModule = (selected) => {
		let price = this.state.price;
		let percent = this.state.year === 2 ? 0.9 : this.state.year === 3 ? 0.8 : 1;
		let selModules = this.state.selModules;
		console.log(selModules);
		console.log(selected);
		let value = selModules.findIndex((element) => element === selected);
		if (value >= 0) {
			if (modules[selected].qEngine === "Customization") {
				price -= modules[selected].price;
			} else {
				price -= modules[selected].price * this.state.year * percent;
			}

			selModules.splice(value, 1);
			console.log(selModules);
		} else {
			if (modules[selected].qEngine === "Customization") {
				price += modules[selected].price;
			} else {
				price += modules[selected].price * this.state.year * percent;
			}

			selModules.push(selected);
			console.log(selModules);
		}
		console.log(selModules);
		this.setState({ selModules, price });
	};

	render() {
		const { gutterKey, vgutterKey, colCountKey, price } = this.state;
		const cols = [];
		const colCount = colCounts[colCountKey];

		for (let i = 0; i < 16; i++) {
			cols.push(
				<Popover
					key={i.toString()}
					content={<div>{modules[i].definition}</div>}
					title={modules[i].nameKo}
				>
					<Col
						span={24 / colCount}
						onClick={() => this.seleteModule(Number(i))}
					>
						<div
							className={
								this.state.selModules.includes(i)
									? modules[i].qEngine + " module"
									: modules[i].qEngine + " module dim"
							}
						>
							<p className="font module-name">{modules[i].nameEn}</p>
							<p className="font module-name">{modules[i].nameKo}</p>
						</div>
					</Col>
				</Popover>
			);
		}
		return (
			<>
				<div className="QEnginePriceApp">
					<div className="font title">
						Q-Engine Price Offer by Module & Period
					</div>

					<div className="section1">
						<div className="font price">
							<span style={{ paddingRight: "10px" }}>Price : </span>
							<span>{price.toLocaleString()}원</span>
						</div>
						<div className="font year">
							<span>계약기간 : </span>
							<Select
								defaultValue="1"
								className="selector"
								onChange={this.handleYearChange}
							>
								<Option value="1">1년</Option>
								<Option value="2">2년</Option>
								<Option value="3">3년</Option>
							</Select>
						</div>
					</div>
					<Row gutter={[gutters[3], vgutters[4]]} className="section2">
						<Popover
							content={
								<div>
									고객 성향에 따른 맞춤형 전략 추천 및 자산 배분 서비스 제공
								</div>
							}
							title="Program A"
						>
							<Col span={24 / 3} onClick={() => this.selProgram("A")}>
								<div
									className={
										this.state.program === "A" ? "program" : "program dim"
									}
								>
									<p className="font program-name">Program A</p>
									<p className="font program-type">Standard Type</p>
								</div>
							</Col>
						</Popover>
						<Popover
							content={
								<div>
									초개인화 통합솔루션 제공 포트폴리오 평가와 그에 따른 펀드 전략
									추천 자산최적화와 자산리밸런싱 리스크 관리 시그널(Q-X) 및
									사후보고서 제공
								</div>
							}
							title="Program B"
						>
							<Col span={24 / 3} onClick={() => this.selProgram("B")}>
								<div
									className={
										this.state.program === "B" ? "program" : "program dim"
									}
								>
									<p className="font program-name">Program B</p>
									<p className="font program-type">Intermediate Type</p>
								</div>
							</Col>
						</Popover>
						<Popover
							content={
								<div>
									고객 보유자산 및 My Data 자료 분석을 통한 초개인화
									주식/펀드/ETF를 포함한 자산 셀렉션과 배분 동시 구현 시장 이상
									현상 감지 및 리스크 매니지먼트 시그널 제공 고객 데이터 및 앱
									최적화 기능 제공 사후관리 기능 제공
								</div>
							}
							title="Program C"
						>
							<Col span={24 / 3} onClick={() => this.selProgram("C")}>
								<div
									className={
										this.state.program === "C" ? "program" : "program dim"
									}
								>
									<p className="font program-name">Program C</p>
									<p className="font program-type">Advanced Type</p>
								</div>
							</Col>
						</Popover>
					</Row>
					<Divider />
					<div className="module-index-section">
						<div className="module-index-group">
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#d6e7ff", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">
									Hyper Personalization
								</span>
							</div>
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#d7f4c9", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">Asset Selection</span>
							</div>
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#d1beff", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">Asset Allocation</span>
							</div>
						</div>
						<div className="module-index-group">
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#ffd4b4", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">Risk Management</span>
							</div>
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#c8f0f0", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">Customization</span>
							</div>
							<div className="module-index">
								<div
									className="Oval"
									style={{ backgroundColor: "#ffcef3", marginRight: "10px" }}
								></div>
								<span className="font module-index-text">Post Management</span>
							</div>
						</div>
					</div>
					<Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
					{this.state.program === "A" ? (
						<div>
							<Divider />
							<div className="font program-description">
								Program A는? 고객 분석과 자산분석/최적화를 하기 위한 필수 기능을
								포함했습니다. 기관이 보유하고 있는 내부 고객 Data만으로도 구현
								가능합니다.
							</div>
						</div>
					) : this.state.program === "B" ? (
						<div>
							<Divider />
							<div className="font program-description">
								Prgram B는? 가장 범용적으로 사용되는 서비스입니다 고객 정밀
								분석이 가능하고, 그 결과를 활용한 맞춤형 포트폴리오 제안이
								가능합니다. 시장 이상 현상 감시 시, 리스크 관리 시그널 발송이
								자동 송출됩니다. 내부 양식에 맞춘 고객용 사후 보고서가
								제공됩니다.
							</div>
						</div>
					) : this.state.program === "C" ? (
						<div>
							<Divider />
							<div className="font program-description">
								Prgram C는? 콴텍이 제공하는 최적의 솔루션이 모두 적용되는
								서비스입니다. Mydata 서비스를 통한 고객의 data 활용 최적화에
								가장 적합한 서비스가 제공됩니다 시장 이상 현상 감시 시, 리스크
								관리 시그널 발송이 자동 송출됩니다. 내부 양식에 맞춘 고객용 사후
								보고서가 제공되며, 내부 앱 또는 웹 화면 구성 시, 최적화 기능이
								제공됩니다 금융 파트너로서 솔루션과 연관된, 콴텍의 모든 Know-how
								가 제공됩니다.
							</div>
						</div>
					) : null}
				</div>
			</>
		);
	}
}
export default OfferPrice;
