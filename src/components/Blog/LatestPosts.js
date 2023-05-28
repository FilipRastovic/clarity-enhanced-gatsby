import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const query = graphql`
	query ($slug: String) {
		allArticlesJson(
			limit: 4
			filter: { url: { ne: $slug } }
			sort: { postDate: DESC }
		) {
			nodes {
				id
				title
				url
				postMonth
				postDate
				postYear
				featureImg {
					publicURL
				}
			}
		}
	}
`;

const LatestPosts = () => {
	// console.log(location);
	const {
		allArticlesJson: { nodes },
	} = useStaticQuery(query);

	// console.log(nodes);
	return (
		<div className="widget widget_doxi_posts_thumb">
			<h3 className="widget-title">Latest Posts</h3>
			{nodes.map((article) => (
				<article className="item" key={article.id}>
					<Link to={`/blogs/${article.url}`} className="thumb">
						<img src={article.featureImg.publicURL} alt="blog" />
					</Link>
					<div className="info">
						<span className="date">
							{article.postMonth} {article.postDate},{" "}
							{article.postYear}
						</span>
						<h4 className="title">
							<Link to={`/blogs/${article.url}`}>
								{article.title}
							</Link>
						</h4>
					</div>
				</article>
			))}
		</div>
	);
};

export default LatestPosts;
