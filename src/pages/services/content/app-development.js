import React from "react";
import { Seo } from "../../../components/Layout/seo";
import Layout from "../../../components/Layout";
import TopHeader from "../../../components/Layout/TopHeader";
import Navbar from "../../../components/Layout/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import serviceDetailsImg from "../../../images/services/service-details.jpg";
import serviceDetails2Img from "../../../images/services/service-details2.jpg";
import serviceDetails3Img from "../../../images/services/service-details3.jpg";
import serviceDetails4Img from "../../../images/services/service-details4.jpg";
import Subscribe from "../../../components/Index/Subscribe";
import Footer from "../../../components/Layout/Footer";
import ServiceSidebar from "../../../components/Common/ServiceSidebar";

const businessStrategy = () => {
	return (
		<Layout>
			<header className="header-area">
				<TopHeader />
				<Navbar />
			</header>
			<PageBanner pageName="App Development" />

			<div className="service-details-area pt-100 pb-75 dotted-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-12">
							<ServiceSidebar />
						</div>
						<div className="col-lg-8 col-md-12">
							<div className="service-details-desc">
								<div className="image">
									<img
										src={serviceDetailsImg}
										alt="service-details"
									/>
								</div>
								<h2>App Development</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur.{" "}
									<a href="service-details.html">Pulvinar</a>{" "}
									quam commodo nisl suspendisse auctor gravida
									mauris. A quis quis amet aliquam tristique
									sit urna. Diam porttitor sapien lobortis
									nunc dignissim id adipiscing lacinia mattis.{" "}
									<strong>Pellentesque</strong> imperdiet ut
									id consequat elit urna. Neque feugiat nunc
									sit ultrices. Leo amet luctus elemenm
									donecgrcc purus. Dui <i>ultrices gravida</i>{" "}
									in vitae porta justo. In suscipit{" "}
									<u>scelerisque</u> condimentum consequat.
								</p>
								<p>
									Sodales nisi scelerisque mollis ut{" "}
									<strong>malesuada</strong> hendrerit sem
									elit lacinia. Penatibus molestie tempor odio
									aliquam aliquet metus duis rhoncus dolor.
									Nec in <i>fermentum</i> gravida posuere. Ut
									lobortis commodo faucibus tincidunt nascetur
									urna. Nunc quis consectetur elit nisi nec
									convallis convallis et.
								</p>
								<p>
									Sed pharetra pulvinar magna posuere. Ornare
									nisi nulla est cursus. Vitae suspendisse
									amet massa orci quis donec nulla. Est
									porttitor eget lectus nunc amet morbi nunc
									nisl proin. Ornare dui ac in amet. Gravida
									tincidunt feugiat phasellus habitant.
									Tincidunt mi ac.
								</p>
								<div className="row align-items-center mt-25">
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Centralized database
											</h5>
										</div>
									</div>
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Real-time integration
											</h5>
										</div>
									</div>
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Secure server system
											</h5>
										</div>
									</div>
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Rapid deployment
											</h5>
										</div>
									</div>
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Rich dashboards
											</h5>
										</div>
									</div>
									<div className="col-12 col-sm-6 col-md-4">
										<div className="icon-box mb-25">
											<i className="flaticon-check-mark-1"></i>
											<h5 className="mb-0 mt-0">
												Time & cost reduction
											</h5>
										</div>
									</div>
								</div>
								<div className="row justify-content-center mt-10">
									<div className="col-6">
										<div className="mb-25 text-center">
											<img
												src={serviceDetails2Img}
												alt="service-details"
											/>
										</div>
									</div>
									<div className="col-6">
										<div className="mb-25 text-center">
											<img
												src={serviceDetails3Img}
												alt="service-details"
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="mb-25 text-center">
											<img
												src={serviceDetails4Img}
												alt="service-details"
											/>
										</div>
									</div>
								</div>
								<p>
									Sodales nisi scelerisque mollis ut malesuada
									hendrerit sem elit lacinia. Penatibus
									molestie tempor odio aliquam aliquet metus
									duis rhoncus dolor. Nec in fermentum gravida
									posuere. Ut lobortis commodo faucibus
									tincidunt nascetur urna. Nunc quis
									consectetur elit nisi nec convallis
									convallis et.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Subscribe />
			<Footer />
		</Layout>
	);
};

export default businessStrategy;

export const Head = () => <Seo title="App Development" />;
