import React, { useState, useEffect } from "react";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import PressList from "components/Press/PressList";
import PressPageNum from "components/Press/PressPageNum";
import "styles/pr_news.css";
import "styles/pr_sns.css";
const PRCenter = () => {
	const [news, setnews] = useState(null);
	const [pageNum, setPageNum] = useState(0);
	const [totalNewsNum, setTotalNewsNum] = useState(0);
	const [selNum, setSelNum] = useState(1);

	async function fetchData() {
		const res = await fetch("/api/quantec/news");
		const body = await res.json();
		if (body.status === "OK") {
			setTotalNewsNum(body.data.length);
			setnews(body.data);
			setPageNum(
				parseInt(body.data.length / 5) + (body.data.length % 5 > 0 ? 1 : 0)
			);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const onClickHandler = pageNum => {
		setSelNum(Number(pageNum));
	};
	return (
		<div>
			<Header isVideo={false} />

			<div class="pr_content">
				<div class="page_title_wrap">
					<div class="page_title">
						<p class="page_subhead">Forward Thinking in Finance</p>
						<p class="page_heading">PR</p>
					</div>

					<div class="pr_page_img">
						<img
							src={require("assets/images/line-sectionline.svg")}
							alt="section_line"
							class="page_line"
						/>
						<p class="img_subhead">PR</p>
						<p class="img_title">
							콴텍이 만들어가는 <br class="br" />
							새로운 금융을 만나보세요.
						</p>
					</div>
				</div>

				<div class="press">
					<div class="section">
						<div class="pr_tab">
							<div class="pr_news on">
								<p>NEWS</p>
							</div>
							<img
								src={require("assets/images/ic-sub-04-tabcircle.svg")}
								alt="circle"
								class="tab_circle"
							/>
							<div class="pr_sns">
								<p>SNS</p>
							</div>
						</div>
						<div class="pr_press_wrap">
							<PressList
								selNum={selNum}
								totalNewsNum={totalNewsNum}
								news={news}
							/>

							<div class="press_number_wrap">
								<ul class="press_number_list">
									<li class="press_prev">
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
									<li class="press_next">
										<div
											onClick={() =>
												selNum < pageNum
													? setSelNum(selNum + 1)
													: setSelNum(pageNum)
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
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default PRCenter;
