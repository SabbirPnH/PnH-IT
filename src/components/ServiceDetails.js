import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarAlt,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";


const DetailsPage = () => {
	return (
		<header
			className="ezy__header17 light text-white bg-center bg-cover  bg-fixed"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/featured/feature6.jpg)",
			}}
		>
			<div className="py-10 md:py-20 bg-black bg-opacity-50 dark:bg-opacity-70">
				<div className="container px-4">
					<div className="grid grid-cols-12">
						<div className="col-span-12 text-center">
							<div className="relative inline-block">
								<div>
									<p className="text-lg font-bold uppercase text-[#F68921] mb-2">
										MEET US AT OUR CONFERENCE
									</p>
								</div>

								<div>
									<h1 className="text-[42px] md:text-7xl mb-2 py-4">
										PnH IT Solution 2016
										<span className="w-24 h-1 absolute bottom-0 hidden sm:block bg-[#F68921] -left-12"></span>
										<span className="w-24 h-1 absolute bottom-0 hidden sm:block bg-[#F68921] -right-12"></span>
									</h1>
								</div>
							</div>

							<div>
								<ul className="nav ezy__header17-location inline-flex mt-2">
									<li className="mr-6">
										<FontAwesomeIcon
											icon={faCalendarAlt}
											className="text-[#F68921] mr-1"
										/>
										Mirpur-10, Dhaka-1216, Bangladesh
									</li>
									<li>
										<FontAwesomeIcon
											icon={faMapMarkedAlt}
											className="text-[#F68921] mr-1"
										/>
										184, Razia Plaza
									</li>
								</ul>
								<div className="py-4 flex text-md sm:text-2xl font-bold justify-center items-center gap-4 px-5">
								<div>
									<Link href="/">
									<button className="hover:text-[#F68921] pt-2">Home</button>
									</Link>
								</div>
								<div>
									<FaChevronRight />
								</div>
								<div>
									<Link href="/">
									<button className="hover:text-[#F68921] pt-2">Service</button>
									</Link>
								</div>
								<div>
									<FaChevronRight />
								</div>
								<div>
									<button className="text-[#F68921]">ServiceDetails</button>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default DetailsPage;