import { Link } from "gatsby";
import React from "react";

const Projects = () => {
	return (
		<div className="projects-area pt-100 pb-75 dotted-bg">
			<div className="container">
				<div className="section-title">
					<h2>We are your one-stop solutions for building brands</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum pretium
						pulvinar ut nec. Ac consequat blandit gravida turpis a
						risus pharetra amet molestie eget porta.
					</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-6">
						<div className="single-project-box mb-25">
							<Link
								to="/project-details"
								className="image d-block"
							>
								<img
									src="assets/images/projects/project9.jpg"
									alt="project"
								/>
							</Link>
							<h4>
								<Link to="/project-details">
									Digital Marketing
								</Link>
							</h4>
							<Link to="/project-details" className="link-btn">
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-project-box mb-25">
							<Link
								to="/project-details"
								className="image d-block"
							>
								<img
									src="assets/images/projects/project12.jpg"
									alt="project"
								/>
							</Link>
							<h4>
								<Link to="/project-details">
									Illustrator Graphics
								</Link>
							</h4>
							<Link to="/project-details" className="link-btn">
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-project-box mb-25">
							<Link
								to="/project-details"
								className="image d-block"
							>
								<img
									src="assets/images/projects/project1.jpg"
									alt="project"
								/>
							</Link>
							<h4>
								<Link to="/project-details">
									Company Branding
								</Link>
							</h4>
							<Link to="/project-details" className="link-btn">
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="single-project-box mb-25">
							<Link
								to="/project-details"
								className="image d-block"
							>
								<img
									src="assets/images/projects/project4.jpg"
									alt="project"
								/>
							</Link>
							<h4>
								<Link to="/project-details">
									Product Engineering
								</Link>
							</h4>
							<Link to="/project-details" className="link-btn">
								<i className="flaticon-right-up"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
