import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";

const EditPartner = props => {
	const currentUser = useSelector(state => state.currentUser);
	const [number, setNumber] = useState({ showIndex: props.record.show_index });
	// const [profile, setProfile] = useState({});

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const normFile = e => {
		console.log("Upload event:", e);
		// setProfile(e.file.originFileObj);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	// const saveFileApi = async values => {
	// 	console.log("saveFileApi");
	// 	const formData = new FormData();
	// 	formData.append("profile", values.partner.profile);

	// 	const requestOptions = {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "multipart/form-data",
	// 			"x-access-token": currentUser.token
	// 		},
	// 		body: formData
	// 	};
	// 	const response = await fetch("/api/admin/partner/upload", requestOptions);
	// 	const body = await response.json();
	// 	console.log(body);
	// };

	const onFinish = values => {
		console.log(values);
		if (values.partner.image_url) {
			values.partner.image_url = values.partner.image_url[0].name;
			// if (props.record.image_url !== values.partner.image_url)
			// saveFileApi(values);
		} else values.partner.image_url = "default_profile.png";
		if (props.record.id > 0) {
			values.partner.id = props.record.id;
			props.update(values.partner);
		} else props.save(values.partner);
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
				name={["partner", "image_url"]}
				label="사진"
				// valuePropName="image_url"
				getValueFromEvent={normFile}
				extra="사용자 프로필을 업로드하세요"
			>
				<Upload
					name="image_url"
					//method="POST"
					//action="/api/admin/partner/upload"
					listType="picture"
				>
					<Button>
						<UploadOutlined /> Click to upload
					</Button>
				</Upload>
			</Form.Item>
			<Form.Item
				name={["partner", "name"]}
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
				name={["partner", "show_index"]}
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

export default EditPartner;
