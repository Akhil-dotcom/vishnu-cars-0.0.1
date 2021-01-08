import React from 'react'
import './WhatsNew.scss'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use(Pagination);
function WhatsNew() {
    return (
        <div className='whatsnew'>
            <div className="whatsnew__main">
                <div className="whatsnew__top">
                    <div className="whatsnew__left">
                        <div className="sub">News</div>
                        <div className='head'>What's new in the world of Driving.</div>
                        <div className='body'>Technology has made everything easy including learning to drive.</div>
                        <ThumbUpIcon className='icon' />
                    </div>
                    <div className="whatsnew__right">
                        <div className="whatsnew__right__content">
                            <div className="image"><img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt=" " /></div>
                            <div className="whatsnew__right__head">Learn from certified professionals</div>
                            <div className='whatsnew__right__body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                            <VerifiedUserIcon className="whatsnew__right__icon" />
                        </div>
                        <div className="whatsnew__right__content">
                            <div className="image"><img src=" https://images.unsplash.com/photo-1518987048-93e29699e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=" " /></div>
                            <div className="whatsnew__right__head">Stimulater based learning</div>
                            <div className='whatsnew__right__body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                            <DriveEtaIcon className="whatsnew__right__icon" />
                        </div>
                    </div>
                </div>
                <div className="whatsnew__bottom">
                    <div className="testimonial">
                        <div className="testimonial__sub">Testimonials</div>
                        <div className="testimonial__head">The Opinion of students who learned from us.</div>
                        <Swiper className="swiper__card" pagination={{ clickable : 'true' }}  slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. className="person__opinion" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                <div className="name">Akhil Raj</div>
                            </SwiperSlide>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. className="person__opinion" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                <div className="name">Akhil Raj</div>
                            </SwiperSlide>
                            <SwiperSlide className='slide'>
                                <div className="person__opinion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                                <div className="name">Akhil Raj</div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsNew
