// import React from "react";
// import Link from 'next/link'; 
// import getAboutUs from "@/lib/AboutUs";


// const AboutConten = async () => {
//   const about=await getAboutUs()
//   return (
//        <section className="text-gray-400 bg-[#18181B] body-font">
//       <div className="container px-5 pb-10  lg:pb-5 pt-4 sm:py-10  mx-auto">
//       <h1 className="sm:text-3xl text-md line-clamp-1 sm:line-clamp-none font-medium title-font sm:text-center text-left text-white mb-12 lg:mb-20">
//       PnH IT is an IT based web design development and  
         
//         </h1>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
//           {about.map((conten, index) => (
//             <div key={index} className=" px-4 md:w-1/2 flex">
//               <div className="w-12 h-12 hidden inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
//                 <svg
                
//                   fill="none"
//                   stroke="#F68921"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-6 h-6 "
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M22 12h-4l-3 9L9 3l-3 9H2 "></path>
//                 </svg>
//               </div>
//               <div className="flex-grow sm:pl-6">
//                 <h2 className="text-white text-sm sm:text-lg title-font font-medium -mt-7 sm:-mt-0 mb-2">
//                   {conten.title}
//                 </h2>
//                 <p className="leading-relaxed text-base line-clamp-2 sm:line-clamp-3 lg:line-clamp-6">
//                   {conten.percentage}
//                 </p>
//                 <Link href={`/aboutconten/${conten.id}`}>
//                   <button className=" sm:mt-3 text-[#F68921] inline-flex items-center">
//                     Read More
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       className="w-4 h-4 ml-2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M5 12h14M12 5l7 7-7 7"></path>
//                     </svg>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutConten;


import React from "react";
import Link from 'next/link';

const API_URL = "https://admin.pnhit.pnhbd.com/api/mission-vision";

const AboutConten = async () => {
  // Fetch data from the API
  const res = await fetch(API_URL);
  const about = await res.json();

  return (
    <section className="text-gray-400 bg-[#18181B] body-font">
      <div className="container px-5 pb-10 lg:pb-5 pt-4 sm:py-10 mx-auto">
        <h1 className="sm:text-3xl text-md line-clamp-1 sm:line-clamp-none font-medium title-font sm:text-center text-left text-white mb-12 lg:mb-20">
          PnH IT is an IT-based web design and development company.
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {about.map((conten, index) => (
            <div key={index} className="px-4 md:w-1/2 flex">
              <div className="w-12 h-12 hidden inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
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
              <div className="flex-grow sm:pl-6">
                <h2 className="text-white text-sm sm:text-lg title-font font-medium -mt-7 sm:-mt-0 mb-2">
                  {conten.title}
                </h2>
                <p className="leading-relaxed text-base line-clamp-2 sm:line-clamp-3 lg:line-clamp-6">
                  {conten.percentage}
                </p>
                <Link href={`/aboutconten/${conten.id}`}>
                  <button className="sm:mt-3 text-[#F68921] inline-flex items-center">
                    Read More
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
