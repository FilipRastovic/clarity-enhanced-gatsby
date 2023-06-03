import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../../images/logo.png";
import SearchForm from "./SearchForm";
import DrawerNav from "./DrawerNav";

const query = graphql`
	query {
		menubarJson {
			menus {
				id
				name
				url
				pages {
					id
					name
					url
				}
			}
		}
	}
`;

const Navbar = ({ NavStyleClass = "" }) => {
	const [searchModal, setSearchModal] = useState(false);
	const [drawerModal, setDrawerModal] = useState(false);
	const {
		menubarJson: { menus },
	} = useStaticQuery(query);

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("sticky");
			} else {
				elementId.classList.remove("sticky");
			}
		});
	});

	const isActive = ({ isCurrent }) => {
		const activeClass = isCurrent ? "active" : "";
		return { className: `nav-link ${activeClass}` };
	};

	console.log(menus[0])

	return (
		<>
			<div className={`navbar-area ${NavStyleClass}`} id="navbar">
				<div
					className={`${
						NavStyleClass === "style-four dotted-bg"
							? "container"
							: "container-fluid"
					}`}
				>
					<nav className="navbar navbar-expand-lg">
						<AniLink fade to="/" className="navbar-brand">
							<img src={logo} alt="logo" />
						</AniLink>

						<button
							className="navbar-toggler"
							role="button"
							onClick={() => setDrawerModal(!drawerModal)}
						>
							<span className="burger-menu">
								<span className="top-bar"></span>
								<span className="middle-bar"></span>
								<span className="bottom-bar"></span>
							</span>
						</button>
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								{menus &&
									menus.map((menu) => (
										<li className="nav-item" key={menu.id}>
											{menu.pages ? 
												<Link
													to='/'
													className="dropdown-toggle nav-link"
												>
													{menu.name}
												</Link>
											:
												<Link
													to={menu.url}
													className="nav-link"
												>
													{menu.name}
												</Link>
											}
											
											{menu.pages && (
												<ul className="dropdown-menu">
													{menu.pages.map((page) => (
														<li
															className="nav-item"
															key={page.id}
														>
															<AniLink
																fade
																to={page.url}
																activeClassName="active"
																getProps={isActive}
															>
																{page.name}
															</AniLink>
														</li>
													))}
												</ul>
											)}
										</li>
									))}
							</ul>
							<div className="others-option d-flex align-items-center">
								<div className="option-item">
									<button
										type="button"
										className="search-btn"
										onClick={(e) =>
											setSearchModal(!searchModal)
										}
									>
										<i className="flaticon-search"></i>
									</button>
								</div>
								<div className="option-item">
									<Link
										to="/contact-us"
										className="default-btn"
									>
										Let’s Talk{" "}
										<i className="flaticon-comment"></i>
									</Link>
								</div>
								<div className="option-item">
									<button
										className="sidebar-toggler"
										onClick={() =>
											setDrawerModal(!drawerModal)
										}
									>
										<i className="flaticon-menu-2"></i>
									</button>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
			{searchModal && (
				<SearchForm
					onSearchModal={() => setSearchModal(!searchModal)}
				/>
			)}
			{drawerModal && (
				<DrawerNav onDrawerModal={() => setDrawerModal(!drawerModal)} />
			)}
		</>
	);
};

export default Navbar;
