"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { itemFromBottom } from '../motionStyles/motions'

function Who_We_Are() {
    return (
        <div className='bg-slate-200  h-full lg:p-20 p-10 w-full  flex flex-col text-[#1c3e57] items-center justify-center space-y-10'>
            <h4 className='text-center font-bold tracking-[1em] underline underline-offset-8 text-[#1c3e57] md:text-lg text-m '>Who We Are</h4>
            <motion.div
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                exit={'hidden'}
                className='flex flex-col justify-center md:w-4/5 space-y-6'>

                <p className='lg:text-lg text-sm'>
                    Bonvo Exports is a dynamic and forward-thinking startup, dedicated to making a significant impact in the export industry.
                    we are driven by a passion for innovation, quality, and customer satisfaction.


                </p>
                <p className='lg:text-lg text-sm'>
                    {/* As a budding startup headquartered in Kooriyad, Malappuram, Kerala, India, Bonvo Exports is poised to revolutionize the export trade sector.
                    Our team comprises talented professionals with diverse expertise and a shared vision for success.
                    We are committed to fostering a culture of creativity, collaboration, and continuous improvement within our organization. */}
                    Welcome to Bonvo Exports, Your Gateway to Global Trade Excellence!

                    Located in the lush landscapes of Malappuram, Kerala, India, Bonvo Exports is a beacon of quality and reliability in the realm of export trade. Specializing in a diverse array of Indian products including onions, tea, sugar, spices, grains, and more, we are dedicated to facilitating seamless trade connections across the globe.

                    Driven by a passion for innovation and a relentless commitment to customer satisfaction, Bonvo Exports stands as a testament to the power of ambition and entrepreneurial spirit. Despite our recent inception, our team boasts years of collective experience in the export trade sector, equipping us with the expertise needed to deliver unparalleled service to each of our valued clients.

                    At Bonvo Exports, we are guided by a steadfast commitment to integrity, accountability, and reliability. As a dynamic and forward-thinking startup, we embrace challenges as opportunities for growth and are relentless in our pursuit of excellence.
                </p>
            </motion.div>

        </div>
    )
}

export default Who_We_Are