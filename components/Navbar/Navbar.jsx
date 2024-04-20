"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {

    const router = useRouter()

    const { activeTab } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [openNav, setOpenNav] = useState(false)

    const navItems = [
        {
            name: 'HOME',
            onclick: '/'
        },
        {
            name: 'ABOUT',
            onclick: '/about'
        },
        {
            name: 'PRODUCTS',
            onclick: '/products'
        },
        {
            name: 'CONTACT US',
            onclick: '/contact'
        }
    ]

    const navbarHandler = (item, navigateTo) => {
        dispatch(setActiveTab({ activeTab: item }))
        router.push(navigateTo)
        setOpenNav(!openNav)
    }
    return (

        <div className="absolute z-10 top-0  w-screen">
            <div className='md:flex hidden items-center justify-between p-5 pt-10 lg:px-10'>

                <div className="flex items-center  text-center">
                    {/* <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" /> */}
                    <span className="ml-4 uppercase text-slate-200 text-sm font-extrabold tracking-[.5em]">Bonvo <br /> <span className='text-[#fbb500]'>exports</span></span>
                </div>
                <div className=" font-semibold text-[10px]">
                    <ul className="mx-auto flex items-center space-x-10">
                        {
                            navItems.map((item, index) => (
                                <li key={index} className={`px-2 py-1 rounded-md active cursor-pointer  ${activeTab === item.name ? 'text-[#1c3e57] bg-slate-200' : 'text-[#fbb500]'}`} onClick={() => navbarHandler(item.name, item.onclick)}>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`md:hidden  ${openNav ? 'bg-black bg-opacity-80' : ''}`}>
                <div className='flex justify-between items-center p-5 '>

                    <div className="flex items-center  text-center">
                        {/* <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" /> */}
                        <span className="ml-4 uppercase text-blue-400 font-bold">Bonvo <br /> exports</span>
                    </div>
                    <span className='text-[#FFD700] text-lg flex justify-end p-3' onClick={() => setOpenNav(!openNav)}>
                        {
                            openNav ?
                                <FontAwesomeIcon icon={faXmark} />
                                :
                                <FontAwesomeIcon icon={faBars} />
                        }

                    </span>
                </div>
                {
                    openNav ?
                        <div className='w-screen h-96 '>
                            <ul className="mx-auto flex flex-col items-center">
                                {
                                    navItems.map((item, index) => (
                                        <li key={index} className={`p-5 xl:p-8 active cursor-pointer ${activeTab === item.name ? 'text-[#FFD700]' : 'text-slate-200'}`} onClick={() => navbarHandler(item.name, item.onclick)}>
                                            <span>{item.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default Navbar