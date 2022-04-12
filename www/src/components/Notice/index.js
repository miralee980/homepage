import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SNS from "components/SNS/index";
import "styles/footer.css";

function Notice() {
	const [showNotice, setShowNotice] = useState(true);

	return (
		<div className="notice">
			{showNotice ? (
				<>
					{/* <Link to="/offerPrice"> */}
					<img
						className="notice_image"
						src={require("assets/images/notice/QuantecAppReleaseInfo.png")}
						alt="next"
						onClick={() => {
							setShowNotice(false);
						}}
					/>
					{/* </Link> */}
					<img
						className="notice_close"
						src={require("assets/images/notice/Btn_close.png")}
						alt="next"
						onClick={() => {
							setShowNotice(false);
						}}
					/>
				</>
			) : (
				<></>
			)}
		</div>
	);
}

export default Notice;
