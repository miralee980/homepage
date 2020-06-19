import React from "react";

const Sns = () => {
	return (
		<div className="pr_press_wrap">
			<div className="sns_wrap">
				<ul className="sns_box">
					<li className="sns_img_box">
						<a href="#">
							<img
								src={require("assets/images/img-sub-04-sns-img-01@3x.jpg")}
								alt="sns_img"
							/>
						</a>
					</li>
					<li className="sns_txt_box">
						<p className="sns_name">인스타그램</p>
						<a href="" className="sns_txt_wrap">
							<p className="sns_title">
								2019 송년회의 추억을 회고하며 쓰는 글(가제)
							</p>
							<div className="sns_view_box">
								<div className="sns_view_list">
									<p className="sns_view">VIEW MORE</p>
									<img
										src={require("assets/images/ic-sub-04-sns-add.svg")}
										alt="ic_plus"
										className="sns_plus"
									/>
								</div>
							</div>
						</a>
					</li>
				</ul>

				<ul className="sns_box">
					<li className="sns_img_box">
						<a href="#">
							<img
								src={require("assets/images/img-sub-04-sns-img-02@3x.jpg")}
								alt="sns_img"
							/>
						</a>
					</li>
					<li className="sns_txt_box">
						<p className="sns_name">페이스북</p>
						<a href="" className="sns_txt_wrap">
							<p className="sns_title">
								계속되는 콴텍의 성장, 그 숨은 발전의 동력은? (가제)
							</p>
							<div className="sns_view_box">
								<div className="sns_view_list">
									<p className="sns_view">VIEW MORE</p>
									<img
										src={require("assets/images/ic-sub-04-sns-add.svg")}
										alt="ic_plus"
										className="sns_plus"
									/>
								</div>
							</div>
						</a>
					</li>
				</ul>

				<ul className="sns_box">
					<li className="sns_img_box">
						<a href="#">
							<img
								src={require("assets/images/img-sub-04-sns-img-default.svg")}
								alt="sns_img"
							/>
						</a>
					</li>
					<li className="sns_txt_box">
						<p className="sns_name">네이버 포스트</p>
						<a href="" className="sns_txt_wrap">
							<p className="sns_title">콴텍, 왜 설립했을까요? (가제)</p>
							<div className="sns_view_box">
								<div className="sns_view_list">
									<p className="sns_view">VIEW MORE</p>
									<img
										src={require("assets/images/ic-sub-04-sns-add.svg")}
										alt="ic_plus"
										className="sns_plus"
									/>
								</div>
							</div>
						</a>
					</li>
				</ul>

				<ul className="sns_box">
					<li className="sns_img_box">
						<a href="#">
							<img
								src={require("assets/images/img-sub-04-sns-img-03@3x.jpg")}
								alt="sns_img"
							/>
						</a>
					</li>
					<li className="sns_txt_box">
						<p className="sns_name">페이스북</p>
						<a href="" className="sns_txt_wrap">
							<p className="sns_title">
								자문사 설립, 본격적인 궤도에 오르다 (가제)
							</p>
							<div className="sns_view_box">
								<div className="sns_view_list">
									<p className="sns_view">VIEW MORE</p>
									<img
										src={require("assets/images/ic-sub-04-sns-add.svg")}
										alt="ic_plus"
										className="sns_plus"
									/>
								</div>
							</div>
						</a>
					</li>
				</ul>

				<ul className="sns_box">
					<li className="sns_img_box">
						<a href="#">
							<img
								src={require("assets/images/img-sub-04-sns-img-default.svg")}
								alt="sns_img"
							/>
						</a>
					</li>
					<li className="sns_txt_box">
						<p className="sns_name">네이버 포스트</p>
						<a href="" className="sns_txt_wrap">
							<p className="sns_title">
								삶을 풍요롭게 만드는 콴텍의 소식지 OPEN! (가제)
							</p>
							<div className="sns_view_box">
								<div className="sns_view_list">
									<p className="sns_view">VIEW MORE</p>
									<img
										src={require("assets/images/ic-sub-04-sns-add.svg")}
										alt="ic_plus"
										className="sns_plus"
									/>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>

			<div className="press_number_wrap">
				<ul className="press_number_list">
					<li className="press_prev">
						<a href="#">
							<img
								src={require("assets/images/ic-m-partners-arrowleft.svg")}
								alt="prev_btn"
							/>
						</a>
					</li>
					<li className="press_num on">
						<a href="#" className="num on">
							1
						</a>
					</li>
					<li className="press_num">
						<a href="#" className="num">
							2
						</a>
					</li>
					<li className="press_num">
						<a href="#" className="num">
							3
						</a>
					</li>
					<li className="press_num">
						<a href="#" className="num">
							4
						</a>
					</li>
					<li className="press_num">
						<a href="#" className="num">
							5
						</a>
					</li>
					<li className="press_next">
						<a href="#">
							<img
								src={require("assets/images/ic-m-partners-arrowright.svg")}
								alt="next_btn"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sns;
