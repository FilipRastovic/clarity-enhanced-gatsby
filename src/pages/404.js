import React from "react";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Layout/Footer";
import Subscribe from "../components/Index/Subscribe";
import errorImg from "../images/error.png";
import { Link } from "gatsby";

const NotFoundPage = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<div className="not-found-area pb-100 dotted-bg bg-fbecd7">
				<div className="container">
					<div className="not-found-content text-center">
						<img src={errorImg} alt="error" />
						<h4>Oops! That page can't be found</h4>
						<Link to="/" className="default-btn">
							Back to Home <i className="flaticon-right-up"></i>
						</Link>
					</div>
				</div>
			</div>
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
