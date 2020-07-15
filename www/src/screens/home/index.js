import React, { useState, useEffect, useCallback } from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Header from "components/Header";
import Footer from "components/Footer";
import Location from "components/Location";
import VideoScreen from "./VideoScreen";
import MoneyPot from "./MoneyPot";
import Ira from "./Ira";
import Qosk from "./Qosk";
import Partners from "./Partners";
import MainPress from "./MainPress";

const Bottom = () => {
	return (
		<div className="m_section4" style={{ height: "auto" }}>
			<Partners />
			<MainPress />
			<Location />
			<Footer />
		</div>
	);
};
const Fullpage = ({ checkVideo }) => (
	<ReactFullpage
		scrollOverflow={true}
		afterLoad={(anchorLink, index) => {
			console.log("after Load", { anchorLink, index });
			console.log("after Load  " + index);
			if (anchorLink.index === 0 && index.index === 1) {
				checkVideo(false);
			}
		}}
		onLeave={(origin, destination, direction) => {
			console.log("onLeave event", { origin, destination, direction });
			if (origin.index === 1 && destination.index === 0 && direction === "up") {
				checkVideo(true);
			}
		}}
		render={({ state, fullpageApi }) => {
			return (
				<div id="fullpage-wiapper">
					{/* FULL SCREEN VIDEO */}
					<div className="section visual_wrap" style={{ width: "100vw" }}>
						<VideoScreen fullpageApi={fullpageApi} />
					</div>
					{/* MONEYPOT */}
					<div className="section m_section1" style={{ width: "100vw" }}>
						<MoneyPot fullpageApi={fullpageApi} />
					</div>
					{/* IRA */}
					<div className="section m_section2" style={{ width: "100vw" }}>
						<Ira fullpageApi={fullpageApi} />
					</div>
					{/* QOSK */}
					<div className="section m_section3" style={{ width: "100vw" }}>
						<Qosk fullpageApi={fullpageApi} />
					</div>
					<div
						className="section m_section4 fp-auto-height"
						style={{ width: "100vw" }}
					>
						<Bottom />
					</div>
				</div>
			);
		}}
	/>
);

const Home = () => {
	const [isVideo, checkVideo] = useState(true);

	return (
		<div>
			<Header isVideo={isVideo} gotoVideo={null} />
			<div className="main_content">
				<Fullpage checkVideo={checkVideo} />
			</div>
		</div>
	);
};

export default Home;
