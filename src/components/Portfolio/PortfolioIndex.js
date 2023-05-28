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

const PortfolioIndex = () => {
	const {
		projectsJson: { projects },
	} = useStaticQuery(query);
	return (
		<div className="projects-area ptb-100 dotted-bg">
			<div className="container">
				<div className="row justify-content-center extra-margin">
					{projects &&
						projects.map((project) => (
							<div className="project-big-box" key={project.id}>
								<div className="single-project-box">
									<Link
										to={`/project/${project.url}`}
										className="image d-block"
									>
										<img
											src={project.projectImg.publicURL}
											alt="project"
										/>
									</Link>

									<h4>
										<Link to={`/project/${project.url}`}>
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
						))}
				</div>
				<div className="view-all-btn text-center mt-0">
					<Link to="/portfolio" className="default-btn">
						View All Projects <i className="flaticon-right-up"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioIndex;
