import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import shape3 from "../../images/shape/shape3.png";
import shape4 from "../../images/shape/shape4.png";
import ServiceCard from "../Common/ServiceCard";

const query = graphql`
	query {
		allServicesJson(limit: 4) {
			nodes {
				serviceHead {
					title
					subtitle
					description
				}
				services {
					id
					icon
					title
					shortDesc
					url
				}
			}
		}
	}
`;

const Services = () => {
	const { allServicesJson } = useStaticQuery(query);
	const { serviceHead, services } = allServicesJson.nodes[0];
	// console.log(serviceHead);
	return (
		<div className="services-area ptb-100 dotted-bg">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">{serviceHead.subtitle}</span>
					<h2>{serviceHead.title}</h2>
					<p>{serviceHead.description}</p>
				</div>
				<div className="row justify-content-center">
					{services &&
						services.map((s) => <ServiceCard key={s.id} {...s} />)}
				</div>
				<div className="view-all-btn text-center">
					<Link to="/services" className="default-btn">
						View All Services <i className="flaticon-right-up"></i>
					</Link>
				</div>
			</div>
			<div className="shape3">
				<img src={shape3} alt="shape3" />
			</div>
			<div className="shape4">
				<img src={shape4} alt="shape4" />
			</div>
		</div>
	);
};

export default Services;
