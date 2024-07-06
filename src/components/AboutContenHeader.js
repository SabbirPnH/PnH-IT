import React from "react";
import PropTypes from "prop-types";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Link from "next/link";

const stories = [
	{
		text: "Beautiful and easy to understand UI.",
	},
	{
		text: "Theme advantages are pixel perfect design & clear code",
	},
	{
		text: "Present your services with flexible",
	},
	{
		text: "Find more creative ideas for your projects",
	},
	{
		text: "Faucibus porta lacus fringilla vel",
	},
];

const StoryItem = ({ item, index }) => {
	const { text } = item;
	return (
		<>
			<div className="mb-4 flex">
				<IoCheckmarkDoneSharp
				
					className="fa fa-check text-[#F68921] mr-2 text-sm"
				/>
				<span className="opacity-75 text-sm">{text}</span>
			</div>

			{index !== stories.length && <hr className="w-11/12 my-2" />}
		</>
	);
};

StoryItem.propTypes = {
	item: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const AboutContenHeader = () => {
	return (
		<section className="ezy__about9 light py-14 md:pt-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-5 lg:px-10">
				<div className="grid grid-cols-12 items-center gap-4 mb-12">
					<div className="col-span-12 lg:col-span-6">
						<h6 className="font-medium opacity-70 mb-2">Hello Visitor,</h6>
						<h1 className="text-3xl leading-none font-bold  tracking-wider mb-2">
							WELCOME TO PnH IT SOLUTION
						</h1>
						<hr className="bg-[#F68921] h-1 rounded-[3px] w-12 opacity-100 my-6" />
						<p className="opacity-70 mb-2">
                        Since our inception set out in 2016,PnH set out to disrupt inception the HR & Talent/Staffing Management industry. Purposefully designed by our founders (Iftekhar and Siddique) to connect great companies and great talent.
						</p>
						<ul className="flex flex-col ezy__about9-features mt-5">
							{stories.map((item, i) => (
								<li key={i}>
									<StoryItem item={item} index={i + 1} key={i} />
								</li>
							))}
						</ul>
						<div className="mt-12">
							<Link href={'/aboutconten/1'}>
                            <button className="bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-opacity-90 rounded-md px-5 py-2 transition">
								Learn More
							</button>
                            </Link>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="mt-12 lg:mt-0">
							<img
								src="https://cdn.easyfrontend.com/pictures/about/about9.jpg"
								alt=""
								className="max-w-full h-auto rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutContenHeader;
