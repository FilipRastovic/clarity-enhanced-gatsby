import React from "react";
import { Link } from "gatsby";

const ServiceCard = ({ id, icon, url, title, shortDesc }) => {
	return (
		<div className="col-lg-6 col-md-6 col-sm-6">
			<div className="single-service-box mb-25">
				<div className="icon">
					<i className={icon}></i>
				</div>
				<h4>
					<Link to={url}>{title}</Link>
				</h4>
				<p>{shortDesc}</p>
				<Link className="link-btn" to={url}>
					View More <i className="flaticon-right-up"></i>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
