import React from "react";
import { Link } from "gatsby";

const BlogCard = ({
	title,
	shortDesc,
	postDate,
	postMonth,
	url,
	featureImg,
}) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-blog-post mb-25">
				<Link to={`/blogs/${url}`} className="image d-block">
					<img src={featureImg.publicURL} alt={title} />
				</Link>

				<div className="content">
					<div className="date">
						{postDate}
						<span>{postMonth}</span>
					</div>
					<h4>
						<Link to={`/blogs/${url}`}>{title}</Link>
					</h4>
					<p>{shortDesc}</p>
					<Link to={`/blogs/${url}`} className="link-btn">
						Read More <i className="flaticon-right-up"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
