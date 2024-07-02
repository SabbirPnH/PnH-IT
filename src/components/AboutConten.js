"use client";

import React, { useState } from 'react';
import { GiConfirmed } from "react-icons/gi";

function AboutConten() {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  const toggleVisibility = (index) => {
    setIsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const contentData = [
    {
      title: "About US",
      description: "PNH IT Solutions is a leading IT firm dedicated to providing innovative and comprehensive technology solutions to businesses of all sizes. With a team of highly skilled professionals and a proven track record of success, we deliver cutting-edge solutions tailored to meet the unique needs and challenges of our clients.",
      sections: [
        {
          heading: "Software Development Solutions",
          content: "Developing custom software applications to address specific business needs. This could involve programming languages like Python, Java, C++, or web development technologies like HTML, CSS, and JavaScript."
        },
        {
          heading: "IT Support and Managed Services",
          content: "Outsourcing IT support or opting for managed services to ensure the ongoing maintenance, monitoring, and support of IT systems."
        },
        {
          heading: "Infrastructure Solutions",
          content: "Building and maintaining physical IT infrastructure, including servers, data centers, and storage systems."
        }
      ]
    },
    {
      title: "Our Mission",
      description: "Our goal is to empower organizations by leveraging the latest advancements in IT to drive productivity, efficiency, and growth. Whether it's developing custom software applications, implementing robust cybersecurity measures, or optimizing IT infrastructure, we have the expertise to deliver results.",
      sections: [
        {
          heading: "Excellence:",
          content: "We strive for excellence in everything we do, from delivering high-quality software and hardware solutions to providing top-notch customer service."
        },
        {
          heading: "Innovation:",
          content: "We are dedicated to staying at the forefront of technological advancements. We continuously seek innovative solutions to address the unique needs and challenges of our clients."
        },
        {
          heading: "Integrity:",
          content: "Integrity is the foundation of our business. We uphold the highest ethical standards in all our interactions, maintaining transparency and honesty with our clients, employees, and partners."
        }
      ]
    },
    {
      title: "Our Vision",
      description: "To be a global leader in technology innovation, empowering businesses and individuals to thrive in the digital age. We envision a future where our cutting-edge solutions and services transform industries, drive sustainable growth, and enhance the quality of life for people worldwide. Our commitment to excellence, innovation, and ethical business practices will continue to guide us as we shape the future of IT.",
      sections: [
        {
          heading: "Technological Leadership:",
          content: "We aim to lead the way in technology innovation, setting industry standards and pushing the boundaries of what's achievable. Our solutions will be at the forefront of emerging technologies, driving progress and transformation."
        },
        {
          heading: "Positive Impact:",
          content: "We aspire to create a positive impact on the world through our technology solutions. Whether it&apo;s by enhancing business efficiency, improving quality of life, or addressing global challenges, our work will leave a lasting, positive mark on society."
        },
        {
          heading: "Global Reach:",
          content: "We envision a global presence, with our technology solutions touching lives and businesses across continents. We will expand our reach to serve a diverse range of clients, industries, and communities."
        }
      ]
    }
  ];

  return (
    <div className="grid  grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start px-5 py-10 sm:px-16 xl:px-24">
      {contentData.map((data, index) => (
        <li key={index} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-zinc-900 font-semibold">
              <span className="mb-1 block leading-6 text-xl text-[#F68921]">{data.title} <hr className='mt-3' /></span>
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
              <p className='break-all'>{data.description}</p>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isVisible[index] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {data.sections.map((section, secIndex) => (
                <div key={secIndex} className="w-full text-center mt-2">
                  <div className='flex gap-7 items-center mt-7'>
                    <GiConfirmed className='text-2xl text-[#F68921]' />
                    <h3 className='text-lg font-semibold text-zinc-900 whitespace-nowrap'>{section.heading}</h3>
                  </div>
                  <p className='break-all prose prose-slate prose-sm text-slate-600 mt-2'>{section.content}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => toggleVisibility(index)}
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
            >
              Learn more
              <span className="sr-only">, Completely unstyled, fully accessible UI components</span>
              <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default AboutConten;
