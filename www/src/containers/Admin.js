import React from "react";
import AdminMenu from "screens/admin/AdminMenu";
import AdminRoutes from "screens/admin/AdminRoutes";
import { BrowserRouter } from "react-router-dom";

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
