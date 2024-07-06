import React from "react";

import AboutConten from "@/components/AboutConten";
import AboutContenHeader from "@/components/AboutContenHeader";
export async function generateMetadata({ params }) {
  return {
    title: 'About Conten Page',
    description: "Generated by create About Page",
  }
}
const AboutContenPage = () => {
  return (
   <div>
     <AboutContenHeader/>
     <AboutConten/>
   </div>
  );
};

export default AboutContenPage;
