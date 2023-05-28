import React from "react";
import { Seo } from "../../components/Layout/seo";
import Layout from "../../components/Layout";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyle4 from './../../components/Services/ServicesStyle4';
import Funfacts from "../../components/Index/FunFacts";
import Pricing from "../../components/Index/Pricing";
import Subscribe from "../../components/Index/Subscribe";
import Footer from "../../components/Layout/Footer";

const ServiceFour = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Services" />
			<ServicesStyle4 />
			<Funfacts />
			<Pricing />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default ServiceFour;

export const Head = () => <Seo title="Services 4" />;
