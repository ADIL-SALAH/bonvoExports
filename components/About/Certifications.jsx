"use client"

import React from 'react'
import Carousal from "@itseasy21/react-elastic-carousel";
import Image from 'next/image'

function Certifications() {
    const items = [
        {
            title: 'coffee board',
            img: '/About/coffeeBoard.jpg'
        },
        {
            title: 'apeda',
            img: '/About/apeda.jpg'
        },
        {
            title: 'directorate general foriegn trade',
            img: '/About/dgft.jpg'
        },
        {
            title: 'food safety and standards authority of india    ',
            img: '/About/fssai.jpg'
        },
        {
            title: 'coconut board of india',
            img: '/About/coconut.jpg'
        },
        {
            title: 'spices board of india',
            img: '/About/spicesBoard.jpg'
        },
        {
            title: 'tea board of india',
            img: '/About/TeaBoard.jpg'
        },
    ]

    const breakPoints = [
        { width: 300, itemsToShow: 1 },
        { width: 668, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 }
    ]

    const customPagination = ({ pages, activePage, onClick }) => (
        <div className='flex justify-center items-center space-x-3 mt-5'>

            {
                pages.map((page, index) => {
                    const isActive = activePage == page
                    return (
                        <div key={index} className={`h-1 w-3 ${isActive ? 'bg-yellow-600' : 'bg-[#1c3e57]'}`} onClick={() => onClick(page)} />

                    )
                })
            }
        </div>
    )
    return (
        <div className=' flex justify-center items-center   w-full h-screen'>

            <Carousal itemsToShow={3} enableAutoPlay breakPoints={breakPoints} renderPagination={customPagination} className='flex justify-center items-center h-[400px] md:w-3/4 w-full'>
                {
                    items.map((item, index) => (
                        <div key={index} className='rounded-xl'>

                            <Image key={index} src={item.img} alt='img' width={400} height={300} className='h-96 w-72 rounded-xl' />
                        </div>
                    ))
                }
            </Carousal>
        </div>

    )
}

export default Certifications