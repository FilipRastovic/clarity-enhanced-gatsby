import React from "react";
import { Link } from "gatsby";
import usaFlag from "../../images/usa.png";

const TopHeader = () => {
	return (
		<div className="top-header-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6">
						<ul className="top-header-info">
							<li>
								<i className="flaticon-envelope"></i>
								<a href="mailto:hello@doji.com">
									hello@doji.com
								</a>
							</li>
							<li>
								<i className="flaticon-phone-call"></i>
								<a href="tel:+2414524526">+241 452 4526</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-6 col-md-6">
						<ul className="top-header-right-side">
							<li>
								<img src={usaFlag} alt="usa" />
								<select className="form-select">
									<option defaultValue="en">English</option>
									<option value="1">Spanish</option>
									<option value="2">French</option>
									<option value="3">Arabic</option>
								</select>
							</li>
							<li>
								<Link to="/auth">
									<i className="flaticon-user-2"></i>Login
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
