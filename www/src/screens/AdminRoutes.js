import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import Main from "screens/Main";
// import Company from "screens/Company";
// import Career from "screens/Career";
// import PRCenter from "screens/PRCenter";
import Dashboard from "screens/admin/Dashboard";
import CompanyInfo from "screens/admin/Companyinfo";
import UserInfo from "screens/admin/UserInfo";
import History from "screens/admin/History";
import News from "screens/admin/News";
import Login from "screens/admin/Login";
import Register from "screens/admin/Register";

export default () => {
	const [token, setToken] = useState("");
	const [hasToken, setHasToken] = useState(false);

	// useEffect(() => {
	// 	if (token) {
	// 		setHasToken(true);
	// 	}
	// }, token);

	return (
		<div>
			{!hasToken ? (
				<Redirect to="/admin/login" />
			) : (
				<Redirect to="/admin/companyInfo" />
			)}
			<Switch>
				{/* <Route exact path="/login" component={Login} /> */}
				<Route
					exact
					path="/admin/login"
					render={routerProps => {
						return (
							<Login
								{...routerProps}
								setToken={setToken}
								setHasToken={setHasToken}
							/>
						);
					}}
				/>
				<Route exact path="/admin/dashboard" component={Dashboard} />
				<Route exact path="/admin/companyInfo" component={CompanyInfo} />
				{/* <Route
					exact
					path="/admin/companyInfo"
					render={routerProps => {
						// console.log(token);
						return <CompanyInfo {...routerProps} token={token} />;
					}}
				/> */}
				<Route exact path="/admin/register" component={Register} />
				<Route exact path="/admin/userinfo" component={UserInfo} />
				<Route exact path="/admin/history" component={History} />
				<Route exact path="/admin/news" component={News} />
			</Switch>
		</div>
	);
};
