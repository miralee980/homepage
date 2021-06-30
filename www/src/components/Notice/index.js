import React, { useState, useEffect } from "react";
import SNS from "components/SNS/index";
import "styles/footer.css";

function Notice() {
	const [showNotice, setShowNotice] = useState(true);

	return (
		<div className="notice">
			{showNotice ? (
				<img
					className="notice_image"
					src={require("assets/images/notice.png")}
					alt="next"
					onClick={() => {
						setShowNotice(false);
					}}
				/>
			) : (
				<></>
			)}
		</div>
	);
}

export default Notice;
