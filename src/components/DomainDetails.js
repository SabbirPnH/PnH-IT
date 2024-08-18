// import React, { useState } from 'react';
// import '../app/globals.css';
// import { MdShoppingCartCheckout } from "react-icons/md";
// import { LuCodesandbox } from "react-icons/lu";
// import { TbDeviceDesktopAnalytics } from "react-icons/tb";
// import { MdWbSunny } from "react-icons/md";
// import { SiBisecthosting } from "react-icons/si";
// import { MdOutlineManageAccounts } from "react-icons/md";
// import { IoShieldCheckmark } from "react-icons/io5";


// const DomainDetails = () => {
//     const [activeTab, setActiveTab] = useState('tab-1');
//     const [activeFilter, setActiveFilter] = useState('all');
    

//     const handleTabClick = (tabId) => {
//         setActiveTab(tabId);
//     };

//     const handleFilterChange = (filter) => {
//         setActiveFilter(filter);
//     };

//     const isTabVisible = (tabId) => {
//         if (activeFilter === 'all') return true;
//         return tabId === activeFilter;
//     };

//     return (
//         <div>
//             <section id="features" className="features pt-12">
//                 <div className="container mx-auto px-5 sm:px-24" data-aos="fade-up">                  
//                     <ul className="nav nav-tabs flex flex-wrap -mx-2">
//                         {isTabVisible('tab-1') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm  cursor-pointer transition duration-300 ease-in-out ${
//                                         activeTab === 'tab-1' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-1')}
//                                 >
//                                     <MdShoppingCartCheckout className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className="text-lg font-semibold mt-2">E-commerce</h4>
//                                 </a>
//                             </li>
//                         )}
//                         {isTabVisible('tab-2') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm  cursor-pointer transition duration-300 ease-in-out ${
//                                         activeTab === 'tab-2' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-2')}
//                                 >
//                                    <LuCodesandbox className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className="text-lg font-semibold mt-2">POS/Inventory</h4>
//                                 </a>
//                             </li>
//                         )}
//                         {isTabVisible('tab-3') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm  cursor-pointer transition duration-300 ease-in-out ${
//                                         activeTab === 'tab-3' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-3')}
//                                 >
//                                     <MdWbSunny className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className=" xl:whitespace-nowrap text-lg font-semibold mt-2">Domain </h4>
//                                 </a>
//                             </li>
//                         )}
//                         {isTabVisible('tab-4') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm  cursor-pointer transition duration-300 ease-in-out ${
//                                         activeTab === 'tab-4' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-4')}
//                                 >
//                                     <SiBisecthosting className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className="text-lg font-semibold mt-2">Hosting</h4>
//                                 </a>
//                             </li>
//                         )}
//                         {isTabVisible('tab-5') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm  cursor-pointer transition duration-300 ease-in-out ${
//                                         activeTab === 'tab-5' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-5')}
//                                 >
//                                      <TbDeviceDesktopAnalytics className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className="xl:whitespace-nowrap text-lg font-semibold mt-2">School-college ERP</h4>
//                                 </a>
//                             </li>
//                         )}
//                         {isTabVisible('tab-6') && (
//                             <li className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                 <a
//                                     className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm  rounded-sm cursor-pointer transition duration-300  ${
//                                         activeTab === 'tab-6' ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                     }`}
//                                     onClick={() => handleTabClick('tab-6')}
//                                 >
//                                     <MdOutlineManageAccounts className="bi bi-binoculars text-4xl text-white mb-2 hover:text-[#F68921]"/>
//                                     <h4 className="  xl:whitespace-nowrap text-lg font-semibold  mt-2">Account Management</h4>
//                                 </a>
//                             </li>
//                         )}
//                     </ul>

//                     <div className="tab-content mt-8">
//     {activeTab === 'tab-1' && (
//         <div className="tab-pane fade-in active">
//             <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
//                 <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">E-commerce</h3>
//                     <p className="fst-italic">
//                         E-commerce services encompass a wide range of offerings designed to support online businesses in various aspects of their operations. Whether you&apos&aposre starting an e-commerce business or looking to improve an existing one, here are some key e-commerce services you might consider:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex sm:items-center pb-2 py-3">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4 "></IoShieldCheckmark> Website Development and Design: Creating an appealing and functional e-commerce website is essential. E-commerce website development services include designing user-friendly interfaces, optimizing for mobile devices, and integrating secure payment gateways.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4 "></IoShieldCheckmark> E-commerce Platform Setup: Choosing the right e-commerce platform (e.g., Shopify, WooCommerce, Magento) is crucial. E-commerce services can assist in selecting, setting up, and customizing the platform to meet your specific business needs.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-1.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
//     {activeTab === 'tab-2' && (
//         <div className="tab-pane fade-in active">
//             <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
//                 <div className="col-lg-8  col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">POS/Inventory</h3>
//                     <p>
//                         Point of Sale (POS) and Inventory Management services are essential for businesses that need to manage sales transactions, track inventory levels, and streamline their operations. Here are some key services related to POS and inventory management:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> POS System Setup: Setting up a POS system involves installing hardware (such as cash registers, barcode scanners, and receipt printers) and software that allows businesses to process sales transactions efficiently.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Inventory Tracking: Inventory management services help businesses monitor stock levels, track product movements, and manage reordering processes. This ensures that products are always available when customers need them.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-2.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
//     {activeTab === 'tab-3' && (
//         <div className="tab-pane fade-in active">
//             <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
//                 <div className="col-lg-8 order-2 col-span-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">Domain & Hosting</h3>
//                     <p>
//                         Domain and hosting services are foundational components of establishing and maintaining an online presence. These services ensure that your website is accessible to users on the internet and that it runs smoothly. Here are some key aspects of domain and hosting services:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Domain Registration: This service allows you to secure a unique domain name (e.g., www.example.com) for your website. A domain name is your website&aposs address on the internet.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Web Hosting: Hosting services provide the infrastructure needed to store your website&aposs files and make them accessible on the internet. Different types of hosting (shared, VPS, dedicated, cloud) offer varying levels of performance and control.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-3.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
//     {activeTab === 'tab-4' && (
//         <div className="tab-pane fade-in active">
//             <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7  -mx-2">
//                 <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">Hosting</h3>
//                     <p>
//                         School and college services refer to a wide range of offerings and support systems that cater to the needs of educational institutions, students, parents, and staff. These services are designed to enhance the overall educational experience, ensure smooth operations, and promote a conducive learning environment. Here are some common school and college services:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Administrative Services: Administrative services are essential for the smooth functioning of educational institutions. They include managing student admissions, maintaining records, scheduling classes, handling finances, and ensuring compliance with regulations.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Academic Support: Academic support services provide additional assistance to students to help them succeed in their studies. This includes tutoring, study resources, and academic advising.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-4.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
//     {activeTab === 'tab-5' && (
//         <div className="tab-pane fade-in active">
//             <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
//                 <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">ERP</h3>
//                     <p>
//                         Enterprise Resource Planning (ERP) systems are comprehensive software solutions designed to integrate and manage various business processes within an organization. These systems provide a centralized platform that enables businesses to streamline operations, improve efficiency, and gain real-time insights into their operations. Here are some key aspects of ERP services:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Integration: ERP systems integrate different functions and departments, such as finance, human resources, manufacturing, supply chain, and customer relationship management (CRM), into a unified system.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Data Centralization: ERP systems store data from various business processes in a central database, ensuring that information is accurate, consistent, and accessible to authorized users across the organization.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-5.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
//     {activeTab === 'tab-6' && (
//         <div className="tab-pane fade-in active">
//             <div className="row grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 flex-wrap -mx-2">
//                 <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                     <h3 className="text-2xl font-semibold text-[#F68921]">Account Management</h3>
//                     <p>
//                         Account management software and services help businesses streamline their financial operations, maintain accurate records, and ensure compliance with financial regulations. Here are some key components and functionalities of account management services:
//                     </p>
//                     <ul className="list-none p-0">
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Invoicing and Billing: Account management services facilitate the creation, sending, and tracking of invoices and bills, ensuring timely payments and accurate financial records.
//                         </li>
//                         <li className="flex items-center pb-2">
//                             <IoShieldCheckmark className="bi bi-check-circle-fill text-[#F68921] text-7xl  sm:text-4xl mr-4"></IoShieldCheckmark> Expense Tracking: Businesses can track and categorize expenses, monitor spending, and manage budgets more effectively.
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                     <img src="/img/features-6.svg" alt="" className="img-fluid ml-12 sm:ml-0" />
//                 </div>
//             </div>
//         </div>
//     )}
// </div>

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default DomainDetails;




// 'use client'
// import React, { useState, useEffect } from 'react';
// import '../app/globals.css';
// import { MdShoppingCartCheckout } from "react-icons/md";
// import getDomain from '@/lib/Domain';

// const DomainDetails = () => {
//     const [tabsData, setTabsData] = useState([]);
//     const [activeTab, setActiveTab] = useState(null); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await getDomain();
//                 setTabsData(data);
//                 if (data.length > 0) {
//                     setActiveTab(data[0].id); // Set the first tab as active
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch domain data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleTabClick = (tabId) => {
//         setActiveTab(tabId);
//     };

//     return (
//         <div>
//             <section id="features" className="features pt-12">
//                 <div className="container mx-auto px-5 sm:px-24" data-aos="fade-up">
//                     <ul className="nav nav-tabs flex flex-wrap -mx-2">
//                         {tabsData.map(({ id, title, icon }) => {
//                             const Icon = icon === "MdShoppingCartCheckout" ? MdShoppingCartCheckout : null; // Add logic for other icons if needed
//                             return (
//                                 <li key={id} className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
//                                     <a
//                                         className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm rounded-sm cursor-pointer transition duration-300 ease-in-out ${
//                                             activeTab === id ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                                         }`}
//                                         onClick={() => handleTabClick(id)}
//                                     >
//                                         <div className="text-4xl text-white mb-2">
//                                             {/* Render icon */}
//                                             {Icon ? <Icon /> : null}
//                                         </div>
//                                         <h4 className="text-lg font-semibold mt-2">{title}</h4>
//                                     </a>
//                                 </li>
//                             );
//                         })}
//                     </ul>

//                     <div className="tab-content mt-8">
//                         {tabsData.map(({ id, title, desp, image }) => (
//                             activeTab === id && (
//                                 <div key={id} className="tab-pane fade-in active">
//                                     <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
//                                         <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
//                                             <h3 className="text-2xl font-semibold text-[#F68921]">{title}</h3>
//                                             <p>{desp}</p>
//                                         </div>
//                                         <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
//                                             <img src={image} alt={title} className="img-fluid ml-12 sm:ml-0" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             )
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default DomainDetails;


import React, { useState, useEffect } from 'react';
import '../app/globals.css';
import getDomain from '@/lib/Domain';

// Import all the required icons
import { MdShoppingCartCheckout, MdHome, MdInfo } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { LuCodesandbox } from "react-icons/lu";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

// Create a mapping of icon names to React components
const iconMapping = {
    MdShoppingCartCheckout,
    MdHome,
    MdInfo,
    IoShieldCheckmark,
    LuCodesandbox,
    TbDeviceDesktopAnalytics,
   
};

const DomainDetails = () => {
    const [tabsData, setTabsData] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDomain();
                setTabsData(data);
                if (data.length > 0) {
                    setActiveTab(data[0].id); // Set the first tab as active
                }
            } catch (error) {
                console.error("Failed to fetch domain data:", error);
            }
        };

        fetchData();
    }, []);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <section id="features" className="features pt-12">
                <div className="container mx-auto px-5 sm:px-24" data-aos="fade-up">
                    <ul className="nav nav-tabs flex flex-wrap -mx-2">
                        {tabsData.map(({ id, title, icon }) => {
                            const IconComponent = iconMapping[icon] || null; // Get the React icon component
                            return (
                                <li key={id} className="nav-item w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-4">
                                    <a
                                        className={`nav-link flex flex-col items-center justify-center p-6 text-secondary bg-[#1d294f] shadow-sm rounded-sm cursor-pointer transition duration-300 ease-in-out ${
                                            activeTab === id ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
                                        }`}
                                        onClick={() => handleTabClick(id)}
                                    >
                                        <div className="text-4xl text-white mb-2">
                                            {/* Render icon */}
                                            {IconComponent ? <IconComponent /> : null}
                                        </div>
                                        <h4 className="text-lg font-semibold mt-2">{title}</h4>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="tab-content mt-8">
                        {tabsData.map(({ id, title, desp, image }) => (
                            activeTab === id && (
                                <div key={id} className="tab-pane fade-in active">
                                    <div className="row flex-wrap grid lg:grid-cols-3 bg-zinc-900 text-white p-4 sm:p-7 -mx-2">
                                        <div className="col-lg-8 col-span-2 order-2 lg:order-1 px-2" data-aos="fade-up" data-aos-delay="100">
                                            <h3 className="text-2xl font-semibold text-[#F68921]">{title}</h3>
                                            <p>{desp}</p>
                                        </div>
                                        <div className="col-lg-4 col-span-1 order-1 lg:order-2 text-center px-2" data-aos="fade-up" data-aos-delay="200">
                                            <img src={image} alt={title} className="img-fluid ml-12 sm:ml-0" />
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DomainDetails;
