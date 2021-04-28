import React from "react";
import Pager from "components/Pager";

const Ira = (props) => {
	return (
		<div className="m_section2">
			<div className="ira_inner">
				<div className="ira_wrap">
					<p className="ira_summary">ROBO ADVISOR SERVICE</p>
					<p className="ira_tit">IRA</p>
					<p className="ira_txt_b">
					자산관리 전문인력을 위한 초개인화 운용 서비스 솔루션, <br />맞춤형 로보어드바이저 아이라 IRA

					</p>
					<p className="ira_txt">
					아이라는 쉽고 빠르게 자신만의 맞춤 포트폴리오를 설계할 수 있도록 도와주는 로보어드바이저 솔루션입니다.  이제 금융기관을 비롯한 자산관리 전문 인력은 콴텍의 자산배분 엔진 기술(Q-Engine)이 탑재된 아이라를 이용하여 더 높은 단계의 효과적인 고객 자산관리 서비스를 제공할 수 있습니다.

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
			<Pager fullpageApi={props.fullpageApi} pageNum="2" />
		</div>
	);
};

export default Ira;
