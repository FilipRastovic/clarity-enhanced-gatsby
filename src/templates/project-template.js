import React from "react";
import { Link } from "gatsby";
import { Seo } from "../components/Layout/seo";
import Layout from "../components/Layout";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Index/Subscribe";
import Footer from "../components/Layout/Footer";

import detailsImg from "../images/projects/project-details.jpg";
import project9Img from "../images/projects/project9.jpg";
import project12Img from "../images/projects/project12.jpg";

const projectTemplate = () => {
	return (
		<Layout>
			<Seo title="Project Details" />
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Project Details" />

			<div className="project-details-area pt-100 pb-75 dotted-bg">
				<div className="container">
					<div className="project-details-image">
						<img src={detailsImg} alt="project" />
					</div>
					<div className="row">
						<div className="col-lg-8 col-md-12 order-2 order-lg-1">
							<div className="project-details-desc">
								<h2>Design & Development Project</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur.
									Dolor neque turpis augue gravida tortor
									faucibus. Dignissim mauris pharetra eu
									neque. Adipiscing <strong>gravida</strong>{" "}
									cras ut nisi adipiscing etiam faucibus
									auctor. Quis mi egestas lorem quis habitant.
									Et aliquam eu elit malesuada. Mauris lorem
									felis diam est tristique viverra. Ante est
									cras cras quam sagittis congue vulputate
									etiam. Consectetur eget posuere orci
									vehicula viverra. Purus ac massa at tortor
									elit sodales. Pellentesque duis tortor
									mattis vitae tortor enim elit turpis.
								</p>
								<p>
									Lorem ipsum dolor sit amet{" "}
									<u>consectetur</u>. Dolor neque turpis augue
									gravida tortor faucibus. Dignissim mauris
									pharetra eu neque. Adipiscing gravida cras
									ut nisi adipiscing etiam faucibus auctor.
									Quis mi egestas lorem quis habitant. Et
									aliquam eu elit <i>malesuada</i>. Mauris
									lorem felis diam est tristique viverra ante
									est.
								</p>
								<div className="icon-card mt-25 mb-25">
									<i className="flaticon-bars"></i>
									<h4>Business Growth</h4>
									<p>
										Neque et ante tellus nisl. A nisl eu at
										nulla ultrices. Dolor urna vitae ut
										turpis. Arcu volutpat nec mi commodo
										quis nec vestibulum. Semper egestas
										tellus fames cras ac.
									</p>
								</div>
								<div className="icon-card mb-25">
									<i className="flaticon-web-optimization"></i>
									<h4>Manage Tech Services</h4>
									<p>
										Neque et ante tellus nisl. A nisl eu at
										nulla ultrices. Dolor urna vitae ut
										turpis. Arcu volutpat nec mi commodo
										quis nec vestibulum. Semper egestas
										tellus fames cras ac.
									</p>
								</div>
								<p>
									Lorem ipsum dolor sit amet consectetur.
									Dolor neque turpis augue gravida tortor
									faucibus. Dignissim mauris pharetra eu
									neque. Adipiscing gravida cras ut nisi
									adipiscing etiam faucibus auctor. Quis mi
									egestas lorem quis habitant. Et aliquam eu
									elit malesuada. Mauris lorem felis diam est
									tristique viverra. Ante est.
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 order-1 order-lg-2">
							<div className="project-details-sidebar">
								<div className="project-info">
									<h4>Project Information</h4>
									<ul className="list-unstyled mb-0">
										<li>
											<span>Category:</span>
											EnvyTheme
										</li>
										<li>
											<span>Client:</span>
											Digital Agnecy
										</li>
										<li>
											<span>Website:</span>
											<a
												href="https://envytheme.com"
												target="_blank"
												rel="noreferrer"
											>
												EnvyTheme.com
											</a>
										</li>
										<li>
											<span>Date:</span>
											05 February, 2022
										</li>
										<li>
											<span>Follow us:</span>
											<ul className="social-links list-unstyled mb-0">
												<li>
													<a href="/">
														<i className="flaticon-facebook-app-symbol"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="flaticon-twitter"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="flaticon-instagram"></i>
													</a>
												</li>
												<li>
													<a href="/">
														<i className="flaticon-linkedin"></i>
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
								<div className="project-contact-info">
									<h4>
										Let's Make Something Amazing Together!
									</h4>
									<ul className="list-unstyled mb-0">
										<li>
											<a href="tel:+2414524526">
												<i className="bx bx-phone-call"></i>
												+241 452 4526
											</a>
										</li>
										<li>
											<a href="mailto:hello@doji.com">
												<i className="bx bx-envelope"></i>
												hello@doji.com
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="projects-area pb-75 dotted-bg">
				<div className="container">
					<div className="section-title text-start mw-100">
						<h2>More portfolio</h2>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-6">
							<div className="single-project-box mb-25">
								<Link
									to="/project/digital-marketing"
									className="image d-block"
								>
									<img src={project9Img} alt="project" />
								</Link>
								<h4>
									<Link to="/project/digital-marketing">
										Digital Marketing
									</Link>
								</h4>
								<Link
									to="/project/digital-marketing"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="single-project-box mb-25">
								<Link
									to="/project/illustrator"
									className="image d-block"
								>
									<img src={project12Img} alt="project" />
								</Link>
								<h4>
									<Link to="/project/illustrator">
										Illustrator Graphics
									</Link>
								</h4>
								<Link
									to="/project/illustrations"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default projectTemplate;
export const Head = () => <Seo title="Project Details" />;
