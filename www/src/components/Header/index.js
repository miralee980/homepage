import React, { useState, useEffect } from "react";
import "styles/header.css";
import { Link } from "react-router-dom";

const Header = props => {
	const [headerStyle, setHeaderStyle] = useState({
		background: props.isVideo
			? { backgroundColor: "" }
			: { backgroundColor: "white" },
		logoColor: props.isVideo ? "white" : "blue",
		gnbColor: props.isVideo ? { color: "white" } : { color: "black" },
		snsColor: props.isVideo ? "white" : "black",
	});

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
	return (
		<header className="header" style={headerStyle.background}>
			<div className="header_inner">
				{/* <!-- 로고 아이콘 영역 --> */}
				<div className="header_logo">
					<Link to="/">
						<img
							src={require(`assets/images/logo-header-q-${headerStyle.logoColor}.svg`)}
							alt="logo"
						/>
					</Link>
				</div>

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
								to="/career"
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
					<ul className="pc_sns_list">
						<li className="pc_sns_item">
							<a
								href="https://www.facebook.com/quantec.investment/"
								target="_blank"
							>
								<img
									src={require(`assets/images/ic-header-facebook-${headerStyle.snsColor}.svg`)}
									alt="facebook"
								/>
							</a>
						</li>
						<li className="pc_sns_item">
							<a href="https://post.naver.com/quantec0330" target="_blank">
								<img
									src={require(`assets/images/ic-header-blog-${headerStyle.snsColor}.svg`)}
									alt="blog"
								/>
							</a>
						</li>
						<li className="pc_sns_item">
							<a href="#">
								<img
									src={require(`assets/images/ic-header-kakao-${headerStyle.snsColor}.svg`)}
									alt="kakao"
								/>
							</a>
						</li>
						<li className="pc_sns_item">
							<a
								href="https://www.linkedin.com/company/quantec-investment"
								target="_blank"
							>
								<img
									src={require(`assets/images/ic-header-linkedin-${headerStyle.snsColor}.svg`)}
									alt="linkedin"
								/>
							</a>
						</li>
					</ul>
				</div>

				{/* <!-- //PC Header --> */}

				{/* <!-- Mobile Menu --> */}
				{/* <!-- 모바일 메뉴 아이콘 영역 --> */}
				<div className="mobile_menu">
					<a href="m_header_open.html">
						<img
							src={require(`assets/images/ic-header-menu-${headerStyle.snsColor}.svg`)}
							alt="menu"
						/>
					</a>
				</div>
			</div>
		</header>
	);
};
export default Header;
