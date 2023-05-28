import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		allFunfactsJson(limit: 4) {
			edges {
				node {
					funfacts {
						id
						label
						value
					}
				}
			}
		}
	}
`;

const FunFacts = () => {
	const { allFunfactsJson } = useStaticQuery(query);

	const {
		node: { funfacts },
	} = allFunfactsJson.edges[0];

	// console.log(allFunfactsJson);
	return (
		<div className="funfacts-area pt-100 pb-75 bg-black">
			<div className="container">
				<div className="row justify-content-center">
					{funfacts &&
						funfacts.map((f) => (
							<div className="col-lg-3 col-sm-3 col-6" key={f.id}>
								<div className="single-funfact-box text-center mb-25">
									<h2>{f.value}</h2>
									<span>{f.label}</span>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className="lines">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	);
};

export default FunFacts;
