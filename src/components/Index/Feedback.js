import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
	query {
		feedbackJson {
			feedback {
				id
				author
				position
				texts
			}
		}
	}
`;

const Feedback = ({ bgColor, bgColor2 }) => {
	const {
		feedbackJson: { feedback },
	} = useStaticQuery(query);
	return (
		<div className={`feedback-area ${bgColor2} dotted-bg bg-fbecd7`}>
			<div className="container">
				<div className={`feedback-inner-box ${bgColor}`}>
					<Swiper
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="feedbackSwiper"
					>
						{feedback &&
							feedback.map((feedback) => (
								<SwiperSlide key={feedback.id}>
									<div className="pe-4">
										<i className="flaticon-quotes"></i>
										<p>{feedback.texts}</p>
										<div className="client-info">
											<h4>{feedback.author}</h4>
											<span>{feedback.position}</span>
										</div>
									</div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
