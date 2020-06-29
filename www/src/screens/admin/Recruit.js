import React, { Component, useState, useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";
import EditRecruit from "./EditRecruit";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NeedLogin from "./NeedLogin";
import NeedAuth from "./NeedAuth";

const TableRecruit = props => {
	const [dataSource, setData] = useState(null);
	const currentUser = useSelector(state => state.currentUser);

	const fetchRecruit = useCallback(async () => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		const res = await fetch("/api/admin/recruit/loadRecruit", requestOptions);
		res
			.json()
			.then(res => setData(res.data))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		fetchRecruit();
	}, [fetchRecruit]);

	const { confirm } = Modal;
	const deleteConfirm = record => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "채용공고를 삭제하시겠습니까?",
			onOk() {
				console.log("OK");
				props.deleteApi(record);
			},
			onCancel() {
				console.log("Cancel");
			}
		});
	};

	const columns = [
		{
			title: "채용 내용",
			dataIndex: "title",
			key: "title"
		},
		{
			title: "채용 부분",
			dataIndex: "part",
			key: "part"
		},
		{
			title: "경력",
			dataIndex: "career",
			key: "career"
		},
		{
			title: "근무형태",
			dataIndex: "work_type",
			key: "work_type"
		},
		{
			title: "채용타입",
			dataIndex: "recruit_type",
			key: "recruit_type"
		},
		{
			title: "채용공고시작일",
			dataIndex: "start_at",
			key: "start_at"
		},
		{
			title: "채용공고마지막일",
			dataIndex: "end_at",
			key: "end_at"
		},
		{
			title: "Recruit URL",
			dataIndex: "link",
			key: "link",
			render: (_: any, record: Item) => (
				<a href={record.link} target="_blank" rel="noopener noreferrer">
					{record.link}
				</a>
			)
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
			)
		}
	];
	return (
		<Card
			title="Recruit 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromRecruit = props => {
	return (
		<Card
			title="Recruit 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditRecruit
					record={props.record}
					reset={props.resetRecord}
					save={props.saveApi}
					update={props.updateApi}
				/>
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					imageStyle={{ height: 60 }}
					recruit_type={<span>새 채용공고 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class Recruit extends Component {
	state = { record: null };

	resetRecord = () => {
		console.log("resetRecord");
		this.setState({ record: null });
	};

	dumpRecord = () => {
		console.log("dumpRecord");
		var dump = {
			id: "",
			part: "",
			career: "",
			work_type: "",
			recruit_type: "",
			link: "",
			start_at: "",
			end_at: ""
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

	saveApi = async recruitData => {
		const { currentUser } = this.props;
		console.log("saveApi record = "); // API 연결
		console.log(recruitData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ recruitData })
		};
		const response = await fetch(
			"/api/admin/recruit/addRecruit",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async recruitData => {
		const { currentUser } = this.props;
		console.log("updateApi record = ");
		console.log(recruitData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ recruitData })
		};
		const response = await fetch(
			"/api/admin/recruit/updateRecruit",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	deleteApi = async (record: Item) => {
		const { currentUser } = this.props;
		console.log("deleteApi id = " + record.id);
		const id = record.id;
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ id })
		};
		const response = await fetch(
			"/api/admin/recruit/delRecruit",
			requestOptions
		);
		const body = await response.json();
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<h1>채용공고 관리</h1>
				{!currentUser.isLoggedIn ? (
					<NeedLogin />
				) : currentUser.authLevel !== 100 ? (
					<NeedAuth />
				) : (
					<div>
						<TableRecruit
							deleteApi={this.deleteApi}
							edit={this.edit}
							record={this.state.record}
						/>
						<br />
						<FromRecruit
							record={this.state.record}
							resetRecord={this.resetRecord}
							saveApi={this.saveApi}
							updateApi={this.updateApi}
							dumpRecord={this.dumpRecord}
						/>
					</div>
				)}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}
export default connect(mapStateToProps)(Recruit);
