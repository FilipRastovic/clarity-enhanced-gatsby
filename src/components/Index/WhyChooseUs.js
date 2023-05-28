import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		whyChooseUsJson {
			whyChooseUs {
				title
				subtitle
				description
				whyChooseImg {
					publicURL
				}
				features {
					id
					title
					icon
					description
				}
			}
		}
	}
`;

const WhyChooseUs = () => {
	const {
		whyChooseUsJson: {
			whyChooseUs: {
				title,
				subtitle,
				description,
				whyChooseImg,
				features,
			},
		},
	} = useStaticQuery(query);

	// console.log(whyChooseImg);
	return (
		<div className="why-choose-us-area ptb-100 dotted-bg bg-fbecd7">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-content">
							<span className="sub-title">{subtitle}</span>
							<h2>{title}</h2>
							<p>{description}</p>
							<ul className="features-list">
								{features &&
									features.map((feature) => (
										<li key={feature.id}>
											<div className="icon">
												<i className={feature.icon}></i>
											</div>
											<h4>{feature.title}</h4>
											<p>{feature.description}</p>
										</li>
									))}
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="why-choose-us-image">
							<img
								src={whyChooseImg.publicURL}
								alt="why-choose-us"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
