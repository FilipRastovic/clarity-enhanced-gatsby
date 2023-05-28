import React from "react";
import partner2 from "../../images/partner/partner2.png";
import partner3 from "../../images/partner/partner3.png";
import partner4 from "../../images/partner/partner4.png";
import partner5 from "../../images/partner/partner5.png";
import partner6 from "../../images/partner/partner6.png";

const Partner = () => {
	return (
		<div className="partner-area pt-0 pb-0 dotted-bg">
			<div className="container">
				<div className="partner-inner-box bg-black">
					<div className="row justify-content-center align-items-center">
						<div className="col">
							<div className="partner-item mb-25 text-center">
								<img src={partner2} alt="partner" />
							</div>
						</div>
						<div className="col">
							<div className="partner-item mb-25 text-center">
								<img src={partner3} alt="partner" />
							</div>
						</div>
						<div className="col">
							<div className="partner-item mb-25 text-center">
								<img src={partner4} alt="partner" />
							</div>
						</div>
						<div className="col">
							<div className="partner-item mb-25 text-center">
								<img src={partner5} alt="partner" />
							</div>
						</div>
						<div className="col">
							<div className="partner-item mb-25 text-center">
								<img src={partner6} alt="partner" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;
