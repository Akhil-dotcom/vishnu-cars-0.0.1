import React from 'react'
import './Mobile__About.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

function Mobile__About() {
    return (
        <div className="mobile__about">
            <div className="mobile__about__sub">About Us</div>
            <div className="mobile__about__head">Who we are!</div>
            <div className="mobile__about__body">Vishnu Cars Private Limited, is part of “Vishnu Group”, promoted in the year 2001, by Mr Immani Venkata Rao. The Group is diversified into various businesses such as, Automobiles, Warehousing, Constructions etc.<br />Company has won prestigious Platinum Award from M/s Maruti Suzuki India Ltd., consecutively for a period of six years for its overall excellence in Business performance and Customer Service. <br /><br />Prompt and Quality service are key to our success.</div>
            <div className="mobile__about__slide">
                <Swiper className="swiper" spaceBetween={0} loop={true} autoplay={{delay: 700, speed: 500}}  slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide className='slide'>
                        <img src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://images.unsplash.com/photo-1518987048-93e29699e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src="https://images.unsplash.com/photo-1518466088889-82466d82e1ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Mobile__About
