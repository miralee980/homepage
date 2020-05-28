import React from "react";
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

const EditNews = props => {
  const onFinish = values => {
    console.log(values);
    values.history.did_at = values.history.did_at.clone().format();
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
    types: {
      type: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
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
        name={["history", "did_at"]}
        label="일자"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={moment(props.record.did_at, dateFormat)}
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
        initialValue={props.record.desc}
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
        initialValue={props.record.type}
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

export default EditNews;
