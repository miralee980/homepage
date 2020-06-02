import React, { useEffect } from "react";
import { Modal, Space, Form, Input, Button, DatePicker, Upload } from "antd";
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";
import moment from "moment";

const normFile = e => {
	console.log("Upload event:", e);
	if (Array.isArray(e)) {
		return e;
	}
	return e && e.fileList;
};

const EditNews = props => {
	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	const onFinish = values => {
		console.log(values);
		values.history.pub_at = values.history.pub_at.clone().format();
		if (props.record.id > 0) {
			values.history.id = props.record.id;
			props.update(values);
		} else props.save(values);
	};
	const { confirm } = Modal;
	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "연혁 입력을 취소하시겠습니까?",
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
	};
	const dateFormat = "YYYY/MM/DD'";
	console.log(props.record);

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name={["news", "image_url"]}
				label="Upload"
				valuePropName="image_url"
				getValueFromEvent={normFile}
				extra="뉴스에 등록된 이미지를 업로드하세요"
			>
				<Upload name="logo" action="/upload.do" listType="picture">
					<Button>
						<UploadOutlined /> Click to upload
					</Button>
				</Upload>
			</Form.Item>
			<Form.Item
				name={["news", "pub_at"]}
				label="일자"
				rules={[
					{
						required: true,
					},
				]}
				initialValue={moment(props.record.pub_at, dateFormat)}
			>
				<DatePicker format={dateFormat} />
			</Form.Item>
			<Form.Item
				name={["news", "title"]}
				label="기사 제목"
				rules={[
					{
						required: true,
					},
				]}
				initialValue={props.record.title}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={["news", "link"]}
				label="기사 원문 URL"
				initialValue={props.record.link}
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

export default EditNews;
