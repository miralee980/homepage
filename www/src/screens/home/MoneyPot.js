import React from "react";
import Pager from "components/Pager";

const MoneyPot = (props) => {
	return (
		<div className="m_section1">
			<div className="mp_inner">
				<div className="mp_wrap">
					<p className="mp_summary">MOBILE APP SERVICE</p>
					<p className="mp_tit">MONEYPOT</p>
					<p className="mp_txt_b">투자 전문가와 함께하는 나만의 쉽고 편한 자산관리 앱 머니포트 MoneyPot</p>
					<p className="mp_txt">
					머니포트는 인공지능 기술을 기반으로 투자 전문가가 만든 쉽고 편한 
					자산관리 앱입니다. 계좌개설부터 포트폴리오 투자 실행 및 리밸런싱까지, 
					머니포트 단 하나의 앱으로도 쉽고 편한 자산관리 서비스를 경험할 수 있습니다.

					</p>
				</div>
				{/* 
				<div className="mp_btn">
					<p className="mp_btn_txt">MORE</p>
				</div> */}
			</div>
			<Pager fullpageApi={props.fullpageApi} pageNum="1" />
		</div>
	);
};

export default MoneyPot;
