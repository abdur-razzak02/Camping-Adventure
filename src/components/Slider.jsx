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
    <div className="h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[70vh]">
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
          <div className="flex justify-start items-center h-full md:ml-20 lg:ml-40">
            <div data-aos="fade-right" className=" transition duration-1000"> 
              <h1 className="text-3xl sm:text-5xl xl:text-8xl font-play font-bold ">Join the <br /> <span className="text-orange-500">Adventure </span></h1>
              <h2 className="sm:text-xl mb-3 sm:mb-5 xl:mb-8">Explore. Discover. Create Memories</h2>
              <a href="#allPackages" className="bg-orange-500 py-2 rounded-md font-thin flex items-center gap-1 w-32 justify-center"> Discover <span className="text-xl"> <FiArrowUpRight></FiArrowUpRight> </span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-slide2">
        <div className="flex justify-start items-center h-full md:ml-20 lg:ml-40">
            <div data-aos="fade-right" className=" transition duration-1000">
              <h1 className="text-3xl sm:text-5xl xl:text-8xl font-play font-bold"> Embrace the <br /> <span className="text-orange-500"> Winter Wonderland </span></h1>
              <h2 className="text-sm sm:text-xl mb-3 sm:mb-5 xl:mb-8">Stay Cozy, Adventure Boldly, and Savor the Magic of Snowy Escapes!</h2>
              <a href="#allPackages" className="bg-orange-500 py-2 rounded-md font-thin flex items-center gap-1 w-32 justify-center"> Discover <span className="text-xl"> <FiArrowUpRight></FiArrowUpRight> </span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-slide3">
        <div className="flex justify-start items-center h-full md:ml-20 lg:ml-40">
            <div data-aos="fade-right" className=" transition duration-1000">
              <h1 className="text-3xl sm:text-5xl xl:text-8xl font-play font-bold ">Make Camping <br /> <span className="text-orange-500">More Fun </span></h1>
              <h2 className="text-sm sm:text-xl mb-3 sm:mb-5 xl:mb-8">Gear Up, Explore More, and Create Lasting Memories!</h2>
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
