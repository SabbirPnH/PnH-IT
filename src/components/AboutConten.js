import React from "react";
import Link from 'next/link'; 
import contenData from '../../src/data/AboutConten';

const AboutConten = () => {
  return (
       <section className="text-gray-400 bg-[#18181B] body-font">
      <div className="container px-5 py-10 mt-20 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">
      Describes the purpose, mission, and background of 
          <br className="hidden sm:block" />the website or organization.
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {contenData.map((conten, index) => (
            <div key={index} className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="#F68921"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">
                  {conten.title}
                </h2>
                <p className="leading-relaxed text-base line-clamp-6">
                  {conten.description}
                </p>
                <Link href={`/aboutconten/${conten.id}`}>
                  <button className="mt-3 text-[#F68921] inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutConten;
