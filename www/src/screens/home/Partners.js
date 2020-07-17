import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselButtonGroup from "components/CarouselButtonGroup";
import SectionLeftTitle from "components/SectionLeftTitle";

const Partners = () => {
	const [partners, setPartners] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch("https://dev.quantec.co.kr/api/quantec/partner");
			if (res.ok) {
				const body = await res.json();
				if (body.status && body.status === "OK") {
					setPartners(body.data);
				}
			}
		}
		fetchData();
	}, []);
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 3000, min: 991 },
			items: 4
		},
		desktop: {
			breakpoint: { max: 991, min: 768 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 768, min: 576 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1
		}
	};

	return (
		<div className="partners">
			<SectionLeftTitle subHead="PARTNERS" title="파트너" fontWhite={false} />

			<div className="partners_wrap">
				{partners ? (
					<Carousel
						arrows={false}
						renderButtonGroupOutside={true}
						customButtonGroup={<CarouselButtonGroup />}
						responsive={responsive}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={2000}
					>
						{partners.map((partner, i) => {
							return (
								<div className="partners_item" key={i}>
									<img
										src={`https://dev.quantec.co.kr/api/uploads/${partner.image_url}`}
										alt="partners"
									/>
								</div>
							);
						})}
					</Carousel>
				) : null}
			</div>
			<div class="partners_sm">
				{partners
					? partners.map((partner, i) => {
							return partner.image_url_mobile ? (
								<img
									src={`https://dev.quantec.co.kr/api/uploads/${partner.image_url_mobile}`}
									alt="img_partners"
									class="img_partners"
								/>
							) : null;
					  })
					: null}
			</div>
		</div>
	);
};

export default Partners;
