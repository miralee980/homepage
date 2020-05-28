import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./containers/App";
import Admin from "./containers/Admin";

const MainApp = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
};
export default MainApp;
