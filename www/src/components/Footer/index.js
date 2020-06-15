import React, { useState, useEffect } from "react";
import "styles/footer.css";

function Footer() {
	const [companyInfo, setCompanyInfo] = useState({});

	async function fetchData() {
		const res = await fetch("/api/quantec/companyInfo");
		const body = await res.json();
		if (body.status === "OK") return setCompanyInfo(body.data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="footer">
			<div className="footer_inner">
				<div className="footer_location">
					<div className="location_location">
						<p className="location_tit font_white">LOCATION</p>
						<span className="location_txt font_white">
							서울특별시 영등포구 여의대로 14, 14층
						</span>
						<span className="location_txt font_white">
							14, Yeoui-daero, Yeongdeungpo-gu, Seoul, Republic of Korea
						</span>
					</div>

					<div className="location_contact">
						<p className="location_tit font_white">INFORMATION</p>
						<span className="location_txt font_white">info@quantec.co.kr</span>
						<span className="location_txt font_white">02.6339.2100</span>
					</div>

					<div className="location_way">
						<p className="location_tit font_white">WAY TO GO</p>
						<span className="location_txt font_white">
							Subway: 5호선 여의도역에서 500m 이내
						</span>
						<span className="location_txt font_white">Bus: 전경련회관</span>
					</div>
				</div>

				<div className="footer_info">
					<span className="footer_txt">상호 콴텍(주)</span>
					<span className="footer_txt">대표 이상근</span>
					<span className="footer_txt">사업자등록번호 114-86-80501</span>
				</div>

				<div className="footer_sns">
					<div className="footer_item">
						<a
							href="https://www.facebook.com/quantec.investment/"
							target="_blank"
						>
							<img
								src={require("assets/images/ic-footer-facebook.svg")}
								alt="facebook"
							/>
						</a>
					</div>
					<div className="footer_item">
						<a href="https://post.naver.com/quantec0330" target="_blank">
							<img
								src={require("assets/images/ic-footer-blog.svg")}
								alt="blog"
							/>
						</a>
					</div>
					<div className="footer_item">
						<a href="#">
							<img
								src={require("assets/images/ic-footer-kakao.svg")}
								alt="kakao"
							/>
						</a>
					</div>
					<div className="footer_item">
						<a
							href="https://www.linkedin.com/company/quantec-investment"
							target="_blank"
						>
							<img
								src={require("assets/images/ic-footer-linkedin.svg")}
								alt="linkedin"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
