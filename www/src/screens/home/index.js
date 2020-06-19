import React, { useState } from "react";
import "styles/main.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Location from "components/Location";
import VideoScreen from "./VideoScreen";
import MoneyPot from "./MoneyPot";
import Ira from "./Ira";
import Qosk from "./Qosk";
import Partners from "./Partners";
import MainPress from "./MainPress";

const Home = () => {
	const [isVideo, checkVideo] = useState(true);
	const [videoHeight, setVideoHeight] = useState(0);
	const [moneypotHeight, setMoneypotHeight] = useState(0);
	const [iraHeight, setIraHeight] = useState(0);
	const [qoskHeight, setQoskHeight] = useState(0);

	const onVideoHeight = height => {
		setVideoHeight(height);
	};
	const onMoneypotHeight = height => {
		setMoneypotHeight(height);
	};
	const onIraHeight = height => {
		setIraHeight(height);
	};
	const onQoskHeight = height => {
		setQoskHeight(height);
	};

	const onMoneyPotScroll = () => {
		window.scrollTo(0, videoHeight);
	};
	const onIraScroll = () => {
		window.scrollTo(0, videoHeight + moneypotHeight);
	};
	const onQoskScroll = () => {
		window.scrollTo(0, videoHeight + moneypotHeight + iraHeight);
	};

	const checkOnVideo = (scrollTop, height) => {
		if (scrollTop > height) checkVideo(false);
		else checkVideo(true);
	};

	return (
		<div>
			<Header isVideo={isVideo} />
			<div className="main_content">
				{/* FULL SCREEN VIDEO */}
				<VideoScreen
					onVideoHeight={onVideoHeight}
					onDownScroll={onMoneyPotScroll}
					checkOnVideo={checkOnVideo}
				/>
				{/* MONEYPOT */}
				<MoneyPot
					onMoneypotHeight={onMoneypotHeight}
					onMoneyPotScroll={onMoneyPotScroll}
					onIraScroll={onIraScroll}
					onQoskScroll={onQoskScroll}
				/>
				{/* IRA */}
				<Ira
					onIraHeight={onIraHeight}
					onMoneyPotScroll={onMoneyPotScroll}
					onIraScroll={onIraScroll}
					onQoskScroll={onQoskScroll}
				/>
				{/* QOSK */}
				<Qosk
					onQoskHeight={onQoskHeight}
					onMoneyPotScroll={onMoneyPotScroll}
					onIraScroll={onIraScroll}
					onQoskScroll={onQoskScroll}
				/>
				<div className="m_section4">
					{/* PARTNERS */}
					<Partners />
					{/* PRESS */}
					<MainPress />
					{/* LOCATION */}
					<Location />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
