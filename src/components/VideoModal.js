

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
            className="ezy__testimonial17 hidden sm:block light pt-5 sm:py-14 md:py-0 sm:bg-gray-100 dark:bg-[#0b1727] text-zinc-900 dark:text-white"
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
                                Create step-by-step tutorials on using specific software (e.g., Microsoft Office, Adobe Creative Suite).
                            </p>
                            <h4 className="text-lg xl:text-xl italic font-medium mb-2">Iftekhar Mahmud</h4>
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
                channel="youtube"
                isOpen={isOpen}
                videoId="9J1nJOivdyw"
                onClose={closeModal}
            />
        </section>
    );
};

export default VideoModal;
