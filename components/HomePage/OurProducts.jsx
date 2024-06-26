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
            desc: `Unlock the flavors of India with our expertly sourced spices. 
            From farm to table, we ensure freshness and quality for an authentic culinary journey`
        },

        {
            title: 'COCONUT EXPORT',
            image: '/home/coco.jpg',
            desc: `Your gateway to premium coconuts. Experience the pure taste of the tropics with our carefully sourced, fresh coconuts.`
        },
        {
            title: 'GRAINS EXPORT',
            image: '/home/grains.jpg',
            desc: `
            "Enjoy the best grains, fresh and flavorful. From field to plate, we guarantee simplicity and perfection in every bite.`
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
        <div className='space-y-10 bg-black bg-opacity-50 p-16 py-10 md:py-28 flex flex-col items-center '>
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