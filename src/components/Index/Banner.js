import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import shape1 from "../../images/shape/shape1.png";
import shape2 from "../../images/shape/shape2.png";

const query = graphql`
	query {
		bannerOneJson {
			banner {
				title
				subtitle
				description
				btnTitle
				btnLink
				bannerImage2 {
					publicURL
				}
				bannerImage1 {
					publicURL
				}
			}
		}
	}
`;

const Banner = () => {
	const {
		bannerOneJson: { banner },
	} = useStaticQuery(query);

	// console.log(banner);
	return (
		<div className="main-banner-area">
			<div className="container-fluid">
				<div
					className="main-banner-content"
					data-aos="fade-in"
					data-aos-duration="1000"
					data-aos-delay="200"
				>
					<span className="sub-title">
						{banner && banner.subtitle}
					</span>
					<h1>{banner && banner.title}</h1>
					<p>{banner && banner.description}</p>
					<Link to={banner && banner.btnLink} className="default-btn">
						{banner && banner.btnTitle}{" "}
						<i className="flaticon-right-up"></i>
					</Link>
				</div>
				<div
					className="main-banner-image text-center one"
					data-aos="fade-in"
					data-aos-duration="1000"
					data-aos-delay="100"
				>
					<img
						src={banner && banner.bannerImage1.publicURL}
						alt="banner"
					/>
				</div>
				<div
					className="main-banner-image text-center two"
					data-aos="fade-in"
					data-aos-duration="1000"
					data-aos-delay="300"
				>
					<img
						src={banner && banner.bannerImage2.publicURL}
						alt="banner"
					/>
				</div>
			</div>
			<div className="shape1">
				<img src={shape1} alt="shape1" />
			</div>
			<div className="shape2">
				<img src={shape2} alt="shape2" />
			</div>
		</div>
	);
};

export default Banner;
