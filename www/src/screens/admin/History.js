import React, { Component, useState, useEffect, useCallback } from "react";
import EditHistory from "./EditHistory";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const TableHistory = props => {
	const [dataSource, setData] = useState(null);
	const fetchHistory = useCallback(async () => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTGV2ZWwiOjAsImVtYWlsIjoibXJsZWVAcXVhbnRlYy5jby5rciIsImlhdCI6MTU5MTc1MTE0MSwiZXhwIjoxNTkyMzU1OTQxLCJpc3MiOiJxdWFudGVjLmNvLmtyIiwic3ViIjoidXNlckluZm8ifQ.PtqEQZ-Ooix27Qdk3dQEPNZXUnt78J4mgDyEXYjo6M0",
			},
		};
		const res = await fetch("/api/admin/history/loadHistory", requestOptions);
		res
			.json()
			.then(res => setData(res.data))
			.catch(err => console.log(err));
	}, []);
	useEffect(() => {
		fetchHistory();
	}, [fetchHistory]);

	// async function fetchData() {
	// 	// const res = await fetch("/history/loadHistory");
	// 	const res = await fetch("/api/admin/history/loadHistory", requestOptions);
	// 	console.log(res);
	// 	res
	// 		.json()
	// 		.then(res => setData(res.data))
	// 		.catch(err => console.log(err));
	// }

	// useEffect(() => {
	// 	fetchData();
	// 	// props.setHeight(window.innerHeight);
	// }, []);

	const { confirm } = Modal;
	const deleteConfirm = record => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "연혁을 삭제하시겠습니까?",
			onOk() {
				console.log("OK");
				props.deleteApi(record);
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};

	const columns = [
		{
			title: "일자",
			dataIndex: "did_at",
			key: "did_at",
		},
		{
			title: "내용",
			dataIndex: "desc",
			key: "desc",
		},
		{
			title: "특징",
			dataIndex: "type",
			key: "type",
		},
		{
			title: "정보 수정",
			key: "action",
			render: (_: any, record: Item) => (
				<Space size="middle">
					<Button
						onClick={() => props.edit(record)}
						disabled={props.record ? true : false}
					>
						수정
					</Button>
					<Button
						onClick={() => deleteConfirm(record)}
						disabled={props.record ? true : false}
					>
						삭제
					</Button>
				</Space>
			),
		},
	];

	return (
		<Card
			title="연혁 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromHistory = props => {
	return (
		<Card
			title="연혁 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditHistory
					record={props.record}
					reset={props.resetRecord}
					save={props.saveApi}
					update={props.updateApi}
				/>
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					imageStyle={{ height: 60 }}
					description={<span>새 연혁 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class History extends Component {
	state = { record: null };

	resetRecord = () => {
		console.log("resetRecord");
		this.setState({ record: null });
	};

	dumpRecord = () => {
		console.log("dumpRecord");
		var dump = {
			id: "",
			type: 0,
			did_at: new Date(),
			desc: "",
		};
		this.setState({ record: dump });
	};

	edit = (record: Item) => {
		console.log("edit id = " + record.id);
		this.setState({ record: record });
	};

	success = msg => {
		message.success(msg);
	};

	error = text => {
		message.error(text);
	};

	saveApi = async historyData => {
		console.log("saveApi record = "); // API 연결
		console.log(historyData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTGV2ZWwiOjAsImVtYWlsIjoibXJsZWVAcXVhbnRlYy5jby5rciIsImlhdCI6MTU5MTc1MTE0MSwiZXhwIjoxNTkyMzU1OTQxLCJpc3MiOiJxdWFudGVjLmNvLmtyIiwic3ViIjoidXNlckluZm8ifQ.PtqEQZ-Ooix27Qdk3dQEPNZXUnt78J4mgDyEXYjo6M0",
			},
			body: JSON.stringify({ historyData }),
		};
		// const response = await fetch("/history/addHistory", requestOptions);
		const response = await fetch(
			"/api/admin/history/addHistory",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async historyData => {
		console.log("updateApi record = ");
		console.log(historyData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTGV2ZWwiOjAsImVtYWlsIjoibXJsZWVAcXVhbnRlYy5jby5rciIsImlhdCI6MTU5MTc1MTE0MSwiZXhwIjoxNTkyMzU1OTQxLCJpc3MiOiJxdWFudGVjLmNvLmtyIiwic3ViIjoidXNlckluZm8ifQ.PtqEQZ-Ooix27Qdk3dQEPNZXUnt78J4mgDyEXYjo6M0",
			},
			body: JSON.stringify({ historyData }),
		};
		// const response = await fetch("/history/updateHistory", requestOptions);
		const response = await fetch(
			"/api/admin/history/updateHistory",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	deleteApi = async (record: Item) => {
		console.log("deleteApi id = " + record.id);
		const id = record.id;
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token":
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTGV2ZWwiOjAsImVtYWlsIjoibXJsZWVAcXVhbnRlYy5jby5rciIsImlhdCI6MTU5MTc1MTE0MSwiZXhwIjoxNTkyMzU1OTQxLCJpc3MiOiJxdWFudGVjLmNvLmtyIiwic3ViIjoidXNlckluZm8ifQ.PtqEQZ-Ooix27Qdk3dQEPNZXUnt78J4mgDyEXYjo6M0",
			},
			body: JSON.stringify({ id }),
		};

		// const response = await fetch("/history/delHistory", requestOptions);

		const response = await fetch(
			"/api/admin/history/delHistory",
			requestOptions
		);
		const body = await response.json();
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	render() {
		return (
			<div>
				<h1>연혁 관리</h1>
				<TableHistory
					deleteApi={this.deleteApi}
					edit={this.edit}
					record={this.state.record}
				/>
				<br />
				<FromHistory
					record={this.state.record}
					resetRecord={this.resetRecord}
					saveApi={this.saveApi}
					updateApi={this.updateApi}
					dumpRecord={this.dumpRecord}
				/>
			</div>
		);
	}
}

export default History;
