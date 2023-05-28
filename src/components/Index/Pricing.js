import React, { useState } from "react";
import MonthlyPricing from "./PricingContent/MonthlyPricing";
import YearlyPricing from "./PricingContent/YearlyPricing";
import shape3 from "../../images/shape/shape3.png";
import shape4 from "../../images/shape/shape4.png";

const Pricing = ({ sectionClassName = "dotted-bg bg-f4d9d3" }) => {
	const [tabActive, setTabActive] = useState("monthly");
	return (
		<div className={`pricing-area pt-100 pb-75 ${sectionClassName}`}>
			<div className="container">
				<div className="section-title">
					<span className="sub-title">OUR PRICING</span>
					<h2>Working together to create the next big thing</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Rutrum pretium
						pulvinar ut nec. Ac consequat blandit gravida turpis a
						risus pharetra amet molestie eget porta.
					</p>
				</div>
				<ul className="pricing-tabs nav nav-tabs">
					<li className="nav-item" role="presentation">
						<button
							className={`nav-link ${
								tabActive === "monthly" ? "active" : ""
							}`}
							id="monthly-tab"
							onClick={(e) => setTabActive("monthly")}
						>
							Monthly
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className={`nav-link ${
								tabActive === "yearly" ? "active" : ""
							}`}
							id="yearly-tab"
							onClick={(e) => setTabActive("yearly")}
						>
							Yearly
						</button>
					</li>
				</ul>
				<div className="tab-content">
					{tabActive === "monthly" ? (
						<MonthlyPricing
							tActive={tabActive === "monthly" && "active"}
						/>
					) : (
						<YearlyPricing
							tActive={tabActive === "yearly" && "active"}
						/>
					)}
				</div>
			</div>
			<div className="shape3">
				<img src={shape3} alt="shape3" />
			</div>
			<div className="shape4">
				<img src={shape4} alt="shape4" />
			</div>
		</div>
	);
};

export default Pricing;
