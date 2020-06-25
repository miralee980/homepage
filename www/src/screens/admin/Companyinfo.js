import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Form, Input, Card, Button, message } from "antd";
import NeedLogin from "./NeedLogin";
import NeedAuth from "./NeedAuth";
class CompanyInfo extends Component {
	state = {
		companyInfo: "",
		completed: 0
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ companyInfo: res.data, completed: 1 }))
			.catch(err => console.log(err));
	}

	success = text => {
		message.success(text);
	};

	error = text => {
		message.error(text);
	};

	callApi = async () => {
		const { currentUser } = this.props;
		const requestOptions = {
			method: "GET",
			headers: {
				"x-access-token": currentUser.token
			}
		};
		const response = await fetch(
			"/api/admin/company/companyInfo",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") return body;
		else console.log(body.message);
	};

	saveApi = async companyInfo => {
		const { currentUser } = this.props;
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-access-token": currentUser.token
			},
			body: JSON.stringify({ companyInfo })
		};
		const response = await fetch(
			"/api/admin/company/updateCompanyInfo",
			requestOptions
		);
		const body = await response.json();
		console.log(body);
		if (body.status === "OK") this.success(body.message);
		else this.error(body.message);
	};

	handleSubmit = values => {
		console.log(values);
		values.id = this.state.companyInfo.id;
		this.saveApi(values);
	};

	render() {
		const { currentUser } = this.props;
		const comInfo = this.state.companyInfo;
		return (
			<>
				<h1>회사정보 관리</h1>
				{!currentUser.isLoggedIn ? (
					<NeedLogin />
				) : currentUser.authLevel !== 100 ? (
					<NeedAuth />
				) : this.state.completed ? (
					<Card
						bordered={false}
						style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
					>
						<Form layout="vertical" onFinish={this.handleSubmit}>
							<Form.Item
								label="회사(상호)명"
								name="company_name"
								initialValue={comInfo.company_name}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="대표자"
								name="ceo_name"
								initialValue={comInfo.ceo_name}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="사업자등록번호"
								name="company_registration_number"
								initialValue={comInfo.company_registration_number}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="주소"
								name="location"
								initialValue={comInfo.location}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="영문 주소"
								name="location_en"
								initialValue={comInfo.location_en}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="홈페이지 주소"
								name="homepage_url"
								initialValue={comInfo.homepage_url}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="이메일 주소"
								name="email"
								initialValue={comInfo.email}
							>
								<Input type="email" />
							</Form.Item>
							<Form.Item label="전화번호" name="tel" initialValue={comInfo.tel}>
								<Input />
							</Form.Item>
							<Form.Item label="FAX" name="fax" initialValue={comInfo.fax}>
								<Input />
							</Form.Item>
							<Form.Item
								label="기타 정보1"
								name="other1"
								initialValue={comInfo.other1}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="기타 정보2"
								name="other2"
								initialValue={comInfo.other2}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="기타 정보3"
								name="other3"
								initialValue={comInfo.other3}
							>
								<Input disabled />
							</Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form>
					</Card>
				) : (
					<Card
						bordered={false}
						style={{ width: "90%", marginLeft: "5%", marginRight: "5%" }}
						size="large"
					>
						<Spin size="large" />
					</Card>
				)}
			</>
		);
	}
}

function mapStateToProps(state) {
	return { currentUser: state.currentUser };
}

export default connect(mapStateToProps)(CompanyInfo);
