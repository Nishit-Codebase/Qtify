import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Carousel.css';
import { useRef, useState } from "react";

// const Carousel = ({ items, renderItem }) => {
//   return (
//     <Swiper
//       modules={[Navigation]}
//       navigation
//       spaceBetween={16}
//       slidesPerView={'auto'}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1024: { slidesPerView: 4 },
//         1280: { slidesPerView: 5 }
//       }}
//       className="custom-swiper"
//     >
//       {items.map((item, index) => (
//         <SwiperSlide key={index} className="carousel-slide">
//           {renderItem(item)}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;

const Carousel = ({ items, renderItem }) => {
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      spaceBetween={10}
      slidesPerView={7}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onReachEnd={() => setIsEnd(true)}
      onFromEdge={() => setIsEnd(false)} 
      // breakpoints={{
      //   640: { slidesPerView: 2 },
      //   768: { slidesPerView: 3 },
      //   1024: { slidesPerView: 4 },
      //   1440: { slidesPerView: 6 }, 
      //   1600: { slidesPerView: 7 }  
      // }}
      
      className="custom-swiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          {renderItem(item)}
        </SwiperSlide>
      ))}
      {!isEnd && <div className="swiper-button-next"></div>}
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Carousel