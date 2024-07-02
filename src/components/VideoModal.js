// import React, { useState } from "react";
// import ModalVideo from "react-modal-video";
// import "react-modal-video/css/modal-video.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// import { FaArrowRight } from "react-icons/fa6";
// const testimonialList = [
//     {
//         name: "We believe as an IT Firm, PNH is outstanding and committed to provide sincere service to its valued clients. I find it proactive in service.",
//         position: "We play a crucial role in the modern world, as technology has become an integral part of virtually every aspect of business and daily life.",
//         content: "A wide range of topics and technologies, so it would be helpful for all.",
//     },
//     {
//         name: "Sara Tailor",
//         position: "CEO & Founder at EasyFrontend",
//         content: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
//     },
//     {
//         name: "John Leo",
//         position: "CEO & Founder at EasyFrontend",
//         content: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
//     },
// ];

// const VideoModal = () => {
//     const [index, setIndex] = useState(0);
//     const [isOpen, setOpen] = useState(false);
//     const { name, position, content } = testimonialList[index];

//     const handleSelect = (selectedIndex) => setIndex(selectedIndex);

//     return (
//         <section data-aos="fade-up"
//         data-aos-duration="1500" className="ezy__testimonial17 light pt-5 sm:py-14 md:py-0 sm:bg-gray-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
//             <div className="px-5 sm:px-0">
//                 <div className="grid grid-cols-12 gap-y-8 gap-x-6">
//                     <div className="col-span-12 md:col-span-5 relative">
//                         <div
//                             className="bg-cover bg-center bg-no-repeat object-cover min-h-[350px] h-full"
//                             style={{
//                                 backgroundImage: "url('/img/Video.png')",
//                             }}
//                         >
//                             <button
//                                 onClick={() => setOpen(true)}
//                                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex justify-center items-center bg-[#F68921] bg-opacity-80 text-white rounded-full"
//                             >
//                                 <FontAwesomeIcon icon={faPlay} />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="col-span-12 md:col-span-6 md:col-start-7">
//                         <div className="flex flex-col pt-4 h-full">
//                             <div>
//                                 <p className="relative text-zinc-900 text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-bold mb-6 md:mb-5 z-[1]">
//                                     <FontAwesomeIcon
                                        
//                                         className="absolute -top-3 left-0 md:-top-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
//                                     />
//                                     {content}
//                                     <FontAwesomeIcon
                                      
//                                         className="absolute -bottom-3 right-0 md:-bottom-1/2 text-[100px] text-blue-600 text-opacity-10 -z-[1]"
//                                     />
//                                 </p>
//                                 <h4 className="text-lg xl:text-xl italic font-medium mb-2">{name}</h4>
//                                 <p className="opacity-80 py-2">{position}</p>
//                                <div className="flex">
//                                <button className="px-4 inline-block py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f] flex items-center space-x-2">
//                                 <span>Read More</span>
//                                 <FaArrowRight />
//                                 </button>

                                
//                                </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ModalVideo
//                 channel="youtube"
//                 isOpen={isOpen}
//                 videoId="dQw4w9WgXcQ" // Replace with your video ID
//                 onClose={() => setOpen(false)}
//             />
//         </section>
//     );
// };

// export default VideoModal;





import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";

const VideoModal = () => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="1500"
            className="ezy__testimonial17 light pt-5 sm:py-14 md:py-0 sm:bg-gray-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white"
        >
            <div className="px-5 sm:px-0">
                <div className="grid grid-cols-12 gap-y-8 gap-x-6">
                    <div className="col-span-12 md:col-span-5 relative">
                        <div
                            className="bg-cover bg-center bg-no-repeat object-cover min-h-[350px] h-full"
                            style={{
                                backgroundImage: "url('/img/Video.png')",
                            }}
                        >
                            <button
                                onClick={openModal}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex justify-center items-center bg-[#F68921] bg-opacity-80 text-white rounded-full"
                            >
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 md:col-start-7">
                        <div className="flex flex-col pt-4 h-full">
                            <p className="relative text-zinc-900 text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[32px] font-bold mb-6 md:mb-5 z-[1]">
                                {/* Example content */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis enim nec
                                felis condimentum, at viverra.
                            </p>
                            <h4 className="text-lg xl:text-xl italic font-medium mb-2">John Doe</h4>
                            <p className="opacity-80 py-2">CEO & Founder at Company</p>
                            <div className="flex">
                                <button className="px-4 inline-block py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f] flex items-center space-x-2">
                                    <span>Read More</span>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                channel="custom"
                isOpen={isOpen}
                url="#"
                onClose={closeModal}
            />
        </section>
    );
};

export default VideoModal;
