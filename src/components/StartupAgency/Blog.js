import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
const query = graphql`
	query {
		allArticlesJson(limit: 3) {
			nodes {
				id
				title
				shortDesc
				postMonth
				postDate
				featureImg {
					publicURL
				}
				url
			}
		}
	}
`;

const Blog = () => {
	const {
		allArticlesJson: { nodes },
	} = useStaticQuery(query);
	return (
		<div className="blog-area pt-100 pb-75 dotted-bg">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">OUR BLOG</span>
					<h2>Be genuine, be nice, know your audience</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum pretium
						pulvinar ut nec. Ac consequat blandit gravida turpis a
						risus pharetra amet molestie eget porta.
					</p>
				</div>
				<div className="row justify-content-center">
					{nodes.map((article) => (
						<div className="col-lg-4 col-md-6" key={article.id}>
							<div className="single-blog-item mb-25">
								<Link
									to={`/blogs/${article.url}`}
									className="image d-block"
								>
									<img
										src={article.featureImg.publicURL}
										alt="blog"
									/>
									<div className="date">
										{article.postDate}
										<span>{article.postMonth}</span>
									</div>
								</Link>

								<div className="content">
									<h4>
										<Link to={`/blogs/${article.url}`}>
											{article.title}
										</Link>
									</h4>
									<p>{article.shortDesc}</p>
									<Link
										to={`/blogs/${article.url}`}
										className="link-btn"
									>
										Read More{" "}
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

export default Blog;
