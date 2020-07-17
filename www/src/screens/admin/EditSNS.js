import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	Modal,
	Space,
	Form,
	Input,
	Button,
	DatePicker,
	Upload,
	Select
} from "antd";
import {
	ExclamationCircleOutlined,
	LoadingOutlined,
	PlusOutlined
} from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;

const EditSNS = (props) => {
	const data = props.record;
	const currentUser = useSelector((state) => state.currentUser);
	const [imageUrl, setImageUrl] = useState(data.image_url);
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
		if (values.sns.image_url) {
			values.sns.image_url = values.sns.image_url.file.name;
		}
		values.sns.pub_at = values.sns.pub_at.format("yyyy-MM-DD");
		if (data.id > 0) {
			values.sns.id = data.id;
			props.update(values.sns);
		} else props.save(values.sns);
	};

	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "SNS 입력을 취소하시겠습니까?",
			onOk() {
				console.log("OK");
				props.reset();
				if (imageUrl && data.image_url !== imageUrl) deleteFileApi(imageUrl);
			},
			onCancel() {
				console.log("Cancel");
			}
		});
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
			console.log();
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
		required: "${label} 입력 바랍니다.!"
	};

	const dateFormat = "YYYY/MM/DD'";

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name={["sns", "image_url"]}
				label="사진"
				extra="SNS에 등록된 이미지를 업로드하세요"
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
				name={["sns", "pub_at"]}
				label="일자"
				rules={[
					{
						required: true
					}
				]}
				initialValue={moment(data.pub_at, dateFormat)}
			>
				<DatePicker format={dateFormat} />
			</Form.Item>
			<Form.Item
				name={["sns", "title"]}
				label="제목"
				rules={[
					{
						required: true
					}
				]}
				initialValue={data.title}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={["sns", "link"]}
				label="원문 URL"
				initialValue={data.link}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["sns", "sns_type"]}
				label="SNS Type"
				initialValue={data.sns_type}
			>
				<Select placeholder="Select a type of sns" allowClear>
					<Option value="페이스북">페이스북</Option>
					<Option value="카카오채널">카카오채널</Option>
					<Option value="네이버 포스트">네이버 포스트</Option>
					<Option value="링크드인">링크드인</Option>
				</Select>
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

export default EditSNS;
