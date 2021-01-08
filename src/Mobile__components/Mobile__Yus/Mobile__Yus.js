import React from 'react'
import './Mobile__Yus.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import Lawyer from '../../assets/lawyer.svg'
import Stimulator from '../../assets/simulation.svg'
import Best from '../../assets/best.svg'

// Import Swiper styles
import 'swiper/swiper.scss';

function Mobile__Yus() {
    return (
        <div className="mobile__yus">
            <div className="mobile__yus__head">Why choose Us?</div>
            <Swiper className="swiper" spaceBetween={30} slidesPerView={1.8} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className="slide slide1">
                    <div className="image">
                        <img src={Lawyer} />
                    </div>
                    <div className="slide__head">Learn from professionals</div>
                </SwiperSlide>
                <SwiperSlide className="slide slide2">
                    <div className="image">
                        <img src={Stimulator} />
                    </div>
                    <div className="slide__head">Stimulater based training</div>
                </SwiperSlide>
                <SwiperSlide className="slide slide3">
                    <div className="image">
                        <img src={Best} />
                    </div>
                    <div className="slide__head">Its what we do best.</div>
                </SwiperSlide>
                <SwiperSlide className="slide"></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mobile__Yus
