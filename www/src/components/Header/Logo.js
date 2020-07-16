import React from "react";
import { Link } from "react-router-dom";
const FULL_SCREEN_VIDEO = 1;
const Logo = (props) => {
	return (
		<div className="header_logo" onClick={() => window.scrollTo(0, 0)}>
			<Link
				to="/"
				onClick={() => {
					if (props.gotoVideo) props.gotoVideo.silentMoveTo(FULL_SCREEN_VIDEO);
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
