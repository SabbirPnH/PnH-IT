

// 'use client';

// import DetailsPage from '@/components/ServiceDetails';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import React, { Fragment } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
// import classNames from 'classnames';
// import PropTypes from 'prop-types'; 
// import serviceSocial from '../../src/data/ServiceSocial';  
// import Loading from '@/components/Loading';
// import ErrorPage from '@/components/404Page';

// // Mock data or fetch from API
// const fetchServiceData = async () => {
//     try {
//         const response = await fetch('https://admin.pnhit.pnhbd.com/api/services');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return [];
//     }
// };

// const ServiceItems = ({ item }) => (
//     <div className="flex items-start gap-4">
//         <img src={item.image} alt="" className="img-fluid h-16 w-16 rounded" />
//         <div className="ml-3">
//             <h6 className="mb-2 text-base font-medium leading-tight">
//                 {item.services_name}
//             </h6>
//             <div className="flex flex-wrap opacity-50">
//                 <span className="mr-3">{item.date}</span>
//                 <span>
//                      <b>{item.seats}</b>
//                 </span>
//             </div>
//         </div>
//     </div>
// );

// ServiceItems.propTypes = {
//     item: PropTypes.object.isRequired,
// };

// const Contents = ({text}) => (
//     <div>
//         <p className="text-[17px] mb-2 opacity-80">
//             Teaching is a noble profession. Think about the most respected persons in our society. Yes, they are the teachers...
//         </p>
//         {/* Add more content here as needed */}
//     </div>
// );

// const Social = ({ list, index }) => (
//     <a href={list.href} className="text-lg sm:text-[22px]">
//         <FontAwesomeIcon
//             icon={list.icon} 
//             className={classNames({ "mr-3": index })} 
//         /> 
//     </a>
// );

// Social.propTypes = {
//     list: PropTypes.object.isRequired,
//     index: PropTypes.number,
// };

// const SocialContent = () => (
//     <div className="flex flex-col sm:flex-row items-center justify-between my-12 sm:mr-12">
//         <div className="flex flex-col sm:flex-row items-center">
//             <div className="mr-2">
//                 <img
//                     src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
//                     alt=""
//                     className="max-w-full h-auto rounded-full border border-btnBorder"
//                     width="47"
//                 />
//             </div>
//             <div>
//                 <p className="mb-0">
//                     By<b className='text-[#F68921]'> Alan Bell</b>
//                 </p>
//             </div>
//             <p className="ml-3 mt-3 sm:mt-0">August 10th, 2020</p>
//         </div>
//         <div>
//             <ul className="mt-3 flex gap-1.5 text-[#1d294f] lg:gap-4 sm:mt-0">
//                 {serviceSocial.map((list, j) => (
//                     <Social list={list} index={j} key={j} />
//                 ))}
//             </ul>
//         </div>
//     </div>
// );

// const SideBar = ({ serviceData }) => (
//     <>
//         <div className="bg-[#1d294f] bg-opacity-90 dark:bg-[#1E2735] text-white rounded-t-lg py-4 px-3 mb-4">
//             <h5 className="text-xl font-medium text-[#F68921]">Popular Service</h5>
//         </div>
//         {serviceData.map((item, i) => (
//             <Fragment key={i}>
//                 {!!i && <hr className="my-4" />}
//                 <ServiceItems item={item}  />
//             </Fragment>
//         ))}
//     </>
// );

// SideBar.propTypes = {
//     serviceData: PropTypes.array.isRequired,
// };

// const ServiceDetails2 = () => {
//     const [serviceData, setServiceData] = useState([]);
//     const [service, setService] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const params = useParams();
//     const id = parseInt(params.id, 10); // Convert id to a number

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await fetchServiceData();
//                 setServiceData(data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to load data');
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         if (Number.isInteger(id) && id >= 0 && id < serviceData.length) {
//             setService(serviceData[id]);
//         } else {
//             setService(null); // Or handle error case if ID is invalid
//         }
//     }, [id, serviceData]);

//     if (loading) {
//         return <Loading />; // Show loading component while data is being fetched
//     }

//     if (error) {
//         return <ErrorPage message={error} />; // Show error page if there was an error
//     }

//     if (!service) {
//         return <ErrorPage />; // Show error page if service is not found
//     }

//     return (
//         <section className="ezy__blogdetails1 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
//             <DetailsPage />
//             <div className="container px-4 mx-auto">
//                 <div className="grid md:grid-cols-3 gap-4">
//                     <div className="col-span-3 md:col-span-2 px-4">
//                         <h1 className="whitespace-nowrap font-bold text-2xl md:text-5xl pt-7 text-[#F68921] tracking-widest mb-12">
//                             {service.services_name}
//                         </h1>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-12 gap-4">
//                     <div className="col-span-12 md:col-span-8 px-4">
//                         <img
//                             src={service.bg_image}
//                             alt=""
//                             className="w-full h-auto rounded"
//                         />
//                         {/* social content */}
//                         <SocialContent />

//                         {/* contents */}
//                         <Contents />
//                     </div>
//                     {/* sidebar */}
//                     <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-9 px-4 md:pl-6 lg:pl-0">
//                         <SideBar serviceData={serviceData} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ServiceDetails2;








'use client';

import DetailsPage from '@/components/ServiceDetails';
import { useParams } from 'next/navigation';
import { useEffect, useState, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import PropTypes from 'prop-types'; 
import serviceSocial from '../../src/data/ServiceSocial';  
import Loading from '@/components/Loading';
import ErrorPage from '@/components/404Page';

// Mock data or fetch from API
const fetchServiceData = async () => {
    try {
        const response = await fetch('https://admin.pnhit.pnhbd.com/api/services');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const ServiceItems = ({ item }) => (
    <div className="flex items-start gap-4">
        <img src={item.image} alt="" className="img-fluid h-16 w-16 rounded" />
        <div className="ml-3">
            <h6 className="mb-2 text-base font-medium leading-tight">
                {item.services_name}
            </h6>
            <div className="flex flex-wrap opacity-50">
                <span className="mr-3">{item.date}</span>
                <span>
                     <b>{item.seats}</b>
                </span>
            </div>
        </div>
    </div>
);

ServiceItems.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        services_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        seats: PropTypes.number.isRequired
    }).isRequired,
};

const Contents = ({ serviceData }) => {
    // Extract the title for the current service
    const title = serviceData?.title || '';
	const short_desp = serviceData?.short_desp || '';
	const description = serviceData?.description || '';
    return (
        <div>
            <p className="text-[17px] mb-2 opacity-80">
                {title}
            </p>
			<p className='font-bold text-xl text-gray-600 pt-4'>{short_desp}</p>
			<p className='text-sm pt-1'>{description}</p>
        </div>
    );
};

Contents.propTypes = {
    serviceData: PropTypes.shape({
        title: PropTypes.string
    }).isRequired
};

const Social = ({ list, index }) => (
    <a href={list.href} className="text-lg sm:text-[22px]">
        <FontAwesomeIcon
            icon={list.icon} 
            className={classNames({ "mr-3": index })} 
        /> 
    </a>
);

Social.propTypes = {
    list: PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired
    }).isRequired,
    index: PropTypes.number
};

const SocialContent = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between my-12 sm:mr-12">
        <div className="flex flex-col sm:flex-row items-center">
            <div className="mr-2">
                <img
                    src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                    alt=""
                    className="max-w-full h-auto rounded-full border border-btnBorder"
                    width="47"
                />
            </div>
            <div>
                <p className="mb-0">
                    By<b className='text-[#F68921]'> Alan Bell</b>
                </p>
            </div>
            <p className="ml-3 mt-3 sm:mt-0">August 10th, 2020</p>
        </div>
        <div>
            <ul className="mt-3 flex gap-1.5 text-[#1d294f] lg:gap-4 sm:mt-0">
                {serviceSocial.map((list, j) => (
                    <Social list={list} index={j} key={j} />
                ))}
            </ul>
        </div>
    </div>
);

const SideBar = ({ serviceData }) => (
    <>
        <div className="bg-[#1d294f] bg-opacity-90 dark:bg-[#1E2735] text-white rounded-t-lg py-4 px-3 mb-4">
            <h5 className="text-xl font-medium text-[#F68921]">Popular Service</h5>
        </div>
        {serviceData.map((item, i) => (
            <Fragment key={i}>
                {!!i && <hr className="my-4" />}
                <ServiceItems item={item} />
            </Fragment>
        ))}
    </>
);

SideBar.propTypes = {
    serviceData: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        services_name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        seats: PropTypes.number.isRequired
    })).isRequired,
};

const ServiceDetails2 = () => {
    const [serviceData, setServiceData] = useState([]);
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const id = parseInt(params.id, 10); // Convert id to a number

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchServiceData();
                setServiceData(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load data');
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (Number.isInteger(id) && id >= 0 && id < serviceData.length) {
            setService(serviceData[id]);
        } else {
            setService(null); // Or handle error case if ID is invalid
        }
    }, [id, serviceData]);

    if (loading) {
        return <Loading />; // Show loading component while data is being fetched
    }

    if (error) {
        return <ErrorPage message={error} />; // Show error page if there was an error
    }

    if (!service) {
        return <ErrorPage />; // Show error page if service is not found
    }

    return (
        <section className="ezy__blogdetails1 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <DetailsPage />
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="col-span-3 md:col-span-2 px-4">
                        <h1 className="whitespace-nowrap font-bold text-2xl md:text-5xl pt-7 text-[#F68921] tracking-widest mb-12">
                            {service.services_name}
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8 px-4">
                        <img
                            src={service.bg_image}
                            alt=""
                            className="w-full h-auto rounded"
                        />
                        {/* social content */}
                        <SocialContent />

                        {/* contents */}
                        <Contents serviceData={service} />
                    </div>
                    {/* sidebar */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-9 px-4 md:pl-6 lg:pl-0">
                        <SideBar serviceData={serviceData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails2;
