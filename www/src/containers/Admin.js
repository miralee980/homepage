import React from 'react';
import CompanyInfo from "screens/admin/Companyinfo";
import UserInfo from "screens/admin/UserInfo";
import History from "screens/admin/History";
import AdminMenu from "screens/admin/AdminMenu";
import News from "screens/admin/News";
import { Route, Switch } from 'react-router-dom';
import AdminRoutes from 'screens/AdminRoutes';
import {BrowserRouter} from 'react-router-dom';

class Admin extends React.Component {
  render() {
    return (
      <BrowserRouter>
      
      <div>
        <AdminMenu/>
        <div>
          <AdminRoutes />
        </div>
        {/* <Switch>
          <Route exact path="/admin" component={CompanyInfo} />
          <Route exact path="/admin/userinfo" component={UserInfo} />
          <Route exact path="/admin/history" component={History} />
          <Route exact path="/admin/news" component={News} />
        </Switch> */}
      </div>
      </BrowserRouter>
    )
  }
}
export default Admin;
