import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Space, Form, Input, InputNumber, Button, Upload } from "antd";
import {
	ExclamationCircleOutlined,
	LoadingOutlined,
	PlusOutlined
} from "@ant-design/icons";

const EditPartner = (props) => {
	const data = props.record;
	const currentUser = useSelector((state) => state.currentUser);
	const [number, setNumber] = useState({ showIndex: data.show_index });
	const [imageUrl, setImageUrl] = useState(data.image_url);
	const [imageUrlMobile, setImageUrlMobile] = useState(data.image_url_mobile);
	const [loading, setLoading] = useState(false);

	const { confirm } = Modal;

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const deleteFileApi = async (fileName) => {
		const requestOptions = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ fileName })
		};
		await fetch("/api/admin/deleteFile", requestOptions);
	};

	const onFinish = (values) => {
		console.log(values);
		if (imageUrl) {
			values.partner.image_url = imageUrl;
		}
		if (imageUrlMobile) {
			values.partner.image_url_mobile = imageUrlMobile;
		}
		console.log(values);
		if (data.id > 0) {
			values.partner.id = data.id;
			props.update(values.partner);
		} else props.save(values.partner);
	};

	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "사용자 입력을 취소하시겠습니까?",
			onOk() {
				console.log("OK");
				props.reset();
				if (imageUrl && data.image_url !== imageUrl) deleteFileApi(imageUrl);
				if (imageUrlMobile && data.image_url_mobile !== imageUrlMobile)
					deleteFileApi(imageUrlMobile);
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

	const imgpropsMobile = {
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
				if (imageUrlMobile) deleteFileApi(imageUrlMobile);
				return;
			}
			if (info.file.status === "done") {
				setLoading(false);
				setImageUrlMobile(info.file.name);
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
				name={["partner", "image_url"]}
				label="메인 사진"
				extra="PC용 파트너 이미지를 업로드하세요"
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
				name={["partner", "image_url_mobile"]}
				label="사진"
				extra="모바일용 파트너 이미지를 업로드하세요"
			>
				<Upload {...imgpropsMobile}>
					{imageUrlMobile ? (
						<img
							src={`https://dev.quantec.co.kr/api/uploads/${imageUrlMobile}`}
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
				initialValue={data.name}
			>
				<Input disabled={data.name ? true : false} />
			</Form.Item>
			<Form.Item
				name={["partner", "show_index"]}
				label="화면표시순서"
				initialValue={data.show_index}
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
