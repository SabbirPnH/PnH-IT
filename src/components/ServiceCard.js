// "use client";

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useMediaQuery } from 'react-responsive';

// const cardsData = [
//   {
//     image: 'img/engineer.png',
//     title: 'Software Development',
//     imgSrc: '/img/service/software.jpg',
//     date: 'November 2 - 4',
//     seats: 'Seats remaining: 2',
//     details: 'Designing, coding, testing, and maintaining programs to solve problems and meet needs.',
//   },
//   {
//     image: '/img/testing.png',
//     title: 'Web Development',
//     imgSrc: '/img/service/web.jpg',
//     date: 'December 10 - 12',
//     seats: 'Seats remaining: 5',
//     details: 'UI design, coding functionality. Define site goals, audience, and content.',
//   },
//   {
//     image: '/img/apps.png',
//     title: 'Apps Development',
//     imgSrc: '/img/service/apps.jpeg',
//     date: 'January 15 - 17',
//     seats: 'Seats remaining: 8',
//     details: 'Develop app UI (Swift/Objective-C for iOS, Java/Kotlin for Android), set up servers, databases, APIs, and conduct thorough testing.',
//   },
//   {
//     image: '/img/graphic-designer.png',
//     title: 'Graphics Design',
//     imgSrc: '/img/service/graphic.jpg',
//     date: 'January 15 - 17',
//     seats: 'Seats remaining: 8',
//     details: 'Visual communication through typography, imagery, color, layout for print, digital, & multimedia.',
//   },
//   {
//     image: '/img/social-media.png',
//     title: 'Digital Marketing',
//     imgSrc: '/img/service/marketing.jpg',
//     date: 'January 15 - 17',
//     seats: 'Seats remaining: 8',
//     details: 'Utilizes online strategies (SEO, Social Media, Email, Affiliate, E-commerce, Influencer) to promote products, brands, and individuals.',
//   },
//   {
//     image: '/img/brand.png',
//     title: 'Brand Building',
//     imgSrc: '/img/service/brand.jpeg',
//     date: 'January 15 - 17',
//     seats: 'Seats remaining: 8',
//     details: 'Cultivating a strong, trusted identity for business, product, or individual, fostering loyalty and credibility.',
//   },
// ];

// const ServiceCard = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const router = useRouter();
//   const isMobile = useMediaQuery({ query: '(max-width: 640px)' }); // Tailwind's sm breakpoint

//   const handleServiceDetailsClick = (id) => {
//     router.push(`/service/${id}`);
//   };

//   return (
//     <div>
//       {!isMobile && (
//         <div style={styles.container}>
//           <div className='grid grid-cols-1 gap-5 sm:gap-8 lg:gap-16 sm:px-5 sm:grid-cols-2 xl:grid-cols-3'>
//             {cardsData.map((card, id) => (
//               <div
//                 key={id}
//                 style={styles.card}
//                 onMouseEnter={() => setHoveredIndex(id)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 data-aos="zoom-in"
//                 data-aos-delay={`${(id + 1) * 200}`}
//               >
//                 <div style={{ ...styles.thumb, backgroundImage: `url(${card.imgSrc})` }}></div>
//                 <div style={{ ...styles.infos, transform: hoveredIndex === id ? `translateY(-${styles.thumb.height})` : 'translateY(0)' }}>
//                   <h2 style={styles.title}>
//                     {card.title}
//                     <span style={{ ...styles.flag, backgroundImage: `url(${card.image})` }}></span>
//                   </h2>
//                   <h3 style={styles.date}>{card.date}</h3>
//                   <h3 style={{ ...styles.seats, opacity: hoveredIndex === id ? 1 : 0 }}>{card.seats}</h3>
//                   <p style={{ ...styles.txt, opacity: hoveredIndex === id ? 1 : 0 }}>
//                     {card.details}
//                   </p>
//                   <h3 style={{ ...styles.details, opacity: hoveredIndex === id ? 1 : 0 }} onClick={() => handleServiceDetailsClick(id)}>
//                     Service details
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {isMobile && (
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
        
          
//           modules={[Autoplay]}
//           className="mySwiper"
//         >
//           {cardsData.map((card, id) => (
//             <SwiperSlide key={id}>
//               <div
//                 key={id}
//                 style={styles.card}
//                 onMouseEnter={() => setHoveredIndex(id)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 data-aos="zoom-in"
//                 data-aos-delay={`${(id + 1) * 200}`}
//               >
//                 <div style={{ ...styles.thumb, backgroundImage: `url(${card.imgSrc})` }}></div>
//                 <div style={{ ...styles.infos, transform: hoveredIndex === id ? `translateY(-${styles.thumb.height})` : 'translateY(0)' }}>
//                   <h2 style={styles.title}>
//                     {card.title}
//                     <span style={{ ...styles.flag, backgroundImage: `url(${card.image})` }}></span>
//                   </h2>
//                   <h3 style={styles.date}>{card.date}</h3>
//                   <h3 style={{ ...styles.seats, opacity: hoveredIndex === id ? 1 : 0 }}>{card.seats}</h3>
//                   <p style={{ ...styles.txt, opacity: hoveredIndex === id ? 1 : 0 }}>
//                     {card.details}
//                   </p>
//                   <h3 style={{ ...styles.details, opacity: hoveredIndex === id ? 1 : 0 }} onClick={() => handleServiceDetailsClick(id)}>
//                     Service details
//                   </h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#fff',
//     padding: '0px 20px',
//   },
//   card: {
//     position: 'relative',
//     width: '350px',
//     height: '350px',
//     borderRadius: '3px',
//     boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
//     overflow: 'hidden',
//     transition: 'transform 0.4s cubic-bezier(.17,.67,.5,1.03)',
//     cursor: 'pointer',
//   },
//   thumb: {
//     width: '100%',
//     height: '260px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     borderRadius: '3px',
//   },
//   infos: {
//     padding: '14px 24px',
//     backgroundColor: '#fff',
//     height: '350px',
//     position: 'relative',
//     transition: 'transform 0.4s 0.15s cubic-bezier(.17,.67,.5,1.03)',
//   },
//   title: {
//     position: 'relative',
//     margin: '10px 0',
//     letterSpacing: '1px',
//     color: '#152536',
//     fontFamily: 'Grotesque Black, sans-serif',
//     fontSize: '1rem',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     textShadow: '0 0 0px rgba(21, 37, 54, 0.2)',
//   },
//   flag: {
//     position: 'absolute',
//     top: '50%',
//     right: '0',
//     transform: 'translateY(-50%)',
//     width: '35px',
//     height: '35px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'inline-block',
//     border: 'none',
//   },
//   date: {
//     marginBottom: '10px',
//     textTransform: 'uppercase',
//     fontSize: '0.85rem',
//     color: 'rgba(21, 37, 54, 0.7)',
//     fontFamily: 'Grotesque, sans-serif',
//   },
//   seats: {
//     marginBottom: '24px',
//     paddingBottom: '24px',
//     borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
//     textTransform: 'uppercase',
//     fontSize: '0.85rem',
//     color: 'rgba(21, 37, 54, 0.7)',
//     fontFamily: 'Grotesque, sans-serif',
//     transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
//   },
//   txt: {
//     fontFamily: 'Merriweather, sans-serif',
//     lineHeight: '2',
//     fontSize: '0.95rem',
//     color: 'rgba(21, 37, 54, 0.7)',
//     transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
//   },
//   details: {
//     position: 'absolute',
//     left: '0',
//     bottom: '0',
//     margin: '10px 0',
//     padding: '20px 24px',
//     letterSpacing: '1px',
//     color: '#F68921',
//     fontFamily: 'Grotesque Black, sans-serif',
//     fontSize: '0.9rem',
//     textTransform: 'uppercase',
//     cursor: 'pointer',
//     transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
//   },
// };

// export default ServiceCard;



'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const cardsData = [
  {
    image: 'img/engineer.png',
    title: 'Software Development',
    imgSrc: '/img/service/software.jpg',
    date: 'November 2 - 4',
    seats: 'Seats remaining: 2',
    details: 'Designing, coding, testing, and maintaining programs to solve problems and meet needs.',
  },
  {
    image: '/img/testing.png',
    title: 'Web Development',
    imgSrc: '/img/service/web.jpg',
    date: 'December 10 - 12',
    seats: 'Seats remaining: 5',
    details: 'UI design, coding functionality. Define site goals, audience, and content.',
  },
  {
    image: '/img/apps.png',
    title: 'Apps Development',
    imgSrc: '/img/service/apps.jpeg',
    date: 'January 15 - 17',
    seats: 'Seats remaining: 8',
    details: 'Develop app UI (Swift/Objective-C for iOS, Java/Kotlin for Android), set up servers, databases, APIs, and conduct thorough testing.',
  },
  {
    image: '/img/graphic-designer.png',
    title: 'Graphics Design',
    imgSrc: '/img/service/graphic.jpg',
    date: 'January 15 - 17',
    seats: 'Seats remaining: 8',
    details: 'Visual communication through typography, imagery, color, layout for print, digital, & multimedia.',
  },
  {
    image: '/img/social-media.png',
    title: 'Digital Marketing',
    imgSrc: '/img/service/marketing.jpg',
    date: 'January 15 - 17',
    seats: 'Seats remaining: 8',
    details: 'Utilizes online strategies (SEO, Social Media, Email, Affiliate, E-commerce, Influencer) to promote products, brands, and individuals.',
  },
  {
    image: '/img/brand.png',
    title: 'Brand Building',
    imgSrc: '/img/service/brand.jpeg',
    date: 'January 15 - 17',
    seats: 'Seats remaining: 8',
    details: 'Cultivating a strong, trusted identity for business, product, or individual, fostering loyalty and credibility.',
  },
];

const ServiceCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's sm breakpoint
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleServiceDetailsClick = (id) => {
    router.push(`/service/${id}`);
  };

  return (
    <div>
      {!isMobile && (
        <div style={styles.container}>
          <div className='grid grid-cols-1 gap-5 sm:gap-8 lg:gap-16 sm:px-5 sm:grid-cols-2 xl:grid-cols-3'>
            {cardsData.map((card, id) => (
              <div
                key={id}
                style={styles.card}
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="zoom-in"
                data-aos-delay={`${(id + 1) * 200}`}
              >
                <div style={{ ...styles.thumb, backgroundImage: `url(${card.imgSrc})` }}></div>
                <div style={{ ...styles.infos, transform: hoveredIndex === id ? `translateY(-${styles.thumb.height})` : 'translateY(0)' }}>
                  <h2 style={styles.title}>
                    {card.title}
                    <span style={{ ...styles.flag, backgroundImage: `url(${card.image})` }}></span>
                  </h2>
                  <h3 style={styles.date}>{card.date}</h3>
                  <h3 style={{ ...styles.seats, opacity: hoveredIndex === id ? 1 : 0 }}>{card.seats}</h3>
                  <p style={{ ...styles.txt, opacity: hoveredIndex === id ? 1 : 0 }}>
                    {card.details}
                  </p>
                  <h3 style={{ ...styles.details, opacity: hoveredIndex === id ? 1 : 0 }} onClick={() => handleServiceDetailsClick(id)}>
                    Service details
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isMobile && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {cardsData.map((card, id) => (
            <SwiperSlide key={id}>
              <div
                className='ml-10'
                style={{ ...styles.card, width: '280px', height: '280px' }} // Make the card smaller for mobile
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="zoom-in"
                data-aos-delay={`${(id + 1) * 200}`}
              >
                <div style={{ ...styles.thumb, backgroundImage: `url(${card.imgSrc})`, height: '200px' }}></div> {/* Make the thumbnail smaller for mobile */}
                <div style={{ ...styles.infos, height: '250px', transform: hoveredIndex === id ? `translateY(-${styles.thumb.height})` : 'translateY(0)' }}>
                  <h2 style={styles.title}>
                    {card.title}
                    <span style={{ ...styles.flag, backgroundImage: `url(${card.image})` }}></span>
                  </h2>
                  <h3 style={styles.date}>{card.date}</h3>
                  <h3  style={{ ...styles.seats, opacity: hoveredIndex === id ? 1 : 0 }}>{card.seats}</h3>
                  <p className='line-clamp-1 sm:line-clamp-2' style={{ ...styles.txt, opacity: hoveredIndex === id ? 1 : 0 }}>
                    {card.details}
                  </p>
                  <h3 style={{ ...styles.details, opacity: hoveredIndex === id ? 1 : 0 }} onClick={() => handleServiceDetailsClick(id)}>
                    Service details
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '0px 20px',
  },
  card: {
    position: 'relative',
    width: '350px',
    height: '350px',
    borderRadius: '3px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
    overflow: 'hidden',
    transition: 'transform 0.4s cubic-bezier(.17,.67,.5,1.03)',
    cursor: 'pointer',
  },
  thumb: {
    width: '100%',
    height: '260px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '3px',
  },
  infos: {
    padding: '14px 24px',
    backgroundColor: '#fff',
    height: '350px',
    position: 'relative',
    transition: 'transform 0.4s 0.15s cubic-bezier(.17,.67,.5,1.03)',
  },
  title: {
    position: 'relative',
    letterSpacing: '1px',
    color: '#152536',
    fontFamily: 'Grotesque Black, sans-serif',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '0 0 0px rgba(21, 37, 54, 0.2)',
  },
  flag: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    width: '35px',
    height: '35px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'inline-block',
    border: 'none',
  },
  date: {
    marginBottom: '10px',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    color: 'rgba(21, 37, 54, 0.7)',
    fontFamily: 'Grotesque, sans-serif',
  },
  seats: {
    marginBottom: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
    textTransform: 'uppercase',
    fontSize: '0.85rem',
    color: 'rgba(21, 37, 54, 0.7)',
    fontFamily: 'Grotesque, sans-serif',
    transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
  },
  txt: {
    fontFamily: 'Merriweather, sans-serif',
    lineHeight: '2',
    fontSize: '0.95rem',
    color: 'rgba(21, 37, 54, 0.7)',
    transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
  },
  details: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    margin: '10px 0',
    padding: '20px 24px',
    letterSpacing: '1px',
    color: '#F68921',
    fontFamily: 'Grotesque Black, sans-serif',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'opacity 0.5s 0.25s cubic-bezier(.17,.67,.5,1.03)',
  },
};

export default ServiceCard;
