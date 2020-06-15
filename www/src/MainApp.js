import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "screens/Main";
import Company from "screens/Company";
import Career from "screens/Career";
import PRCenter from "screens/PRCenter";
import Admin from "./containers/Admin";

const MainApp = () => {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/company" component={Company} />
			<Route path="/career" component={Career} />
			<Route path="/prcenter" component={PRCenter} />
			<Route path="/admin" component={Admin} />
		</Switch>
	);
};
export default MainApp;
