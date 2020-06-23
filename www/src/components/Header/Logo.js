import React from "react";
import { Link } from "react-router-dom";

const Logo = props => {
	return (
		<div className="header_logo">
			<Link to="/">
				<img
					src={require(`assets/images/logo-header-q-${props.logoColor}.svg`)}
					alt="logo"
				/>
			</Link>
		</div>
	);
};

export default Logo;
