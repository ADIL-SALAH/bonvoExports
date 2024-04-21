"use client"

import { faGaugeHigh, faMedal, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import { itemFromBottom } from '../motionStyles/motions'

function Highlights() {



    const items = [
        {
            icon: faMedal,
            title: 'QUALITY',
            text: `True quality isn't about what we invest, but rather, what our customers receive. 
            It's the satisfaction, reliability, and value they experience that truly define the excellence of our service or product.`
        },
        {
            icon: faGaugeHigh,
            title: 'PERFORMANCE',
            text: `Instead of adjusting expectations downward to match performance, elevate your performance to meet and exceed your expectations.
             Challenge yourself to continually raise the bar and achieve greatness.`
        },
        {
            icon: faUser,
            title: 'SERVICES',
            text: `The hallmark of exceptional service lies in leaving customers with a sense of delight and satisfaction. 
            It's about creating experiences that inspire them to not only return but also enthusiastically recommend our services to others.`
        },
    ]

    return (
        <div className={`bg-slate-200 h-96 p-5 md:flex hidden  text-[#1c3e57] items-center justify-around`}>
            {
                items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemFromBottom}
                        initial={'hidden'}
                        whileInView={'visible'}
                        custom={index}
                        className='md:w-1/4 text-center  space-y-5 space-x-2 items-center'>
                        <FontAwesomeIcon icon={item.icon} className='lg:text-4xl ' />
                        <h4 className='lg:text-lg text-sm md:tracking-[.5em] tracking-normal'>{item.title}</h4>
                        <p className='lg:text-[14px] '>{item.text}</p>
                    </motion.div>
                ))
            }

        </div>
    )
}

export default Highlights