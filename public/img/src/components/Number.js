import React from "react";
import PropTypes from "prop-types";

const cards = [
	{
		count: "139",
		title: "Completed Event",
	},
	{
		count: "12k",
		title: "Project Completed",
	},
	{
		count: "97+",
		title: "Completed Fund",
	},
	{
		count: "333",
		title: "Completed Ticket",
	},
];

const CardItem = ({ item }) => (
	<>
		<h3 className="text-[45px] font-black mb-2">{item.count}</h3>
		<h5 className="text-lg font-medium opacity-80">{item.title}</h5>
	</>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Numbers = () => {
	return (
		<section className="ezy__numbers4 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center">
					{cards.map((item, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
							<CardItem item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Numbers;