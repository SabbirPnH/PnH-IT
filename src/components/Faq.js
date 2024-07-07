import React, { useState } from 'react';
import faqs from '../../src/data/Faq';

const FAQSection = () => {

  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion py-4 border-b border-solid border-gray-200">
        <button
          className="accordion-toggle group inline-flex items-center justify-between text-lg xl:whitespace-nowrap font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-[#F68921]"
          aria-controls={`collapse-${question}`}
          onClick={() => setIsOpen(!isOpen)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h5>{question}</h5>
          <svg
            className={`text-gray-900 transition duration-500 group-hover:text-[#F68921] ${isOpen ? 'rotate-180' : ''}`}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div
          id={`collapse-${question}`}
          className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ${isOpen ? '' : 'max-h-0'}`} // Removed 'max-h-40' and replaced with an empty string
        >
          <p className="text-base font-normal text-gray-600">{answer}</p>
        </div>
      </div>
      
    );
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-16" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center gap-x-10 gap-y-5 xl:gap-16 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full  lg:w-1/2">
            <img
              src='https://media.istockphoto.com/id/1349998432/photo/3d-render-of-faqs-business-concept.jpg?b=1&s=612x612&w=0&k=20&c=kGtU1mqoPwP9se3mpXxw9q4bZEITSfE2kwfubZMgzgE='
              alt="FAQ image"
              className="w-full h-[500px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                <span className='text-gray-500'>Frequently Asked</span> <span className='text-[#F68921] font-bold'>Questions</span>
                </h2>
                <h6 className="text-lg text-center font-medium text-gray-600 mb-2 lg:text-left">
                Make every customer more successful by giving them the exact information they need, right when they need it.


                </h6>
              </div>
              <div className="accordion-group">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
