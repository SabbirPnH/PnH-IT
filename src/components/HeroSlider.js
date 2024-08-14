
// import '../app/globals.css'
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-fade';

// // Import required modules
// import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
// import Image from 'next/image';
// import getAllSlider from '../../lib/getAllSlider';

// export default async function HeroSlider() {
//   const slider=await getAllSlider()

//   let images = [];

//   for (let i = 1; i <= 5; i++) {
//     images[i] = `/img/hero-carousel/${i}.png`;
//   }
//   return (
//     <div className="w-full relative"> 
//     {
//       slider.map((item,id)=>(
//         console.log(item.slider_image)
//       ))
//     }
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation, EffectFade]}
//         className="mySwiper"
//         loop={true} // Enables infinite looping
//         effect="fade" // Adds fade effect for smooth transitions
//         fadeEffect={{ crossFade: true }}
//         speed={1000} // Speed of transition in ms
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[200px] sm:h-[100vh]">
//               <Image
//                 src={image}
//                 layout="fill"
//                 objectFit="cover"
//                 alt={`Slide ${index + 1}`}
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




import '../app/globals.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import getAllSlider from '@/lib/Slider';


export default async function HeroSlider() {
  const slider = await getAllSlider();

  return (
    <div className="w-full relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        loop={true} // Enables infinite looping
        effect="fade" // Adds fade effect for smooth transitions
        fadeEffect={{ crossFade: true }}
        speed={1000} // Speed of transition in ms
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[200px] sm:h-[100vh]">
              <Image
                src={item.slider_image}
                layout="fill"
                objectFit="cover"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                {/* Add any additional content here, like text over the image */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
