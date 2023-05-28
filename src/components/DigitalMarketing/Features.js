import React from "react";
import { Link } from "gatsby";

const Features = () => {
	return (
		<div className="features-area bg-color dotted-bg">
			<div className="container-fluid">
				<div className="features-inner-box bg-black pt-100 pb-75">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="feature-box mb-25">
								<div className="icon">
									<i className="flaticon-box"></i>
								</div>
								<h4>
									<Link to="/services/content/digital-marketing">
										Digital Marketing
									</Link>
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur ut.
									Rutrum pretium pulvinar ut nec. Ato sits
									consequat blandit gravida.
								</p>
								<Link
									to="/services/content/digital-marketing"
									className="link-btn"
								>
									View More{" "}
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="feature-box mb-25">
								<div className="icon">
									<i className="flaticon-ux-design"></i>
								</div>
								<h4>
									<Link to="/services/content/ui-ux-design">
										UX/UI Design
									</Link>
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur ut.
									Rutrum pretium pulvinar ut nec. Ato sits
									consequat blandit gravida.
								</p>
								<Link
									to="/services/content/ui-ux-design"
									className="link-btn"
								>
									View More{" "}
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="feature-box mb-25">
								<div className="icon">
									<i className="flaticon-data-analysis"></i>
								</div>
								<h4>
									<Link to="/services/content/data-analysis">
										Big Data & Analytics
									</Link>
								</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur ut.
									Rutrum pretium pulvinar ut nec. Ato sits
									consequat blandit gravida.
								</p>
								<Link
									to="/services/content/data-analysis"
									className="link-btn"
								>
									View More{" "}
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
