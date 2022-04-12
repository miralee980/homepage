import React from "react";

function SNS({ position, snsColor, mobile, closeMenu }) {
	return (
		<ul
			className={
				position === "footer"
					? "footer_sns"
					: !mobile
					? "pc_sns_list"
					: "menu_sns_list"
			}
		>
			<li
				className={
					position === "footer"
						? "footer_item"
						: !mobile
						? "pc_sns_item"
						: "menu_sns_item"
				}
				onClick={() => (mobile ? closeMenu(false) : null)}
			>
				<a
					href="https://blog.naver.com/quantec_blog"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require(`assets/images/ic-${position}-blog${snsColor}.svg`)}
						alt="blog"
					/>
				</a>
			</li>
			{/* <li
				className={
					position === "footer"
						? "footer_item"
						: !mobile
						? "pc_sns_item"
						: "menu_sns_item"
				}
				onClick={() => (mobile ? closeMenu(false) : null)}
			>
				<a
					href="http://pf.kakao.com/_wFxanxb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require(`assets/images/ic-${position}-kakao${snsColor}.svg`)}
						alt="kakao"
					/>
				</a>
			</li>
			<li
				className={
					position === "footer"
						? "footer_item"
						: !mobile
						? "pc_sns_item"
						: "menu_sns_item"
				}
				onClick={() => (mobile ? closeMenu(false) : null)}
			>
				<a
					href="https://www.linkedin.com/company/quantec-investment"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require(`assets/images/ic-${position}-linkedin${snsColor}.svg`)}
						alt="linkedin"
					/>
				</a>
			</li> */}
		</ul>
	);
}

export default SNS;
