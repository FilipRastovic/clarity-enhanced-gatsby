import React from "react";
import { Link } from "gatsby";
import shape5 from "../../../images/shape/shape5.png";

const YearlyPricing = ({ tActive }) => {
	return (
		<div className={`tab-pane fade show ${tActive}`} id="yearly-tab-pane">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-6 col-sm-6">
					<div className="single-pricing-box mb-25">
						<div className="pricing-header">
							<h4>Individual</h4>
							<p>
								Entrepreneurs & small businesses. Managing 1
								website.
							</p>
						</div>
						<div className="price">
							$115 USD/<span>year</span>
						</div>
						<Link to="/contact-us" className="default-btn">
							Get Started Now
						</Link>
						<span className="sub-title">What’s Included:</span>
						<ul className="list-unstyled mb-0">
							<li>SEO Training & Support</li>
							<li>Reports Per Day</li>
							<li>Tracked Keywords</li>
							<li>Numbers of Locations</li>
							<li className="inactive">Keyword Research</li>
							<li className="inactive">Competitive Analysis</li>
						</ul>
						<span className="popular">Popular</span>
						<img src={shape5} alt="shape" className="shape" />
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6">
					<div className="single-pricing-box mb-25">
						<div className="pricing-header">
							<h4>Business</h4>
							<p>
								Entrepreneurs & small businesses. Managing 7
								websites.
							</p>
						</div>
						<div className="price">
							$129 USD/<span>year</span>
						</div>
						<Link to="/contact-us" className="default-btn">
							Get Started Now
						</Link>
						<span className="sub-title">What’s Included:</span>
						<ul className="list-unstyled mb-0">
							<li>SEO Training & Support</li>
							<li>Reports Per Day</li>
							<li>Tracked Keywords</li>
							<li>Numbers of Locations</li>
							<li>Keyword Research</li>
							<li className="inactive">Competitive Analysis</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-6">
					<div className="single-pricing-box mb-25">
						<div className="pricing-header">
							<h4>Enterprise / Agency</h4>
							<p>
								Entrepreneurs & small businesses. Managing 10+
								websites.
							</p>
						</div>
						<div className="price">
							$179 USD/<span>year</span>
						</div>
						<Link to="/contact-us" className="default-btn">
							Get Started Now
						</Link>
						<span className="sub-title">What’s Included:</span>
						<ul className="list-unstyled mb-0">
							<li>SEO Training & Support</li>
							<li>Reports Per Day</li>
							<li>Tracked Keywords</li>
							<li>Numbers of Locations</li>
							<li>Keyword Research</li>
							<li>Competitive Analysis</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default YearlyPricing;
