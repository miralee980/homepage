import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "screens/admin/Dashboard";
import CompanyInfo from "screens/admin/Companyinfo";
import UserInfo from "screens/admin/UserInfo";
import History from "screens/admin/History";
import News from "screens/admin/News";
import Login from "screens/admin/Login";
import Register from "screens/admin/Register";

export default () => {
	const currentUser = useSelector(state => state.currentUser);

	return (
		<div>
			{currentUser.token && currentUser.isLoggedIn ? (
				<Redirect to="/admin/dashboard" />
			) : (
				<Redirect to="/admin/login" />
			)}
			<Switch>
				<Route
					exact
					path="/admin/login"
					render={routerProps => {
						return <Login />;
					}}
				/>
				<Route exact path="/admin/dashboard" component={Dashboard} />
				<Route exact path="/admin/companyInfo" component={CompanyInfo} />
				<Route exact path="/admin/register" component={Register} />
				<Route exact path="/admin/userinfo" component={UserInfo} />
				<Route exact path="/admin/history" component={History} />
				<Route exact path="/admin/news" component={News} />
			</Switch>
		</div>
	);
};
