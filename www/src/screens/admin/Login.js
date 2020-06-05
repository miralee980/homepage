import React from "react";
import bcrypt from "bcryptjs";

import { Form, Input, Button, Checkbox, Space, message } from "antd";

const layout = {
	labelCol: {
		span: 4,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 4,
		span: 16,
	},
};

const Login = () => {
	const success = msg => {
		message.success(msg);
	};

	const error = text => {
		message.error(text);
	};
	const loginApi = async userInfo => {
		console.log("loginApi record = "); // API 연결
		console.log(userInfo);
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ userInfo }),
		};
		const response = await fetch("/user/login", requestOptions);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") success(body.message);
		else error(body.message);
	};
	const onFinish = values => {
		console.log("Success:", values);
		loginApi(values);
		// bcrypt.hash(values.password, 10, function (err, hash) {
		// 	console.log(hash);
		// 	// var test = "$2y$10$3NF4rnyQlsiBSyNkKZz85eGHL7kCoWfdBOQToGI2Rulq.9ik4AMcy";
		// 	// var finalNodeGeneratedHash = test.replace("$2y$", "$2a$");
		// 	// bcrypt.compare(values.password, test, function (err, res) {
		// 	// 	console.log(res);
		// 	// });
		// 	var userInfo = values;
		// 	userInfo.password = hash;

		// });
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
					remember: true,
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
							message: "Please input your username!",
						},
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
							message: "Please input your password!",
						},
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

// ReactDOM.render(<Demo />, mountNode);

// const Login = () => {
//   return (
//     <div className="row card" style={{ width: "18rem", margin: "auto" }}>
//       <div className="card-body">
//         <h3>로그인</h3>
//         <form method="post" action="/admin/login">
//           <div className="row">
//             <div className="form-group" style={{ margin: "auto" }}>
//               <label for="inputId" className="bmd-label-floating">
//                 계정(이메일)
//               </label>
//               email
//               <input
//                 name="email"
//                 type="text"
//                 className="form-control"
//                 id="inputId"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="form-group" style={{ margin: "auto" }}>
//               <label for="inputPassword" className="bmd-label-floating">
//                 비밀번호
//               </label>
//               password
//               <input
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 id="inputPassword"
//               />
//             </div>
//           </div>
//           <br />
//           <div style={{ textAlign: "center" }}>
//             <button type="submit" className="btn btn-primary btn-raised">
//               로그인
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
export default Login;
