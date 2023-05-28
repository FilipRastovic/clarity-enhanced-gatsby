import React from "react";
import { Link } from "gatsby";
import bannerImg from "../../images/banner/banner4.jpg";
import shape8 from "../../images/shape/shape8.png";
import shape9 from "../../images/shape/shape9.png";
import shape10 from "../../images/shape/shape10.png";

const Banner = () => {
	return (
		<div className="banner-wrapper-area dotted-bg bg-ffe6e3">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="banner-wrapper-content">
							<span className="sub-title">DIGITAL AGENCY</span>
							<h1>Incease Conversion Rates</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutrum
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet molestie.
								Eget porta diam sit fames.
							</p>
							<Link to="/about-us" className="default-btn">
								Discover More{" "}
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="banner-wrapper-image text-center">
							<img src={bannerImg} alt="banner" />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Banner;
