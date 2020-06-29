import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import allActions from "actions/";

const { Header } = Layout;

const AdminMenu = () => {
	const currentUser = useSelector(state => state.currentUser);
	const dispatch = useDispatch();
	const [selectedMenu, setSelectMenu] = useState("9");

	const onLogout = () => {
		dispatch(allActions.userActions.logout());
	};

	useEffect(() => {
		console.log(currentUser.isLoggedIn);
		if (currentUser.isLoggedIn) {
			setSelectMenu("1");
		} else {
			setSelectMenu("9");
		}
	}, [currentUser.isLoggedIn]);

	const onClickHandler = e => {
		setSelectMenu(e.key);
	};

	return (
		<Header>
			<Menu
				theme="dark"
				mode="horizontal"
				selectedKeys={[selectedMenu]}
				onClick={onClickHandler}
			>
				<Menu.Item key="1">
					<Link to="/admin/dashboard">Dashboard</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/admin/companyInfo">회사 정보</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/admin/userinfo">사용자 관리</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link to="/admin/history">연혁 관리</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link to="/admin/news">언론 관리</Link>
				</Menu.Item>
				<Menu.Item key="6">
					<Link to="/admin/SNS">소셜 관리</Link>
				</Menu.Item>
				<Menu.Item key="7">
					<Link to="/admin/partner">파트너 관리</Link>
				</Menu.Item>
				<Menu.Item key="8">
					<Link to="/admin/recruit">채용 관리</Link>
				</Menu.Item>
				<Menu.Item key="9">
					{!currentUser.isLoggedIn ? (
						<Link to="/admin/login">로그인</Link>
					) : (
						<div onClick={onLogout}>로그아웃</div>
					)}
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default AdminMenu;
