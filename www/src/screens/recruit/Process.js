import React from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";

const Process = () => {
	const processItem = [
		{
			title: "서류 전형",
			image: "img-sub-03-process-step-01.svg",
		},
		{
			title: "실무자 면접",
			image: "img-sub-03-process-step-02.svg",
		},
		{
			title: "심층 면접",
			image: "img-sub-03-process-step-03.svg",
		},
		{
			title: "최종 입사",
			image: "img-sub-03-process-step-04.svg",
		},
	];
	var list = processItem.map((item, index) => {
		return (
			<div className="process_item" key={index}>
				<img
					src={require(`assets/images/${item.image}`)}
					alt="img_process"
					className="img_process"
				/>
				<p className="process_step">{`STEP ${String(index).padStart(
					2,
					"0"
				)}`}</p>
				<p className="process_tit">{item.title}</p>
			</div>
		);
	});
	return (
		<div className="section_wrapper">
			<div className="section center">
				<SectionCenterTitle subHead="PROCESS" title="채용절차" text={null} />
				<div className="process_wrap">{list}</div>
			</div>
		</div>
	);
};

export default Process;
