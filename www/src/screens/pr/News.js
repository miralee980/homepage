import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import PressPageNum from "components/PressPageNum";

const News = () => {
	const [news, setnews] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalNewsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);
	const DEFINE_LIST_NUM = 4;

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dev.quantec.co.kr/api/quantec/news");
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK") {
					setTotalNewsNum(body.data.length);
					setnews(body.data);
					setPageNum(
						parseInt(body.data.length / DEFINE_LIST_NUM) +
							(body.data.length % DEFINE_LIST_NUM > 0 ? 1 : 0)
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
			<NewsList selNum={selNum} totalNewsNum={totalNewsNum} news={news} />

			<PressPageNum
				pageNum={pageNum}
				selNum={selNum}
				setSelNum={setSelNum}
				onClickHandler={onClickHandler}
			/>
		</div>
	);
};
export default News;
