import React from "react";
import bannerImg from "../../images/banner/banner3.png";
import { Link } from "gatsby";

const Banner = () => {
	return (
		<div className="banner-area dotted-bg bg-f7ffe2">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="banner-content">
							<span className="sub-title">CREATIVE AGENCY</span>
							<h1>
								We are here to connect creativity with dreams
							</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutrum
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet molestie.
								Eget porta diam sit fames. Suspendissesss
								consequat placerat aenean aenean lobortis.
							</p>
							<Link to="/about-us" className="default-btn">
								Discover More{" "}
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div
							className="banner-image text-center"
							data-aos="fade-in"
							data-aos-duration="1000"
							data-aos-delay="200"
						>
							<img src={bannerImg} alt="banner" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
