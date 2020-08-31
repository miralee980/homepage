import React, { useState, useEffect } from "react";
import { Modal, Space, Form, Input, Button, DatePicker, Select } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;
const EditRecruit = (props) => {
	const data = props.record;
	const [form] = Form.useForm();
	const [recruit_type, setRecruitType] = useState(data.recruit_type);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});

	const onValuesChange = (value) => {
		setRecruitType(value);
	};

	const onFinish = (values) => {
		const rangeValue = values["range_picker"];
		console.log(rangeValue);
		if (recruit_type === "채용기간") {
			values.recruit.start_at = rangeValue[0].format("yyyy-MM-DD");
			values.recruit.end_at = rangeValue[1].format("yyyy-MM-DD");
		} else {
			values.recruit.start_at = "";
			values.recruit.end_at = "";
		}

		if (data.id > 0) {
			values.recruit.id = data.id;
			props.update(values.recruit);
		} else props.save(values.recruit);
	};
	const { confirm } = Modal;
	const cancelConfirm = () => {
		confirm({
			title: "Do you want to cancel?",
			icon: <ExclamationCircleOutlined />,
			content: "채용공고 입력을 취소하시겠습니까?",
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

	const rangeConfig = {
		rules: [
			{
				type: "array",
				required: true,
				message: "Please select day"
			}
		]
	};

	return (
		<Form
			layout="vertical"
			name="nest-messages"
			onFinish={onFinish}
			validateMessages={validateMessages}
			form={form}
		>
			<Form.Item
				name={["recruit", "title"]}
				label="채용 내용"
				rules={[
					{
						required: true
					}
				]}
				initialValue={data.title}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["recruit", "part"]}
				label="채용 파트"
				rules={[
					{
						required: true
					}
				]}
				initialValue={data.part}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["recruit", "link"]}
				label="채용 사이트 링크"
				rules={[
					{
						required: true
					}
				]}
				initialValue={data.link}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name={["recruit", "career"]}
				label="경력"
				initialValue={data.career}
			>
				<Select placeholder="Select a type of career" allowClear>
					<Option value="신입">신입</Option>
					<Option value="경력">경력</Option>
					<Option value="인턴">인턴</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name={["recruit", "work_type"]}
				label="근무형태"
				initialValue={data.work_type}
			>
				<Select placeholder="Select a type of work" allowClear>
					<Option value="정규직">정규직</Option>
					<Option value="계약직">계약직</Option>
					<Option value="아르바이트">아르바이트</Option>
					<Option value="인턴">인턴</Option>
				</Select>
			</Form.Item>
			<Form.Item
				name={["recruit", "recruit_type"]}
				label="채용타입"
				initialValue={data.recruit_type}
			>
				<Select
					placeholder="Select a type of recruit"
					onChange={onValuesChange}
					allowClear
				>
					<Option value="상시">상시</Option>
					<Option value="채용기간">채용기간</Option>
					<Option value="마감">마감</Option>
				</Select>
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) =>
					prevValues.recruit.recruit_type !== currentValues.recruit.recruit_type
				}
			>
				{recruit_type === "채용기간" ? (
					<Form.Item
						name={"range_picker"}
						label="채용기간"
						{...rangeConfig}
						rules={[{ required: true }]}
					>
						<RangePicker
							defaultValue={
								data.start_at && data.end_at
									? [
											moment(data.start_at, dateFormat),
											moment(data.end_at, dateFormat)
									  ]
									: null
							}
						/>
					</Form.Item>
				) : null}
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

export default EditRecruit;
