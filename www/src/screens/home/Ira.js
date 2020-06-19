import React, { useEffect } from "react";
import Pager from "components/Pager";

const Ira = props => {
	const { onIraHeight } = props;
	useEffect(() => {
		onIraHeight(window.innerHeight || document.body.clientHeight);
	}, [onIraHeight]);
	// useEffect(() => {
	// 	props.onIraHeight(window.innerHeight || document.body.clientHeight);
	// }, []);

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

			<Pager />
		</div>
	);
};

export default Ira;
