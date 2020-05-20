import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import App from './containers/App';
import Admin from './containers/Admin';
import Auth from './containers/Auth';
import { queryByDisplayValue } from '@testing-library/react';

// class MainApp extends Component {
//     constructor(props){
//         super(props);
//         console.log(this.props);
//     }

//     render() {
//         if(this.props.mathch.path === '/')
//         return( <Redirect to={'/app'} />);

//         return (
//             <BrowserRouter>
//     <Switch>

//             <Route path="/app" component={App}/>
//             <Route path="/admin" component={Admin}/>
//             <Route path="/auth" component={Auth}/>
//             </Switch>
// </BrowserRouter>
//         )
//     }
// }

const MainApp = () => {
return(
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/admin" component={Admin}/>
        {/* <Route path="/auth" component={Auth}/> */}
       
        {/* if(this.props.match.path === '/')
            return (<Redirect to={'/app'}/>)
        else if(this.props.match.path === '/admin')
           if(this.login)
                return (<Redirect to ={'/admin'}/>)
            else
                return (<Redirect to ={'/auth/login'}/>) */}
           
    </Switch>
)}
export default MainApp;