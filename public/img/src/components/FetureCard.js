import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faCannabis, faRandom } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const features = [
    {
        icon: '/img/feture.png',
        title: "5 Years of Experience",
        description: "We have been working in this field since 2019",
    },
    {
        icon: '/img/team.png',
        title: "Team Work",
        description: "We work together like family.",
    },
    {
        icon: '/img/24-7.png',
        title: "24/7",
        description: "We ensure maintenance for each moment.",
    },
    {
        icon: '/img/support.png',
        title: "Online Service",
        description: "No matter where you are located, we provide service in each place through online as well as offline.",
    },
];

const FeatureItem = ({ feature, index }) => {
    const delay = index * 200;
    return (
        <div className="cursor-pointer bg-slate-100 dark:bg-[#1E2735] rounded-[10px] border-2 border-t-[#0b1727] relative p-6 pt-12 lg:px-12 ml-6 h-full hover:bg-[#0b1727] hover:text-white transition duration-300 ease-in-out" data-aos="zoom-out" data-aos-delay={delay}>
            <div className="w-[74px] h-[74px] bg-slate-100 dark:bg-[#1E2735] shadow-lg text-[#F68921] rounded-full text-[32px] inline-flex items-center justify-center mb-6 absolute left-0 top-0 -m-6">
                {/* <FontAwesomeIcon icon={feature.icon} /> */}
                <img src={feature.icon}/>
            </div>
            <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
            <p className="opacity-70">{feature.description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const Feature = () => {
    return (
        <section className="ezy__featured3 light py-14 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className=" px-5 sm:px-16 xl:px-24 ">
                <div className="grid grid-cols-12 mb-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
                            Our Features
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
                        <p className="text-lg leading-6 mb-6 capitalize">
                        the dynamic landscape of technology, the evolution of IT solutions is not just a progression but a transformational journey that continually redefines the way businesses operate .
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-y-6 md:gap-x-6">
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
