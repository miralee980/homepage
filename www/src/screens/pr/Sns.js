import React, { useState, useEffect } from "react";
import SnsList from "./SnsList";
import PressPageNum from "components/PressPageNum";

const Sns = () => {
	const [sns, setsns] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalSnsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dev.quantec.co.kr/api/quantec/sns");
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

	const onClickHandler = (pageNum) => {
		setSelNum(Number(pageNum));
	};
	return (
		<div className="pr_press_wrap">
			<SnsList selNum={selNum} totalSnsNum={totalSnsNum} sns={sns} />

			<PressPageNum
				pageNum={pageNum}
				selNum={selNum}
				setSelNum={setSelNum}
				onClickHandler={onClickHandler}
			/>
		</div>
	);
};

export default Sns;
