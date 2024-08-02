'use client';
import React, { useState } from 'react';
import tabs from '../data/MobileViewDomain'
import Link from 'next/link';

const DomainMobileView = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="pb-2.5 px-4 grid grid-cols-3 pt-4 sm:hidden lg:grid-cols-6 gap-4">
            {tabs.map((tab) => (
                <div key={tab.id}>
                    <Link href={`/domain/${tab.id}`}
                        className={`nav-link flex flex-col items-center justify-center p-2 text-secondary bg-[#1d294f] shadow-sm rounded-sm cursor-pointer transition duration-300 ease-in-out ${
                            activeTab === tab.id ? 'bg-[#F68921] text-white' : 'hover:text-[#F68921]'
                        }`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <tab.icon className={`text-xl mb-2 ${activeTab === tab.id ? 'text-white' : 'hover:text-[#F68921]'}`} />
                        <h4 className="text-xs line-clamp-1 font-semibold mt-2">{tab.label}</h4>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default DomainMobileView;
