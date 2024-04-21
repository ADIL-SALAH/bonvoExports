"use client"

import React from 'react';
import { motion } from 'framer-motion'
import { itemFromLeft, itemFromRight } from './motionStyles/motions';

function Banner({ image, title, text }) {

    return (
        // <div className="h-screen w-full bg-cover" >
        <div className="bg-[#000000] h-screen opacity-50 flex items-center p-10">
            <motion.div
                // variants={itemFromLeft}
                initial={'hidden'}
                whileInView={'visible'}
                exit={'hidden'}
                className="lg:w-2/3 md:w-2/3 space-y-10">
                <h1 className="text-[#ededed] md:text-5xl text-xl  font-bold">{title}</h1>
                <p className="text-[#ededed] md:text-lg text-sm">{text}</p>
            </motion.div>
            <motion.div
                // variants={itemFromRight}
                initial={'hidden'}
                whileInView={'visible'}
                exit={'hidden'}
                className='md:block hidden'>
                {image?.src ?
                    <img src={image?.src} className='lg:w-[750px] lg:h-[600px]' />
                    : null}
            </motion.div>
        </div>
        // </div>
    );
}

export default Banner;
