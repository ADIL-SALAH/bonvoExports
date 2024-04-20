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
            text: `Quality in a service or product is not what you put into it. It is what the customer gets out of it`
        },
        {
            icon: faGaugeHigh,
            title: 'PERFORMANCE',
            text: `Don’t lower your expectations to meet your performance. Raise your level of performance to meet your expectations`
        },
        {
            icon: faUser,
            title: 'SERVICES',
            text: `The key is when a customer walks away, thinking, 'Wow, I love doing business with them, and I want to tell others about the experience.`
        },
    ]

    return (
        <div

            className={`bg-slate-200 h-96  p-5 md:flex hidden  text-[#1c3e57] items-center justify-around`}>
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