import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Layout/seo";

import Navbar from "../components/Layout/Navbar";

import Subscribe from "../components/StartupAgency/Subscribe";
import Footer from "../components/Layout/FooterStyleThree";
import Banner from "../components/StartupAgency/Banner";
import Features from "../components/Index/Features";
import Expertise from "../components/StartupAgency/Expertise";
import Services from "../components/StartupAgency/Services";
import FunFacts from "../components/StartupAgency/FunFacts";
import WhyChooseUs from "../components/StartupAgency/WhyChooseUs";
import SuccessorTeam from "../components/Common/SuccessorTeam";
import Feedback from "../components/StartupAgency/Feedback";
import Projects from "../components/Index/Projects";
import Pricing from "../components/Index/Pricing";
import Blog from "../components/StartupAgency/Blog";

const startupAgency = () => {
	return (
		<Layout>
			<Navbar NavStyleClass="style-four dotted-bg" />
			<Banner />
			<Features
				boxDesign="single-feature-box mb-25"
				styleClass="pt-100 pb-75 dotted-bg"
			/>
			<Expertise />
			<Services />
			<FunFacts />
			<WhyChooseUs />
			<SuccessorTeam />
			<Feedback />
			<Projects />
			<Pricing sectionClassName="dotted-bg bg-f8f8f8" />
			<Blog />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default startupAgency;
export const Head = () => <Seo title="Startup Agency" />;
