import React from 'react'
import './Plans.css'
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='strok-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='strok-text'>NOW WITHUS</span>
            </div>

       
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, j) => (
                                <div className="feature" key={j}>
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div><span>See more benefits -></span></div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Plans