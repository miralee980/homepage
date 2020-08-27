import React, { useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PageTitle from "components/PageTitle";
import News from "./News";
import Tab from "./Tab";
import Sns from "./Sns";

const PRCenter = () => {
	const subHead = "Forward Thinking in Finance";
	const heading = "PR";
	const pageImage = "pr_page_img";
	const imgSubHead = "PR";
	const imgTitle1 = "콴텍이 만들어가는 ";
	const imgTitle2 = "새로운 금융을 만나보세요.";
	const [tabSel, setTabSel] = useState("news");

	const onSelTabHandler = (sel) => {
		setTabSel(sel);
	};
	return (
		<div>
			<Header isVideo={false} />

			<div className="pr_content">
				<PageTitle
					subHead={subHead}
					heading={heading}
					pageImage={pageImage}
					imgSubHead={imgSubHead}
					imgTitle1={imgTitle1}
					imgTitle2={imgTitle2}
				/>
				<div className="press">
					<Tab onSelTabHandler={onSelTabHandler} tabSel={tabSel} />
					<div className="section">
						{tabSel === "news" ? <News /> : <Sns />}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default PRCenter;
