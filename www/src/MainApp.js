import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "screens/home";
import About from "screens/about";
import Career from "screens/career";
import PRCenter from "screens/pr";
import Admin from "./containers/Admin";

const MainApp = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/career" component={Career} />
			<Route path="/prcenter" component={PRCenter} />
			<Route path="/admin" component={Admin} />
		</Switch>
	);
};
export default MainApp;
