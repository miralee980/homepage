import React, { useEffect } from "react";
const MONEYPOT_INDEX = 1;

const VideoScreen = (props) => {
	return (
		<div className="visual_wrap" id="visual_wrap">
			<div className="visual_inner">
				<div class="type_wrap">
					<img
						src={require("assets/images/main_title.gif")}
						alt="main_title"
						class="main_title"
					/>
				</div>

				<div
					className="scroll_down"
					onClick={() => {
						props.fullpageApi.moveSectionDown();
					}}
				>
					<img
						src={require("assets/images/ic-m-arrowdown-blue.svg")}
						alt="scroll_down"
						className="ic_scroll_down"
					/>
				</div>
			</div>

			<div className="video_wrap">
				<video className="video" data-autoPlay loop muted>
					<source src={require("assets/video/main.MP4")} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default VideoScreen;
