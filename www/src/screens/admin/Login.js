import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "actions/";

import { Form, Input, Button, Checkbox, Space, message } from "antd";

const layout = {
	labelCol: {
		span: 4
	},
	wrapperCol: {
		span: 16
	}
};
const tailLayout = {
	wrapperCol: {
		offset: 4,
		span: 16
	}
};

const Login = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(state => state.currentUser);

	useEffect(() => {
		if (currentUser.token && currentUser.isLoggedIn) {
			success(currentUser.message);
		} else if (
			!currentUser.isLoggedIn &&
			!currentUser.fetchingUdate &&
			currentUser.message
		) {
			error(currentUser.message);
		}
	}, [currentUser]);
	const success = msg => {
		message.success(msg);
	};

	const error = text => {
		message.error(text);
	};

	const onFinish = values => {
		console.log("Success:", values);
		dispatch(allActions.userActions.login(values.email, values.password));
	};

	const onFinishFailed = errorInfo => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Space
			align="center"
			style={{ height: "500px", display: "block", marginTop: "100px" }}
		>
			<Form
				{...layout}
				name="basic"
				initialValues={{
					remember: true
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: "Please input your username!"
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!"
						}
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item {...tailLayout} name="remember" valuePropName="checked">
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item {...tailLayout}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</Space>
	);
};

export default Login;
