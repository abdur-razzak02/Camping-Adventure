// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannerStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="h-[30vh] sm:h-[40vh] md:h-[70vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-slide1">
          <div className="flex justify-center items-center font-bold text-5xl h-full">
            <div data-aos="zoom-in-up"> slide 1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide2">
          <div className="flex justify-center items-center font-bold text-5xl h-full">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide3">
          <div className="flex justify-center items-center font-bold text-5xl h-full">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
