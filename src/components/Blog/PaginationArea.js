import { Link } from "gatsby";
import React from "react";

const PaginationArea = () => {
	return (
		<nav className="pagination-area">
			<ul className="pagination">
				<li className="page-item disabled">
					<Link className="page-link" to="/blog">
						<i className="flaticon-chevron-1"></i>
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link active" to="/blog">
						1
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link" to="/blog">
						2
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link" to="/blog">
						3
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link" to="/blog">
						4
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link" to="/blog">
						5
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link" to="/blog">
						<i className="flaticon-chevron"></i>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default PaginationArea;
