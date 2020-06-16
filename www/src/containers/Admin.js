import React from "react";
import AdminMenu from "screens/admin/AdminMenu";
import AdminRoutes from "screens/admin/AdminRoutes";
import { BrowserRouter } from "react-router-dom";
import "styles/contents.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";

class Admin extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<AdminMenu />
					<div>
						<AdminRoutes />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}
export default Admin;
