import React, { useState, useEffect } from "react";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";

const normFile = e => {
	console.log("Upload event:", e);
	if (Array.isArray(e)) {
		return e;
	}
	return e && e.fileList;
};

const EditUser = props => {
	const [editPassword, setEditPassword] = useState(false);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const onClickEditPassword = () => {
		setEditPassword(!editPassword);
	};

	const onFinish = values => {
		console.log(values);
		if (props.record.id > 0) {
			values.user.id = props.record.id;
			props.update(values);
		} else props.save(values);
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
			},
		});
	};

	const validateMessages = {
		required: "${label} 입력 바랍니다.!",
		types: {
			auth_level: "${label} is not a validate number!",
		},
		number: {
			range: "${label} must be between ${min} and ${max}",
		},
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
				valuePropName="profile_img"
				getValueFromEvent={normFile}
				extra="사용자 프로필을 업로드하세요"
			>
				<Upload name="logo" action="/upload.do" listType="picture">
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
						required: true,
					},
				]}
				initialValue={props.record.name}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["user", "email"]}
				label="계정(이메일)"
				rules={[
					{
						required: true,
					},
				]}
				initialValue={props.record.email}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["user", "motto"]}
				label="모토"
				initialValue={props.record.motto}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={["user", "password"]}
				label="패스워드"
				// initialValue={props.record.password}
			>
				{props.record.password ? (
					<Button htmlType="button" onClick={onClickEditPassword}>
						수정
					</Button>
				) : (
					<Input.Password />
				)}
				{editPassword ? <Input.Password /> : null}
			</Form.Item>
			<Form.Item
				name={["user", "auth_level"]}
				label="권한"
				rules={[
					{
						type: "number",
						min: 0,
						max: 100,
					},
				]}
				initialValue={props.record.auth_level}
			>
				<InputNumber />
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
