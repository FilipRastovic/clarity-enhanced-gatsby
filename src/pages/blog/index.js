import React from "react";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Layout/seo";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import BlogCard from "../../components/Blog/BlogCard";
import PaginationArea from "../../components/Blog/PaginationArea";
import Subscribe from "../../components/Index/Subscribe";
import Footer from "../../components/Layout/Footer";
import { useStaticQuery, graphql } from "gatsby";
const query = graphql`
	query {
		allArticlesJson {
			nodes {
				id
				title
				url
				postMonth
				postDate
				featureImg {
					publicURL
				}
			}
		}
	}
`;

const Blog = () => {
	const {
		allArticlesJson: { nodes },
	} = useStaticQuery(query);
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Blog" />
			<div className="blog-area ptb-100 dotted-bg">
				<div className="container">
					<div className="row justify-content-center">
						{nodes &&
							nodes.map((article) => (
								<BlogCard key={article.id} {...article} />
							))}
					</div>
					<PaginationArea />
				</div>
			</div>
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default Blog;
export const Head = () => <Seo title="Blog" />;
