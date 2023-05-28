import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const query = graphql`
	query {
		projectsJson {
			projectHead {
				title
				subtitle
				description
			}
			projects {
				id
				title
				projectImg {
					publicURL
				}
				url
			}
		}
	}
`;

const PortfolioIndex3 = () => {
	const {
		projectsJson: { projects },
	} = useStaticQuery(query);
	return (
		<div className="projects-area ptb-100 dotted-bg">
			<div className="container">
				<div className="row justify-content-center">
					{projects &&
						projects.map((project) => (
							<div className="col-lg-4 col-md-6" key={project.id}>
								<div className="single-project-box mb-25">
									<Link
										to={`/project/${project.url}`}
										className="image d-block"
									>
										<img
											src={project.projectImg.publicURL}
											alt="project"
										/>
									</Link>

									<div className="content">
										<h4>
											<Link
												to={`/project/${project.url}`}
											>
												{project.title}
											</Link>
										</h4>
										<Link
											to={`/project/${project.url}`}
											className="link-btn"
										>
											<i className="flaticon-right-up"></i>
										</Link>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default PortfolioIndex3;
