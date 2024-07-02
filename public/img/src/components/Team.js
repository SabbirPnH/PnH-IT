



"use client";

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import teamMembers from '../data/Team'
import PropTypes from "prop-types";
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeamMemberItem = ({ member }) => (
    <div
        className="bg-white dark:bg-slate-800 shadow-xl rounded-xl hover:-translate-y-1 duration-500 h-full p-6 lg:p-8"
        data-aos="fade-up"
        data-aos-duration="1000" // Customize duration as needed
    >
        <img
            src={member.picture}
            alt={member.fullName}
            className="max-w-full h-auto rounded-full border-4 p-1 border-[#F68921] mx-auto -mt-20"
            width="120"
            data-aos="zoom-in"
            data-aos-delay="200" // Customize delay as needed
        />
        <div className="mt-6" data-aos="fade-in" data-aos-delay="400">
            <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
            <p className="mb-4 text-sm">{member.designation}</p>
            <p className="opacity-50">{member.bio}</p>
            <div className="mt-6">
                {member.socialLinks.map((item, i) => (
                    <a
                        href={item.href}
                        className={`inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 ${
                            i + 1 !== member.socialLinks.length && "mr-4"
                        }`}
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={600 + i * 100} // Stagger animations
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const TeamMember = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="ezy__team10 light py-8 md:pb-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4  lg:px-16 mx-auto" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="max-w-lg text-center">
                        <h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
                            Our Experts Team
                        </h2>
                        <p>
                        Our team members are passionate about technology and committed to staying ahead of industry trends.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-6 text-center pt-6">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1 pt-24 sm:pt-0" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamMember;