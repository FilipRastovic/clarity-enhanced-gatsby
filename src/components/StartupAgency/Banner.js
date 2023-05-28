import { Link } from "gatsby";
import React from "react";

const Banner = () => {
	return (
		<div className="main-banner-bg-image-area">
			<div className="container">
				<div className="main-banner-bg-image-content">
					<h1>Increase Conversion Rates</h1>
					<p>For small-to-medium sized businesses</p>
					<Link to="/about-us" className="default-btn">
						Discover More <i className="flaticon-right-up"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
