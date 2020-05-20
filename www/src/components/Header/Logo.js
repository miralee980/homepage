import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'assets/images/quantec_logo.png';

const Logo = (props) => {
  return (
    <Link to="/">
      <img  className="logo"src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
