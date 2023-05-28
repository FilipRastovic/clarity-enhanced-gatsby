import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AccordionItem from "./AccordionItem";

const query = graphql`
	query {
		accordionJson {
			faqs {
				id
				title
				content
			}
		}
	}
`;

const Accordion = () => {
	const {
		accordionJson: { faqs },
	} = useStaticQuery(query);

	return (
		<div className="faq-area ptb-100 dotted-bg">
			<div className="container">
				<div className="faq-accordion accordion">
					{faqs &&
						faqs.map((faq) => (
							<AccordionItem key={faq.id} {...faq} />
						))}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
