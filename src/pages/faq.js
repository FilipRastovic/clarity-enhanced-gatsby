import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Accordion from "../components/Common/Accordion";
import Subscribe from "../components/Index/Subscribe";
import Footer from "../components/Layout/Footer";

const faq = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Faq" />

			<Accordion />

			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default faq;
export const Head = () => <Seo title="Faq" />;
