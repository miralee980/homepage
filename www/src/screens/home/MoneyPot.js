import React, { useEffect } from "react";
import Pager from "components/Pager";

const MoneyPot = (props) => {
	return (
		<div className="m_section1">
			<div className="mp_inner">
				<div className="mp_wrap">
					<p className="mp_summary">MOBILE APP SERVICE</p>
					<p className="mp_tit">MONEYPOT</p>
					<p className="mp_txt_b">나만의 자산관리 비서</p>
					<p className="mp_txt">
						가입자의 자산현황, 투자성향 등을 종합적으로 분석하여 단순히 수익률이
						높은 포트폴리오를 제시하는 것이 아니라 개인별 자산현황, 목표수준
						등을 고려하여 가장 적합한 고객 맞춤형 자산관리 포트폴리오를 도출하여
						추천합니다.
					</p>
				</div>
				{/* 
				<div className="mp_btn">
					<p className="mp_btn_txt">MORE</p>
				</div> */}
			</div>
			<Pager setCurrentPage={props.setCurrentPage} pageNum="pager01" />
		</div>
	);
};

export default MoneyPot;
