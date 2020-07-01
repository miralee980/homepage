import React, { useEffect } from "react";
import Pager from "components/Pager";

const MoneyPot = props => {
	const { onMoneypotHeight } = props;
	useEffect(() => {
		onMoneypotHeight(window.innerHeight || document.body.clientHeight);
	}, [onMoneypotHeight]);

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
				{/* 
				<div className="mp_btn">
					<p className="mp_btn_txt">MORE</p>
				</div> */}
			</div>
			<Pager
				onMoneyPotScroll={props.onMoneyPotScroll}
				onIraScroll={props.onIraScroll}
				onQoskScroll={props.onQoskScroll}
				pageNum="pager01"
			/>
		</div>
	);
};

export default MoneyPot;
