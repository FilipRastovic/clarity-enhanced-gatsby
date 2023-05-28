import React from "react";

const FunFacts = () => {
	return (
		<div className="funfacts-area pt-100 pb-75 bg-main-color">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-sm-3 col-6">
						<div className="single-funfact-box text-center mb-25">
							<h2>1500+</h2>
							<span>Completed Projects</span>
						</div>
					</div>
					<div className="col-lg-3 col-sm-3 col-6">
						<div className="single-funfact-box text-center mb-25">
							<h2>700+</h2>
							<span>Happy Clients</span>
						</div>
					</div>
					<div className="col-lg-3 col-sm-3 col-6">
						<div className="single-funfact-box text-center mb-25">
							<h2>1275+</h2>
							<span>Positive Reviews</span>
						</div>
					</div>
					<div className="col-lg-3 col-sm-3 col-6">
						<div className="single-funfact-box text-center mb-25">
							<h2>250+</h2>
							<span>Awards Won</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FunFacts;
