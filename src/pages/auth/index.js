import React from "react";
import { Seo } from "../../components/Layout/seo";
import TopHeader from "../../components/Layout/TopHeader";
import Navbar from "../../components/Layout/Navbar";
import Layout from "../../components/Layout";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layout/Footer";
import Subscribe from "../../components/Index/Subscribe";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const index = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="Auth" />
			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<Login />
					<div className="ptb-100">
						<hr />
					</div>
					<Signup />
				</div>
			</div>
			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default index;
export const Head = () => <Seo title="Auth" />;
