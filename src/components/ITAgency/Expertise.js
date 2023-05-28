import React from "react";
import expertiseImg from "../../images/expertise.jpg";

const Expertise = () => {
	return (
		<div className="expertise-area pb-100 dotted-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="expertise-image">
							<img src={expertiseImg} alt="expertise" />
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="expertise-content">
							<span className="sub-title">OUR EXPERTISE</span>
							<h2>
								Give us an idea that people want to spend time
								with
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur. Rutrum
								pretium pulvinar ut nec. Ac consequat blandit
								gravida turpis a risus pharetra amet molestie
								eget.
							</p>
							<ul className="features-list">
								<li>
									<div className="icon">
										<i className="flaticon-boost"></i>
									</div>
									<h4>Boost Your Sale</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur.
										Rutrum pretium pulvinar ut nec. Ac
										consequat blandit gravida turpis a risus
										pharetra amet molestie.
									</p>
								</li>
								<li>
									<div className="icon">
										<i className="flaticon-business-idea"></i>
									</div>
									<h4>Idea & Analysis</h4>
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
				</div>
			</div>
		</div>
	);
};

export default Expertise;
