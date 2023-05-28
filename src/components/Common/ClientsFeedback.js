import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		feedbackJson {
			feedback {
				id
				author
				position
				texts
			}
		}
	}
`;

const ClientsFeedback = () => {
	const {
		feedbackJson: { feedback },
	} = useStaticQuery(query);
	return (
		<div className="feedback-area dotted-bg pt-100 pb-75">
			<div className="container">
				<div className="row justify-content-center">
					{feedback &&
						feedback.map((feedback) => (
							<div
								className="col-lg-4 col-md-6 col-sm-6"
								key={feedback.id}
							>
								<div className="single-feedback-box mb-25">
									<i className="flaticon-quotes"></i>
									<p>{feedback.texts}</p>
									<div className="client-info">
										<h4>{feedback.author}</h4>
										<span>{feedback.position}</span>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default ClientsFeedback;
