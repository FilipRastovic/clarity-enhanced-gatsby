import React from "react";
import { Seo } from "../../components/Layout/seo";
import Layout from "../../components/Layout";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyle3 from './../../components/Services/ServicesStyle3';
import Funfacts from "../../components/Index/FunFacts";
import Pricing from "../../components/Index/Pricing";
import Subscribe from "../../components/Index/Subscribe";
import Footer from "../../components/Layout/Footer";

const ServiceThree = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Services" />
			<ServicesStyle3 />
			<Funfacts />
			<Pricing />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default ServiceThree;

export const Head = () => <Seo title="Services 3" />;
