"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeCircleCheck, faMailBulk, faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

function Footer() {

    const dispatch = useDispatch()
    const router = useRouter()

    const navbarHandler = (item, navigateTo) => {
        dispatch(setActiveTab({ activeTab: item }))
        router.push(navigateTo)
    }

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

    return (
        <div className='bg-slate-200 min-h-96  p-5 flex md:flex-row flex-col space-y-10  text-[#1c3e57] items-center justify-around '>

            <div className="flex items-center  text-center">
                <img className="h-16 rounded-md" src="logo.png" alt="" />
                {/* <span className="ml-4 uppercase text-[#1c3e57] font-sans text-[16px] font-extrabold tracking-[.5em]">Bonvo <br /> <span className='text-[#fbb500]'>exports</span></span> */}
            </div>
            <div className='space-y-5 '>
                <h6 className='text-[#fbb500] text-sm  '>Navigation</h6>
                <ul className='space-y-4'>
                    {
                        navItems.map((item, index) => (
                            <li key={index} onClick={() => navbarHandler(item.name, item.onclick)} className='text-sm cursor-pointer'>{item.name}</li>

                        ))
                    }

                </ul>
            </div>
            <div className='space-y-5'>
                <h6 className='text-[#fbb500]'>Contact Us</h6>
                <ul className='space-y-4 text-sm'>
                    <li>
                        <b>Office Address:</b> No:321, 2nd floor,<br /> Kooriyad, Malappuram, Kerala, India - 676306
                    </li>
                    <li className='space-x-3'>
                        <FontAwesomeIcon icon={faPhone} /> <span>+91 81568 66089</span>
                    </li>
                    <li className='space-x-3'>
                        <FontAwesomeIcon icon={faEnvelope} /> <span>+91 81378 66089</span>
                    </li>
                    <div className='flex space-x-5 text-lg'>
                        <a href="https://www.instagram.com/bonvo_exports?igsh=MXJ2MDc1NGF6MjdheQ==" className='hover:bg-blue-950 hover:text-white rounded-full px-1  '>

                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61557880301331&mibextid=kFxxJD" className='hover:bg-blue-950 hover:text-white rounded-full px-1  '>

                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="http://www.linkedin.com/in/bonvo-exports-69a832302" className='hover:bg-blue-950 hover:text-white rounded-full px-1  '>

                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        {/* <a href="">

                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a> */}

                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer