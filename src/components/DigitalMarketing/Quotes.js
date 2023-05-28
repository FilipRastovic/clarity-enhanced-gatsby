import React from "react";
import Ceo from "../../images/ceo.jpg";

const Quotes = () => {
	return (
		<div className="quotes-area dotted-bg">
			<div className="container">
				<div className="quotes-inner-box dotted-bg bg-f4d9d3">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="quotes-image">
								<img src={Ceo} alt="quotes" />
							</div>
						</div>
						<div className="col-lg-8 col-md-12">
							<div className="quotes-content">
								<i className="flaticon-quotes"></i>
								<p>
									As a midsize software development company,
									we combine the best of both worlds. We have
									the focus and speed of the small IT
									outsourcing companies along with the
									scalability and expertise of the big ones.
								</p>
								<h6 className="main-color">
									John Doe<span>, CEO at Envato</span>
								</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Quotes;
