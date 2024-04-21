import React from 'react'

function ProductCard({ name, image }) {
    return (
        <div className="flex flex-col justify-center items-center mx-auto my-8 hover:scale-110   transition-transform duration-300  cursor-pointer">
            <div style={{ backgroundImage: `url(${image})` }} className=" h-52 w-64 rounded-lg shadow-md bg-cover bg-center opacity-80  hover:opacity-100 transition-transform duration-300 "></div>
            <div className="w-56 md:max-w-40  -mt-10 shadow-lg rounded-lg overflow-hidden ">
                <div className="text-center tracking-wide text-yellow-400 text-xs font-extrabold uppercase   ">
                    <h1 className='bg-slate-950 animate-pulse'>
                        <span className=' bg-gradient-to-r bg-clip-text text-transparent shadow-2xl from-[#fbb500] to-yellow-200 font-extrabold text-[14px]'>{name}</span></h1>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
