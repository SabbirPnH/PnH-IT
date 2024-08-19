// import React from "react";
// import PropTypes from "prop-types";

// const cards = [
// 	{
// 		count: "139",
// 		title: "Completed Event",
// 	},
// 	{
// 		count: "12k",
// 		title: "Project Completed",
// 	},
// 	{
// 		count: "97+",
// 		title: "Completed Fund",
// 	},
// 	{
// 		count: "333",
// 		title: "Completed Ticket",
// 	},
// ];

// const CardItem = ({ item }) => (
// 	<>
// 		<h3 classNameName="text-[45px] font-black mb-2">{item.count}</h3>
// 		<h5 classNameName="text-lg font-medium opacity-80">{item.title}</h5>
// 	</>
// );

// CardItem.propTypes = {
// 	item: PropTypes.object.isRequired,
// };

// const Numbers = () => {
// 	return (
// 		<section classNameName="ezy__numbers4 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
// 			<div classNameName="container px-4 mx-auto">
// 				<div classNameName="grid grid-cols-12 gap-6 max-w-7xl mx-auto text-center">
// 					{cards.map((item, i) => (
// 						<div classNameName="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
// 							<CardItem item={item} />
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };
// export default Numbers;


'use client'
import React, { useEffect, useState } from 'react';
import getNumber from '@/lib/Number';

const Numbers = () => {
  const [numbers, setNumbers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const numberData = await getNumber();
        setNumbers(numberData[0]);
      } catch (error) {
        console.error('Error fetching numbers:', error);
      }
    };

    fetchData();
  }, []);

  if (!numbers) {
    return <div>Loading...</div>;
  }

  const {
    project_event_number,
    project_event,
    project_completed_number,
    project_completed,
    completed_fund_number,
    completed_fund,
    completed_ticket_number,
    completed_ticket,
  } = numbers;

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{project_event_number}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            {project_event}
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{project_completed_number}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            {project_completed}
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{completed_fund_number}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            {completed_fund}
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{completed_ticket_number}</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            {completed_ticket}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;



