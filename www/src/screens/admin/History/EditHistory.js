import React, { useEffect } from "react";
import {
	Modal,
	Space,
	Form,
	Input,
	InputNumber,
	Button,
	DatePicker,
} from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const EditHistory = props => {
	const data = props.record;

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const onFinish = values => {
		console.log(values);
		values.history.did_at = values.history.did_at.format("yyyy-MM-DD");
		if (data.id > 0) {
			values.history.id = data.id;
			props.update(values.history);
		} else props.save(values.history);
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
		types: {
			type: "${label} is not a validate number!",
		},
		number: {
			range: "${label} must be between ${min} and ${max}",
		},
	};
	const dateFormat = "YYYY-MM-DD'";

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
		>
			<Form.Item
				name={["history", "did_at"]}
				label="일자"
				rules={[
					{
						required: true,
					},
				]}
				initialValue={moment(data.did_at, dateFormat)}
			>
				<DatePicker format={dateFormat} />
			</Form.Item>
			<Form.Item
				name={["history", "desc"]}
				label="내용"
				rules={[
					{
						required: true,
					},
				]}
				initialValue={data.desc}
			>
				<Input.TextArea />
			</Form.Item>
			<Form.Item
				name={["history", "type"]}
				label="타입"
				rules={[
					{
						type: "number",
						min: 0,
						max: 99,
					},
				]}
				initialValue={data.type}
			>
				<InputNumber />
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

export default EditHistory;
