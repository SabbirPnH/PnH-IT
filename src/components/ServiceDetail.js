'use client';

import DetailsPage from '@/components/ServiceDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import serviceData from '../../src/data/serviceData';  
import serviceSocial from '../../src/data/ServiceSocial';  
import cardsData from '../../src/data/CardData';  
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
		Onsite SEO
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
		We analyse your website’s structure, internal architecture & other key elements that are weighted.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
		Penalty Recovery
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
		Our team of SEO consultants have plenty of experience in link audits & reviewing backlink profiles.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
		Technical SEO Audit
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
		We are well known within the industry for our technical capabilities due to our industry leading software.
		</p>

		<br />
		<h5 className="mb-2 text-xl font-medium opacity-90">
		Infographics Content
		</h5>
		<p className="text-[17px] mb-2 opacity-80">
		Our team of creatives, designers & developers work alongside our SEO & content teams to ideate.
		</p>
		<p className="text-[17px] mb-2 opacity-80">
		Creating an infographic to explain the Founder / CEO title can help visually communicate the key aspects and significance of this role. Here&aposs a detailed breakdown of the content for such an infographic:
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
