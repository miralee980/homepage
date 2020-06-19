import React, { useState, useEffect } from "react";
import moment from "moment";

const History = () => {
	const [history, setHistory] = useState(null);

	async function fetchData() {
		const res = await fetch("/api/quantec/history");
		const body = await res.json();
		if (body.status === "OK") {
			historyData(body.data);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const historyData = history => {
		var list = [];
		var year = "";
		var monthList = [];
		history.map(data => {
			if (year !== String(moment(data.did_at).year())) {
				year = String(moment(data.did_at).year());
				monthList = [];
				monthList.push({
					month: String(moment(data.did_at).month()),
					text: data.desc,
				});
				list.push({
					year: year,
					month: monthList,
				});
			} else {
				monthList.push({
					month: String(moment(data.did_at).month()),
					text: data.desc,
				});
			}
		});
		setHistory(list);
	};

	return (
		<div className="section_wrap">
			<div className="section">
				<div className="section_title">
					<p className="section_subhead">HISTORY</p>
					<p className="section_tit left">걸어온 길</p>
					<div className="history_wrap right">
						<ul className="history_list">
							{history &&
								history.map((yearData, index) => {
									return (
										<li className="history_cont" key={index}>
											<p className="history_year">{yearData.year}</p>
											{yearData.month.map((monthData, index) => {
												return (
													<p key={index}>
														<span className="history_month">
															{monthData.month}
														</span>
														<span className="history_txt">
															{monthData.text}
														</span>
													</p>
												);
											})}
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default History;
