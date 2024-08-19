// import Link from "next/link";

// const Footer = () => {
//     return(
//         <div>
//             <footer className="w-full bg-[#1d294f]">
//         <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">

//             <div className="flex justify-between flex-col py-8 gap-3 sm:gap-14 lg:gap-20 min-[1124px]:flex-row">
//                 <div className="block  xl:max-w-lg">
//                     <Link className="cursor-pointer" href={'/'}><img src="/img/logo.png" className='w-56'/></Link>
//                     <p className="text-lg text-white pt-4 mb-2 sm:mb-12 text-center min-[1124px]:text-left">184, Razia Plaza. Level-6
// Mirpur-10, Dhaka-1216, Bangladesh
// </p>
//                     <div className="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
//                         <span className="absolute left-5 top-4 lg:top-5"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1.25201 4L7.15881 7.89529C9.26862 9.16117 10.3235 9.79412 11.4825 9.76654C12.6416 9.73896 13.6652 9.05656 15.7124 7.69175L20.748 4M9 17H13C16.7712 17 18.6569 17 19.8284 15.8284C21 14.6569 21 12.7712 21 9C21 5.22876 21 3.34315 19.8284 2.17157C18.6569 1 16.7712 1 13 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9C1 12.7712 1 14.6569 2.17157 15.8284C3.34315 17 5.22876 17 9 17Z" stroke="#F68921" stroke-width="1.5" stroke-linecap="round"/>
//                             </svg>
//                             </span>
//                         <input type="text" name="email" className="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-md text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full " placeholder="Contact"/>
//                         <button type="submit" className="h-14 py-3.5 px-7 bg-[#F68921] transition-all duration-500 shadow-md rounded-md text-white font-semibold hover:bg-black">Subscribe</button>
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-3 sm:gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
//                    <div className="block">
//                         <h4 className="text-lg text-[#F68921] font-medium mb-2 sm:mb-7 text-center lg:text-left xl:whitespace-nowrap">Useful Links</h4>
//                         <ul className="grid gap-2 text-center lg:text-left">
//                             <li><Link href="/"  className="text-white hover:text-[#F68921]">Home</Link></li>
//                             <li><Link href="/about"  className="text-white hover:text-[#F68921]">About</Link></li>
//                             <li><Link href="/service"  className="text-white hover:text-[#F68921]">Service</Link></li>
//                             <li><Link href="/hosting"  className="text-white hover:text-[#F68921]">Hosting</Link></li>
//                             <li><Link href="/contact"  className="text-white hover:text-[#F68921]">Contact</Link></li>
//                         </ul>
//                    </div>
//                    <div className="block">
//                     <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Services</h4>
//                     <ul className="grid gap-2 text-center lg:text-left" >
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Software Development</a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Web Development</a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921] xl:whitespace-nowrap">Mobile App Development</a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Graphics Design</a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Digitaal Marketing</a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Brand Building</a></li>
//                     </ul>
//                   </div>
//                   <div className="block">
//                     <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Information</h4>
//                     <ul className="grid gap-2 text-center lg:text-left">
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921] xl:whitespace-nowrap font-bold">Phone: <span className='text-[#F68921] '>+880 1873 003333</span>
//                         </a></li>
//                         <li><a href="javascript:;"  className="text-white hover:text-[#F68921] font-bold">Email: <span className='text-[#F68921]'>it@pnhbd.com</span>
//                         </a></li>

//                     </ul>
//                   </div>
//                 </div>

//             </div>
//             <div className="py-9 border-t border-gray-200">
//                 <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
//                     <span className="text-sm text-gray-200 flex">Copyright ©  <a href="https://pagedone.io/"> <span className="font-semibold text-[#F68921]"> PnH IT Solution. </span> </a> All Rights Reserved.<span className="hidden lg:block">Developed by PnH IT Solution </span>
//                     </span>
//                     <p className="text-white text-sm block lg:hidden -mt-2.5">Developed by PnH IT Solution</p>

//                     <div className="flex space-x-6 sm:justify-center mr-10">
//     <a href="http://fb.com/pnhitsolution/" className="group flex justify-center items-center bg-white p-0.5">
//         <svg className="w-[1.50rem] h-[1.50rem] text-[#3b5998] " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24h11.495v-9.294H9.857v-3.622h2.963V8.413c0-2.936 1.792-4.538 4.412-4.538 1.254 0 2.329.093 2.641.134v3.061l-1.814.001c-1.421 0-1.696.674-1.696 1.664v2.182h3.396l-.443 3.622h-2.953V24h5.782c.728 0 1.325-.598 1.325-1.334V1.333C24 .598 23.402 0 22.675 0z"/>
//         </svg>
//     </a>
//     <a href="https://bd.linkedin.com/company/pnh-corporation" className="group flex justify-center items-center bg-white p-0.5">
//         <svg className="w-[1.50rem] h-[1.50rem] text-[#0e76a8] " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <path d="M22.23 0H1.771C.792 0 0 .792 0 1.771v20.457C0 23.208.792 24 1.771 24H22.23C23.208 24 24 23.208 24 22.229V1.771C24 .792 23.208 0 22.23 0zM7.225 20.452H3.724V9.053h3.501v11.399zm-1.751-13.02c-1.13 0-2.047-.918-2.047-2.047 0-1.129.917-2.047 2.047-2.047 1.129 0 2.047.918 2.047 2.047-.001 1.129-.918 2.047-2.047 2.047zm14.725 13.02h-3.499v-5.527c0-1.316-.026-3.01-1.833-3.01-1.833 0-2.114 1.43-2.114 2.914v5.623h-3.499V9.053h3.359v1.551h.048c.467-.884 1.607-1.814 3.305-1.814 3.535 0 4.184 2.328 4.184 5.353v6.309z"/>
//         </svg>
//     </a>
//     <a href="http://wa.me/8801873003333" className="group flex justify-center items-center bg-white p-0.5">
//         <svg className="w-[1.50rem] h-[1.50rem] text-[#25d366] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
//         </svg>
//     </a>
//     <a href="http://m.me/pnhitsolution/" className="group flex justify-center items-center bg-white p-0.5">
//         <svg className="w-[1.50rem] h-[1.50rem]  text-[#0078FF] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
//         </svg>
//     </a>
// </div>


//                 </div>
//             </div>
//         </div>   
//     </footer>

//         </div>
//     )
// }
// export default Footer;






// import getFooter from "@/lib/Footer";
// import getFooterLink from "@/lib/FooterLink";
// import getNavbarMenu from "@/lib/NavbarMenu";
// import Link from "next/link";

// const Footer = async () => {
//     const footer = await getFooter();
//     const menu= await getNavbarMenu()
//     const footerLinks= getFooterLink()
//     if (!footer || footer.length === 0) {
//         return (
//             <div>
//                 <p>Error loading footer data.</p>
//             </div>
//         );
//     }
//     const {image,name,logo_link,phone,email_one, } = footer[0];
//       const {link_one_title,link_two_title} = footerLinks[0]
    
//     return (
//         <div>
//             <footer className="w-full bg-[#1d294f]">
//                 <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between flex-col py-8 gap-3 sm:gap-14 lg:gap-20 min-[1124px]:flex-row">
//                         <div className="block xl:max-w-lg">
//                             <Link className="cursor-pointer" href={'/'}>
//                                 <img src={image} className='w-56' alt={name} />
//                             </Link>
//                             <p className="text-lg text-white pt-4 mb-2 sm:mb-12 text-center min-[1124px]:text-left">
//                                 {name}
//                             </p>
//                             <div className="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
//                                 <span className="absolute left-5 top-4 lg:top-5">
//                                     <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M1.25201 4L7.15881 7.89529C9.26862 9.16117 10.3235 9.79412 11.4825 9.76654C12.6416 9.73896 13.6652 9.05656 15.7124 7.69175L20.748 4M9 17H13C16.7712 17 18.6569 17 19.8284 15.8284C21 14.6569 21 12.7712 21 9C21 5.22876 21 3.34315 19.8284 2.17157C18.6569 1 16.7712 1 13 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9C1 12.7712 1 14.6569 2.17157 15.8284C3.34315 17 5.22876 17 9 17Z" stroke="#F68921" stroke-width="1.5" stroke-linecap="round" />
//                                     </svg>
//                                 </span>
//                                 <input type="text" name="email" className="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-md text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full" placeholder="Contact" />
//                                 <button type="submit" className="h-14 py-3.5 px-7 bg-[#F68921] transition-all duration-500 shadow-md rounded-md text-white font-semibold hover:bg-black">Subscribe</button>
//                             </div>
//                         </div>
//                         <div className="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-3 sm:gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
//                             <div className="block">
//                                 <h4 className="text-lg text-[#F68921] font-medium mb-2 sm:mb-7 text-center lg:text-left xl:whitespace-nowrap">Useful Links</h4>
//                                 <ul className="grid gap-2 text-center lg:text-left">
//                                    {
//                                     menu.map((item,id)=>(
//                                         <li key={id}><Link href={item.url} className="text-white hover:text-[#F68921]">{item.menu_name}</Link></li>
//                                     ))
//                                    }
//                                 </ul>
//                             </div>
//                             <div className="block">
//                                 <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Services</h4>
//                                 <ul className="grid gap-2 text-center lg:text-left">
                                  
//                                     <li><a href={link_one} className="text-white hover:text-[#F68921]">{link_one_title}</a></li>
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921] xl:whitespace-nowrap">{link_two_title}</a></li>
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921]">Graphics Design</a></li>
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921]">Digital Marketing</a></li>
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921]">Brand Building</a></li>
//                                 </ul>
//                             </div>
//                             <div className="block">
//                                 <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Information</h4>
//                                 <ul className="grid gap-2 text-center lg:text-left">
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921] xl:whitespace-nowrap font-bold">Phone: <span className='text-[#F68921]'>{phone}</span></a></li>
//                                     <li><a href="javascript:;" className="text-white hover:text-[#F68921] font-bold">Email: <span className='text-[#F68921]'>{email_one}</span></a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="py-9 border-t border-gray-200">
//                         <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
//                             <span className="text-sm text-gray-200 flex">Copyright ©
//                                 <a href={logo_link}><span className="font-semibold text-[#F68921]"> {name}. </span></a>
//                                 All Rights Reserved.
//                                 <span className="hidden lg:block">Developed by {name} </span>
//                             </span>
//                             <p className="text-white text-sm block lg:hidden -mt-2.5">Developed by {name}</p>
//                             <div className="flex space-x-6 sm:justify-center mr-10">
//                                 <a href="http://fb.com/pnhitsolution/" className="group flex justify-center items-center bg-white p-0.5">
//                                     <svg className="w-[1.50rem] h-[1.50rem] text-[#3b5998] " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24h11.495v-9.294H9.857v-3.622h2.963V8.413c0-2.936 1.792-4.538 4.412-4.538 1.254 0 2.329.093 2.641.134v3.061l-1.814.001c-1.421 0-1.696.674-1.696 1.664v2.182h3.396l-.443 3.622h-2.953V24h5.782c.728 0 1.325-.598 1.325-1.334V1.333C24 .598 23.402 0 22.675 0z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://bd.linkedin.com/company/pnh-corporation" className="group flex justify-center items-center bg-white p-0.5">
//                                     <svg className="w-[1.50rem] h-[1.50rem] text-[#0e76a8] " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M21.006 0H2.995C1.341 0 0 1.342 0 2.996v18.008A2.996 2.996 0 002.995 24h18.012A2.996 2.996 0 0024 21.004V2.996A2.995 2.995 0 0021.006 0zM7.118 20.451H3.663V9.015h3.455v11.436zM5.391 7.733h-.023C4.363 7.733 3.7 6.994 3.7 6.037c0-.966.686-1.696 1.737-1.696 1.051 0 1.714.73 1.737 1.696.001.957-.662 1.696-1.742 1.696zm14.837 12.718h-3.454v-5.599c0-1.403-.503-2.361-1.76-2.361-.959 0-1.528.644-1.78 1.266-.092.225-.114.539-.114.856v5.837H9.663s.045-9.475 0-10.436h3.455v1.478c.459-.711 1.27-1.723 3.09-1.723 2.258 0 3.971 1.475 3.971 4.646v6.035h-.001z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://www.youtube.com/channel/UCSTxM_qae8kQd2XOXFCWgDA" className="group flex justify-center items-center bg-white p-0.5">
//                                     <svg className="w-[1.50rem] h-[1.50rem] text-[#c4302b] " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M23.498 6.186a3.005 3.005 0 00-2.118-2.125C19.777 3.462 12 3.462 12 3.462s-7.777 0-9.38.599a3.005 3.005 0 00-2.118 2.125C.894 7.789.894 12 .894 12s0 4.211.608 5.814a3.005 3.005 0 002.118 2.125c1.603.599 9.38.599 9.38.599s7.777 0 9.38-.599a3.005 3.005 0 002.118-2.125C23.998 16.211 23.998 12 23.998 12s.016-4.211-.5-5.814zM9.543 15.568v-7.13l6.604 3.572-6.604 3.558z" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;




import getFooter from "@/lib/Footer";
import getFooterLink from "@/lib/FooterLink";
import getNavbarMenu from "@/lib/NavbarMenu";
import getSocial from "@/lib/Social";
import Link from "next/link";
import Image from 'next/image'

const Footer = async () => {
    const footer = await getFooter();
    const menu = await getNavbarMenu();
    const footerLinks = await getFooterLink(); 
    const social= await getSocial()
    
    if (!footer || footer.length === 0) {
        return (
            <div>
                <p>Error loading footer data.</p>
            </div>
        );
    }

    const { image, name, logo_link, phone, email_one } = footer[0];
    const footerLink = footerLinks.length > 0 ? footerLinks[0] : {}; 

    const { link_one_title, link_one , link_two_title, link_two,link_three_title,link_three,link_four_title,link_four,link_five_title,link_five,link_six_title,link_six ,link_seven_title,link_seven,link_eight_title,link_eight} = footerLink;

    return (
        <div>
            <footer className="w-full bg-[#1d294f]">
                <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between flex-col py-8 gap-3 sm:gap-14 lg:gap-20 min-[1124px]:flex-row">
                        <div className="block xl:max-w-lg">
                            <Link className="cursor-pointer" href={'/'}>
                                <img src={image} className='w-56' alt={name} />
                            </Link>
                            <p className="text-lg text-white pt-4 mb-2 sm:mb-12 text-center min-[1124px]:text-left">
                                {name}
                            </p>
                            <div className="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
                                <span className="absolute left-5 top-4 lg:top-5">
                                </span>
                                <input type="text" name="email" className="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-md text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full" placeholder="Contact" />
                                <button type="submit" className="h-14 py-3.5 px-7 bg-[#F68921] transition-all duration-500 shadow-md rounded-md text-white font-semibold hover:bg-black">Subscribe</button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-3 sm:gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
                            <div className="block">
                                <h4 className="text-lg text-[#F68921] font-medium mb-2 sm:mb-7 text-center lg:text-left xl:whitespace-nowrap">Useful Links</h4>
                                <ul className="grid gap-2 text-center lg:text-left">
                                    {menu.map((item, id) => (
                                        <li key={id}><Link href={item.url} className="text-white hover:text-[#F68921]">{item.menu_name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="block">
                                <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Services</h4>
                                <ul className="grid gap-2 text-center lg:text-left">
                                    <li><a href={link_one} className="text-white hover:text-[#F68921]">{link_one_title}</a></li>
                                    <li><a href={link_two} className="text-white hover:text-[#F68921]">{link_two_title}</a></li>
                                    <li><a href={link_three} className="text-white hover:text-[#F68921]">{link_three_title}</a></li>
                                    <li><a href={link_four} className="text-white hover:text-[#F68921]">{link_four_title}</a></li>
                                    <li><a href={link_five} className="text-white hover:text-[#F68921]">{link_five_title}</a></li>
                                    <li><a href={link_six} className="text-white hover:text-[#F68921]">{link_six_title}</a></li>
                                    <li><a href={link_seven} className="text-white hover:text-[#F68921]">{link_seven_title}</a></li>
                                    <li><a href={link_eight} className="text-white hover:text-[#F68921]">{link_eight_title}</a></li>
                                </ul>
                            </div>
                            <div className="block">
                                <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Information</h4>
                                <ul className="grid gap-2 text-center lg:text-left">
                                    <li><a href="javascript:;" className="text-white hover:text-[#F68921] xl:whitespace-nowrap font-bold">Phone: <span className='text-[#F68921]'>{phone}</span></a></li>
                                    <li><a href="javascript:;" className="text-white hover:text-[#F68921] font-bold">Email: <span className='text-[#F68921]'>{email_one}</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-9 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
                            <span className="text-sm text-gray-200 flex">Copyright ©
                                <a href={logo_link}><span className="font-semibold text-[#F68921]"> {name}. </span></a>
                                All Rights Reserved.
                                <span className="hidden lg:block">Developed by {name}</span>
                            </span>
                            <p className="text-white text-sm block lg:hidden -mt-2.5">Developed by {name}</p>
                            <div className="flex space-x-6 sm:justify-center mr-10">
                            <ul className="flex space-x-4">
                            {social.map((social, id) => (
                                <div key={id}>
                                <Link href={social.link}>
                                    <Image className="h-7 w-7" src={social.svg} alt="" width={28} height={28} />
                                </Link>
                                </div>
                            ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
