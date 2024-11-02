import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Carousel.css';

const Carousel = ({ items, renderItem }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={'auto'}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 }
      }}
      className="custom-swiper"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="carousel-slide">
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
