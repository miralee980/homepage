import React, { useEffect } from "react";

const VideoScreen = props => {
	const { onVideoHeight, checkOnVideo } = props;
	useEffect(() => {
		onVideoHeight(window.innerHeight || document.body.clientHeight);
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [onVideoHeight]);

	const onScroll = e => {
		const scrollTop =
			e.srcElement.body.scrollTop || document.documentElement.scrollTop;
		checkOnVideo(scrollTop, window.innerHeight || document.body.clientHeight);
	};
	return (
		<div className="visual_wrap" id="visual_wrap">
			<div className="visual_inner">
				<div className="visual_circle">
					<p className="circle_tit">
						당신의 일상에
						<br />
						투자를 더하다
					</p>
					<p className="circle_txt">
						쉽고 편리한 자산관리, 모두의 일상으로 자리잡을 수 있게
					</p>
				</div>
				<div className="visual_circle_img">
					<img
						src={require("assets/images/img-m-circle.svg")}
						alt="visual_circle"
					/>
				</div>

				<div
					className="scroll_down"
					onClick={() => {
						props.onDownScroll();
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
				<video className="video" autoPlay loop muted>
					<source src={require("assets/video/main.MP4")} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default VideoScreen;
