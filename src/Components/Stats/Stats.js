import React from 'react'
import './Stats.scss'
import logo1 from '../../assets/steering-wheel.svg'
import logo2 from '../../assets/car.svg'
import logo3 from '../../assets/clipboard.svg'
import logo4 from '../../assets/recycle.svg'
import CountUp from 'react-countup'
const statsData = [
    {
        id: 1,
        count: '8649',
        title: 'Students are trained every year by our instructor',
        icon: logo1
    },
    {
        id: 2,
        count: '10',
        title: 'Locations in Chennai',
        icon: logo2
    },
    {
        id: 3,
        count: '99.8',
        title: 'Our students pass the state exam the first time',
        icon: logo3
    },
    {
        id: 4,
        count: '3472',
        title: 'Our students drive so many kilometers every days',
        icon: logo4
    },
]

function Stats() {
    return (
        <div className="stats">
            {
                statsData.map((value) => {
                    if (value.id === 1)
                        return (

                            <div className="stats__main" key={value.id}>
                                <div className="stats__content">
                                    <div className="stats__content__count"><img className="img" src={value.icon} alt=""></img><CountUp end={value.count} duration={2.5} delay={0.5} />+</div>
                                    <div className="stats__content__title">{value.title}</div>
                                </div>
                            </div>)
                    else if (value.id === 3)
                        return (

                            <div className="stats__main" key={value.id}>
                                <div className="stats__content">
                                    <div className="stats__content__count"><img className="img" src={value.icon} alt=""></img><CountUp end={value.count} duration={2.5} delay={0.5} />%</div>
                                    <div className="stats__content__title">{value.title}</div>
                                </div>
                            </div>)
                    else
                        return (

                            <div className="stats__main" key={value.id}>
                                <div className="stats__content">
                                    <div className="stats__content__count"><img className="img" src={value.icon} alt=""></img><CountUp end={value.count} duration={2.5} delay={0.5} /></div>
                                    <div className="stats__content__title">{value.title}</div>
                                </div>
                            </div>)

                })
            }
        </div>
    )
}

export default Stats
