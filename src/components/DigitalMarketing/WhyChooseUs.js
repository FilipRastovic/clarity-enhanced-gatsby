import React from "react";
import whyChoosImg from "../../images/why-choose-us.jpg";

const WhyChooseUs = () => {
	return (
		<div className="why-choose-us-area ptb-100 dotted-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-content">
							<span className="sub-title main-color">
								WHY CHOOSE US
							</span>
							<h2>
								Engaging more, refreshing results. We trust you
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutrum
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet molestie
								eget.
							</p>
							<ul className="features-list">
								<li>
									<div className="icon main-color">
										<i className="flaticon-advertisement"></i>
									</div>
									<h4>Advertising & Branding</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Rutrum pretium pulvinar ut nec. Ac
										consequat blandit gravida turpis a risus
										pharetra amet molestie.
									</p>
								</li>
								<li>
									<div className="icon main-color">
										<i className="flaticon-public-relation"></i>
									</div>
									<h4>Public Relations</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Rutrum pretium pulvinar ut nec. Ac
										consequat blandit gravida turpis a risus
										pharetra amet molestie.
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-image">
							<img src={whyChoosImg} alt="why-choose-us" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
