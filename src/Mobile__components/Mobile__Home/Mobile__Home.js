import React from 'react'
import Mobile__Navbar from '../Mobile__Navbar/Mobile__Navbar'
import './Mobile__Home.scss'
import { Button } from '@material-ui/core'
import Mobile__Stats from '../Mobile__Stats/Mobile__Stats';
import Mobile__Yus from '../Mobile__Yus/Mobile__Yus';
import Mobile__About from '../Mobile__About/Mobile__About';
import MobileLogo from '../../assets/mobilelogo.svg'
import Mobile__Courses from '../Mobile__Courses/Mobile__Courses';
import Mobile__Completed from '../Mobile__Completed/Mobile__Completed';
import Main from '../../assets/main_illustration.png'


function Mobile__Home() {
    return (
        <div className="mobile__home">
            <Mobile__Navbar />
            <div className="home__view">
                <div className="home__view__content">
                    <div className="logo"><img src={MobileLogo} /></div>
                    <div className="head__top">Learn Driving</div>
                    <div className="head__bottom">At the Best, from the Best</div>
                    <div className="body">Our meticulously designed courses help transform beginners into skilled and confident drivers. Learn driving at the best, from the best.</div>
                    <Button className="btn">Book Lesson</Button>
                </div>
                <div className="home__image">
                    <img src={Main} alt='' />
                </div>
            </div>
            <Mobile__Stats />
            <Mobile__Yus />
            <Mobile__Courses />
            <Mobile__About />
            <Mobile__Completed />
        </div>
    )
}

export default Mobile__Home
