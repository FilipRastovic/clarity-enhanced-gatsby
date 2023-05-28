import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
	const [accordionStatus, setAccordionStatus] = useState(false);

	const onClicked = () => {
		setAccordionStatus(!accordionStatus);
	};

	return (
		<div className="accordion-item">
			<button
				className={`accordion-button ${
					accordionStatus ? "uncollapsed" : "collapsed"
				}`}
				type="button"
				onClick={onClicked}
			>
				{title}
			</button>

			<div
				className={`accordion-collapse collapse ${
					accordionStatus && "show"
				} `}
			>
				<div className="accordion-body">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
