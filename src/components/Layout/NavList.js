import React, { useState } from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
const NavList = ({ menu }) => {
	const [accordionStatus, setAccordionStatus] = useState(false);

	const onClicked = () => {
		setAccordionStatus(!accordionStatus);
	};

	const isActive = ({ isCurrent }) => {
		const activeClass = isCurrent ? "active" : "";
		return { className: `accordion-link ${activeClass}` };
	};

	const isPureLink = !!menu.pages;

	return (
		<div className="accordion-item">

			{isPureLink ? (
				<button
					className={`accordion-button ${
						accordionStatus && isPureLink ? "uncollapsed active" : "collapsed"
					} `}
					onClick={onClicked}
					type="button"
				>
					{menu.name}
				</button>
			) : (
				<Link to={menu.url}>
					<button
						className="accordion-button collapsed"
						onClick={onClicked}
						type="button"
					>
						{menu.name}
					</button>
				</Link>
			)}
			

			{isPureLink && (
				<div
					className={`accordion-collapse collapse ${
						accordionStatus && isPureLink && "show"
					} `}
				>
					<div className="accordion-body">
						<div className="accordion">
							{menu.pages && menu.pages.map((page) => (
								<div className="accordion-item" key={page.id}>
									<AniLink
										fade
										to={page.url}
										activeClassName="active"
										getProps={isActive}
									>
										{page.name}
									</AniLink>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavList;
