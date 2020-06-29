import React, { useState, useEffect } from "react";
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
import { ExclamationCircleOutlined, UploadOutlined } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;

const EditSNS = props => {
	const data = props.record;
	const [fileName, setFileName] = useState("");

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const normFile = e => {
		console.log("Upload event:", e);
		setFileName(e.file.name);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const onFinish = values => {
		console.log(values);
		console.log(fileName);
		values.sns.pub_at = values.sns.pub_at.format("yyyy-MM-DD");
		values.sns.image_url = fileName;
		if (data.id > 0) {
			values.sns.id = data.id;
			props.update(values.sns);
		} else props.save(values.sns);
	};
	const { confirm } = Modal;
	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "SNS 입력을 취소하시겠습니까?",
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
				label="Upload"
				valuePropName="image_url"
				getValueFromEvent={normFile}
				extra="SNS에 등록된 이미지를 업로드하세요"
			>
				<Upload name="logo" action="/upload.do" listType="picture">
					<Button>
						<UploadOutlined /> Click to upload
					</Button>
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
