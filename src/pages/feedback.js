import React from "react";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Layout from "../components/Layout";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Subscribe from "../components/Index/Subscribe";
import ClientsFeedback from "../components/Common/ClientsFeedback";

const feedback = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Feedback" />

			<ClientsFeedback />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default feedback;
export const Head = () => <Seo title="Feedback" />;
