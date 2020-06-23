import React, { useState, useEffect, useLayoutEffect } from "react";
import "styles/header.css";
import { Link } from "react-router-dom";
import Logo from "components/Header/Logo";
import SNS from "components/SNS/index";

const Header = props => {
	const [headerStyle, setHeaderStyle] = useState({
		background: props.isVideo
			? { backgroundColor: "" }
			: { backgroundColor: "white" },
		logoColor: props.isVideo ? "white" : "blue",
		gnbColor: props.isVideo ? { color: "white" } : { color: "black" },
		snsColor: props.isVideo ? "white" : "black",
	});

	const [mobileMenu, setMobileMenu] = useState(false);

	useEffect(() => {
		const style = {
			background: props.isVideo
				? { backgroundColor: "" }
				: { backgroundColor: "white" },
			logoColor: props.isVideo ? "white" : "blue",
			gnbColor: props.isVideo ? { color: "white" } : { color: "black" },
			snsColor: props.isVideo ? "white" : "black",
		};
		setHeaderStyle(style);
	}, [props.isVideo]);

	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth > 991) setMobileMenu(false);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	return (
		<header className="header" style={headerStyle.background}>
			<div
				className="header_inner"
				style={mobileMenu ? { display: "none" } : { display: "inline-block" }}
			>
				{/* <!-- 로고 아이콘 영역 --> */}
				<Logo logoColor={headerStyle.logoColor} />

				{/* <!-- PC Header -->  */}
				{/* <!-- PC 메뉴 영역 --> */}
				<div className="pc_gnb">
					<ul className="pc_gnb_list">
						<li className="pc_gnb_item">
							<Link
								to="/about"
								className="pc_gnb_txt"
								style={headerStyle.gnbColor}
							>
								회사소개
							</Link>
						</li>
						<li className="pc_gnb_item">
							<Link
								to="/recruit"
								className="pc_gnb_txt"
								style={headerStyle.gnbColor}
							>
								인재채용
							</Link>
						</li>
						<li className="pc_gnb_item">
							<Link
								to="/prcenter"
								className="pc_gnb_txt"
								style={headerStyle.gnbColor}
							>
								홍보센터
							</Link>
						</li>
					</ul>
				</div>

				{/* <!-- PC SNS 영역--> */}
				<div className="pc_sns">
					<SNS
						position="header"
						snsColor={`-${headerStyle.snsColor}`}
						mobile={false}
					/>
				</div>

				{/* <!-- //PC Header --> */}

				{/* <!-- Mobile Menu --> */}
				{/* <!-- 모바일 메뉴 아이콘 영역 --> */}
				<div
					className="mobile_menu"
					onClick={() => {
						setMobileMenu(true);
					}}
				>
					<img
						src={require(`assets/images/ic-header-menu-${headerStyle.snsColor}.svg`)}
						alt="menu"
					/>
				</div>
			</div>
			<div
				id="m_menu_open"
				style={mobileMenu ? { display: "inline-block" } : { display: "none" }}
			>
				<div className="menu_wrap">
					<div className="menu_sns">
						<div
							className="ic_close"
							onClick={() => {
								setMobileMenu(false);
							}}
						>
							<img
								src={require("assets/images/ic-menu-close.svg")}
								alt="close"
							/>
						</div>

						<SNS position="header" snsColor="-black" mobile={true} />
					</div>

					<div className="menu_list">
						<Link to="/about" className="menu_gnb">
							회사소개
						</Link>
					</div>

					<div className="menu_list">
						<Link to="/recruit" className="menu_gnb">
							인재채용
						</Link>
					</div>

					<div className="menu_list">
						<Link to="/prcenter" className="menu_gnb">
							홍보센터
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
