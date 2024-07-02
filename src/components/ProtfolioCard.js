

'use client'
import React, { useState } from "react";
import portfolioList from '../data/ProtfolioData'
const categories = [
  { label: "All", value: "", isActive: true },
  { label: "Product", value: "Branding", isActive: false },
  { label: "Books", value: "Marketing", isActive: false },
  { label: "Apps", value: "Mobile", isActive: false },
];



const PortfolioCard = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
  };

  return (
    <section className="ezy__portfolio4 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-[#373572] dark:text-white">
      <div className="pt-14 md:pt-24  pb-52 md:pb-64" style={{ background: "linear-gradient(131deg, #c7e7e1, #F68921)" }}>
        <div className="container  px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 text-center lg:text-start">
              
              <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">Enjoy Our Amazing Projects</h2>
              <p className="text-white mb-2">View some of our work and case studies for clients. We will work to deliver that strategy by building out your existing campaigns, or establishing accounts at new networks.</p>
            </div>
            
            <div className="col-span-12 lg:col-span-6 text-center lg:text-end mt-6 lg:mt-0">
              {categories.map((category, i) => (
                <button
                  onClick={() => handleCategoryClick(category.value)}
                  className={
                    category.isActive
                      ? "btn border border-white py-2 px-4 bg-white text-black rounded-md duration-300 m-1"
                      : "btn border border-white py-2 px-4 hover:bg-white text-white hover:text-black rounded-md duration-300 m-1"
                  }
                  key={i}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 -mt-52">
        <div className="grid grid-cols-12 gap-x-6">
          {portfolioList
            .filter((portfolio) => {
              if (activeCategory === "") {
                return true;
              } else if (activeCategory === "Branding") {
                return portfolio.categories.includes("Product Design");
              } else if (activeCategory === "Marketing"){
                return portfolio.categories.includes('Book Management');
              }else if(activeCategory === "Mobile"){
                return portfolio.categories.includes('Apps Design');
                
              }else{
                return portfolio.categories.includes(activeCategory);
              }
            })
            .map((portfolio, i) => (
              <div
                className={`col-span-12 md:col-span-4 ${
                  i % 3 === 0 && "md:mt-6 lg:mt-12 md:pt-12 lg:pt-12"
                } ${i % 3 === 1 && "md:mt-6 lg:mt-12"} `}
                key={i}
              >
                <div className="rounded-xl overflow-hidden relative group mt-6">
                  <img src={portfolio.image} alt={portfolio.title} className="w-full rounded-xl" />
                  <div className="relative group">
  <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm dark:bg-blur-sm bg-saturate-200 dark:bg-saturate-200 opacity-0 group-hover:opacity-100 transition duration-300 text-center p-6">
    <h5 className="text-xl font-medium mb-1">{portfolio.title}</h5>
    <p className="mb-0">{portfolio.categories.join(", ")}</p>
  </div>
</div>

                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

    
  );
};

export default PortfolioCard;