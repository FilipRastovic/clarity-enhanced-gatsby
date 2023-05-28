import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/Index/Banner";
import Partner from "../components/Index/Partner";
import Features from "../components/Index/Features";
import Quotes from "../components/Index/Quotes";
import Services from "../components/Index/Services";
import FunFacts from "../components/Index/FunFacts";
import WhyChooseUs from "../components/Index/WhyChooseUs";
import Feedback from "../components/Index/Feedback";
import Projects from "../components/Index/Projects";
import Pricing from "../components/Index/Pricing";
import Blog from "../components/Index/Blog";
import Subscribe from "../components/Index/Subscribe";
import Footer from "../components/Layout/Footer";

const IndexPage = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<Banner />
			<Partner styleClass="bg-black" />
			<Features
				boxDesign="single-feature-box mb-25"
				styleClass="pt-100 pb-75 dotted-bg bg-fbecd7"
			/>
			<Quotes bgColor="dotted-bg bg-f4d9d3" />
			<Services />
			<FunFacts />
			<WhyChooseUs />
			<Feedback bgColor="dotted-bg bg-f4d9d3" bgColor2="bg-color" />
			<Projects />
			<Pricing />
			<Blog />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <Seo title="Home" />;
