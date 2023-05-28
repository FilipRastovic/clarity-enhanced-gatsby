import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ServiceCard from "../Common/ServiceCard";

const query = graphql`
	query {
		allServicesJson(limit: 6) {
			edges {
				node {
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
	}
`;

const ServiceIndex = () => {
	const { allServicesJson } = useStaticQuery(query);
	const {
		node: { services },
	} = allServicesJson.edges[0];
	// console.log(allServicesJson);
	return (
		<div className="services-area pt-100 pb-75 dotted-bg">
			<div className="container">
				<div className="row justify-content-center">
					{services &&
						services.map((s) => <ServiceCard key={s.id} {...s} />)}
				</div>
			</div>
		</div>
	);
};

export default ServiceIndex;
