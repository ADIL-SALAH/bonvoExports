"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { itemFromBottom, itemFromLeft, itemFromRight } from '../motionStyles/motions'


function Quote() {


    const router = useRouter()
    const dispatch = useDispatch()
    const navigateToContact = () => {
        dispatch(setActiveTab({ activeTab: 'CONTACT US' }))
        router.push('/contact')
    }

    return (
        <div className='h-96 flex md:flex-row flex-col justify-around items-center lg:p-10 p-10 w-screen'>
            <motion.div
                // variants={itemFromLeft}
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                exit={'hidden'}
                className='text-slate-200 text-center md:w-2/3'>
                <h4>Are you Ready? Get Quote Now!</h4>
                <h4>Get Your Quote or Call: <a href='tel:+91 8156866089' className='text-xl text-yellow-600 hover:underline'>+91 8156866089</a></h4>
            </motion.div>
            <motion.div
                // variants={itemFromLeft}
                variants={itemFromBottom}
                initial='hidden'
                whileInView={'visible'}
                exit={'hidden'}>
                <button className='px-6 py-3 text-sm text-slate-100 rounded-lg hover:bg-yellow-700' onClick={navigateToContact}>
                    Get Quote
                </button>
            </motion.div>
        </div>
    )
}

export default Quote