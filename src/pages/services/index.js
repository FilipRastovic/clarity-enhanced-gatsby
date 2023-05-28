import React from "react";
import { Seo } from "../../components/Layout/seo";
import Layout from "../../components/Layout";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Services from "../../components/Services";
import Funfacts from "../../components/Index/FunFacts";
import Pricing from "../../components/Index/Pricing";
import Subscribe from "../../components/Index/Subscribe";
import Footer from "../../components/Layout/Footer";

const index = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Services" />
			<Services />
			<Funfacts />
			<Pricing />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default index;

export const Head = () => <Seo title="Services" />;
