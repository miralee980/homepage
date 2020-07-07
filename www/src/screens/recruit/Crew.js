import React from "react";
import SectionCenterTitle from "components/SectionCenterTitle/index";

const Crew = () => {
	var list = [];
	var crew = [
		{
			job_dept: "CEO",
			name: "이상근",
			profile_img: "img-sub-03-crew-001@3x.png"
		},
		{
			job_dept: "경영고문이사",
			name: "정재훈",
			profile_img: "img-sub-03-crew-002@3x.png"
		},
		{
			job_dept: "경영고문이사",
			name: "최준규",
			profile_img: "img-sub-03-crew-003@3x.png"
		},
		{
			job_dept: "법무이사",
			name: "이수연",
			profile_img: "img-sub-03-crew-004@3x.png"
		},
		{
			job_dept: "CFO",
			name: "성호진",
			profile_img: "img-sub-03-crew-005@3x.png"
		},
		{
			job_dept: "경영관리 팀장",
			name: "이보화",
			profile_img: "img-sub-03-crew-009@3x.png"
		},
		{
			job_dept: "CTO",
			name: "황대벽",
			profile_img: "img-sub-03-crew-006@3x.png"
		},
		{
			job_dept: "플랫폼 개발 팀장",
			name: "손명수",
			profile_img: "img-sub-03-crew-010@3x.png"
		},
		{
			job_dept: "플랫폼 개발 크루",
			name: "이현종",
			profile_img: "img-sub-03-crew-012@3x.png"
		},
		{
			job_dept: "플랫폼 개발 크루",
			name: "이창준",
			profile_img: "img-sub-03-crew-013@3x.png"
		},
		{
			job_dept: "플랫폼 개발 크루",
			name: "이미라",
			profile_img: "img-sub-03-crew-014@3x.png"
		},
		{
			job_dept: "플랫폼 개발 크루",
			name: "전종걸",
			profile_img: "img-sub-03-crew-016@3x.png"
		},
		{
			job_dept: "플랫폼 개발 크루",
			name: "한대건",
			profile_img: "img-sub-03-crew-017@3x.png"
		},
		{
			job_dept: "CSO",
			name: "홍광진",
			profile_img: "img-sub-03-crew-007@3x.png"
		},
		{
			job_dept: "디자인 크루",
			name: "이아름",
			profile_img: "img-sub-03-crew-018@3x.png"
		},
		{
			job_dept: "AI 개발 크루",
			name: "김정은",
			profile_img: "img-sub-03-crew-020@3x.png"
		},
		{
			job_dept: "CIO",
			name: "조치호",
			profile_img: "img-sub-03-crew-008@3x.png"
		},

		{
			job_dept: "마케팅 팀장",
			name: "박우현",
			profile_img: "img-sub-03-crew-011@3x.png"
		},

		{
			job_dept: "마케팅 크루",
			name: "조은빛",
			profile_img: "img-sub-03-crew-019@3x.png"
		},
		{
			job_dept: "",
			name: "",
			profile_img: ""
		}
	];
	const [pageNum, setPageNum] = useState(0);
	const totalRecruitNum = crew.length;
	const [selNum, setSelNum] = useState(1);

	const onClickHandler = (pageNum) => {
		setSelNum(Number(pageNum));
	};

	list = crew.map((people, index) => {
		return (
			<li className="crew_item" key={index}>
				{people.job_dept.length !== 0 && people.name.length !== 0 ? (
					<>
						<div className="profile_wrap">
							{people.profile_img.length !== 0 ? (
								<img
									src={require(`assets/images/${people.profile_img}`)}
									alt="crew_profile"
									className="crew_profile"
								/>
							) : null}
						</div>
						<div className="crew_info">
							<p className="crew_position">{people.job_dept}</p>
							<p className="crew_name">{people.name}</p>
						</div>
					</>
				) : null}
			</li>
		);
	});
	return (
		<div className="section_wrapper gray">
			<div className="section center">
				<SectionCenterTitle
					subHead="QUANTEC CREW"
					title="콴텍 크루"
					text="콴텍을 빛내는 크루들을 소개합니다."
				/>

				<div className="crew_wrap">
					<ul className="crew_list">{list}</ul>
					<ul className="temp crew_list">{list}</ul>
				</div>
			</div>
		</div>
	);
};

export default Crew;
