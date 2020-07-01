import React, { Component, useState, useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";
import EditSNS from "./EditSNS";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NeedLogin from "./NeedLogin";
import NeedAuth from "./NeedAuth";

const TableSNS = props => {
	const currentUser = useSelector(state => state.currentUser);
	const [dataSource, setData] = useState(null);

	const fetchSNS = useCallback(async () => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		const res = await fetch("/api/admin/sns/loadSNS", requestOptions);
		res
			.json()
			.then(res => setData(res.data))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		fetchSNS();
	}, [fetchSNS]);

	const { confirm } = Modal;
	const deleteConfirm = record => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "SNS를 삭제하시겠습니까?",
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
			title: "이미지",
			dataIndex: "image_url",
			key: "image_url",
			render: url => (
				<Space size="middle">
					{url ? (
						<img
							src={`/api/uploads/${url}`}
							alt="partner_url"
							style={{ width: "128px", height: "128px" }}
						/>
					) : (
						<img
							src={require("assets/images/img-sub-04-sns-img-default.svg")}
							alt="partner_url"
							style={{ width: "128px", height: "128px" }}
						/>
					)}
				</Space>
			)
		},
		{
			title: "일자",
			dataIndex: "pub_at",
			key: "pub_at"
		},
		{
			title: "제목",
			dataIndex: "title",
			key: "title"
		},
		{
			title: "SNS URL",
			dataIndex: "link",
			key: "link",
			render: link => (
				<a href={link} target="_blank" rel="noopener noreferrer">
					{link}
				</a>
			)
		},
		{
			title: "SNS URL",
			dataIndex: "sns_type",
			key: "sns_type"
		},
		{
			title: "정보 수정",
			key: "action",
			render: (text, record) => (
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
			title="SNS 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromSNS = props => {
	return (
		<Card
			title="SNS 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditSNS
					record={props.record}
					reset={props.resetRecord}
					save={props.saveApi}
					update={props.updateApi}
				/>
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					imageStyle={{ height: 60 }}
					sns_type={<span>새 SNS 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class SNS extends Component {
	state = { record: null };

	resetRecord = () => {
		console.log("resetRecord");
		this.setState({ record: null });
	};

	dumpRecord = () => {
		console.log("dumpRecord");
		var dump = {
			id: "",
			title: 0,
			pub_at: new Date(),
			brief: "",
			sns_type: "",
			image_url: "",
			link: ""
		};
		this.setState({ record: dump });
	};

	edit = record => {
		console.log("edit id = " + record.id);
		this.setState({ record: record });
	};

	success = msg => {
		message.success(msg);
	};

	error = text => {
		message.error(text);
	};

	saveApi = async snsData => {
		const { currentUser } = this.props;
		// console.log("saveApi record = "); // API 연결
		// console.log(snsData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ snsData })
		};
		const response = await fetch("/api/admin/sns/addSNS", requestOptions);
		const body = await response.json();
		// console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async snsData => {
		const { currentUser } = this.props;
		// console.log("updateApi record = ");
		// console.log(snsData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ snsData })
		};
		const response = await fetch("/api/admin/sns/updateSNS", requestOptions);
		const body = await response.json();
		// console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	deleteApi = async record => {
		const { currentUser } = this.props;
		// console.log("deleteApi id = " + record.id);
		const id = record.id;
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ id })
		};
		const response = await fetch("/api/admin/sns/delSNS", requestOptions);
		const body = await response.json();
		// console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<h1>소셜 관리</h1>
				{/* {!currentUser.isLoggedIn ? (
					<NeedLogin />
				) : currentUser.authLevel !== 100 ? (
					<NeedAuth />
				) : ( */}
				<div>
					<TableSNS
						deleteApi={this.deleteApi}
						edit={this.edit}
						record={this.state.record}
					/>
					<br />
					<FromSNS
						record={this.state.record}
						resetRecord={this.resetRecord}
						saveApi={this.saveApi}
						updateApi={this.updateApi}
						dumpRecord={this.dumpRecord}
					/>
				</div>
				{/* )} */}
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}
export default connect(mapStateToProps)(SNS);
