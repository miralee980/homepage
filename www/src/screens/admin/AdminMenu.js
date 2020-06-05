import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
	return (
		<div>
			<ul className="nav nav-tabs bg-dark">
				<li className="nav-item">
					{/* <a className="nav-link active" href="/admin/dashboard">Dashboard</a> */}
					<Link to="/admin/dashboard" className="nav-link">
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					{/* <a className="nav-link" href="/admin/companyInfo">회사정보</a> */}
					<Link to="/admin/companyInfo" className="nav-link">
						회사정보
					</Link>
				</li>
				<li className="nav-item">
					{/* <a className="nav-link" href="/admin/users">사용자 관리</a> */}
					<Link to="/admin/userinfo" className="nav-link">
						사용자 관리
					</Link>
				</li>
				<li className="nav-item">
					{/* <a className="nav-link" href="/admin/companyHistory">연혁관리</a> */}
					<Link to="/admin/history" className="nav-link">
						연혁관리
					</Link>
				</li>
				<li className="nav-item">
					{/* <a className="nav-link" href="/admin/news">언론관리</a> */}
					<Link to="/admin/news" className="nav-link">
						언론관리
					</Link>
				</li>
				<li className="nav-item dropdown" style={{ margin: "auto" }}>
					{/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> */}
					이미라 <span className="caret"></span>
					{/* </a>b */}
					{/* <ul className="dropdown-menu" role="menu">
                    <li><a href="{{ url('/admin/logout') }}"><i className="fa fa-btn fa-sign-out"></i>로그아웃</a></li>
                </ul> */}
				</li>
			</ul>
		</div>
	);
};

export default AdminMenu;
