import { faSquareWhatsapp, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function WhatsappButton() {

    const navigateToWhatsapp = () => {
        // dispatch(setActiveTab({ activeTab: 'CONTACT US' }))
        // router.push('https://wa.me/918156866089 ')
        window.open(`https://wa.me/918156866089?text=Hello Bonvo! I would like to know more about your services`)

    }

    return (
        <div onClick={navigateToWhatsapp} className=' fixed lg:bottom-32 lg:right-32 md:bottom-28 md:right-40 bottom-8 right-16 animate-bounc bg-green-700 rounded-full w-14 h-14 flex justify-center items-center shadow-2xl animate-bounce hover:scale-125 '>
            <FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-white  cursor-pointer rounded-full hover:scale-150 transition-transform' />
        </div>
    )
}

export default WhatsappButton