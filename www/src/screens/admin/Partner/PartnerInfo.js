import React, { Component, useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import EditPartner from "./EditPartner";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NeedLogin from "../NeedLogin";
import NeedAuth from "../NeedAuth";

const TablePartners = (props) => {
	const currentUser = useSelector((state) => state.currentUser);
	const [dataSource, setData] = useState(null);
	const { setList } = props;

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			contentType: "application/json; charset=utf-8",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		async function fetchLoadData() {
			const res = await fetch(
				"https://dev.quantec.co.kr/api/admin/partner/loadPartner",
				requestOptions
			);
			res
				.json()
				.then((res) => {
					JSON.stringify(res.data);
					setData(res.data);
					var list = res.data.map((value) => {
						return value.show_index;
					});
					console.log(list);
					setList(list);
				})
				.catch((err) => console.log(err));
		}
		if (props.reloadTable) {
			props.setReloadTable();
			fetchLoadData();
		}
	}, [props.reloadTable]);

	const { confirm } = Modal;
	const deleteConfirm = (record) => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "파트너를 삭제하시겠습니까?",
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
			title: "PC용 이미지",
			dataIndex: "image_url",
			key: "image_url",
			render: (url) => (
				<Space size="middle">
					{url ? (
						<img
							src={`https://dev.quantec.co.kr/api/uploads/${url}`}
							alt="partner_url"
							style={{ width: "128px", height: "128px" }}
						/>
					) : null}
				</Space>
			)
		},
		{
			title: "모바일용 이미지",
			dataIndex: "image_url_mobile",
			key: "image_url_mobile",
			render: (url) => (
				<Space size="middle">
					{url ? (
						<img
							src={`https://dev.quantec.co.kr/api/uploads/${url}`}
							alt="partner_url"
							style={{ width: "128px", height: "128px" }}
						/>
					) : null}
				</Space>
			)
		},
		{
			title: "파트너",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "화면표시순서",
			dataIndex: "show_index",
			key: "show_index",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.show_index - b.show_index
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
			title="파트너 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromPartner = (props) => {
	return (
		<Card
			title="파트너 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditPartner
					record={props.record}
					reset={props.resetRecord}
					save={props.saveApi}
					update={props.updateApi}
					showIndexList={props.showIndexList}
				/>
			) : (
				<Empty
					image={Empty.PRESENTED_IMAGE_DEFAULT}
					imageStyle={{ height: 60 }}
					description={<span>새 파트너 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class PartnerInfo extends Component {
	state = { record: null, reloadTable: true, showIndexList: [] };

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
			name: "",
			image_url: "",
			show_index: Math.max.apply(null, this.state.showIndexList) + 1
		};
		this.setState({ record: dump });
	};

	setShowIndexList = (list) => {
		this.setState({ showIndexList: list });
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

	saveApi = async (partnerData) => {
		const { currentUser } = this.props;
		// console.log("saveApi record = "); // API 연결
		// console.log(partnerData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ partnerData })
		};
		const response = await fetch(
			"https://dev.quantec.co.kr/api/admin/partner/addPartner",
			requestOptions
		);
		const body = await response.json();
		// console.log(body);
		if (body.status === "OK") {
			this.success(body.message);
			this.setState({ reloadTable: true });
		} else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async (partnerData) => {
		const { currentUser } = this.props;
		// console.log("updateApi record = ");
		// console.log(partnerData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ partnerData })
		};
		const response = await fetch(
			"https://dev.quantec.co.kr/api/admin/partner/updatePartner",
			requestOptions
		);
		const body = await response.json();
		// console.log(body);
		if (body.status === "OK") {
			this.success(body.message);
			this.setState({ reloadTable: true });
		} else this.error(body.message);
		this.resetRecord();
	};

	deleteApi = async (record) => {
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
		const response = await fetch(
			"https://dev.quantec.co.kr/api/admin/partner/delPartner",
			requestOptions
		);
		const body = await response.json();
		// console.log(body);
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
						<TablePartners
							deleteApi={this.deleteApi}
							edit={this.edit}
							setReloadTable={this.setReloadTable}
							reloadTable={this.state.reloadTable}
							record={this.state.record}
							setList={this.setShowIndexList}
						/>
						<br />
						<FromPartner
							record={this.state.record}
							resetRecord={this.resetRecord}
							saveApi={this.saveApi}
							updateApi={this.updateApi}
							dumpRecord={this.dumpRecord}
							showIndexList={this.state.showIndexList}
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

export default connect(mapStateToProps)(PartnerInfo);
