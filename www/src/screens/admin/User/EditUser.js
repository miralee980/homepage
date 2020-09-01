import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import {
	ExclamationCircleOutlined,
	LoadingOutlined,
	PlusOutlined
} from "@ant-design/icons";

const EditUser = (props) => {
	const data = props.record;
	const currentUser = useSelector((state) => state.currentUser);
	const [editPassword, setEditPassword] = useState(false);
	const [number, setNumber] = useState({ showIndex: props.record.show_index });
	const [imageUrl, setImageUrl] = useState(data.profile_img);
	const [loading, setLoading] = useState(false);

	const { confirm } = Modal;

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const onClickEditPassword = () => {
		setEditPassword(!editPassword);
	};

	const deleteFileApi = async (fileName) => {
		const requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ fileName })
		};
		await fetch(
			"https://dev.quantec.co.kr/api/admin/deleteFile",
			requestOptions
		);
	};

	const onFinish = (values) => {
		console.log(values);
		if (imageUrl) {
			values.user.profile_img = imageUrl;
		}
		console.log(values);
		if (data.id > 0) {
			values.user.id = data.id;
			props.update(values.user);
		} else props.save(values.user);
	};

	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "사용자 입력을 취소하시겠습니까?",
			onOk() {
				console.log("OK");
				props.reset();
				if (imageUrl && data.profile_img !== imageUrl) deleteFileApi(imageUrl);
			},
			onCancel() {
				console.log("Cancel");
			}
		});
	};

	const onNumberChange = (value) => {
		if (props.showIndexList.find((num) => num === value)) {
			setNumber({
				validateStatus: "error",
				errorMsg: "이미 할당된 번호입니다.",
				showIndex: value
			});
		} else {
			setNumber({
				validateStatus: "success",
				errorMsg: "사용 가능한 번호입니다.",
				showIndex: value
			});
		}
	};

	const imgprops = {
		name: "file",
		listType: "picture-card",
		className: "avatar-uploader",
		showUploadList: false,
		action: "https://dev.quantec.co.kr/api/admin/upload",
		headers: {
			authorization: "authorization-text",
			"x-access-token": currentUser.token
		},
		onChange(info) {
			if (info.file.status === "uploading") {
				setLoading(true);
				if (imageUrl) deleteFileApi(imageUrl);
				return;
			}
			if (info.file.status === "done") {
				setLoading(false);
				setImageUrl(info.file.name);
			}
		}
	};

	const validateMessages = {
		required: "${label} 입력 바랍니다.!",
		types: {
			auth_level: "${label} is not a validate number!"
		},
		number: {
			range: "${label} must be between ${min} and ${max}"
		}
	};

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name={["user", "profile_img"]}
				label="사진"
				extra="사용자 프로필을 업로드하세요"
			>
				<Upload {...imgprops}>
					{imageUrl ? (
						<img
							src={`https://dev.quantec.co.kr/api/uploads/${imageUrl}`}
							alt="img"
							style={{ width: "100%" }}
						/>
					) : (
						<div>
							{loading ? <LoadingOutlined /> : <PlusOutlined />}
							<div className="ant-upload-text">Upload</div>
						</div>
					)}
				</Upload>
			</Form.Item>
			<Form.Item
				name={["user", "name"]}
				label="이름"
				rules={[
					{
						required: true
					}
				]}
				initialValue={props.record.name}
			>
				<Input disabled={props.record.name ? true : false} />
			</Form.Item>
			<Form.Item
				name={["user", "email"]}
				label="계정(이메일)"
				rules={[
					{
						required: true
					}
				]}
				initialValue={props.record.email}
			>
				<Input disabled={props.record.email ? true : false} />
			</Form.Item>
			<Form.Item
				name={["user", "motto"]}
				label="모토"
				initialValue={props.record.motto}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item name={["user", "password"]} label="패스워드">
				{!props.record.password || editPassword ? (
					<Input.Password />
				) : (
					<Button htmlType="button" onClick={onClickEditPassword}>
						수정
					</Button>
				)}
			</Form.Item>
			<Form.Item
				name={["user", "auth_level"]}
				label="권한"
				rules={[
					{
						type: "number",
						min: 0,
						max: 100
					}
				]}
				initialValue={props.record.auth_level}
			>
				<InputNumber disabled={currentUser.authLevel !== 100 ? true : false} />
			</Form.Item>
			<Form.Item
				name={["user", "show_index"]}
				label="화면표시순서"
				initialValue={props.record.show_index}
				validateStatus={number.validateStatus}
				help={number.errorMsg}
			>
				<InputNumber
					min={0}
					max={100}
					value={number.showIndex}
					onChange={onNumberChange}
					disabled={currentUser.authLevel !== 100 ? true : false}
				/>
			</Form.Item>
			<Form.Item
				name={["user", "job_dept"]}
				label="소속"
				initialValue={props.record.job_dept}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["user", "job_position"]}
				label="직책"
				initialValue={props.record.job_position}
			>
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 10 }}>
				<Button htmlType="submit">Save</Button>
				<Space>
					<Button htmlType="button" onClick={cancelConfirm}>
						Cancel
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};

export default EditUser;
