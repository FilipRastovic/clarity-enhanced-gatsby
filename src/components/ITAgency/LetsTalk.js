import React from "react";
import shape6 from "../../images/shape/shape6.png";
import shape7 from "../../images/shape/shape7.png";
import { Link } from "gatsby";

const LetsTalk = () => {
	return (
		<div className="lets-talk-area dotted-bg bg-f7ffe2">
			<div className="container">
				<div className="lets-talk-inner-box bg-black">
					<h2>Let's Make Something Amazing Together</h2>
					<Link to="/contact-us" className="default-btn">
						Let’s Talk
					</Link>
					<div className="shape6">
						<img src={shape6} alt="shape6" />
					</div>
					<div className="shape7">
						<img src={shape7} alt="shape7" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LetsTalk;
