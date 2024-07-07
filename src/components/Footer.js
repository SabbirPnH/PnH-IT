import Link from "next/link";

const Footer = () => {
    return(
        <div>
            <footer className="w-full bg-[#1d294f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           
            <div className="flex justify-between flex-col py-8  gap-14 lg:gap-20 min-[1124px]:flex-row">
                <div className="block  xl:max-w-lg">
                    <Link className="cursor-pointer" href={'/'}><img src="/img/logo.png" className='w-56'/></Link>
                    <p className="text-lg text-white pt-4 mb-12 text-center min-[1124px]:text-left">184, Razia Plaza. Level-6
Mirpur-10, Dhaka-1216, Bangladesh
</p>
                    <div className="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
                        <span className="absolute left-5 top-4 lg:top-5"><svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25201 4L7.15881 7.89529C9.26862 9.16117 10.3235 9.79412 11.4825 9.76654C12.6416 9.73896 13.6652 9.05656 15.7124 7.69175L20.748 4M9 17H13C16.7712 17 18.6569 17 19.8284 15.8284C21 14.6569 21 12.7712 21 9C21 5.22876 21 3.34315 19.8284 2.17157C18.6569 1 16.7712 1 13 1H9C5.22876 1 3.34315 1 2.17157 2.17157C1 3.34315 1 5.22876 1 9C1 12.7712 1 14.6569 2.17157 15.8284C3.34315 17 5.22876 17 9 17Z" stroke="#F68921" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            </span>
                        <input type="text" name="email" className="py-3 px-5 h-14 pl-14 border border-gray-300 rounded-md text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none flex-1 w-full " placeholder="Contact"/>
                        <button type="submit" className="h-14 py-3.5 px-7 bg-[#F68921] transition-all duration-500 shadow-md rounded-md text-white font-semibold hover:bg-black">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-12 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
                   <div className="block">
                        <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left xl:whitespace-nowrap">Useful Links</h4>
                        <ul className="grid gap-2 text-center lg:text-left">
                            <li><Link href="/"  className="text-white hover:text-[#F68921]">Home</Link></li>
                            <li><Link href="/about"  className="text-white hover:text-[#F68921]">About</Link></li>
                            <li><Link href="/service"  className="text-white hover:text-[#F68921]">Service</Link></li>
                            <li><Link href="/hosting"  className="text-white hover:text-[#F68921]">Hosting</Link></li>
                            <li><Link href="/contact"  className="text-white hover:text-[#F68921]">Contact</Link></li>
                        </ul>
                   </div>
                   <div className="block">
                    <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Services</h4>
                    <ul className="grid gap-2 text-center lg:text-left" >
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Software Development</a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Web Development</a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921] xl:whitespace-nowrap">Mobile App Development</a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Graphics Design</a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Digitaal Marketing</a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921]">Brand Building</a></li>
                    </ul>
                  </div>
                  <div className="block">
                    <h4 className="text-lg text-[#F68921] font-medium mb-7 text-center lg:text-left">Our Information</h4>
                    <ul className="grid gap-2 text-center lg:text-left">
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921] xl:whitespace-nowrap font-bold">Phone: <span className='text-[#F68921] '>+880 1873 003333</span>
                        </a></li>
                        <li><a href="javascript:;"  className="text-white hover:text-[#F68921] font-bold">Email: <span className='text-[#F68921]'>it@pnhbd.com</span>
                        </a></li>
                        
                    </ul>
                  </div>
                </div>
               
            </div>
            <div className="py-9 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 sm:flex-row sm:justify-between">
                    <span className="text-sm text-gray-200 flex">Copyright ©  <a href="https://pagedone.io/"> <span className="font-semibold text-[#F68921]"> PnH IT Solution. </span> </a> All Rights Reserved.<span className="hidden lg:block">Developed by PnH IT Solution </span>
                    </span>
                    <p className="text-white text-sm block lg:hidden -mt-2.5">Developed by PnH IT Solution</p>
                    
                    <div className="flex space-x-6 sm:justify-center">
    <a href="http://fb.com/pnhitsolution/" className="group flex justify-center items-center">
        <svg className="w-[1.25rem] h-[1.25rem] text-[#F68921] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.333C0 23.402.597 24 1.325 24h11.495v-9.294H9.857v-3.622h2.963V8.413c0-2.936 1.792-4.538 4.412-4.538 1.254 0 2.329.093 2.641.134v3.061l-1.814.001c-1.421 0-1.696.674-1.696 1.664v2.182h3.396l-.443 3.622h-2.953V24h5.782c.728 0 1.325-.598 1.325-1.334V1.333C24 .598 23.402 0 22.675 0z"/>
        </svg>
    </a>
    <a href="https://bd.linkedin.com/company/pnh-corporation" className="group flex justify-center items-center">
        <svg className="w-[1rem] h-[1rem] text-[#F68921] group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.23 0H1.771C.792 0 0 .792 0 1.771v20.457C0 23.208.792 24 1.771 24H22.23C23.208 24 24 23.208 24 22.229V1.771C24 .792 23.208 0 22.23 0zM7.225 20.452H3.724V9.053h3.501v11.399zm-1.751-13.02c-1.13 0-2.047-.918-2.047-2.047 0-1.129.917-2.047 2.047-2.047 1.129 0 2.047.918 2.047 2.047-.001 1.129-.918 2.047-2.047 2.047zm14.725 13.02h-3.499v-5.527c0-1.316-.026-3.01-1.833-3.01-1.833 0-2.114 1.43-2.114 2.914v5.623h-3.499V9.053h3.359v1.551h.048c.467-.884 1.607-1.814 3.305-1.814 3.535 0 4.184 2.328 4.184 5.353v6.309z"/>
        </svg>
    </a>
    <a href="http://wa.me/8801873003333" className="group flex justify-center items-center">
    <svg className="w-[1.25rem] h-[1.125rem] text-[#F68921] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>

    </a>
    <a href="http://m.me/pnhitsolution/" className="group flex justify-center items-center">
    <svg className="w-[1.25rem] h-[1.125rem] text-[#F68921] group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>

    </a>
</div>

                </div>
            </div>
        </div>   
    </footer>
                                            
        </div>
    )
}
export default Footer;