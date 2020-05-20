import React from 'react';
import {Link} from 'react-router-dom';

const AuthMenu = () => {
  return(
<div>
             <ul className="nav nav-tabs bg-dark">
            <li className="nav-item">
                {/* <a  href="{{ url('/admin/login') }}">로그인</a> */}
                <Link to="/admin/login" className="nav-link">로그인</Link>
                
            </li>
            <li className="nav-item">
                {/* <a className="nav-link" href="{{ url('/admin/register') }}">사용자 등록</a> */}
                <Link to="/admin/register" className="nav-link">사용자 등록</Link>
            </li>
            </ul>
           
    </div>
  )}

  export default AuthMenu;