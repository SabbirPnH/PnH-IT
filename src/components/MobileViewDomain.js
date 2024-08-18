

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// // Define your API endpoint URL
// const API_URL = 'https://admin.pnhit.pnhbd.com/api/products';

// // Fetch domain data from the API
// const fetchDomainData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Failed to fetch domain data:", error);
//         return [];
//     }
// };

// const DomainMobileView = () => {
//     const [tabs, setTabsData] = useState([]);
//     const [activeTab, setActiveTab] = useState('tab-1');

//     const handleTabClick = (tabId) => {
//         setActiveTab(tabId); // Update active tab state
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetchDomainData(); // Fetch data
//             setTabsData(data); // Set tabs data
//             if (data.length > 0) {
//                 setActiveTab(data[0].id); // Set the first tab as active
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="pb-2.5 px-4 grid grid-cols-3 pt-4 sm:hidden lg:grid-cols-6 gap-4">
//             {tabs.map((tab) => (
//                 <div key={tab.id}>
//                     <Link href={`/domain/${tab.id}`} passHref>
//                         <p
//                             className={`nav-link flex flex-col items-center justify-center p-2 text-secondary bg-[#1d294f] shadow-sm rounded-sm cursor-pointer transition duration-300 ease-in-out ${
//                                 activeTab === tab.id ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
//                             }`}
//                             onClick={() => handleTabClick(tab.id)}
//                         >
//                             <tab.icon className={`text-xl mb-2 ${activeTab === tab.id ? 'text-white' : 'hover:text-[#F68921]'}`} />
                            
//                             <h4 className="text-xs line-clamp-1 font-semibold mt-2">{tab.title}</h4>
//                         </p>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default DomainMobileView;



'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// Import all the required icons
import { MdShoppingCartCheckout, MdHome, MdInfo } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { LuCodesandbox } from "react-icons/lu";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

// Create a mapping of icon names to React components
const iconMapping = {
    MdShoppingCartCheckout: MdShoppingCartCheckout,
    MdHome: MdHome,
    MdInfo: MdInfo,
    IoShieldCheckmark: IoShieldCheckmark,
    LuCodesandbox: LuCodesandbox,
    TbDeviceDesktopAnalytics: TbDeviceDesktopAnalytics,
};

// Define your API endpoint URL
const API_URL = 'https://admin.pnhit.pnhbd.com/api/products';

// Fetch domain data from the API
const fetchDomainData = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch domain data:", error);
        return [];
    }
};

const DomainMobileView = () => {
    const [tabs, setTabsData] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDomainData(); // Fetch data
            setTabsData(data); // Set tabs data
            if (data.length > 0) {
                setActiveTab(data[0].id); // Set the first tab as active
            }
        };

        fetchData();
    }, []);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId); // Update active tab state
    };

    return (
        <div className="pb-2.5 px-4 grid grid-cols-3 pt-4 sm:hidden lg:grid-cols-6 gap-4">
            {tabs.map(({ id, title, icon }) => {
                // Get the icon component based on the icon name from the API data
                const IconComponent = iconMapping[icon] || null;

                return (
                    <div key={id}>
                        <Link href={`/domain/${id}`} >
                            <p
                                className={`nav-link flex flex-col items-center justify-center p-2 text-secondary bg-[#1d294f] shadow-sm rounded-sm cursor-pointer transition duration-300 ease-in-out ${
                                    activeTab === id ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
                                }`}
                                onClick={() => handleTabClick(id)}
                            >
                                <div className="text-2xl mb-2">
                                    {/* Render icon */}
                                    {IconComponent ? <IconComponent /> : null}
                                </div>
                                <h4 className="text-xs line-clamp-1 font-semibold mt-2">{title}</h4>
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default DomainMobileView;
