// 'use client';

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faWhatsapp,
//   faYoutube
// } from "@fortawesome/free-brands-svg-icons";
// import PropTypes from "prop-types";
// import Link from "next/link";

// const social = [
//   {
//     icon: faFacebookF,
//     link: "https://www.facebook.com/pnhitsolution",
//     color: "#1877F2" // Facebook color
//   },
//   {
//     icon: faWhatsapp,
//     link: "https://api.whatsapp.com/send/?phone=8801914436613&text&type=phone_number&app_absent=0",
//     color: "#25D366" // WhatsApp color
//   },
//   {
//     icon: faYoutube,
//     link: "#",
//     color: "#FF0000" // YouTube color
//   },
//   {
//     icon: faLinkedinIn,
//     link: "https://www.linkedin.com/company/pnh-corporation",
//     color: "#0077B5" // LinkedIn color
//   },
// ];

// const StoryItem = ({ item }) => {
//   const { title, icon } = item;
//   return (
//     <div className="flex items-center justify-center md:justify-start">
//       {typeof icon === 'string' ? (
//         <img src={icon} className="w-12 h-12 mr-4" alt={title} />
//       ) : (
//         <FontAwesomeIcon icon={icon} className="text-5xl text-[#1d294f] mr-4" />
//       )}
//       <h6 className="font-bold">{title}</h6>
//     </div>
//   );
// };

// StoryItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

// const Social = ({ item }) => {
//   const { link, icon, color } = item;
//   return (
//     <li className="inline-block m-2">
//       <a
//         href={link}
//         className="border flex justify-center items-center rounded-full w-9 h-9 transition"
//         style={{ backgroundColor: color }}
//       >
//         <FontAwesomeIcon icon={icon} className="text-xl text-center ml-1.5" style={{ color: '#fff' }} />
//       </a>
//     </li>
//   );
// };

// Social.propTypes = {
//   item: PropTypes.object.isRequired,
// };

// const ShapeOne = () => (
//   <>
//     <img
//       data-aos="zoom-in-right"
//       data-aos-duration="3000"
//       src="/img/about (2).png"
//       alt=""
//       className="hidden sm:block"
//     />
//   </>
// );

// const AboutCard = () => {
//   return (
//     <section className="ezy__about17 light sm:pb-14 lg:pb-0 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden my-5">
//       <div className="container lg:ml-14 px-5">
//         <div className="grid grid-cols-12 items-center justify-between">
//           <div className="col-span-12 md:col-span-5">
//             <div className="relative">
//               <ShapeOne />
//             </div>
//           </div>
//           <div className="col-span-12 md:col-span-6 md:mr-4">
//             <div>
//               <h2
//                 data-aos="fade-up"
//                 data-aos-duration="1000"
//                 className="text-md text-zinc-900 leading-tight font-bold lg:text-2xl xl:text-4xl sm:mt-4"
//               >
//                 We are a leading IT solution company.
//               </h2>
//               <p
//                 data-aos="fade-up"
//                 data-aos-duration="1500"
//                 className="text-sm sm:text-lg leading-relaxed opacity-80 mt-2 sm:my-6 lg:pr-12 break-all line-clamp-3 sm:line-clamp-none"
//               >
//                 Welcome to PnH IT Solution, your trusted partner in navigating the complexities of today's digital landscape. We are a premier provider of transformative IT solutions, dedicated to empowering businesses worldwide with innovative technology services. At PnH IT Solution, we combine a steadfast commitment to excellence with a passion for innovation, delivering cutting-edge solutions tailored to meet the dynamic needs of modern enterprises.
//               </p>
//               {/* <div className="grid grid-cols-12 gap-10">
//                 {stories.map((item, i) => (
//                   <div className="col-span-12 sm:col-span-6 flex justify-start" key={i}>
//                     <StoryItem item={item} />
//                   </div>
//                 ))}
//               </div> */}
//             </div>
//             <div className="flex flex-col sm:flex-row sm:mt-3 sm:mt-12">
//               <Link href="/about">
//                 <button
//                   className="hidden sm:block whitespace-nowrap px-10 py-3 border-2 border-[#0b1727] dark:border-white bg-[#1d294f] hover:border-[#1d294f] text-center text-white rounded transition"
//                 >
//                   About Us
//                 </button>
//               </Link>
//               <div className="flex justify-center md:ml-12 sm:mt-0">
//                 <ul className="flex items-center justify-center sm:justify-end">
//                   {social.map((item, i) => (
//                     <Social item={item} key={i}/>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCard;

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import getAboutCard from "@/lib/AboutCard";
import getSocial from "@/lib/Social";

const Social = ({ item }) => {
  const { link, svg, color } = item;
  return (
    <li className="inline-block m-2">
      <a 
      target="_blank"
        href={link}
        className="flex justify-center items-center  w-10 h-10 transition"
        style={{ backgroundColor: color }}
      >
        <img src={svg} alt={item.title} className="w-5 h-5" />
      </a>
    </li>
  );
};

Social.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    color: PropTypes.string
  }).isRequired,
};

const ShapeOne = ({ image }) => (
  <img
    data-aos="zoom-in-right"
    data-aos-duration="3000"
    src={image}
    alt="Company Image"
    className="hidden sm:block"
  />
);

const AboutCard = async () => {
  const about = await getAboutCard();
  const social = await getSocial();

  return (
    <section className="ezy__about17 light sm:pb-14 lg:pb-0 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden my-5">
      <div className="container lg:ml-14 px-5">
        {about.map((item) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="relative">
              <ShapeOne image={item.image} />
            </div>
            <div>
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-md text-zinc-900 leading-tight font-bold lg:text-2xl xl:text-4xl sm:mt-4"
              >
                {item.title}
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-sm sm:text-lg leading-relaxed opacity-80 mt-2 sm:my-6 lg:pr-12"
              >
                {item.desp}
              </p>
              <div className="flex flex-col sm:flex-row sm:mt-12">
                <Link href="/team">
                  <button
                    className="hidden sm:block whitespace-nowrap px-10 py-3 border-2 border-[#0b1727] dark:border-white bg-[#1d294f] hover:border-[#1d294f] text-center text-white rounded transition"
                  >
                    About Us
                  </button>
                </Link>
                <div className="flex justify-center md:ml-12 sm:mt-0">
                  <ul className="flex items-center justify-center sm:justify-end">
                    {social.map((socialItem) => (
                      <Social item={socialItem} key={socialItem.id} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCard;
