'use client' 
import HeroSlider from "@/components/HeroSlider";

import Feature from "@/components/FetureCard";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Testimonial from "@/components/Testimonials";

import ClientLogo from "@/components/ClientLogo";
import VideoModal from "@/components/VideoModal";
import DomainDetails from "@/components/DomainDetails";
import Faq from "@/components/Faq";
import ContactUs from "@/components/Contact";
import AboutCard from "@/components/AboutCard";
import ServiceCard from "@/components/ServiceCard";
import ServiceHeading from "@/components/ServiceHeading";
import HostingCard from "@/components/HostingCard";

 



export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <main>
      <HeroSlider/>
      <Feature/>
      <AboutCard/>
      <ClientLogo/>
      <VideoModal/>
      <DomainDetails/>
      <ServiceHeading/>
     <ServiceCard/>
      <Testimonial/>
     <HostingCard/>
     <Faq/>
     <ContactUs/>
    
    </main>
  );
}


