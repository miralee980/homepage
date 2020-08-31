import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "screens/admin/Dashboard/index";
import OldDashboard from "screens/admin/Dashboard/OldDashboard";
import CompanyInfo from "screens/admin/Company/Companyinfo";
import UserInfo from "screens/admin/User/UserInfo";
import HistoryInfo from "screens/admin/History/HistoryInfo";
import NewsInfo from "screens/admin/News/NewsInfo";
import Login from "screens/admin/Login";
import Register from "screens/admin/Register";
import SNSInfo from "screens/admin/SNS/SNSInfo";
import PartnerInfo from "screens/admin/Partner/PartnerInfo";
import RecruitInfo from "screens/admin/Recruit/RecruitInfo";

export default () => {
	const currentUser = useSelector((state) => state.currentUser);

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
					render={(routerProps) => {
						return <Login />;
					}}
				/>
				<Route exact path="/admin/dashboard" component={Dashboard} />
				<Route exact path="/admin/oldDashboard" component={OldDashboard} />
				<Route exact path="/admin/companyInfo" component={CompanyInfo} />
				<Route exact path="/admin/register" component={Register} />
				<Route exact path="/admin/userinfo" component={UserInfo} />
				<Route exact path="/admin/history" component={HistoryInfo} />
				<Route exact path="/admin/news" component={NewsInfo} />
				<Route exact path="/admin/sns" component={SNSInfo} />
				<Route exact path="/admin/partner" component={PartnerInfo} />
				<Route exact path="/admin/recruit" component={RecruitInfo} />
			</Switch>
		</div>
	);
};
