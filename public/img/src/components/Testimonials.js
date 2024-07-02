import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import testimonialList from "../data/TestimonialList";


const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const Testimonial = () => {
	const [index, setIndex] = useState(0);
	const { author, description, rating } = testimonialList[index];

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section  className="ezy__testimonial12 light relative py-10  dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
			<div className="container px-4 mx-auto">

				<div className="flex justify-center sm:px-5 mt-6">
					<div className="lg:max-w-5xl">
						<div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6">
							<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="md:w-1/2 md:py-12">
								<div
									className="bg-center bg-no-repeat bg-cover  rounded-xl h-full min-h-[450px] object-cover"
									style={{
										backgroundImage: `url(${author.picture})`,
									}}
								></div>
							</div>
							<div className="md:w-1/2 relative">
								<div className="absolute -top-[10%] md:top-0 right-0 left-0 md:-left-[20%] bottom-0 bg-blue-[#1d294f] bg-[#1d294f] dark:bg-slate-800 -z-[1] rounded-xl"></div>
								<div className="flex flex-col text-white justify-center h-full mb-10 md:mb-0">
									<div className="p-6 lg:py-16 mb-6">
										<h4 className="text-2xl font-bold mb-4">
											{author.fullName}
                                            
										</h4>
                                        <p>{author.designation}</p>
										<Rating rating={rating} showLabel={false} />
                                        
										<p data-aos="fade-up"
     data-aos-duration="2000" className="opacity-50">{description}</p>
									</div>
									<div className="px-6 lg:px-12 text-end">
									<button
									className="w-10 h-10 text-[12px] border border-[#1d294f] dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 bg-[#F68921] hover:bg-[#e07a19] hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
									onClick={() => handleControl("prev")}
									>
									<FontAwesomeIcon icon={faChevronLeft} />
									</button>

										<button
											className="w-10 h-10 text-[12px] border border-[#1d294f] dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 bg-[#F68921] hover:bg-[#e07a19] hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
											onClick={() => handleControl("next")}
										>
											<FontAwesomeIcon icon={faChevronRight} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testimonial;