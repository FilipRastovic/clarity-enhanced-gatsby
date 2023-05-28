import React from "react";
import { Link, graphql } from "gatsby";
import { Seo } from "../components/Layout/seo";
import Layout from "../components/Layout";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Index/Subscribe";
import Footer from "../components/Layout/Footer";
import blogImg1 from "../images/blog/blog-details1.jpg";
import blogImg2 from "../images/blog/blog-details2.jpg";
import blogImg3 from "../images/blog/blog-details3.jpg";
import LatestPosts from "../components/Blog/LatestPosts";

const BlogTemplate = ({ data }) => {
	const {
		allArticlesJson: { nodes },
	} = data;

	return (
		<Layout>
			<Seo title={nodes[0].title} />
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName={nodes[0].title} />

			<div className="blog-details-area dotted-bg ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="blog-details-desc">
								<div className="post-thumb">
									<img
										src={nodes[0].featureImg.publicURL}
										alt="blog-details"
									/>
								</div>
								<div className="post-title">
									<div className="date">
										{nodes[0].postDate}
										<span>{nodes[0].postMonth}</span>
									</div>
									<h2>{nodes[0].title}</h2>
								</div>
								<p>{nodes[0].content}</p>

								<div className="row justify-content-center align-items-center mt-25">
									<div className="col-4">
										<div className="mb-25 text-center">
											<img
												src={blogImg1}
												alt="blog-details"
											/>
										</div>
									</div>
									<div className="col-8">
										<div className="mb-25 text-center">
											<img
												src={blogImg2}
												alt="blog-details"
											/>
										</div>
										<div className="mb-25 text-center">
											<img
												src={blogImg3}
												alt="blog-details"
											/>
										</div>
									</div>
								</div>
								<p>
									Dictum eu maecenas ipsum dolor vel
									imperdiet. Euismod fermentum sed quisque
									risus malesuada molestie. Aliquam ut vel
									penatibus eu sit in egestas molestie nisl.
									Interdum euismod mattis euismod vulputate
									non scelerisque.
								</p>
								<blockquote className="wp-block-quote">
									<p>
										It is a long established fact that a
										reader will be distracted by the
										readable content of a page when looking
										at its layout.
									</p>
								</blockquote>
								<p>
									Lorem ipsum dolor sit amet consectetur.
									Ipsum vitae tincidunt adipiscing sed tellus
									nulla sit ultrices. Arcu maecenas quam
									iaculis ullamcorper id posuere. Leo congue
									nulla quam pharetra. Pellentesque morbi
									dictumst congue risus luctus. Dictum eu
									maecenas ipsum dolor vel imperdiet. Euismod
									fermentum sed quisque risus malesuada
									molestie. Aliquam ut vel penatibus eu sit in
									egestas molestie nisl. Interdum euismod
									mattis euismod vulputate non.
								</p>
								<h4>
									The rise of marketing and why you need it
								</h4>
								<p>
									Dictum eu maecenas ipsum dolor vel
									imperdiet. Euismod fermentum sed quisque
									risus malesuada molestie. Aliquam ut vel
									penatibus eu sit in egestas molestie nisl.
									Interdum euismod mattis euismod vulputate
									non scelerisque.
								</p>
								<div className="post-footer">
									<div className="post-tag">
										<Link to="/blog">
											<i className="flaticon-price-tag-1"></i>{" "}
											Development
										</Link>
									</div>
									<div className="post-share">
										<ul className="social-links">
											<li>
												<span>Share:</span>
											</li>
											<li>
												<a
													href="https://facebook.com"
													className="facebook"
													target="_blank"
													rel="noreferrer"
												>
													<i className="bx bxl-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="https://twitter.com"
													className="twitter"
													target="_blank"
													rel="noreferrer"
												>
													<i className="bx bxl-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="https://linkedin.com"
													className="linkedin"
													target="_blank"
													rel="noreferrer"
												>
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
											<li>
												<a
													href="https://instagram.com"
													className="instagram"
													target="_blank"
													rel="noreferrer"
												>
													<i className="bx bxl-instagram"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/* <div className="post-nav d-flex align-items-center justify-content-between">
									<a href="/blog-details.html">
										<i className="flaticon-left-arrow-1"></i>
										Previous Post
									</Link>
									<a href="blog-details.html">
										<i className="flaticon-right-arrow-1"></i>
										Next Post
									</Link>
								</div> */}
							</div>
							<div className="comment-respond">
								<h3>Post A Comment</h3>
								<form>
									<div className="row">
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<textarea
													className="form-control"
													cols="30"
													rows="5"
													placeholder="Your comment"
												></textarea>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-6">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Your Name"
												/>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-6">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Your Email"
												/>
											</div>
										</div>
										<div className="col-lg-4 col-md-4 col-sm-12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													placeholder="Website"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-check">
												<input
													type="checkbox"
													className="form-check-input"
													id="checkme"
												/>
												<label
													className="form-check-label"
													htmlFor="checkme"
												>
													Save my name, email, and
													website in this browser for
													the next time I comment.
												</label>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<button
												type="submit"
												className="default-btn"
											>
												Submit Now
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<aside className="widget-area">
								<div className="widget widget_search">
									<form>
										<input
											type="search"
											className="search-field"
											placeholder="Search keyword"
										/>
										<button type="submit">
											<i className="flaticon-search"></i>
										</button>
									</form>
								</div>
								<LatestPosts slug={nodes[0].url} />
								<div className="widget widget_categories">
									<h3 className="widget-title">Categories</h3>
									<ul>
										<li>
											<Link to="/blog">
												Web Design{" "}
												<span className="count">
													(05)
												</span>
											</Link>
										</li>
										<li>
											<Link to="/blog">
												Branding{" "}
												<span className="count">
													(14)
												</span>
											</Link>
										</li>
										<li>
											<Link to="/blog">
												Digital Art{" "}
												<span className="count">
													(03)
												</span>
											</Link>
										</li>
										<li>
											<Link to="/blog">
												Graphics{" "}
												<span className="count">
													(12)
												</span>
											</Link>
										</li>
										<li>
											<Link to="/blog">
												Marketing{" "}
												<span className="count">
													(25)
												</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="widget widget_follow_us">
									<h3 className="widget-title">Follow Us</h3>
									<ul>
										<li>
											<a
												href="https://facebook.com"
												target="_blank"
												rel="noreferrer"
											>
												Facebook
											</a>
										</li>
										<li>
											<a
												href="https://twitter.com"
												target="_blank"
												rel="noreferrer"
											>
												Twitter
											</a>
										</li>
										<li>
											<a
												href="https://instagram.com"
												target="_blank"
												rel="noreferrer"
											>
												Instagram
											</a>
										</li>
										<li>
											<a
												href="https://pinterest.com"
												target="_blank"
												rel="noreferrer"
											>
												Pinterest
											</a>
										</li>
										<li>
											<a
												href="https://linkedin.com"
												target="_blank"
												rel="noreferrer"
											>
												Linkedin
											</a>
										</li>
									</ul>
								</div>
								<div className="widget widget_tag_cloud">
									<h3 className="widget-title">Tags</h3>
									<div className="tagcloud">
										<Link to="/blog">Affiliate</Link>
										<Link to="/blog">Motions Graphics</Link>
										<Link to="/blog">Digital</Link>
										<Link to="/blog">Product Landing</Link>
										<Link to="/blog">Company Branding</Link>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</div>

			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default BlogTemplate;

export const query = graphql`
	query ($slug: String) {
		allArticlesJson(filter: { url: { eq: $slug } }) {
			nodes {
				id
				title
				url
				postMonth
				postDate
				content
				featureImg {
					publicURL
				}
			}
		}
	}
`;
