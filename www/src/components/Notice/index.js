import React, { useState, useEffect } from "react";
import SNS from "components/SNS/index";
import "styles/footer.css";

function Notice() {
	const [showNotice, setShowNotice] = useState(true);

	return (
		<div className="notice">
			{showNotice ? (
				<>
					<a
						href="https://gather.town/invite?token=qH7lxr8NHREHbHtM_8OPGGofzFnZE-PY"
						target="_blank"
						rel="gather town"
					>
						<img
							className="notice_image"
							src={require("assets/images/MicrosoftTeams-image.png")}
							alt="next"
							// onClick={() => {
							// 	setShowNotice(false);
							// }}
						/>
					</a>
					<img
						className="notice_close"
						src={require("assets/images/MicrosoftTeams-close.png")}
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
