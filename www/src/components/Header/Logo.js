import React from "react";
import { Link } from "react-router-dom";

const Logo = props => {
	return (
		<div className="header_logo" onClick={() => window.scrollTo(0, 0)}>
			<Link
				to="/"
				onClick={() => {
					if (props.gotoVideo) props.gotoVideo(0);
					else console.log("test");
				}}
			>
				<img
					src={require(`assets/images/logo-header-q-${props.logoColor}.svg`)}
					alt="logo"
				/>
			</Link>
		</div>
	);
};

export default Logo;
