import React from 'react';
import Login from "screens/admin/Login";
import AuthMenu from "screens/admin/AuthMenu";
import Register from "screens/admin/Register";
import { Route } from 'react-router-dom';

class Auth extends React.Component {
  render() {
    let test = 1;
    return (
      <div className="app">
        <AuthMenu/>
        <Route exact path="/auth" component={Login} />
        <Route exact path="/auth/register" component={Register} />

      </div>
    )
  }
}
export default Auth;
