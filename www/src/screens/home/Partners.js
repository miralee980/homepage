import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselButtonGroup from "components/CarouselButtonGroup";
import SectionLeftTitle from "components/SectionLeftTitle";

const Partners = () => {
	const partnersImgList = [
		// admin에서 관리하도록 수정
		"img-m-partners-001.svg",
		"img-m-partners-002.svg",
		"img-m-partners-003@3x.jpg",
		"img-m-partners-004.svg",
		"img-m-partners-005.svg",
		"img-m-partners-006@3x.jpg",
		"img-m-partners-001.svg",
		"img-m-partners-007@3x.jpg",
	];
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 3000, min: 991 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 991, min: 768 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 768, min: 576 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="partners">
			<SectionLeftTitle subHead="PARTNERS" title="파트너" fontWhite={false} />

			<div className="partners_wrap">
				<Carousel
					arrows={false}
					renderButtonGroupOutside={true}
					customButtonGroup={<CarouselButtonGroup />}
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={2000}
				>
					{partnersImgList.map((img, i) => {
						return (
							<div className="partners_item" key={i}>
								<img src={require(`assets/images/${img}`)} alt="partners" />
							</div>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};

export default Partners;
