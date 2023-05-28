import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const query = graphql`
	query {
		featuresJson {
			featureHead {
				title
				subtitle
				description
			}
			features {
				id
				icon
				title
				shortDesc
				url
			}
		}
	}
`;

const Features = ({ styleClass, boxDesign }) => {
	const {
		featuresJson: { featureHead, features },
	} = useStaticQuery(query);
	// console.log(allDataJson.edges[3]);
	return (
		<div className={`features-area ${styleClass}`}>
			<div className="container">
				<div
					className="section-title"
					data-aos="fade-in"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<span className="sub-title">
						{featureHead && featureHead.subtitle}
					</span>
					<h2>{featureHead && featureHead.title}</h2>
					<p>{featureHead && featureHead.description}</p>
				</div>
				<div className="row justify-content-center">
					{features &&
						features.map((feature) => (
							<div
								className="col-lg-4 col-md-6 col-sm-6"
								key={feature.id}
							>
								<div className={`${boxDesign}`}>
									<div className="icon">
										<i className={feature.icon}></i>
									</div>
									<h4>
										<Link to={`/feature/${feature.url}`}>
											{feature.title}
										</Link>
									</h4>
									<p>{feature.shortDesc}</p>
									<Link
										to={`/feature/${feature.url}`}
										className="link-btn"
									>
										View More{" "}
										<i className="flaticon-right-up"></i>
									</Link>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Features;
