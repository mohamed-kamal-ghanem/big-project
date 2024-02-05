import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import "./Slider.css";
import slider4 from "../../../assets/images/prod1.png"
import sliderimg from "../../../assets/images/prod3.png"
import prod3 from "../../../assets/images/prod4.png"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

    return (
        <Swiper
            modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            loop={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className=" slider-background">
                    <div className="swiper-item d-flex flex-row justify-content-center align-items-center">
                        <img
                            className=""
                            src={sliderimg}
                            alt="First slide"
                        />
                        <div className="caption">
                            <h3 className="slider-title">Great Discount !</h3>
                            <p className="slider-text">Up to 50% off your purchase</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className=" slider-background">
                    <div className="swiper-item d-flex flex-row justify-content-center align-items-center">
                        <img
                            className=""
                            src={slider4}
                            alt="First slide"
                        />
                        <div className="caption">
                            <h3 className="slider-title">Great Discount !</h3>
                            <p className="slider-text">Up to 50% off your purchase</p>
                        </div>
                    </div>
                </div>

                
            </SwiperSlide>
            <SwiperSlide>
                <div className=" slider-background">
                    <div className="swiper-item d-flex flex-row justify-content-center align-items-center">
                        <img
                            className=""
                            src={prod3}
                            alt="First slide"
                        />
                        <div className="caption">
                            <h3 className="slider-title">Great Discount !</h3>
                            <p className="slider-text">Up to 50% off your purchase</p>
                        </div>
                    </div>
                </div>

                
            </SwiperSlide>

        </Swiper>
    )
}

export default Slider