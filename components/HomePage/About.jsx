"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { primaryColor } from '@/utils/colorPalette'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from "framer-motion"
import { itemFromBottom, itemFromLeft, itemFromRight } from '../motionStyles/motions'


function About() {

    const router = useRouter()
    const dispatch = useDispatch()
    const navigateToAbout = () => {
        console.log('hellloo')
        dispatch(setActiveTab({ activeTab: 'ABOUT' }))
        router.push('/about')
    }

    return (
        // <div className=''>
        <div className=" flex flex-col items-center md:p-10 p-8 ">
            <div className="w-full max-w-6xl rounded  space-y-14 p-10 lg:p-20 mx-auto text-gray-800  md:text-left">
                <h1 className='text-center font-bold tracking-[1em] underline underline-offset-8 text-slate-200 text-lg  '>OUR STORY</h1>
                <div className="md:flex items-center -mx-10 lg:space-x-10">
                    <motion.div
                        // variants={itemFromLeft}
                        variants={itemFromBottom}
                        initial='hidden'
                        whileInView='visible'
                        exit='hidden'
                        className="w-full md:w-1/2 px-10 mb-10 md:mb-0">

                        <div className="relative z-0">
                            <img src="/home/aboutUs 1.png" className="lg:w-[400px] lg:h-[350px]  z-10" alt="" />
                            <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        // variants={itemFromRight}
                        variants={itemFromBottom}
                        initial='hidden'
                        whileInView={'visible'}
                        exit={'hidden'}
                        className={`bg-[#1c3e57] p-8 text-[#ededed] w-full md:w-1/2  px-8 border-l-blue-500 border-l rounded-2xl `}>
                        <div className="mb-10">
                            {/* <h1 className="font-bold uppercase text-2xl mb-5">ABOUT US</h1> */}
                            <h1 className="font-bold uppercase md:text-2xl text-lg mb-5">Export Quality  <br />Products</h1>
                            <p className="text-sm">
                                Welcome to Bonvo Exports!

                                Based in Malappuram, Kerala, India, Bonvo Exports is your premier destination for high-quality Indian products. Specializing in exports of onions, tea, sugar, spices, grains, and more, we are committed to delivering excellence in every shipment.

                                Driven by innovation and customer satisfaction, Bonvo Exports is a dynamic startup with a focus on integrity and reliability. With years of industry experience, we're poised to make a significant impact in the export trade sector.

                                Join us as we embark on this exciting journey of global trade. Experience the Bonvo difference today!
                                <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                        </div>
                        <div>
                            <div className=" flex text-xs items-center align-bottom mr-5 space-x-5 cursor-pointer" onClick={navigateToAbout}>
                                <span className=" leading-none align-baseline">KNOW MORE..</span>
                                <span className="font-bold leading-none align-baseline"><FontAwesomeIcon icon={faArrowRight} /></span>
                                {/* <span className="text-2xl leading-none align-baseline">.99</span> */}
                            </div>
                            {/* <div className="inline-block align-bottom">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                </div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default About