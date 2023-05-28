import React from "react";
import { Seo } from "../../components/Layout/seo";
import Layout from "../../components/Layout";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import PortfolioIndex3 from "../../components/Portfolio/PortfolioIndex3";
import WhyChooseUs from "../../components/Index/WhyChooseUs";
import Subscribe from "../../components/Index/Subscribe";
import Footer from "../../components/Layout/Footer";

const PortfolioThree = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Portfolio" />
			<PortfolioIndex3 />
			<WhyChooseUs />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default PortfolioThree;

export const Head = () => <Seo title="Portfolio 3" />;
