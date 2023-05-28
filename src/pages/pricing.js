import React from "react";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Layout from "../components/Layout";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Subscribe from "../components/Index/Subscribe";
import Pricing from "../components/Index/Pricing";

const pricing = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Pricing" />

			<Pricing sectionClassName="dotted-bg bg-f4f4f4" />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default pricing;

export const Head = () => <Seo title="Pricing" />;
