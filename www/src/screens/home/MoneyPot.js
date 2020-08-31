import React from "react";
import Pager from "components/Pager";

const MoneyPot = (props) => {
	return (
		<div className="m_section1">
			<div className="mp_inner">
				<div className="mp_wrap">
					<p className="mp_summary">MOBILE APP SERVICE</p>
					<p className="mp_tit">MONEYPOT</p>
					<p className="mp_txt_b">나만의 자산관리 비서, 머니포트</p>
					<p className="mp_txt">
						머니포트는 투자자문 상품 계약서비스와 해외주식 매매를 제공하는
						자산관리 플랫폼 입니다.​ 단순히 수익률이 높은 포트폴리오 상품을
						제시하는 것이 아니라​ 가입자의 자산현황, 투자성향, 목표수준 등을
						종합적으로 고려하여 ​고객 맞춤형 자산관리 서비스를 추구합니다. ​
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
