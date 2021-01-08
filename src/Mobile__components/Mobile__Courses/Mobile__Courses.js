import React from 'react'
import './Mobile__Courses.scss'
import { IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import License from '../../assets/driving-license.svg'

function Mobile__Courses() {
    const Pricing = [
        {
            course: 'Learner Course',
            price: '₹ 7,670'
        },
        {
            course: 'Learner Extended Course',
            price: '₹ 10,030'
        },
        {
            course: 'Learner Detailed Course',
            price: '₹ 11,800'
        },
        {
            course: 'Advance Course',
            price: '₹ 5,900'
        }
    ]
    return (
        <div className="mobile__courses">
            <div className="mobile__courses__head">Courses We offer.</div>
            <div className='course__pricing'>
                {Pricing.map(value => (
                    <div className="course">
                        <div className="left">
                            <img alt='' src={License} />
                        </div>
                        <div className="middle">
                            <div className="middle__head">{value.course}</div>
                            <div className="middle__price">{value.price}</div>
                        </div>
                        <div className="right">
                            <IconButton className="icon__btn">
                                <ArrowForwardIosIcon className="icon" />
                            </IconButton>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Mobile__Courses
