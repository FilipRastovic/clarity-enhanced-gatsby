import React from "react";
import logo from "../../images/white-logo.png";
import { Link } from "gatsby";
import BackToTop from "./BackToTop";

const Footer = () => {
	return (
		<>
			<div className="footer-area pt-100 pb-75 bg-black">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-footer-widget mb-25">
								<Link to="/" className="logo d-inline-block">
									<img src={logo} alt="logo" />
								</Link>

								<p>
									Lorem ipsum dolor sit amet consectetur. Sed
									amet eget gravida nec tortor.
								</p>
								<ul className="social-links list-unstyled mb-0">
									<li>
										<a
											href="https://facebook.com"
											target="_blank"
											rel="noreferrer"
										>
											<i className="flaticon-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com"
											target="_blank"
											rel="noreferrer"
										>
											<i className="flaticon-twitter-1"></i>
										</a>
									</li>
									<li>
										<a
											href="https://instagram.com"
											target="_blank"
											rel="noreferrer"
										>
											<i className="flaticon-instagram-1"></i>
										</a>
									</li>
									<li>
										<a
											href="https://linkedin.com"
											target="_blank"
											rel="noreferrer"
										>
											<i className="flaticon-linkedin-1"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-footer-widget mb-25 ps-xl-5">
								<h4>Quick Links</h4>
								<ul className="custom-links">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/portfolio">Projects</Link>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-footer-widget mb-25">
								<h4>Important Links</h4>
								<ul className="custom-links">
									<li>
										<Link to="/privacy-policy">
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link to="/pricing">Pricing</Link>
									</li>
									<li>
										<Link to="/terms-condition">
											Terms & Conditions
										</Link>
									</li>
									<li>
										<Link to="/services">Services</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-footer-widget mb-25">
								<h4>Get In Touch</h4>
								<ul className="footer-contact-info">
									<li>
										<i className="bx bx-envelope"></i>
										<a href="mailto:hello@doji.com">
											hello@doji.com
										</a>
									</li>
									<li>
										<i className="bx bx-phone-call"></i>
										<a href="tel:+2414524526">
											+241 452 4526
										</a>
									</li>
									<li>
										<i className="bx bx-map"></i>
										2750 Quadra Street Victoria Road, New
										York, USA
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright-area text-center">
				<div className="container">
					<p>
						© Doji is Proudly Owned by{" "}
						<a
							href="https://envytheme.com/"
							rel="noreferrer"
							target="_blank"
						>
							EnvyTheme
						</a>
					</p>
				</div>
			</div>
			<BackToTop />
		</>
	);
};

export default Footer;
