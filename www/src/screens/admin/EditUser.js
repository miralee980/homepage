import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";

const EditUser = props => {
	const currentUser = useSelector(state => state.currentUser);
	const [editPassword, setEditPassword] = useState(false);
	const [number, setNumber] = useState({ showIndex: props.record.show_index });
	const [profile, setProfile] = useState({});

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const onClickEditPassword = () => {
		setEditPassword(!editPassword);
	};

	const normFile = e => {
		console.log("Upload event:", e);
		setProfile(e.file.originFileObj);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const saveFileApi = async values => {
		console.log("saveFileApi");
		const formData = new FormData();
		console.log(profile);
		formData.append("profile", values.user.profile);

		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "multipart/form-data",
				"x-access-token": currentUser.token
			},
			body: formData
		};
		const response = await fetch("/api/admin/user/upload", requestOptions);
		const body = await response.json();
		console.log(body);
	};

	const onFinish = values => {
		console.log(values);
		if (values.user.profile_img) {
			values.user.profile_img = `/upload_files/${values.user.profile_img[0].name}`;
			if (props.record.profile_img !== values.user.profile_img)
				saveFileApi(values);
		} else values.user.profile_img = "/img/pc/icon/default_profile.png";
	};

	const { confirm } = Modal;
	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "사용자 입력을 취소하시겠습니까?",
			onOk() {
				console.log("OK");
				props.reset();
			},
			onCancel() {
				console.log("Cancel");
			}
		});
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

	const onNumberChange = value => {
		if (props.showIndexList.find(num => num === value)) {
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

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name={["user", "profile"]}
				label="사진"
				// valuePropName="profile_img"
				getValueFromEvent={normFile}
				extra="사용자 프로필을 업로드하세요"
			>
				<Upload
					name="profile"
					method="POST"
					action="/api/admin/user/upload"
					listType="picture"
				>
					<Button>
						<UploadOutlined /> Click to upload
					</Button>
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
				<InputNumber />
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
