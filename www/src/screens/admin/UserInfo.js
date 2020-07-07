import React, { Component, useState, useEffect, useCallback } from "react";
import { useSelector, connect } from "react-redux";
import EditUser from "./EditUser";
import { Table, Space, Card, Empty, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import NeedLogin from "./NeedLogin";

const TableUsers = (props) => {
	const currentUser = useSelector((state) => state.currentUser);
	const [dataSource, setData] = useState(null);
	const { setList } = props;

	const fetchUser = useCallback(async () => {
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		const res = await fetch("/api/admin/user/loadUser", requestOptions);
		res
			.json()
			.then((res) => {
				setData(res.data);
				var list = res.data.map((value) => {
					return value.show_index;
				});
				console.log(list);
				setList(list);
			})
			.catch((err) => console.log(err));
	}, [setList]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	const { confirm } = Modal;
	const deleteConfirm = (record) => {
		confirm({
			title: "Do you want to delete this item?",
			icon: <ExclamationCircleOutlined />,
			content: "사용자를 삭제하시겠습니까?",
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
			title: "프로필",
			key: "profile_img",
			render: (text, record) => (
				<Space size="middle">
					{/* <img
            src={require("../../upload_files/1590454079.jpg")}
            alt="news"
            style={{ width: "128px", height: "128px" }}
          /> */}
				</Space>
			)
		},
		{
			title: "성명",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "계정(E-mail)",
			dataIndex: "email",
			key: "email"
		},
		{
			title: "부서",
			dataIndex: "job_dept",
			key: "job_dept"
		},
		{
			title: "직위",
			dataIndex: "job_position",
			key: "job_position"
		},
		{
			title: "모토",
			dataIndex: "motto",
			key: "motto"
		},
		{
			title: "권한 등급",
			dataIndex: "auth_level",
			// key: "auth_level",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.auth_level - b.auth_level
		},
		{
			title: "화면표시순서",
			dataIndex: "show_index",
			// key: "show_index",
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
			title="사용자 목록"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			<Table dataSource={dataSource} columns={columns} />
		</Card>
	);
};

const FromUser = (props) => {
	return (
		<Card
			title="사용자 등록 및 수정"
			bordered={false}
			style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
		>
			{props.record ? (
				<EditUser
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
					description={<span>새 사용자 등록</span>}
				>
					<Button onClick={props.dumpRecord}>Create New</Button>
				</Empty>
			)}
		</Card>
	);
};

class UserInfo extends Component {
	state = { record: null, showIndexList: [] };

	resetRecord = () => {
		console.log("resetRecord");
		this.setState({ record: null });
	};

	dumpRecord = () => {
		console.log("dumpRecord");
		var dump = {
			id: "",
			profile_img: "",
			name: "",
			email: "",
			job_dept: "",
			job_position: "",
			job_description: "",
			motto: "",
			auth_level: 0,
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

	saveApi = async (userData) => {
		const { currentUser } = this.props;
		console.log("saveApi record = "); // API 연결
		console.log(userData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ userData })
		};
		const response = await fetch("/api/admin/user/addUser", requestOptions);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	updateApi = async (userData) => {
		const { currentUser } = this.props;
		console.log("updateApi record = ");
		console.log(userData);
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ userData })
		};
		const response = await fetch("/api/admin/user/updateUser", requestOptions);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
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
		const response = await fetch("/api/admin/user/delUser", requestOptions);
		const body = await response.json();
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
		this.resetRecord();
	};

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<h1>사용자 관리</h1>
				{!currentUser.isLoggedIn ? (
					<NeedLogin />
				) : (
					<div>
						<TableUsers
							deleteApi={this.deleteApi}
							edit={this.edit}
							record={this.state.record}
							setList={this.setShowIndexList}
						/>
						<br />
						<FromUser
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

export default connect(mapStateToProps)(UserInfo);
