import React from "react";

const Subscribe = () => {
	return (
		<div className="subscribe-area dotted-bg">
			<div className="container-fluid">
				<div className="bg-black pt-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6 col-lg-5 col-md-12">
								<div className="section-title">
									<span className="sub-title">
										NEWSLETTER
									</span>
									<h2>Subscribe to our newsletter</h2>
								</div>
							</div>
							<div className="col-xl-6 col-lg-7 col-md-12">
								<form className="subscribe-form">
									<input
										type="text"
										className="form-control"
										placeholder="Enter your email address"
									/>
									<button
										type="submit"
										className="default-btn"
									>
										Subscribe Now
									</button>
								</form>
							</div>
						</div>
						<div className="pt-100"></div>
						<hr className="m-0" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
