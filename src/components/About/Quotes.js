import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		allQuotesJson(limit: 1, sort: { quotes: { id: DESC } }) {
			edges {
				node {
					quotes {
						id
						author
						texts
						position
						authorImg {
							publicURL
						}
					}
				}
			}
		}
	}
`;

const Quotes = () => {
	const { allQuotesJson } = useStaticQuery(query);
	const {
		node: { quotes },
	} = allQuotesJson.edges[0];

	// console.log(quotes);
	return (
		<div className="quotes-area dotted-bg pb-100">
			<div className="container">
				<div className={`quotes-inner-box dotted-bg bg-f4d9d3`}>
					{quotes &&
						quotes.map((q) => (
							<div className="row align-items-center" key={q.id}>
								<div className="col-lg-4 col-md-12">
									<div
										className="quotes-image"
										data-aos="fade-in"
										data-aos-duration="1000"
										data-aos-delay="100"
									>
										<img
											src={q.authorImg.publicURL}
											alt="quotes"
										/>
									</div>
								</div>
								<div className="col-lg-8 col-md-12">
									<div
										className="quotes-content"
										data-aos="fade-in"
										data-aos-duration="1000"
										data-aos-delay="200"
									>
										<i className="flaticon-quotes"></i>
										<p>{q.texts}</p>
										<h6>
											{q.author}
											<span>, {q.position}</span>
										</h6>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Quotes;
