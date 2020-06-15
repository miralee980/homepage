import React, { useState, useEffect } from "react";

const PRCenter = () => {
	return (
		<div class="content">
			<div class="page_title_wrap">
				<div class="page_title">
					<p class="page_subhead">Forward Thinking in Finance</p>
					<p class="page_heading">PR</p>
				</div>

				<div class="page_img">
					<img
						src={require("assets/images/line-sectionline.svg")}
						alt="section_line"
						class="page_line"
					/>
					<p class="img_subhead">PR</p>
					<p class="img_title">
						콴텍이 만들어가는 <br class="br" />
						새로운 금융을 만나보세요.
					</p>
				</div>
			</div>

			<div class="section_wrap">
				<div class="section">
					<div class="pr_tab">
						<div class="pr_news on">
							<p>NEWS</p>
						</div>
						<img
							src={require("assets/images/ic-sub-04-tabcircle.svg")}
							alt="circle"
							class="tab_circle"
						/>
						<div class="pr_sns">
							<p>SNS</p>
						</div>
					</div>

					<div class="pr_press_wrap">
						<div class="press_list">
							<div class="press_info">
								<p class="press_date">2020.02.12</p>
								<p class="press_tit">
									콴텍, AI기업 애자일소다와 맞손... 서비스 공동 개발
								</p>
							</div>
							<div class="press_btn">
								<p class="press_btn_txt">
									<span class="press_view">VIEW</span> MORE
								</p>
							</div>
						</div>

						<div class="press_list">
							<div class="press_info">
								<p class="press_date">2020.02.12</p>
								<p class="press_tit">
									콴텍, 금융위 주관 'RA테스트베드'서 수익률
									'고공행진'...알고리즘 등록도 역대 최다 등록
								</p>
							</div>
							<div class="press_btn">
								<p class="press_btn_txt">
									<span class="press_view">VIEW</span> MORE
								</p>
							</div>
						</div>

						<div class="press_list">
							<div class="press_info">
								<p class="press_date">2020.02.12</p>
								<p class="press_tit">
									콴텍, 금융 제도권 뛰어들어... '콴텍투자자문' 정식 등록
								</p>
							</div>
							<div class="press_btn">
								<p class="press_btn_txt">
									<span class="press_view">VIEW</span> MORE
								</p>
							</div>
						</div>

						<div class="press_list">
							<div class="press_info">
								<p class="press_date">2020.02.12</p>
								<p class="press_tit">
									이상근 콴텍 대표 "고객별 맞춤형 자산관리 대중화 앞장설 것"
								</p>
							</div>
							<div class="press_btn">
								<p class="press_btn_txt">
									<span class="press_view">VIEW </span> MORE
								</p>
							</div>
						</div>

						<div class="press_list">
							<div class="press_info">
								<p class="press_date">2020.02.12</p>
								<p class="press_tit">
									콴텍, 자산배분시스템 갖춘 키오스크 서비스 출시
								</p>
							</div>
							<div class="press_btn">
								<p class="press_btn_txt">
									<span class="press_view">VIEW</span> MORE
								</p>
							</div>
						</div>

						<div class="press_number_wrap">
							<ul class="press_number_list">
								<li class="press_prev">
									<a href="#">
										<img
											src={require("assets/images/ic-m-partners-arrowleft.svg")}
											alt="prev_btn"
										/>
									</a>
								</li>
								<li class="press_num on">
									<a href="#" class="num on">
										1
									</a>
								</li>
								<li class="press_num">
									<a href="#" class="num">
										2
									</a>
								</li>
								<li class="press_num">
									<a href="#" class="num">
										3
									</a>
								</li>
								<li class="press_num">
									<a href="#" class="num">
										4
									</a>
								</li>
								<li class="press_num">
									<a href="#" class="num">
										5
									</a>
								</li>
								<li class="press_next">
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
				</div>
			</div>
		</div>
	);
};

export default PRCenter;
