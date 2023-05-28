import React from "react";
import Layout from "../components/Layout";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Seo } from "../components/Layout/seo";
import PageBanner from "../components/Common/PageBanner";
import Expertise from "../components/About/Expertise";
import Quotes from "../components/About/Quotes";
import FunFacts from "../components/Index/FunFacts";
import WhyChooseUs from "../components/Index/WhyChooseUs";
import Feedback from "../components/Index/Feedback";
import Pricing from "../components/Index/Pricing";
import Subscribe from "../components/Index/Subscribe";
import Team from "../components/Common/Team";

const aboutUs = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="About Us" />
			<Expertise />
			<Quotes />
			<FunFacts />
			<WhyChooseUs />
			<Feedback bgColor="dotted-bg bg-f4d9d3" bgColor2="bg-color" />
			<Pricing sectionClassName="dotted-bg" />
			<Team />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default aboutUs;

export const Head = () => <Seo title="About Us" />;
