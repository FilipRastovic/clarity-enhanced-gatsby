import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import projectImg1 from "../../images/projects/project5.jpg";
import projectImg2 from "../../images/projects/project6.jpg";
import projectImg3 from "../../images/projects/project7.jpg";
import projectImg4 from "../../images/projects/project8.jpg";

const Project = () => {
	return (
		<div className="projects-area ptb-100 dotted-bg">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">RECENT PROJECTS</span>
					<h2>We are your one-stop solutions for building brands</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum pretium
						pulvinar ut nec. Ac consequat blandit gravida turpis a
						risus pharetra amet molestie eget porta.
					</p>
				</div>
			</div>

			<div className="container-fluid">
				<Swiper
					spaceBetween={25}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					modules={[Pagination]}
					className="projectsSwiper"
				>
					<SwiperSlide>
						<div className="single-project-item mb-25">
							<Link
								to="/services/content/digital-marketing"
								className="d-block image"
							>
								<img src={projectImg1} alt="project" />
							</Link>
							<div className="content">
								<h4>
									<Link to="/services/content/digital-marketing">
										Digital Marketing
									</Link>
								</h4>
								<Link
									to="/services/content/digital-marketing"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="single-project-item mb-25">
							<Link
								to="/services/content/web-development"
								className="d-block image"
							>
								<img src={projectImg2} alt="project" />
							</Link>
							<div className="content">
								<h4>
									<Link to="/services/content/web-development">
										Web Development
									</Link>
								</h4>
								<Link
									to="/services/content/web-development"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="single-project-item mb-25">
							<Link
								to="/services/content/data-analysis"
								className="d-block image"
							>
								<img src={projectImg3} alt="project" />
							</Link>
							<div className="content">
								<h4>
									<Link to="/services/content/data-analysis">
										Data Analysis
									</Link>
								</h4>
								<Link
									to="/services/content/data-analysis"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="single-project-item mb-25">
							<Link
								to="/services/content/ui-ux-design-details"
								className="d-block image"
							>
								<img src={projectImg4} alt="project" />
							</Link>
							<div className="content">
								<h4>
									<Link to="/services/content/ui-ux-design-details">
										UX/UI Design
									</Link>
								</h4>
								<Link
									to="/services/content/ui-ux-design-details"
									className="link-btn"
								>
									<i className="flaticon-right-up"></i>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Project;
