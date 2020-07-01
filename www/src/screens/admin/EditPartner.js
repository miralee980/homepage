import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import {
	ExclamationCircleOutlined,
	LoadingOutlined,
	PlusOutlined
} from "@ant-design/icons";

const EditPartner = props => {
	const currentUser = useSelector(state => state.currentUser);
	const [number, setNumber] = useState({ showIndex: props.record.show_index });
	const [imageUrl, setImageUrl] = useState(props.record.image_url);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const deleteFileApi = async fileName => {
		const requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ fileName })
		};
		const response = await fetch("/api/admin/deleteFile", requestOptions);
	};

	const onFinish = values => {
		// console.log(values);
		if (values.partner.image_url) {
			values.partner.image_url = values.partner.image_url.file.name;
		}

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
				if (imageUrl && props.record.image_url !== imageUrl)
					deleteFileApi(imageUrl);
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

	const imgprops = {
		name: "file",
		listType: "picture-card",
		className: "avatar-uploader",
		showUploadList: false,
		action: "/api/admin/upload",
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
				extra="파트너 이미지를 업로드하세요"
			>
				<Upload {...imgprops}>
					{imageUrl ? (
						<img
							src={`/api/uploads/${imageUrl}`}
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
