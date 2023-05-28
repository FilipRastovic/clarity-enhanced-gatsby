import { Link } from "gatsby";
import React from "react";

const Services = () => {
	return (
		<div className="services-area ptb-100 dotted-bg">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">OUR SERVICES</span>
					<h2>We provide creative solutions for your business</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum pretium
						pulvinar ut nec. Ac consequat blandit gravida turpis a
						risus pharetra amet molestie eget porta.
					</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-presentation"></i>
							</div>
							<h4>
								<Link to="/services/content/business-strategy">
									Business Strategy
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/business-strategy"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-web-programming"></i>
							</div>
							<h4>
								<Link to="/services/content/web-development">
									Web Development
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/web-development"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-content-management"></i>
							</div>
							<h4>
								<Link to="/services/content/digital-marketing">
									Digital Marketing
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/digital-marketing"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-coding"></i>
							</div>
							<h4>
								<Link to="/services/content/app-development">
									App Development
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/app-development"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-curve"></i>
							</div>
							<h4>
								<Link to="/services/content/graphics-design">
									Graphics Design
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/graphics-design"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6">
						<div className="single-service-box mb-25">
							<div className="icon">
								<i className="flaticon-data"></i>
							</div>
							<h4>
								<Link to="/services/content/data-analysis">
									Data Analysis
								</Link>
							</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutru
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet.
							</p>
							<Link
								to="/services/content/data-analysis"
								className="link-btn"
							>
								View More <i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
				</div>
				<div className="view-all-btn mt-0 text-center">
					<Link to="/services" className="default-btn">
						View All Services <i className="flaticon-right-up"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Services;
