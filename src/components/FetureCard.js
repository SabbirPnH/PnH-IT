import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';
import getFeature from "@/lib/Feature";


// Features data
// const features = [
//     {
//         icon: '/img/feture.png',
//         title: "5 Years of Experience",
//         description: "We have been working in this field since 2019",
//     },
//     {
//         icon: '/img/team.png',
//         title: "Team Work",
//         description: "We work together like family.",
//     },
//     {
//         icon: '/img/24-7.png',
//         title: "24/7",
//         description: "We ensure maintenance for each moment.",
//     },
//     {
//         icon: '/img/support.png',
//         title: "Online Service",
//         description: "No matter where you are located, we provide service in each place through online as well as offline.",
//     },
// ];

const FeatureItem = ({ feature, index }) => {
    const delay = index * 200;
    return (
        <div 
            className="cursor-pointer bg-slate-100 dark:bg-[#1E2735] rounded-[10px] border-2 border-t-[#0b1727] relative p-6  pt-12 lg:px-12 ml-6 h-full hover:bg-[#0b1727] hover:text-white transition duration-300 ease-in-out" 
            data-aos="zoom-out" 
            data-aos-delay={delay}
        >
            <div className=" w-[74px] h-[74px] bg-slate-100 dark:bg-[#1E2735] shadow-lg text-[#F68921] rounded-full text-[32px] inline-flex items-center justify-center mb-6 absolute left-0 top-0 -m-6">
                <img  src={feature.image} alt={feature.title} />
            </div>
            <h4 className=" text-xl sm:text-2xl font-bold mb-2 sm:mb-4 ">{feature.title}</h4>
            <p className="opacity-70 line-clamp-1 sm:line-clamp-none ">{feature.text}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const Feature =async () => {
    const features =await getFeature()
    return (
        <section className="ezy__featured3 light  lg:py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="px-2 sm:px-8 xl:px-24">
                {/* <div className="grid grid-cols-12 mb-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
                            Our Features
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
                        <p className="text-lg leading-6 mb-6 capitalize">
                            The dynamic landscape of technology, the evolution of IT solutions is not just a 
                        </p>
                    </div>
                </div> */}
                <div className="block lg:hidden ">
                    {/* Swiper for mobile devices */}
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                       
                        
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={index} className="pt-8">
                                <FeatureItem feature={feature} index={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="hidden lg:grid lg:grid-cols-12 gap-y-6 md:gap-x-6">
                    {/* Grid for larger screens */}
                    {features.map((feature, index) => (
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 py-4" key={index}>
                            <FeatureItem feature={feature} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
