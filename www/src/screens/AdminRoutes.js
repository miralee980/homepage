import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Main from "screens/Main";
// import Company from "screens/Company";
// import Career from "screens/Career";
// import PRCenter from "screens/PRCenter";
import CompanyInfo from "screens/admin/Companyinfo";
import UserInfo from "screens/admin/UserInfo";
import History from "screens/admin/History";
import News from "screens/admin/News";
import Login from "screens/admin/Login";
import Register from "screens/admin/Register";

export default () => {
    return(
    <div>
        <Switch>
          <Route exact path="/admin" component={CompanyInfo} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/register" component={Register} />
          <Route exact path="/admin/userinfo" component={UserInfo} />
          <Route exact path="/admin/history" component={History} />
          <Route exact path="/admin/news" component={News} />
        </Switch>
    </div>
    );
}