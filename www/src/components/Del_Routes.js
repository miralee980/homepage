import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "screens/Main";
import Company from "screens/Company";
import Career from "screens/Career";
import PRCenter from "screens/PRCenter";

export default () => {
    return(
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/prcenter" component={PRCenter} />
        </Switch>
    </div>
    );
}