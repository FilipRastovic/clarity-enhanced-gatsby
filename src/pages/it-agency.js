import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/seo";
import Navbar from "../components/Layout/Navbar";
import Subscribe from "../components/Index/Subscribe";
import Footer from "../components/Layout/Footer";
import Banner from "../components/ITAgency/Banner";
import Partner from "../components/Index/Partner";
import Features from "../components/Index/Features";
import Quotes from "../components/Index/Quotes";
import Services from "../components/ITAgency/Services";
import FunFacts from "../components/Index/FunFacts";
import WhyChooseUs from "../components/Index/WhyChooseUs";
import Feedback from "../components/Index/Feedback";
import Project from "../components/ITAgency/Project";
import Expertise from "../components/ITAgency/Expertise";
import LetsTalk from "../components/ITAgency/LetsTalk";
import Pricing from "../components/Index/Pricing";
import Blog from "../components/Index/Blog";

const agency = () => {
	return (
		<Layout>
			<header className="header-area">
				<Navbar NavStyleClass="style-two" />
			</header>
			<Banner />
			<Partner styleClass="bg-black" />
			<Features
				boxDesign="single-feature-item mb-25"
				styleClass="pt-100 pb-75 dotted-bg bg-fbecd7"
			/>
			<Quotes bgColor="dotted-bg bg-f7ffe2" />
			<Services boxDesign="single-service-item" />
			<FunFacts />
			<WhyChooseUs />
			<Feedback bgColor="dotted-bg bg-f7ffe2" bgColor2="pb-100" />
			<Project />
			<Expertise />
			<LetsTalk />
			<Pricing sectionClassName="dotted-bg bg-f7ffe2" />
			<Blog />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default agency;
export const Head = () => <Seo title="IT Agency" />;
