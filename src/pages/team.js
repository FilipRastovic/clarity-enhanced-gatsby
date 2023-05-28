import React from "react";
import { Seo } from "../components/Layout/seo";
import TopHeader from "../components/Layout/TopHeader";
import Navbar from "../components/Layout/Navbar";
import Layout from "../components/Layout";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";
import Subscribe from "../components/Index/Subscribe";
import Team from "../components/Common/Team";
import SuccessorTeam from "../components/Common/SuccessorTeam";

const team = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Meet Our Team" />

			<Team sectionClassName="pt-100" />
			<SuccessorTeam />
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default team;

export const Head = () => <Seo title="Meet Our Team" />;
