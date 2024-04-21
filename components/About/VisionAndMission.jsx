"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { itemFromBottom, itemFromLeft, itemFromRight } from '../motionStyles/motions'

function VisionAndMission() {
    return (
        <div className='md:flex lg:space-x-28 md:space-x-10 md:space-y-0 space-y-5 lg:p-20 md:p-10 p-8'>
            <motion.div
                // variants={itemFromLeft}
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                exit={'hidden'}
                className='card lg:w-96 md:w-1/2 lg:h-96 p-10 flex flex-col space-y-5'>
                <h1 className='text-center font-bold tracking-[1em] underline underline-offset-8 text-slate-200 md:text-lg '>Vision</h1>
                <div>
                    <p className='text-sm'>
                        Our vision at Bonvo Exports is to carve a niche for ourselves as a leading exporter of premium quality products from India.
                        We aim to leverage cutting-edge technology,
                        innovative strategies, and a customer-centric approach to drive sustainable growth and create value for all stakeholders.
                    </p>
                </div>
            </motion.div>
            <motion.div
                // variants={itemFromRight}
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                exit={'hidden'}
                className='card lg:w-96 md:w-1/2 lg:h-96 p-10 flex flex-col space-y-5'>
                <h1 className='text-center font-bold tracking-[1em] underline underline-offset-8 text-slate-200 md:text-lg '>mission</h1>
                <div className=''>
                    <p className='text-sm'>
                        Our mission is to establish Bonvo Exports as a trusted partner for customers seeking high-quality products and impeccable service.
                        As a startup, we are committed to agility, adaptability, and responsiveness in meeting the evolving needs of our customers.
                        Through relentless dedication and unwavering determination,
                        we strive to build a reputation for excellence and become a preferred choice in the export market.
                    </p>
                </div>
            </motion.div>
        </div>)
}

export default VisionAndMission