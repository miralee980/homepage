import React, { useEffect } from "react";
import Pager from "components/Pager";

const Qosk = props => {
	const { onQoskHeight } = props;
	useEffect(() => {
		onQoskHeight(window.innerHeight || document.body.clientHeight);
	}, [onQoskHeight]);

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

			<Pager
				onMoneyPotScroll={props.onMoneyPotScroll}
				onIraScroll={props.onIraScroll}
				onQoskScroll={props.onQoskScroll}
				pageNum="pager03"
			/>
		</div>
	);
};

export default Qosk;
