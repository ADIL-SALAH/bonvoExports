"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { itemFromBottom } from '../motionStyles/motions'

function OurProducts() {

    const serviceList = [
        {
            title: 'SPICES EXPORT',
            image: '/home/spices.jpg',
            desc: `Specializing in spices export, we excel in sourcing and delivering a diverse array of aromatic treasures from the heart of India.
             With meticulous care, we ensure that each spice retains its inherent freshness and flavor, 
             promising an exquisite culinary experience for our global clientele.`
        },

        {
            title: 'COCONUT EXPORT',
            image: '/home/coco.jpg',
            desc: `Specializing in coconut export, we pride ourselves on expertly sourcing and delivering a diverse range of premium-quality coconuts. 
            From selection to transportation, we ensure each coconut maintains its natural freshness and taste, 
            embodying the essence of tropical indulgence for our valued customers worldwide.`
        },
        {
            title: 'GRAINS EXPORT',
            image: '/home/grains.jpg',
            desc: `Specializing in grains export, we are dedicated to sourcing and delivering a diverse selection of top-quality grains.
             Every grain is meticulously chosen and handled to preserve its natural freshness and flavor,
             ensuring that our customers receive nothing but the finest products for their culinary endeavors.`
        },
        {
            title: 'fresh FRUIT & veg EXPORT',
            image: '/home/veg.jpg',
            desc: `Our expertise lies in the efficient exportation of a diverse range of fruits, 
            carefully selected and transported to maintain their natural freshness and taste.`
        },

    ]

    const router = useRouter()
    const dispatch = useDispatch()
    const redirectToProducts = () => {
        router.push('/products')
        dispatch(setActiveTab({ activeTab: 'PRODUCTS' }))

    }

    return (
        <div className='space-y-10 bg-black bg-opacity-50 p-8 py-10 md:py-28 flex flex-col items-center '>
            <h1 className='text-center font-bold tracking-[1em] underline underline-offset-8 text-slate-200 md:text-lg '>Our Products</h1>

            <motion.div
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                className='h-full w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10  md:p-5 '>
                {/* <div className='grid grid-cols-1 w-full '> */}

                {
                    serviceList.map((item, index) => (
                        index != 3 ?
                            <div key={index} className=' flex md:flex-row flex-col justify-center items-center relative p-1 md:hover:scale-105 transition-transform  ' >
                                <div >
                                    <Image alt={item.title} src={item.image} width={600} height={200} className='md:h-[350px] lg:w-[300px] w-[500px] h-[200px]  rounded-t-xl md:rounded-xl' />
                                </div>
                                <div className='card md:w-60 w-full md:h-80 min-h-60 md:absolute right-100  md:rounded-xl rounded-b-xl md:border-slate-700  p-5 md:hover:scale-90 transition-transform flex flex-col justify-center'>
                                    <h4 className=' uppercase font-semibold text-lg '>
                                        {item.title}
                                    </h4>
                                    <hr className='bg-black h-[1.5px] my-3' />
                                    <p className='text-[13px]'>
                                        {item.desc}
                                    </p>
                                    {/* <div className='absolute bottom-5'>
                                    <button>
                                        Know More..
                                    </button>
                                </div> */}
                                </div>
                            </div>
                            :
                            <div key={index} className='relative lg:block hidden'>
                                <div className=' flex md:flex-row flex-col justify-center items-center relative p-1 105 transition-transform opacity-40 hover:opacity-10' >

                                    <div >
                                        <Image alt={item.title} src={item.image} width={600} height={200} className='md:h-[350px] lg:w-[300px] w-[500px] h-[200px]  rounded-t-xl md:rounded-xl' />
                                    </div>
                                    <div className='card md:w-60 w-full md:h-80 h-60 md:absolute right-100  md:rounded-xl rounded-b-xl md:border-slate-700  p-5 md:hover:scal transition-transform flex flex-col justify-center'>
                                        <h4 className=' uppercase font-semibold text-lg'>
                                            {item.title}
                                        </h4>
                                        <hr className='bg-black h-[1.5px] my-3' />
                                        <p className='text-[13px]'>
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                                <div className='absolute lg:top-40 lg:left-24 md:top-36 md:left-8 top-48 left-24 hover:scale-110 transition-transform lg:block hidden' onClick={redirectToProducts}>
                                    <button className='px-4 py-2 text-sm  space-x-5'>
                                        <span>
                                            View More..
                                        </span>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>
                    ))
                }


            </motion.div>
            <div className=' flex lg:hidden justify-center items-center w-full '>
                <button className='px-4 py-2 text-sm  space-x-5'>
                    <span>
                        See More..
                    </span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div >
    )
}

export default OurProducts