import React, { Component, useState, useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";
import EditNews from "./EditNews";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NeedLogin from "../NeedLogin";
import NeedAuth from "../NeedAuth";

const TableNews = (props) => {
	const [dataSource, setData] = useState(null);
	const currentUser = useSelector((state) => state.currentUser);

	const fetchNews = useCallback(async () => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		const res = await fetch(
			"https://dev.quantec.co.kr/api/admin/news/loadNews",
			requestOptions
		);
		res
			.json()
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (props.reloadTable) {
			props.setReloadTable();
			fetchNews();
		}
	}, [props.reloadTable]);

	// async function fetchData() {
	// 	const res = await fetch("/api/admin/news/loadNews", requestOptions);
	// 	res
	// 		.json()
	// 		.then(res => setData(res.data))
	// 		.catch(err => console.log(err));
	// }

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	const { confirm } = Modal;
	const deleteConfirm = (record) => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "뉴스를 삭제하시겠습니까?",
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
		// {
		// 	title: "이미지",
		// 	key: "image_url",
		// 	render: (text, record) => (
		// 		<Space size="middle">
		// 			{/* <img
		//         src={require("../../upload_files/1590454079.jpg")}
		//         alt="news"
		//         style={{ width: "128px", height: "128px" }}
		//       /> */}
		// 		</Space>
		// 	)
		// },
		{
			title: "일자",
			dataIndex: "pub_at",
			key: "pub_at"
		},
		{
			title: "기사 제목",
			dataIndex: "title",
			key: "title"
		},
		{
			title: "기사 원문 URL",
			dataIndex: "link",
			key: "link",
			render: (text, record) => (
				<a href={record.link} target="_blank" rel="noopener noreferrer">
					{record.link}
				</a>
			)
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
			title="뉴스 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromNews = (props) => {
	return (
		<Card
			title="뉴스 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditNews
					record={props.record}
					reset={props.resetRecord}
					save={props.saveApi}
					update={props.updateApi}
				/>
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					imageStyle={{ height: 60 }}
					description={<span>새 뉴스 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class NewsInfo extends Component {
	state = { record: null, reloadTable: true };

	resetRecord = () => {
		console.log("resetRecord");
		this.setState({ record: null });
	};

	setReloadTable = () => {
		console.log("setReloadTable");
		this.setState({ reloadTable: false });
	};

	dumpRecord = () => {
		console.log("dumpRecord");
		var dump = {
			id: "",
			title: 0,
			pub_at: new Date(),
			brief: "",
			description: "",
			image_url: "",
			link: ""
		};
		this.setState({ record: dump });
	};

	edit = (record) => {
		console.log("edit id = " + record.id);
		this.setState({ record: record });
	};

	success = (msg) => {
		message.success(msg);
	};

	error = (text) => {
		message.error(text);
	};

	saveApi = async (newsData) => {
		const { currentUser } = this.props;
		console.log("saveApi record = "); // API 연결
		console.log(newsData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ newsData })
		};
		const response = await fetch(
			"https://dev.quantec.co.kr/api/admin/news/addNews",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") {
			this.success(body.message);
			this.setState({ reloadTable: true });
		} else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async (newsData) => {
		const { currentUser } = this.props;
		console.log("updateApi record = ");
		console.log(newsData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ newsData })
		};
		const response = await fetch(
			"https://dev.quantec.co.kr/api/admin/news/updateNews",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") {
			this.success(body.message);
			this.setState({ reloadTable: true });
		} else this.error(body.message);
		this.resetRecord();
	};

	deleteApi = async (record) => {
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
			"https://dev.quantec.co.kr/api/admin/news/delNews",
			requestOptions
		);
		const body = await response.json();
		if (body.status === "OK") {
			this.success(body.message);
			this.setState({ reloadTable: true });
		} else this.error(body.message);
		this.resetRecord();
	};

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				{!currentUser.isLoggedIn ? (
					<NeedLogin />
				) : currentUser.authLevel !== 100 ? (
					<NeedAuth />
				) : (
					<div>
						<TableNews
							deleteApi={this.deleteApi}
							edit={this.edit}
							setReloadTable={this.setReloadTable}
							reloadTable={this.state.reloadTable}
							record={this.state.record}
						/>
						<br />
						<FromNews
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
export default connect(mapStateToProps)(NewsInfo);
