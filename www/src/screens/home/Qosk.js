import React from "react";
import Pager from "components/Pager";

const Qosk = (props) => {
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
					{/* <div className="qosk_summary">KIOSK SERVICE</div> */}

					<p className="qosk_txt_b">
					로보어드바이저 최초의 무인 자산관리 플랫폼 디바이스 큐오스크 Q-Osk
					</p>
					<p className="qosk_txt right">
					큐오스크는 사용자의 투자 성향 파악과 자산배분 엔진 기술(Q-Engine)을 <br className="qosk_br"/>
					이용한 맞춤형 자산관리 서비스를 손쉽게 접해볼 수 있는 온-오프라인 연계 디바<br className="qosk_br" />
					이스로, 계좌개설과 포트폴리오 주문 서비스를 연결해 주는 무인 자산관리 플<br className="qosk_br" />
					랫폼입니다. 큐오스크와 함께라면, 언제 어디서든 시간을 절약해 주는 자산관<br className="qosk_br" />
					리 서비스를 이용할 수 있습니다.

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

			<Pager fullpageApi={props.fullpageApi} pageNum="3" />
		</div>
	);
};

export default Qosk;
