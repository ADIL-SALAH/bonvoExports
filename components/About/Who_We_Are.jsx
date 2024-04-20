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
                    As a budding startup headquartered in Kooriyad, Malappuram, Kerala, India, Bonvo Exports is poised to revolutionize the export trade sector.
                    Our team comprises talented professionals with diverse expertise and a shared vision for success.
                    We are committed to fostering a culture of creativity, collaboration, and continuous improvement within our organization.
                </p>
            </motion.div>

        </div>
    )
}

export default Who_We_Are