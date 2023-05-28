import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const query = graphql`
	query {
		allServicesJson {
			edges {
				node {
					services {
						id
						title
						url
					}
				}
			}
		}
	}
`;

const ServiceSidebar = (props) => {
	const { allServicesJson } = useStaticQuery(query);
	const {
		node: { services },
	} = allServicesJson.edges[0];
	return (
		<div className="service-details-sidebar">
			<ul>
				{services &&
					services.map((service) => (
						<li key={service.id}>
							<Link to={service.url}>{service.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default ServiceSidebar;
