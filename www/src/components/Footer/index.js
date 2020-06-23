import React, { useState, useEffect } from "react";
import SNS from "components/SNS/index";
import "styles/footer.css";

function Footer() {
	const [companyInfo, setCompanyInfo] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("/api/quantec/companyInfo");
			const body = await res.json();
			if (body.status === "OK") return setCompanyInfo(body.data);
		}
		fetchData();
	}, []);

	return (
		<div className="footer">
			<div className="footer_inner">
				<div className="footer_location">
					<div className="location_location">
						<p className="location_tit font_white">LOCATION</p>
						<span className="location_txt font_white">
							{companyInfo.location}
						</span>
						<span className="location_txt font_white">
							{companyInfo.location_en}
						</span>
					</div>

					<div className="location_contact">
						<p className="location_tit font_white">INFORMATION</p>
						<span className="location_txt font_white">{companyInfo.email}</span>
						<span className="location_txt font_white">{companyInfo.tel}</span>
					</div>

					<div className="location_way">
						<p className="location_tit font_white">WAY TO GO</p>
						<span className="location_txt font_white">
							{companyInfo.other1}
						</span>
						<span className="location_txt font_white">
							Bus: {companyInfo.other2}
						</span>
					</div>
				</div>

				<div className="footer_info">
					<span className="footer_txt">상호 {companyInfo.company_name}</span>
					<span className="footer_txt">대표 {companyInfo.ceo_name}</span>
					<span className="footer_txt">
						사업자등록번호 {companyInfo.company_registration_number}
					</span>
				</div>

				<SNS position="footer" snsColor="" mobile={false} />
			</div>
		</div>
	);
}

export default Footer;
