import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		partnersJson {
			partners {
				id
				partnerImg {
					publicURL
				}
			}
		}
	}
`;

const Partner = ({ styleClass }) => {
	const {
		partnersJson: { partners },
	} = useStaticQuery(query);
	// console.log(partners);
	return (
		<div className={`partner-area ${styleClass}`}>
			<div className="container-fluid">
				<div className="row justify-content-center align-items-center">
					{partners &&
						partners.map((p) => (
							<div
								className="col"
								data-aos="fade-in"
								data-aos-duration="1000"
								data-aos-delay="200"
								key={p.id}
							>
								<div className="partner-item mb-25 text-center">
									<img
										src={p.partnerImg.publicURL}
										alt="partner-logo"
									/>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Partner;
