"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import ProductCard from '@/components/Products/ProductCard'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { itemFromBottom } from '@/components/motionStyles/motions'


function page() {

    const items = [
        {
            title: 'ONION',
            img: '/home/onion.jpg',
        },
        {
            title: 'COFFEE',
            img: '/home/coffee.jpg'
        },
        {
            title: 'coconut-fibre',
            img: '/home/fibre.jpg'
        },
        {
            title: 'salt',
            img: '/home/salt.jpg'
        },
        {
            title: 'rice',
            img: '/home/rice.jpg'
        },
        {
            title: 'pulses',
            img: '/home/wheat.png'
        },
        {
            title: 'tea',
            img: '/home/tea.jpg'
        },
        {
            title: 'chilly',
            img: '/home/chilly.jpg'
        },
        {
            title: 'coconut',
            img: '/home/coconut.jpg'
        },
        {
            title: 'lemon',
            img: '/home/lemon.jpg'
        },
        {
            title: 'spices',
            img: '/home/spices2.jpg'
        },
        {
            title: 'puffened rice flakes (pori avil)',
            img: '/riceFlakes.jpeg'
        },
        {
            title: 'jackfruit',
            img: '/home/jf1.jpg'
        },


    ]

    const [search, setSearch] = useState(null)
    const [filteredProducts, setFiltered] = useState([])
    console.log(search, '[[[[')


    useEffect(() => {
        if (search) {
            setTimeout(() => {

                const arr = items.filter((item, index) => {
                    return item.title.toLowerCase().includes(search)
                })
                setFiltered(arr)
                console.log(arr)
            }, 1000);
        }
    }, [search])


    const dispatch = useDispatch()
    const router = useRouter()

    const navigateToWhatsapp = () => {
        // dispatch(setActiveTab({ activeTab: 'CONTACT US' }))
        // router.push('https://wa.me/918156866089 ')
        window.open(`https://wa.me/918156866089?text=Hello Bonvo! I would like to know more about your service`)

    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center my-20 font-mono text relative'>
            <input type="text" className='w-[50%] px-2 py-1 rounded-lg font-serif md:mt-16 md:mb-5' placeholder='Search for item' onChange={(e) => setSearch(e.target.value)} />
            <div className='w-[80%] grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1'>
                {
                    !search ? items?.map((item, index) => (
                        <motion.div key={index}
                            variants={itemFromBottom}
                            custom={1}
                            initial='hidden'
                            whileInView={'visible'}
                            exit={'hidden'}

                            onClick={navigateToWhatsapp}>
                            {console.log(item, 'wwwwwwww')}
                            <ProductCard name={item.title} image={item.img} />
                        </motion.div>

                    ))
                        : filteredProducts?.map((item, index) => (
                            <motion.div key={index}
                                variants={itemFromBottom}
                                custom={1}
                                initial='hidden'
                                whileInView={'visible'}
                                exit={'hidden'}
                                onClick={navigateToWhatsapp}>

                                <ProductCard name={item?.title} image={item?.img} />
                            </motion.div>

                        ))
                }

            </div>
        </div >
    )
}

export default page