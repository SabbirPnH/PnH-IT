import getAllClients from "@/lib/ClientsLogo";
import React from "react";
import Marquee from "react-fast-marquee";

const Clientimg = async() => {
	const clientLogo=await getAllClients()

	return (
		
			<section className="ezy__clients4 light pb-5 lg:py-14 md:pb-10  sm:px-16 xl:px-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-5 mx-auto" data-aos="zoom-out">
			<div className="flex justify-center text-center mb-2 sm:mb-6 lg:mb-12">
                    <div className="w-full max-w-2xl">  
                        <h2 className="text-2xl leading-none md:text-[45px] font-bold mb-1.5 sm:mb-6">
                        Our Clients
                        </h2>
                        <p className="text-slate-600 sm:text-lg break-all line-clamp-2 sm:line-clamp-none">
						These are just a few examples, and our client base extends across various other industries such as telecommunications, energy, transportation, and more. 
                        </p>
                    </div>
                </div>

				<Marquee>
					<div  className="flex justify-center items-center text-center">
						{clientLogo.map((client, i) => (
							<img
								src={client.image}
								alt={client.alt}
								className="max-h-20 img-fluid px-12 sm:my-6"
								key={i}
							/>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	
		
	);
};
export default Clientimg;








