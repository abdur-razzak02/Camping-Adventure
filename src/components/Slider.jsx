// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowUpRight } from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannerStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]">
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

        {/* <SwiperSlide className="bg-slide1">
          <div className="flex justify-start items-center h-full">
            <div data-aos="fade-right"  className=" transition duration-1000">
              <h1 className="text-7xl font-play font-bold text-orange-500">Join the <br /> <span className="text-white">Adventure </span></h1>
              <h2 className="text-xl mb-8">Explore. Discover. Create Memories</h2>
              <a href="#allPackages" className="bg-orange-500 py-2 rounded-md font-thin flex items-center gap-1 w-32 justify-center"> Discover <span className="text-xl"> <FiArrowUpRight></FiArrowUpRight> </span>
              </a>
            </div>
          </div>
        </SwiperSlide> */}

        {/* <SwiperSlide className="bg-slide2">
        <div className="flex justify-start items-center h-full">
            <div data-aos="fade-right"  className=" transition duration-1000">
              <h1 className="text-7xl font-play font-bold text-theme">Join the <br /> <span className="text-white">Adventure </span></h1>
              <h2 className="text-xl mb-8">Explore. Discover. Create Memories</h2>
              <a href="#allPackages" className="bg-orange-500 py-2 rounded-md font-thin flex items-center gap-1 w-32 justify-center"> Discover <span className="text-xl"> <FiArrowUpRight></FiArrowUpRight> </span>
              </a>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide className="bg-slide3">
        <div className="flex justify-start items-center h-full">
            <div data-aos="fade-right"  className=" transition duration-1000">
              <h1 className="text-7xl font-play font-bold ">Make Camping <br /> <span className="text-orange-500">More Fun </span></h1>
              <h2 className="text-xl mb-8">Gear Up, Explore More, and Create Lasting Memories!</h2>
              <a href="#allPackages" className="bg-orange-500 py-2 rounded-md font-thin flex items-center gap-1 w-32 justify-center"> Discover <span className="text-xl"> <FiArrowUpRight></FiArrowUpRight> </span>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
