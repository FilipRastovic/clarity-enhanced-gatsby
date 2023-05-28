import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Subscribe from "../components/DigitalMarketing/Subscribe";
import Footer from "../components/Layout/FooterStyleTwo";
import Banner from "../components/DigitalMarketing/Banner";
import Features from "../components/DigitalMarketing/Features";
import Expertise from "../components/DigitalMarketing/Expertise";
import Quotes from "../components/DigitalMarketing/Quotes";
import Services from "../components/DigitalMarketing/Services";
import FunFacts from "../components/DigitalMarketing/FunFacts";
import WhyChooseUs from "../components/DigitalMarketing/WhyChooseUs";
import Feedback from "../components/DigitalMarketing/Feedback";
import Projects from "../components/Index/Projects";
import Team from "../components/Common/Team";
import Partner from "../components/DigitalMarketing/Partner";
import Pricing from "../components/Index/Pricing";
import LetsTalk from "../components/DigitalMarketing/LetsTalk";
import Blog from "../components/Index/Blog";

const digitalAgency = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar NavStyleClass="style-three" />
			</header>
			<Banner />
			<Features />
			<Expertise />
			<Quotes />
			<Services />
			<FunFacts />
			<WhyChooseUs />
			<Feedback />
			<Projects />
			<Team />
			<Partner />
			<Pricing sectionClassName="dotted-bg" />
			<LetsTalk />
			<Blog />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default digitalAgency;
export const Head = () => <Seo title="Digital Marketing" />;
