import Image from 'next/image'
import React from 'react'

function ProductCard({ name, image }) {
    return (
        <div className="flex flex-col justify-center items-center mx-auto my-8 hover:scale-110   transition-transform duration-300  cursor-pointer">
            {/* <div style={{ backgroundImage: `url(${image})` }} className=" h-52 w-56 rounded-lg shadow-md bg-cover bg-center opacity-80  hover:opacity-100 transition-transform duration-300 "></div> */}
            <Image src={image} width={300} height={300} alt='image' className=" h-52 w-56 rounded-lg shadow-md bg-cover bg-center opacity-80  hover:opacity-100 transition-transform duration-300 " />
            <div className="w-52 md:max-w-50  -mt-10 shadow-lg rounded-lg overflow-hidden ">
                <div className="text-center  text-yellow-400 text-xs font-extrabold uppercase   ">
                    <h1 className='bg-slate-950 animate-pulse'>
                        <span className=' bg-gradient-to-r bg-clip-text text-transparent shadow-2xl from-[#fbb500] to-yellow-200 tracking-normal font-extrabold text-[14px]'>{name}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
