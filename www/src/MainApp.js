import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "screens/home";
import About from "screens/about";
import Recruit from "screens/recruit";
import PRCenter from "screens/pr";
import Admin from "./containers/Admin";
import OfferPrice from "./screens/OfferPrice";

const MainApp = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/recruit" component={Recruit} />
			<Route path="/prcenter" component={PRCenter} />
			<Route path="/offerPrice" component={OfferPrice} />
			<Route path="/admin" component={Admin} />
		</Switch>
	);
};
export default MainApp;
