import React, { useState, useEffect } from "react";
import SnsList from "./SnsList";
import PressPageNum from "components/Press/PressPageNum";

const Sns = () => {
	const [sns, setsns] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalSnsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/quantec/sns");
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK") {
					setTotalNewsNum(body.data.length);
					setsns(body.data);
					setPageNum(
						parseInt(body.data.length / 6) + (body.data.length % 6 > 0 ? 1 : 0)
					);
				}
			}
		}
		fetchData();
	}, []);

	const onClickHandler = pageNum => {
		setSelNum(Number(pageNum));
	};
	return (
		<div className="pr_press_wrap">
			<SnsList selNum={selNum} totalSnsNum={totalSnsNum} sns={sns} />
			<div className="press_number_wrap">
				<ul className="press_number_list">
					<li className="press_prev">
						<div
							onClick={() =>
								selNum > 1 ? setSelNum(selNum - 1) : setSelNum(1)
							}
						>
							<img
								src={require("assets/images/ic-m-partners-arrowleft.svg")}
								alt="prev_btn"
							/>
						</div>
					</li>
					<PressPageNum
						pageNum={pageNum}
						selNum={selNum}
						onClickHandler={onClickHandler}
					/>
					<li className="press_next">
						<div
							onClick={() =>
								selNum < pageNum ? setSelNum(selNum + 1) : setSelNum(pageNum)
							}
						>
							<img
								src={require("assets/images/ic-m-partners-arrowright.svg")}
								alt="next_btn"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sns;
