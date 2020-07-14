import React, { useState, useEffect, useCallback } from "react";

import ReactPageScroller from "components/ReactPageScroller";
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
		<div className="m_section4">
			<Partners />
			<MainPress />
			<Location />
			<Footer />
		</div>
	);
};

const Home = () => {
	const [isVideo, checkVideo] = useState(true);
	const [showBottom, setShowBottom] = useState(false);
	const [currentPage, setCurrentPage] = useState(null);

	const handlePageChange = number => {
		setCurrentPage(number);
	};

	const hiddenBottomScroll = hidden => {
		if (hidden) {
			setShowBottom(false);
		} else {
			setShowBottom(true);
		}
	};

	return (
		<div>
			<Header isVideo={isVideo} gotoVideo={setCurrentPage} />
			<div className="main_content">
				<ReactPageScroller
					hiddenBottomScroll={hiddenBottomScroll}
					hiddenBottomIndex={3}
					checkVideo={checkVideo}
					renderAllPagesOnFirstRender={true}
					pageOnChange={handlePageChange}
					customPageNumber={currentPage}
				>
					{/* FULL SCREEN VIDEO */}
					<VideoScreen setCurrentPage={setCurrentPage} />
					{/* MONEYPOT */}
					<MoneyPot setCurrentPage={setCurrentPage} />
					{/* IRA */}
					<Ira setCurrentPage={setCurrentPage} />
					{/* QOSK */}
					<Qosk setCurrentPage={setCurrentPage} />
				</ReactPageScroller>
			</div>
			{showBottom ? <Bottom /> : null}
		</div>
	);
};

export default Home;
