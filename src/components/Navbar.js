// 'use client';
// import React, { useEffect, useRef } from 'react';
// import '../../src/app/globals.css';
// import Image from 'next/image'; 
// import Link from 'next/link';
// import logo from '/public/img/logo.png'; 





// export default  function Navbar() {

//   const toggleOpenRef = useRef(null);
//   const toggleCloseRef = useRef(null);
//   const collapseMenuRef = useRef(null);
//   const navbarRef = useRef(null); 

//   useEffect(() => {
//     const handleClick = () => {
//       if (collapseMenuRef.current.style.display === 'block') {
//         collapseMenuRef.current.style.display = 'none';
//       } else {
//         collapseMenuRef.current.style.display = 'block';
//       }
//     };

//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         navbarRef.current.classList.add('sticky-navbar');
//       } else {
//         navbarRef.current.classList.remove('sticky-navbar');
//       }
//     };

//     const toggleOpen = toggleOpenRef.current;
//     const toggleClose = toggleCloseRef.current;

//     if (toggleOpen && toggleClose) {
//       toggleOpen.addEventListener('click', handleClick);
//       toggleClose.addEventListener('click', handleClick);
//     }

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       if (toggleOpen && toggleClose) {
//         toggleOpen.removeEventListener('click', handleClick);
//         toggleClose.removeEventListener('click', handleClick);
//       }
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <main>
//       <div>

//         <header ref={navbarRef} className="flex  border-b py-4 px-4 sm:px-16 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
//           <div className="flex flex-wrap items-center gap-4 w-full">
//             <Link href={'/'} >
//               <Image src={logo} alt="logo" className="w-36" /> 
//             </Link>

//             <div
//               id="collapseMenu"
//               ref={collapseMenuRef}
//               className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
//             >
//               <button
//                 id="toggleClose"
//                 ref={toggleCloseRef}
//                 className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
//                   <path
//                     d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                     data-original="#000000"
//                   ></path>
//                   <path
//                     d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                     data-original="#000000"
//                   ></path>
//                 </svg>
//               </button>

//               <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
//                 <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
//                   <li className="mb-6 hidden max-lg:block">
//                     <Link href={'/'}>
//                       <Image src={logo} alt="logo" className="w-36" /> 
//                     </Link>
//                   </li>
//                   <li  className="max-lg:border-b max-lg:py-3">
//                     <Link href={'/'} className="hover:text-[#1d294f] text-[#1d294f] block font-bold text-[15px] from-after">
//                       Home
//                     </Link>
//                   </li>

//                   <li className="max-lg:border-b max-lg:py-3">
//                     <Link href={'/about'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Team
//                     </Link>
//                   </li>
//                   <li className="group max-lg:border-b max-lg:py-3 relative">
//                     <Link href={'/service'}
//                       className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold lg:hover:fill-[#1d294f] block from-after">Service<svg
//                         xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
//                         viewBox="0 0 24 24">
//                         <path
//                           d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
//                           data-name="16" data-original="#000000" />
//                       </svg>
//                     </Link>
//                     <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
//                       <li className="border-b py-2 "><Link href={'/service/1'}
//                           className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">Service Details</Link></li>

//                     </ul>
//                   </li>
//                   <li className="group max-lg:border-b max-lg:py-3 relative">
//                     <Link href={'#'}
//                       className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold lg:hover:fill-[#1d294f] block from-after">Pages<svg
//                         xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
//                         viewBox="0 0 24 24">
//                         <path
//                           d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
//                           data-name="16" data-original="#000000" />
//                       </svg>
//                     </Link>
//                     <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
//                       <li className="border-b py-2 "><Link href={'/blog'}
//                           className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">Blog</Link></li>
//                       <li className="border-b py-2 ">
//                         <Link href={'/blog/1'}
//                           className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">Blog Post</Link>
//                       </li>

//                     </ul>
//                   </li>

//                 </ul>

//                 <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'/protfolio'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                      Protfolio
//                     </Link>
//                   </li>
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'/contact'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

//             <div className="flex items-center ml-auto space-x-6">

//            <Link href={'/hosting'}>
//            <p className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
//                Hosting
//               </p>
//            </Link>

//               <button id="toggleOpen" ref={toggleOpenRef} className="lg:hidden">
//                 <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fillRule="evenodd"
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </header>
//       </div>
//     </main>
//   );
// }


'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../../src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/img/logo.png';

import getNavbarMenu from '@/lib/NavbarMenu';

export default function Navbar() {
  const [menu, setMenu] = useState([]);
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const collapseMenuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      const data = await getNavbarMenu(); 
      setMenu(data);
    };

    fetchFaqs();
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (collapseMenuRef.current.style.display === 'block') {
        collapseMenuRef.current.style.display = 'none';
      } else {
        collapseMenuRef.current.style.display = 'block';
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarRef.current.classList.add('sticky-navbar');
      } else {
        navbarRef.current.classList.remove('sticky-navbar');
      }
    };

    const toggleOpen = toggleOpenRef.current;
    const toggleClose = toggleCloseRef.current;

    if (toggleOpen && toggleClose) {
      toggleOpen.addEventListener('click', handleClick);
      toggleClose.addEventListener('click', handleClick);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (toggleOpen && toggleClose) {
        toggleOpen.removeEventListener('click', handleClick);
        toggleClose.removeEventListener('click', handleClick);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <div>
        <header ref={navbarRef} className="flex border-b py-4 px-4 sm:px-16 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
          <div className="flex flex-wrap items-center gap-4 w-full">
            <Link href={'/'}>
              <Image src={logo} alt="logo" className="w-36" />
            </Link>

            <div
              id="collapseMenu"
              ref={collapseMenuRef}
              className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
            >
              <button
                id="toggleClose"
                ref={toggleCloseRef}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                  {menu.map((menuItem) => (
                    <li key={menuItem.id} className={`max-lg:border-b max-lg:py-3 ${menuItem.sub_menu ? 'group relative' : ''}`}>
                      <Link href={menuItem.url} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
                        {menuItem.menu_name}
                      </Link>
                      {menuItem.sub_menu && (
                        <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                          <li className="border-b py-2">
                            <Link href={menuItem.sub_url || '/service/1'} className="hover:text-[#1d294f] text-gray-600 text-[15px] font-bold block from-after">
                              {menuItem.sub_menu}
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

            <div className="flex items-center ml-auto space-x-6">
              <Link href={'/hosting'}>
                <p className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
                  Hosting
                </p>
              </Link>

              <button id="toggleOpen" ref={toggleOpenRef} className="lg:hidden">
                <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}





