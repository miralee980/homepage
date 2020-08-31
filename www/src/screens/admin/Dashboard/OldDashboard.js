import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Table } from "antd";
import moment from "moment";
import NeedLogin from "../NeedLogin";

import {
	LineChart,
	Line,
	BarChart,
	Bar,
	PieChart,
	Pie,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Legend,
	Brush,
	AreaChart,
	Area,
	Cell,
	Label,
	LabelList
} from "recharts";

const OldDashboard = () => {
	const currentUser = useSelector((state) => state.currentUser);
	const [month, setMonth] = useState(moment(new Date()).format("YYYY-MM"));
	const [weekVisitors, setWeekData] = useState([]);
	const [monthVisitors, setMonthkData] = useState([]);
	const [deviceKind, setDeviceData] = useState([]);
	const [dataSource, setData] = useState(null);
	const colors = ["#8884d8", "#ff7300"];

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		// async function fetchLoadData() {
		// 	const res = await fetch(
		// 		`https://dev.quantec.co.kr/api/admin/dashboard/rawData?month=${month}`,
		// 		requestOptions
		// 	);
		// 	res
		// 		.json()
		// 		.then((res) => {
		// 			setData(res.data);
		// 			console.log(res);
		// 		})
		// 		.catch((err) => console.log(err));
		// }

		async function fetchMonthData() {
			const res = await fetch(
				"https://dev.quantec.co.kr/api/admin/dashboard/yearData",
				requestOptions
			);
			res
				.json()
				.then((res) => {
					setMonthkData(res.data.reverse());
					console.log(res);
				})
				.catch((err) => console.log(err));
		}

		fetchMonthData();
		// fetchLoadData(month);
	}, []);

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		async function fetchWeekData() {
			const res = await fetch(
				`https://dev.quantec.co.kr/api/admin/dashboard/monthData?month=${month}`,
				requestOptions
			);
			res
				.json()
				.then((res) => {
					setWeekData(res.data);
					console.log(res);
				})
				.catch((err) => console.log(err));
		}

		async function fetchDeviceData() {
			const res = await fetch(
				`https://dev.quantec.co.kr/api/admin/dashboard/deviceData?month=${month}`,
				requestOptions
			);
			res
				.json()
				.then((res) => {
					setDeviceData(res.data);
					console.log(res);
				})
				.catch((err) => console.log(err));
		}
		fetchWeekData(month);
		fetchDeviceData(month);
	}, [month]);

	const columns = [
		{
			title: "IP",
			dataIndex: "ip",
			key: "ip"
		},
		{
			title: "날짜",
			dataIndex: "income_date",
			key: "income_date"
		},
		{
			title: "기기",
			dataIndex: "device",
			key: "device"
		},
		{
			title: "유저정보",
			dataIndex: "agent",
			key: "agent"
		}
	];

	return (
		<>
			<h1>Dashboard</h1>
			{!currentUser.isLoggedIn ? (
				<NeedLogin />
			) : (
				<div className="space-align-container">
					<Card
						className="space-align-block"
						title="Dashboard"
						bordered={false}
						style={{ width: "50%" }}
					>
						<p>월별 홈페이지 방문자 정보</p>
						<div className="bar-chart-wrapper">
							<BarChart
								width={500}
								height={300}
								data={monthVisitors}
								margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
								onClick={(e) => setMonth(e.activeLabel)}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis
									dataKey="month"
									// tickFormatter={(value, i) => `${value}.${i}`}
								/>
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="visitors" fill="#8884d8" />
							</BarChart>
						</div>
					</Card>
					<Card
						className="space-align-block"
						bordered={false}
						style={{ width: "50%" }}
					>
						{/* <Table dataSource={dataSource} columns={columns} /> */}
						<p>일별 홈페이지 방문자 정보</p>
						<div className="line-chart-wrapper">
							<LineChart
								width={600}
								height={400}
								data={weekVisitors}
								margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
							>
								<CartesianGrid vertical={false} />
								<XAxis dataKey="day" />
								<YAxis domain={["auto", "auto"]} />
								<Tooltip
									wrapperStyle={{
										borderColor: "white",
										boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)"
									}}
									contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
									labelStyle={{ fontWeight: "bold", color: "#666666" }}
								/>
								<Line dataKey="visitors" stroke="#ff7300" dot={true} />
								{weekVisitors && weekVisitors.length > 7 ? (
									<Brush dataKey="day" startIndex={weekVisitors.length - 7}>
										<AreaChart>
											<CartesianGrid />
											<YAxis hide domain={["auto", "auto"]} />
											<Area
												dataKey="visitors"
												stroke="#ff7300"
												fill="#ff7300"
												dot={false}
											/>
										</AreaChart>
									</Brush>
								) : null}
							</LineChart>
						</div>
						<br />
						<div>
							<p>홈페이지 접근 디바이스 정보</p>
							<PieChart width={300} height={200}>
								<Legend paylodUniqBy />
								<Pie
									data={deviceKind}
									dataKey="value"
									cx={150}
									cy={150}
									startAngle={180}
									endAngle={0}
									outerRadius={80}
									label
								>
									{deviceKind &&
										deviceKind.map((entry, index) => (
											<Cell key={`slice-${index}`} fill={colors[index]} />
										))}
									<Label value="접속 종류" position="bottom" />
									<LabelList position="outside" />
								</Pie>
							</PieChart>
						</div>
					</Card>
				</div>
			)}
		</>
	);
};

export default OldDashboard;
