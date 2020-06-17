import React, { useState, useEffect } from "react";
import "styles/main.css";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import ButtonGroup from "antd/lib/button/button-group";

const useMountEffect = fun => useEffect(fun, []);

const MainScreen = props => {
	useMountEffect(() => {
		props.onVideoHeight(window.innerHeight || document.body.clientHeight);
	});
	useMountEffect(() => window.addEventListener("scroll", onScroll));

	const onScroll = e => {
		const scrollTop =
			e.srcElement.body.scrollTop || document.documentElement.scrollTop;
		props.checkScroll(
			scrollTop,
			window.innerHeight || document.body.clientHeight
		);
	};
	return (
		<div className="visual_wrap">
			<div className="visual_inner">
				<div className="visual_circle">
					<p className="circle_tit">
						당신의 일상에
						<br />
						투자를 더하다
					</p>
					<p className="circle_txt">
						쉽고 편리한 자산관리, 모두의 일상으로 자리잡을 수 있게
					</p>
				</div>
				<div className="visual_circle_img">
					<img
						src={require("assets/images/img-m-circle.svg")}
						alt="visual_circle"
					/>
				</div>

				<div
					className="scroll_down"
					onClick={() => {
						props.onDownScroll();
					}}
				>
					<img
						src={require("assets/images/ic-m-arrowdown-blue.svg")}
						alt="scroll_down"
						className="ic_scroll_down"
					/>
				</div>
			</div>

			<div className="video_wrap">
				<video className="video" autoPlay loop muted>
					<source src={require("assets/video/main.MP4")} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

const MoneyPot = props => {
	useMountEffect(() => {
		props.onMoneypotHeight(window.innerHeight || document.body.clientHeight);
	});
	return (
		<div className="m_section1">
			<div className="mp_inner">
				<div className="mp_wrap">
					<p className="mp_summary">MOBILE APP SERVICE</p>
					<p className="mp_tit">MONEYPOT</p>
					<p className="mp_txt_b">만원으로 시작하는 나의 첫 해외주식 투자</p>
					<p className="mp_txt">
						국내 자산보다 가격 높은 해외주식, 머니포트에서는 해외주식의 가격을
						소수점 형태로 나누어 단돈 만원으로도 시작할 수 있습니다. 또 복잡하고
						어려웠던 해외주식 주문을 단 몇 번의 클릭만으로 간편하게 주문할 수
						있습니다.
					</p>
				</div>

				<div className="mp_btn">
					<p className="mp_btn_txt">MORE</p>
					<img
						src={require("assets/images/ic-m-arrowright-blue.svg")}
						alt="more"
						className="mp_more"
					/>
				</div>
			</div>

			<div className="pager">
				<p className="pager01 on">01</p>
				<p
					className="pager02"
					onClick={() => {
						props.onIraScroll();
					}}
				>
					02
				</p>
				<p
					className="pager03"
					onClick={() => {
						props.onQoskScroll();
					}}
				>
					03
				</p>
			</div>
		</div>
	);
};

const Ira = props => {
	useMountEffect(() => {
		props.onIraHeight(window.innerHeight || document.body.clientHeight);
	});
	return (
		<div className="m_section2">
			<div className="ira_inner">
				<div className="ira_wrap">
					<p className="ira_summary">ROBO ADVISOR SERVICE</p>
					<p className="ira_tit">IRA</p>
					<p className="ira_txt_b">
						당신의 눈높이에 맞춰 선보이는 누구나 만드는 로보어드바이저
					</p>
					<p className="ira_txt">
						아이라를 통해서라면 누구나 쉽게 맞춤 포트폴리오를 설계할 수
						있습니다. 콴텍의 모든 기술력을 담은 알고리즘을 기반으로 한 자동화
						관리 뿐만 아니라, 자산관리 플랫폼에 내가 만든 상품을 공유하고 판매할
						수 있습니다.
					</p>
				</div>

				{/* <div className="ira_btn">
					<p className="ira_btn_txt">MORE</p>
					<img
						src={require("assets/images/ic-m-arrowright-blue.svg")}
						alt="more"
						className="ira_more"
					/>
				</div> */}
			</div>

			<div className="pager">
				<p
					className="pager01"
					onClick={() => {
						props.onMoneyPotScroll();
					}}
				>
					01
				</p>
				<p className="pager02 on">02</p>
				<p
					className="pager03"
					onClick={() => {
						props.onQoskScroll();
					}}
				>
					03
				</p>
			</div>
		</div>
	);
};

const Qosk = props => {
	useMountEffect(() => {
		props.onQoskHeight(window.innerHeight || document.body.clientHeight);
	});
	return (
		<div className="m_section3">
			<div className="qosk_inner">
				<div className="qosk_wrap">
					<div className="service_tit_wrap">
						<p className="q_q">Q</p>
						<img
							src={require("assets/images/ic-m-service-qosk-circle.svg")}
							alt="blue_dot"
							className="qosk_circle"
						/>
						<p className="q_txt">OSK</p>
					</div>
					<div className="qosk_summary">KIOSK SERVICE</div>

					<p className="qosk_txt_b">
						로보어드바이저 최초 자산관리 무인점포 솔루션
					</p>
					<p className="qosk_txt right">
						금융 지점, 공항, 전철 역사 등 유동인구가 밀집된 지역에 <br />
						공급되어 비대면 계좌 개설부터 자산 배분 포트폴리오 구성,
						<br />
						증권사 직원까지 연결 가능한 최초 자산관리 무인점포 솔루션
					</p>

					{/* <div className="qosk_btn">
						<p className="q_btn_txt">MORE</p>
						<img
							src={require("assets/images/ic-m-arrowright-white.svg")}
							alt="more"
							className="q_more"
						/>
					</div> */}
				</div>
			</div>

			<div className="pager">
				<p
					className="pager01"
					onClick={() => {
						props.onMoneyPotScroll();
					}}
				>
					01
				</p>
				<p
					className="pager02"
					onClick={() => {
						props.onIraScroll();
					}}
				>
					02
				</p>
				<p className="pager03 on">03</p>
			</div>
		</div>
	);
};

const ButtonGroup = ({ next, previous, goToSlide }) => {
	return (
		// <div className="carousel-button-group">
		// 	<button onClick={() => previous()}> prev </button>
		// 	<button onClick={() => next()}>next </button>
		// </div>
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

const Partners = () => {
	const partnersImgList = [
		"img-m-partners-001.svg",
		"img-m-partners-002.svg",
		"img-m-partners-003@3x.jpg",
		"img-m-partners-004.svg",
		"img-m-partners-005.svg",
		"img-m-partners-006@3x.jpg",
		"img-m-partners-001.svg",
		"img-m-partners-007@3x.jpg",
	];
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 3000, min: 991 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 991, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 576 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="partners">
			<div className="m_section_title">
				<p className="m_section_subhead">PARTNERS</p>
				<p className="m_section_tit">파트너</p>
			</div>

			<div className="partners_wrap">
				<Carousel
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<ButtonGroup />}
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
				>
					{partnersImgList.map((img, i) => {
						return (
							<div className="partners_item" key={i}>
								<img src={require(`assets/images/${img}`)} alt="partners" />
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

const PressList = props => {
	const { selNum, totalNewsNum, news } = props;
	// console.log("selNum : " + props.selNum);
	// console.log("totalNewsNum : " + totalNewsNum);
	// console.log("news : " + news);
	const endNum = selNum * 5 > totalNewsNum ? totalNewsNum : selNum * 5;
	console.log("endNum : " + endNum);
	const list = [];
	for (var i = (selNum - 1) * 5; i < endNum; i++) {
		list.push(
			<div className="press_list">
				<div className="press_info">
					<p className="press_date">{news ? news[i].pub_at : ""}</p>
					<p className="press_tit">{news ? news[i].title : ""}</p>
				</div>

				<a
					className="press_btn"
					href={news ? news[i].link : ""}
					target="_blank"
					rel="noopener noreferrer"
				>
					<p className="press_btn_txt">
						<span className="press_view">VIEW</span> MORE
					</p>
				</a>
			</div>
		);
	}
	return <div>{list}</div>;
};

const PressPageNum = props => {
	const { pageNum } = props;
	const list = [];
	for (var i = 1; i < pageNum + 1; i++) {
		list.push(
			<li
				className="press_num on"
				key={i}
				data-index={i}
				onClick={e => {
					console.log(e.currentTarget.dataset.index);
					props.onClickHandler(e.currentTarget.dataset.index);
				}}
			>
				<div className="num on">{i}</div>
			</li>
		);
	}
	return <div>{list}</div>;
};

const Press = () => {
	const [news, setnews] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalNewsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	async function fetchData() {
		const res = await fetch("/api/quantec/news");
		const body = await res.json();
		if (body.status === "OK") {
			setTotalNewsNum(body.data.length);
			setnews(body.data);
			setPageNum(parseInt(body.data.length / 5));
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const onClickHandler = pageNum => {
		console.log(pageNum);
		setSelNum(pageNum);
	};
	return (
		<div className="press">
			<div className="m_section_title">
				<p className="m_section_subhead">PRESS</p>
				<p className="m_section_tit">언론보도</p>
			</div>

			<div className="section_inner">
				<div className="pr_press_wrap">
					<PressList selNum={selNum} totalNewsNum={totalNewsNum} news={news} />

					{/* <div className="press_list">
						<div className="press_info">
							<p className="press_date">2020.02.12</p>
							<p className="press_tit">
								콴텍, 금융위 주관 'RA테스트베드'서 수익률 '고공행진'...알고리즘
								등록도 역대 최다 등록
							</p>
						</div>
						<div className="press_btn">
							<p className="press_btn_txt">
								<span className="press_view">VIEW</span> MORE
							</p>
						</div>
					</div>

					<div className="press_list">
						<div className="press_info">
							<p className="press_date">2020.02.12</p>
							<p className="press_tit">
								콴텍, 금융 제도권 뛰어들어... '콴텍투자자문' 정식 등록
							</p>
						</div>
						<div className="press_btn">
							<p className="press_btn_txt">
								<span className="press_view">VIEW</span> MORE
							</p>
						</div>
					</div>

					<div className="press_list">
						<div className="press_info">
							<p className="press_date">2020.02.12</p>
							<p className="press_tit">
								이상근 콴텍 대표 "고객별 맞춤형 자산관리 대중화 앞장설 것"
							</p>
						</div>
						<div className="press_btn">
							<p className="press_btn_txt">
								<span className="press_view">VIEW </span> MORE
							</p>
						</div>
					</div>

					<div className="press_list">
						<div className="press_info">
							<p className="press_date">2020.02.12</p>
							<p className="press_tit">
								콴텍, 자산배분시스템 갖춘 키오스크 서비스 출시
							</p>
						</div>
						<div className="press_btn">
							<p className="press_btn_txt">
								<span className="press_view">VIEW</span> MORE
							</p>
						</div>
					</div> */}

					<div className="press_number_wrap">
						<ul className="press_number_list">
							<li className="press_prev">
								<a href="#">
									<img
										src={require("assets/images/ic-m-partners-arrowleft.svg")}
										alt="prev_btn"
									/>
								</a>
							</li>

							<PressPageNum pageNum={pageNum} onClickHandler={onClickHandler} />
							{/* <li className="press_num on" onClick={() => setSelNum(1)}>
								<div className="num on">1</div>
							</li>
							<li className="press_num" onClick={() => setSelNum(2)}>
								<div className="num">2</div>
							</li>
							<li className="press_num" onClick={() => setSelNum(3)}>
								<div className="num">3</div>
							</li>
							<li className="press_num" onClick={() => setSelNum(4)}>
								<div className="num">4</div>
							</li>
							<li className="press_num" onClick={() => setSelNum(5)}>
								<div className="num">5</div>
							</li> */}
							{/* <li className="press_num">
								<a href="#" className="num">
									2
								</a>
							</li>
							<li className="press_num">
								<a href="#" className="num">
									3
								</a>
							</li>
							<li className="press_num">
								<a href="#" className="num">
									4
								</a>
							</li>
							<li className="press_num">
								<a href="#" className="num">
									5
								</a>
							</li> */}
							<li className="press_next">
								<a href="#">
									<img
										src={require("assets/images/ic-m-partners-arrowright.svg")}
										alt="next_btn"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

const Location = () => {
	return (
		<div className="location dark">
			<div className="m_section_title">
				<p className="m_section_subhead">LOCATION</p>
				<p className="m_section_tit font_white">오시는 길</p>
			</div>

			<div className="location_wrap">
				<div className="map"></div>
			</div>
		</div>
	);
};

const Main = () => {
	const [isVideo, checkVideo] = useState(true);
	const [videoHeight, setVideoHeight] = useState(0);
	const [moneypotHeight, setMoneypotHeight] = useState(0);
	const [iraHeight, setIraHeight] = useState(0);
	const [qoskHeight, setQoskHeight] = useState(0);

	const onVideoHeight = height => {
		console.log("videoHeight : " + height);
		setVideoHeight(height);
	};
	const onMoneypotHeight = height => {
		console.log("moneypotHeight : " + height);
		setMoneypotHeight(height);
	};
	const onIraHeight = height => {
		console.log("iraHeight : " + height);
		setIraHeight(height);
	};
	const onQoskHeight = height => {
		console.log("qoskHeight : " + height);
		setQoskHeight(height);
	};

	const onDownScroll = () => {
		console.log(videoHeight);
		window.scrollTo(0, videoHeight);
	};
	const onMoneyPotScroll = () => {
		console.log(moneypotHeight);
		window.scrollTo(0, videoHeight);
	};

	const onIraScroll = () => {
		console.log(iraHeight);
		window.scrollTo(0, videoHeight + moneypotHeight);
	};
	const onQoskScroll = () => {
		console.log(qoskHeight);
		window.scrollTo(0, videoHeight + moneypotHeight + iraHeight);
	};

	const checkScroll = (scrollTop, height) => {
		if (scrollTop > height) checkVideo(false);
		else checkVideo(true);
	};

	return (
		<div>
			<Header isVideo={isVideo} />
			<div className="main_content">
				{/* FULL SCREEN VIDEO */}
				<MainScreen
					onVideoHeight={onVideoHeight}
					onDownScroll={onDownScroll}
					checkScroll={checkScroll}
				/>
				{/* MONEYPOT */}
				<MoneyPot
					onMoneypotHeight={onMoneypotHeight}
					onIraScroll={onIraScroll}
					onQoskScroll={onQoskScroll}
				/>
				{/* IRA */}
				<Ira
					onIraHeight={onIraHeight}
					onMoneyPotScroll={onMoneyPotScroll}
					onQoskScroll={onQoskScroll}
				/>
				{/* QOSK */}
				<Qosk
					onQoskHeight={onQoskHeight}
					onMoneyPotScroll={onMoneyPotScroll}
					onIraScroll={onIraScroll}
				/>
				<div className="m_section4">
					{/* PARTNERS */}
					<Partners />
					{/* PRESS */}
					<Press />
					{/* LOCATION */}
					<Location />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Main;
