

'use client';

import DetailsPage from '@/components/ServiceDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';


import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import serviceData from '../../../data/serviceData'
import serviceSocial from '../../../data/ServiceSocial'
import cardsData from '../../../data/CardData'
import Loading from '@/components/Loading';
import ErrorPage from '@/components/404Page';


const ServiceItems = ({ item }) => {
	return (
		<div className="flex justify-between items-start gap-4">
			<img src={item.img} alt="" className="img-fluid rounded" />
			<div className="ml-3">
				<h6 className="mb-2 text-base font-medium leading-tight">
					{item.title}
				</h6>
				<div className="flex flex-wrap opacity-50">
					<span className="mr-3">{item.date}</span>
					<span>
						By <b>{item.author}</b>
					</span>
				</div>
			</div>
		</div>
	);
};

ServiceItems.propTypes = {
	item: PropTypes.object.isRequired,
};

const Contents = () => (
	<div>
		<p className="text-[17px] mb-2 opacity-80">
			Teaching is a noble profession. Think about the most respected persons in
			our society. Yes, they are the teachers. If you ask someone about some of
			his favourite persons, it is most likely to find a teacher of him in his
			answer. So, being a teacher is an amazing thing. Besides, the career
			prospect in teaching is also lucrative. In England and Wales, as a Newly
			Qualified Teacher (NQT) you’ll earn £24,373 to £30,480 depending on
			location Since you have decided to become a teacher, you may be known to
			all of these.
		</p>
		<p className="text-[17px] mb-2 opacity-80">
			Getting into teaching requires many years of preparation. If you don’t
			know how to become a teacher, you may find the way challenging. So, in
			this article, I’ll walk you through the steps to becoming a teacher in the
			UK.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			7 Steps to becoming a teacher
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Being a teacher is always exciting. It opens a new horizon for us to serve
			and build the nation in a noble way. In order to become a teacher, you
			have to undertake a number of steps. So let’s get started to explore:
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			1. Decide what type of teacher you want to be
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Teachers can be of several types such as nursery teachers, school
			teachers, special teachers, professors and so on. So, before stepping into
			the route to become a teacher, decide first what type of teacher you want
			to be. In the UK, the education system is broadly divided into two
			systems.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			2. Decide your preferred subject
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			In primary schools, you may be responsible for teaching multiple subjects.
			But in the secondary schools, it’s most likely that you’ll be teaching the
			subject in which you did your major. So, it’s your choice which subject do
			you want to teach. It’s necessary to decide this because it will keep you
			on the track to become a teacher and step forward to make your
			preparation.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
			3. Earn your bachelor degree
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
			Unlike many other professions, teaching is very strict in its
			requirements. It’s because we don’t want to give the responsibility of
			educating our children to someone who doesn’t have the proper education
			and credentials. So, getting into teaching requires a minimum degree in
			the first place. After that, the other things come. You need a bachelor
			degree to become a teacher. There are also other specialized and advanced
			degrees, but you need your bachelor degree before everything.
		</p>
		<p className="text-[17px] mb-2 opacity-80">
			If you want to be a primary teacher, then you’ll need a degree of Bachelor
			of Education (BEd.) But, if you want to be a secondary teacher, you have
			to do your bachelor in your preferred subject. Your major in your degree
			will determine which subject you’ll be teaching. Earning a bachelor degree
			will require 3 to 4 years. However, if you want to be a nursery or
			pre-school teacher, you don’t need a bachelor degree rather a proper
			license and certification in teaching children.
		</p>
	</div>
);

const Social = ({ list, index }) => (
	<a href={list.href} className="text-lg sm:text-[22px]">
		<FontAwesomeIcon
			icon={list.icon}
			className={classNames({ "mr-3": index })}
		/>
	</a>
);

Social.propTypes = {
	list: PropTypes.object.isRequired,
	index: PropTypes.number,
};

const SocialContent = () => (
	<div className="flex flex-col sm:flex-row items-center justify-between my-12 sm:mr-12">
		<div className="flex flex-col sm:flex-row items-center">
			<div className="mr-2">
				<img
					src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
					alt=""
					className="max-w-full h-auto rounded-full border border-btnBorder"
					width="47"
				/>
			</div>
			<div>
				<p className="mb-0">
					By<b className='text-[#F68921]'> Alan Bell</b>
				</p>
			</div>
			<p className="ml-3 mt-3 sm:mt-0">August 10th, 2020</p>
		</div>
		<div>
			<ul className="mt-3 flex gap-1.5 text-[#1d294f] lg:gap-4 sm:mt-0">
				{serviceSocial.map((list, j) => (
					<Social list={list} index={j} key={j} />
				))}
			</ul>
		</div>
	</div>
);

const SideBar = () => (
	<>
		<div className="bg-[#1d294f] bg-opacity-90 dark:bg-[#1E2735] text-white rounded-t-lg py-4 px-3 mb-4">
			<h5 className="text-xl font-medium text-[#F68921]">Popular Service</h5>
		</div>
		{serviceData.map((item, i) => (
			<Fragment key={i}>
				{!!i && <hr className="my-4" />}
				<ServiceItems item={item} />
			</Fragment>
		))}
	</>
);



const ServiceDetails2 = () => {
	const params = useParams();
	const id = params.id;
	const [service, setService] = useState(null);
  
	useEffect(() => {
	  if (id !== undefined && id >= 0 && id < cardsData.length) {
		setService(cardsData[id]);
	  }
	}, [id]);
  
	if (!service) {
	  return <div>
		<ErrorPage/>
	  </div>;
	}
  
	return (
		<section className="ezy__blogdetails1 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<DetailsPage/>
			<div className="container px-4 mx-auto">
				<div className="grid md:grid-cols-3 gap-4">
					<div className="col-span-3 md:col-span-2 px-4">
						<h1 className="whitespace-nowrap font-bold text-2xl md:text-5xl pt-7 text-[#F68921] tracking-widest mb-12">
							{service.title}
						</h1>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-8 px-4">
						<img
							src={service.imgSrc}
							alt=""
							className="w-full h-auto rounded"
						/>
						{/* social content */}
						<SocialContent />

						{/* contents */}
						<Contents />
					</div>
					{/* sidebar */}
					<div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-9 px-4 md:pl-6 lg:pl-0">
						<SideBar />
					</div>
				</div>
			</div>
		</section>
	);
};
export default ServiceDetails2;